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

const Skills = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/skills.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.2,
    });


    
    return (
        <>
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
            <AnimatedVercel />
        </>
    );
};
useGLTF.preload('/models/skills.glb');

export default Skills;
