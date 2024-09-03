import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedFerrariRightLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/f40/ferrariRightLight.glb'
    );

    const { actions } = useAnimations(animations, group);

    const popupHeadlights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 1.2,
    });

    useEffect(() => {
        if (actions) {
            actions['PopupRightLightAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="PopupRightLight"
                    geometry={nodes.PopupRightLight.geometry}
                    material={popupHeadlights}
                    position={[387.82, 1158.268, 723.281]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/f40/ferrariRightLight.glb');

export default AnimatedFerrariRightLight;
