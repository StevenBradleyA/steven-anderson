'use client';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import PostProcessing from './postProcessing';
const RetroSun = () => {
    const { nodes, materials } = useGLTF('/models/retroSun.glb');
    const sunRef = useRef();

    return (
        <>
            <group dispose={null} position={[-3200, -600, 3200]} scale={1.6}>
                <mesh
                    geometry={nodes.Sun001.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: materials.Sun.color,
                            emissive: new THREE.Color(0xff007f),
                            emissiveIntensity: 0.8,
                        })
                    }
                    ref={sunRef}
                />
            </group>
            <PostProcessing sunRef={sunRef} />
        </>
    );
};
useGLTF.preload('/models/retroSun.glb');

export default RetroSun;
