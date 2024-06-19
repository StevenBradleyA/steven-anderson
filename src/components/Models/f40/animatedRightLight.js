import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedFerrariRightLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/f40/rightLight.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['PopupRightLightAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="PopupRightLight"
                    castShadow
                    receiveShadow
                    geometry={nodes.PopupRightLight.geometry}
                    material={materials.White}
                    position={[387.82, 1158.268, 723.281]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/f40/rightLight.glb');

export default AnimatedFerrariRightLight;
