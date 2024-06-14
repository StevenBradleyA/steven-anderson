'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const HireMeSigns = () => {
    const { nodes, materials } = useGLTF('/models/signs.glb');

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
                <group
                    position={[857.651, 1139.568, -85.219]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
                </group>
                <group
                    position={[838, 1139.568, -162]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
                </group>
                <group
                    position={[819, 1139.568, -233]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
                </group>
                <group
                    position={[801, 1139.568, -297]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
                </group>
                <group
                    position={[784.973, 1138.519, -360.143]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
                </group>
                <group
                    position={[768, 1139.568, -425]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
                </group>
                <group
                    position={[752, 1139.568, -490]}
                    rotation={[3.132, -1.271, -2.907]}
                >
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
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/signs.glb');

export default HireMeSigns;
