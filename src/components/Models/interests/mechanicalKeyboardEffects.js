import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const MechanicalKeyboardEffects = () => {
    const group = useRef();
    const { nodes } = useGLTF(
        '/models/interests/mechanicalKeyboardEffects.glb'
    );

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

    // const [color, setColor] = useState(blueGlow);
    const [targetY, setTargetY] = useState(1256);
    const [currentY, setCurrentY] = useState(1256);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('mustang');
        }
    };

    const handleIntersectionEnter = () => {
        // setColor(blueGlow);
        setTargetY(1293);
        window.addEventListener('keydown', handleKeyPress);
    };

    const handleIntersectionExit = () => {
        // setColor(whiteTransparent);
        setTargetY(1256);
        window.removeEventListener('keydown', handleKeyPress);
    };

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
                    name="cubeCorners001"
                    castShadow
                    receiveShadow
                    geometry={nodes.cubeCorners001.geometry}
                    material={blueGlow}
                    position={[-465.931, currentY, 371]}
                    scale={[42.161, 22.639, 42.618]}
                />
                {/* <mesh
                    name="enter001"
                    castShadow
                    receiveShadow
                    geometry={nodes.enter001.geometry}
                    material={materials.White}
                    position={[486.981, 1278, -190.642]}
                /> */}
                <mesh
                    name="cubeFaces001"
                    castShadow
                    receiveShadow
                    geometry={nodes.cubeFaces001.geometry}
                    material={blueTransparent}
                    position={[-465.931, currentY, 371]}
                    scale={[42.161, 22.639, 42.618]}
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
