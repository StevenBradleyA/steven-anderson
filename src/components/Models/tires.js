'use client';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Tires = () => {
    const { nodes, materials } = useGLTF('/models/tires.glb');

    return (
        <RigidBody
            // type="dynamic"
            type="fixed"
            // mass={0.5}
            colliders="cuboid"
            // friction={0.1}
            // restitution={1}
            name="tires"
            // onWake={}
        >
            <group dispose={null}>
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0.geometry}
                    material={materials.White}
                    position={[766, 1145.863, 223]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0.geometry}
                    material={materials.Blue}
                    position={[766, 1148.138, 223]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0.material}
                    position={[766, 1150.545, 223]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0.geometry}
                    material={materials.Blue}
                    position={[766, 1143.455, 223]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0007.geometry}
                    material={materials.White}
                    position={[641.865, 1145.863, -799.79]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0007.geometry}
                    material={materials.Blue}
                    position={[641.865, 1148.138, -799.79]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0007.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0007.material}
                    position={[641.865, 1150.545, -799.79]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0007.geometry}
                    material={materials.Blue}
                    position={[641.865, 1143.455, -799.79]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0014.geometry}
                    material={materials.White}
                    position={[587.897, 1145.863, -867.019]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0014.geometry}
                    material={materials.Blue}
                    position={[587.897, 1148.138, -867.019]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0014.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0014.material}
                    position={[587.897, 1150.545, -867.019]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0014.geometry}
                    material={materials.Blue}
                    position={[587.897, 1143.455, -867.019]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0021.geometry}
                    material={materials.White}
                    position={[-801.274, 1146.663, 679.15]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0021.geometry}
                    material={materials.Blue}
                    position={[-801.274, 1148.938, 679.15]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0021.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0021.material}
                    position={[-801.274, 1151.345, 679.15]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0021.geometry}
                    material={materials.Blue}
                    position={[-801.274, 1144.255, 679.15]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0022.geometry}
                    material={materials.White}
                    position={[-749.107, 1146.663, 747.786]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0022.geometry}
                    material={materials.Blue}
                    position={[-749.107, 1148.938, 747.786]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0022.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0022.material}
                    position={[-749.107, 1151.345, 747.786]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0022.geometry}
                    material={materials.Blue}
                    position={[-749.107, 1144.255, 747.786]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0001.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0001.material}
                    position={[783.6, 1145.863, 206]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0001.geometry}
                    material={materials.Blue}
                    position={[783.6, 1148.138, 206]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0001.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0001.material}
                    position={[783.6, 1150.545, 206]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0001.geometry}
                    material={materials.Blue}
                    position={[783.6, 1143.455, 206]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0008.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0008.material}
                    position={[627.66, 1145.863, -819.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0008.geometry}
                    material={materials.Blue}
                    position={[627.66, 1148.138, -819.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0008.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0008.material}
                    position={[627.66, 1150.545, -819.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0008.geometry}
                    material={materials.Blue}
                    position={[627.66, 1143.455, -819.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0015.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0015.material}
                    position={[569.21, 1145.863, -882.816]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0015.geometry}
                    material={materials.Blue}
                    position={[569.21, 1148.138, -882.816]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0015.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0015.material}
                    position={[569.21, 1150.545, -882.816]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0015.geometry}
                    material={materials.Blue}
                    position={[569.21, 1143.455, -882.816]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0023.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0023.material}
                    position={[-787.602, 1146.663, 699.444]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0023.geometry}
                    material={materials.Blue}
                    position={[-787.602, 1148.938, 699.444]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0023.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0023.material}
                    position={[-787.602, 1151.345, 699.444]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0023.geometry}
                    material={materials.Blue}
                    position={[-787.602, 1144.255, 699.444]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0024.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0024.material}
                    position={[-730.846, 1146.663, 764.073]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0024.geometry}
                    material={materials.Blue}
                    position={[-730.846, 1148.938, 764.073]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0024.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0024.material}
                    position={[-730.846, 1151.345, 764.073]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0024.geometry}
                    material={materials.Blue}
                    position={[-730.846, 1144.255, 764.073]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0002.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0002.material}
                    position={[775, 1145.863, 215]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0002.geometry}
                    material={materials.Blue}
                    position={[775, 1148.138, 215]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0002.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0002.material}
                    position={[775, 1150.545, 215]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0002.geometry}
                    material={materials.Blue}
                    position={[775, 1143.455, 215]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0009.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0009.material}
                    position={[635.287, 1145.863, -809.876]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0009.geometry}
                    material={materials.Blue}
                    position={[635.287, 1148.138, -809.876]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0009.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0009.material}
                    position={[635.287, 1150.545, -809.876]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0009.geometry}
                    material={materials.Blue}
                    position={[635.287, 1143.455, -809.876]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0016.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0016.material}
                    position={[579.03, 1145.863, -875.167]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0016.geometry}
                    material={materials.Blue}
                    position={[579.03, 1148.138, -875.167]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0016.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0016.material}
                    position={[579.03, 1150.545, -875.167]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0016.geometry}
                    material={materials.Blue}
                    position={[579.03, 1143.455, -875.167]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0025.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0025.material}
                    position={[-794.965, 1146.663, 689.407]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0025.geometry}
                    material={materials.Blue}
                    position={[-794.965, 1148.938, 689.407]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0025.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0025.material}
                    position={[-794.965, 1151.345, 689.407]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0025.geometry}
                    material={materials.Blue}
                    position={[-794.965, 1144.255, 689.407]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0026.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0026.material}
                    position={[-740.46, 1146.663, 756.166]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0026.geometry}
                    material={materials.Blue}
                    position={[-740.46, 1148.938, 756.166]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0026.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0026.material}
                    position={[-740.46, 1151.345, 756.166]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0026.geometry}
                    material={materials.Blue}
                    position={[-740.46, 1144.255, 756.166]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0003.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0003.material}
                    position={[756, 1145.863, 231]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0003.geometry}
                    material={materials.Blue}
                    position={[756, 1148.138, 231]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0003.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0003.material}
                    position={[756, 1150.545, 231]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0003.geometry}
                    material={materials.Blue}
                    position={[756, 1143.455, 231]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0010.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0010.material}
                    position={[648.295, 1145.863, -788.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0010.geometry}
                    material={materials.Blue}
                    position={[648.295, 1148.138, -788.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0010.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0010.material}
                    position={[648.295, 1150.545, -788.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0010.geometry}
                    material={materials.Blue}
                    position={[648.295, 1143.455, -788.715]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0017.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0017.material}
                    position={[596.864, 1145.863, -857.876]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0017.geometry}
                    material={materials.Blue}
                    position={[596.864, 1148.138, -857.876]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0017.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0017.material}
                    position={[596.864, 1150.545, -857.876]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0017.geometry}
                    material={materials.Blue}
                    position={[596.864, 1143.455, -857.876]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0027.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0027.material}
                    position={[-807.408, 1146.663, 667.908]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0027.geometry}
                    material={materials.Blue}
                    position={[-807.408, 1148.938, 667.908]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0027.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0027.material}
                    position={[-807.408, 1151.345, 667.908]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0027.geometry}
                    material={materials.Blue}
                    position={[-807.408, 1144.255, 667.908]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0028.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0028.material}
                    position={[-757.829, 1146.663, 738.409]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0028.geometry}
                    material={materials.Blue}
                    position={[-757.829, 1148.938, 738.409]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0028.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0028.material}
                    position={[-757.829, 1151.345, 738.409]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0028.geometry}
                    material={materials.Blue}
                    position={[-757.829, 1144.255, 738.409]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0004.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0004.material}
                    position={[745, 1145.863, 238]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0004.geometry}
                    material={materials.Blue}
                    position={[745, 1148.138, 238]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0004.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0004.material}
                    position={[745, 1150.545, 238]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0004.geometry}
                    material={materials.Blue}
                    position={[745, 1143.455, 238]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0011.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0011.material}
                    position={[653.588, 1145.863, -776.8]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0011.geometry}
                    material={materials.Blue}
                    position={[653.588, 1148.138, -776.8]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0011.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0011.material}
                    position={[653.588, 1150.545, -776.8]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0011.geometry}
                    material={materials.Blue}
                    position={[653.588, 1143.455, -776.8]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0018.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0018.material}
                    position={[604.936, 1145.863, -847.637]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0018.geometry}
                    material={materials.Blue}
                    position={[604.936, 1148.138, -847.637]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0018.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0018.material}
                    position={[604.936, 1150.545, -847.637]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0018.geometry}
                    material={materials.Blue}
                    position={[604.936, 1143.455, -847.637]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0029.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0029.material}
                    position={[-812.383, 1146.663, 655.856]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0029.geometry}
                    material={materials.Blue}
                    position={[-812.383, 1148.938, 655.856]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0029.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0029.material}
                    position={[-812.383, 1151.345, 655.856]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0029.geometry}
                    material={materials.Blue}
                    position={[-812.383, 1144.255, 655.856]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0030.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0030.material}
                    position={[-765.627, 1146.663, 727.959]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0030.geometry}
                    material={materials.Blue}
                    position={[-765.627, 1148.938, 727.959]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0030.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0030.material}
                    position={[-765.627, 1151.345, 727.959]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0030.geometry}
                    material={materials.Blue}
                    position={[-765.627, 1144.255, 727.959]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0005.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0005.material}
                    position={[800, 1145.863, 187]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0005.geometry}
                    material={materials.Blue}
                    position={[800, 1148.138, 187]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0005.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0005.material}
                    position={[800, 1150.545, 187]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0005.geometry}
                    material={materials.Blue}
                    position={[800, 1143.455, 187]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0012.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0012.material}
                    position={[611.3, 1145.863, -838.749]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0012.geometry}
                    material={materials.Blue}
                    position={[611.3, 1148.138, -838.749]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0012.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0012.material}
                    position={[611.3, 1150.545, -838.749]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0012.geometry}
                    material={materials.Blue}
                    position={[611.3, 1143.455, -838.749]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0019.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0019.material}
                    position={[548.654, 1145.863, -897.218]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0019.geometry}
                    material={materials.Blue}
                    position={[548.654, 1148.138, -897.218]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0019.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0019.material}
                    position={[548.654, 1150.545, -897.218]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0019.geometry}
                    material={materials.Blue}
                    position={[548.654, 1143.455, -897.218]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0031.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0031.material}
                    position={[-771.753, 1146.663, 718.906]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0031.geometry}
                    material={materials.Blue}
                    position={[-771.753, 1148.938, 718.906]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0031.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0031.material}
                    position={[-771.753, 1151.345, 718.906]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0031.geometry}
                    material={materials.Blue}
                    position={[-771.753, 1144.255, 718.906]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0032.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0032.material}
                    position={[-710.679, 1146.663, 779.016]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0032.geometry}
                    material={materials.Blue}
                    position={[-710.679, 1148.938, 779.016]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0032.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0032.material}
                    position={[-710.679, 1151.345, 779.016]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0032.geometry}
                    material={materials.Blue}
                    position={[-710.679, 1144.255, 779.016]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0006.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0006.material}
                    position={[792, 1145.863, 197]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0006.geometry}
                    material={materials.Blue}
                    position={[792, 1148.138, 197]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0006.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0006.material}
                    position={[792, 1150.545, 197]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0006.geometry}
                    material={materials.Blue}
                    position={[792, 1143.455, 197]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0013.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0013.material}
                    position={[620.005, 1145.863, -829.356]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0013.geometry}
                    material={materials.Blue}
                    position={[620.005, 1148.138, -829.356]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0013.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0013.material}
                    position={[620.005, 1150.545, -829.356]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0013.geometry}
                    material={materials.Blue}
                    position={[620.005, 1143.455, -829.356]}
                    rotation={[0, 1.422, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0020.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0020.material}
                    position={[559.409, 1145.863, -890.267]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0020.geometry}
                    material={materials.Blue}
                    position={[559.409, 1148.138, -890.267]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0020.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0020.material}
                    position={[559.409, 1150.545, -890.267]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0020.geometry}
                    material={materials.Blue}
                    position={[559.409, 1143.455, -890.267]}
                    rotation={[-Math.PI, 1.47, -Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0033.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0033.material}
                    position={[-780.205, 1146.663, 709.285]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0033.geometry}
                    material={materials.Blue}
                    position={[-780.205, 1148.938, 709.285]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0033.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0033.material}
                    position={[-780.205, 1151.345, 709.285]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0033.geometry}
                    material={materials.Blue}
                    position={[-780.205, 1144.255, 709.285]}
                    rotation={[Math.PI, -1.396, Math.PI]}
                />
                <mesh
                    geometry={nodes.Cylinder_1_18_Mat1_0034.geometry}
                    material={nodes.Cylinder_1_18_Mat1_0034.material}
                    position={[-721.246, 1146.663, 771.781]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_2_19_Mat1_0034.geometry}
                    material={materials.Blue}
                    position={[-721.246, 1148.938, 771.781]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_3_19_Mat1_0034.geometry}
                    material={nodes.Cylinder_3_19_Mat1_0034.material}
                    position={[-721.246, 1151.345, 771.781]}
                    rotation={[0, -1.496, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_18_Mat1_0034.geometry}
                    material={materials.Blue}
                    position={[-721.246, 1144.255, 771.781]}
                    rotation={[0, -1.496, 0]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/tires.glb');

export default Tires;
