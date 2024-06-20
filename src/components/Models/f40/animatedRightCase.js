import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedFerrariRightCase = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/f40/ferrariRightCase.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['PopupRightCaseAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="PopupRightCase"
                    castShadow
                    receiveShadow
                    geometry={nodes.PopupRightCase.geometry}
                    material={materials.CorsaRed}
                    position={[387.867, 1158.54, 723.124]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/f40/ferrariRightCase.glb');

export default AnimatedFerrariRightCase;
