import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedDocker = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/docker.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['dockerAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="docker"
                    castShadow
                    receiveShadow
                    geometry={nodes.docker.geometry}
                    material={materials.docker}
                    position={[-601.354, 1316.35, -563.196]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/docker.glb');

export default AnimatedDocker;
