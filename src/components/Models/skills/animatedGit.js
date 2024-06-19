import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedGit = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/git.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['gitAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="git" position={[-449.685, 1353.328, -582.443]}>
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
