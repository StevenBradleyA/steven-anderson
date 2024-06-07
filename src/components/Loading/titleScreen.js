import React, { useEffect, useState } from 'react';
import { useProgress, Html } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalState } from '../Context/stateContext';
const TitleScreen = () => {
    const { setShowGame } = useGlobalState();
    const { progress } = useProgress();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (progress === 100) {
                setShowGame(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [progress, setShowGame]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className="bg-white w-[100vw] h-[100vh] overflow-hidden text-black flex flex-col justify-center items-center">
                <h1 className="text-blue-600 text-9xl">STEVEN ANDERSON</h1>
                {/* <p>Loading... {progress.toFixed(2)}%</p> */}
                {progress === 100 && <p>Press any key to continue</p>}
            </div>
        </motion.div>
    );
};
export default TitleScreen;
