'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const StreetLightCones = () => {
    const { nodes, materials } = useGLTF('/models/streetLightCones.glb');

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StreetLightTest001.geometry}
                material={materials.ConePurple}
                position={[619.981, 1127.247, 665]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StreetLightTest005.geometry}
                material={materials.ConePurple}
                position={[732, 1127.247, 639]}
                rotation={[Math.PI, -0.142, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StreetLightTest006.geometry}
                material={materials.coneBlue}
                position={[-812, 1127.247, 745.469]}
                rotation={[Math.PI, -0.727, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StreetLightTest007.geometry}
                material={materials.ConeLight}
                position={[-840.939, 1127.247, -760.415]}
                rotation={[0, -0.904, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rectangleCone.geometry}
                material={materials.ConeLight}
                position={[-785, 1159, -698]}
                rotation={[0, 1.33, 0]}
            />
        </group>
    );
};
useGLTF.preload('/models/streetLightCones.glb');

export default StreetLightCones;
