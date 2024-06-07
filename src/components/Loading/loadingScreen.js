import React, { useEffect, useState } from 'react';
import { useProgress, Html } from '@react-three/drei';

const LoadingScreen = ({ setIsLoaded }) => {
    const { progress, item, loaded, total, errors } = useProgress();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && progress === 100) {
                setIsLoaded(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [progress, setIsLoaded]);

    return (
        <Html center >
             <div className="bg-white w-[100vw] h-[100vh] overflow-hidden text-black flex justify-center items-center" >
                <p>Loading... {progress.toFixed(2)}%</p>
                {item && <p>Loading item: {item}</p>}
                <p>
                    {loaded} / {total} items loaded
                </p>
                {errors.length > 0 && (
                    <div className="error-messages">
                        <p>Errors:</p>
                        <ul>
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {progress === 100 && <p>Press Enter to continue</p>}
            </div>
        </Html>
    );
};
export default LoadingScreen;
