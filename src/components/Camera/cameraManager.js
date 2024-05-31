import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraManager = ({ carRef }) => {
    const { camera, gl } = useThree();

    const [activeCamera, setActiveCamera] = useState('inital');
    const orbitControlsRef = useRef();
    const [targetPosition, setTargetPosition] = useState(
        new THREE.Vector3(0, 2000, 0)
    );
    const [targetLookAt, setTargetLookAt] = useState(
        new THREE.Vector3(0, 0, 0)
    );

    const offset = new THREE.Vector3(0, 200, -500); // Adjust the offset as needed
    const smoothFactor = 0.05;
    const isPanning = useRef(false);
    const isRotating = useRef(false);
    const isZooming = useRef(false);
    const startPan = useRef(new THREE.Vector2());
    const startRotate = useRef(new THREE.Vector2());
    const startZoom = useRef(new THREE.Vector2());

    // todo C should switch cameras - free - follow - environment
    // Switch cameras with key and mouse events
    // Switch cameras with key and mouse events

    // FREE MODE

    // Event handlers for custom controls
    const handleMouseDown = (event) => {
        if (event.button === 0) {
            isPanning.current = true;
            startPan.current.set(event.clientX, event.clientY);
        } else if (event.button === 2) {
            isRotating.current = true;
            startRotate.current.set(event.clientX, event.clientY);
        }
    };

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

            setTargetPosition(camera.position.clone());
        } else if (isRotating.current) {
            const deltaX = event.clientX - startRotate.current.x;
            const deltaY = event.clientY - startRotate.current.y;
            startRotate.current.set(event.clientX, event.clientY);

            const spherical = new THREE.Spherical();
            spherical.setFromVector3(camera.position.clone().sub(targetLookAt));
            spherical.theta -= deltaX * 0.005;
            spherical.phi -= deltaY * 0.005;
            spherical.makeSafe();

            const newPosition = new THREE.Vector3()
                .setFromSpherical(spherical)
                .add(targetLookAt);
            setTargetPosition(newPosition);
        }
    };

    const handleMouseUp = () => {
        isPanning.current = false;
        isRotating.current = false;
    };

    const handleWheel = (event) => {
        const zoomFactor = 1 + event.deltaY * 0.001;
        const direction = new THREE.Vector3()
            .subVectors(camera.position, targetLookAt)
            .normalize();
        const newPosition = camera.position
            .clone()
            .add(direction.multiplyScalar(event.deltaY * zoomFactor));
        setTargetPosition(newPosition);
    };

    // Attach and detach event listeners for custom controls
    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        const handleMouseClick = () => {
            if (activeCamera !== 'free') setActiveCamera('free');
        };
        const handleKeyDown = (event) => {
            if (event.key === 'C' || event.key === 'c') {
                setActiveCamera((prev) => {
                    if (prev === 'initial') return 'follow';
                    if (prev === 'follow') return 'free';
                    return 'initial';
                });
            } else {
                setActiveCamera('follow');
            }
        };
        window.addEventListener('click', handleMouseClick);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('click', handleMouseClick);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Update target positions based on active camera
    useEffect(() => {
        if (activeCamera === 'initial') {
            setTargetPosition(new THREE.Vector3(0, 2000, 0));
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

    // FOLLOW
    // FOLLOW camera frame updates
    // useFrame(() => {
    //     if (activeCamera === 'follow' && carRef.current) {
    //         const camera = followCameraRef.current;
    //         const currentPosition = carRef.current.translation();

    //         if (currentPosition) {
    //             camera.position.set(
    //                 currentPosition.x,
    //                 currentPosition.y + 200,
    //                 currentPosition.z + 250
    //             );
    //             camera.lookAt(currentPosition);
    //         }
    //     }

    //     if (orbitControlsRef.current) {
    //         orbitControlsRef.current.update();
    //     }
    // });

    useFrame(() => {
        camera.position.lerp(targetPosition, smoothFactor);
        camera.lookAt(targetLookAt);

        if (orbitControlsRef.current && activeCamera === 'free') {
            orbitControlsRef.current.update();
        }
    });

    console.log(activeCamera);

    return null;
};

export default CameraManager;
