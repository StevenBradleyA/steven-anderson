'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import ProjectKeeby from './projectKeeby';

const ProjectLinks = () => {
    // const { nodes, materials } = useGLTF('/models/projectLinks.glb');

    // const blueGlow= new THREE.MeshStandardMaterial({
    //     color:  new THREE.Color(0x007bff),
    //     emissive: new THREE.Color(0x007bff),
    //     emissiveIntensity: 0.69,
    // });

 

    return (
        <>
            <ProjectKeeby />
        </>
    );
};
// useGLTF.preload('/models/projectLinks.glb');
export default ProjectLinks;
