'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    CuboidCollider,
    RigidBody,
    BallCollider,
    CylinderCollider,
} from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import CustomCamera from '../Camera/customCamera';
import * as THREE from 'three';

const TofuCar = () => {
    const { nodes: carBodyNodes, materials: carBodyMaterials } =
        useGLTF('/models/ae86.glb');
    const { nodes: lfwNodes, materials: lfwMaterials } = useGLTF(
        '/models/leftFrontWheel.glb'
    );
    const { nodes: rfwNodes, materials: rfwMaterials } = useGLTF(
        '/models/rightFrontWheel.glb'
    );
    const { nodes: lbwNodes, materials: lbwMaterials } = useGLTF(
        '/models/leftBackWheel.glb'
    );
    const { nodes: rbwNodes, materials: rbwMaterials } = useGLTF(
        '/models/rightBackWheel.glb'
    );

    // ref
    const carRef = useRef();
    const bodyRef = useRef();
    const lbwRef = useRef();
    const rbwRef = useRef();
    const lfwRef = useRef();
    const lfwParentRef = useRef();
    const rfwRef = useRef();
    const rfwParentRef = useRef();
    const engineRef = useRef();

    const frontHelperRef = useRef();
    const backHelperRef = useRef();
    const [isPovCamera, setIsPovCamera] = useState(false);
    // const carPosition = [-2000, 0, 0];

    // user's pressed keys
    const [keysPressed, setKeysPressed] = useState({});
    // const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [yawAngle, setYawAngle] = useState(0);
    const topSpeed = 99999999;
    const forwardAcceleration = 999999;
    const reverseAcceleration = 999999;
    const braking = 9999999;
    const turnSpeed = 9999999999999;

    useEffect(() => {
        const handleKeyDown = (event) => {
            setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: true }));
        };

        const handleKeyUp = (event) => {
            setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: false }));
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Function to apply impulse

    useFrame(() => {
        // Speed management
        const moveForward = keysPressed['ArrowUp'];
        const moveBackward = keysPressed['ArrowDown'];
        const steerLeft = keysPressed['ArrowLeft'];
        const steerRight = keysPressed['ArrowRight'];
        const turnLeft =
            (moveForward && steerLeft) || (moveBackward && steerLeft);
        const turnRight =
            (moveForward && steerRight) || (moveBackward && steerRight);

        if (moveForward) {
            // if (currentSpeed < topSpeed) {
            //     setCurrentSpeed((prevSpeed) => prevSpeed + forwardAcceleration);
            // }
            if (currentSpeed < topSpeed) {
                setCurrentSpeed((prevSpeed) => {
                    const accelerationFactor =
                        (topSpeed - prevSpeed) / topSpeed;
                    return prevSpeed + forwardAcceleration * accelerationFactor;
                });
            }
        } else if (moveBackward) {
            if (currentSpeed > -topSpeed) {
                setCurrentSpeed((prevSpeed) => prevSpeed - reverseAcceleration);
            }
        } else {
            if (currentSpeed > 0) {
                setCurrentSpeed((prevSpeed) =>
                    Math.max(0, prevSpeed - braking)
                );
            } else if (currentSpeed < 0) {
                setCurrentSpeed((prevSpeed) =>
                    Math.min(0, prevSpeed + braking)
                );
            }
        }

        if (lfwParentRef.current && rfwParentRef.current) {
            if (steerLeft) {
                lfwParentRef.current.rotation.y = Math.PI / 9;
                rfwParentRef.current.rotation.y = Math.PI / 9;
            } else if (steerRight) {
                lfwParentRef.current.rotation.y = -Math.PI / 9;
                rfwParentRef.current.rotation.y = -Math.PI / 9;
            } else {
                lfwParentRef.current.rotation.y = 0;
                rfwParentRef.current.rotation.y = 0;
            }
        }
        // Add spinning effect to the wheels
        const wheelRotationSpeed = currentSpeed / 8; // Adjust the divisor to control the spin speed
        if (
            lfwRef.current &&
            rfwRef.current &&
            lbwRef.current &&
            rbwRef.current
        ) {
            lfwRef.current.rotation.x -= wheelRotationSpeed;
            rfwRef.current.rotation.x -= wheelRotationSpeed;
            lbwRef.current.rotation.x -= wheelRotationSpeed;
            rbwRef.current.rotation.x -= wheelRotationSpeed;
        }
        // Turn the car only when moving forward and turning
        if (moveForward) {
            if (turnLeft) {
                setYawAngle((prevAngle) => prevAngle + turnSpeed);
            } else if (turnRight) {
                setYawAngle((prevAngle) => prevAngle - turnSpeed);
            }
        } else if (moveBackward) {
            if (turnLeft) {
                setYawAngle((prevAngle) => prevAngle - turnSpeed);
            } else if (turnRight) {
                setYawAngle((prevAngle) => prevAngle + turnSpeed);
            }
        }

        // Working Forward Movement only
        // const angleInRadians = yawAngle * (Math.PI / 180);
        // const impulse = new THREE.Vector3(
        //     currentSpeed * Math.sin(angleInRadians),
        //     0,
        //     currentSpeed * Math.cos(angleInRadians)
        // );

        // if (carRef.current) {
        //     const car = carRef.current;

        //     // Get the current rotation quaternion
        //     const rotation = car.rotation(); // This should return a quaternion or a rotation vector

        //     // Create a Three.js quaternion from the rotation
        //     const carQuaternion = new THREE.Quaternion(
        //         rotation.x,
        //         rotation.y,
        //         rotation.z,
        //         rotation.w
        //     );

        //     // Define the forward vector in the car's local space
        //     const forwardVector = new THREE.Vector3(0, 0, 1); // Forward in local space

        //     // Rotate the forward vector by the car's current orientation
        //     forwardVector.applyQuaternion(carQuaternion);

        //     // Scale the forward vector by the current speed to get the impulse
        //     const impulse = forwardVector.multiplyScalar(currentSpeed);

        //     // Apply the impulse to the car's physics body
        //     car.applyImpulse(
        //         { x: impulse.x, y: impulse.y, z: impulse.z },
        //         true
        //     );
        // } else {
        //     console.error('carRef.current is undefined');
        // }

        if (carRef.current) {
            const car = carRef.current;
            const rotation = car.rotation(); // This should return a quaternion or a rotation vector

            // Create a Three.js quaternion from the rotation
            const carQuaternion = new THREE.Quaternion(
                rotation.x,
                rotation.y,
                rotation.z,
                rotation.w
            );

            // Define the forward vector in the car's local space
            const forwardVector = new THREE.Vector3(0, 0, 1); // Forward in local space

            // Rotate the forward vector by the car's current orientation
            forwardVector.applyQuaternion(carQuaternion);

            // Scale the forward vector by the current speed to get the impulse
            const impulse = forwardVector.multiplyScalar(currentSpeed);

            // Apply the impulse to the car's physics body
            car.applyImpulse(
                { x: impulse.x, y: impulse.y, z: impulse.z },
                true
            );
        } else {
            console.error('carRef.current is undefined');
        }
    });

    const carBodyColor = new THREE.Color(0x1e90ff);
    const carBodyMaterial = new THREE.MeshStandardMaterial({
        color: carBodyColor,
        roughness: 0.5, // Adjust this value to increase or decrease roughness
        metalness: 0.5, // Optionally, you can also set metalness to give it a metallic look
    });
    const carBodyColorRed = new THREE.Color(0xffc0cb);
    const carBodyMaterialRed = new THREE.MeshStandardMaterial({
        color: carBodyColorRed,
        roughness: 0.5, // Adjust this value to increase or decrease roughness
        metalness: 0.5, // Optionally, you can also set metalness to give it a metallic look
    });

    // todo fix friction
    // todo space is a drift button that is a fun sliding mechanic
    return (
        <>
            <RigidBody
                mass={0.2}
                colliders={false}
                position={[0, 3, 0]}
                ref={carRef}
                scale={15}
            >
                <CuboidCollider
                    args={[4, 2.3, 9.3]}
                    position={[0.2, 3.5, -0.3]}
                />
                <group>
                    <group dispose={null} ref={bodyRef}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube001_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[1.235, 2.862, -9.125]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube002_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-0.733, 2.862, -9.125]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder017_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[2.525, 1.244, -8]}
                            scale={[0.393, 0.28, 0.488]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder002_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[3.33, 1.244, 5.132]}
                            rotation={[-Math.PI / 2, 1.571, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane002_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            // licensePlate
                            ref={engineRef}
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube006_0_Baked.geometry}
                            material={carBodyMaterialRed}
                            position={[0.246, 1.384, 8.687]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.755, 0.043, 0.26]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder012_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-2.252, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder005_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[3.394, 1.143, -5.381]}
                            rotation={[-Math.PI / 2, 1.571, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane004_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[3.538, 1.314, -5.895]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane003_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[3.474, 1.414, 4.617]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane010_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 2.099, 8.949]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane005_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-3.054, 1.314, -4.869]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder010_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-2.91, 1.143, -5.383]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane001_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane007_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 3.357, -9.121]}
                            rotation={[-2.761, 0, -Math.PI]}
                            scale={0.015}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder011_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-2.272, 1.143, -5.383]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder013_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-2.89, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane006_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[-3.034, 1.414, 5.643]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube004_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 3.996, 3.075]}
                            rotation={[-1.702, -0.181, 0.17]}
                            scale={[0.061, 0.076, 0.161]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube005_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 2.099, 8.864]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.047}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder016_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[0.246, 3.838, -8.884]}
                            rotation={[0.365, 0, 0]}
                            scale={0.046}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube003_0_Baked.geometry}
                            material={carBodyMaterial}
                            position={[2.165, 0.858, -0.044]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.639, 3.091, 0.185]}
                        />
                    </group>

                    <group ref={lfwParentRef} position={[2.548, 1.244, 5.132]}>
                        {/* <BallCollider
                            args={[1.5, 0.75, 1.5]}
                            position={[0.75, -0.3, 0]}
                        /> */}
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            // friction={1}
                        />
                        <group ref={lfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={lfwNodes.Cylinder001_0_Baked.geometry}
                                material={lfwMaterials.LeftFrontWheelBake_Baked}
                                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                                scale={0.06}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={lfwNodes.Cylinder_0_Baked.geometry}
                                material={lfwMaterials.LeftFrontWheelBake_Baked}
                                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                                scale={1.315}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={lfwNodes.Circle_0_Baked.geometry}
                                material={lfwMaterials.LeftFrontWheelBake_Baked}
                                rotation={[-Math.PI / 2, 0, 0]}
                            />
                        </group>
                    </group>

                    <group ref={rfwParentRef} position={[-2.109, 1.244, 5.129]}>
                        {/* <CuboidCollider args={[1.5, .75, 1.5]} position={[-.75, -.8, 0]} friction={1}/> */}
                        {/* <BallCollider args={[1.5, .75, 1.5]} position={[-.75, -.3, 0]} friction={1}/> */}
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            // friction={1}
                        />

                        <group dispose={null} ref={rfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={rfwNodes.Cylinder014_0_Baked.geometry}
                                material={
                                    rfwMaterials.RightFrontWheelBake_Baked
                                }
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={0.06}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={rfwNodes.Cylinder015_0_Baked.geometry}
                                material={
                                    rfwMaterials.RightFrontWheelBake_Baked
                                }
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1.315}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={rfwNodes.Circle003_0_Baked.geometry}
                                material={
                                    rfwMaterials.RightFrontWheelBake_Baked
                                }
                                rotation={[-Math.PI / 2, 0, -Math.PI]}
                            />
                        </group>
                    </group>

                    <group
                        dispose={null}
                        ref={rbwRef}
                        position={[-2.129, 1.143, -5.383]}
                    >
                        {/* <CuboidCollider args={[4, 4, 4]} /> */}
                        {/* <BallCollider
                            args={[1.5, 0.75, 1.5]}
                            position={[-0.75, -0.3, 0]}
                            friction={1}
                        /> */}
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            // friction={1}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rbwNodes.Cylinder009_0_Baked.geometry}
                            material={
                                rbwMaterials['RightBackWheelBake_Baked.003']
                            }
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.06}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rbwNodes.Cylinder008_0_Baked.geometry}
                            material={
                                rbwMaterials['RightBackWheelBake_Baked.001']
                            }
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rbwNodes.Circle002_0_Baked.geometry}
                            material={
                                rbwMaterials['RightBackWheelBake_Baked.002']
                            }
                            rotation={[-Math.PI / 2, 0, -Math.PI]}
                        />
                    </group>

                    <group
                        dispose={null}
                        ref={lbwRef}
                        position={[2.612, 1.143, -5.381]}
                    >
                        {/* <CuboidCollider args={[4, 4, 4]} /> */}
                        {/* <BallCollider
                            args={[1.5, 0.75, 1.5]}
                            position={[0.75, -0.3, 0]}
                            friction={1}
                        /> */}
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            // friction={1}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={lbwNodes.Circle001_0_Baked.geometry}
                            material={lbwMaterials.LeftBackWheelBake_Baked}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={lbwNodes.Cylinder006_0_Baked.geometry}
                            material={lbwMaterials.LeftBackWheelBake_Baked}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.06}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={lbwNodes.Cylinder007_0_Baked.geometry}
                            material={lbwMaterials.LeftBackWheelBake_Baked}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={1.315}
                        />
                    </group>
                </group>
            </RigidBody>
        </>
    );
};
useGLTF.preload('/models/ae86.glb');
useGLTF.preload('/models/leftFrontWheel.glb');
useGLTF.preload('/models/rightFrontWheel.glb');
useGLTF.preload('/models/leftBackWheel.glb');
useGLTF.preload('/models/rightBackWheel.glb');

