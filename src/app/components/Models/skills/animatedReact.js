import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedReact = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/react.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['reactAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="react"
                    geometry={nodes.react.geometry}
                    material={materials.react}
                    position={[-557, 1321.889, -421]}
                    rotation={[0, 0.578, 0]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/react.glb');

export default AnimatedReact;
