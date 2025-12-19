import React, { useState, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars, Line } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { skillsData, categoryColors } from '../../../data/skills';
import HelixNode from './HelixNode';
import SkillPanel from './SkillPanel';
import * as THREE from 'three';

const SkillDNA = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [hoveredNode, setHoveredNode] = useState(null);

    // Calculate Double Helix Positions
    const { nodes, connections } = useMemo(() => {
        const calculatedNodes = [];
        const lines = [];
        const radius = 2.5;
        const heightSpread = 1.5; // Vertical distance between steps

        // We need pairs of nodes to form the rungs
        // If we have odd number of skills, the last one won't have a pair (that's fine)
        const steps = Math.ceil(skillsData.length / 2);

        for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const angle = t * Math.PI * 4; // 2 full turns
            const y = (i - steps / 2) * heightSpread;

            // Strand A Position
            const x1 = Math.cos(angle) * radius;
            const z1 = Math.sin(angle) * radius;

            // Strand B Position (Offset by PI)
            const x2 = Math.cos(angle + Math.PI) * radius;
            const z2 = Math.sin(angle + Math.PI) * radius;

            // Assign skills to positions
            const skillA = skillsData[i * 2];
            const skillB = skillsData[i * 2 + 1];

            if (skillA) {
                calculatedNodes.push({
                    ...skillA,
                    position: [x1, y, z1],
                    color: categoryColors[skillA.category],
                    strand: 'A'
                });
            }

            if (skillB) {
                calculatedNodes.push({
                    ...skillB,
                    position: [x2, y, z2],
                    color: categoryColors[skillB.category],
                    strand: 'B'
                });
            }

            // Create Rung (Connection between A and B)
            if (skillA && skillB) {
                lines.push({
                    start: [x1, y, z1],
                    end: [x2, y, z2],
                    color: '#444444', // Dark grey for rungs
                    opacity: 0.3
                });
            }

            // Create Backbone connections (Vertical)
            if (i > 0) {
                const prevY = ((i - 1) - steps / 2) * heightSpread;
                const prevAngle = ((i - 1) / steps) * Math.PI * 4;

                const prevX1 = Math.cos(prevAngle) * radius;
                const prevZ1 = Math.sin(prevAngle) * radius;

                const prevX2 = Math.cos(prevAngle + Math.PI) * radius;
                const prevZ2 = Math.sin(prevAngle + Math.PI) * radius;

                // Backbone A
                lines.push({
                    start: [prevX1, prevY, prevZ1],
                    end: [x1, y, z1],
                    color: '#D4AF37', // Gold Backbone
                    opacity: 0.5
                });

                // Backbone B
                lines.push({
                    start: [prevX2, prevY, prevZ2],
                    end: [x2, y, z2],
                    color: '#C0C0C0', // Silver Backbone
                    opacity: 0.5
                });
            }
        }

        return { nodes: calculatedNodes, connections: lines };
    }, []);

    return (
        <section id="skills" style={{ height: '100vh', position: 'relative', background: 'var(--color-bg)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, pointerEvents: 'none' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-text)', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Skill DNA</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Interactive Experience Visualization</p>
            </div>

            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
                <color attach="background" args={['#050505']} />
                <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={45} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C0C0C0" />

                <Suspense fallback={null}>
                    <group position={[0, 0, 0]}>
                        {nodes.map((node, i) => (
                            <HelixNode
                                key={i}
                                node={node}
                                isActive={activeNode === node}
                                isHovered={hoveredNode === node}
                                onClick={() => setActiveNode(node)}
                                onHover={setHoveredNode}
                            />
                        ))}

                        {/* DNA Connections */}
                        {connections.map((line, i) => (
                            <Line
                                key={i}
                                points={[line.start, line.end]}
                                color={line.color}
                                lineWidth={1}
                                transparent
                                opacity={line.opacity}
                            />
                        ))}
                    </group>

                    <Environment preset="city" />
                    <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

                    <EffectComposer>
                        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.5} />
                        <Noise opacity={0.05} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                </Suspense>
            </Canvas>

            <SkillPanel activeNode={activeNode} onClose={() => setActiveNode(null)} />
        </section>
    );
};

export default SkillDNA;
