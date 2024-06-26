import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useGlobalState } from '../Context/stateContext';

const CameraManager = ({ carRef, keysPressed }) => {
    // free camera mode
    // drop down menu to select camera
    // controls in the initial camera mode
    // when in inital mode esdf or arrows should auto switch for you...

    const { activeCamera } = useGlobalState();

    const { camera, gl } = useThree();
    const cameraTarget = useRef(new THREE.Vector3());
    // follow
    const isRotating = useRef(false);
    const startRotate = useRef(new THREE.Vector2());
    const [followHeight, setFollowHeight] = useState(15);
    const [followDistance, setFollowDistance] = useState(40);
    // free
    const [cameraSpeed, setCameraSpeed] = useState(2);
    // initial

    const [currentIndex, setCurrentIndex] = useState(0);
    const positions = [
        new THREE.Vector3(300, 1350, 150), // Powerglove
        new THREE.Vector3(500, 1600, 5),
        new THREE.Vector3(-500, 1600, 5),
        new THREE.Vector3(442.934, 1400, 596.249), // lambo
        new THREE.Vector3(-800, 1200, -400),
        new THREE.Vector3(700, 1000, -300),
        new THREE.Vector3(-300, 1700, 200),
        new THREE.Vector3(150, 1450, -600),
    ];

    const lookAts = [
        new THREE.Vector3(200, 1350, 200), //  Powerglove
        new THREE.Vector3(0, 1200, 0),
        new THREE.Vector3(0, 1200, 0),
        new THREE.Vector3(442.934, 1159.222, 596.249), // lambo
        new THREE.Vector3(0, 1100, 0),
        new THREE.Vector3(-300, 1200, 100),
        new THREE.Vector3(400, 1300, -100),
        new THREE.Vector3(-150, 1400, 300),
    ];

    console.log(currentIndex);

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

    useFrame(() => {
        if (activeCamera === 'initial') {
            positions[currentIndex].z -= 0.2;
            camera.position.lerp(positions[currentIndex], 0.1);
            cameraTarget.current.lerp(lookAts[currentIndex], 0.1);
            camera.lookAt(cameraTarget.current);
        } else if (activeCamera === 'free') {
            const moveForward = keysPressed['e'];
            const moveBackward = keysPressed['d'];
            const moveLeft = keysPressed['s'];
            const moveRight = keysPressed['f'];
            const moveUp = keysPressed['r'];
            const moveDown = keysPressed['w'];
            const increaseSpeed = keysPressed['g'];
            const decreaseSpeed = keysPressed['a'];

            if (increaseSpeed)
                setCameraSpeed((prevSpeed) => Math.min(prevSpeed + 0.2, 5));
            if (decreaseSpeed)
                setCameraSpeed((prevSpeed) => Math.max(prevSpeed - 0.2, 0.5));

            const direction = new THREE.Vector3();
            camera.getWorldDirection(direction);

            if (moveForward)
                camera.position.addScaledVector(direction, cameraSpeed);
            if (moveBackward)
                camera.position.addScaledVector(direction, -cameraSpeed);

            const right = new THREE.Vector3();
            right.crossVectors(camera.up, direction).normalize();

            if (moveLeft) camera.position.addScaledVector(right, cameraSpeed);
            if (moveRight) camera.position.addScaledVector(right, -cameraSpeed);
            if (moveUp) camera.position.addScaledVector(camera.up, cameraSpeed);
            if (moveDown)
                camera.position.addScaledVector(camera.up, -cameraSpeed);
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

            camera.position.lerp(desiredPosition, 0.1);

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
