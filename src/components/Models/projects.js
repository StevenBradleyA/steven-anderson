'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Projects = () => {
    const { nodes, materials } = useGLTF('/models/projects.glb');

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
            friction={1}
            restitution={0.2}
            name="projects"
        >
            <group dispose={null}>
                <mesh
                    geometry={nodes.Plane002.geometry}
                    material={materials['White/50']}
                    position={[418, 1281.582, -36]}
                    rotation={[0, -0.45, 0]}
                />
                <mesh
                    geometry={nodes.Screen.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Floppy.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Case.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    geometry={nodes.Plug_Black_0.geometry}
                    material={materials.Black}
                />{' '}
                <mesh
                    geometry={nodes.Port_1_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_2_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_3_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_4_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_5_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_6_Black_0.geometry}
                    material={materials.Black}
                />{' '}
                <mesh
                    geometry={nodes.Switch_Accent_0.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Badge.geometry}
                    material={materials.BadgeKeeby}
                />
                <mesh
                    geometry={nodes.Text.geometry}
                    material={nodes.Text.material}
                    position={[424, 1291, -47]}
                    rotation={[Math.PI / 2, 0, 2.012]}
                />
                <mesh
                    geometry={nodes.Text001.geometry}
                    material={nodes.Text001.material}
                    position={[483, 1281.582, -15]}
                    rotation={[Math.PI, -1.125, Math.PI]}
                />{' '}
                <mesh
                    geometry={nodes.Text002.geometry}
                    material={nodes.Text002.material}
                    position={[474, 1281.582, -19]}
                    rotation={[Math.PI, -1.125, Math.PI]}
                />
                <mesh
                    geometry={nodes.Screen001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Floppy001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Case001.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    geometry={nodes.Plug_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_1_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_2_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_3_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />{' '}
                <mesh
                    geometry={nodes.Port_4_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_5_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_6_Black_0001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Switch_Accent_0001.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Badge001.geometry}
                    material={materials.HacktimeBadge}
                />
                <mesh
                    geometry={nodes.Screen002.geometry}
                    material={materials.Black}
                />{' '}
                <mesh
                    geometry={nodes.Floppy002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Case002.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    geometry={nodes.Plug_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_1_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_2_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_3_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />{' '}
                <mesh
                    geometry={nodes.Port_4_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_5_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_6_Black_0002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Switch_Accent_0002.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Badge002.geometry}
                    material={materials.BadgeGch}
                />
                <mesh
                    geometry={nodes.Screen003.geometry}
                    material={materials.Black}
                />{' '}
                <mesh
                    geometry={nodes.Floppy003.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Case003.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    geometry={nodes.Plug_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_1_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_2_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Port_3_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />{' '}
                <mesh
                    geometry={nodes.Port_4_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_5_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Port_6_Black_0003.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Switch_Accent_0003.geometry}
                    material={materials.ComputerAccent}
                />
                <mesh
                    geometry={nodes.Badge003.geometry}
                    material={materials.BadgeComingSoon}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/projects.glb');
export default Projects;
