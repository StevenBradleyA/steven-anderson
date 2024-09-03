'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MechanicalKeyboard = () => {
    const { nodes, materials } = useGLTF('/models/mechanicalKeyboard.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.2,
    });

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.Silver}
            />
            <mesh geometry={nodes.Specials4.geometry} material={blueGlow} />
            <mesh geometry={nodes.Feet.geometry} material={blueGlow} />
            <mesh geometry={nodes.Case005.geometry} material={materials.Trim} />
            <mesh
                geometry={nodes.Specials4002.geometry}
                material={materials.Trim}
            />
        </group>
    );
};
useGLTF.preload('/models/mechanicalKeyboard.glb');

export default MechanicalKeyboard;
