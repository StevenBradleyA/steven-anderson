'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Mustang = () => {
    const { nodes, materials } = useGLTF('/models/mustang.glb');

    // const blueGlow = new THREE.MeshStandardMaterial({
    //     color: new THREE.Color(0x007bff),
    //     emissive: new THREE.Color(0x007bff),
    //     emissiveIntensity: 1.5,
    // });

    return (
        <group dispose={null}>
            <mesh geometry={nodes.Disks.geometry} material={materials.Silver} />
            <mesh
                geometry={nodes.Glass002.geometry}
                material={materials.Glass}
            />
            <mesh
                geometry={nodes.Tires_and_wheels.geometry}
                material={materials.Tire}
            />
            <mesh
                geometry={nodes.HeadLamps.geometry}
                material={nodes.HeadLamps.material}
            />
            <mesh
                geometry={nodes.BrakeLights001.geometry}
                material={materials.Red}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Trim001.geometry}
                material={materials.Trim}
            />
            <mesh
                geometry={nodes.LP_Veh_Muscle_11_Mesh_0577rip004.geometry}
                material={materials.Blue}
            />
            <mesh
                geometry={nodes.LP_Veh_Muscle_11_Mesh_0577rip004_1.geometry}
                material={materials.Red}
            />
        </group>
    );
};
useGLTF.preload('/models/mustang.glb');

export default Mustang;
