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
import { useGlobalState } from '../Context/stateContext';

// prompt user with press shift to flip car... or r for respawn -- when is upside true

const Hachiroku = () => {
    const { nodes, materials } = useGLTF('/models/hachiroku.glb');

    // car refs
    const carRef = useRef();
    const rfwParentRef = useRef();
    const rfwRef = useRef();
    const lfwParentRef = useRef();
    const lfwRef = useRef();
    const lrwRef = useRef();
    const rrwRef = useRef();
    const lfwCollider = useRef();
    const rfwCollider = useRef();
    const brakeLightsRef = useRef();

    // camera
    const {
        activeCamera,
        setActiveCamera,
        showGame,
        isOnGround,
        keysPressed,
        setKeysPressed,
    } = useGlobalState();

    // input
    // const [keysPressed, setKeysPressed] = useState({});

    // car tuning
    const topSpeed = 180;
    const torqueFactor = 12;
    const steerAngle = Math.PI / 9;
    const respawnHeight = 900;
    const maxSpeedForTurning = 69; // nice

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();
            setKeysPressed((prevKeys) => ({ ...prevKeys, [key]: true }));
        };

        const handleKeyUp = (event) => {
            const key = event.key.toLowerCase();
            setKeysPressed((prevKeys) => ({ ...prevKeys, [key]: false }));
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        const switchCamera = keysPressed['c'];
        const movementKey =
            keysPressed['arrowup'] ||
            keysPressed['arrowdown'] ||
            keysPressed['arrowleft'] ||
            keysPressed['arrowright'] ||
            keysPressed['e'] ||
            keysPressed['s'] ||
            keysPressed['d'] ||
            keysPressed['f'];

        if (switchCamera && showGame === true) {
            setActiveCamera((prev) => {
                if (prev === 'initial') return 'follow';
                if (prev === 'follow') return 'free';
                if (prev === 'free') return 'initial';
                return 'initial';
            });
        }

        if (movementKey && showGame === true && activeCamera === 'initial') {
            setActiveCamera('follow');
        }
    }, [keysPressed]);

    useFrame((state, delta) => {
        if (activeCamera === 'follow') {
            const moveForward = keysPressed['arrowup'] || keysPressed['e'];
            const moveBackward = keysPressed['arrowdown'] || keysPressed['d'];
            const steerLeft = keysPressed['arrowleft'] || keysPressed['s'];
            const steerRight = keysPressed['arrowright'] || keysPressed['f'];
            const respawn = keysPressed['r'];
            const flip = keysPressed['shift'];

            const scaledForwardAcceleration = 50000 * delta;
            const scaledReverseAcceleration = 40000 * delta;
            const car = carRef.current;
            const velocity = car.linvel();
            const speed = Math.sqrt(
                velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2
            );

            const rotation = car.rotation();
            const carQuaternion = new THREE.Quaternion(
                rotation.x,
                rotation.y,
                rotation.z,
                rotation.w
            );
            const forwardVector = new THREE.Vector3(0, 0, 1).applyQuaternion(
                carQuaternion
            );

            const dotProduct =
                velocity.x * forwardVector.x +
                velocity.y * forwardVector.y +
                velocity.z * forwardVector.z;
            const isMovingForward = dotProduct > 0;

            if (moveForward && isOnGround && speed < topSpeed) {
                const impulse = forwardVector.multiplyScalar(
                    scaledForwardAcceleration
                );
                car.applyImpulse(
                    { x: impulse.x, y: impulse.y, z: impulse.z },
                    true
                );
            }

            if (moveBackward && isOnGround && speed < topSpeed) {
                const backwardVector = new THREE.Vector3(
                    0,
                    0,
                    -1
                ).applyQuaternion(carQuaternion);
                const impulse = backwardVector.multiplyScalar(
                    scaledReverseAcceleration
                );
                car.applyImpulse(
                    { x: impulse.x, y: impulse.y, z: impulse.z },
                    true
                );
            }
            const speedInfluence = Math.min(speed, maxSpeedForTurning);
            if (steerLeft && speed > 0) {
                const torque = new THREE.Vector3(0, 1, 0);
                const leftTorque = torque.multiplyScalar(
                    speedInfluence *
                        torqueFactor *
                        (!isMovingForward && moveBackward ? -1 : 1)
                );
                car.applyTorqueImpulse(
                    { x: leftTorque.x, y: leftTorque.y, z: leftTorque.z },
                    true
                );
            }

            if (steerRight && speed > 0) {
                const torque = new THREE.Vector3(0, -1, 0);
                const rightTorque = torque.multiplyScalar(
                    speedInfluence *
                        torqueFactor *
                        (!isMovingForward && moveBackward ? -1 : 1)
                );
                car.applyTorqueImpulse(
                    { x: rightTorque.x, y: rightTorque.y, z: rightTorque.z },
                    true
                );
            }

            if (brakeLightsRef.current) {
                brakeLightsRef.current.material.emissiveIntensity = moveBackward
                    ? 1.8
                    : 1.1;
            }

            // respawn
            if (respawn && carRef.current) {
                carRef.current.setTranslation(
                    { x: -120, y: 1300, z: -150 },
                    true
                );
                carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
                carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                const euler = new THREE.Euler(0, 0.5, 0);
                const quaternion = new THREE.Quaternion().setFromEuler(euler);
                carRef.current.setRotation(quaternion, true);
            }
            // auto respawn
            if (carRef.current) {
                const currentPosition = carRef.current.translation();
                if (currentPosition.y < respawnHeight) {
                    carRef.current.setTranslation(
                        { x: -120, y: 1300, z: -150 },
                        true
                    );
                    carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
                    carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                    const euler = new THREE.Euler(0, 0.5, 0);
                    const quaternion = new THREE.Quaternion().setFromEuler(
                        euler
                    );
                    carRef.current.setRotation(quaternion, true);
                }
            }
            // flip in place
            if (flip && carRef.current) {
                const currentPosition = carRef.current.translation();
                const heightIncrease = 100 * delta;
                carRef.current.setTranslation(
                    {
                        x: currentPosition.x,
                        y: currentPosition.y + heightIncrease,
                        z: currentPosition.z,
                    },
                    true
                );
                carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
                carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                const currentRotation = carRef.current.rotation();
                const currentQuaternion = new THREE.Quaternion(
                    currentRotation.x,
                    currentRotation.y,
                    currentRotation.z,
                    currentRotation.w
                );
                const currentEuler = new THREE.Euler().setFromQuaternion(
                    currentQuaternion
                );
                const preservedYaw = currentEuler.y;
                const correctedEuler = new THREE.Euler(0, preservedYaw, 0);
                const correctedQuaternion = new THREE.Quaternion().setFromEuler(
                    correctedEuler
                );

                carRef.current.setRotation(correctedQuaternion, true);
            }

            // wheel rotation
            if (
                lfwParentRef.current &&
                rfwParentRef.current &&
                activeCamera === 'follow'
            ) {
                if (steerLeft) {
                    lfwParentRef.current.rotation.set(0, steerAngle, 0);
                    rfwParentRef.current.rotation.set(0, steerAngle, 0);
                } else if (steerRight) {
                    lfwParentRef.current.rotation.set(0, -steerAngle, 0);
                    rfwParentRef.current.rotation.set(0, -steerAngle, 0);
                } else {
                    lfwParentRef.current.rotation.set(0, 0, 0);
                    rfwParentRef.current.rotation.set(0, 0, 0);
                }
            }

            // wheel spin
            const wheelRotationSpeed = (speed / 30) * isMovingForward ? 1 : -1;
            if (
                lfwRef.current &&
                rfwRef.current &&
                lrwRef.current &&
                rrwRef.current
            ) {
                lfwRef.current.rotation.x += wheelRotationSpeed;
                rfwRef.current.rotation.x += wheelRotationSpeed;
                lrwRef.current.rotation.x += wheelRotationSpeed;
                rrwRef.current.rotation.x += wheelRotationSpeed;
            }
        }
    });

    const blueGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x007bff),
        emissive: new THREE.Color(0x007bff),
        emissiveIntensity: 1.8,
    });
    const slateGray = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x353839),
        roughness: 1,
    });
    const glass = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x353839),
        roughness: 0.5,
        metalness: 0.7,
    });
    const whiteGlow = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 0.4,
    });

    const fogLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffa500),
        emissive: new THREE.Color(0xffa500),
        emissiveIntensity: 0.5,
    });
    // When determining pivot point for each wheel. Set origin to geometry for each lrw (lugs, wheel, tire) in blender. Then set a parent pivot position and adjust positions relatively
    return (
        <>
            <RigidBody
                ref={carRef}
                mass={15}
                colliders={false}
                position={[-120, 1310, -150]}
                rotation={[0, 0.5, 0]}
                friction={0.1}
                name="car"
            >
                <CuboidCollider
                    args={[4, 1.5, 9.3]}
                    position={[0, 2.5, 0]}
                    name="bodyCollider"
                />
                <CuboidCollider
                    args={[3.5, 0.8, 5.5]}
                    position={[0, 4.8, -2.5]}
                    name="roofCollider"
                    mass={0.002}
                    // onCollisionEnter={({ other }) => {
                    //     if (other.rigidBodyObject.name === 'track') {
                    //         setIsUpsideDown(true);
                    //     }
                    // }}
                    // onCollisionExit={() => setIsUpsideDown(false)}
                />

                <group dispose={null}>
                    <group>
                        <mesh
                            geometry={nodes.AxelRear.geometry}
                            material={materials.Blue}
                        />
                        <mesh
                            geometry={nodes.BrakeLights.geometry}
                            material={
                                new THREE.MeshStandardMaterial({
                                    color: new THREE.Color(0xff0000),
                                    emissive: new THREE.Color(0xff0000),
                                    emissiveIntensity: 1.1,
                                })
                            }
                            ref={brakeLightsRef}
                        />
                        <mesh
                            geometry={nodes.Exhaust.geometry}
                            material={materials.Tire}
                        />
                        <mesh
                            geometry={nodes.Fogs.geometry}
                            material={fogLights}
                        />
                        <mesh
                            geometry={nodes.Glass.geometry}
                            material={materials.Glass}
                        />
                        <mesh
                            geometry={nodes.LeftFrontBrakeDiscs.geometry}
                            material={materials.Silver}
                        />
                        <mesh
                            geometry={nodes.ToyotaBadgeBack.geometry}
                            material={materials.Trim}
                        />
                        <mesh
                            geometry={nodes.TruenoBadgeFront.geometry}
                            material={whiteGlow}
                        />
                        <mesh
                            geometry={nodes.Trim.geometry}
                            material={materials.Trim}
                        />
                        <mesh
                            geometry={nodes.Body.geometry}
                            material={materials.Blue}
                        />
                        <mesh
                            geometry={nodes.WhiteFrontBlinkers.geometry}
                            material={whiteGlow}
                        />
                        <mesh
                            geometry={nodes.LicensePlateLights.geometry}
                            material={whiteGlow}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LicensePlate.geometry}
                            material={materials.Trim}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LicensePlateText.geometry}
                            material={blueGlow}
                        />

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Calipers.geometry}
                            material={blueGlow}
                        />
                    </group>

                    <CylinderCollider
                        args={[1.2, 1.2]}
                        position={[2.6, 1.3, 5.5]}
                        rotation={[0, 0, Math.PI / 2]}
                        name="lfwCollider"
                        ref={lfwCollider}
                    />
                    <group ref={lfwParentRef} position={[3.375, 1.377, 5.559]}>
                        <group ref={lfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontLugNuts.geometry}
                                material={materials['86wheel']}
                                position={[0.074, 0.008, -0.007]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontTire.geometry}
                                material={materials.Tire}
                                position={[-0.191, -0.004, -0.009]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontWheel.geometry}
                                material={materials['86wheel']}
                            />
                        </group>
                    </group>

                    <CylinderCollider
                        args={[1.2, 1.2]}
                        position={[-2.6, 1.3, 5.5]}
                        rotation={[0, 0, Math.PI / 2]}
                        name="rfwCollider"
                        ref={rfwCollider}
                    />
                    <group ref={rfwParentRef} position={[-3.447, 1.377, 5.533]}>
                        <group ref={rfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightFrontWheel.geometry}
                                material={materials['86wheel']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightFrontTire.geometry}
                                material={materials.Tire}
                                position={[0.19, -0.003, 0.008]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightFrontLugNuts.geometry}
                                material={materials['86wheel']}
                                position={[-0.074, 0.008, 0.006]}
                            />
                        </group>
                    </group>

                    <group>
                        <CylinderCollider
                            args={[1.2, 1.2]}
                            name="lrwCollider"
                            position={[2.6, 1.3, -5]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                        <group ref={lrwRef} position={[3.46, 1.34, -4.954]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftRearLugNuts.geometry}
                                material={materials['86wheel']}
                                position={[0.074, 0.008, -0.006]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftRearTire.geometry}
                                material={materials.Tire}
                                position={[-0.191, -0.004, -0.008]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftRearWheel.geometry}
                                material={materials['86wheel']}
                            />
                        </group>
                    </group>

                    <group>
                        <CylinderCollider
                            args={[1.2, 1.2]}
                            position={[-2.6, 1.3, -5]}
                            rotation={[0, 0, Math.PI / 2]}
                            name="rrwCollider"
                        />
                        <group ref={rrwRef} position={[-3.447, 1.34, -4.98]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightRearLugNuts.geometry}
                                material={materials['86wheel']}
                                position={[-0.073, 0.008, 0.007]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightRearTire.geometry}
                                material={materials.Tire}
                                position={[0.191, -0.004, 0.008]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightRearWheel.geometry}
                                material={materials['86wheel']}
                            />
                        </group>
                    </group>
                </group>
            </RigidBody>

            <CameraManager
                carRef={carRef}
                activeCamera={activeCamera}
                setActiveCamera={setActiveCamera}
                keysPressed={keysPressed}
            />
        </>
    );
};
useGLTF.preload('/models/hachiroku.glb');

export default Hachiroku;
