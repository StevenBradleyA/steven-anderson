'use client';
import { useEffect, useState } from 'react';

const generateStarPositions = (n, width, height) => {
    const positions = [];
    for (let i = 0; i < n; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        positions.push(`${x}px ${y}px #FFF`);
    }
    return positions.join(', ');
};

export default function NightSky() {
    const [shadowsSmall, setShadowsSmall] = useState('');
    const [shadowsMedium, setShadowsMedium] = useState('');
    const [shadowsBig, setShadowsBig] = useState('');

    useEffect(() => {
        const updateStarPositions = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setShadowsSmall(generateStarPositions(700, width, height));
            setShadowsMedium(generateStarPositions(200, width, height));
            setShadowsBig(generateStarPositions(100, width, height));
        };

        updateStarPositions();
        window.addEventListener('resize', updateStarPositions);

        return () => window.removeEventListener('resize', updateStarPositions);
    }, []);

    return (
        <>
            <div className=" absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
                <div
                    className="starsSmall"
                    style={{ boxShadow: shadowsSmall }}
                ></div>
                <div
                    className="starsMedium"
                    style={{ boxShadow: shadowsMedium }}
                ></div>
                <div
                    className="starsLarge"
                    style={{ boxShadow: shadowsBig }}
                ></div>
            </div>
        </>
    );
}
