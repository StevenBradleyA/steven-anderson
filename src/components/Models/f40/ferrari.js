'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import AnimatedFerrariRightLight from './animatedRightLight';
import AnimatedFerrariRightCase from './animatedRightCase';
import AnimatedFerrariLeftLight from './animatedLeftLight';
import AnimatedFerrariLeftCase from './animatedLeftCase';

const Ferrari = () => {
    const { nodes, materials } = useGLTF('/models/f40/f40.glb');

    const corsaRed = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xd40000),
        emissive: new THREE.Color(0xd40000),
        emissiveIntensity: 0.4,
    });
    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.3,
    });
 

    const brakeLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff0000),
        emissive: new THREE.Color(0xff0000),
        emissiveIntensity: 1.1,
    });
    const fogLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffa500),
        emissive: new THREE.Color(0xffa500),
        emissiveIntensity: 0.3,
    });

    return (
        <>
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body003.geometry}
                    material={corsaRed}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BrakeLights003.geometry}
                    material={brakeLights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exhaust001.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Fogs002.geometry}
                    material={fogLights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass003.geometry}
                    material={materials.Glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Headlights.geometry}
                    material={whiteGlow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Tires.geometry}
                    material={materials.Tire}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Trim003.geometry}
                    material={materials.Trim}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheels001.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WhiteLights001.geometry}
                    material={whiteGlow}
                />
            </group>
            <AnimatedFerrariLeftLight />
            <AnimatedFerrariLeftCase />
            <AnimatedFerrariRightLight />
            <AnimatedFerrariRightCase />
        </>
    );
};
useGLTF.preload('/models/f40/f40.glb');

export default Ferrari;
