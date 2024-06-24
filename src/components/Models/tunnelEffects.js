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

    const { isTunnel, setIsTunnel } = useGlobalState();

    const [targetY, setTargetY] = useState(2.8);
    const [currentY, setCurrentY] = useState(2.8);
    const [currentOpacity, setCurrentOpacity] = useState(0);
    const [targetOpacity, setTargetOpacity] = useState(0);

    const [tunnelIntersections, setTunnelIntersections] = useState(0);

    const handleIntersectionEnter = () => {
        setTunnelIntersections((prev) => {
            const newCount = prev + 1;
            if (newCount > 0) {
                setTargetY(4);
                setTargetOpacity(1);
                setIsTunnel(true);
            }
            return newCount;
        });
    };

    const handleIntersectionExit = () => {
        setTunnelIntersections((prev) => {
            const newCount = prev - 1;
            if (newCount <= 0) {
                setTargetY(1.8);
                setTargetOpacity(0);
                setIsTunnel(false);
            }
            return newCount;
        });
    };

    useFrame(() => {
        setCurrentY((prevY) => {
            const deltaY = targetY - prevY;
            const step = 0.04;
            if (Math.abs(deltaY) < step) {
                return targetY;
            }
            return prevY + Math.sign(deltaY) * step;
        });
        setCurrentOpacity((prevOpacity) => {
            const deltaOpacity = targetOpacity - prevOpacity;
            const step = 0.02;
            if (Math.abs(deltaOpacity) < step) {
                return targetOpacity;
            }
            return prevOpacity + Math.sign(deltaOpacity) * step;
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
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights001.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights002.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights003.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights004.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights005.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights006.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights007.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights008.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights009.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights010.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights011.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights012.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights013.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights014.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights015.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights016.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights017.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights018.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelLights019.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0x007bff),
                            opacity: currentOpacity,
                            transparent: true,
                            emissive: new THREE.Color(0x007bff),
                            emissiveIntensity: 2.5,
                        })
                    }
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
                    position={[300, 0, 350]}
                    args={[200, 15, 150]}
                    rotation={[0, 0.7, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
                <CuboidCollider
                    position={[-450, 0, -150]}
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
