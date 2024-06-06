// components/Model.js
'use client';
import React, { useEffect, useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

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
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass.geometry}
                    material={materials['Grass.003']}
                    position={[0, 1042, 0]}
                />
                <group
                    position={[-448, 1210, 353]}
                    rotation={[0, 0.199, 0]}
                    scale={[1.025, 1, 1.318]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002.geometry}
                        material={materials['Grass.005']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_1.geometry}
                        material={materials.IslandBrown}
                    />
                </group>
                <group position={[236.28, 1366, 276.556]} scale={29.743}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={materials['Grass.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_1.geometry}
                        material={materials.IslandBrown}
                    />
                </group>
                <group position={[-981, 1166, -264]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder002_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder002_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[-920, 1174, -412]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder001_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder001_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[-938.605, 1168, -713]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder001_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder001_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[-967, 1161, -382]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder001_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder001_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[-869.45, 1169.798, -901]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder004_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder004_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[-673, 1163, -46]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder001_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder001_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[192, 1362, 348]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder002_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder002_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[346, 1350, 320]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder002_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder002_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[220, 1356, 300]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder001_1.geometry}
                        material={materials['Material.007']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder001_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[-273, 1144.5, -670]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004.geometry}
                        material={materials['BodyBlue.003']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_1.geometry}
                        material={materials.BodyBlue}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2_3_Mat2_0.geometry}
                    material={materials['Mat.2']}
                    position={[847.634, 1282.324, 293.669]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_3_3_Mat2_0.geometry}
                    material={materials['Mat.2']}
                    position={[863.862, 1282.324, 293.669]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_4_Mat2_0.geometry}
                    material={materials['Mat.2_0']}
                    position={[863.835, 1282.324, 293.669]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1_20_Mat1_0.geometry}
                    material={materials['Mat.1']}
                    position={[863.835, 1281.495, 307.884]}
                    rotation={[-0.873, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2_21_Mat1_0.geometry}
                    material={materials['Mat.1']}
                    position={[848.032, 1281.495, 307.884]}
                    rotation={[-0.873, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_3_21_Mat1_0.geometry}
                    material={materials['Mat.1']}
                    position={[880.36, 1281.495, 307.884]}
                    rotation={[-0.873, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_20_Mat1_0.geometry}
                    material={materials['Mat.1']}
                    position={[863.835, 1210.218, 293.669]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1_10_Mat2_0.geometry}
                    material={materials['Mat.2']}
                    position={[880.606, 1282.324, 293.669]}
                    rotation={[0, -1.571, 0]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/lowPolyIsland.glb');
export default LowPolyIsland;
