import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedGithub = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/github.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['githubAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="github"
                    geometry={nodes.github.geometry}
                    material={materials.Black}
                    position={[-487.168, 1307.035, -634.595]}
                    rotation={[-0.397, 0.811, 0.305]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/github.glb');

export default AnimatedGithub;