export default TofuCar;

// <CustomCamera isPovCamera={isPovCamera} carPosition={carPosition} />
// </>

// useFrame(() => {
//     // Speed management
//     const moveForward = keysPressed['ArrowUp'];
//     const moveBackward = keysPressed['ArrowDown'];
//     const steerLeft = keysPressed['ArrowLeft'];
//     const steerRight = keysPressed['ArrowRight'];
//     const turnLeft =
//         (moveForward && steerLeft) || (moveBackward && steerLeft);
//     const turnRight =
//         (moveForward && steerRight) || (moveBackward && steerRight);

//     if (moveForward) {
//         if (currentSpeed < topSpeed) {
//             setCurrentSpeed((prevSpeed) => {
//                 const accelerationFactor =
//                     (topSpeed - prevSpeed) / topSpeed;
//                 return prevSpeed + forwardAcceleration * accelerationFactor;
//             });
//         }
//     } else if (moveBackward) {
//         if (currentSpeed > -topSpeed) {
//             setCurrentSpeed((prevSpeed) => prevSpeed - reverseAcceleration);
//         }
//     } else {
//         if (currentSpeed > 0) {
//             setCurrentSpeed((prevSpeed) =>
//                 Math.max(0, prevSpeed - braking)
//             );
//         } else if (currentSpeed < 0) {
//             setCurrentSpeed((prevSpeed) =>
//                 Math.min(0, prevSpeed + braking)
//             );
//         }
//     }

