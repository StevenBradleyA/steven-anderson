'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Controls = () => {
    const { nodes } = useGLTF('/models/controls.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });
    const whiteTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        opacity: 0.2,
        transparent: true,
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
                    position={[-69.699, 1285.762, 98.3]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="arrowLeft"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowLeft.geometry}
                    material={blueGlow}
                    position={[-64.173, 1285.743, 100.955]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="arrowRight"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowRight.geometry}
                    material={blueGlow}
                    position={[-75.05, 1285.743, 95.73]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="arrowUp"
                    castShadow
                    receiveShadow
                    geometry={nodes.arrowUp.geometry}
                    material={blueGlow}
                    position={[-69.401, 1291.727, 98.444]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="controlsGrid"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid.geometry}
                    material={whiteTransparent}
                    position={[-59.603, 1326.462, 102.942]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="controlsDivider"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsDivider.geometry}
                    material={whiteTransparent}
                    position={[-35.784, 1316.665, 114.497]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="controlsDivider001"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsDivider001.geometry}
                    material={whiteTransparent}
                    position={[-59.542, 1301.011, 102.99]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="controlsText"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsText.geometry}
                    material={whiteTransparent}
                    position={[-27.523, 1310.666, 118.19]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="dBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.dBack001.geometry}
                    material={blueGlow}
                    position={[-47.123, 1285.602, 108.923]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="eBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.eBack001.geometry}
                    material={blueGlow}
                    position={[-46.545, 1291.28, 109.259]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="fBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.fBack001.geometry}
                    material={blueGlow}
                    position={[-52.318, 1285.405, 106.545]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="movementText"
                    castShadow
                    receiveShadow
                    geometry={nodes.movementText.geometry}
                    material={blueGlow}
                    position={[-61.323, 1297.788, 101.963]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="sBack001"
                    castShadow
                    receiveShadow
                    geometry={nodes.sBack001.geometry}
                    material={blueGlow}
                    position={[-41.868, 1285.735, 111.35]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="D002"
                    castShadow
                    receiveShadow
                    geometry={nodes.D002.geometry}
                    material={whiteTransparent}
                    position={[-47.123, 1285.602, 108.923]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="F002"
                    castShadow
                    receiveShadow
                    geometry={nodes.F002.geometry}
                    material={whiteTransparent}
                    position={[-52.318, 1285.405, 106.545]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="S002"
                    castShadow
                    receiveShadow
                    geometry={nodes.S002.geometry}
                    material={whiteTransparent}
                    position={[-41.868, 1285.735, 111.35]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="E002"
                    castShadow
                    receiveShadow
                    geometry={nodes.E002.geometry}
                    material={whiteTransparent}
                    position={[-46.545, 1291.28, 109.259]}
                    rotation={[0, 0.285, 0]}
                    scale={0.755}
                />
                <mesh
                    name="Camera001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001.geometry}
                    material={whiteTransparent}
                    position={[-150.532, 1351.435, 41.719]}
                    rotation={[0, 0.837, -Math.PI / 2]}
                    scale={19.488}
                />
                <mesh
                    name="Mode"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mode.geometry}
                    material={blueGlow}
                    position={[-167.958, 1295.108, 26.973]}
                    rotation={[Math.PI / 2, 0, -2.417]}
                    scale={9.864}
                />
                <mesh
                    name="cBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.cBack.geometry}
                    material={blueGlow}
                    position={[-171.351, 1288.547, 24.465]}
                    rotation={[0.102, -1.508, 0.11]}
                    scale={0.852}
                />
                <mesh
                    name="Tour"
                    castShadow
                    receiveShadow
                    geometry={nodes.Tour.geometry}
                    material={whiteTransparent}
                    position={[-186.691, 1290.625, 10.753]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={3.686}
                />
                <mesh
                    name="Follow"
                    castShadow
                    receiveShadow
                    geometry={nodes.Follow.geometry}
                    material={whiteTransparent}
                    position={[-186.691, 1287.711, 10.753]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={3.686}
                />
                <mesh
                    name="Free"
                    castShadow
                    receiveShadow
                    geometry={nodes.Free.geometry}
                    material={whiteTransparent}
                    position={[-186.691, 1284.66, 10.753]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={3.686}
                />
                <mesh
                    name="mouse"
                    castShadow
                    receiveShadow
                    geometry={nodes.mouse.geometry}
                    material={whiteTransparent}
                    position={[-188.683, 1308.828, 8.981]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={3.686}
                />
                <mesh
                    name="freeMode"
                    castShadow
                    receiveShadow
                    geometry={nodes.freeMode.geometry}
                    material={whiteTransparent}
                    position={[-186.522, 1317.312, 11.242]}
                    rotation={[Math.PI / 2, 0, -2.414]}
                    scale={3.686}
                />
                <mesh
                    name="controlsGrid001"
                    castShadow
                    receiveShadow
                    geometry={nodes.controlsGrid001.geometry}
                    material={whiteTransparent}
                    position={[-183.885, 1322.767, 13.551]}
                    rotation={[0, 0.017, 0]}
                    scale={0.852}
                />
                <mesh
                    name="movementText001"
                    castShadow
                    receiveShadow
                    geometry={nodes.movementText001.geometry}
                    material={blueGlow}
                    position={[-185.436, 1322.401, 12.368]}
                    rotation={[0, 0.013, 0]}
                    scale={0.852}
                />
                <mesh
                    name="fBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.fBack.geometry}
                    material={blueGlow}
                    position={[-179.976, 1307.123, 16.732]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="eBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.eBack.geometry}
                    material={blueGlow}
                    position={[-174.617, 1313.753, 21.536]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="dBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.dBack.geometry}
                    material={blueGlow}
                    position={[-175.133, 1307.346, 20.986]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="sBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.sBack.geometry}
                    material={blueGlow}
                    position={[-170.24, 1307.496, 25.313]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="cameraDivider001"
                    castShadow
                    receiveShadow
                    geometry={nodes.cameraDivider001.geometry}
                    material={whiteTransparent}
                    position={[-162.299, 1316.497, 32.539]}
                    rotation={[0, 0.022, 0]}
                    scale={[0.852, 0.749, 0.852]}
                />
                <mesh
                    name="cameraDivider"
                    castShadow
                    receiveShadow
                    geometry={nodes.cameraDivider.geometry}
                    material={whiteTransparent}
                    position={[-183.763, 1302, 13.621]}
                    rotation={[0, 0.011, 0]}
                    scale={0.852}
                />
                <mesh
                    name="D003"
                    castShadow
                    receiveShadow
                    geometry={nodes.D003.geometry}
                    material={whiteTransparent}
                    position={[-175.133, 1307.346, 20.986]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="F003"
                    castShadow
                    receiveShadow
                    geometry={nodes.F003.geometry}
                    material={whiteTransparent}
                    position={[-179.976, 1307.123, 16.732]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="E003"
                    castShadow
                    receiveShadow
                    geometry={nodes.E003.geometry}
                    material={whiteTransparent}
                    position={[-174.617, 1313.753, 21.536]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="S003"
                    castShadow
                    receiveShadow
                    geometry={nodes.S003.geometry}
                    material={whiteTransparent}
                    position={[-170.24, 1307.496, 25.313]}
                    rotation={[0, -0.006, 0]}
                    scale={0.852}
                />
                <mesh
                    name="c"
                    castShadow
                    receiveShadow
                    geometry={nodes.c.geometry}
                    material={whiteTransparent}
                    position={[-171.351, 1288.547, 24.465]}
                    rotation={[0.102, -1.508, 0.11]}
                    scale={0.852}
                />
                <mesh
                    name="Respawn001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Respawn001.geometry}
                    material={whiteTransparent}
                    position={[-246.711, 1348.883, -72.591]}
                    rotation={[0, 0.429, -Math.PI / 2]}
                    scale={18.012}
                />
                <mesh
                    name="Respawn"
                    castShadow
                    receiveShadow
                    geometry={nodes.Respawn.geometry}
                    material={blueGlow}
                    position={[-254.933, 1296.821, -89.007]}
                    rotation={[Math.PI / 2, 0, -2.009]}
                    scale={9.117}
                />
                <mesh
                    name="respawnGrid"
                    castShadow
                    receiveShadow
                    geometry={nodes.respawnGrid.geometry}
                    material={whiteTransparent}
                    position={[-264.688, 1322.385, -108.715]}
                    rotation={[0, -0.39, 0]}
                    scale={0.788}
                />
                <mesh
                    name="respawnDivider"
                    castShadow
                    receiveShadow
                    geometry={nodes.respawnDivider.geometry}
                    material={whiteTransparent}
                    position={[-253.331, 1315.717, -84.693]}
                    rotation={[0, -0.386, 0]}
                    scale={[0.788, 0.727, 0.788]}
                />
                <mesh
                    name="divider"
                    castShadow
                    receiveShadow
                    geometry={nodes.divider.geometry}
                    material={whiteTransparent}
                    position={[-264.611, 1303.191, -108.611]}
                    rotation={[0, -0.396, 0]}
                    scale={0.788}
                />
                <mesh
                    name="Recover"
                    castShadow
                    receiveShadow
                    geometry={nodes.Recover.geometry}
                    material={blueGlow}
                    position={[-254.855, 1318.953, -89.104]}
                    rotation={[Math.PI / 2, 0, -2.009]}
                    scale={9.117}
                />
                <mesh
                    name="rBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.rBack.geometry}
                    material={blueGlow}
                    position={[-263.63, 1289.024, -105.786]}
                    rotation={[0.054, -0.257, 0.057]}
                    scale={0.465}
                />
                <mesh
                    name="Shift"
                    castShadow
                    receiveShadow
                    geometry={nodes.Shift.geometry}
                    material={whiteTransparent}
                    position={[-260.805, 1309.896, -101.988]}
                    rotation={[Math.PI / 2, 0, -2.003]}
                    scale={6.037}
                />
                <mesh
                    name="shiftBack"
                    castShadow
                    receiveShadow
                    geometry={nodes.shiftBack.geometry}
                    material={blueGlow}
                    position={[-264.16, 1311.865, -107.483]}
                    rotation={[0, -1.133, -Math.PI]}
                    scale={[-9.915, -3.92, -0.328]}
                />
                <mesh
                    name="R"
                    castShadow
                    receiveShadow
                    geometry={nodes.R.geometry}
                    material={whiteTransparent}
                    position={[-263, 1288, -106]}
                    rotation={[Math.PI / 2, 0, -2.003]}
                    scale={6.037}
                />
            </group>
        </group>
    );
};
useGLTF.preload('/models/controls.glb');

export default Controls;
