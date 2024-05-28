'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import RaceTrack from './raceTrack';
import CustomCamera from './Camera';

const config = { cyberTruck: false };

const ThreeScene = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls />

                <RaceTrack />
                <CustomCamera config={config} />
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;
