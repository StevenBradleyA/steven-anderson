'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const StreetLights = () => {
    const { nodes, materials } = useGLTF('/models/streetLights.glb');

    const yellowTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffd700),
        opacity: 0.2,
        transparent: true,
        emissive: new THREE.Color(0xffd700),
        emissiveIntensity: 0.8,
    });

    return (
        <>
            <RigidBody type="fixed" colliders="cuboid" name="streetLights">
                <group dispose={null}>
                    <mesh
                        geometry={nodes.lightMounts.geometry}
                        material={materials.DarkGray}
                    />
                    <mesh
                        geometry={nodes.mainBlock.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        geometry={nodes.lightFixtures.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        geometry={nodes.pole.geometry}
                        material={materials.Silver}
                    />

                    <mesh
                        geometry={nodes.lightMounts001.geometry}
                        material={materials.DarkGray}
                    />
                    <mesh
                        geometry={nodes.mainBlock001.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        geometry={nodes.lightFixtures001.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        geometry={nodes.pole001.geometry}
                        material={materials.Silver}
                    />

                    <mesh
                        geometry={nodes.lightFixtures002.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        geometry={nodes.lightMounts002.geometry}
                        material={materials.DarkGray}
                    />
                    <mesh
                        geometry={nodes.mainBlock002.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        geometry={nodes.pole002.geometry}
                        material={materials.Silver}
                    />
                </group>
            </RigidBody>
            <group>
                <mesh
                    geometry={nodes.lightCone001.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightCone2001.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightHexagons001.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightCone002.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightCone2002.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightHexagons002.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightCone.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightCone2.geometry}
                    material={yellowTransparent}
                />
                <mesh
                    geometry={nodes.lightHexagons.geometry}
                    material={yellowTransparent}
                />
            </group>
        </>
    );
};
useGLTF.preload('/models/streetLights.glb');

export default StreetLights;
