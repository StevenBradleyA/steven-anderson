'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import RaceTrack from './RaceTrack';
import TofuCar from './Models/ae86';
import NewRaceTrack from './Models/newTrack';
import NewCar from './Models/newCar';


const ThreeScene = () => {
    // <Physics gravity={[0, -981, 0]} debug>
// The X axis is red. The Y axis is green. The Z axis is blue.

    return (
        <Canvas
            gl={{ antialias: true, precision: 'highp' }}
            camera={{
                position: [0, 2000, 0],
                near: 0.1,
                far: 10000,
                fov: 75,
            }}
            onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0);
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Physics gravity={[0, -98.1, 0]} debug>
                    {/* <TofuCar /> */}
                    {/* <RaceTrack /> */}
                    <NewCar />
                    <NewRaceTrack />
                </Physics>
                <axesHelper args={[150]} position={[0, 1200, 0]} />
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;
