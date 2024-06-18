'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const HireMeSigns = () => {
    const { nodes, materials } = useGLTF('/models/hireMeSigns.glb');

    return (
        <RigidBody
            // type="dynamic"
            type="fixed"
            // mass={0.5}
            colliders="cuboid"
            // friction={0.1}
            // restitution={1}
            name="signs"
            // onWake={}
        >
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007_1.geometry}
                    material={materials.HireMe}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009_1.geometry}
                    material={materials.HireMeFullStack}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013_1.geometry}
                    material={materials.HireMeFrontEnd}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014_1.geometry}
                    material={materials.HireMe}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008_1.geometry}
                    material={materials.HireMeFullStack}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030_1.geometry}
                    material={materials.HireMeFrontEnd}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034.geometry}
                    material={materials.SignColor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034_1.geometry}
                    material={materials.HireMe}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/hireMeSigns.glb');

export default HireMeSigns;
