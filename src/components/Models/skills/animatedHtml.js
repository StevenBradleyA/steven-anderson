import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedHtml = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/html.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['htmlAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="html"
                    position={[-607, 1320, -443]}
                    rotation={[-0.268, 0.543, 0.119]}
                >
                    <mesh
                        name="Curve036"
                        geometry={nodes.Curve036.geometry}
                        material={materials.htmllight}
                    />
                    <mesh
                        name="Curve036_1"
                        geometry={nodes.Curve036_1.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve036_2"
                        geometry={nodes.Curve036_2.geometry}
                        material={materials.htmlorange}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/html.glb');

export default AnimatedHtml;
