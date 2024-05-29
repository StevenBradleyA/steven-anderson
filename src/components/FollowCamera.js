import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FollowCamera({ carRef }) {
    const { camera } = useThree();
    const cameraTarget = useRef(new THREE.Vector3());
    const initialCameraPosition = useRef(new THREE.Vector3());

    useEffect(() => {
        // Store the initial camera position
        initialCameraPosition.current.copy(camera.position);
    }, [camera]);

    useFrame(() => {
        if (carRef.current) {
            const targetPosition = carRef.current.translation();

            // Desired camera position (fixed height and behind the car)
            const desiredPosition = new THREE.Vector3(
                targetPosition.x,
                targetPosition.y + 200, // Maintain a fixed height
                targetPosition.z + 275 // Set distance behind the target
            );

            // Smoothly interpolate camera position using GSAP
            gsap.to(camera.position, {
                x: desiredPosition.x,
                y: desiredPosition.y,
                z: desiredPosition.z,
                duration: 0.5,
                ease: 'power2.out',
            });

            // Update the camera target position (horizontal tracking only)
            gsap.to(cameraTarget.current, {
                x: targetPosition.x,
                y: targetPosition.y, // Use the same y as the car for accurate lookAt
                z: targetPosition.z,
                duration: 0.5,
                ease: 'power2.out',
                onUpdate: () => camera.lookAt(cameraTarget.current),
            });
        }
    });

    return null;
}
