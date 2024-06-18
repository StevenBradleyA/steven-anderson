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
                castShadow
                receiveShadow
                geometry={nodes.PowerGlove.geometry}
                material={materials.ComputerShell}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PowerGlovePlastics.geometry}
                material={materials.Plastic}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PowerGloveText.geometry}
                material={blueGlow}
                position={[261.5, 1371.4, 274.5]}
                rotation={[1.452, -1.079, 2.459]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Title.geometry}
                material={blueGlow}
                position={[422, 1399, 203]}
                rotation={[Math.PI / 2, 0, 2.576]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text005.geometry}
                material={whiteGlow}
                position={[420, 1388, 207]}
                rotation={[Math.PI / 2, 0, 2.576]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.gridSquare.geometry}
                material={whiteGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.grid.geometry}
                material={blueGlow}
            />
        </group>
    );
};

useGLTF.preload('/models/hackerman.glb');

export default Hackerman;
