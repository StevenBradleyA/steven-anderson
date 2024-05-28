'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import RaceTrack from './RaceTrack';
import CustomOrbitControls from './CustomOrbit';
import Cube from './Models/Cube';

const ThreeScene = () => {
    return (
        <Canvas camera={{ position: [10, 10, 10], near: 0.1, far: 30000 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <CustomOrbitControls />
                <Physics gravity={[0, -500, 0]}>
                    <Cube />
                    <RaceTrack />
                </Physics>
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;
