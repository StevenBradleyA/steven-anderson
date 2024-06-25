import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
const ProjectGch = () => {
    const { nodes } = useGLTF('/models/projects/projectGch.glb');

    const retroGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff00ff),
        emissive: new THREE.Color(0xff007f),
        emissiveIntensity: 1,
    });

    const blue = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 2.5,
    });

    const whiteTransparent = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        opacity: 0.5,
        transparent: true,
    });

    const [color, setColor] = useState(whiteTransparent);
    const [targetY, setTargetY] = useState(1277);
    const [currentY, setCurrentY] = useState(1277);
    const [isIntersecting, setIsIntersecting] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            window.open(
                'https://www.youtube.com/watch?v=wu4NYMmk8pk&t=23s',
                '_blank'
            );
        }
    };

    const handleIntersectionEnter = () => {
        setColor(blue);
        setTargetY(1293);
        setIsIntersecting(true);
    };

    const handleIntersectionExit = () => {
        setColor(whiteTransparent);
        setTargetY(1277);
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
            <group dispose={null}>
                <group name="Scene">
                    <mesh
                        name="Project3Enter"
                        castShadow
                        receiveShadow
                        geometry={nodes.Project3Enter.geometry}
                        material={retroGlow}
                        position={[438.778, currentY, -368.45]}
                    />
                    <mesh
                        name="Project3Grid"
                        castShadow
                        receiveShadow
                        geometry={nodes.Project3Grid.geometry}
                        material={color}
                    />
                </group>
            </group>
            <RigidBody
                position={[438.778, 1277, -368.45]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[40, 10, 30]}
                    rotation={[0, 1.98, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/projects/projectGch.glb');

export default ProjectGch;
