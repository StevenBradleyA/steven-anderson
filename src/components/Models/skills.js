'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

const Skills = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills.glb');
    const { actions } = useAnimations(animations, group);

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.2,
    });

    console.log(actions);


    // useEffect(() => {

    //     if (actions) {
    //         Object.keys(actions).forEach((actionName) => {
    //             actions[actionName].reset().setLoop(THREE.LoopRepeat).play();
    //         });
    //     }
    // }, [actions]);

   

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="aws" position={[-431.405, 1332.874, -625.61]}>
                    <mesh
                        name="Curve030"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve030.geometry}
                        material={materials.awsOrange}
                    />
                    <mesh
                        name="Curve030_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve030_1.geometry}
                        material={materials.awsBlue}
                    />
                </group>
                <group name="blender" position={[-539.142, 1339.491, -602.593]}>
                    <mesh
                        name="Curve032"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve032.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve032_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve032_1.geometry}
                        material={materials.BlenderBlue}
                    />
                    <mesh
                        name="Curve032_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve032_2.geometry}
                        material={materials.blenderOrange}
                    />
                </group>
                <group name="css" position={[-402.157, 1308.094, -641.775]}>
                    <mesh
                        name="Curve021"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve021.geometry}
                        material={materials.css}
                    />
                    <mesh
                        name="Curve021_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve021_1.geometry}
                        material={materials.csslight}
                    />
                    <mesh
                        name="Curve021_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve021_2.geometry}
                        material={materials.White}
                    />
                </group>
                <mesh
                    name="flask"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask.geometry}
                    material={materials.Black}
                    position={[-605.843, 1341.559, -540.346]}
                />
                <group name="git" position={[-449.685, 1353.328, -582.443]}>
                    <mesh
                        name="Curve016"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve016.geometry}
                        material={materials.git}
                    />
                    <mesh
                        name="Curve016_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve016_1.geometry}
                        material={materials.White}
                    />
                </group>
                <group name="html" position={[-627.359, 1330.932, -500.28]}>
                    <mesh
                        name="Curve036"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve036.geometry}
                        material={materials.htmllight}
                    />
                    <mesh
                        name="Curve036_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve036_1.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve036_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve036_2.geometry}
                        material={materials.htmlorange}
                    />
                </group>
                <group
                    name="javascript"
                    position={[-400.087, 1303.274, -576.33]}
                >
                    <mesh
                        name="Curve037"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve037.geometry}
                        material={materials.javascript}
                    />
                    <mesh
                        name="Curve037_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve037_1.geometry}
                        material={materials.Black}
                    />
                </group>
                <mesh
                    name="tailwind"
                    castShadow
                    receiveShadow
                    geometry={nodes.tailwind.geometry}
                    material={materials.tailwind}
                    position={[-508.493, 1306.581, -525.584]}
                />
                <group name="postgres" position={[-556.665, 1333.21, -528.511]}>
                    <mesh
                        name="Curve042"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042.geometry}
                        material={materials['Curve.025_Baked']}
                    />
                    <mesh
                        name="Curve042_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042_1.geometry}
                        material={materials['Curve.026_Baked']}
                    />
                    <mesh
                        name="Curve042_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042_2.geometry}
                        material={materials['SVGMat.009']}
                    />
                    <mesh
                        name="Curve042_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042_3.geometry}
                        material={materials['Curve.024_Baked']}
                    />
                </group>
                <mesh
                    name="prisma"
                    castShadow
                    receiveShadow
                    geometry={nodes.prisma.geometry}
                    material={materials.Black}
                    position={[-501.957, 1329.628, -565.82]}
                />
                <group name="python" position={[-465.25, 1331.763, -531.387]}>
                    <mesh
                        name="Curve045"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve045.geometry}
                        material={materials.python}
                    />
                    <mesh
                        name="Curve045_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve045_1.geometry}
                        material={materials.pythonyellow}
                    />
                </group>
                <mesh
                    name="react"
                    castShadow
                    receiveShadow
                    geometry={nodes.react.geometry}
                    material={materials.react}
                    position={[-601.181, 1321.889, -461.149]}
                />
                <mesh
                    name="redux"
                    castShadow
                    receiveShadow
                    geometry={nodes.redux.geometry}
                    material={materials.redux}
                    position={[-556.901, 1310.959, -561.631]}
                />
                <group
                    name="typescript"
                    position={[-428.199, 1316.64, -544.848]}
                >
                    <mesh
                        name="Curve060"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve060.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve060_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve060_1.geometry}
                        material={materials.TypeScript}
                    />
                </group>
                <mesh
                    name="vercel"
                    castShadow
                    receiveShadow
                    geometry={nodes.vercel.geometry}
                    material={materials.Black}
                    position={[-565.459, 1305.438, -493.14]}
                />
                <mesh
                    name="docker"
                    castShadow
                    receiveShadow
                    geometry={nodes.docker.geometry}
                    material={materials.docker}
                    position={[-601.354, 1316.35, -563.196]}
                />
                <mesh
                    name="github"
                    castShadow
                    receiveShadow
                    geometry={nodes.github.geometry}
                    material={materials.Black}
                    position={[-487.804, 1330.025, -635.113]}
                />
                <mesh
                    name="skillsGrid"
                    castShadow
                    receiveShadow
                    geometry={nodes.skillsGrid.geometry}
                    material={materials.Blue}
                />
            </group>
        </group>
    );
};
useGLTF.preload('/models/skills.glb');

export default Skills;
