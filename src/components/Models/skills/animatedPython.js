import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedPython = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/python.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['pythonAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="python"
                    position={[-479, 1313, -519]}
                    rotation={[-0.169, 0.538, 0.177]}
                >
                    <mesh
                        name="Curve045"
                        geometry={nodes.Curve045.geometry}
                        material={materials.python}
                    />
                    <mesh
                        name="Curve045_1"
                        geometry={nodes.Curve045_1.geometry}
                        material={materials.pythonyellow}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/python.glb');

export default AnimatedPython;
