import React, { useState, useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import CustomCamera from '../Camera/customCamera';
import * as THREE from 'three';

const Ae86 = () => {
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
    const rfwRef = useRef();

    const frontHelperRef = useRef();
    const backHelperRef = useRef();
    const [isPovCamera, setIsPovCamera] = useState(false);
    const carPosition = [-2000, 0, 0];

    // movement
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [turnLeft, setTurnLeft] = useState(false);
    const [turnRight, setTurnRight] = useState(false);

    const [position, setPosition] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [speed, setSpeed] = useState(0);
    const [forwardAcceleration, setForwardAcceleration] = useState(0.5);
    const [reverseAcceleration, setReverseAcceleration] = useState(0.3);
    const [braking, setBraking] = useState(0.1);

    // console.log(speed)

    // Handle keyboard input
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                setMoveForward(true);
            }
            if (event.key === 'ArrowDown') {
                setMoveBackward(true);
            }
            if (event.key === 'ArrowLeft') {
                setTurnLeft(true);
            }
            if (event.key === 'ArrowRight') {
                setTurnRight(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === 'ArrowUp') {
                setMoveForward(false);
            }
            if (event.key === 'ArrowDown') {
                setMoveBackward(false);
            }
            if (event.key === 'ArrowLeft') {
                setTurnLeft(false);
            }
            if (event.key === 'ArrowRight') {
                setTurnRight(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    useFrame(() => {
        if (moveForward)
            setSpeed((prevSpeed) => prevSpeed + forwardAcceleration);
        if (moveBackward)
            setSpeed((prevSpeed) => prevSpeed - reverseAcceleration);
        if (!moveForward && !moveBackward)
            setSpeed((prevSpeed) => Math.max(prevSpeed - braking, 0));

        if (lfwRef.current && rfwRef.current) {
            if (turnLeft) {
                lfwRef.current.rotation.y = Math.PI / 9;
                rfwRef.current.rotation.y = Math.PI / 9;
            } else {
                lfwRef.current.rotation.y = 0;
                rfwRef.current.rotation.y = 0;
            }
        }
        if (lfwRef.current && rfwRef.current) {
            if (turnRight) {
                lfwRef.current.rotation.y = -Math.PI / 9;
                rfwRef.current.rotation.y = -Math.PI / 9;
            } else {
                lfwRef.current.rotation.y = 0;
                rfwRef.current.rotation.y = 0;
            }
        }

        if (carRef.current && carRef.current.position) {
            carRef.current.position.z += speed;
        }
    });

    const carBodyColor = new THREE.Color(0xff0000);

    return (
        <>
            <RigidBody
                mass={20}
                restitution={0}
                friction={1}
                linearDamping={3}
                angularDamping={2}
            >
                <group scale={15} ref={carRef}>
                    <group dispose={null} ref={bodyRef}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube001_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[1.235, 2.862, -9.125]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube002_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-0.733, 2.862, -9.125]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder017_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[2.525, 1.244, -8]}
                            scale={[0.393, 0.28, 0.488]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder002_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[3.33, 1.244, 5.132]}
                            rotation={[-Math.PI / 2, 1.571, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane002_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube006_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 1.384, 8.687]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.755, 0.043, 0.26]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder012_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-2.252, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder005_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[3.394, 1.143, -5.381]}
                            rotation={[-Math.PI / 2, 1.571, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane004_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[3.538, 1.314, -5.895]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane003_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[3.474, 1.414, 4.617]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane010_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 2.099, 8.949]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane005_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-3.054, 1.314, -4.869]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder010_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-2.91, 1.143, -5.383]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane001_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane007_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 3.357, -9.121]}
                            rotation={[-2.761, 0, -Math.PI]}
                            scale={0.015}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder011_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-2.272, 1.143, -5.383]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder013_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-2.89, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Plane006_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[-3.034, 1.414, 5.643]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube004_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 3.996, 3.075]}
                            rotation={[-1.702, -0.181, 0.17]}
                            scale={[0.061, 0.076, 0.161]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube005_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 2.099, 8.864]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.047}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cylinder016_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[0.246, 3.838, -8.884]}
                            rotation={[0.365, 0, 0]}
                            scale={0.046}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube003_0_Baked.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: carBodyColor,
                                })
                            }
                            position={[2.165, 0.858, -0.044]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.639, 3.091, 0.185]}
                        />
                    </group>

                    <group
                        dispose={null}
                        ref={lfwRef}
                        position={[2.548, 1.244, 5.132]}
                    >
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

                    <group
                        dispose={null}
                        ref={rfwRef}
                        position={[-2.109, 1.244, 5.129]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rfwNodes.Cylinder014_0_Baked.geometry}
                            material={rfwMaterials.RightFrontWheelBake_Baked}
                            // position={[-2.109, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.06}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rfwNodes.Cylinder015_0_Baked.geometry}
                            material={rfwMaterials.RightFrontWheelBake_Baked}
                            // position={[-2.109, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rfwNodes.Circle003_0_Baked.geometry}
                            material={rfwMaterials.RightFrontWheelBake_Baked}
                            // position={[-2.109, 1.244, 5.129]}
                            rotation={[-Math.PI / 2, 0, -Math.PI]}
                        />
                    </group>

                    <group dispose={null} ref={rbwRef}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={rbwNodes.Cylinder009_0_Baked.geometry}
                            material={
                                rbwMaterials['RightBackWheelBake_Baked.003']
                            }
                            position={[-2.129, 1.143, -5.383]}
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
                            position={[-2.129, 1.143, -5.383]}
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
                            position={[-2.129, 1.143, -5.383]}
                            rotation={[-Math.PI / 2, 0, -Math.PI]}
                        />
                    </group>

                    <group dispose={null} ref={lbwRef}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={lbwNodes.Circle001_0_Baked.geometry}
                            material={lbwMaterials.LeftBackWheelBake_Baked}
                            position={[2.612, 1.143, -5.381]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={lbwNodes.Cylinder006_0_Baked.geometry}
                            material={lbwMaterials.LeftBackWheelBake_Baked}
                            position={[2.612, 1.143, -5.381]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.06}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={lbwNodes.Cylinder007_0_Baked.geometry}
                            material={lbwMaterials.LeftBackWheelBake_Baked}
                            position={[2.612, 1.143, -5.381]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={1.315}
                        />
                    </group>

                    <mesh ref={frontHelperRef} position={[0, 4, 9]} scale={0.5}>
                        <sphereGeometry args={[1, 1, 1]} />
                        <meshBasicMaterial color="red" />
                    </mesh>
                    <mesh
                        ref={backHelperRef}
                        position={[0, 5, -9.5]}
                        scale={0.5}
                    >
                        <sphereGeometry args={[1, 1, 1]} />
                        <meshBasicMaterial color="blue" />
                    </mesh>
                </group>
            </RigidBody>

            <CustomCamera isPovCamera={isPovCamera} carPosition={carPosition} />
        </>
    );
};
useGLTF.preload('/models/ae86.glb');
useGLTF.preload('/models/leftFrontWheel.glb');
useGLTF.preload('/models/rightFrontWheel.glb');
useGLTF.preload('/models/leftBackWheel.glb');
useGLTF.preload('/models/rightBackWheel.glb');

export default Ae86;

// move cube
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
//         const carPosition = carRef.current.translation();
//         let newPosition = { ...carPosition };

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

//         if (moveLeft) {
//             setYawAngle(yawAngle - turnSpeed);
//         } else if (moveRight) {
//             setYawAngle(yawAngle + turnSpeed);
//         }

//         // Calculate the new position based on the current speed and yaw angle
//         const angleInRadians = yawAngle * (Math.PI / 180);
//         newPosition.x += currentSpeed * Math.sin(angleInRadians);
//         newPosition.z -= currentSpeed * Math.cos(angleInRadians);

//         carRef.current.setTranslation(newPosition, true);
//         carRef.current.setRotation(
//             { x: 0, y: yawAngle * (Math.PI / 180), z: 0 },
//             true
//         );
//     }
// });

// dirft
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
//         const carPosition = carRef.current.translation();
//         let newPosition = { ...carPosition };

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
