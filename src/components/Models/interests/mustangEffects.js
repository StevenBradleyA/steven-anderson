import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const MustangEffects = () => {
    const group = useRef();
    const { nodes } = useGLTF('/models/interests/mustangEffects.glb');

    const retroGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff00ff),
        emissive: new THREE.Color(0xff007f),
        emissiveIntensity: 1,
    });

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 2.5,
    });

    const blueTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        side: THREE.DoubleSide,
        opacity: 0.1,
        transparent: true,
    });

    const [targetY, setTargetY] = useState(1256);
    const [currentY, setCurrentY] = useState(1256);
    const [isIntersecting, setIsIntersecting] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('mustang');
        }
    };

    const handleIntersectionEnter = () => {
        setTargetY(1293);
        setIsIntersecting(true);
    };

    const handleIntersectionExit = () => {
        setTargetY(1256);
        setIsIntersecting(false);
    };

    useEffect(() => {
        if (isIntersecting) {
            window.addEventListener('keydown', handleKeyPress);
        } else {
            window.removeEventListener('keydown', handleKeyPress);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isIntersecting]);

    useFrame(() => {
        setCurrentY((prevY) => {
            const deltaY = targetY - prevY;
            const step = 0.5;
            if (Math.abs(deltaY) < step) {
                return targetY;
            }
            return prevY + Math.sign(deltaY) * step;
        });
    });

    return (
        <>
            <group name="Scene" dispose={null}>
                <mesh
                    name="cubeCorners002"
                    castShadow
                    receiveShadow
                    geometry={nodes.cubeCorners002.geometry}
                    material={blueGlow}
                    position={[-333, currentY, 421.246]}
                    scale={[42.161, 22.639, 42.618]}
                />
                {/* <mesh
                    name="enter"
                    castShadow
                    receiveShadow
                    geometry={nodes.enter.geometry}
                    material={blueGlow}
                    position={[486.981, 1278, -190.642]}
                /> */}
                <mesh
                    name="cubeFaces002"
                    castShadow
                    receiveShadow
                    geometry={nodes.cubeFaces002.geometry}
                    material={blueTransparent}
                    position={[-333, currentY, 421.246]}
                    scale={[42.161, 22.639, 42.618]}
                />
            </group>

            <RigidBody
                position={[-333, 1277, 390]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[60, 10, 90]}
                    rotation={[0, 0, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/interests/mustangEffects.glb');

export default MustangEffects;
