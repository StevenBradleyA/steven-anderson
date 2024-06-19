import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedCss = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/css.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['cssAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="css" position={[-402.157, 1308.094, -641.775]}>
                    <mesh
                        name="Curve021"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve021.geometry}
                        material={materials.css}
                    />
                    <mesh
                        name="Curve021_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve021_1.geometry}
                        material={materials.csslight}
                    />
                    <mesh
                        name="Curve021_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve021_2.geometry}
                        material={materials.White}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/css.glb');

export default AnimatedCss;
