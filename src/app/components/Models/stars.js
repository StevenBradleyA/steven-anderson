'use client';
import { useMemo } from 'react';

const Stars = () => {
    const starCount = 2000;

    const stars = useMemo(() => {
        const starsArray = [];
        for (let i = 0; i < starCount; i++) {
            starsArray.push(
                <mesh
                    key={i}
                    position={[
                        Math.random() * 4000 - 2000,
                        Math.random() * 3000 + 800,
                        Math.random() * 4000 - 2000,
                    ]}
                >
                    <sphereGeometry args={[1, 24, 24]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            );
        }
        return starsArray;
    }, [starCount]);

    return <group>{stars}</group>;
};

export default Stars;
