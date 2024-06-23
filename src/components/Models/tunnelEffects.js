'use client';
import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGlobalState } from '../Context/stateContext';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

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
        emissiveIntensity: 2.5,
    });
    const { isTunnel, setIsTunnel } = useGlobalState();
    const [lightColor, setLightColor] = useState(hiddenLights);
    const [targetY, setTargetY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [tunnelIntersections, setTunnelIntersections] = useState(0);

    const handleIntersectionEnter = () => {
        setTunnelIntersections((prev) => {
            const newCount = prev + 1;
            if (newCount > 0) {
                setTargetY(4);
                setIsTunnel(true);
                setLightColor(blueLights);
            }
            return newCount;
        });
    };

    const handleIntersectionExit = () => {
        setTunnelIntersections((prev) => {
            const newCount = prev - 1;
            if (newCount <= 0) {
                setTargetY(0);
                setIsTunnel(false);
                setLightColor(hiddenLights);
            }
            return newCount;
        });
    };

    useFrame(() => {
        setCurrentY((prevY) => {
            const deltaY = targetY - prevY;
            const step = 0.2;
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
                    material={blueGrid}
                    position={[0, currentY, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelPlane.geometry}
                    material={materials.Black}
                    position={[0, currentY, 0]}
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

            <RigidBody
                position={[31, 1155, -200]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[600, 15, 100]}
                    rotation={[0, -0.5, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />

                <CuboidCollider
                    position={[380, 0, 350]}
                    args={[200, 15, 150]}
                    rotation={[0, 0.7, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
                <CuboidCollider
                    position={[-500, 0, -150]}
                    args={[200, 15, 150]}
                    rotation={[0, 0.4, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>
        </>
    );
};
useGLTF.preload('/models/tunnelEffects.glb');
export default TunnelEffects;
