'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Mustang = () => {
    const { nodes, materials } = useGLTF('/models/interests/mustang.glb');

    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xE7E7E7),
        emissive: new THREE.Color(0xE7E7E7),
        emissiveIntensity: 1.5,
    });

    const redGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff0000),
        emissive: new THREE.Color(0xff0000),
        emissiveIntensity: 2.5,
    });

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body002.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Disks.geometry}
                material={materials.Silver}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Glass002.geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tires_and_wheels.geometry}
                material={materials.Tire}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.HeadLamps.geometry}
                material={whiteGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BrakeLights001.geometry}
                material={redGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Trim001.geometry}
                material={materials.Trim}
            />
        </group>
    );
};
useGLTF.preload('/models/interests/mustang.glb');

export default Mustang;
