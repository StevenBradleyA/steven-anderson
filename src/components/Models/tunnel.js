'use client';
import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Tunnel = () => {
    const { nodes, materials, animations } = useGLTF(
        '/models/tunnelEffects.glb'
    );
    // const { actions } = useAnimations(animations, nodes.videoTriangle);

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
    });

    // useEffect(() => {
    //     actions.Experiment.play();
    // }, [actions]);

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelGrid.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelPlane.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.depthTriangle.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.depthTriangle001.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.depthTriangle002.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.videoTriangle.geometry}
                material={materials.tunnelGraphic}
                position={[409.787, 1134.843, 159.498]}
                rotation={[Math.PI / 2, 0, -0.307]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights001.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights002.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights003.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights004.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights005.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights006.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights007.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights008.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights009.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights010.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights011.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights012.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights013.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights014.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights015.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights016.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights017.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights018.geometry}
                material={blueGlow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tunnelLights019.geometry}
                material={blueGlow}
            />
        </group>
    );
};
useGLTF.preload('/models/tunnelEffects.glb');
export default Tunnel;
