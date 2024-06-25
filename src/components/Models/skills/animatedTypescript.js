import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedTypescript = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/ts.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['typescriptAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="typescript"
                    position={[-452.708, 1317.017, -554.317]}
                    rotation={[-0.001, 0.364, 0.045]}
                >
                    <mesh
                        name="Curve060"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve060.geometry}
                        material={materials.White}
                    />
                    <mesh
                        name="Curve060_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve060_1.geometry}
                        material={materials.TypeScript}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/ts.glb');

export default AnimatedTypescript;
