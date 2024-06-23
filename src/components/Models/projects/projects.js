'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Projects = () => {
    const { nodes, materials } = useGLTF('/models/projects/computers.glb');

    // const blueGlow= new THREE.MeshStandardMaterial({
    //     color:  new THREE.Color(0x007bff),
    //     emissive: new THREE.Color(0x007bff),
    //     emissiveIntensity: 0.69,
    // });

    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            name="projects"
        >
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge.geometry}
                    material={materials.BadgeKeeby}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen001.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy001.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case001.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge001.geometry}
                    material={materials.HacktimeBadge}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen002.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy002.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case002.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge002.geometry}
                    material={materials.BadgeGch}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen003.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy003.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case003.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge003.geometry}
                    material={materials.BadgeComingSoon}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/projects/computers.glb');
export default Projects;