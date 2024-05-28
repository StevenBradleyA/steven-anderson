import React, { useState, useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);
    const cubeRef = useRef();
    const speed = 5; // Adjust the speed as needed

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                setMoveForward(true);
                break;
            case 'ArrowDown':
                setMoveBackward(true);
                break;
            case 'ArrowLeft':
                setMoveLeft(true);
                break;
            case 'ArrowRight':
                setMoveRight(true);
                break;
            default:
                break;
        }
    };

    const handleKeyUp = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                setMoveForward(false);
                break;
            case 'ArrowDown':
                setMoveBackward(false);
                break;
            case 'ArrowLeft':
                setMoveLeft(false);
                break;
            case 'ArrowRight':
                setMoveRight(false);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useFrame(() => {
        if (cubeRef.current) {
            const cubePosition = cubeRef.current.translation();
            let newPosition = { ...cubePosition };

            if (moveForward) {
                newPosition.z -= speed;
            }
            if (moveBackward) {
                newPosition.z += speed;
            }
            if (moveLeft) {
                newPosition.x -= speed;
            }
            if (moveRight) {
                newPosition.x += speed;
            }

            cubeRef.current.setTranslation(newPosition, true);
        }
    });
    return (
        <RigidBody
            ref={cubeRef}
            mass={20}
            restitution={0}
            friction={1}
            linearDamping={3}
            angularDamping={2}
        >
            <mesh position={[0, 100, 0]}>
                <boxGeometry args={[50, 50, 50]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    );
};

export default Cube;
