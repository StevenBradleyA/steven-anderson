import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedBlender = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/blender.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['blenderAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="blender"
                    position={[-527.971, 1324.384, -604.951]}
                    rotation={[0.084, 0.28, -0.061]}
                >
                    <mesh
                        name="Curve032"
                        geometry={nodes.Curve032.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve032_1"
                        geometry={nodes.Curve032_1.geometry}
                        material={materials.BlenderBlue}
                    />
                    <mesh
                        name="Curve032_2"
                        geometry={nodes.Curve032_2.geometry}
                        material={materials.blenderOrange}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/blender.glb');

export default AnimatedBlender;
