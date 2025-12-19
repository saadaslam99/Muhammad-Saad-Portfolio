import React, { useRef, useState } from 'react';
import { Text3D, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

const HeroText3D = () => {
    const textRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (textRef.current) {
            // Subtle floating animation
            textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1; // Very subtle float
        }
    });

    const handlePointerOver = () => {
        setHovered(true);
        document.body.style.cursor = 'pointer';

        // Glass Glow Effect
        if (textRef.current) {
            gsap.to(textRef.current.material, {
                emissiveIntensity: 0.5, // Subtle glow
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    const handlePointerOut = () => {
        setHovered(false);
        document.body.style.cursor = 'auto';

        // Reset
        if (textRef.current) {
            gsap.to(textRef.current.material, {
                emissiveIntensity: 0,
                duration: 0.5
            });
        }
    };

    return (
        <Center position={[0, 0, 0]}>
            <Text3D
                ref={textRef}
                font="/fonts/helvetiker_regular.typeface.json" // Cleaner font
                size={0.8}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.01}
                bevelOffset={0}
                bevelSegments={5}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                MUHAMMAD SAAD
                <meshPhysicalMaterial
                    color="#ffffff"
                    transmission={0.9} // Glass transmission
                    opacity={1}
                    metalness={0}
                    roughness={0}
                    ior={1.5}
                    thickness={0.5}
                    specularIntensity={1}
                    emissive="#BFA56F" // Gold tint
                    emissiveIntensity={0}
                />
            </Text3D>
        </Center>
    );
};

export default HeroText3D;
