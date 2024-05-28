// components/Model.js
'use client';

import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody, Collider } from '@react-three/rapier';
import * as THREE from 'three';

const RaceTrack = () => {
    const { scene } = useGLTF('/raceTrack.glb');

    return (
        <RigidBody type="fixed" position={[0, 0, 0]} colliders="trimesh">
            <primitive object={scene} />
        </RigidBody>
    );
};

export default RaceTrack;
