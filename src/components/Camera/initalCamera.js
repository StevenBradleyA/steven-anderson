import React, { useEffect, useRef } from 'react';
// import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';

export default function InitialCamera() {
    console.log('yes we are here');

    const cameraRef = useRef();

    useEffect(() => {
        if (cameraRef.current) {
            // Set initial position high above the scene
            cameraRef.current.position.set(0, 2000, 0);
            cameraRef.current.lookAt(0, 0, 0);

            // Create the GSAP animation timeline
            const timeline = gsap.timeline();
            timelineRef.current = timeline; // Save the timeline reference

            // Spiral down animation
            timeline.to(cameraRef.current.position, {
                duration: 5,
                x: 0,
                y: 500,
                z: 500,
                ease: 'power2.inOut',
                onUpdate: () => {
                    if (cameraRef.current) {
                        cameraRef.current.lookAt(0, 0, 0);
                    }
                },
            });

            // Orbit around the center of the scene
            timeline.to(cameraRef.current.position, {
                duration: 10,
                x: 500 * Math.cos(2 * Math.PI),
                z: 500 * Math.sin(2 * Math.PI),
                ease: 'power2.inOut',
                repeat: -1,
                onUpdate: () => {
                    if (cameraRef.current) {
                        cameraRef.current.lookAt(0, 0, 0);
                    }
                },
            });
        }

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill(); // Clean up the GSAP timeline
            }
        };
    }, []);


    return (
        <PerspectiveCamera
            makeDefault
            ref={cameraRef}
            position={[0, 2000, 0]}
            fov={75}
            near={0.1}
            far={30000}
        />
    );
}
