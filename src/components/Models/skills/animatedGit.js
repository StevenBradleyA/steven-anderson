import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedGit = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/git.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['gitAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="git"
                    position={[-469.121, 1342, -586.125]}
                    rotation={[0, 0.77, 0]}
                >
                    <mesh
                        name="Curve016"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve016.geometry}
                        material={materials.git}
                    />
                    <mesh
                        name="Curve016_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve016_1.geometry}
                        material={materials.White}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/git.glb');

export default AnimatedGit;
