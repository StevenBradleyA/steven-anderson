'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Ferrari = () => {
    const { nodes, materials } = useGLTF('/models/f40.glb');

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
        emissiveIntensity: 1.2,
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
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
            name="f40"
        >
            <group dispose={null}>
                <mesh geometry={nodes.Body003.geometry} material={corsaRed} />
                <mesh
                    geometry={nodes.BrakeLights003.geometry}
                    material={brakeLights}
                />
                <mesh
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
                    geometry={nodes.Glass003.geometry}
                    material={materials.Glass}
                />
                <mesh
                    geometry={nodes.Headlights.geometry}
                    material={whiteGlow}
                />
                <mesh
                    geometry={nodes.PopupLeftCase.geometry}
                    material={corsaRed}
                />
                <mesh
                    geometry={nodes.PopupRightCase.geometry}
                    material={corsaRed}
                />
                <mesh
                    geometry={nodes.PopupLeftLight.geometry}
                    material={popupHeadlights}
                />
                <mesh
                    geometry={nodes.PopupRightLight.geometry}
                    material={popupHeadlights}
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
                    geometry={nodes.Wheels001.geometry}
                    material={materials.Silver}
                />
                <mesh
                    geometry={nodes.WhiteLights001.geometry}
                    material={whiteGlow}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/f40.glb');

export default Ferrari;
