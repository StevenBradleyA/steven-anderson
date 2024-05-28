import { useState, useEffect } from 'react';

export const useKeyboardControls = () => {
    const [keys, setKeys] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    setKeys((keys) => ({ ...keys, forward: true }));
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    setKeys((keys) => ({ ...keys, backward: true }));
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    setKeys((keys) => ({ ...keys, left: true }));
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    setKeys((keys) => ({ ...keys, right: true }));
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    setKeys((keys) => ({ ...keys, forward: false }));
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    setKeys((keys) => ({ ...keys, backward: false }));
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    setKeys((keys) => ({ ...keys, left: false }));
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    setKeys((keys) => ({ ...keys, right: false }));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return keys;
};
