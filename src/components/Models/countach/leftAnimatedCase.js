import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const LeftAnimatedCountachCase = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/leftCase.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachLeftPopupCaseAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachLeftPopupCase"
                    castShadow
                    receiveShadow
                    geometry={nodes.CountachLeftPopupCase.geometry}
                    material={materials.CorsaRed}
                    position={[442.934, 1159.222, 596.249]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/leftCase.glb');

export default LeftAnimatedCountachCase;
