// components/Model.js
'use client';

import React from 'react';
import { useGLTF } from '@react-three/drei';

const RaceTrack = () => {
 

    const { scene } = useGLTF('/raceTrack.glb');
    return <primitive object={scene} />;
};

export default RaceTrack;
