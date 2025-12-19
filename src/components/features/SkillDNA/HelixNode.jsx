import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { gsap } from 'gsap';

const HelixNode = ({ node, isActive, isHovered, onClick, onHover }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Local floating animation
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;

            // Pulse if hovered
            const scale = isHovered ? 1.5 : 1;
            meshRef.current.scale.lerp({ x: scale, y: scale, z: scale }, 0.1);
        }
    });

    const handlePointerOver = (e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
        onHover(node);
    };

    const handlePointerOut = () => {
        document.body.style.cursor = 'auto';
        onHover(null);
    };

    return (
        <group position={node.position}>
            <mesh
                ref={meshRef}
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                <sphereGeometry args={[0.25 + (node.experience * 0.04), 32, 32]} />
                <meshStandardMaterial
                    color={node.color}
                    emissive={node.color}
                    emissiveIntensity={isHovered ? 2 : 0.2} // Lower base emissive for cleaner look
                    roughness={0.1}
                    metalness={0.9} // High metalness for luxury feel
                />
            </mesh>

            {/* Label on Hover */}
            {isHovered && (
                <Html distanceFactor={10}>
                    <div style={{
                        background: 'rgba(0,0,0,0.9)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        color: node.color,
                        border: `1px solid ${node.color}`,
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        transform: 'translate3d(-50%, -150%, 0)',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        boxShadow: `0 0 15px ${node.color}40`
                    }}>
                        {node.name}
                    </div>
                </Html>
            )}
        </group>
    );
};

export default HelixNode;
