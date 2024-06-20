import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LeftAnimatedCountachLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/countachLeftLight.glb'
    );
    const { actions } = useAnimations(animations, group);

    const popupHeadlights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 1.2,
    });

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
                    material={popupHeadlights}
                    position={[443.594, 1159.119, 595.863]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/countachLeftLight.glb');

export default LeftAnimatedCountachLight;
