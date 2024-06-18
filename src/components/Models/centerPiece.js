'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const CenterPiece = () => {
    const { nodes, materials } = useGLTF('/models/centerPiece.glb');

    const blueGlow= new THREE.MeshStandardMaterial({
        color:  new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });

    return (
        <group dispose={null}>
            <RigidBody
                type="fixed"
                position={[0, 0, 0]}
                colliders="trimesh"
                friction={1}
                restitution={0.2}
                name="centerPiece"
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stand.geometry}
                    material={materials.Black}
                />
            </RigidBody>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lowergrid.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.topgrid.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sphere.geometry}
                material={blueGlow}
            />
        </group>
    );
};
useGLTF.preload('/models/centerPiece.glb');

export default CenterPiece;
