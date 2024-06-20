'use client';
import React, { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Plane, useGLTF } from '@react-three/drei';
import LowPolyIsland from './lowPolyIsland';
import HachiRoku from './hachiroku';
import GrassBlades from './grassBlades';
import TreesAndRocks from './treesAndRocks';
import RetroSun from './retroSun';
import HireMeSigns from './hireMeSigns';
import StreetLights from './streetLights';
import TireStacks from './tireStacks';
import RetroStands from './retroStands';
import Skills from './skills/skills';
import Ferrari from './f40/ferrari';
import Projects from './projects';
import CenterPiece from './centerPiece';
import {
    DirectionalLightHelper,
    PointLightHelper,
    SpotLightHelper,
} from 'three';
import { useHelper } from '@react-three/drei';
import Mustang from './mustang';
import MechanicalKeyboard from './mechanicalKeyboard';
import Siegmeyer from './siegmeyer';
import Hackerman from './hackerman';
import Tunnel from './tunnel';
import Controls from './controls';
import ProjectLinks from './projectLinks';
import Countach from './countach/countach';

const ThreeScene = () => {
    // The X axis is red. The Y axis is green. The Z axis is blue.
    const { nodes, materials } = useGLTF('/models/hachiroku.glb');
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
        const starCount = 500;
        // const starCount = 1000;

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
                    <ambientLight intensity={1} />
                    {/* <directionalLight position={[1500, 2500, -2500]} intensity={1} /> */}

                    <DirectionalLightWithHelper
                        position={[1500, 2500, -2500]}
                        intensity={1.2}
                        color="white"
                    />

                    <Physics gravity={[0, -98.1, 0]} debug>
                        <LowPolyIsland />
                        <TreesAndRocks />
                        <RetroStands />
                        <HachiRoku />
                        <TireStacks />
                        <HireMeSigns />
                        <StreetLights />
                        <Projects />
                        <CenterPiece />
                    </Physics>
                    <axesHelper args={[150]} position={[0, 1200, 0]} />
                    <CustomBackground />
                    <Skills />
                    <Tunnel />
                    <GrassBlades />
                    <RetroSun />
                    <Mustang />
                    <MechanicalKeyboard />
                    <Siegmeyer />
                    <Hackerman />
                    <Controls />
                    <ProjectLinks />
                    <Countach />
                    <Ferrari />
                    {/* 
                  <Stars />
                  <Clouds /> */}
                </Suspense>
            </Canvas>
        </>
    );
};

export default ThreeScene;

