'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Controls = () => {
    const { nodes, materials } = useGLTF('/models/controls.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });
    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.2,
    });

    return (
        <group dispose={null}>
            <group name="Scene">
                <mesh
                    name="arrowDown"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowDown.geometry}
                    material={blueGlow}
                    position={[-83.368, 1286.797, 91.854]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="arrowLeft"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowLeft.geometry}
                    material={blueGlow}
                    position={[-76.05, 1286.772, 95.37]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="arrowRight"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowRight.geometry}
                    material={blueGlow}
                    position={[-90.453, 1286.772, 88.451]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="arrowUp"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowUp.geometry}
                    material={blueGlow}
                    position={[-82.972, 1294.696, 92.045]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsGrid"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid.geometry}
                    material={nodes.controlsGrid.material}
                    position={[-70, 1340.688, 98]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsRect"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsRect.geometry}
                    material={whiteGlow}
                    position={[-38.462, 1327.715, 113.3]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsRect001"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsRect001.geometry}
                    material={whiteGlow}
                    position={[-69.919, 1306.988, 98.064]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsText"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsText.geometry}
                    material={whiteGlow}
                    position={[-27.523, 1319.772, 118.19]}
                    rotation={[0, 0.285, 0]}
                />
                <group
                    name="D"
                    position={[-53.476, 1286.585, 105.92]}
                    rotation={[0, 0.285, 0]}
                >
                    <mesh
                        name="Text007_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text007_1.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text007_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text007_2.geometry}
                        material={blueGlow}
                    />
                </group>
                <group
                    name="E"
                    position={[-52.71, 1294.104, 106.364]}
                    rotation={[0, 0.285, 0]}
                >
                    <mesh
                        name="Text006_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text006_1.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text006_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text006_2.geometry}
                        material={blueGlow}
                    />
                </group>
                <group
                    name="F"
                    position={[-60.354, 1286.324, 102.772]}
                    rotation={[0, 0.285, 0]}
                >
                    <mesh
                        name="Curve004"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve004.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Curve004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve004_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <mesh
                    name="movementText"
                    castShadow
                    receiveShadow
                    geometry={nodes.movementText.geometry}
                    material={blueGlow}
                    position={[-72.276, 1302.72, 96.704]}
                    rotation={[0, 0.285, 0]}
                />
                <group
                    name="S"
                    position={[-46.516, 1286.762, 109.134]}
                    rotation={[0, 0.285, 0]}
                >
                    <mesh
                        name="Text008_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text008_1.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text008_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text008_2.geometry}
                        material={blueGlow}
                    />
                </group>
                <mesh
                    name="Text"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text.geometry}
                    material={nodes.Text.material}
                    position={[-170.686, 1365, 49.182]}
                    rotation={[0, 1.111, -Math.PI / 2]}
                    scale={22.869}
                />
                <mesh
                    name="Text001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text001.geometry}
                    material={blueGlow}
                    position={[-195.058, 1298.9, 38.061]}
                    rotation={[Math.PI / 2, 0, -2.691]}
                    scale={11.575}
                />
                <group
                    name="C"
                    position={[-199.687, 1291.2, 36.306]}
                    rotation={[0.019, -1.234, 0.026]}
                >
                    <mesh
                        name="Text013"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text013.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text013_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text013_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <mesh
                    name="Text003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text003.geometry}
                    material={whiteGlow}
                    position={[-221.374, 1293.639, 25.691]}
                    rotation={[Math.PI / 2, 0, -2.689]}
                    scale={4.325}
                />
                <mesh
                    name="Text004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text004.geometry}
                    material={whiteGlow}
                    position={[-221.374, 1290.22, 25.691]}
                    rotation={[Math.PI / 2, 0, -2.689]}
                    scale={4.325}
                />
                <mesh
                    name="Text006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text006.geometry}
                    material={whiteGlow}
                    position={[-221.374, 1286.639, 25.691]}
                    rotation={[Math.PI / 2, 0, -2.689]}
                    scale={4.325}
                />
                <mesh
                    name="Text002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text002.geometry}
                    material={whiteGlow}
                    position={[-224.187, 1315, 24.321]}
                    rotation={[Math.PI / 2, 0, -2.689]}
                    scale={4.325}
                />
                <mesh
                    name="Text007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text007.geometry}
                    material={whiteGlow}
                    position={[-221.027, 1324.957, 26.19]}
                    rotation={[Math.PI / 2, 0, -2.689]}
                    scale={4.325}
                />
                <mesh
                    name="controlsGrid001"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid001.geometry}
                    material={whiteGlow}
                    position={[-217.314, 1331.357, 27.959]}
                    rotation={[0, 0.291, 0]}
                />
                <mesh
                    name="movementText001"
                    castShadow
                    receiveShadow
                    geometry={nodes.movementText001.geometry}
                    material={blueGlow}
                    position={[-219.442, 1330.928, 27.116]}
                    rotation={[0, 0.288, 0]}
                />
                <group
                    name="F001"
                    position={[-211.888, 1313, 30.311]}
                    rotation={[0, 0.268, 0]}
                >
                    <mesh
                        name="Curve005"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve005.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Curve005_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve005_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <group
                    name="E001"
                    position={[-204.307, 1320.78, 34.035]}
                    rotation={[0, 0.268, 0]}
                >
                    <mesh
                        name="Text017"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text017.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text017_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text017_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <group
                    name="D001"
                    position={[-205.065, 1313.261, 33.577]}
                    rotation={[0, 0.268, 0]}
                >
                    <mesh
                        name="Text016"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text016.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text016_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text016_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <group
                    name="S001"
                    position={[-198.162, 1313.438, 36.911]}
                    rotation={[0, 0.268, 0]}
                >
                    <mesh
                        name="Text018"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text018.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Text018_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Text018_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <mesh
                    name="controlsRect002"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsRect002.geometry}
                    material={whiteGlow}
                    position={[-186.896, 1324, 42.55]}
                    rotation={[0, 0.296, 0]}
                    scale={[1, 0.879, 1]}
                />
                <mesh
                    name="controlsRect003"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsRect003.geometry}
                    material={whiteGlow}
                    position={[-217.155, 1306.988, 28]}
                    rotation={[0, 0.286, 0]}
                />
                <mesh
                    name="Text008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text008.geometry}
                    material={whiteGlow}
                    position={[-300.759, 1365, -11.818]}
                    rotation={[0, 1.111, -Math.PI / 2]}
                    scale={22.869}
                />
                <mesh
                    name="Text009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text009.geometry}
                    material={blueGlow}
                    position={[-322, 1298.9, -21.42]}
                    rotation={[Math.PI / 2, 0, -2.691]}
                    scale={11.575}
                />
                <mesh
                    name="controlsGrid002"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid002.geometry}
                    material={whiteGlow}
                    position={[-347.386, 1331.357, -33.041]}
                    rotation={[0, 0.291, 0]}
                />
                <mesh
                    name="controlsRect004"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsRect004.geometry}
                    material={whiteGlow}
                    position={[-316.968, 1324, -18.45]}
                    rotation={[0, 0.296, 0]}
                    scale={[1, 0.879, 1]}
                />
                <mesh
                    name="controlsRect005"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsRect005.geometry}
                    material={whiteGlow}
                    position={[-347.227, 1306.988, -33]}
                    rotation={[0, 0.286, 0]}
                />
                <mesh
                    name="Text015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text015.geometry}
                    material={blueGlow}
                    position={[-322, 1327, -21.578]}
                    rotation={[Math.PI / 2, 0, -2.691]}
                    scale={11.575}
                />
                <group
                    name="typescript001"
                    position={[-344, 1289, -31]}
                    rotation={[0.057, 0.424, 0.019]}
                    scale={0.591}
                >
                    <mesh
                        name="Curve007"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve007.geometry}
                        material={whiteGlow}
                    />
                    <mesh
                        name="Curve007_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve007_1.geometry}
                        material={blueGlow}
                    />
                </group>
                <mesh
                    name="Text010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text010.geometry}
                    material={whiteGlow}
                    position={[-338.176, 1315.5, -29.518]}
                    rotation={[Math.PI / 2, 0, -2.685]}
                    scale={7.665}
                />
                <mesh
                    name="Text012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text012.geometry}
                    material={blueGlow}
                    position={[-343.582, 1287.7, -31.65]}
                    rotation={[Math.PI / 2, 0, -2.685]}
                    scale={7.665}
                />
                <mesh
                    name="Cube001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={blueGlow}
                    position={[-345.879, 1318, -32.249]}
                    rotation={[0, -0.451, -Math.PI]}
                    scale={[-12.588, -4.977, -0.417]}
                />
            </group>
        </group>
    );
};
useGLTF.preload('/models/controls.glb');

export default Controls;
