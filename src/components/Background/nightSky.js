'use client';
import { useEffect, useState } from 'react';

const generateStarPositions = (n) => {
    const positions = [];
    for (let i = 0; i < n; i++) {
        const x = Math.random() * 2000;
        const y = Math.random() * 2000;
        positions.push(`${x}px ${y}px #FFF`);
    }
    return positions.join(', ');
};

export default function NightSky() {
    const [shadowsSmall, setShadowsSmall] = useState('');
    const [shadowsMedium, setShadowsMedium] = useState('');
    const [shadowsBig, setShadowsBig] = useState('');

    useEffect(() => {
        setShadowsSmall(generateStarPositions(700));
        setShadowsMedium(generateStarPositions(200));
        setShadowsBig(generateStarPositions(100));
    }, []);

    return (
        <>
            <div className="starry-background absolute top-0 left-0 right-0 bottom-0">
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
