'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
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
import CustomBackground from './customBackground';
import Stars from './stars';

const ThreeScene = () => {
    // The X axis is red. The Y axis is green. The Z axis is blue.

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Canvas
                camera={{
                    position: [0, 2000, 0],
                    near: 0.1,
                    far: 11000,
                    fov: 60,
                }}
                // onCreated={({ gl, camera }) => {
                //     gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                //     camera.lookAt(0, 0, 0);
                // }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.8} />
                    <directionalLight
                        position={[1500, 2500, -2500]}
                        intensity={1.2}
                        color="white"
                    />
                    <Physics gravity={[0, -110, 0]}>
                        <LowPolyIsland />
                        <TreesAndRocks />
                        <RetroStands />
                        <Hachiroku />
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
                    <CustomBackground />
                    {/* <GrassBlades /> */}
                    <RetroSun />
                    <Mustang />
                    <MechanicalKeyboard />
                    <Siegmeyer />
                    <Controls />
                    <Countach />
                    <Ferrari />
                    <Stars />
                </Suspense>
            </Canvas>
        </Suspense>
    );
};

export default ThreeScene;
