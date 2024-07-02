import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useGlobalState } from '../Context/stateContext';

const CameraManager = ({ carRef, keysPressed }) => {
    // free camera mode
    // drop down menu to select camera

    const { activeCamera } = useGlobalState();
    const { camera, gl } = useThree();
    const cameraTarget = useRef(new THREE.Vector3());

    // fps
    // fps
    const currentSpeedRef = useRef(0);
    let accumulator = 0;
    const fixedTimeStep = 1 / 60;

    // follow
    const isRotating = useRef(false);
    const startRotate = useRef(new THREE.Vector2());
    const [followHeight, setFollowHeight] = useState(15);
    const [followDistance, setFollowDistance] = useState(40);

    // free
    const [cameraSpeed, setCameraSpeed] = useState(100);
    const cameraSpeedRef = useRef(100);

    // initial
    const [currentIndex, setCurrentIndex] = useState(0);
    const positions = [
        new THREE.Vector3(200, 1380, 10), // hackerman
        new THREE.Vector3(445, 1170, 550), // lambo
        new THREE.Vector3(-380, 1350, -200), // skills
        new THREE.Vector3(-500, 1600, 5),
        new THREE.Vector3(150, 1450, -600), //nice
        new THREE.Vector3(396.172, 1158.268, 735.183), //
        new THREE.Vector3(-590, 1300, 300), //8 sieg
        new THREE.Vector3(800, 1200, 600), //
        new THREE.Vector3(-1000, 1400, -600),
        new THREE.Vector3(300, 1800, -100),
    ];

    const lookAts = [
        new THREE.Vector3(300, 1300, 200), //  hackerman
        new THREE.Vector3(442, 1175, 600), // lambo
        new THREE.Vector3(-900, 1330, -845), // skills
        new THREE.Vector3(0, 1200, 0),
        new THREE.Vector3(-150, 1400, 300), //nice
        new THREE.Vector3(396.172, 1158.268, 735.183),
        new THREE.Vector3(-580, 1250, 900), //8 sieg
        new THREE.Vector3(700, 1200, 500), //10
        new THREE.Vector3(0, 1400, -400), //11
        new THREE.Vector3(300, 1600, -200), //12
    ];

    useEffect(() => {
        let interval;
        if (activeCamera === 'initial') {
            interval = setInterval(() => {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % positions.length
                );
            }, 10000);
        }

        return () => clearInterval(interval);
    }, [activeCamera]);

    useEffect(() => {
        const onMouseDown = (event) => {
            if (activeCamera === 'free' && event.button === 0) {
                isRotating.current = true;
                startRotate.current.set(event.clientX, event.clientY);
            }
        };

        const onMouseMove = (event) => {
            if (isRotating.current) {
                const deltaX = event.clientX - startRotate.current.x;
                const deltaY = event.clientY - startRotate.current.y;
                startRotate.current.set(event.clientX, event.clientY);

                const quaternion = new THREE.Quaternion();
                const axis = new THREE.Vector3();

                axis.set(0, 1, 0); // Y-axis for horizontal rotation
                quaternion.setFromAxisAngle(axis, -deltaX * 0.002);
                camera.quaternion.multiplyQuaternions(
                    quaternion,
                    camera.quaternion
                );

                axis.set(1, 0, 0); // X-axis for vertical rotation
                quaternion.setFromAxisAngle(axis, -deltaY * 0.002);
                camera.quaternion.multiplyQuaternions(
                    camera.quaternion,
                    quaternion
                );
            }
        };

        const onMouseUp = () => {
            isRotating.current = false;
        };

        gl.domElement.addEventListener('mousedown', onMouseDown);
        gl.domElement.addEventListener('mousemove', onMouseMove);
        gl.domElement.addEventListener('mouseup', onMouseUp);

        return () => {
            gl.domElement.removeEventListener('mousedown', onMouseDown);
            gl.domElement.removeEventListener('mousemove', onMouseMove);
            gl.domElement.removeEventListener('mouseup', onMouseUp);
        };
    }, [camera, gl.domElement, activeCamera]);

    // useFrame((state, delta) => {
    //     if (activeCamera === 'initial') {
    //         positions[currentIndex].z -= 0.2;
    //         camera.position.lerp(positions[currentIndex], 0.1);
    //         cameraTarget.current.lerp(lookAts[currentIndex], 0.1);
    //         camera.lookAt(cameraTarget.current);
    //     } else if (activeCamera === 'free') {
    //         const moveForward = keysPressed['e'] || keysPressed['arrowup'];
    //         const moveBackward = keysPressed['d'] || keysPressed['arrowdown'];
    //         const moveLeft = keysPressed['s'] || keysPressed['arrowleft'];
    //         const moveRight = keysPressed['f'] || keysPressed['arrowright'];
    //         const moveUp = keysPressed['r'] || keysPressed[' '];
    //         const moveDown = keysPressed['w'];
    //         const increaseSpeed = keysPressed['g'];
    //         const decreaseSpeed = keysPressed['a'];

    //         if (increaseSpeed)
    //             setCameraSpeed((prevSpeed) => Math.min(prevSpeed + 0.2, 5));

    //         if (decreaseSpeed)
    //             setCameraSpeed((prevSpeed) => Math.max(prevSpeed - 0.2, 0.5));

    //         const direction = new THREE.Vector3();
    //         camera.getWorldDirection(direction);

    //         if (moveForward)
    //             camera.position.addScaledVector(direction, cameraSpeed);
    //         if (moveBackward)
    //             camera.position.addScaledVector(direction, -cameraSpeed);

    //         const right = new THREE.Vector3();
    //         right.crossVectors(camera.up, direction).normalize();

    //         if (moveLeft) camera.position.addScaledVector(right, cameraSpeed);
    //         if (moveRight) camera.position.addScaledVector(right, -cameraSpeed);
    //         if (moveUp) camera.position.addScaledVector(camera.up, cameraSpeed);
    //         if (moveDown)
    //             camera.position.addScaledVector(camera.up, -cameraSpeed);
    //     } else if (activeCamera === 'follow' && carRef.current) {
    //         const car = carRef.current;
    //         const carPosition = car.translation();
    //         const carRotation = car.rotation();

    //         const carQuaternion = new THREE.Quaternion(
    //             carRotation.x,
    //             carRotation.y,
    //             carRotation.z,
    //             carRotation.w
    //         );

    //         const backwardVector = new THREE.Vector3(0, 0, 1);
    //         backwardVector.applyQuaternion(carQuaternion);

    //         const desiredPosition = new THREE.Vector3(
    //             carPosition.x - backwardVector.x * followDistance,
    //             carPosition.y + followHeight,
    //             carPosition.z - backwardVector.z * followDistance
    //         );

    //         camera.position.lerp(desiredPosition, 0.1);

    //         cameraTarget.current.set(
    //             carPosition.x,
    //             carPosition.y,
    //             carPosition.z
    //         );
    //         camera.lookAt(cameraTarget.current);
    //     }
    // });

    // useFrame((state, delta) => {
    //     const movementSpeed = cameraSpeed * delta;
    //     if (activeCamera === 'initial') {
    //         positions[currentIndex].z -= 12 * delta;
    //         camera.position.lerp(positions[currentIndex], 6 * delta);
    //         cameraTarget.current.lerp(lookAts[currentIndex], 6 * delta);
    //         camera.lookAt(cameraTarget.current);
    //     } else if (activeCamera === 'free') {
    //         const moveForward = keysPressed['e'] || keysPressed['arrowup'];
    //         const moveBackward = keysPressed['d'] || keysPressed['arrowdown'];
    //         const moveLeft = keysPressed['s'] || keysPressed['arrowleft'];
    //         const moveRight = keysPressed['f'] || keysPressed['arrowright'];
    //         const moveUp = keysPressed['r'] || keysPressed[' '];
    //         const moveDown = keysPressed['w'];
    //         const increaseSpeed = keysPressed['g'];
    //         const decreaseSpeed = keysPressed['a'];

    //         if (increaseSpeed)
    //             setCameraSpeed((prevSpeed) =>
    //                 Math.min(prevSpeed + 80 * delta, 250)
    //             );

    //         if (decreaseSpeed)
    //             setCameraSpeed((prevSpeed) =>
    //                 Math.max(prevSpeed - 80 * delta, 50)
    //             );

    //         const direction = new THREE.Vector3();
    //         camera.getWorldDirection(direction);

    //         if (moveForward)
    //             camera.position.addScaledVector(direction, movementSpeed);
    //         if (moveBackward)
    //             camera.position.addScaledVector(direction, -movementSpeed);

    //         const right = new THREE.Vector3();
    //         right.crossVectors(camera.up, direction).normalize();

    //         if (moveLeft) camera.position.addScaledVector(right, movementSpeed);
    //         if (moveRight)
    //             camera.position.addScaledVector(right, -movementSpeed);
    //         if (moveUp)
    //             camera.position.addScaledVector(camera.up, movementSpeed);
    //         if (moveDown)
    //             camera.position.addScaledVector(camera.up, -movementSpeed);
    //     } else if (activeCamera === 'follow' && carRef.current) {
    //         const car = carRef.current;
    //         const carPosition = car.translation();
    //         const carRotation = car.rotation();

    //         const carQuaternion = new THREE.Quaternion(
    //             carRotation.x,
    //             carRotation.y,
    //             carRotation.z,
    //             carRotation.w
    //         );

    //         const backwardVector = new THREE.Vector3(0, 0, 1);
    //         backwardVector.applyQuaternion(carQuaternion);

    //         const desiredPosition = new THREE.Vector3(
    //             carPosition.x - backwardVector.x * followDistance,
    //             carPosition.y + followHeight,
    //             carPosition.z - backwardVector.z * followDistance
    //         );

    //         camera.position.lerp(desiredPosition, 10 * delta);

    //         cameraTarget.current.set(
    //             carPosition.x,
    //             carPosition.y,
    //             carPosition.z
    //         );
    //         camera.lookAt(cameraTarget.current);
    //     }
    // });

    useFrame((state, delta) => {
        const movementSpeed = cameraSpeedRef.current * delta;

        if (activeCamera === 'initial') {
            positions[currentIndex].z -= 12 * delta;
            camera.position.lerp(positions[currentIndex], 6 * delta);
            cameraTarget.current.lerp(lookAts[currentIndex], 6 * delta);
            camera.lookAt(cameraTarget.current);
        } else if (activeCamera === 'free') {
            const moveForward = keysPressed['e'] || keysPressed['arrowup'];
            const moveBackward = keysPressed['d'] || keysPressed['arrowdown'];
            const moveLeft = keysPressed['s'] || keysPressed['arrowleft'];
            const moveRight = keysPressed['f'] || keysPressed['arrowright'];
            const moveUp = keysPressed['r'] || keysPressed[' '];
            const moveDown = keysPressed['w'];
            const increaseSpeed = keysPressed['g'];
            const decreaseSpeed = keysPressed['a'];

            if (increaseSpeed)
                cameraSpeedRef.current = Math.min(
                    cameraSpeedRef.current + 80 * delta,
                    250
                );

            if (decreaseSpeed)
                cameraSpeedRef.current = Math.max(
                    cameraSpeedRef.current - 80 * delta,
                    50
                );

            const direction = new THREE.Vector3();
            camera.getWorldDirection(direction);

            if (moveForward)
                camera.position.addScaledVector(direction, movementSpeed);
            if (moveBackward)
                camera.position.addScaledVector(direction, -movementSpeed);

            const right = new THREE.Vector3();
            right.crossVectors(camera.up, direction).normalize();

            if (moveLeft) camera.position.addScaledVector(right, movementSpeed);
            if (moveRight)
                camera.position.addScaledVector(right, -movementSpeed);
            if (moveUp)
                camera.position.addScaledVector(camera.up, movementSpeed);
            if (moveDown)
                camera.position.addScaledVector(camera.up, -movementSpeed);
        } else if (activeCamera === 'follow' && carRef.current) {
            const car = carRef.current;
            const carPosition = car.translation();
            const carRotation = car.rotation();
            const carQuaternion = new THREE.Quaternion(
                carRotation.x,
                carRotation.y,
                carRotation.z,
                carRotation.w
            );

            const backwardVector = new THREE.Vector3(0, 0, 1);
            backwardVector.applyQuaternion(carQuaternion);

            const desiredPosition = new THREE.Vector3(
                carPosition.x - backwardVector.x * followDistance,
                carPosition.y + followHeight,
                carPosition.z - backwardVector.z * followDistance
            );

            camera.position.lerp(desiredPosition, 10 * delta);

            cameraTarget.current.set(
                carPosition.x,
                carPosition.y,
                carPosition.z
            );
            camera.lookAt(cameraTarget.current);
        }
    });

    return null;
};

export default CameraManager;
