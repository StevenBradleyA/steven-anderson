'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Hackerman = () => {
    const { nodes, materials } = useGLTF('/models/hackerman.glb');

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
            <mesh
                geometry={nodes.PowerGlove.geometry}
                material={materials.ComputerShell}
            />
            <mesh
                geometry={nodes.PowerGlovePlastics.geometry}
                material={materials.Plastic}
            />
            <mesh
                geometry={nodes.PowerGloveText.geometry}
                material={blueGlow}
            />
            <mesh geometry={nodes.Title.geometry} material={blueGlow} />
            <mesh geometry={nodes.Text005.geometry} material={whiteGlow} />
            <mesh geometry={nodes.gridSquare.geometry} material={whiteGlow} />
            <mesh geometry={nodes.grid.geometry} material={blueGlow} />
            <mesh
                geometry={nodes.hackermanEnter001.geometry}
                material={materials.White}
                position={[256.935, 1277, 218.057]}
                rotation={[0, -0.846, 0]}
            />
        </group>
    );
};

useGLTF.preload('/models/hackerman.glb');

export default Hackerman;
