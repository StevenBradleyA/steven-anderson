'use client';
import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGlobalState } from '../Context/stateContext';

const TunnelEffects = () => {
    const { nodes, materials } = useGLTF('/models/tunnelEffects.glb');

    const blueGrid = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });

    const hiddenLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        opacity: 0,
        transparent: true,
    });
    const blueLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 2,
    });
    const { isTunnel, setIsTunnel } = useGlobalState();
    const [lightColor, setLightColor] = useState(hiddenLights);
    const [targetY, setTargetY] = useState(1256);
    const [currentY, setCurrentY] = useState(1256);

    const handleIntersectionEnter = () => {
        setTargetY(1293);
        setIsTunnel(true);
        setLightColor(blueLights);
    };

    const handleIntersectionExit = () => {
        setTargetY(1256);
        setIsTunnel(false);
        setLightColor(hiddenLights);
    };

    useFrame(() => {
        setCurrentY((prevY) => {
            const deltaY = targetY - prevY;
            const step = 0.5;
            if (Math.abs(deltaY) < step) {
                return targetY;
            }
            return prevY + Math.sign(deltaY) * step;
        });
    });

    return (
        <>
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
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights001.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights002.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights003.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights004.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights005.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights006.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights007.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights008.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights009.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights010.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights011.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights012.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights013.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights014.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights015.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights016.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights017.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights018.geometry}
                    material={lightColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights019.geometry}
                    material={lightColor}
                />
            </group>
        </>
    );
};
useGLTF.preload('/models/tunnelEffects.glb');
export default TunnelEffects;
