import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const LeftAnimatedCountachTrim = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/countachLeftTrim.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachLeftPopupTrimAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachLeftPopupTrim"
                    geometry={nodes.CountachLeftPopupTrim.geometry}
                    material={materials.Trim}
                    position={[443.642, 1159.218, 595.884]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/countachLeftTrim.glb');

export default LeftAnimatedCountachTrim;
