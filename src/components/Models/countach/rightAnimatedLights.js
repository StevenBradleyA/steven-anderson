import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const RightAnimatedCountachLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/rightLight.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachRightPopupLightsAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachRightPopupLights"
                    castShadow
                    receiveShadow
                    geometry={nodes.CountachRightPopupLights.geometry}
                    material={materials.White}
                    position={[452.183, 1159.119, 609.342]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/rightLight.glb');

export default RightAnimatedCountachLight;
