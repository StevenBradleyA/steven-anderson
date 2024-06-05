// components/Model.js
'use client';
import React, { useEffect, useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

const VerticalTrack = () => {
    const { nodes, materials } = useGLTF(
        '/models/newTrackDesignWithLevels.glb'
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
                    position={[0, 771, 0]}
                />
                <group
                    position={[271, 1283, 28]}
                    rotation={[-Math.PI / 2, 0, -2.289]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.548, -5.132, 1.243]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle001_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.612, 5.381, 1.143]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle002_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.129, 5.383, 1.143]}
                        rotation={[0, 0, Math.PI]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle003_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.109, -5.129, 1.243]}
                        rotation={[0, 0, Math.PI]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_0001.geometry}
                        material={materials['Body.002']}
                        position={[1.235, 9.125, 2.862]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_0001.geometry}
                        material={materials['Body.002']}
                        position={[-0.733, 9.125, 2.862]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.165, 0.044, 0.857]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube004_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -3.075, 3.996]}
                        rotation={[-0.131, -0.181, 0.17]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -8.864, 2.099]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube006_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -8.687, 1.384]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.548, -5.132, 1.243]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.548, -5.132, 1.243]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_0001.geometry}
                        material={materials['Body.002']}
                        position={[3.33, -5.132, 1.243]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder005_0001.geometry}
                        material={materials['Body.002']}
                        position={[3.394, 5.381, 1.143]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder006_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.612, 5.381, 1.143]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder007_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.612, 5.381, 1.143]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder008_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.129, 5.383, 1.143]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.129, 5.383, 1.143]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.91, 5.383, 1.143]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder011_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.272, 5.383, 1.143]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder012_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.252, -5.129, 1.243]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder013_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.89, -5.129, 1.243]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder014_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.109, -5.129, 1.243]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder015_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.109, -5.129, 1.243]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder016_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, 8.884, 3.838]}
                        rotation={[1.936, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder017_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.525, 8, 1.244]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -1.676, 2.64]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -1.676, 2.64]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane002_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -1.676, 2.64]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003_0001.geometry}
                        material={materials['Body.002']}
                        position={[3.474, -4.617, 1.414]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_0001.geometry}
                        material={materials['Body.002']}
                        position={[3.538, 5.895, 1.314]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane005_0001.geometry}
                        material={materials['Body.002']}
                        position={[-3.054, 4.869, 1.314]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006_0001.geometry}
                        material={materials['Body.002']}
                        position={[-3.034, -5.643, 1.414]}
                        rotation={[-Math.PI, -1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, 9.121, 3.357]}
                        rotation={[-1.19, 0, Math.PI]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane009_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -8.563, 2.619]}
                        rotation={[1.473, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane010_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -8.949, 2.099]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.outerTrack.geometry}
                    material={materials.BodyBlue}
                    position={[-600, 1144.5, -500]}
                    rotation={[0, -1.219, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tunnelRoad.geometry}
                    material={materials['BodyBlue.003']}
                    position={[-273, 1144.5, -670]}
                    rotation={[Math.PI, -1.56, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass002.geometry}
                    material={materials['Grass.004']}
                    position={[0, 1042, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upperTrack.geometry}
                    material={materials['BodyBlue.004']}
                    position={[-600, 1144.5, -500]}
                    rotation={[0, -1.219, 0]}
                />
                <group
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes
                                .LP_Veh_Sports_10_LP_Veh_Sports_10_Mesh_0230rip004_1
                                .geometry
                        }
                        material={materials['0.049']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes
                                .LP_Veh_Sports_10_LP_Veh_Sports_10_Mesh_0230rip004_2
                                .geometry
                        }
                        material={materials.glass}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes
                            .LP_Veh_Sports_Glass_001_10_LP_Veh_Sports_Glass_001_10_Mesh_0230
                            .geometry
                    }
                    material={materials.glass}
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes
                            .LP_Veh_Sports_Glass_002_10_LP_Veh_Sports_Glass_002_10_Mesh_0230
                            .geometry
                    }
                    material={materials.glass}
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                />
                <group
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes
                                .LP_Veh_Sports_Headlight_002_10_LP_Veh_Sports_Headlight_002_10_M_1
                                .geometry
                        }
                        material={materials['0.049']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes
                                .LP_Veh_Sports_Headlight_002_10_LP_Veh_Sports_Headlight_002_10_M_2
                                .geometry
                        }
                        material={
                            nodes
                                .LP_Veh_Sports_Headlight_002_10_LP_Veh_Sports_Headlight_002_10_M_2
                                .material
                        }
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes
                            .LP_Veh_Sports_Wheel_001_10_LP_Veh_Sports_Wheel_001_10_Mesh_0230
                            .geometry
                    }
                    material={materials.tire}
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes
                            .LP_Veh_Sports_Wheel_002_10_LP_Veh_Sports_Wheel_002_10_Mesh_0230
                            .geometry
                    }
                    material={materials.tire}
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes
                            .LP_Veh_Sports_Wheel_003_10_LP_Veh_Sports_Wheel_003_10_Mesh_0230
                            .geometry
                    }
                    material={materials.tire}
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes
                            .LP_Veh_Sports_Wheel_004_10_LP_Veh_Sports_Wheel_004_10_Mesh_0230
                            .geometry
                    }
                    material={materials.tire}
                    position={[284.755, 1283, -21.368]}
                    rotation={[Math.PI / 2, 0, 0.626]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/newTrackDesignWithLevels.glb');
export default VerticalTrack;
