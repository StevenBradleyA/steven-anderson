'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ProjectLinks = () => {
    const { nodes, materials } = useGLTF('/models/projectLinks.glb');

    // const blueGlow= new THREE.MeshStandardMaterial({
    //     color:  new THREE.Color(0x007bff),
    //     emissive: new THREE.Color(0x007bff),
    //     emissiveIntensity: 0.69,
    // });

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project1Enter.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project2Grid.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project2Enter.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project2Grid001.geometry}
                material={materials.White}
                position={[-58, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project3Enter.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project3Grid.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project4Grid.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Project4Enter.geometry}
                material={materials.White}
            />
        </group>
    );
};
useGLTF.preload('/models/projectLinks.glb');
export default ProjectLinks;
