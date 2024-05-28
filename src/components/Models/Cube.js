import React from 'react';
import { RigidBody } from '@react-three/rapier';
const Cube = () => {
    return (
        <RigidBody>
            <mesh position={[0, 1000, 0]}>
                <boxGeometry args={[200, 200, 200]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    );
};

export default Cube;
