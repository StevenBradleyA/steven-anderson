'use client';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import PostProcessing from './postProcessing';
import { useAudioPlayer } from '../Context/audioContext';

const RetroSun = () => {
    const { nodes, materials } = useGLTF('/models/retroSun.glb');
    const sunRef = useRef();
    const { genre } = useAudioPlayer();

    useEffect(() => {
        if (sunRef.current) {
            const emissive = new THREE.Color(
                genre === 'phonk' ? 0x007bff : 0xff007f
            );
            sunRef.current.material.emissive.set(emissive);
            sunRef.current.material.needsUpdate = true;
        }
    }, [genre]);

    return (
        <>
            <group dispose={null} position={[-3200, -600, 3200]} scale={1.6}>
                <mesh
                    geometry={nodes.Sun001.geometry}
                    material={materials.Sun}
                    ref={sunRef}
                />
            </group>
            <PostProcessing sunRef={sunRef} />
        </>
    );
};
useGLTF.preload('/models/retroSun.glb');

export default RetroSun;
