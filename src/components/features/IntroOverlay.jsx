import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IntroOverlay = ({ onComplete }) => {
    const overlayRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
                // Remove overlay from DOM or just hide it
                if (overlayRef.current) overlayRef.current.style.display = 'none';
            }
        });

        // Initial state
        gsap.set(overlayRef.current, { zIndex: 9999 });

        // Animation sequence
        tl.to(textRef.current, {
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out'
        })
            .to(textRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5
            })
            .to(overlayRef.current, {
                height: 0,
                duration: 1.5,
                ease: 'power4.inOut'
            });

        // Safety timeout
        const timer = setTimeout(() => {
            if (overlayRef.current && overlayRef.current.style.height !== '0px') {
                console.warn("Intro animation timed out, forcing close.");
                if (onComplete) onComplete();
                overlayRef.current.style.display = 'none';
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            ref={overlayRef}
            className="intro-overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <div ref={textRef} style={{ opacity: 0, color: '#fff', fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>
                Muhammad Saad
            </div>
        </div>
    );
};

export default IntroOverlay;
