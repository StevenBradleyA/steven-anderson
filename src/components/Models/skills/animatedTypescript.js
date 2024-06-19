import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedTypescript = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/typescript.glb'
    );

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
                    position={[-428.199, 1316.64, -544.848]}
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

useGLTF.preload('/models/skills/typescript.glb');

export default AnimatedTypescript;
