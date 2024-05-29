'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import RaceTrack from './RaceTrack';
import CustomOrbitControls from './CustomOrbit';
import Cube from './Models/Cube';
import FollowCamera from './FollowCamera';

export const Controls = {
    forward: 'forward',
    back: 'back',
    left: 'left',
    right: 'right',
    jump: 'jump',
};

const ThreeScene = () => {
    const carRef = useRef();
    const isOnFloor = useRef();
    // maybe prevent movement in the air

    // okay so user should be able to adjust height via scroll wheel.
    //switch between custom orbit controls and the Follow camera the second you hit key up or down you snap back to follow camera 

    
    return (
        <Canvas camera={{ position: [10, 10, 10], near: 0.1, far: 30000 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {/* <CustomOrbitControls /> */}
                <Physics gravity={[0, -500, 0]}>
                    <FollowCamera carRef={carRef} />
                    <Cube carRef={carRef} />
                    <RaceTrack />
                </Physics>
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;
