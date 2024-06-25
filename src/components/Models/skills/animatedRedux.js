import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedRedux = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/redux.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['reduxAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="redux"
                    castShadow
                    receiveShadow
                    geometry={nodes.redux.geometry}
                    material={materials.redux}
                    position={[-556.901, 1310.959, -561.631]}
                    rotation={[0, 0.52, 0]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/redux.glb');

export default AnimatedRedux;
