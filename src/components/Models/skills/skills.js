'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef } from 'react';
import AnimatedAws from './animatedAws';
import AnimatedBlender from './animatedBlender';
import AnimatedCss from './animatedCss';
import AnimatedDocker from './animatedDocker';
import AnimatedFlask from './animatedFlask';
import AnimatedGit from './animatedGit';
import AnimatedGithub from './animatedGithub';
import AnimatedHtml from './animatedHtml';
import AnimatedJavascript from './animatedJs';
import AnimatedPostgres from './animatedPostgres';
import AnimatedPrisma from './animatedPrisma';
import AnimatedPython from './animatedPython';
import AnimatedReact from './animatedReact';
import AnimatedRedux from './animatedRedux';
import AnimatedTailwind from './animatedTailwind';
import AnimatedVercel from './animatedVercel';
import AnimatedTypescript from './animatedTypescript';

const Skills = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/skills/skillsGrid.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.8,
    });

    return (
        <>
            <group dispose={null}>
                <mesh
                    geometry={nodes.skillsGrid.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.skillEnter.geometry}
                    material={materials.White}
                    position={[-458.095, 1278, -489.896]}
                    rotation={[-Math.PI, 0.736, -Math.PI]}
                />
            </group>

            <AnimatedAws />
            <AnimatedBlender />
            <AnimatedCss />
            <AnimatedDocker />
            <AnimatedFlask />
            <AnimatedGit />
            <AnimatedGithub />
            <AnimatedHtml />
            <AnimatedJavascript />
            <AnimatedPostgres />
            <AnimatedPrisma />
            <AnimatedPython />
            <AnimatedReact />
            <AnimatedRedux />
            <AnimatedTailwind />
            <AnimatedTypescript />
            <AnimatedVercel />
        </>
    );
};
useGLTF.preload('/models/skills/skillsGrid.glb');

export default Skills;
