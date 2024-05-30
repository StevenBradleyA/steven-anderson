import React, { useEffect, useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

extend({ OrbitControls });

const CustomOrbitControls = () => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    useEffect(() => {

        camera.near = 0.1;
        camera.far = 30000;
        camera.updateProjectionMatrix();
        
        controlsRef.current.mouseButtons = {
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE,
        };
        controlsRef.current.touches = {
            ONE: THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.DOLLY_PAN,
        };
    }, []);

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.update();
        }
    });

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableRotate={false}
        />
    );
};

export default CustomOrbitControls;
