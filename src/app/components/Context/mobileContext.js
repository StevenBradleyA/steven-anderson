'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
const MobileContext = createContext();

export const GlobalMobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const contextValue = {
        isMobile,
    };

    return (
        <MobileContext.Provider value={contextValue}>
            {children}
        </MobileContext.Provider>
    );
};

export const useMobile = () => {
    const context = useContext(MobileContext);
    if (context === undefined) {
        throw new Error('useMobile must be used within a MobileProvider');
    }
    return context;
};
