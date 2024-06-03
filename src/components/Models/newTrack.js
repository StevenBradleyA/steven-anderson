// components/Model.js
'use client';
import React, { useEffect, useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

const NewRaceTrack = () => {
    const { nodes, materials } = useGLTF('/models/newnewTrack.glb');

    const colorMap = useLoader(TextureLoader, '/textures/raceTrackPbr.png');
    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
            name='track'
        >
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass.geometry}
                    material={materials['Grass.001']}
                    position={[0, 1042, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Island.geometry}
                    material={materials.IslandBrown}
                    position={[0, 771, 0]}
                />
                <group position={[0, 1154, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.548, -5.132, 1.244]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle001_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.612, 5.381, 1.144]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle002_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.129, 5.383, 1.144]}
                        rotation={[0, 0, -Math.PI]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle003_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.109, -5.129, 1.244]}
                        rotation={[0, 0, -Math.PI]}
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
                        position={[2.165, 0.044, 0.858]}
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
                        position={[2.548, -5.132, 1.244]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.548, -5.132, 1.244]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_0001.geometry}
                        material={materials['Body.002']}
                        position={[3.33, -5.132, 1.244]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder005_0001.geometry}
                        material={materials['Body.002']}
                        position={[3.394, 5.381, 1.144]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder006_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.612, 5.381, 1.144]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder007_0001.geometry}
                        material={materials['Body.002']}
                        position={[2.612, 5.381, 1.144]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder008_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.129, 5.383, 1.144]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.129, 5.383, 1.144]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.91, 5.383, 1.144]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder011_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.272, 5.383, 1.144]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder012_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.252, -5.129, 1.244]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder013_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.89, -5.129, 1.244]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder014_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.109, -5.129, 1.244]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder015_0001.geometry}
                        material={materials['Body.002']}
                        position={[-2.109, -5.129, 1.244]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
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
                        position={[0.246, -1.676, 2.641]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -1.676, 2.641]}
                        rotation={[0, 1.571, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane002_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -1.676, 2.641]}
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
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006_0001.geometry}
                        material={materials['Body.002']}
                        position={[-3.034, -5.643, 1.414]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, 9.121, 3.358]}
                        rotation={[-1.19, 0, -Math.PI]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane009_0001.geometry}
                        material={materials['Body.002']}
                        position={[0.246, -8.563, 2.62]}
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
                    position={[-600, 1144.78, -500]}
                    rotation={[0, -1.219, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane014.geometry}
                    material={materials.BodyBlue}
                    position={[50, 0, -70]}
                    scale={[40.136, 1.003, 30.102]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_0.geometry}
                    material={nodes.Plane_0.material}
                    position={[0.246, -1.676, 2.641]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.548, -5.132, 1.244]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.612, 5.381, 1.143]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.129, 5.383, 1.143]}
                    rotation={[0, 0, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle003_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.109, -5.129, 1.244]}
                    rotation={[0, 0, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_0.geometry}
                    material={materials.BodyBlue}
                    position={[1.235, 9.125, 2.862]}
                    scale={0.085}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_0.geometry}
                    material={materials.BodyBlue}
                    position={[-0.733, 9.125, 2.862]}
                    scale={0.085}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.548, -5.132, 1.244]}
                    rotation={[0, 1.571, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.548, -5.132, 1.244]}
                    rotation={[0, 1.571, 0]}
                    scale={0.06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_0.geometry}
                    material={materials.BodyBlue}
                    position={[3.33, -5.132, 1.244]}
                    rotation={[0, 1.571, 0]}
                    scale={[0.658, 0.658, 0.098]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005_0.geometry}
                    material={materials.BodyBlue}
                    position={[3.394, 5.381, 1.143]}
                    rotation={[0, 1.571, 0]}
                    scale={[0.658, 0.658, 0.098]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder006_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.612, 5.381, 1.143]}
                    rotation={[0, 1.571, 0]}
                    scale={0.06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder007_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.612, 5.381, 1.143]}
                    rotation={[0, 1.571, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.129, 5.383, 1.143]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.129, 5.383, 1.143]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={0.06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.91, 5.383, 1.143]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={[0.658, 0.658, 0.098]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.272, 5.383, 1.143]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.252, -5.129, 1.244]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder013_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.89, -5.129, 1.244]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={[0.658, 0.658, 0.098]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder014_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.109, -5.129, 1.244]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={0.06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015_0.geometry}
                    material={materials.BodyBlue}
                    position={[-2.109, -5.129, 1.244]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, 8.884, 3.838]}
                    rotation={[1.936, 0, 0]}
                    scale={0.046}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder017_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.525, 8, 1.244]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.393, 0.28, 0.488]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, -1.676, 2.641]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_0.geometry}
                    material={materials.BodyBlue}
                    position={[3.538, 5.895, 1.314]}
                    rotation={[0, 1.571, 0]}
                    scale={0.111}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_0.geometry}
                    material={materials.BodyBlue}
                    position={[3.474, -4.617, 1.414]}
                    rotation={[0, 1.571, 0]}
                    scale={0.111}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, -8.687, 1.384]}
                    scale={[0.755, 0.043, 0.26]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane009_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, -8.563, 2.62]}
                    rotation={[1.473, 0, 0]}
                    scale={0.015}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005_0.geometry}
                    material={materials.BodyBlue}
                    position={[-3.054, 4.869, 1.314]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={0.111}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, -1.676, 2.641]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006_0.geometry}
                    material={materials.BodyBlue}
                    position={[-3.034, -5.643, 1.414]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={0.111}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, -3.075, 3.996]}
                    rotation={[-0.131, -0.181, 0.17]}
                    scale={[0.061, 0.076, 0.161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane007_0.geometry}
                    material={materials.BodyBlue}
                    position={[0.246, 9.121, 3.357]}
                    rotation={[-1.19, 0, -Math.PI]}
                    scale={0.015}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane010_0.geometry}
                    material={nodes.Plane010_0.material}
                    position={[0.246, -8.949, 2.099]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005_0.geometry}
                    material={materials.Material}
                    position={[0.246, -8.864, 2.099]}
                    scale={0.047}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_0.geometry}
                    material={materials.BodyBlue}
                    position={[2.165, 0.044, 0.858]}
                    scale={[0.639, 3.091, 0.185]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/newnewTrack.glb');
export default NewRaceTrack;
