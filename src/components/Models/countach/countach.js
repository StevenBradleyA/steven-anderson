'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import LeftAnimatedCountachLight from './leftAnimatedLights';
import LeftAnimatedCountachTrim from './leftAnimatedTrim';
import LeftAnimatedCountachCase from './leftAnimatedCase';
import RightAnimatedCountachCase from './rightAnimatedCase';
import RightAnimatedCountachLight from './rightAnimatedLights';
import RightAnimatedCountachTrim from './rightAnimatedTrim';

const Countach = () => {
    const { nodes, materials } = useGLTF('/models/countach/countach.glb');

    const corsaRed = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xd40000),
        emissive: new THREE.Color(0xd40000),
        emissiveIntensity: 0.4,
    });
    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.2,
    });

    const brakeLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff0000),
        emissive: new THREE.Color(0xff0000),
        emissiveIntensity: 1.1,
    });
    const fogLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffa500),
        emissive: new THREE.Color(0xffa500),
        emissiveIntensity: 0.5,
    });

    return (
        <>
            <group dispose={null}>
                <mesh
                    receiveShadow
                    geometry={nodes.Body001.geometry}
                    material={corsaRed}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.BrakeLights002.geometry}
                    material={brakeLights}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Exhaust002.geometry}
                    material={materials.Silver}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Exhaust003.geometry}
                    material={materials.Trim}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Fogs001.geometry}
                    material={fogLights}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Glass001.geometry}
                    material={materials.Glass}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.tires.geometry}
                    material={materials.Tire}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Wheels.geometry}
                    material={materials.Silver}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.WhiteLights.geometry}
                    material={whiteGlow}
                />
            </group>

            <LeftAnimatedCountachLight />
            <LeftAnimatedCountachTrim />
            <LeftAnimatedCountachCase />
            <RightAnimatedCountachLight />
            <RightAnimatedCountachTrim />
            <RightAnimatedCountachCase />
        </>
    );
};
useGLTF.preload('/models/countach/countach.glb');

export default Countach;
