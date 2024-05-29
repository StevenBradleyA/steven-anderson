import React, { useState, useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Cube = ({ carRef }) => {
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);
    const speed = 5; // Adjust the speed as needed

    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [currentLateralSpeed, setCurrentLateralSpeed] = useState(0);

    const topSpeed = 6; // Max speed
    const acceleration = 0.2; // Acceleration rate
    const deceleration = 0.2; // Deceleration rate
    const turnSpeed = 3;

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
        if (carRef.current) {
            const cubePosition = carRef.current.translation();
            let newPosition = { ...cubePosition };

            // Accelerate or decelerate forward/backward movement
            if (moveForward) {
                if (currentSpeed < topSpeed) {
                    setCurrentSpeed(currentSpeed + acceleration);
                }
            } else if (moveBackward) {
                if (currentSpeed > -topSpeed) {
                    setCurrentSpeed(currentSpeed - acceleration);
                }
            } else {
                if (currentSpeed > 0) {
                    setCurrentSpeed(Math.max(0, currentSpeed - deceleration));
                } else if (currentSpeed < 0) {
                    setCurrentSpeed(Math.min(0, currentSpeed + deceleration));
                }
            }

            // Accelerate or decelerate lateral movement
            if (moveLeft) {
                if (currentLateralSpeed > -topSpeed) {
                    setCurrentLateralSpeed(currentLateralSpeed - acceleration);
                }
            } else if (moveRight) {
                if (currentLateralSpeed < topSpeed) {
                    setCurrentLateralSpeed(currentLateralSpeed + acceleration);
                }
            } else {
                if (currentLateralSpeed > 0) {
                    setCurrentLateralSpeed(
                        Math.max(0, currentLateralSpeed - deceleration)
                    );
                } else if (currentLateralSpeed < 0) {
                    setCurrentLateralSpeed(
                        Math.min(0, currentLateralSpeed + deceleration)
                    );
                }
            }

            // Update the new position based on current speeds
            newPosition.z -= currentSpeed;
            newPosition.x += currentLateralSpeed;

            carRef.current.setTranslation(newPosition, true);
        }
    });
    return (
        <RigidBody
            ref={carRef}
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
