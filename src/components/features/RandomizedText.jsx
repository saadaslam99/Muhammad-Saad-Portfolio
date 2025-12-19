import React, { useState, useEffect, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const RandomizedText = ({ text, className, style }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const animate = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        // Preserve spaces
                        if (text[index] === ' ') return ' ';

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        animate(); // Animate on mount
    }, [text]);

    return (
        <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto', whiteSpace: 'nowrap' }}>
            {/* Invisible placeholder to reserve exact space */}
            <h1
                className={className}
                style={{ ...style, visibility: 'hidden', margin: style.marginBottom || '0', whiteSpace: 'nowrap' }}
            >
                {text}
            </h1>

            {/* Absolute overlay for animation */}
            <h1
                className={className}
                style={{
                    ...style,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    margin: style.marginBottom || '0',
                    cursor: 'default',
                    whiteSpace: 'nowrap'
                }}
                onMouseEnter={animate}
            >
                {displayText}
            </h1>
        </div>
    );
};

export default RandomizedText;
