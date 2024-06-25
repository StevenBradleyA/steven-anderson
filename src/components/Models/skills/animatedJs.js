import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedJavascript = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/js.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['javascriptAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="javascript"
                    position={[-431, 1303.274, -583]}
                    rotation={[0, 0.537, 0]}
                >
                    <mesh
                        name="Curve037"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve037.geometry}
                        material={materials.javascript}
                    />
                    <mesh
                        name="Curve037_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve037_1.geometry}
                        material={materials.Black}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/js.glb');

export default AnimatedJavascript;
