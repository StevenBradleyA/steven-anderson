import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const RightAnimatedCountachCase = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/countachRightCase.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachRightPopupCaseAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachRightPopupCase"
                    geometry={nodes.CountachRightPopupCase.geometry}
                    material={materials.CorsaRed}
                    position={[451.553, 1159.222, 609.776]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/countachRightCase.glb');

export default RightAnimatedCountachCase;
