'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Projects = () => {
    const { nodes, materials } = useGLTF(
        '/models/projects/projectComputers.glb'
    );

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
                    material={materials.ProjectKeeby}
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
                    geometry={nodes.Screen004.geometry}
                    material={materials['Black.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy004.geometry}
                    material={materials['Black.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case004.geometry}
                    material={materials.projectHacktime}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0004.geometry}
                    material={materials['Black.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0004.geometry}
                    material={materials['Black.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0004.geometry}
                    material={materials['Black.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0004.geometry}
                    material={materials['ComputerAccent.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0004.geometry}
                    material={materials['ComputerAccent.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0004.geometry}
                    material={materials['ComputerAccent.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0004.geometry}
                    material={materials['Black.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0004.geometry}
                    material={materials['ComputerAccent.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge004.geometry}
                    material={materials.HacktimeBadge}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge001.geometry}
                    material={materials.BadgeGch}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case001.geometry}
                    material={materials.projectGch}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy001.geometry}
                    material={materials['Black.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0001.geometry}
                    material={materials['Black.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0001.geometry}
                    material={materials['Black.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0001.geometry}
                    material={materials['Black.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0001.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0001.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0001.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0001.geometry}
                    material={materials['Black.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen001.geometry}
                    material={materials['Black.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0001.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[0, 0, -161]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Badge002.geometry}
                    material={materials.BadgeComingSoon}
                    position={[340.497, 1288.929, -560.942]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case002.geometry}
                    material={materials.projectComingSoon}
                    position={[359.797, 1300.797, -568.402]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floppy002.geometry}
                    material={materials['Black.001']}
                    position={[354.033, 1292.401, -550.423]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plug_Black_0002.geometry}
                    material={materials['Black.001']}
                    position={[360.155, 1292.124, -585.542]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_1_Black_0002.geometry}
                    material={materials['Black.001']}
                    position={[367.861, 1284.802, -579.209]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_2_Black_0002.geometry}
                    material={materials['Black.001']}
                    position={[373.37, 1284.802, -574.682]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_3_Accent_0002.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[376.89, 1284.802, -571.789]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_4_Accent_0002.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[363.834, 1284.802, -582.518]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_5_Accent_0002.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[361.928, 1284.802, -584.085]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_6_Black_0002.geometry}
                    material={materials['Black.001']}
                    position={[360.305, 1285.058, -585.418]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen002.geometry}
                    material={materials['Black.001']}
                    position={[351.874, 1307.612, -556.316]}
                    rotation={[0, 0.468, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_Accent_0002.geometry}
                    material={materials['ComputerAccent.001']}
                    position={[360.295, 1296.368, -585.713]}
                    rotation={[0, 0.468, 0]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/projects/projectComputers.glb');
export default Projects;
