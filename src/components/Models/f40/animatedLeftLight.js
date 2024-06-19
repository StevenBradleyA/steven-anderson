import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedFerrariLeftLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/f40/leftLight.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['PopupLeftLightAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="PopupLeftLight"
                    castShadow
                    receiveShadow
                    geometry={nodes.PopupLeftLight.geometry}
                    material={materials.White}
                    position={[396.172, 1158.268, 735.183]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/f40/leftLight.glb');

export default AnimatedFerrariLeftLight;