//     // Rotate wheels for steering
//     if (lfwRef.current && rfwRef.current) {
//         if (steerLeft) {
//             lfwRef.current.rotation.y = Math.PI / 9;
//             rfwRef.current.rotation.y = Math.PI / 9;
//         } else if (steerRight) {
//             lfwRef.current.rotation.y = -Math.PI / 9;
//             rfwRef.current.rotation.y = -Math.PI / 9;
//         } else {
//             lfwRef.current.rotation.y = 0;
//             rfwRef.current.rotation.y = 0;
//         }
//     }

//     // Adjust the turn factor based on the current speed
//     const speedFactor = Math.abs(currentSpeed) / topSpeed;
//     const effectiveTurnSpeed = turnSpeed * (1 - speedFactor * 0.2);
//     // Turn the car based on the movement direction
//     if (moveForward) {
//         if (turnLeft) {
//             setYawAngle((prevAngle) => prevAngle + effectiveTurnSpeed);
//         } else if (turnRight) {
//             setYawAngle((prevAngle) => prevAngle - effectiveTurnSpeed);
//         }
//     } else if (moveBackward) {
//         if (turnLeft) {
//             setYawAngle((prevAngle) => prevAngle - effectiveTurnSpeed);
//         } else if (turnRight) {
//             setYawAngle((prevAngle) => prevAngle + effectiveTurnSpeed);
//         }
//     }

