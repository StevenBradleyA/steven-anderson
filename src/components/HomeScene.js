'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import HachiRoku from './Models/hachiroku';
import LowPolyIsland from './Models/lowPolyIsland';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

const ThreeScene = () => {
    // <Physics gravity={[0, -981, 0]} debug>
    // The X axis is red. The Y axis is green. The Z axis is blue.

    const CustomBackground = () => {
        const { gl } = useThree();
        gl.setClearColor('#87ceeb'); // Sky blue background
        return null;
    };

    const Sun = () => (
        <Sphere args={[600, 600, 600]} position={[2000, 1800, -1000]}>
            <meshStandardMaterial
                emissive="yellow"
                emissiveIntensity={1}
                color="yellow"
            />
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

    return (
        <Canvas
            gl={{ antialias: true, precision: 'highp' }}
            camera={{
                position: [0, 2000, 0],
                near: 0.1,
                far: 10000,
                fov: 75,
            }}
            onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0);
            }}
        >
            <CustomBackground />
            <fog attach="fog" args={['#87ceeb', 1500, 5000]} />
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
                <Sun />
                <Stars />
            </Suspense>
        </Canvas>
    );
};

export default ThreeScene;
