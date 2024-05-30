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
    const lfwColliderRef = useRef();

    const rfwRef = useRef();
    const rfwParentRef = useRef();
    const rfwColliderRef = useRef();

    const [isPovCamera, setIsPovCamera] = useState(false);
    const [torqueFactor, setTorqueFactor] = useState(9999);

    // input
    const [keysPressed, setKeysPressed] = useState({});
    // car stats
    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [totalFriction, setTotalFriction] = useState(0.5);
    const [rearWheelFriction, setRearWheelFriction] = useState(0.3);
    const [topSpeed, setTopSpeed] = useState(40099999);
    const [canFlip, setCanFlip] = useState(true);

    const forwardAcceleration = 8500900;
    const reverseAcceleration = 999999;
    const braking = 9999999;
    const steerAngle = Math.PI / 9;

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
        const drift = keysPressed['big man'];
        const reset = keysPressed['r'];
        const flip = keysPressed['Shift'];

        if (reset && carRef.current) {
            carRef.current.setTranslation({ x: -2000, y: 100, z: -250 }, true);
            carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
            carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
            const euler = new THREE.Euler(0, 0, 0);
            const quaternion = new THREE.Quaternion().setFromEuler(euler);
            carRef.current.setRotation(quaternion, true);
        }
        if (flip && carRef.current) {
            // Move the car up in the air
            const currentPosition = carRef.current.translation();
            carRef.current.setTranslation(
                {
                    x: currentPosition.x,
                    y: currentPosition.y + 5,
                    z: currentPosition.z,
                },
                true
            );

            // Zero out velocities
            carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
            carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);

            // Correct the car's orientation
            const euler = new THREE.Euler(0, 0, 0);
            const quaternion = new THREE.Quaternion().setFromEuler(euler);
            carRef.current.setRotation(quaternion, true);
        }

        if (moveForward) {
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
                lfwParentRef.current.rotation.y = steerAngle;
                rfwParentRef.current.rotation.y = steerAngle;
            } else if (steerRight) {
                lfwParentRef.current.rotation.y = -steerAngle;
                rfwParentRef.current.rotation.y = -steerAngle;
            } else {
                lfwParentRef.current.rotation.y = 0;
                rfwParentRef.current.rotation.y = 0;
            }
        }
        // wheel visual spinning effect
        const wheelRotationSpeed = currentSpeed / 12; //  divisor controls visual spin speed
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

        if (drift) {
            if (rearWheelFriction !== 0.01) {
                setRearWheelFriction(0.01);
            }
        } else {
            if (rearWheelFriction !== 0.3) {
                setRearWheelFriction(0.3);
            }
        }

        if (carRef.current) {
            const car = carRef.current;

            // Get the current rotation quaternion
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

            // TORQUE TURNING

            const torque = new THREE.Vector3(0, 1, 0); // Torque around the Y-axis

            // Adjust torque direction based on current speed
            if (currentSpeed < 0) {
                torque.set(0, -1, 0);
            }
            if (currentSpeed < topSpeed * 0.1) {
                setTorqueFactor(25);
            }
            if (currentSpeed < topSpeed * 0.25) {
                setTorqueFactor(20);
            }
            if (currentSpeed < topSpeed * 0.5) {
                setTorqueFactor(15);
            }
            if (currentSpeed < topSpeed * 0.75) {
                setTorqueFactor(7.5);
            }
            if (currentSpeed === topSpeed) {
                setTorqueFactor(2);
            }
            // Apply torque for turning
            if (turnLeft) {
                const leftTorque = torque.multiplyScalar(
                    Math.abs(currentSpeed) * torqueFactor
                ); //  Torque Sideways multiplier
                car.applyTorqueImpulse(
                    { x: leftTorque.x, y: leftTorque.y, z: leftTorque.z },
                    true
                );
            } else if (turnRight) {
                const rightTorque = torque.multiplyScalar(
                    -Math.abs(currentSpeed) * torqueFactor
                ); //  Torque Sideways multiplier
                car.applyTorqueImpulse(
                    { x: rightTorque.x, y: rightTorque.y, z: rightTorque.z },
                    true
                );
            }

            // -------INPULSE TURNING AT AN ANGLE WORKING ------
            // const leftVector = new THREE.Vector3(1, 0, 0);
            // const rightVector = new THREE.Vector3(-1, 0, 0);
            // if (currentSpeed < 0) {
            //     leftVector.set(-1, 0, 0);
            //     rightVector.set(1, 0, 0);
            // }

            // if (turnLeft) {
            //     const leftImpulse = leftVector.multiplyScalar(currentSpeed);
            //     car.applyImpulse(
            //         { x: leftImpulse.x, y: leftImpulse.y, z: leftImpulse.z },
            //         true
            //     );
            // } else if (turnRight) {
            //     const rightImpulse = rightVector.multiplyScalar(currentSpeed);
            //     car.applyImpulse(
            //         { x: rightImpulse.x, y: rightImpulse.y, z: rightImpulse.z },
            //         true
            //     );
            // }
            // ------END IMPULSE--------
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

    // reset everything
    // flip car over
    // only allow impulse and torque when wheels are on the ground
    // todo space is a drift button that is a fun sliding mechanic reduces rear wheel friction
    // todo perfect adjustments with a dbug api
    // todo camera modes - follow camera - free moving orbit camera - 

    
    return (
        <>
            <RigidBody
                mass={0.25}
                colliders={false}
                position={[-2000, 100, -250]}
                ref={carRef}
                scale={15}
                friction={totalFriction}
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
                            castShadow
                            receiveShadow
                            geometry={carBodyNodes.Cube006_0_Baked.geometry}
                            material={carBodyMaterial}
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
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            ref={lfwColliderRef}
                            // friction={0.5}
                            // mass={12}
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
                            // friction={0.5}
                            ref={rfwColliderRef}
                            // mass={12}
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
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            // mass={12}

                            friction={rearWheelFriction}
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
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            friction={rearWheelFriction}
                            // mass={12}
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
