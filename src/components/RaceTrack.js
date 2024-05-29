// components/Model.js
'use client';

import React, { useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody, Collider } from '@react-three/rapier';
import * as THREE from 'three';

const RaceTrack = () => {
    const { scene } = useGLTF('/raceTrack.glb');
    // useTexture

    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0}
        >
            <primitive object={scene} />
        </RigidBody>
    );
};

export default RaceTrack;
