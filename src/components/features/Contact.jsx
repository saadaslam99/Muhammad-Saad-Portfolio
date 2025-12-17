import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: 'var(--spacing-xl) 0', marginBottom: '100px' }}>
            <div className="container">
                <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: 'var(--spacing-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>Get In Touch</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)', borderRadius: '8px', color: '#fff' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)', borderRadius: '8px', color: '#fff' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px' }}>Message</label>
                            <textarea rows="4" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)', borderRadius: '8px', color: '#fff' }}></textarea>
                        </div>
                        <button type="submit" className="glass" style={{ padding: '16px', marginTop: 'var(--spacing-sm)', background: 'var(--color-accent)', color: '#000', fontWeight: 'bold' }} data-hover>
                            Send Message
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: 'var(--spacing-md)', fontSize: '0.9rem', color: '#888' }}>
                        I reply within 72 hours. I never share your data.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
