import React, { useRef, useEffect } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CustomCamera = () => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    useEffect(() => {
        camera.position.set(10, 10, 10); // Set initial position of the camera
        camera.lookAt(0, 0, 0); // Look at the center of the scene
    }, [camera]);

    useFrame(() => {
        controlsRef.current.update(); // Update controls on each frame
    });

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableZoom={true}
            enablePan={true}
            enableRotate={false} // Disable rotation
            panSpeed={1} // Set pan speed
            zoomSpeed={1} // Set zoom speed
            maxPolarAngle={Math.PI / 2} // Lock vertical angle to 90 degrees
        />
    );
};

export default CustomCamera;
