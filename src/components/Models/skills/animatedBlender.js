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
            actions['blenderAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="blender" position={[-539.142, 1339.491, -602.593]}>
                    <mesh
                        name="Curve032"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve032.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve032_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve032_1.geometry}
                        material={materials.BlenderBlue}
                    />
                    <mesh
                        name="Curve032_2"
                        castShadow
                        receiveShadow
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
