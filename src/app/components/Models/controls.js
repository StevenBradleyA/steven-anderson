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
        emissiveIntensity: 0.1,
        side: THREE.DoubleSide,
    });
    const whiteTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        opacity: 0.2,
        transparent: true,
    });

    return (
        <group dispose={null}>
            <mesh geometry={nodes.arrowDown.geometry} material={blueGlow} />
            <mesh geometry={nodes.arrowLeft.geometry} material={blueGlow} />
            <mesh geometry={nodes.arrowRight.geometry} material={blueGlow} />
            <mesh geometry={nodes.arrowUp.geometry} material={blueGlow} />
            <mesh
                geometry={nodes.controlsGrid.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.controlsDivider.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.controlsDivider001.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.controlsText.geometry}
                material={whiteTransparent}
            />
            <mesh geometry={nodes.dBack001.geometry} material={blueGlow} />
            <mesh geometry={nodes.eBack001.geometry} material={blueGlow} />
            <mesh geometry={nodes.fBack001.geometry} material={blueGlow} />
            <mesh geometry={nodes.movementText.geometry} material={blueGlow} />
            <mesh geometry={nodes.sBack001.geometry} material={blueGlow} />
            <mesh geometry={nodes.D002.geometry} material={whiteGlow} />
            <mesh geometry={nodes.F002.geometry} material={whiteGlow} />
            <mesh geometry={nodes.S002.geometry} material={whiteGlow} />
            <mesh geometry={nodes.E002.geometry} material={whiteGlow} />
            <mesh
                geometry={nodes.Camera001.geometry}
                material={whiteTransparent}
            />
            <mesh geometry={nodes.Mode.geometry} material={blueGlow} />
            <mesh geometry={nodes.cBack.geometry} material={blueGlow} />
            <mesh geometry={nodes.Tour.geometry} material={whiteGlow} />
            <mesh geometry={nodes.Follow.geometry} material={whiteGlow} />
            <mesh geometry={nodes.Free.geometry} material={whiteGlow} />
            <mesh geometry={nodes.mouse.geometry} material={whiteGlow} />
            <mesh geometry={nodes.freeMode.geometry} material={whiteGlow} />
            <mesh
                geometry={nodes.controlsGrid001.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.movementText001.geometry}
                material={blueGlow}
            />
            <mesh geometry={nodes.fBack.geometry} material={blueGlow} />
            <mesh geometry={nodes.eBack.geometry} material={blueGlow} />
            <mesh geometry={nodes.dBack.geometry} material={blueGlow} />
            <mesh geometry={nodes.sBack.geometry} material={blueGlow} />
            <mesh
                geometry={nodes.cameraDivider001.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.cameraDivider.geometry}
                material={whiteTransparent}
            />
            <mesh geometry={nodes.D003.geometry} material={whiteGlow} />
            <mesh geometry={nodes.F003.geometry} material={whiteGlow} />
            <mesh geometry={nodes.E003.geometry} material={whiteGlow} />
            <mesh geometry={nodes.S003.geometry} material={whiteGlow} />
            <mesh geometry={nodes.c.geometry} material={whiteGlow} />
            <mesh
                geometry={nodes.Respawn001.geometry}
                material={whiteTransparent}
            />
            <mesh geometry={nodes.Respawn.geometry} material={blueGlow} />
            <mesh
                geometry={nodes.respawnGrid.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.respawnDivider.geometry}
                material={whiteTransparent}
            />
            <mesh
                geometry={nodes.divider.geometry}
                material={whiteTransparent}
            />
            <mesh geometry={nodes.Recover.geometry} material={blueGlow} />
            <mesh geometry={nodes.rBack.geometry} material={blueGlow} />
            <mesh geometry={nodes.Shift.geometry} material={whiteGlow} />
            <mesh geometry={nodes.shiftBack.geometry} material={blueGlow} />
            <mesh geometry={nodes.R.geometry} material={whiteGlow} />
        </group>
    );
};
useGLTF.preload('/models/controls.glb');

export default Controls;
