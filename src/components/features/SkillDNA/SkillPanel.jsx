import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SkillPanel = ({ activeNode, onClose }) => {
    const panelRef = useRef();

    useEffect(() => {
        if (activeNode) {
            gsap.fromTo(panelRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
            );
        }
    }, [activeNode]);

    if (!activeNode) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: 20
        }} onClick={onClose}>
            <div
                ref={panelRef}
                style={{
                    width: '90%',
                    maxWidth: '500px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${activeNode.color}`,
                    borderRadius: '20px',
                    padding: '40px',
                    color: '#fff',
                    boxShadow: `0 0 50px ${activeNode.color}40`,
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '10px',
                    color: activeNode.color,
                    textShadow: `0 0 20px ${activeNode.color}`
                }}>
                    {activeNode.name}
                </h2>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <span style={{
                        padding: '5px 10px',
                        background: `${activeNode.color}20`,
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        border: `1px solid ${activeNode.color}50`
                    }}>
                        {activeNode.category.toUpperCase()}
                    </span>
                    <span style={{
                        padding: '5px 10px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '20px',
                        fontSize: '0.8rem'
                    }}>
                        Confidence: {Math.round(activeNode.confidence * 100)}%
                    </span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#ccc', marginBottom: '10px' }}>Real World Usage</h4>
                    <ul style={{ paddingLeft: '20px', color: '#aaa' }}>
                        {activeNode.usage.map((item, i) => (
                            <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                    marginTop: '30px'
                }}>
                    <div style={{
                        width: `${activeNode.confidence * 100}%`,
                        height: '100%',
                        background: activeNode.color,
                        borderRadius: '2px',
                        boxShadow: `0 0 10px ${activeNode.color}`
                    }} />
                </div>
            </div>
        </div>
    );
};

export default SkillPanel;
