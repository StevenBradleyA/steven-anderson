'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import ProjectKeeby from './projectKeeby';
import ProjectHacktime from './projectHacktime';
import ProjectGch from './projectGch';

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
            <ProjectHacktime />
            <ProjectGch />
        </>
    );
};
// useGLTF.preload('/models/projectLinks.glb');
export default ProjectLinks;
