import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const MechanicalKeyboardEffects = () => {
    const group = useRef();
    const { nodes } = useGLTF(
        '/models/interests/mechanicalKeyboardEffects.glb'
    );

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
    const whiteTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        opacity: 0.6,
        transparent: true,
    });

    const [cubeTargetY, setCubeTargetY] = useState(1256);
    const [enterTargetY, setEnterTargetY] = useState(1256);
    const [cubeY, setCubeY] = useState(1256);
    const [enterY, setEnterY] = useState(1256);
    const [isIntersecting, setIsIntersecting] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('mustang');
        }
    };

    const handleIntersectionEnter = () => {
        setCubeTargetY(1293);
        setEnterTargetY(1288);

        setIsIntersecting(true);
    };

    const handleIntersectionExit = () => {
        setCubeTargetY(1256);
        setEnterTargetY(1256);
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
        setCubeY((prevY) => {
            const deltaY = cubeTargetY - prevY;
            const step = 0.5;
            if (Math.abs(deltaY) < step) {
                return cubeTargetY;
            }
            return prevY + Math.sign(deltaY) * step;
        });
        setEnterY((prevY) => {
            const deltaY = enterTargetY - prevY;
            const step = 0.4;
            if (Math.abs(deltaY) < step) {
                return enterTargetY;
            }
            return prevY + Math.sign(deltaY) * step;
        });
    });

    return (
        <>
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cubeCorners001.geometry}
                    material={blueGlow}
                    position={[-465.931, cubeY, 371]}
                    scale={[42.161, 22.639, 42.618]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cubeFaces001.geometry}
                    material={blueTransparent}
                    position={[-465.931, cubeY, 371]}
                    scale={[42.161, 22.639, 42.618]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.keebEnter.geometry}
                    material={whiteTransparent}
                    position={[-472, enterY, 318]}
                />
            </group>
            <RigidBody
                position={[-465.931, 1277, 340]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[60, 10, 110]}
                    rotation={[0, 0, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/interests/mechanicalKeyboardEffects.glb');

export default MechanicalKeyboardEffects;
