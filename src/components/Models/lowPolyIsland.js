'use client';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const LowPolyIsland = () => {
    const { nodes, materials } = useGLTF('/models/lowPolyIsland.glb');

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
                    position={[0, 771, 0]}
                />
                <group position={[-448, 1210, 353]} rotation={[0, 0.199, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002.geometry}
                        material={materials.IslandBrown}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_1.geometry}
                        material={materials['Grass match texture']}
                    />
                </group>
                <group position={[236.28, 1354.782, 276.556]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={materials['Grass match texture']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_1.geometry}
                        material={materials.IslandBrown}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass001.geometry}
                    material={materials['Grass match texture']}
                    position={[0.6, 1042, 0]}
                />
                <group
                    position={[108, 1347.562, -353]}
                    rotation={[0, 1.426, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube070.geometry}
                        material={materials['Grass match texture']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube070_1.geometry}
                        material={materials.IslandBrown}
                    />
                </group>
                <group position={[-273, 1144.5, -670]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004.geometry}
                        material={materials.Track}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_1.geometry}
                        material={materials.Blue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_2.geometry}
                        material={materials.TrackMiddleLine}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_3.geometry}
                        material={materials.TrackSides}
                    />
                </group>
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/lowPolyIsland.glb');

export default LowPolyIsland;
