'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Siegmeyer = () => {
    const { nodes, materials } = useGLTF('/models/siegmeyer.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_76.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_78.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_79.geometry}
                material={materials['Siegmeyer Mesh']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_80.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_81.geometry}
                material={materials['Siegmeyer Mesh']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_84.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_88.geometry}
                material={materials['Siegmeyer Mesh']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_89.geometry}
                material={materials['Siegmeyer Mesh']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_76001.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77001.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77002.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_78001.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77003.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77004.geometry}
                material={materials.Siegmeyer}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SmallSun.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    nodes['Siegmeyer_mesh_Object08_Material_#45_0002'].geometry
                }
                material={materials['Siegmeyer Mesh']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    nodes['Siegmeyer_mesh_Object08_Material_#45_0002_1']
                        .geometry
                }
                material={materials.Siegmeyer}
            />
        </group>
    );
};
useGLTF.preload('/models/siegmeyer.glb');

export default Siegmeyer;
