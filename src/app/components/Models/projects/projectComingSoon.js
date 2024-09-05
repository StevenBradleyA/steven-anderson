import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useState, useEffect } from 'react';
import * as THREE from 'three';

const ProjectComingSoon = () => {
    const { nodes } = useGLTF('/models/projects/projectComingSoonLink.glb');

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
            window.open('https://github.com/StevenBradleyA', '_blank');
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
                <mesh geometry={nodes.Project4Grid.geometry} material={color} />
                <mesh
                    geometry={nodes.Project4Enter.geometry}
                    material={retroGlow}
                    position={[334.028, currentY, -527.068]}
                />
            </group>
            <RigidBody
                position={[334.028, 1277, -527.068]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[40, 10, 30]}
                    rotation={[0, -0.7, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/projects/projectComingSoonLink.glb');

export default ProjectComingSoon;
