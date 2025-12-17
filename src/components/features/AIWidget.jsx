import React, { useState, useEffect, useRef } from 'react';
import answersData from '../../data/answers.json';

const AIWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addMessage('assistant', answersData.greeting);
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const addMessage = (sender, text) => {
        setMessages(prev => [...prev, { sender, text }]);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        addMessage('user', inputValue);
        const query = inputValue.toLowerCase();
        setInputValue('');
        setIsTyping(true);

        // Simulate network delay
        setTimeout(() => {
            let response = "I'm not sure about that. Try asking about 'skills', 'projects', or 'contact'.";

            // Simple fuzzy match
            for (const key in answersData) {
                if (query.includes(key) || key.includes(query)) {
                    response = answersData[key];
                    break;
                }
            }

            setIsTyping(false);
            addMessage('assistant', response);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Icon */}
            <div
                className="ai-widget-icon glass"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '80px', // Left of audio toggle
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 100,
                    background: 'rgba(107, 168, 255, 0.2)',
                    border: '1px solid var(--color-neon)'
                }}
                data-hover
            >
                <span style={{ fontSize: '1.2rem' }}>🤖</span>
            </div>

            {/* Chat Modal */}
            {isOpen && (
                <div
                    className="ai-chat-modal glass"
                    style={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '20px',
                        width: '350px',
                        height: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 101,
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                >
                    {/* Header */}
                    <div style={{ padding: '15px', borderBottom: '1px solid var(--color-glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)' }}>
                        <span style={{ fontWeight: 'bold' }}>Saad AI Assistant</span>
                        <button onClick={() => setIsOpen(false)} style={{ color: '#fff' }}>✕</button>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    background: msg.sender === 'user' ? 'var(--color-neon)' : 'rgba(255,255,255,0.1)',
                                    color: msg.sender === 'user' ? '#000' : '#fff',
                                    padding: '8px 12px',
                                    borderRadius: '12px',
                                    maxWidth: '80%',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ alignSelf: 'flex-start', color: '#888', fontSize: '0.8rem', fontStyle: 'italic' }}>
                                Saad AI is typing...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div style={{ padding: '15px', borderTop: '1px solid var(--color-glass-border)', display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            style={{ flex: 1, padding: '8px', borderRadius: '4px', border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff' }}
                        />
                        <button onClick={handleSend} style={{ color: 'var(--color-neon)' }}>➤</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIWidget;
