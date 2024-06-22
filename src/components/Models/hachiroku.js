'use client';

import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from 'react';
import {
    CuboidCollider,
    RigidBody,
    CylinderCollider,
    useRapier,
} from '@react-three/rapier';
import { useFrame, extend, meshStandardMaterial } from '@react-three/fiber';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import CameraManager from '../Camera/cameraManager';
import { debounce } from 'lodash';
import { useGlobalState } from '../Context/stateContext';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';

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

const HachiRoku = ({ trackRef }) => {
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
    const { activeCamera, setActiveCamera, showGame } = useGlobalState();

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
    const [groundCar, setGroundCar] = useState(false);

    // instead of colliders lets try intersects ray

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

        if (switchCamera && showGame === true) {
            setActiveCamera((prev) => {
                if (prev === 'initial') return 'follow';
                if (prev === 'follow') return 'free';
                if (prev === 'free') return 'initial';
                return 'initial';
            });
        }

        // if (arrowKeyPressed && showGame === true) {
        //     setActiveCamera('follow');
        // }
    }, [keysPressed, setActiveCamera, showGame]);

    // useEffect(() => {
    //     const allOffGround =
    //         !wheelsOnGround.lfw &&
    //         !wheelsOnGround.rfw &&
    //         !wheelsOnGround.lrw &&
    //         !wheelsOnGround.rrw;

    //     setAllWheelsOffGround(allOffGround);
    // }, [wheelsOnGround]);

    useFrame(({ clock }) => {
        const moveForward = keysPressed['ArrowUp'] || keysPressed['e'];
        const moveBackward = keysPressed['ArrowDown'] || keysPressed['d'];
        const steerLeft = keysPressed['ArrowLeft'] || keysPressed['s'];
        const steerRight = keysPressed['ArrowRight'] || keysPressed['f'];
        // const drift = keysPressed['big man'];
        const respawn = keysPressed['r'];
        const flip = keysPressed['Shift'];

        if (brakeLightsRef.current) {
            brakeLightsRef.current.material.emissiveIntensity = moveBackward
                ? 1.8
                : 1.1;
        }

        // respawn
        if (respawn && carRef.current && activeCamera === 'follow') {
            carRef.current.setTranslation({ x: 0, y: 1300, z: 0 }, true);
            carRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
            carRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
            const euler = new THREE.Euler(0, 0, 0);
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
                const euler = new THREE.Euler(0, 0, 0);
                const quaternion = new THREE.Quaternion().setFromEuler(euler);
                carRef.current.setRotation(quaternion, true);
                setIsUpsideDown(false);
                setCurrentSpeed(0);
            }
        }
        // flip in place
        if (flip && carRef.current && activeCamera === 'follow') {
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
        // wheel rotation
        if (
            lfwParentRef.current &&
            rfwParentRef.current
            // activeCamera === 'follow'
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
        // drift
        // if (drift) {
        //     if (rearWheelFriction !== 0.01) {
        //         setRearWheelFriction(0.01);
        //     }
        // } else {
        //     if (rearWheelFriction !== 0.3) {
        //         setRearWheelFriction(0.3);
        //     }
        // }

        if (
            carRef.current &&
            activeCamera === 'follow' &&
            isUpsideDown === false
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
                    { x: rightTorque.x, y: rightTorque.y, z: rightTorque.z },
                    true
                );
            }
        }

        // console.log(groundCar);
    });

    //  materials

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

    // When determining pivot point for each wheel. Set origin to geometry for each lrw (lugs, wheel, tire) in blender. Then set a parent pivot position and adjust positions relatively
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

    return (
        <>
            <RigidBody
                ref={carRef}
                mass={9}
                colliders={false}
                position={[0, 1300, 0]}
                friction={0.2}
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
                <CuboidCollider
                    args={[2, 2, 2]}
                    position={[0, 1, 0]}
                    name="groundCollider"
                    sensor
                    // onIntersectionEnter={({ other }) => {
                    //     if (other.rigidBodyObject.name === 'track') {
                    //         setGroundCar(true);
                    //     }
                    // }}
                    // onIntersectionExit={() => setGroundCar(false)}
                    mass={0}
                    friction={0}
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
                        args={[1.4, 1.2]}
                        position={[2.4, 1.3, 5.5]}
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
                        args={[1.4, 1.2]}
                        position={[-2.4, 1.3, 5.5]}
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
                            args={[1.4, 1.2]}
                            name="lrwCollider"
                            position={[2.4, 1.3, -5]}
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
                            args={[1.4, 1.2]}
                            position={[-2.4, 1.3, -5]}
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

export default HachiRoku;

{
    /* <RigidBody
                ref={carRef}
                mass={11}
                colliders={false}
                position={[0, 1300, 0]}
                friction={0.3}
                name="car"
                // ccd={true}
            >
                <CuboidCollider
                    args={[4, 1.5, 9.3]}
                    position={[0.3, 2.5, -0.3]}
                    name="bodyCollider"
                />
                <CuboidCollider
                    args={[3.5, 0.8, 5.5]}
                    position={[0.3, 4.8, -2.5]}
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
                    <group ref={bodyRef}>
                     </group

                    <group ref={lfwParentRef} position={[2.548, 1.244, 5.132]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            name="lfwCollider"
                            // onCollisionEnter={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             lfw: true,
                            //         }));
                            //     }
                            // }}
                            // onCollisionExit={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             lfw: false,
                            //         }));
                            //     }
                            // }}
                        />
                        <group ref={lfwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.LeftFrontTire.geometry}
                                material={
                                    new THREE.MeshStandardMaterial({
                                        color: new THREE.Color(0x555555),
                                        roughness: 0.8,
                                    })
                                }
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
                            // onCollisionEnter={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             rfw: true,
                            //         }));
                            //     }
                            // }}
                            // onCollisionExit={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             rfw: false,
                            //         }));
                            //     }
                            // }}
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
                                material={
                                    new THREE.MeshStandardMaterial({
                                        color: new THREE.Color(0x555555),
                                        roughness: 0.8,
                                    })
                                }
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1.315}
                                name="rightFrontTire"
                            />
                        </group>
                    </group>
                    <group position={[2.612, 1.143, -5.381]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            name="lrwCollider"
                            position={[0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            // onCollisionEnter={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             lrw: true,
                            //         }));
                            //     }
                            // }}
                            // onCollisionExit={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             lrw: false,
                            //         }));
                            //     }
                            // }}
                        />
                        <group ref={lrwRef}>
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
                                material={
                                    new THREE.MeshStandardMaterial({
                                        color: new THREE.Color(0x555555),
                                        roughness: 0.8,
                                    })
                                }
                                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                                scale={1.315}
                                name="leftRearTire"
                            />
                        </group>
                    </group>
                    <group position={[-2.129, 1.143, -5.383]}>
                        <CylinderCollider
                            args={[0.7, 1.2]}
                            position={[-0.85, 0, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                            setContactSkin={0.1}
                            name="rrwCollider"
                            // onCollisionEnter={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             rrw: true,
                            //         }));
                            //     }
                            // }}
                            // onCollisionExit={({ other }) => {
                            //     if (other.rigidBodyObject.name === 'track') {
                            //         setWheelsOnGround((prev) => ({
                            //             ...prev,
                            //             rrw: false,
                            //         }));
                            //     }
                            // }}
                        />
                        <group ref={rrwRef}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.RightRearTire.geometry}
                                material={
                                    new THREE.MeshStandardMaterial({
                                        color: new THREE.Color(0x555555),
                                        roughness: 0.8,
                                    })
                                }
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
                </group>
            // </RigidBody> */
}

// enddddddddddddddddddddddd
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
