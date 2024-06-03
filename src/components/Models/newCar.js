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

const NewCar = () => {
    const { nodes, materials } = useGLTF('/models/newnewCar.glb');

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
    const [canFlip, setCanFlip] = useState(true);
    // follow, free

    const [isUpsideDown, setIsUpsideDown] = useState(false);
    //

    const forwardAcceleration = 50;
    const reverseAcceleration = 40;
    const braking = 80;
    const steerAngle = Math.PI / 9;
    const respawnHeight = 900;

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
            carRef.current.setTranslation({ x: 200, y: 1200, z: 0 }, true);
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
                carRef.current.setTranslation({ x: 200, y: 1200, z: 0 }, true);
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

    // todo try to create a sensor on top of the car to determine when in contact with ground. Also might be able to determine when contact with ground using a constructor

    // isccd on a rigid body or a collider
    // lets just actually create a real roof collider than can detect collisions

    console.log('yo', isUpsideDown);

    return (
        <>
            <RigidBody
                ref={carRef}
                // mass={0.25}
                mass={11}
                colliders={false}
                position={[300, 1150, 0]}
                // friction={totalFriction}
                friction={0.3}
                rotation={[-Math.PI / 2, 0, 0]}
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

                <group
                    dispose={null}
                    //
                    // position={[0, 1800, 0]}
                    // rotation={[0, 0, 1080]}
                >
                    <group ref={bodyRef}>
                        {/* body */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane_0.geometry}
                            material={carBlue}
                            position={[0.246, -1.676, 2.641]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        {/* rearwindow */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane001_0.geometry}
                            material={wheelMaterial}
                            position={[0.246, -1.676, 2.641]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        {/* frontwindow */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002_0.geometry}
                            material={wheelMaterial}
                            position={[0.246, -1.676, 2.641]}
                            rotation={[0, Math.PI / 2, 0]}
                        />

                        {/* lf BrakeDisc */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder002_0.geometry}
                            material={carBlue}
                            position={[3.33, -5.132, 1.244]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        {/* lf brake */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane003_0.geometry}
                            material={carPurple}
                            position={[3.474, -4.617, 1.414]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        {/*idk  */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane004_0.geometry}
                            material={carPurple}
                            position={[3.538, 5.895, 1.314]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        {/* RR Disc */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder005_0.geometry}
                            material={carPurple}
                            position={[3.394, 5.381, 1.143]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />

                        {/*idk  */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder010_0.geometry}
                            material={carPurple}
                            position={[-2.91, 5.383, 1.143]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />

                        {/* idk */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane005_0.geometry}
                            material={carPurple}
                            position={[-3.054, 4.869, 1.314]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        {/*idk  */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder011_0.geometry}
                            material={carPurple}
                            position={[-2.272, 5.383, 1.143]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        {/* idk */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder012_0.geometry}
                            material={carPurple}
                            position={[-2.252, -5.129, 1.244]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        {/* RF Brake */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane006_0.geometry}
                            material={carBlue}
                            position={[-3.034, -5.643, 1.414]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={0.111}
                        />
                        {/* RF Disc */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder013_0.geometry}
                            material={carBlue}
                            position={[-2.89, -5.129, 1.244]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={[0.658, 0.658, 0.098]}
                        />
                        {/* Toyota emblem back */}
                        <mesh
                            ref={backRef}
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane007_0.geometry}
                            material={carPurple}
                            position={[0.246, 9.121, 3.357]}
                            rotation={[-1.19, 0, -Math.PI]}
                            scale={0.015}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder016_0.geometry}
                            material={carBlue}
                            position={[0.246, 8.884, 3.838]}
                            rotation={[1.936, 0, 0]}
                            scale={0.046}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001_0.geometry}
                            material={carBlue}
                            position={[1.235, 9.125, 2.862]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube002_0.geometry}
                            material={carPurple}
                            position={[-0.733, 9.125, 2.862]}
                            scale={0.085}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder017_0.geometry}
                            material={materials.Body}
                            position={[2.525, 8, 1.244]}
                            rotation={[Math.PI / 2, 0, 0]}
                            scale={[0.393, 0.28, 0.488]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube003_0.geometry}
                            material={materials.Body}
                            position={[2.165, 0.044, 0.858]}
                            scale={[0.639, 3.091, 0.185]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_0.geometry}
                            material={materials.Body}
                            position={[0.246, -3.075, 3.996]}
                            rotation={[-0.131, -0.181, 0.17]}
                            scale={[0.061, 0.076, 0.161]}
                        />

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane009_0.geometry}
                            material={materials.Body}
                            position={[0.246, -8.563, 2.62]}
                            rotation={[1.473, 0, 0]}
                            scale={0.015}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane010_0.geometry}
                            material={materials.Body}
                            position={[0.246, -8.949, 2.099]}
                            rotation={[Math.PI / 2, 0, 0]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube005_0.geometry}
                            material={materials.Body}
                            position={[0.246, -8.864, 2.099]}
                            scale={0.047}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_0.geometry}
                            material={materials.Body}
                            position={[0.246, -8.687, 1.384]}
                            scale={[0.755, 0.043, 0.26]}
                        />
                    </group>

                    {/* LF LF LF */}
                    <group ref={lfwParentRef} position={[2.548, -5.132, 1.244]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            enableCcd={true}
                            setContactSkin={0.1}
                        />
                        <group ref={lfwRef}>
                            {/* lf Tire */}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder_0.geometry}
                                material={tireMaterial}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={1.315}
                            />
                            {/* lf Wheel */}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle_0.geometry}
                                material={carPurple}
                            />
                            {/* lf Lugs */}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder001_0.geometry}
                                material={carPurple}
                                // position={[2.548, -5.132, 1.244]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={0.06}
                            />
                        </group>
                    </group>
                    {/* RF RF RF */}
                    <group
                        ref={rfwParentRef}
                        position={[-2.109, -5.129, 1.244]}
                    >
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            enableCcd={true}
                            setContactSkin={0.1}
                        />

                        <group ref={rfwRef}>
                            {/*  RF Lug*/}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder014_0.geometry}
                                material={carPurple}
                                rotation={[Math.PI, -Math.PI / 2, 0]}
                                scale={0.06}
                            />
                            {/* RF Wheel */}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle003_0.geometry}
                                material={carPurple}
                                rotation={[0, 0, -Math.PI]}
                            />
                            {/* RF Tire */}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder015_0.geometry}
                                material={tireMaterial}
                                rotation={[Math.PI, -Math.PI / 2, 0]}
                                scale={1.315}
                            />
                        </group>
                    </group>

                    {/* RR RR RR */}
                    <group ref={rrwRef} position={[2.612, 5.381, 1.143]}>
                        {/* RR Lugs */}
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            enableCcd={true}
                            setContactSkin={0.1}
                            // mass={12}

                            // friction={rearWheelFriction}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder006_0.geometry}
                            material={carPurple}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={0.06}
                        />
                        {/* RR  Wheel*/}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_0.geometry}
                            material={carBlue}
                        />
                        {/* RR Tire */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder007_0.geometry}
                            material={tireMaterial}
                            // position={[2.612, 5.381, 1.143]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={1.315}
                        />
                    </group>
                    {/* LR LR LR */}
                    <group ref={lrwRef} position={[-2.129, 5.383, 1.143]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            enableCcd={true}
                            setContactSkin={0.1}
                            // friction={rearWheelFriction}
                        />

                        {/* LR Tire */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder008_0.geometry}
                            material={tireMaterial}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={1.315}
                        />
                        {/* LR Wheel */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle002_0.geometry}
                            material={carPurple}
                            rotation={[0, 0, -Math.PI]}
                        />

                        {/*LR Lugs  */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder009_0.geometry}
                            material={carPurple}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                            scale={0.06}
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
useGLTF.preload('/models/newnewCar.glb');

export default NewCar;

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
