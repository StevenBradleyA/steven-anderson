'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MechanicalKeyboard = () => {
    const { nodes, materials } = useGLTF('/models/mechanicalKeyboard.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Silver}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Specials1.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Specials4.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Specials5.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Specials2.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Specials3.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Feet.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Case005.geometry}
                material={materials.Trim}
            />
        </group>
    );
};
useGLTF.preload('/models/mechanicalKeyboard.glb');

export default MechanicalKeyboard;
