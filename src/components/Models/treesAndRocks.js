'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const TreesAndRocks = () => {
    const { nodes, materials } = useGLTF('/models/treesAndRocks.glb');

    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
            name="trees"
        >
            <group dispose={null}>
                <group
                    position={[-181, 1162.081, -952]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder003.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder003_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-621, 1167.695, 489]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder003.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder003_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[983, 1159.742, -13.79]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder002.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder002_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[898, 1158.741, 866]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder002.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder002_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-590, 1168.462, 553]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder001.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder001_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-674, 1156.777, 463]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder003.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder003_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[983, 1169, 58]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder004.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder004_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-695, 1159.742, -13.79]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder003.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder003_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-973, 1157.243, -324]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder003.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder003_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[899, 1156.777, -901]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder004.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder004_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-953.903, 1167.695, -250]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder005.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder005_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-991.729, 1162.081, -217]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder005.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder005_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-881, 1167.695, 878]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder006.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder006_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-910, 1157.243, 814]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder004.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder004_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-825.964, 1156.777, 835]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder005.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer6_Cylinder005_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[957, 1168.462, 840]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder002.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder002_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-953.903, 1167.695, -800]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder007.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder007_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-991.729, 1162.081, -764]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder006.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer1_Cylinder006_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-953.903, 1167.695, -707]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder008.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder008_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-57, 1159.742, -945]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder004.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder004_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-122, 1167.695, -983]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder009.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder009_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[933, 1168.462, 897]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder003.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder003_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-914.48, 1159.742, -920]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder005.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer3_Cylinder005_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[907, 1158.825, 781]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder005.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder005_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[958, 1157.243, 19]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder006.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder006_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[924, 1168.462, -947]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder007.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder007_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[945, 1167.695, -906]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder010.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder010_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-725.011, 1304.347, 101.432]}
                    rotation={[Math.PI / 2, 0, 0.326]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder001.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder001_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-717.761, 1297.4, 146]}
                    rotation={[Math.PI / 2, 0, 0.326]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder007.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer4_Cylinder007_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[-750.228, 1309.606, 140.411]}
                    rotation={[Math.PI / 2, 0, 0.326]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder004.geometry}
                        material={materials.ConiferGreen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer5_Cylinder004_1.geometry}
                        material={materials.ConiferBrown}
                    />
                </group>
                <group
                    position={[332, 1179.196, 635]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder001.geometry}
                        material={materials.Blue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder001_1.geometry}
                        material={materials.Blue}
                    />
                </group>
                <group
                    position={[332, 1179.196, 635]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder002.geometry}
                        material={materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder002_1.geometry}
                        material={materials.Black}
                    />
                </group>
                <group
                    position={[487, 1179.196, 697]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder011.geometry}
                        material={materials.Blue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder011_1.geometry}
                        material={materials.Blue}
                    />
                </group>
                <group
                    position={[487, 1179.196, 697]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder012.geometry}
                        material={materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.conifer2_Cylinder012_1.geometry}
                        material={materials.Black}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_2001.geometry}
                    material={materials.Stone}
                    position={[956, 1142, -870]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_7001.geometry}
                    material={materials.Stone}
                    position={[984, 1143, 88.665]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type2_02_mesh002.geometry}
                    material={materials.Stone}
                    position={[-895, 1143.285, 756]}
                    rotation={[-Math.PI, 1.564, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type2_03_mesh001.geometry}
                    material={materials.Stone}
                    position={[882.326, 1145, 906]}
                    rotation={[0, -0.95, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type4_04_mesh002.geometry}
                    material={materials.Stone}
                    position={[920, 1140.3, -887]}
                    rotation={[0, -1.537, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type6_01_mesh002.geometry}
                    material={materials.Stone}
                    position={[-964, 1140.921, -758]}
                    rotation={[Math.PI, -0.05, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_6001.geometry}
                    material={materials.Stone}
                    position={[876, 1143.119, 851]}
                    rotation={[Math.PI, -1.186, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_7002.geometry}
                    material={materials.Stone}
                    position={[929, 1143.512, 806]}
                    rotation={[0, 1.198, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_7002.geometry}
                    material={materials.Stone}
                    position={[950, 1141.38, 332]}
                    rotation={[0, 0.276, 0]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/treesAndRocks.glb');

export default TreesAndRocks;
