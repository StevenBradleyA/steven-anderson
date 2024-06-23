'use client';
import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useGlobalState } from '../Context/stateContext';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const LowPolyIsland = ({ trackRef }) => {
    const { nodes, materials } = useGLTF('/models/lowPolyIsland.glb');
    const { nodes: trackNodes, materials: trackMaterials } = useGLTF(
        '/models/driftTrack.glb'
    );

    const black = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x000000),
        roughness: 1,
        side: THREE.DoubleSide,
    });
    const islandBrown = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xa1673d),
        roughness: 1,
        side: THREE.DoubleSide,
    });
    const grass = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x538958),
        roughness: 1,
        side: THREE.DoubleSide,
    });

    const { isTunnel, setIsTunnel, setIsOnGround, isOnGround } =
        useGlobalState();
    const [grassColor, setGrassColor] = useState(grass);
    const [islandColor, setIslandColor] = useState(islandBrown);
    const [groundIntersections, setGroundIntersections] = useState(0);

    const handleOnGround = () => {
        setGroundIntersections((prev) => {
            const newCount = prev + 1;
            if (newCount > 0) {
                setIsOnGround(true);
            }
            return newCount;
        });
    };

    const handleExitGround = () => {
        setGroundIntersections((prev) => {
            const newCount = prev - 1;
            if (newCount <= 0) {
                setIsOnGround(false);
            }
            return newCount;
        });
    };

    useEffect(() => {
        if (isTunnel === true) {
            setGrassColor(black);
            setIslandColor(black);
        } else {
            setGrassColor(grass);
            setIslandColor(islandBrown);
        }
    }, [isTunnel]);

    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
            name="track"
        >
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Island.geometry}
                    material={materials.IslandBrown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.islandSecondLevel.geometry}
                    material={islandColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass.geometry}
                    material={grassColor}
                />
                <CuboidCollider
                    position={[0, 1145, 0]}
                    args={[1000, 5, 1000]}
                    rotation={[0, 0, 0]}
                    onIntersectionEnter={handleOnGround}
                    onIntersectionExit={handleExitGround}
                    sensor
                    name="lower"
                />
                <CuboidCollider
                    position={[0, 1285, 0]}
                    args={[800, 5, 800]}
                    rotation={[0, 0, 0]}
                    onIntersectionEnter={handleOnGround}
                    onIntersectionExit={handleExitGround}
                    sensor
                    name="upper"
                />
                <CuboidCollider
                    position={[-180, 1220, 290]}
                    args={[100, 50, 100]}
                    rotation={[0, -0.6, -0.4]}
                    onIntersectionEnter={handleOnGround}
                    onIntersectionExit={handleExitGround}
                    sensor
                    name="upperRamp"
                />
                <CuboidCollider
                    position={[-30, 1175, 400]}
                    args={[100, 50, 100]}
                    rotation={[0, -0.6, 0]}
                    onIntersectionEnter={handleOnGround}
                    onIntersectionExit={handleExitGround}
                    sensor
                    name="flatRamp"
                />
                <CuboidCollider
                    position={[130, 1140, 510]}
                    args={[130, 50, 100]}
                    rotation={[0, -0.6, -0.3]}
                    onIntersectionEnter={handleOnGround}
                    onIntersectionExit={handleExitGround}
                    sensor
                    name="lowerRampTunnel"
                />
                <CuboidCollider
                    position={[-190, 1135, 550]}
                    args={[160, 50, 100]}
                    rotation={[0, -2.5, -0.3]}
                    onIntersectionEnter={handleOnGround}
                    onIntersectionExit={handleExitGround}
                    sensor
                    name="lowerRamp"
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.grassSecondLevel.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.IslandBrown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_1.geometry}
                    material={materials.IslandBrown}
                />
            </group>

            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={trackNodes.Plane004.geometry}
                    material={trackMaterials.Track}
                    ref={trackRef}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={trackNodes.Plane004_1.geometry}
                    material={trackMaterials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={trackNodes.Plane004_2.geometry}
                    material={trackMaterials.TrackMiddleLine}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={trackNodes.Plane004_3.geometry}
                    material={trackMaterials.TrackSides}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/lowPolyIsland.glb');
useGLTF.preload('/models/driftTrack.glb');

export default LowPolyIsland;
