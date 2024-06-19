import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const LeftAnimatedCountachLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/leftLight.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['CountachLeftPopupLightsAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachLeftPopupLights"
                    castShadow
                    receiveShadow
                    geometry={nodes.CountachLeftPopupLights.geometry}
                    material={materials.White}
                    position={[443.594, 1159.119, 595.863]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/leftLight.glb');

export default LeftAnimatedCountachLight;
