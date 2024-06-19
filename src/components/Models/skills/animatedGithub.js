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
            actions['githubAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="github"
                    castShadow
                    receiveShadow
                    geometry={nodes.github.geometry}
                    material={materials.Black}
                    position={[-487.804, 1330.025, -635.113]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/github.glb');

export default AnimatedGithub;
