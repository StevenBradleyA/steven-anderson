'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useGlobalState } from '../Context/stateContext';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const LowPolyIsland = ({ trackRef }) => {
    const { nodes, materials } = useGLTF('/models/lowPolyIsland.glb');
    const { nodes: trackNodes, materials: trackMaterials } = useGLTF(
        '/models/driftTrack.glb'
    );

    const { isTunnel, setIsOnGround } = useGlobalState();

    const grassRef = useRef();
    const islandRef = useRef();
    const islandBrown = new THREE.Color(0xa1673d);
    const black = new THREE.Color(0x000000);
    const grass = new THREE.Color(0x538958);
    const [targetProgress, setTargetProgress] = useState(isTunnel ? 1 : 0);
    const [progress, setProgress] = useState(targetProgress);
    const [groundIntersections, setGroundIntersections] = useState(0);

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
        side: THREE.DoubleSide,
    });

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
        if (!isTunnel) {
            setProgress(1);
        }
    }, [isTunnel]);

    useFrame(() => {
        setProgress((prevProgress) => {
            if (isTunnel) {
                return Math.min(prevProgress + 0.02, 1);
            } else {
                return Math.max(prevProgress - 0.02, 0);
            }
        });

        const lerpedGrass = grass.clone().lerp(black, progress);
        const lerpedIsland = islandBrown.clone().lerp(black, progress);

        if (grassRef.current && islandRef.current) {
            grassRef.current.material.color = lerpedGrass;
            islandRef.current.material.color = lerpedIsland;
        }
    });

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
                    geometry={nodes.islandSecondLevel.geometry}
                    ref={islandRef}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: islandBrown,
                            roughness: 1,
                            side: THREE.DoubleSide,
                        })
                    }
                />
                <mesh
                    ref={grassRef}
                    geometry={nodes.Grass.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: grass,
                            roughness: 1,
                            side: THREE.DoubleSide,
                        })
                    }
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
                    material={blueGlow}
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