/*

export interface RigidBodyOptions extends ColliderProps {

     Specify the type of this rigid body
     
    type?: RigidBodyTypeString;
    export interface RigidBodyOptions extends ColliderProps {
    
      Specify the type of this rigid body
    
    type?: RigidBodyTypeString;
    
      Whether or not this body can sleep.
      @defaultValue true
    
    canSleep?: boolean;
     The linear damping coefficient of this rigid-body./
    linearDamping?: number;
     The angular damping coefficient of this rigid-body./
    angularDamping?: number;
    
      The initial linear velocity of this body.
      @defaultValue [0,0,0]
    
    linearVelocity?: Vector3Tuple;
    
      The initial angular velocity of this body.
      @defaultValue [0,0,0]
    
    angularVelocity?: Vector3Tuple;
    
      The scaling factor applied to the gravity affecting the rigid-body.
      @defaultValue 1.0
    
    gravityScale?: number;
    
      The dominance group of this RigidBody. If a rigid body has a higher domiance group,
      on collision it will be immune to forces originating from the other bodies.
      https://rapier.rs/docs/user_guides/javascript/rigid_bodies#dominance
      Default: 0
    
    dominanceGroup?: number;
    
      Whether or not Continous Collision Detection is enabled for this rigid-body.
      https://rapier.rs/docs/user_guides/javascript/rigid_bodies#continuous-collision-detection
      @defaultValue false
    
    ccd?: boolean;
    
      Initial position of the RigidBody
    
    position?: Object3DProps["position"];
    
      Initial rotation of the RigidBody
    
    rotation?: Object3DProps["rotation"];
    
      Automatically generate colliders based on meshes inside this
      rigid body.
     
      You can change the default setting globally by setting the colliders
      prop on the <Physics /> component.
     
      Setting this to false will disable automatic colliders.
    
    colliders?: RigidBodyAutoCollider | false;
    
      Set the friction of auto-generated colliders.
      This does not affect any non-automatic child collider-components.
    
    friction?: number;
    
      Set the restitution (bounciness) of auto-generated colliders.
      This does not affect any non-automatic child collider-components.
    
    restitution?: number;
    
      Sets the number of additional solver iterations that will be run for this
      rigid-body and everything that interacts with it directly or indirectly
      through contacts or joints.
     
      Compared to increasing the global `World.numSolverIteration`, setting this
      value lets you increase accuracy on only a subset of the scene, resulting in reduced
      performance loss.
    
    additionalSolverIterations?: number;
    
      The default collision groups bitmask for all colliders in this rigid body.
      Can be customized per-collider.
    
    collisionGroups?: InteractionGroups;
    
      The default solver groups bitmask for all colliders in this rigid body.
      Can be customized per-collider.
    
    solverGroups?: InteractionGroups;
    onSleep?(): void;
    onWake?(): void;
    
      Locks all rotations that would have resulted from forces on the created rigid-body.
    
    lockRotations?: boolean;
    
      Locks all translations that would have resulted from forces on the created rigid-body.
    
    lockTranslations?: boolean;
    
      Allow rotation of this rigid-body only along specific axes.
    
    enabledRotations?: Boolean3Tuple;
    
      Allow translation of this rigid-body only along specific axes.
    
    enabledTranslations?: Boolean3Tuple;
    
      Passed down to the object3d representing this collider.
    
    userData?: Object3DProps["userData"];
    
      Include invisible objects on the collider creation estimation.
    
    includeInvisible?: boolean;
    
      Transform the RigidBodyState
      @internal Do not use. Used internally by the InstancedRigidBodies to alter the RigidBody State
    
    transformState?: (state: RigidBodyState) => RigidBodyState;
}export interface RigidBodyOptions extends ColliderProps {
    
      Specify the type of this rigid body
    
    type?: RigidBodyTypeString;
    
      Whether or not this body can sleep.
      @defaultValue true
    
    canSleep?: boolean;
     The linear damping coefficient of this rigid-body./
    linearDamping?: number;
     The angular damping coefficient of this rigid-body./
    angularDamping?: number;
    
      The initial linear velocity of this body.
      @defaultValue [0,0,0]
    
    linearVelocity?: Vector3Tuple;
    
      The initial angular velocity of this body.
      @defaultValue [0,0,0]
    
    angularVelocity?: Vector3Tuple;
    
      The scaling factor applied to the gravity affecting the rigid-body.
      @defaultValue 1.0
    
    gravityScale?: number;
    
      The dominance group of this RigidBody. If a rigid body has a higher domiance group,
      on collision it will be immune to forces originating from the other bodies.
      https://rapier.rs/docs/user_guides/javascript/rigid_bodies#dominance
      Default: 0
    
    dominanceGroup?: number;
    
      Whether or not Continous Collision Detection is enabled for this rigid-body.
      https://rapier.rs/docs/user_guides/javascript/rigid_bodies#continuous-collision-detection
      @defaultValue false
    
    ccd?: boolean;
    
      Initial position of the RigidBody
    
    position?: Object3DProps["position"];
    
      Initial rotation of the RigidBody
    
    rotation?: Object3DProps["rotation"];
    
      Automatically generate colliders based on meshes inside this
      rigid body.
     
      You can change the default setting globally by setting the colliders
      prop on the <Physics /> component.
     
      Setting this to false will disable automatic colliders.
    
    colliders?: RigidBodyAutoCollider | false;
    
      Set the friction of auto-generated colliders.
      This does not affect any non-automatic child collider-components.
    
    friction?: number;
    
      Set the restitution (bounciness) of auto-generated colliders.
      This does not affect any non-automatic child collider-components.
    
    restitution?: number;
    
      Sets the number of additional solver iterations that will be run for this
      rigid-body and everything that interacts with it directly or indirectly
      through contacts or joints.
     
      Compared to increasing the global `World.numSolverIteration`, setting this
      value lets you increase accuracy on only a subset of the scene, resulting in reduced
      performance loss.
    
    additionalSolverIterations?: number;
    
      The default collision groups bitmask for all colliders in this rigid body.
      Can be customized per-collider.
    
    collisionGroups?: InteractionGroups;
    
      The default solver groups bitmask for all colliders in this rigid body.
      Can be customized per-collider.
    
    solverGroups?: InteractionGroups;
    onSleep?(): void;
    onWake?(): void;
    
      Locks all rotations that would have resulted from forces on the created rigid-body.
    
    lockRotations?: boolean;
    
      Locks all translations that would have resulted from forces on the created rigid-body.
    
    lockTranslations?: boolean;
    
      Allow rotation of this rigid-body only along specific axes.
    
    enabledRotations?: Boolean3Tuple;
    
      Allow translation of this rigid-body only along specific axes.
    
    enabledTranslations?: Boolean3Tuple;
    
      Passed down to the object3d representing this collider.
    
    userData?: Object3DProps["userData"];
    
      Include invisible objects on the collider creation estimation.
    
    includeInvisible?: boolean;
    
      Transform the RigidBodyState
      @internal Do not use. Used internally by the InstancedRigidBodies to alter the RigidBody State
    
    transformState?: (state: RigidBodyState) => RigidBodyState;
}
      Whether or not this body can sleep.
      @defaultValue true
    
    canSleep?: boolean;
     The linear damping coefficient of this rigid-body./
    linearDamping?: number;
     The angular damping coefficient of this rigid-body./
    angularDamping?: number;
    
      The initial linear velocity of this body.
      @defaultValue [0,0,0]
    
    linearVelocity?: Vector3Tuple;
    
      The initial angular velocity of this body.
      @defaultValue [0,0,0]
    
    angularVelocity?: Vector3Tuple;
    
      The scaling factor applied to the gravity affecting the rigid-body.
      @defaultValue 1.0
    
    gravityScale?: number;
    
      The dominance group of this RigidBody. If a rigid body has a higher domiance group,
      on collision it will be immune to forces originating from the other bodies.
      https://rapier.rs/docs/user_guides/javascript/rigid_bodies#dominance
      Default: 0
    
    dominanceGroup?: number;
    
      Whether or not Continous Collision Detection is enabled for this rigid-body.
      https://rapier.rs/docs/user_guides/javascript/rigid_bodies#continuous-collision-detection
      @defaultValue false
    
    ccd?: boolean;
    
      Initial position of the RigidBody
    
    position?: Object3DProps["position"];
    
      Initial rotation of the RigidBody
    
    rotation?: Object3DProps["rotation"];
    
      Automatically generate colliders based on meshes inside this
      rigid body.
     
      You can change the default setting globally by setting the colliders
      prop on the <Physics /> component.
     
      Setting this to false will disable automatic colliders.
    
    colliders?: RigidBodyAutoCollider | false;
    
      Set the friction of auto-generated colliders.
      This does not affect any non-automatic child collider-components.
    
    friction?: number;
    
      Set the restitution (bounciness) of auto-generated colliders.
      This does not affect any non-automatic child collider-components.
    
    restitution?: number;
    
      Sets the number of additional solver iterations that will be run for this
      rigid-body and everything that interacts with it directly or indirectly
      through contacts or joints.
     
      Compared to increasing the global `World.numSolverIteration`, setting this
      value lets you increase accuracy on only a subset of the scene, resulting in reduced
      performance loss.
    
    additionalSolverIterations?: number;
    
      The default collision groups bitmask for all colliders in this rigid body.
      Can be customized per-collider.
    
    collisionGroups?: InteractionGroups;
    
      The default solver groups bitmask for all colliders in this rigid body.
      Can be customized per-collider.
    
    solverGroups?: InteractionGroups;
    onSleep?(): void;
    onWake?(): void;
    
      Locks all rotations that would have resulted from forces on the created rigid-body.
    
    lockRotations?: boolean;
    
      Locks all translations that would have resulted from forces on the created rigid-body.
    
    lockTranslations?: boolean;
    
      Allow rotation of this rigid-body only along specific axes.
    
    enabledRotations?: Boolean3Tuple;
    
      Allow translation of this rigid-body only along specific axes.
    
    enabledTranslations?: Boolean3Tuple;
    
      Passed down to the object3d representing this collider.
    
    userData?: Object3DProps["userData"];
    
      Include invisible objects on the collider creation estimation.
    
    includeInvisible?: boolean;
    
      Transform the RigidBodyState
      @internal Do not use. Used internally by the InstancedRigidBodies to alter the RigidBody State
    
    transformState?: (state: RigidBodyState) => RigidBodyState;
}


*/
