'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
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
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useGlobalState } from '~/components/Context/stateContext';
import { useFrame } from '@react-three/fiber';

const Skills = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/skills/skillsGrid.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.8,
    });

    const whiteTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        opacity: 0.6,
        transparent: true,
    });

    const [enterTargetY, setEnterTargetY] = useState(1256);
    const [enterY, setEnterY] = useState(1256);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { setModalPopup } = useGlobalState();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setModalPopup('skills');
        }
    };

    const handleIntersectionEnter = () => {
        setEnterTargetY(1288);
        setIsIntersecting(true);
    };

    const handleIntersectionExit = () => {
        setEnterTargetY(1278);
        setIsIntersecting(false);
    };

    useEffect(() => {
        if (isIntersecting) {
            window.addEventListener('keydown', handleKeyPress);
        } else {
            window.removeEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isIntersecting]);

    useFrame(() => {
        setEnterY((prevY) => {
            const deltaY = enterTargetY - prevY;
            const step = 0.4;
            if (Math.abs(deltaY) < step) {
                return enterTargetY;
            }
            return prevY + Math.sign(deltaY) * step;
        });
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
                    material={whiteTransparent}
                    position={[-458.095, enterY, -489.896]}
                    rotation={[-Math.PI, 0.736, -Math.PI]}
                />
            </group>

            <RigidBody
                position={[-458.095, 1278, -489.896]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[200, 10, 150]}
                    rotation={[0, 0.85, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>

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
