'use client';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GodRays, EffectComposer, Bloom } from '@react-three/postprocessing';
const RetroSun = () => {
    const { nodes, materials } = useGLTF('/models/retroSun.glb');

    const sunRef = useRef();
    const [godRaysReady, setGodRaysReady] = useState(false);

    useEffect(() => {
        if (sunRef.current) {
            setGodRaysReady(true);
        }
    }, [sunRef]);
    return (
        <>
            <group dispose={null} position={[-3200, -600, 3200]} scale={1.6}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sun001.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: materials.Sun.color,
                            emissive: new THREE.Color(0xff007f),
                            emissiveIntensity: 0.8,
                        })
                    }
                    ref={sunRef}
                />
            </group>
            {godRaysReady && (
                <EffectComposer>
                    <GodRays
                        sun={sunRef.current}
                        samples={30}
                        density={0.1}
                        decay={1}
                        weight={0.2}
                        exposure={0.1}
                        clampMax={1.0}
                        blur={true}
                    />

                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        height={300}
                        opacity={3}
                        intensity={0.5}
                    />
                </EffectComposer>
            )}
        </>
    );
};
useGLTF.preload('/models/retroSun.glb');

export default RetroSun;
