import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { gsap } from 'gsap';
import Monogram from './Monogram';
import Particles from './Particles';

const Scene = () => {
    const cameraRef = React.useRef();
    const [reduceMotion, setReduceMotion] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduceMotion(mediaQuery.matches);

        if (cameraRef.current && !mediaQuery.matches) {
            // Intro Camera Dolly
            gsap.fromTo(cameraRef.current.position,
                { z: 20, y: 5 },
                { z: 10, y: 0, duration: 2.5, ease: 'power3.out', delay: 1 }
            );
        }
    }, []);

    if (reduceMotion) return null;

    return (
        <div className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={45} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Suspense fallback={null}>
                    <Monogram />
                    <Particles count={500} />
                    <Environment preset="city" />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    {!reduceMotion && (
                        <EffectComposer>
                            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={0.5} />
                            <Noise opacity={0.05} />
                            <Vignette eskil={false} offset={0.1} darkness={1.1} />
                        </EffectComposer>
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
