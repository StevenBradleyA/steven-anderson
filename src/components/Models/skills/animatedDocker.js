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
            actions['dockerAction.001'].play();
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
                    position={[-593.495, 1316.35, -513.921]}
                    rotation={[0, 0.358, 0]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/docker.glb');

export default AnimatedDocker;
