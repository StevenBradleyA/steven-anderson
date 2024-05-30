'use client';

import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import RaceTrack from './RaceTrack';
import CustomOrbitControls from './CustomOrbit';
import CubeTest from './Models/cubeTest';
import TofuCar from './Models/ae86';

const ThreeScene = () => {
    const isOnFloor = useRef();

    // maybe prevent movement in the air

    // okay so user should be able to adjust height via scroll wheel.
    //switch between custom orbit controls and the Follow camera the second you hit key up or down you snap back to follow camera
    // camera={{ position: [10, 10, 10], near: 0.1, far: 30000 }}
    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Physics gravity={[0, -981, 0]} debug>
                <CustomOrbitControls />
                    <TofuCar />
                    <RaceTrack />
                    {/* <CubeTest /> */}
                </Physics>
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;

{
    /* <FollowCamera
    carRef={carRef}
    frontHelperRef={frontHelperRef}
    backHelperRef={backHelperRef}
/> */
}
