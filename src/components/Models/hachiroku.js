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

// todo decide on camera buttons -- should mouse clicking trigger free mode? also fix free cam locking

// prompt user with press shift to flip car... or r for respawn -- when is upside true

// todo ground movement only
// aka all four wheels off track no move
// probably want to disable movement when all wheels off ground
// last major car change is going to be flying. Car can just fly when off the ground.
// have to determine when all 4 wheels are off or back 2 wheels not in contact
// todo for car ... movement on ground only -- -- smoothness of follow? drift button maybe
// so drift and ground only movement
// Brake light integration?
// import glsl from 'babel-plugin-glsl/macro';

// Create a custom shader material
// Define the shader material

// Extend the material in React Three Fiber

const Hachiroku = ({ trackRef }) => {
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
    const lfwCollider = useRef();
    const rfwCollider = useRef();
    const brakeLightsRef = useRef();
    const exhaustRef = useRef();

    // camera
    const { activeCamera, setActiveCamera, showLoadingScreen, isOnGround } =
        useGlobalState();

    // input
    const [keysPressed, setKeysPressed] = useState({});
    const [torqueFactor, setTorqueFactor] = useState(1.09);

    // movement
    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [totalFriction, setTotalFriction] = useState(0.5);
    const [rearWheelFriction, setRearWheelFriction] = useState(0.3);
    const [topSpeed, setTopSpeed] = useState(950);
    const forwardAcceleration = 50;
    const reverseAcceleration = 40;
    const braking = 80;
    const steerAngle = Math.PI / 9;
    const respawnHeight = 900;

    // car detection
    const [isUpsideDown, setIsUpsideDown] = useState(false);

    // instead of colliders lets try intersects ray

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

        if (switchCamera && showLoadingScreen === false) {
            setActiveCamera((prev) => {
                if (prev === 'initial') return 'follow';
                if (prev === 'follow') return 'free';
                if (prev === 'free') return 'initial';
                return 'initial';
            });
        }

        if (
            movementKey &&
            showLoadingScreen === false &&
            activeCamera === 'initial'
        ) {
            setActiveCamera('follow');
        }
    }, [keysPressed]);

    useFrame(() => {
        if (activeCamera === 'follow') {
            const moveForward = keysPressed['arrowup'] || keysPressed['e'];
            const moveBackward = keysPressed['arrowdown'] || keysPressed['d'];
            const steerLeft = keysPressed['arrowleft'] || keysPressed['s'];
            const steerRight = keysPressed['arrowright'] || keysPressed['f'];
            const respawn = keysPressed['r'];
            const flip = keysPressed['shift'];

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
                setIsUpsideDown(false);
            }
            // auto respawn
            if (carRef.current) {
                // position={[-120, 1300, -150]}
                // rotation={[0, 0.5, 0]}
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
                    setIsUpsideDown(false);
                    setCurrentSpeed(0);
                }
            }
            // flip in place
            if (flip && carRef.current) {
                const currentPosition = carRef.current.translation();
                carRef.current.setTranslation(
                    {
                        x: currentPosition.x,
                        y: currentPosition.y + 2,
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
                setIsUpsideDown(false);
            }
            // speed
            if (
                moveForward &&
                activeCamera === 'follow' &&
                isOnGround === true
            ) {
                if (currentSpeed < topSpeed) {
                    setCurrentSpeed((prevSpeed) => {
                        const accelerationFactor =
                            (topSpeed - prevSpeed) / topSpeed;
                        return (
                            prevSpeed + forwardAcceleration * accelerationFactor
                        );
                    });
                }
            } else if (
                moveBackward &&
                activeCamera === 'follow' &&
                isOnGround === true
            ) {
                if (currentSpeed > -topSpeed) {
                    setCurrentSpeed(
                        (prevSpeed) => prevSpeed - reverseAcceleration
                    );
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
            const wheelRotationSpeed = currentSpeed / 30;
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

            if (
                carRef.current &&
                activeCamera === 'follow' &&
                isUpsideDown === false &&
                isOnGround === true
            ) {
                const car = carRef.current;

                const rotation = car.rotation();
                const carQuaternion = new THREE.Quaternion(
                    rotation.x,
                    rotation.y,
                    rotation.z,
                    rotation.w
                );

                const forwardVector = new THREE.Vector3(0, 0, 1);
                forwardVector.applyQuaternion(carQuaternion);
                const impulse = forwardVector.multiplyScalar(currentSpeed);
                car.applyImpulse(
                    { x: impulse.x, y: impulse.y, z: impulse.z },
                    true
                );

                const torque = new THREE.Vector3(0, 1, 0);

                if (currentSpeed < 0) {
                    torque.set(0, -1, 0);
                }

                if (steerLeft) {
                    const leftTorque = torque.multiplyScalar(
                        Math.abs(currentSpeed) * torqueFactor
                    );
                    car.applyTorqueImpulse(
                        { x: leftTorque.x, y: leftTorque.y, z: leftTorque.z },
                        true
                    );
                } else if (steerRight) {
                    const rightTorque = torque.multiplyScalar(
                        -Math.abs(currentSpeed) * torqueFactor
                    );
                    car.applyTorqueImpulse(
                        {
                            x: rightTorque.x,
                            y: rightTorque.y,
                            z: rightTorque.z,
                        },
                        true
                    );
                }
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

    const brakeLights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff0000),
        emissive: new THREE.Color(0xff0000),
        emissiveIntensity: 1.1,
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
                mass={10}
                colliders={false}
                position={[-120, 1310, -150]}
                rotation={[0, 0.5, 0]}
                friction={0.18}
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
                    onCollisionEnter={({ other }) => {
                        if (other.rigidBodyObject.name === 'track') {
                            setIsUpsideDown(true);
                        }
                    }}
                    onCollisionExit={() => setIsUpsideDown(false)}
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
                            // setContactSkin={0.1}
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

            {/* end car */}

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
