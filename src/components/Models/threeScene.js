'use client';
import React, { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, Plane } from '@react-three/drei';
import LowPolyIsland from './lowPolyIsland';
import HachiRoku from './hachiroku';
import TitleScreen from '../Loading/titleScreen';
import Loader from '../Loading/loader';
import { AnimatePresence } from 'framer-motion';

function CustomLoader() {
    return <Loader />;
}

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

    const Sun = () => (
        <Sphere args={[600, 600, 600]} position={[2000, 1800, -3000]}>
            <meshStandardMaterial color="blue" />
        </Sphere>
    );

    const Stars = () => {
        const { scene } = useThree();
        const starCount = 1000;
        for (let i = 0; i < starCount; i++) {
            const star = new THREE.Mesh(
                new THREE.SphereGeometry(1, 24, 24),
                new THREE.MeshBasicMaterial({ color: 'white' })
            );
            star.position.set(
                Math.random() * 5000 - 2500,
                Math.random() * 5000 - 2500,
                Math.random() * 5000 - 2500
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

    return (
        <>
            <Canvas
                gl={{ antialias: true, precision: 'highp' }}
                camera={{
                    position: [0, 2000, 0],
                    near: 0.1,
                    far: 12000,
                    fov: 75,
                }}
                onCreated={({ camera }) => {
                    camera.lookAt(0, 0, 0);
                }}
            >
                <Suspense fallback={null}>
                  
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[50, 1500, 50]} intensity={1} />
                    <directionalLight
                        position={[-50, 1500, -50]}
                        intensity={0.5}
                        color="blue"
                    />
                    <pointLight
                        position={[0, 2000, 1000]}
                        intensity={0.5}
                        color="orange"
                    />
                    <Physics gravity={[0, -98.1, 0]}>
                        <LowPolyIsland />
                        <HachiRoku />
                    </Physics>
                    <axesHelper args={[150]} position={[0, 1200, 0]} />
                    <CustomBackground />
                    <Sun />
                    <Stars />
                    <Clouds />
                </Suspense>
            </Canvas>
        </>
    );
};

export default ThreeScene;
