'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const RetroStands = () => {
    const { nodes, materials } = useGLTF('/models/retroStands.glb');

    const blueGlow= new THREE.MeshStandardMaterial({
        color:  new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.8,
    });

    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
            name="retroStands"
        >
            <group dispose={null}>
                <mesh
                    geometry={nodes.Stand.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.WireFrame.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.Stand001.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.WireFrame001.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.Stand002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.WireFrame002.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.upperLevelHills006.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.RetroEvergreen.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.upperLevelHills002.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.RetroEvergreen002.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.Cube032.geometry}
                    material={materials['Black.002']}
                />
                <mesh
                    geometry={nodes.Cube032_1.geometry}
                    material={materials['Black.002']}
                />
                <mesh
                    geometry={nodes.conifer2_Cylinder002.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.conifer2_Cylinder002_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Cube031.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.Cube031_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.conifer2_Cylinder012.geometry}
                    material={materials.Black}
                />
                <mesh
                    geometry={nodes.conifer2_Cylinder012_1.geometry}
                    material={materials.Black}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/retroStands.glb');

export default RetroStands;
