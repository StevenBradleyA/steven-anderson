'use client';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GodRays, EffectComposer, Bloom } from '@react-three/postprocessing';

const MobileThreeScene = () => {
    const { nodes, materials } = useGLTF('/models/mobile-portfolio.glb');

    const sunRef = useRef();
    const [godRaysReady, setGodRaysReady] = useState(false);

    useEffect(() => {
        if (sunRef.current) {
            setGodRaysReady(true);
        }
    }, [sunRef]);

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 2.5,
    });
    const orangeGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffa500),
        emissive: new THREE.Color(0xffa500),
        emissiveIntensity: 0.3,
    });

    const purpleGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x800080),
        emissive: new THREE.Color(0x800080),
        emissiveIntensity: 2.8,
    });
    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.5,
    });
    const lightGreenGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x22c55e),
        emissive: new THREE.Color(0x22c55e),
        emissiveIntensity: 2,
    });
    const darkGreenGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x003300),
    });
    return (
        <Canvas
            camera={{
                position: [-500, 50, -500],
                near: 0.1,
                far: 6000,
                fov: 70,
            }}
        >
            <ambientLight intensity={1} />
            {/* <pointLight position={[10, 10, 10]} /> */}
            {/* {godRaysReady && ( */}
            <EffectComposer>
                {/* <GodRays
                        sun={sunRef.current}
                        samples={30}
                        density={0.1}
                        decay={1}
                        weight={0.2}
                        exposure={0.1}
                        clampMax={1.0}
                        blur={true}
                    /> */}

                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.9}
                    // height={300}
                    opacity={1}
                    intensity={0.3}
                />
            </EffectComposer>
            {/* )} */}
            <group dispose={null}>
                <mesh geometry={nodes.top.geometry} material={darkGreenGlow} />
                <mesh
                    geometry={nodes.bottom.geometry}
                    material={materials.black}
                />
                <mesh
                    geometry={nodes.topGrid.geometry}
                    material={lightGreenGlow}
                />
                <mesh
                    geometry={nodes.bottomGrid.geometry}
                    material={purpleGlow}
                />
                <mesh
                    geometry={nodes.groundGrid.geometry}
                    material={blueGlow}
                />
                <mesh geometry={nodes.grid.geometry} material={blueGlow} />
                <mesh
                    geometry={nodes.gridSquare.geometry}
                    material={whiteGlow}
                />
                <mesh geometry={nodes.Text005.geometry} material={whiteGlow} />
                <mesh geometry={nodes.Title.geometry} material={blueGlow} />
                <mesh
                    geometry={nodes.PowerGlove.geometry}
                    material={materials.ComputerShell}
                />
                <mesh
                    geometry={nodes.PowerGlovePlastics.geometry}
                    material={materials.Plastic}
                />
                <mesh
                    geometry={nodes.PowerGloveText.geometry}
                    material={blueGlow}
                />
                <mesh
                    geometry={nodes.Object_9003.geometry}
                    material={purpleGlow}
                />
                <mesh
                    geometry={nodes.Object_9003_1.geometry}
                    material={orangeGlow}
                    ref={sunRef}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder001.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder001_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder002.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder002_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder003.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder003_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder004.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder004_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder007.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    geometry={nodes.conifer5_Cylinder007_1.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <OrbitControls minZoom={1.5}/>
        </Canvas>
    );
};
useGLTF.preload('/models/mobile-portfolio.glb');
export default MobileThreeScene;