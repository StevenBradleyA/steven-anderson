'use client';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Tunnel = () => {
    const { nodes, materials } = useGLTF('/models/tunnelEffects.glb');

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
                geometry={nodes.tunnelGrid.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelPlane.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights001.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights002.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights003.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights004.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights005.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights006.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights007.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights008.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights009.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights010.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights011.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights012.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights013.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights014.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights015.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights016.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights017.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights018.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights019.geometry}
                material={materials.White}
            />
        </group>
    );
};
useGLTF.preload('/models/tunnelEffects.glb');
export default Tunnel;
