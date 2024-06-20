'use client';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const LowPolyIsland = ({ trackRef }) => {
    const { nodes, materials } = useGLTF('/models/lowPolyIsland.glb');
    const { nodes: trackNodes, materials: trackMaterials } = useGLTF(
        '/models/driftTrack.glb'
    );

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
                    geometry={nodes.Grass001.geometry}
                    material={materials['Grass match texture']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials['Grass match texture']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.IslandBrown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials.Black}
                />
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