//     // Calculate the new position based on the current speed and yaw angle
//     const angleInRadians = yawAngle * (Math.PI / 180);
//     const newPosition = position.clone();
//     newPosition.x += currentSpeed * Math.sin(angleInRadians);
//     newPosition.z += currentSpeed * Math.cos(angleInRadians);

//     // Update the position and rotation of the car
//     if (carRef.current) {
//         carRef.current.position.copy(newPosition);
//         carRef.current.rotation.y = angleInRadians;
//     }

//     // Update the state position
//     setPosition(newPosition);
// });

// console.log(speed)

// Handle keyboard input
// useEffect(() => {
//     const handleKeyDown = (event) => {
//         setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: true }));
//     };

//     const handleKeyUp = (event) => {
//         setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: false }));
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//         window.removeEventListener('keydown', handleKeyDown);
//         window.removeEventListener('keyup', handleKeyUp);
//     };
// }, []);

// useFrame(() => {
//     // Speed management
//     const moveForward = keysPressed['ArrowUp'];
//     const moveBackward = keysPressed['ArrowDown'];
//     const steerLeft = keysPressed['ArrowLeft'];
//     const steerRight = keysPressed['ArrowRight'];
//     const turnLeft =
//         (moveForward && steerLeft) || (moveBackward && steerLeft);
//     const turnRight =
//         (moveForward && steerRight) || (moveBackward && steerRight);

