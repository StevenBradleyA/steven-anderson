import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RightAnimatedCountachLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/countach/countachRightLight.glb'
    );

    const { actions } = useAnimations(animations, group);

    const popupHeadlights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 1.2,
    });

    // useEffect(() => {
    //     if (actions) {
    //         actions['CountachRightPopupLightsAction'].play();
    //     }
    // }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="CountachRightPopupLights"
                    castShadow
                    receiveShadow
                    geometry={nodes.CountachRightPopupLights.geometry}
                    material={popupHeadlights}
                    position={[452.183, 1159.119, 609.342]}
                    scale={1}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/countach/countachRightLight.glb');

export default RightAnimatedCountachLight;
