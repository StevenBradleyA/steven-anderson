import React, { useState, useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Cube = ({ carRef }) => {
    const { scene: carBody } = useGLTF('/models/ae86.glb');
    const { scene: lfw } = useGLTF('/models/leftFrontWheel.glb');
    const { scene: lbw } = useGLTF('/models/leftBackWheel.glb');
    const { scene: rfw } = useGLTF('/models/rightFrontWheel.glb');
    const { scene: rbw } = useGLTF('/models/rightBackWheel.glb');

    // sizing
    carBody.scale.set(15, 15, 15);
    lfw.scale.set(15, 15, 15); // Adjust the scale as needed
    lbw.scale.set(15, 15, 15); // Adjust the scale as needed
    rfw.scale.set(15, 15, 15); // Adjust the scale as needed
    rbw.scale.set(15, 15, 15); // Adjust the scale as needed

    // movement
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);
    const [isDrifting, setIsDrifting] = useState(false);

    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [currentLateralSpeed, setCurrentLateralSpeed] = useState(0);

    const topSpeed = 6; // Max speed
    const acceleration = 0.2; // Acceleration rate
    const deceleration = 0.2; // Deceleration rate
    const turnSpeed = 3;
    const [yawAngle, setYawAngle] = useState(0);

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
            case 'Shift':
                setIsDrifting(true);
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
            case 'Shift':
                setIsDrifting(false);
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

            if (moveLeft) {
                setYawAngle(yawAngle - turnSpeed);
            } else if (moveRight) {
                setYawAngle(yawAngle + turnSpeed);
            }

            // Calculate the new position based on the current speed and yaw angle
            const angleInRadians = yawAngle * (Math.PI / 180);
            newPosition.x += currentSpeed * Math.sin(angleInRadians);
            newPosition.z -= currentSpeed * Math.cos(angleInRadians);

            carRef.current.setTranslation(newPosition, true);
            carRef.current.setRotation(
                { x: 0, y: yawAngle * (Math.PI / 180), z: 0 },
                true
            );
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
            <group>
                <primitive object={carBody} />
                <primitive object={lfw} />
                <primitive object={lbw} />
                <primitive object={rfw} />
                <primitive object={rbw} />
            </group>
        </RigidBody>
    );
};
useGLTF.preload('/models/ae86.glb');
export default Cube;

// const [moveForward, setMoveForward] = useState(false);
// const [moveBackward, setMoveBackward] = useState(false);
// const [moveLeft, setMoveLeft] = useState(false);
// const [moveRight, setMoveRight] = useState(false);
// const [isDrifting, setIsDrifting] = useState(false);

// const [currentSpeed, setCurrentSpeed] = useState(0);
// const [driftVelocity, setDriftVelocity] = useState({ x: 0, z: 0 });
// const [yawAngle, setYawAngle] = useState(0); // Yaw angle in degrees

// const topSpeed = 5; // Max speed
// const acceleration = 0.1; // Acceleration rate
// const deceleration = 0.1; // Deceleration rate
// const turnSpeed = 1; // Turn speed (degrees per frame)
// const driftForce = 0.5; // Force applied when drifting

// const handleKeyDown = (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             setMoveForward(true);
//             break;
//         case 'ArrowDown':
//             setMoveBackward(true);
//             break;
//         case 'ArrowLeft':
//             setMoveLeft(true);
//             break;
//         case 'ArrowRight':
//             setMoveRight(true);
//             break;
//         case 'Shift':
//             setIsDrifting(true);
//             break;
//         default:
//             break;
//     }
// };

// const handleKeyUp = (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             setMoveForward(false);
//             break;
//         case 'ArrowDown':
//             setMoveBackward(false);
//             break;
//         case 'ArrowLeft':
//             setMoveLeft(false);
//             break;
//         case 'ArrowRight':
//             setMoveRight(false);
//             break;
//         case 'Shift':
//             setIsDrifting(false);
//             break;
//         default:
//             break;
//     }
// };

// useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//         window.removeEventListener('keydown', handleKeyDown);
//         window.removeEventListener('keyup', handleKeyUp);
//     };
// }, []);

// useFrame(() => {
//     if (carRef.current) {
//         const cubePosition = carRef.current.translation();
//         let newPosition = { ...cubePosition };

//         // Accelerate or decelerate forward/backward movement
//         if (moveForward) {
//             if (currentSpeed < topSpeed) {
//                 setCurrentSpeed(currentSpeed + acceleration);
//             }
//         } else if (moveBackward) {
//             if (currentSpeed > -topSpeed) {
//                 setCurrentSpeed(currentSpeed - acceleration);
//             }
//         } else {
//             if (currentSpeed > 0) {
//                 setCurrentSpeed(Math.max(0, currentSpeed - deceleration));
//             } else if (currentSpeed < 0) {
//                 setCurrentSpeed(Math.min(0, currentSpeed + deceleration));
//             }
//         }

//         // Turning logic
//         if (moveLeft) {
//             setYawAngle(yawAngle - turnSpeed);
//         } else if (moveRight) {
//             setYawAngle(yawAngle + turnSpeed);
//         }

//         // Calculate the new position based on the current speed and yaw angle
//         const angleInRadians = yawAngle * (Math.PI / 180);
//         newPosition.x += currentSpeed * Math.sin(angleInRadians);
//         newPosition.z -= currentSpeed * Math.cos(angleInRadians);

//         // Drifting logic
//         if (isDrifting) {
//             const driftAngle = yawAngle + 90; // Perpendicular to the direction of movement
//             const driftAngleInRadians = driftAngle * (Math.PI / 180);
//             const driftX = driftForce * Math.cos(driftAngleInRadians);
//             const driftZ = driftForce * Math.sin(driftAngleInRadians);

//             setDriftVelocity({ x: driftX, z: driftZ });
//         } else {
//             // Apply natural deceleration to drift velocity when not drifting
//             setDriftVelocity({
//                 x: driftVelocity.x * 0.95,
//                 z: driftVelocity.z * 0.95,
//             });
//         }

//         newPosition.x += driftVelocity.x;
//         newPosition.z += driftVelocity.z;

//         carRef.current.setTranslation(newPosition, true);
//         carRef.current.setRotation({ x: 0, y: yawAngle * (Math.PI / 180), z: 0 }, true);
//     }
// });
