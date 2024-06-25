'use client';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import {
    GodRays,
    EffectComposer,
    Scanline,
    Glitch,
    Bloom,
} from '@react-three/postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';
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
                        // sun={sunRef.current}
                        // samples={30}
                        // density={0.46}
                        // decay={0.9}
                        // weight={0.4}
                        // exposure={0.6}
                        // clampMax={1}
                        // blur={true}
                        sun={sunRef.current}
                        samples={30} // High quality
                        density={0.1} // Intense rays
                        decay={1}
                        weight={0.2}
                        exposure={0.1}
                        clampMax={1.0}
                        blur={true}
                    />
                    {/* <Scanline
                        blendFunction={BlendFunction.OVERLAY} 
                        density={15} 
                    /> */}

                    {/* <Glitch
                        delay={[1.5, 3.5]} // min and max glitch delay
                        duration={[0.6, 1.0]} // min and max glitch duration
                        strength={[0.3, 1.0]} // min and max glitch strength
                        mode={GlitchMode.SPORADIC} // glitch mode
                        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                        ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                    /> */}
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        height={300}
                        opacity={3}
                        intensity={1}
                    />
                </EffectComposer>
            )}
        </>
    );
};
useGLTF.preload('/models/retroSun.glb');

export default RetroSun;
