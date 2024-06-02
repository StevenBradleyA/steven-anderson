import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

const CameraManager = ({ carRef, backRef }) => {
    // todo fixed height for follow mode that can be adjusted with a scroll wheel
    // todo can I make the orbit mode not clip through object?
    // todo orbit mode rotate by holding mouse wheel button
    // todo free mode needs to switch immediately on mouse down not up like clicking should instantly switch not clicking then dragging the first click.

    // free camera mode 
    // drop down menu to select camera 
    // lets allow camera movement with esdf
    //  car movement with esdf 
    // change camera triggers 


    const { camera, gl } = useThree();
    const cameraTarget = useRef(new THREE.Vector3());
    const [activeCamera, setActiveCamera] = useState('inital');
    const [targetPosition, setTargetPosition] = useState(
        new THREE.Vector3(0, 1000, 0)
    );
    const [targetLookAt, setTargetLookAt] = useState(
        new THREE.Vector3(0, 0, 0)
    );

    const offset = new THREE.Vector3(0, 200, -500);
    const isPanning = useRef(false);
    const isRotating = useRef(false);
    const startPan = useRef(new THREE.Vector2());
    const startRotate = useRef(new THREE.Vector2());
    const [followHeight, setFollowHeight] = useState(15);
    const [followDistance, setFollowDistance] = useState(30);

    const handleMouseDown = (event) => {
        setActiveCamera('free');
        if (event.button === 0) {
            isPanning.current = true;
            startPan.current.set(event.clientX, event.clientY);
        } else if (event.button === 1) {
            console.log('mousewheel');
            isRotating.current = true;
            startRotate.current.set(event.clientX, event.clientY);
        }
    };

    // const handleMouseMove = (event) => {
    //     if (isPanning.current) {
    //         const deltaX = event.clientX - startPan.current.x;
    //         const deltaY = event.clientY - startPan.current.y;
    //         startPan.current.set(event.clientX, event.clientY);

    //         const panOffset = new THREE.Vector3();
    //         panOffset.setFromMatrixColumn(camera.matrix, 0); // get X column of the matrix
    //         panOffset.multiplyScalar(-deltaX);
    //         camera.position.add(panOffset);
    //         panOffset.setFromMatrixColumn(camera.matrix, 1); // get Y column of the matrix
    //         panOffset.multiplyScalar(deltaY);
    //         camera.position.add(panOffset);

    //         setTargetPosition(camera.position.clone());
    //     } else if (isRotating.current) {
    //         const deltaX = event.clientX - startRotate.current.x;
    //         const deltaY = event.clientY - startRotate.current.y;
    //         startRotate.current.set(event.clientX, event.clientY);

    //         const spherical = new THREE.Spherical();
    //         spherical.setFromVector3(camera.position.clone().sub(targetLookAt));
    //         spherical.theta -= deltaX * 0.005; // Adjust the rotation speed as needed
    //         spherical.phi -= deltaY * 0.005;
    //         spherical.makeSafe();

    //         const newPosition = new THREE.Vector3()
    //             .setFromSpherical(spherical)
    //             .add(targetLookAt);
    //         camera.position.copy(newPosition);
    //         camera.lookAt(targetLookAt);
    //     }
    // };
    const handleMouseMove = (event) => {
        if (isPanning.current) {
            const deltaX = event.clientX - startPan.current.x;
            const deltaY = event.clientY - startPan.current.y;
            startPan.current.set(event.clientX, event.clientY);

            const panOffset = new THREE.Vector3();
            panOffset.setFromMatrixColumn(camera.matrix, 0); // get X column of the matrix
            panOffset.multiplyScalar(-deltaX);
            camera.position.add(panOffset);
            panOffset.setFromMatrixColumn(camera.matrix, 1); // get Y column of the matrix
            panOffset.multiplyScalar(deltaY);
            camera.position.add(panOffset);

            // Update the targetLookAt position to match the new camera position
            setTargetLookAt(camera.position.clone());

            setTargetPosition(camera.position.clone());
        } else if (isRotating.current) {
            const deltaX = event.clientX - startRotate.current.x;
            const deltaY = event.clientY - startRotate.current.y;
            startRotate.current.set(event.clientX, event.clientY);

            const spherical = new THREE.Spherical();
            spherical.setFromVector3(camera.position.clone().sub(targetLookAt));
            spherical.theta -= deltaX * 0.005; // Adjust the rotation speed as needed
            spherical.phi -= deltaY * 0.005;
            spherical.makeSafe();

            const newPosition = new THREE.Vector3()
                .setFromSpherical(spherical)
                .add(targetLookAt);
            camera.position.copy(newPosition);
            camera.lookAt(targetLookAt);
        }
    };

    const handleMouseUp = () => {
        isPanning.current = false;
        isRotating.current = false;
    };

    const handleWheel = (event) => {
        // if (activeCamera === 'follow') {
        //     const zoomFactor = event.deltaY * 0.1;

        //     setFollowDistance((prevDistance) => {
        //         const newDistance = prevDistance + zoomFactor;
        //         const clampedDistance = Math.max(
        //             minFollowDistance,
        //             Math.min(newDistance, maxFollowDistance)
        //         );
        //         return clampedDistance;
        //     });

        //     setFollowHeight((prevHeight) => {
        //         const newHeight =
        //             (prevHeight / followDistance) *
        //             (followDistance + zoomFactor);
        //         const clampedHeight = Math.max(
        //             minFollowHeight,
        //             Math.min(newHeight, maxFollowHeight)
        //         );
        //         return clampedHeight;
        //     });
        // }
        if (activeCamera !== 'follow') {
            const zoomFactor = event.deltaY * 1.1;
            const direction = new THREE.Vector3()
                .subVectors(camera.position, targetLookAt)
                .normalize();

            const newPosition = camera.position
                .clone()
                .add(direction.multiplyScalar(zoomFactor));

            gsap.to(camera.position, {
                x: newPosition.x,
                y: newPosition.y,
                z: newPosition.z,
                duration: 0.5,
                ease: 'power2.out',
            });

            setTargetPosition(newPosition);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        console.log('Wheel event listener added.');

        return () => {
            window.removeEventListener('wheel', handleWheel);
            console.log('Wheel event listener removed.');
        };
    }, [activeCamera]);

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'C' || event.key === 'c') {
                setActiveCamera((prev) => {
                    if (prev === 'initial') return 'follow';
                    if (prev === 'follow') return 'free';
                    if (prev === 'free') return 'initial';
                    return 'initial';
                });
            } else {
                setActiveCamera('follow');
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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

    useFrame(() => {
        if (activeCamera === 'initial') {
            camera.position.lerpVectors(camera.position, targetPosition, 0.1);
            cameraTarget.current.lerpVectors(
                cameraTarget.current,
                targetLookAt,
                0.1
            );
            camera.lookAt(cameraTarget.current);
        } else if (
            activeCamera === 'follow' &&
            carRef.current &&
            backRef.current
        ) {
            const car = carRef.current;
            const carPosition = car.translation();
            const carRotation = car.rotation();

            const carQuaternion = new THREE.Quaternion(
                carRotation.x,
                carRotation.y,
                carRotation.z,
                carRotation.w
            );

            const backwardVector = new THREE.Vector3(0, -1, 0);
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
