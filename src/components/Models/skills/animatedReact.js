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
            actions['reactAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="react"
                    castShadow
                    receiveShadow
                    geometry={nodes.react.geometry}
                    material={materials.react}
                    position={[-601.181, 1321.889, -461.149]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/react.glb');

export default AnimatedReact;
