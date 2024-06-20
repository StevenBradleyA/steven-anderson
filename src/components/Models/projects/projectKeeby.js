import { useGLTF, useAnimations } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ProjectKeeby = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/projects/projectKeeby.glb'
    );
    const [color, setColor] = useState(0xe7e7e7);
    const { actions } = useAnimations(animations, group);

    // useEffect(() => {
    //     if (actions) {
    //         actions['Project1EnterAction'].play();
    //     }
    // }, [actions]);
    // console.log(actions);

    // goals we want to turn the grid blue when we drive over it. we want to trigger the animation a single time it should stop on the last keyframe . reverse when we leave
    const gridColor = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.8,
    });

    const handleIntersectionEnter = () => {
        setColor(0x007bff);
    };

    const handleIntersectionExit = () => {
        setColor(0xe7e7e7);
    };

    return (
        <>
            <group ref={group} dispose={null}>
                <group name="Scene">
                    <mesh
                        name="Project1Enter"
                        castShadow
                        receiveShadow
                        geometry={nodes.Project1Enter.geometry}
                        material={materials.White}
                        position={[463.88, 1277, -16.457]}
                    />
                    <mesh
                        name="Project2Grid001"
                        castShadow
                        receiveShadow
                        geometry={nodes.Project2Grid001.geometry}
                        material={materials.White}
                        position={[-58, 0, 0]}
                    />
                </group>
            </group>
            <RigidBody
                position={[463.88, 1277, -16.457]}
                colliders={false}
                type="fixed"
            >
                <CuboidCollider
                    position={[0, 0, 0]}
                    args={[80, 20, 60]}
                    // rotation={[0, 20, 0]}
                    onIntersectionEnter={() => console.log('poggers')}
                    onIntersectionExit={() => console.log('sadge')}
                    sensor
                />

                <mesh>
                    <boxGeometry args={[80, 20, 60]} />
                    <meshBasicMaterial material={gridColor} />
                </mesh>
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/projects/projectKeeby.glb');

export default ProjectKeeby;
