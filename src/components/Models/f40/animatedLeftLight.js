import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedFerrariLeftLight = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/f40/ferrariLeftLight.glb'
    );
    const { actions } = useAnimations(animations, group);

    const popupHeadlights = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xe7e7e7),
        emissive: new THREE.Color(0xe7e7e7),
        emissiveIntensity: 1.2,
    });

    useEffect(() => {
        if (actions) {
            actions['PopupLeftLightAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="PopupLeftLight"
                    castShadow
                    receiveShadow
                    geometry={nodes.PopupLeftLight.geometry}
                    material={popupHeadlights}
                    position={[396.172, 1158.268, 735.183]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/f40/ferrariLeftLight.glb');

export default AnimatedFerrariLeftLight;
