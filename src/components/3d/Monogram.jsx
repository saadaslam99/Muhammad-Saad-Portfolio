import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import { gsap } from 'gsap';

const Monogram = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating/breathing handled by Float, but we can add more here if needed
            // meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Center position={[-2, 0, 0]}> {/* Offset to left */}
                <Text3D
                    ref={meshRef}
                    font="/fonts/helvetiker_regular.typeface.json" // We need to provide a font file or use a default
                    size={1.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    {`< />`}
                    <meshPhysicalMaterial
                        thickness={1.5}
                        roughness={0}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        transmission={1}
                        ior={1.5}
                        envMapIntensity={1}
                        color="#ffffff"
                    />
                </Text3D>
            </Center>
        </Float>
    );
};

export default Monogram;
