'use client';
import React, { createContext, useState, useContext } from 'react';
const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [showGame, setShowGame] = useState(false);
    const [activeCamera, setActiveCamera] = useState('initial');

    return (
        <GlobalStateContext.Provider
            value={{ showGame, setShowGame, activeCamera, setActiveCamera }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error(
            'useGlobalState must be used within a GlobalStateProvider'
        );
    }
    return context;
};