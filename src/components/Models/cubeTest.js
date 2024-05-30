import { RigidBody } from '@react-three/rapier';
import { Box } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CubeTest() {
    const cubeRef = useRef();
    const [keysPressed, setKeysPressed] = useState({});

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

    useFrame(() => {
        // Speed management
        const moveForward = keysPressed['ArrowUp'];
        const moveBackward = keysPressed['ArrowDown'];
        const steerLeft = keysPressed['ArrowLeft'];
        const steerRight = keysPressed['ArrowRight'];
        const turnLeft =
            (moveForward && steerLeft) || (moveBackward && steerLeft);
        const turnRight =
            (moveForward && steerRight) || (moveBackward && steerRight);

        if (moveForward && cubeRef.current) {
            console.log('hellooo');
            const impulse = new THREE.Vector3(0, 0, 9999999999); // Adjust the impulse value as needed
            cubeRef.current.applyImpulse(impulse);
        }
    });

    return (
        <RigidBody
            mass={0.22}
            // restitution={0}
            // friction={1}
            // linearDamping={3}
            // angularDamping={2}
            position={[0, 600, 0]} // Position the cube 600 units in the air
            ref={cubeRef}
        >
            <Box args={[400, 400, 400]}>
                <meshStandardMaterial color="blue" />
            </Box>
        </RigidBody>
    );
}
