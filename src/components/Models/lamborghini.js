'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Lamborghini = () => {
    const { nodes, materials } = useGLTF('/models/countach.glb');

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
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
            name="countach"
        >
            <group dispose={null}>
                <mesh
                    geometry={nodes.BrakeLights002.geometry}
                    material={brakeLights}
                />
                <mesh
                    geometry={nodes.CountachLeftPopupCase.geometry}
                    material={corsaRed}
                />
                <mesh
                    geometry={nodes.CountachLeftPopupLights.geometry}
                    material={popupHeadlights}
                />
                <mesh
                    geometry={nodes.CountachLeftPopupTrim.geometry}
                    material={materials.Trim}
                />
                <mesh
                    geometry={nodes.CountachRightPopupCase.geometry}
                    material={corsaRed}
                />
                <mesh
                    geometry={nodes.CountachRightPopupLights.geometry}
                    material={popupHeadlights}
                />
                <mesh
                    geometry={nodes.CountachRightPopupTrim.geometry}
                    material={materials.Trim}
                />
                <mesh
                    geometry={nodes.Exhaust002.geometry}
                    material={materials.Silver}
                />
                <mesh
                    geometry={nodes.Fogs001.geometry}
                    material={fogLights}
                />
                <mesh
                    geometry={nodes.Glass001.geometry}
                    material={materials.Glass}
                />
                <mesh
                    geometry={nodes.tires.geometry}
                    material={materials.Tire}
                />
                <mesh
                    geometry={nodes.Wheels.geometry}
                    material={materials.Silver}
                />
                <mesh
                    geometry={nodes.WhiteLights.geometry}
                    material={whiteGlow}
                />
                <mesh
                    geometry={nodes.Body001.geometry}
                    material={corsaRed}
                />
                <mesh
                    geometry={nodes.Exhaust003.geometry}
                    material={materials.Trim}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/countach.glb');

export default Lamborghini;
