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
        emissiveIntensity: 0.3,
    });
    const popupHeadlights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.5,
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
                    castShadow
                    receiveShadow
                    geometry={nodes.BrakeLights002.geometry}
                    material={materials.BrakeLights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exhaust002.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Fogs001.geometry}
                    material={materials.Fog}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass001.geometry}
                    material={materials.Glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tires.geometry}
                    material={materials.Tire}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheels.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WhiteLights.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body001.geometry}
                    material={materials.CorsaRed}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exhaust003.geometry}
                    material={materials.Trim}
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