//     if (moveForward) {
//         // if (currentSpeed < topSpeed) {
//         //     setCurrentSpeed((prevSpeed) => prevSpeed + forwardAcceleration);
//         // }
//         if (currentSpeed < topSpeed) {
//             setCurrentSpeed((prevSpeed) => {
//                 const accelerationFactor =
//                     (topSpeed - prevSpeed) / topSpeed;
//                 return prevSpeed + forwardAcceleration * accelerationFactor;
//             });
//         }
//     } else if (moveBackward) {
//         if (currentSpeed > -topSpeed) {
//             setCurrentSpeed((prevSpeed) => prevSpeed - reverseAcceleration);
//         }
//     } else {
//         if (currentSpeed > 0) {
//             setCurrentSpeed((prevSpeed) =>
//                 Math.max(0, prevSpeed - braking)
//             );
//         } else if (currentSpeed < 0) {
//             setCurrentSpeed((prevSpeed) =>
//                 Math.min(0, prevSpeed + braking)
//             );
//         }
//     }

//     if (lfwParentRef.current && rfwParentRef.current) {
//         if (steerLeft) {
//             lfwParentRef.current.rotation.y = Math.PI / 9;
//             rfwParentRef.current.rotation.y = Math.PI / 9;
//         } else if (steerRight) {
//             lfwParentRef.current.rotation.y = -Math.PI / 9;
//             rfwParentRef.current.rotation.y = -Math.PI / 9;
//         } else {
//             lfwParentRef.current.rotation.y = 0;
//             rfwParentRef.current.rotation.y = 0;
//         }
//     }
//     // Add spinning effect to the wheels
//     const wheelRotationSpeed = currentSpeed / 5; // Adjust the divisor to control the spin speed
//     if (
//         lfwRef.current &&
//         rfwRef.current &&
//         lbwRef.current &&
//         rbwRef.current
//     ) {
//         lfwRef.current.rotation.x -= wheelRotationSpeed;
//         rfwRef.current.rotation.x -= wheelRotationSpeed;
//         lbwRef.current.rotation.x -= wheelRotationSpeed;
//         rbwRef.current.rotation.x -= wheelRotationSpeed;
//     }
//     // Turn the car only when moving forward and turning
//     if (moveForward) {
//         if (turnLeft) {
//             setYawAngle((prevAngle) => prevAngle + turnSpeed);
//         } else if (turnRight) {
//             setYawAngle((prevAngle) => prevAngle - turnSpeed);
//         }
//     } else if (moveBackward) {
//         if (turnLeft) {
//             setYawAngle((prevAngle) => prevAngle - turnSpeed);
//         } else if (turnRight) {
//             setYawAngle((prevAngle) => prevAngle + turnSpeed);
//         }
//     }

//     // Calculate the new position based on the current speed and yaw angle
//     const angleInRadians = yawAngle * (Math.PI / 180);
//     const newPosition = position.clone();
//     newPosition.x += currentSpeed * Math.sin(angleInRadians);
//     newPosition.z += currentSpeed * Math.cos(angleInRadians);

//     // Update the position and rotation of the car
//     if (carRef.current) {
//         carRef.current.position.copy(newPosition);
//         carRef.current.rotation.y = angleInRadians;
//     }

//     // Update the state position
//     setPosition(newPosition);
// });
