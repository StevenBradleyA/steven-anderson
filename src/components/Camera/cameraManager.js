import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useGlobalState } from '../Context/stateContext';

const CameraManager = ({ carRef, backRef, keysPressed }) => {
    // todo fixed height for follow mode that can be adjusted with a scroll wheel
    // todo can I make the orbit mode not clip through object?
    // todo orbit mode rotate by holding mouse wheel button
    // todo free mode needs to switch immediately on mouse down not up like clicking should instantly switch not clicking then dragging the first click.
    // free camera mode
    // drop down menu to select camera
    const { activeCamera } = useGlobalState();

    const { camera, gl } = useThree();
    const cameraTarget = useRef(new THREE.Vector3());
    const [targetPosition, setTargetPosition] = useState(
        new THREE.Vector3(0, 1000, 0)
    );
    const [targetLookAt, setTargetLookAt] = useState(
        new THREE.Vector3(0, 0, 0)
    );

    // follow
    const offset = new THREE.Vector3(0, 200, -500);
    const isPanning = useRef(false);
    const isRotating = useRef(false);
    const startPan = useRef(new THREE.Vector2());
    const startRotate = useRef(new THREE.Vector2());
    const [followHeight, setFollowHeight] = useState(15);
    const [followDistance, setFollowDistance] = useState(30);
    // free
    const [cameraSpeed, setCameraSpeed] = useState(3);

    useEffect(() => {
        if (activeCamera === 'initial') {
            setTargetPosition(new THREE.Vector3(0, 1600, 0));
            setTargetLookAt(new THREE.Vector3(0, 0, 0));
        } else if (activeCamera === 'follow' && carRef.current) {
            const currentPosition = carRef.current.translation();
            if (currentPosition) {
                setTargetPosition(
                    new THREE.Vector3().copy(currentPosition).add(offset)
                );
                setTargetLookAt(new THREE.Vector3().copy(currentPosition));
            }
        }
    }, [activeCamera, carRef]);

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
            camera.position.lerpVectors(camera.position, targetPosition, 0.1);
            cameraTarget.current.lerpVectors(
                cameraTarget.current,
                targetLookAt,
                0.1
            );
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

            if (increaseSpeed) setCameraSpeed((prevSpeed) => prevSpeed + 0.2);
            if (decreaseSpeed)
                setCameraSpeed((prevSpeed) => Math.max(prevSpeed - 0.2, 0.2));

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

            console.log(cameraSpeed);
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
        } else if (activeCamera === 'free') {
            camera.lookAt(targetLookAt);
        }
    });

    return null;
};

export default CameraManager;

// else if (
//     activeCamera === 'follow' &&
//     carRef.current &&
//     backRef.current
// ) {
//     const carTranslation = carRef.current.translation();
//     const rotation = carRef.current.rotation();
//     const carQuaternion = new THREE.Quaternion(
//         rotation.x,
//         rotation.y,
//         rotation.z,
//         rotation.w
//     );
//     const backwardVector = new THREE.Vector3(0, 1, 0); // Backward in local space
//     backwardVector.applyQuaternion(carQuaternion);

//     const desiredPosition = new THREE.Vector3(
//         carTranslation.x + backwardVector.x * followDistance,
//         followHeight,
//         carTranslation.z + backwardVector.z * followDistance
//     );

//     gsap.to(camera.position, {
//         x: desiredPosition.x,
//         y: desiredPosition.y,
//         z: desiredPosition.z,
//         duration: 0.5,
//         ease: 'power2.out',
//     });

//     gsap.to(cameraTarget.current, {
//         x: carTranslation.x,
//         y: followHeight,
//         z: carTranslation.z,
//         duration: 0.5,
//         ease: 'power2.out',
//         onUpdate: () => camera.lookAt(cameraTarget.current),
//     });
// }
// });
