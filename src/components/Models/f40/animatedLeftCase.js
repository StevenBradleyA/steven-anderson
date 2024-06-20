import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedFerrariLeftCase = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/f40/ferrariLeftCase.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['PopupLeftCaseAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="PopupLeftCase"
                    castShadow
                    receiveShadow
                    geometry={nodes.PopupLeftCase.geometry}
                    material={materials.CorsaRed}
                    position={[396.337, 1158.54, 735.191]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/f40/ferrariLeftCase.glb');

export default AnimatedFerrariLeftCase;
