'use client';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import React, { useRef } from 'react';

const CenterPiece = () => {
    const { nodes } = useGLTF('/models/centerPiece.glb');

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
        side: THREE.DoubleSide,
    });
    const sphereGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.5,
        side: THREE.DoubleSide,
    });

    const black = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x000000),
        opacity: 0.95,
        transparent: true,
        side: THREE.DoubleSide,
    });

    // Refs for the meshes to be rotated
    const lowerGridRef = useRef();
    const topGridRef = useRef();
    const sphereRef = useRef();

    useFrame((state, delta) => {
        if (lowerGridRef.current) {
            lowerGridRef.current.rotation.y += 0.001;
        }
        if (topGridRef.current) {
            topGridRef.current.rotation.y += 0.001;
        }
        if (sphereRef.current) {
            const elapsed = state.clock.elapsedTime;

            sphereRef.current.rotation.y += 0.01;

            // Color pulsing
            const pulse = (Math.sin(elapsed * 2) + 1) / 2;
            sphereRef.current.material.emissiveIntensity = 1 + pulse * 3;
        }
    });

    return (
        <group dispose={null}>
            <group name="Scene">
                <mesh
                    name="stand"
                    geometry={nodes.stand.geometry}
                    material={black}
                />
                <mesh
                    name="lowergrid"
                    geometry={nodes.lowergrid.geometry}
                    material={blueGlow}
                    ref={lowerGridRef}
                    position={[85, 1286.132, -218.001]}
                />
                <mesh
                    name="topgrid"
                    geometry={nodes.topgrid.geometry}
                    material={blueGlow}
                    ref={topGridRef}
                    position={[85, 1360.909, -218.001]}
                />
                <mesh
                    name="sphere"
                    geometry={nodes.sphere.geometry}
                    material={sphereGlow}
                    ref={sphereRef}
                    position={[85.01, 1324.133, -217.029]}
                />
            </group>
        </group>
    );
};
useGLTF.preload('/models/centerPiece.glb');

export default CenterPiece;
