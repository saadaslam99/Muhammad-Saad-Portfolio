import React, { useState, useEffect, createContext, useContext } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

const AudioManager = ({ children }) => {
    const [isMuted, setIsMuted] = useState(true);

    const playSound = (soundName) => {
        if (isMuted) return;
        // In a real implementation, we would play the sound here using Howler or Audio API
        // const audio = new Audio(`/sounds/${soundName}.mp3`);
        // audio.play();
        console.log(`Playing sound: ${soundName}`);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute, playSound }}>
            {children}
            <div
                className="audio-toggle"
                onClick={toggleMute}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 100,
                    cursor: 'pointer',
                    padding: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    backdropFilter: 'blur(5px)'
                }}
            >
                {isMuted ? '🔇' : '🔊'}
            </div>
        </AudioContext.Provider>
    );
};

export default AudioManager;
