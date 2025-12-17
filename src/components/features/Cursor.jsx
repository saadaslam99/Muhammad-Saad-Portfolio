import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Hide native cursor
        document.body.style.cursor = 'none';

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        const handleHover = (e) => {
            if (e.target.closest('a, button, [data-hover]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, { scale: 0, duration: 0.3 });
            gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'transparent', duration: 0.3 });
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'var(--color-accent)', duration: 0.3 });
        }
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                ref={followerRef}
                className="cursor-follower"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--color-accent)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transform: 'translate(-50%, -50%)',
                    transition: 'background-color 0.3s, border-color 0.3s'
                }}
            />
        </>
    );
};

export default Cursor;
