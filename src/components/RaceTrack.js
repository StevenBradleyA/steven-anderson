// components/Model.js
'use client';
import React, { useEffect, useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody, Collider } from '@react-three/rapier';
import * as THREE from 'three';

const RaceTrack = () => {
    const { scene } = useGLTF('/models/raceTrack.glb');
    // const bakedTexture = useTexture('/textures/raceTrackPbr.png');

    // useEffect(() => {
    //     bakedTexture.encoding = THREE.sRGBEncoding; // Ensure correct texture encoding

    //     scene.traverse((child) => {
    //         if (child.isMesh) {
    //             // Ensure the material is using MeshStandardMaterial or MeshPhongMaterial
    //             child.material = new THREE.MeshStandardMaterial({ map: bakedTexture });

    //             // Alternatively, you can use MeshPhongMaterial
    //             // child.material = new THREE.MeshPhongMaterial({ map: bakedTexture });

    //             child.material.needsUpdate = true;
    //         }
    //     });
    // }, [scene, bakedTexture]);


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
