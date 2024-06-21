import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const ProjectHacktime = () => {
    const group = useRef();
    const { nodes } = useGLTF('/models/projects/projectHacktime.glb');

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
        window.addEventListener('keydown', handleKeyPress);
    };

    const handleIntersectionExit = () => {
        setColor(whiteTransparent);
        setTargetY(1277);
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
            <group ref={group} dispose={null}>
                <group name="Scene">
                    <mesh
                        name="Project2Grid"
                        geometry={nodes.Project2Grid.geometry}
                        material={color}
                    />
                    <mesh
                        name="Project2Enter"
                        geometry={nodes.Project2Enter.geometry}
                        material={retroGlow}
                        position={[486.981, currentY, -190.642]}
                    />
                </group>
            </group>
            <RigidBody
                position={[486.981, 1277, -190.642]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[40, 10, 30]}
                    rotation={[0,  1.5708, 0]}
                    onIntersectionEnter={handleIntersectionEnter}
                    onIntersectionExit={handleIntersectionExit}
                    sensor
                />
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/projects/projectHacktime.glb');

export default ProjectHacktime;
