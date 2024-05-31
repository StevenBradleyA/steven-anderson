'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import RaceTrack from './RaceTrack';
import TofuCar from './Models/ae86';

const ThreeScene = () => {
    return (
        <Canvas
        gl={{ antialias: true, precision: 'highp' }}
            camera={{
                position: [0, 15000, 0],
                near: 0.1,
                far: 20000,
                fov: 75,
            }}
            onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0);
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Physics gravity={[0, -981, 0]} >
                    <TofuCar />
                    <RaceTrack />
                </Physics>
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;
