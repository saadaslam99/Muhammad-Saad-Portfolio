import React, { useState } from 'react';
import ScrollManager from '../features/ScrollManager';
import Navbar from './Navbar';
import Cursor from '../features/Cursor';
import AudioManager from '../features/AudioManager';
import Scene from '../3d/Scene';
import IntroOverlay from '../features/IntroOverlay';

const Layout = ({ children }) => {
    const [introComplete, setIntroComplete] = useState(false);

    return (
        <AudioManager>
            <IntroOverlay onComplete={() => setIntroComplete(true)} />
            <ScrollManager />
            <Cursor />
            <Scene />
            <div className="layout-wrapper" style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 1s ease' }}>
                <Navbar />
                <main>{children}</main>
                {/* Footer will go here */}
            </div>
        </AudioManager>
    );
};

export default Layout;
