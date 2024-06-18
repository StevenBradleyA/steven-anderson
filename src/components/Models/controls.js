'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Controls = () => {
    const { nodes, materials } = useGLTF('/models/controls.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });
    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.2,
    });

    return (
        <group dispose={null}>
            <group />
        </group>
    );
};
useGLTF.preload('/models/controls.glb');

export default Controls;
