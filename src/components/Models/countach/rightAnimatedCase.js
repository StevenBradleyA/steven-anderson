import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const RightAnimatedCountachCase = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/rightCase.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachRightPopupCaseAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachRightPopupCase"
                    castShadow
                    receiveShadow
                    geometry={nodes.CountachRightPopupCase.geometry}
                    material={materials.CorsaRed}
                    position={[451.553, 1159.222, 609.776]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/rightCase.glb');

export default RightAnimatedCountachCase;
