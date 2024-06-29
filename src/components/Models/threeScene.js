'use client';
import React, { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Plane, useGLTF } from '@react-three/drei';
import LowPolyIsland from './lowPolyIsland';
import GrassBlades from './grassBlades';
import TreesAndRocks from './treesAndRocks';
import RetroSun from './retroSun';
import HireMeSigns from './hireMeSigns';
import StreetLights from './streetLights';
import TireStacks from './tireStacks';
import RetroStands from './retroStands';
import Skills from './skills/skills';
import Ferrari from './f40/ferrari';
import Projects from './projects/projects';
import CenterPiece from './centerPiece';
import {
    DirectionalLightHelper,
    PointLightHelper,
    SpotLightHelper,
} from 'three';
import { useHelper } from '@react-three/drei';
import Mustang from './interests/mustang';
import MechanicalKeyboard from './interests/mechanicalKeyboard';
import Siegmeyer from './interests/siegmeyer';
import Hackerman from './hackerman';
import Controls from './controls';
import ProjectLinks from './projects/projectLinks';
import Countach from './countach/countach';
import MustangEffects from './interests/mustangEffects';
import MechanicalKeyboardEffects from './interests/mechanicalKeyboardEffects';
import SiegmeyerEffects from './interests/siegmeyerEffects';
import TunnelEffects from './tunnelEffects';
import Hachiroku from './hachiroku';

const ThreeScene = () => {
    // The X axis is red. The Y axis is green. The Z axis is blue.
    // IDEAS
    // DAY TIME NIGHT TIME SLIDER Changes every 5 or you can select a time
    // SYNTHWAVE MODE
    // later I want to have a cool minigame

    // track needs graphics or more coloration -- slopes needs fixing

    // todo Setting a defualt canvas color behind this or nah? so its black ???

    const CustomBackground = () => {
        const createGradientTexture = (startColor, endColor) => {
            const size = 512;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const context = canvas.getContext('2d');

            const gradient = context.createLinearGradient(0, 0, 0, size);
            gradient.addColorStop(0, startColor);
            gradient.addColorStop(1, endColor);

            context.fillStyle = gradient;
            context.fillRect(0, 0, size, size);

            return new THREE.CanvasTexture(canvas);
        };

        const gradientTexture = useMemo(
            () => createGradientTexture('#2e0249', '#000000'),
            []
        );
        const bottomGradientTexture = useMemo(
            () => createGradientTexture('#000000', '#000000'),
            []
        );
        const topGradientTexture = useMemo(
            () => createGradientTexture('#2e0249', '#2e0249'),
            []
        );

        const planes = [
            {
                position: [0, 0, -5000],
                rotation: [0, 0, 0],
                texture: gradientTexture,
            }, // Back
            {
                position: [0, 0, 5000],
                rotation: [0, Math.PI, 0],
                texture: gradientTexture,
            }, // Front
            {
                position: [-5000, 0, 0],
                rotation: [0, Math.PI / 2, 0],
                texture: gradientTexture,
            }, // Left
            {
                position: [5000, 0, 0],
                rotation: [0, -Math.PI / 2, 0],
                texture: gradientTexture,
            }, // Right
            {
                position: [0, 5000, 0],
                rotation: [Math.PI / 2, 0, 0],
                texture: topGradientTexture,
            }, // Top
            {
                position: [0, -5000, 0],
                rotation: [-Math.PI / 2, 0, 0],
                texture: bottomGradientTexture,
            }, // Bottom
        ];

        return (
            <>
                {planes.map((plane, index) => (
                    <Plane
                        key={index}
                        args={[10000, 10000]}
                        position={plane.position}
                        rotation={plane.rotation}
                    >
                        <meshBasicMaterial
                            map={plane.texture}
                            side={THREE.DoubleSide}
                        />
                    </Plane>
                ))}
            </>
        );
    };

    const Stars = () => {
        const { scene } = useThree();
        const starCount = 300;
        // const starCount = 1000;

        for (let i = 0; i < starCount; i++) {
            const star = new THREE.Mesh(
                new THREE.SphereGeometry(1, 24, 24),
                new THREE.MeshBasicMaterial({ color: 'white' })
            );
            star.position.set(
                Math.random() * 4000 - 2500,
                Math.random() * 3000 + 800,
                Math.random() * 4000 - 2500
            );
            scene.add(star);
        }
        return null;
    };
    const Clouds = () => {
        const cloudCount = 20;
        const cloudColor = new THREE.Color('#FFFFFF'); // Whiter gray color
        const clouds = [];

        for (let i = 0; i < cloudCount; i++) {
            const cloud = (
                <mesh
                    key={i}
                    position={[
                        Math.random() * 8000 - 4000,
                        Math.random() * 1000 + 2000,
                        Math.random() * 8000 - 4000,
                    ]}
                >
                    <boxGeometry args={[500, 100, 500]} />
                    <meshStandardMaterial color={cloudColor} />
                </mesh>
            );
            clouds.push(cloud);
        }

        return <group>{clouds}</group>;
    };

    const DirectionalLightWithHelper = ({ position, intensity, color }) => {
        const lightRef = useRef();
        useHelper(lightRef, DirectionalLightHelper, 5, color); // size and color of the helper

        return (
            <directionalLight
                ref={lightRef}
                position={position}
                intensity={intensity}
                color={color}
            />
        );
    };

    const PointLightWithHelper = ({ position, intensity, color }) => {
        const lightRef = useRef();
        useHelper(lightRef, PointLightHelper, 4, color); // size and color of the helper

        return (
            <pointLight
                ref={lightRef}
                position={position}
                intensity={intensity}
                color={color}
            />
        );
    };

    const trackRef = useRef();

    return (
        <>
            <Canvas
                gl={{ antialias: true, precision: 'highp' }}
                camera={{
                    position: [0, 2000, 0],
                    near: 0.1,
                    far: 12000,
                    fov: 60,
                }}
                onCreated={({ camera }) => {
                    camera.lookAt(0, 0, 0);
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.8} />
                    {/* <directionalLight position={[1500, 2500, -2500]} intensity={1} /> */}

                    <DirectionalLightWithHelper
                        position={[1500, 2500, -2500]}
                        intensity={1.2}
                        color="white"
                    />

                    <Physics gravity={[0, -98.1, 0]}>
                        <LowPolyIsland trackRef={trackRef} />
                        <TreesAndRocks />
                        <RetroStands />
                        <Hachiroku trackRef={trackRef} />
                        <TireStacks />
                        <HireMeSigns />
                        <StreetLights />
                        <Projects />
                        <ProjectLinks />
                        <CenterPiece />
                        <MustangEffects />
                        <MechanicalKeyboardEffects />
                        <SiegmeyerEffects />
                        <TunnelEffects />
                        <Hackerman />
                        <Skills />
                    </Physics>
                    <axesHelper args={[150]} position={[0, 1200, 0]} />
                    <CustomBackground />
                    <GrassBlades />
                    <RetroSun />
                    <Mustang />
                    <MechanicalKeyboard />
                    <Siegmeyer />
                    <Controls />
                    <Countach />
                    <Ferrari />

                    <Stars />
                    {/* <Clouds /> */}
                </Suspense>
            </Canvas>
        </>
    );
};

export default ThreeScene;
