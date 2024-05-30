// components/Model.js
'use client';
import React, { useEffect, useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

const RaceTrack = () => {
    const { nodes, materials } = useGLTF('/models/raceTrack.glb');

    const colorMap = useLoader(TextureLoader, '/textures/raceTrackPbr.png');

    return (
        <RigidBody
            type="fixed"
            position={[0, 0, 0]}
            colliders="trimesh"
            friction={1}
            restitution={0.2}
        >
            <group dispose={null} map={colorMap}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[0, -498.91, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pits_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1363.906, 1.215, 238.074]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pits3_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2002.703, 3.196, -293.442]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.racetrack_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-5370.532, 1.215, 1935.578]}
                    rotation={[0, -1.099, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pits2_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2712.808, 1.215, 238.074]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere011_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2766.519, 760.726, 740.879]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere012_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2617.575, 400.444, 713.774]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere013_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2508.831, 341.991, 779.044]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere014_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2704.081, 482.966, 548.759]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere015_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2489.266, 584.072, 611.653]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere016_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2692.951, 451.585, 811.802]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere017_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2556.153, 668.896, 782.006]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2699.596, 87.929, -612.857]}
                    rotation={[Math.PI, -1.53, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2713.418, 241.101, -620.914]}
                    rotation={[Math.PI / 2, -0.061, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-5842.781, 87.929, -1890.882]}
                    rotation={[Math.PI, -1.53, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere009_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-5856.603, 241.101, -1898.939]}
                    rotation={[Math.PI / 2, -0.061, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-4610.215, 87.929, 230.743]}
                    rotation={[Math.PI, -1.53, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-4624.038, 241.101, 222.687]}
                    rotation={[Math.PI / 2, -0.061, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-3685.938, 87.929, -285.532]}
                    rotation={[Math.PI, -1.53, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere003_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-3699.76, 241.101, -293.589]}
                    rotation={[Math.PI / 2, -0.061, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-983.229, 257.019, 569.032]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-963.989, 127.898, 565.128]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree1_Icosphere002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[362.513, 318.183, 574.721]}
                    rotation={[1.338, -0.117, -1.115]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[365.484, 183.792, 565.128]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere005_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[2796.394, 318.544, -549.183]}
                    rotation={[Math.PI / 2, 0, 1.225]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere006_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[2806.682, 259.912, -671.816]}
                    rotation={[Math.PI / 2, 0, 1.225]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree6_Icosphere007_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[2830.226, 456.933, -710.336]}
                    rotation={[Math.PI / 2, 0, 1.225]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-8517.928, 316.431, 7865.999]}
                    rotation={[Math.PI, -0.361, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tree3_Icosphere007_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-8441.909, 533.93, 7844.943]}
                    rotation={[1.665, 0.101, 2.386]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.conifer1_Cylinder002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1457.597, 130.089, -3771.251]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.conifer2_Cylinder001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2253.894, 210.052, -2382.104]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.conifer3_Cylinder001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2392.987, 146.551, -4698.543]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.conifer4_Cylinder001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-3533.468, 126.594, -4532.783]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.conifer5_Cylinder004_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-2981.841, 216.176, -3066.625]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.conifer6_Cylinder001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1689.711, 122.878, -3068.097]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type2_01_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[1775.205, 9.896, -220.948]}
                    rotation={[-Math.PI, 1.56, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type2_03_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[782.058, 10, 954.615]}
                    rotation={[0, -1.548, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type4_02_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[913.638, 4.245, -825.159]}
                    rotation={[-Math.PI, 1.564, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type4_04_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[12090.101, -37.159, -297.643]}
                    rotation={[0, -1.537, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type5_01_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[4913.066, -1.844, -171.358]}
                    rotation={[-Math.PI, 1.56, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type5_03_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[5685.557, -12.38, -205.287]}
                    rotation={[0, -1.548, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type6_02_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[6176.752, -23.216, 2329.572]}
                    rotation={[-Math.PI, 1.564, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type6_04_mesh001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[1764.776, -17.308, 244.651]}
                    rotation={[0, -1.537, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_2001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[3408.839, 12.925, -905.728]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_3001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1214.847, 12.925, 2358.273]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_5001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1173.669, -4.322, -422.908]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_6001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[792.04, 12.925, -3989.826]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_7001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[1599.51, 12.925, 1936.484]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_1001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[5395.383, 12.925, 2155.758]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_2001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[8195.313, 83.24, -1137.373]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_3001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[7134.803, 66.792, -4162.318]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_4001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1028.188, -23.568, -7996.512]}
                    rotation={[0, -1.357, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_5001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-4182.883, 103.337, 5795.294]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_with_moss_6001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[2669.365, 62.287, 5706.572]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_Type2_03_mesh002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-1303.257, 10, -574.407]}
                    rotation={[0, 1.297, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_7002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[8224.392, 12.925, -8433.258]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pedestal_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-272.439, 8.352, -487.569]}
                    rotation={[0, -1.185, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pedestalWater_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-271.632, 15.239, -480.935]}
                    rotation={[0, 0.375, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-277.169, 10, -498.408]}
                    rotation={[0, -1.183, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_7003_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[8902.695, 26.683, 8292.574]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-898.679, 13.058, 600.662]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush002_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-818.523, 13.058, 683.125]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush003_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-784.562, 13.058, 723.276]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush004_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-750.709, 13.058, 768.12]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush005_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-711.277, 13.058, 813.384]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush006_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-675.133, 13.058, 858.282]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush007_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-641.565, 13.058, 900.586]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush008_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-603.223, 13.058, 946.858]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush001_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-855.128, 13.058, 641.333]}
                    rotation={[Math.PI / 2, -0.26, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LowerGround_Baked.geometry}
                    material={materials['steven-anderson-texture_Baked']}
                    position={[-28.845, -2108.638, 21.914]}
                />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/raceTrack.glb');
export default RaceTrack;
