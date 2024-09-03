import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const RightAnimatedCountachTrim = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/countachRightTrim.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachRightPopupTrimAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachRightPopupTrim"
                    geometry={nodes.CountachRightPopupTrim.geometry}
                    material={materials.Trim}
                    position={[452.183, 1159.218, 609.289]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/countachRightTrim.glb');

export default RightAnimatedCountachTrim;
