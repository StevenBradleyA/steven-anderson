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
                    material={materials.Blue}
                    position={[-83.368, 1286.797, 91.854]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="arrowLeft"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowLeft.geometry}
                    material={materials.Blue}
                    position={[-76.05, 1286.772, 95.37]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="arrowRight"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowRight.geometry}
                    material={materials.Blue}
                    position={[-90.453, 1286.772, 88.451]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="arrowUp"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowUp.geometry}
                    material={materials.Blue}
                    position={[-82.972, 1294.696, 92.045]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsGrid"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid.geometry}
                    material={materials.White}
                    position={[-70, 1340.688, 98]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsDivider"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsDivider.geometry}
                    material={materials.White}
                    position={[-38.462, 1327.715, 113.3]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsDivider001"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsDivider001.geometry}
                    material={materials.White}
                    position={[-69.919, 1306.988, 98.064]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="controlsText"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsText.geometry}
                    material={materials.White}
                    position={[-27.523, 1319.772, 118.19]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="dBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.dBack001.geometry}
                    material={materials.Blue}
                    position={[-53.476, 1286.585, 105.92]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="eBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.eBack001.geometry}
                    material={materials.Blue}
                    position={[-52.71, 1294.104, 106.364]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="fBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.fBack001.geometry}
                    material={materials.Blue}
                    position={[-60.354, 1286.324, 102.772]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="movementText"
                    castShadow
                    receiveShadow
                    geometry={nodes.movementText.geometry}
                    material={materials.Blue}
                    position={[-72.276, 1302.72, 96.704]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="sBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.sBack001.geometry}
                    material={materials.Blue}
                    position={[-46.516, 1286.762, 109.134]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="D002"
                    castShadow
                    receiveShadow
                    geometry={nodes.D002.geometry}
                    material={materials.White}
                    position={[-53.476, 1286.585, 105.92]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="F002"
                    castShadow
                    receiveShadow
                    geometry={nodes.F002.geometry}
                    material={materials.White}
                    position={[-60.354, 1286.324, 102.772]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="S002"
                    castShadow
                    receiveShadow
                    geometry={nodes.S002.geometry}
                    material={materials.White}
                    position={[-46.516, 1286.762, 109.134]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="E002"
                    castShadow
                    receiveShadow
                    geometry={nodes.E002.geometry}
                    material={materials.White}
                    position={[-52.71, 1294.104, 106.364]}
                    rotation={[0, 0.285, 0]}
                />
                <mesh
                    name="Camera001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001.geometry}
                    material={materials.White}
                    position={[-144.767, 1365, 46.595]}
                    rotation={[0, 0.837, -Math.PI / 2]}
                    scale={22.869}
                />
                <mesh
                    name="Mode"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mode.geometry}
                    material={materials.Blue}
                    position={[-165.216, 1298.9, 29.289]}
                    rotation={[Math.PI / 2, 0, -2.417]}
                    scale={11.575}
                />
                <mesh
                    name="cBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.cBack.geometry}
                    material={materials.Blue}
                    position={[-169.197, 1291.2, 26.347]}
                    rotation={[0.102, -1.508, 0.11]}
                />
                <mesh
                    name="Tour"
                    castShadow
                    receiveShadow
                    geometry={nodes.Tour.geometry}
                    material={materials.White}
                    position={[-187.199, 1293.639, 10.256]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={4.325}
                />
                <mesh
                    name="Follow"
                    castShadow
                    receiveShadow
                    geometry={nodes.Follow.geometry}
                    material={materials.White}
                    position={[-187.199, 1290.22, 10.256]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={4.325}
                />
                <mesh
                    name="Free"
                    castShadow
                    receiveShadow
                    geometry={nodes.Free.geometry}
                    material={materials.White}
                    position={[-187.199, 1286.639, 10.256]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={4.325}
                />
                <mesh
                    name="mouse"
                    castShadow
                    receiveShadow
                    geometry={nodes.mouse.geometry}
                    material={materials.White}
                    position={[-189.537, 1315, 8.176]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={4.325}
                />
                <mesh
                    name="freeMode"
                    castShadow
                    receiveShadow
                    geometry={nodes.freeMode.geometry}
                    material={materials.White}
                    position={[-187, 1324.957, 10.83]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={4.325}
                />
                <mesh
                    name="controlsGrid001"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid001.geometry}
                    material={materials.White}
                    position={[-183.906, 1331.357, 13.539]}
                    rotation={[0, 0.017, 0]}
                />
                <mesh
                    name="movementText001"
                    castShadow
                    receiveShadow
                    geometry={nodes.movementText001.geometry}
                    material={materials.Blue}
                    position={[-185.726, 1330.928, 12.15]}
                    rotation={[0, 0.013, 0]}
                />
                <mesh
                    name="fBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.fBack.geometry}
                    material={materials.Blue}
                    position={[-179.319, 1313, 17.272]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="eBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.eBack.geometry}
                    material={materials.Blue}
                    position={[-173.03, 1320.78, 22.909]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="dBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.dBack.geometry}
                    material={materials.Blue}
                    position={[-173.635, 1313.261, 22.264]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="sBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.sBack.geometry}
                    material={materials.Blue}
                    position={[-167.893, 1313.438, 27.341]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="cameraDivider001"
                    castShadow
                    receiveShadow
                    geometry={nodes.cameraDivider001.geometry}
                    material={materials.White}
                    position={[-158.575, 1324, 35.821]}
                    rotation={[0, 0.022, 0]}
                    scale={[1, 0.879, 1]}
                />
                <mesh
                    name="cameraDivider"
                    castShadow
                    receiveShadow
                    geometry={nodes.cameraDivider.geometry}
                    material={materials.White}
                    position={[-183.763, 1306.988, 13.621]}
                    rotation={[0, 0.011, 0]}
                />
                <mesh
                    name="D003"
                    castShadow
                    receiveShadow
                    geometry={nodes.D003.geometry}
                    material={materials.White}
                    position={[-173.635, 1313.261, 22.264]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="F003"
                    castShadow
                    receiveShadow
                    geometry={nodes.F003.geometry}
                    material={materials.White}
                    position={[-179.319, 1313, 17.272]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="E003"
                    castShadow
                    receiveShadow
                    geometry={nodes.E003.geometry}
                    material={materials.White}
                    position={[-173.03, 1320.78, 22.909]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="S003"
                    castShadow
                    receiveShadow
                    geometry={nodes.S003.geometry}
                    material={materials.White}
                    position={[-167.893, 1313.438, 27.341]}
                    rotation={[0, -0.006, 0]}
                />
                <mesh
                    name="c"
                    castShadow
                    receiveShadow
                    geometry={nodes.c.geometry}
                    material={materials.White}
                    position={[-169.197, 1291.2, 26.347]}
                    rotation={[0.102, -1.508, 0.11]}
                />
                <mesh
                    name="Respawn001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Respawn001.geometry}
                    material={materials.White}
                    position={[-245.518, 1365, -46.546]}
                    rotation={[0, 0.557, -Math.PI / 2]}
                    scale={22.869}
                />
                <mesh
                    name="Respawn"
                    castShadow
                    receiveShadow
                    geometry={nodes.Respawn.geometry}
                    material={materials.Blue}
                    position={[-258.541, 1298.9, -65.879]}
                    rotation={[Math.PI / 2, 0, -2.138]}
                    scale={11.575}
                />
                <mesh
                    name="respawnGrid"
                    castShadow
                    receiveShadow
                    geometry={nodes.respawnGrid.geometry}
                    material={materials.White}
                    position={[-274.03, 1331.357, -89.109]}
                    rotation={[0, -0.262, 0]}
                />
                <mesh
                    name="respawnDivider"
                    castShadow
                    receiveShadow
                    geometry={nodes.respawnDivider.geometry}
                    material={materials.White}
                    position={[-255.822, 1324, -60.708]}
                    rotation={[0, -0.257, 0]}
                    scale={[1, 0.879, 1]}
                />
                <mesh
                    name="divider"
                    castShadow
                    receiveShadow
                    geometry={nodes.divider.geometry}
                    material={materials.White}
                    position={[-273.916, 1306.988, -88.991]}
                    rotation={[0, -0.268, 0]}
                />
                <mesh
                    name="Recover"
                    castShadow
                    receiveShadow
                    geometry={nodes.Recover.geometry}
                    material={materials.Blue}
                    position={[-258.458, 1327, -66.014]}
                    rotation={[Math.PI / 2, 0, -2.138]}
                    scale={11.575}
                />
                <mesh
                    name="rBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.rBack.geometry}
                    material={materials.Blue}
                    position={[-272.222, 1289, -85.593]}
                    rotation={[0.053, -0.129, 0.05]}
                    scale={0.591}
                />
                <mesh
                    name="Shift"
                    castShadow
                    receiveShadow
                    geometry={nodes.Shift.geometry}
                    material={materials.White}
                    position={[-268.047, 1315.5, -81.271]}
                    rotation={[Math.PI / 2, 0, -2.132]}
                    scale={7.665}
                />
                <mesh
                    name="shiftBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.shiftBack.geometry}
                    material={materials.Blue}
                    position={[-273.164, 1318, -87.643]}
                    rotation={[0, -1.004, -Math.PI]}
                    scale={[-12.588, -4.977, -0.417]}
                />
                <mesh
                    name="R"
                    castShadow
                    receiveShadow
                    geometry={nodes.R.geometry}
                    material={materials.White}
                    position={[-271.463, 1287.7, -85.965]}
                    rotation={[Math.PI / 2, 0, -2.132]}
                    scale={7.665}
                />
            </group>
        </group>
    );
};
useGLTF.preload('/models/controls.glb');

export default Controls;
