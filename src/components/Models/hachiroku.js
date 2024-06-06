'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    CuboidCollider,
    RigidBody,
    CylinderCollider,
} from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CameraManager from '../Camera/cameraManager';

// todo decide on camera buttons -- should mouse clicking trigger free mode?

// inital camera should switch between preset positions
// prompt user with press shift to flip car... or r for respawn
// todo when the car falls off the map aka hits a certain height on the map we can probably just auto respawn...
// probably want to disable movement when all wheels off ground

// last major car change is going to be flying. Car can just fly when off the ground.
// have to determine when all 4 wheels are off or back 2 wheels not in contact

// todo for car ... movement on ground only -- -- smoothness of follow? drift button maybe 






const HachiRoku = () => {
    const { nodes, materials } = useGLTF('/models/hachiroku.glb');

    // car refs
    const carRef = useRef();
    const bodyRef = useRef();
    const rfwParentRef = useRef();
    const rfwRef = useRef();
    const roofRef = useRef();
    const lfwParentRef = useRef();
    const lfwRef = useRef();
    const lrwRef = useRef();
    const rrwRef = useRef();
    const backRef = useRef();

    // camera
    const [activeCamera, setActiveCamera] = useState('initial');
    // input
    const [keysPressed, setKeysPressed] = useState({});
    const [torqueFactor, setTorqueFactor] = useState(1.09);

    // car stats
    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [totalFriction, setTotalFriction] = useState(0.5);
    const [rearWheelFriction, setRearWheelFriction] = useState(0.3);
    const [topSpeed, setTopSpeed] = useState(950);
    // follow, free

    // sensors
    const [isUpsideDown, setIsUpsideDown] = useState(false);
    const [wheelsOffGroundCount, setWheelsOffGroundCount] = useState(0);

    const forwardAcceleration = 50;
    const reverseAcceleration = 40;
    const braking = 80;
    const steerAngle = Math.PI / 9;
    const respawnHeight = 900;

    const handleCollisionExit = ({ target, manifold }) => {
        // Log the name or id of the target collider
        console.log(
            'Collision exited with:',
            target.collider.name || target.collider.id
        );

        // Log the position of the wheel collider
        console.log('Wheel position:', manifold.localP1());

        // Log if the target collider is the ground (assuming you have a way to identify it)
        if (
            target.collider.name === 'ground' ||
            target.collider.userData.isGround
        ) {
            console.log('Wheel is off the ground.');
        }
    };

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

    useEffect(() => {
        const switchCamera = keysPressed['c'] || keysPressed['C'];
        const arrowKeyPressed =
            keysPressed['ArrowUp'] ||
            keysPressed['ArrowDown'] ||
            keysPressed['ArrowLeft'] ||
            keysPressed['ArrowRight'];

        if (switchCamera) {
            setActiveCamera((prev) => {
                if (prev === 'initial') return 'follow';
                if (prev === 'follow') return 'free';
                if (prev === 'free') return 'initial';
                return 'initial';
            });
        }

        if (arrowKeyPressed) {
            setActiveCamera('follow');
        }
    }, [keysPressed, setActiveCamera]);

    useFrame(() => {
        // Speed management
        const moveForward = keysPressed['ArrowUp'] || keysPressed['e'];
        const moveBackward = keysPressed['ArrowDown'] || keysPressed['d'];
        const steerLeft = keysPressed['ArrowLeft'] || keysPressed['s'];
        const steerRight = keysPressed['ArrowRight'] || keysPressed['f'];
        const turnLeft =
            (moveForward && steerLeft) || (moveBackward && steerLeft);
        const turnRight =
            (moveForward && steerRight) || (moveBackward && steerRight);
        const drift = keysPressed['big man'];
        const respawn = keysPressed['r'];
        const flip = keysPressed['Shift'];

        // respawn
        if (respawn && carRef.current && activeCamera === 'follow') {
            carRef.current.setTranslation({ x: 0, y: 1300, z: 0 }, true);
            carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
            carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
            const euler = new THREE.Euler(-Math.PI / 2, 0, 0);
            const quaternion = new THREE.Quaternion().setFromEuler(euler);
            carRef.current.setRotation(quaternion, true);
            setIsUpsideDown(false);
        }
        // auto respawn
        if (carRef.current) {
            const currentPosition = carRef.current.translation();
            if (currentPosition.y < respawnHeight) {
                carRef.current.setTranslation({ x: 0, y: 1300, z: 0 }, true);
                carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
                carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                const euler = new THREE.Euler(-Math.PI / 2, 0, 0);
                const quaternion = new THREE.Quaternion().setFromEuler(euler);
                carRef.current.setRotation(quaternion, true);
                setIsUpsideDown(false);
                setCurrentSpeed(0); // Reset the speed
            }
        }

        if (flip && carRef.current && activeCamera === 'follow') {
            // Move the car up in the air
            const currentPosition = carRef.current.translation();
            carRef.current.setTranslation(
                {
                    x: currentPosition.x,
                    y: currentPosition.y + 2,
                    z: currentPosition.z,
                },
                true
            );

            // Zero out velocities
            carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
            carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
            // rotation={[-Math.PI / 2, 0, 0]}

            // Correct the car's orientation
            const euler = new THREE.Euler(-Math.PI / 2, 0, 0);
            const quaternion = new THREE.Quaternion().setFromEuler(euler);
            carRef.current.setRotation(quaternion, true);
            setIsUpsideDown(false);
        }

        if (moveForward && activeCamera === 'follow') {
            if (currentSpeed < topSpeed) {
                setCurrentSpeed((prevSpeed) => {
                    const accelerationFactor =
                        (topSpeed - prevSpeed) / topSpeed;
                    return prevSpeed + forwardAcceleration * accelerationFactor;
                });
            }
        } else if (moveBackward && activeCamera === 'follow') {
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

        if (
            lfwParentRef.current &&
            rfwParentRef.current &&
            activeCamera === 'follow'
        ) {
            if (steerLeft) {
                lfwParentRef.current.rotation.set(0, 0, steerAngle);
                rfwParentRef.current.rotation.set(0, 0, steerAngle);
            } else if (steerRight) {
                lfwParentRef.current.rotation.set(0, 0, -steerAngle);
                rfwParentRef.current.rotation.set(0, 0, -steerAngle);
            } else {
                lfwParentRef.current.rotation.set(0, 0, 0);
                rfwParentRef.current.rotation.set(0, 0, 0);
            }
        }

        // wheel visual spinning effect
        const wheelRotationSpeed = currentSpeed / 30;
        if (
            lfwRef.current &&
            rfwRef.current &&
            lrwRef.current &&
            rrwRef.current
        ) {
            lfwRef.current.rotation.x -= wheelRotationSpeed;
            rfwRef.current.rotation.x -= wheelRotationSpeed;
            lrwRef.current.rotation.x -= wheelRotationSpeed;
            rrwRef.current.rotation.x -= wheelRotationSpeed;
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

        if (
            carRef.current &&
            activeCamera === 'follow' &&
            isUpsideDown === false
        ) {
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
            const forwardVector = new THREE.Vector3(0, -1, 0); // Forward in local space

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
    const tireColor = new THREE.Color(0x000000);
    const tireMaterial = new THREE.MeshStandardMaterial({
        color: tireColor,
        roughness: 0.9, // Higher roughness for a more rubber-like appearance
        metalness: 0.0, // No metallic look for tires
    });

    // Wheel Color - Glossy Black
    const wheelColor = new THREE.Color(0x000000);
    const wheelMaterial = new THREE.MeshStandardMaterial({
        color: wheelColor,
        roughness: 0.2, // Lower roughness for a glossy finish
        metalness: 1.0, // Higher metalness for a metallic look
    });

    // Glossy Blue Color for Car Body
    const metallicBlue = new THREE.Color(0x1e90ff);
    const carBlue = new THREE.MeshStandardMaterial({
        color: metallicBlue,
        roughness: 0.2, // Lower roughness for a glossy finish
        metalness: 0.5, // Optionally, adjust metalness for desired effect
    });
    const metallicPurple = new THREE.Color(0x800080);
    const carPurple = new THREE.MeshStandardMaterial({
        color: metallicPurple,
        roughness: 0.2, // Lower roughness for a glossy finish
        metalness: 0.5, // Optionally, adjust metalness for desired effect
    });

    // Rigid Body Constructors

    // collider constructors
    // setContactSkin={20}

    // setActiveCollisionTypes(activeCollisionTypes: ActiveCollisionTypes): void

    // Use Case: Set the collision types active for the collider, allowing customization of how the collider interacts with other colliders.

    // castRay(ray: Ray, maxToi: number, solid: boolean): number

    // Use Case: Perform a ray-cast to find the closest intersection between a ray and the collider. Useful for implementing features like ray-based picking or visibility checks.
    // Example:
    // javascript
    // Copy code
    // const hitTime = myCollider.castRay(ray, maxToi, true);
    // setContactSkin(thickness: number): void

    // Use Case: Set the contact skin thickness for the collider to improve collision detection accuracy and stability.
    // Example:
    // javascript
    // Copy code
    // myCollider.setContactSkin(0.1);
    // Friction(friction: number): void

    // Use Case: Set the friction coefficient of the collider to control how it interacts with other surfaces.
    // Example:
    // javascript
    // Copy code
    // myCollider.setFriction(0.5);
    // setRestitution(restitution: number): void

    // Use Case: Set the restitution (bounciness) of the collider to determine how much it bounces upon impact.
    // Example:
    // javascript
    // Copy code
    // myCollider.setRestitution(0.8);
    // setDensity(density: number): void

    // Use Case: Set the uniform density of the collider to affect its mass and inertia.
    // Example:
    // javascript
    // Copy code
    // myCollider.setDensity(1.0);
    // setTranslation(tra: Vector): void

    // Use Case: Set the translation (position) of the collider in the world space.
    // Example:
    // javascript
    // Copy code
    // myCollider.setTranslation({ x: 1, y: 2, z: 3 });
    // setRotation(rot: Rotation): void

    // Use Case: Set the rotation of the collider in the world space.
    // Example:
    // javascript
    // Copy code
    // myCollider.setRotation({ x: 0, y: 0, z: 0, w: 1 });
    // setSensor(isSensor: boolean): void

    // Use Case: Set the collider as a sensor, which allows it to detect collisions without affecting the physics simulation.
    // Example:
    // javascript
    // Copy code
    // myCollider.setSensor(true);
    console.log(activeCamera);

    return (
        <>
            <RigidBody
                ref={carRef}
                mass={11}
                colliders={false}
                position={[0, 1300, 0]}
                friction={0.3}
                rotation={[0, 0, 0]}
                name="car"
                enableCcd={true}
            >
                <CuboidCollider
                    args={[4, 9.3, 1.5]}
                    position={[0.3, 0.4, 2.5]}
                    name="body"
                />
                <CuboidCollider
                    args={[3.5, 5.5, 0.8]}
                    position={[0.3, 2.5, 4.8]}
                    name="roof"
                    mass={0.002}
                    onCollisionEnter={({ other }) => {
                        if (other.rigidBodyObject.name === 'track') {
                            setIsUpsideDown(true);
                        }
                    }}
                    onCollisionExit={() => setIsUpsideDown(false)}
                />
                <group dispose={null}>
                    <group ref={bodyRef}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Body.geometry}
                            material={materials.Body}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            name="bodyPanels"
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Glass.geometry}
                            material={materials.Glass}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftFrontBrakeDiscs.geometry}
                            material={materials.Silver}
                            position={[3.33, 1.244, 5.132]}
                            rotation={[-Math.PI / 2, 1.571, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftFrontCaliper.geometry}
                            material={materials.Body}
                            position={[3.474, 1.414, 4.617]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftRearBrakeCaliper.geometry}
                            material={materials.Body}
                            position={[3.538, 1.314, -5.895]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftRearBrakeDisc.geometry}
                            material={materials.Silver}
                            position={[3.394, 1.143, -5.381]}
                            rotation={[-Math.PI / 2, 1.571, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightRearBrakeDisc.geometry}
                            material={materials.Silver}
                            position={[-2.91, 1.143, -5.383]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightRearBrakeCaliper.geometry}
                            material={materials.Body}
                            position={[-3.054, 1.314, -4.869]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.AxelRear.geometry}
                            material={materials.Body}
                            position={[-2.272, 1.143, -5.383]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.AxelFront.geometry}
                            material={materials.Body}
                            position={[-2.252, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightFrontBrakeCaliper.geometry}
                            material={materials.Body}
                            position={[-3.034, 1.414, 5.643]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightFrontBrakeDisc.geometry}
                            material={materials.Silver}
                            position={[-2.89, 1.244, 5.129]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ToyotaBadgeBack.geometry}
                            material={materials.Trim}
                            position={[0.246, 3.357, -9.121]}
                            rotation={[-2.761, 0, -Math.PI]}
                            scale={0.015}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.TrunkLock.geometry}
                            material={materials.Body}
                            position={[0.246, 3.838, -8.884]}
                            rotation={[0.365, 0, 0]}
                            scale={0.046}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LicenseLightRearLeft.geometry}
                            material={materials.Body}
                            position={[1.235, 2.862, -9.125]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LicenseLightRearRight.geometry}
                            material={materials.Body}
                            position={[-0.733, 2.862, -9.125]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Exhaust.geometry}
                            material={materials.Tire}
                            position={[2.525, 1.244, -8]}
                            scale={[0.393, 0.28, 0.488]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.UnderCarriageDetails.geometry}
                            material={materials.Body}
                            position={[2.165, 0.858, -0.044]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.639, 3.091, 0.185]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Trim.geometry}
                            material={materials.Trim}
                            position={[0.246, 3.996, 3.075]}
                            rotation={[-1.702, -0.181, 0.17]}
                            scale={[0.061, 0.076, 0.161]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.TruenoBadgeFront.geometry}
                            material={materials.White}
                            position={[0.246, 2.099, 8.949]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.TruenoBadgeFrontBase.geometry}
                            material={materials.Trim}
                            position={[0.246, 2.099, 8.864]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.047}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LicensePlateFront.geometry}
                            material={materials.Trim}
                            position={[0.246, 1.384, 8.687]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.755, 0.043, 0.26]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LicensePlateRear.geometry}
                            material={materials.Trim}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.GrilleFrontSectioned.geometry}
                            material={materials.Trim}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.WhiteFrontBlinkers.geometry}
                            material={materials.White}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.PopUpHeadLightTips.geometry}
                            material={materials.Trim}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.BrakeLights.geometry}
                            material={materials.BrakeLights}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Fogs.geometry}
                            material={materials.Fog}
                            position={[0.246, 2.641, 1.676]}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        />
                    </group>

                    <group ref={lfwParentRef} position={[2.548, 1.244, 5.132]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            name="lfwCollider"
                        />
                        <group ref={lfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontTire.geometry}
                                material={materials.Tire}
                                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                                scale={1.315}
                                name="leftFrontTire"
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontWheel.geometry}
                                material={materials.Wheel}
                                rotation={[-Math.PI / 2, 0, 0]}
                                name="leftFrontWheel"
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontLugNuts.geometry}
                                material={materials.Wheel}
                                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                                scale={0.06}
                                name="leftFrontLugs"
                            />
                        </group>
                    </group>
                    <group ref={rfwParentRef} position={[-2.109, 1.244, 5.129]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            setContactSkin={0.1}
                            name="rfwCollider"
                        />
                        <group ref={rfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightFrontLugNuts.geometry}
                                material={materials.Wheel}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={0.06}
                                name="rightFrontLugs"
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightFrontWheel.geometry}
                                material={materials.Wheel}
                                rotation={[-Math.PI / 2, 0, -Math.PI]}
                                name="rightFrontWheel"
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightFrontTire.geometry}
                                material={materials.Tire}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1.315}
                                name="rightFrontTire"
                            />
                        </group>
                    </group>
                    <group ref={lrwRef} position={[2.612, 1.143, -5.381]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftRearLugNuts.geometry}
                            material={materials.Wheel}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={0.06}
                            name="leftRearLugs"
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftRearWheel.geometry}
                            material={materials.Wheel}
                            rotation={[-Math.PI / 2, 0, 0]}
                            name="leftRearWheel"
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LeftRearTire.geometry}
                            material={materials.Tire}
                            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                            scale={1.315}
                            name="leftRearTire"
                        />
                    </group>
                    <group ref={rrwRef} position={[-2.129, 1.143, -5.383]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            setContactSkin={0.1}
                            name="rrwCollider"
                            ref={rrwRef}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightRearTire.geometry}
                            material={materials.Tire}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={1.315}
                            name="rightRearTire"
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightRearWheel.geometry}
                            material={materials.Wheel}
                            rotation={[-Math.PI / 2, 0, -Math.PI]}
                            name="rightRearWheel"
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RightRearLugNuts.geometry}
                            material={materials.Wheel}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={0.06}
                            name="rightRearLugs"
                        />
                    </group>
                </group>
            </RigidBody>

            <CameraManager
                carRef={carRef}
                backRef={backRef}
                activeCamera={activeCamera}
                setActiveCamera={setActiveCamera}
                keysPressed={keysPressed}
            />
        </>
    );
};
useGLTF.preload('/models/hachiroku.glb');

export default HachiRoku;