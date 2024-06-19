import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedVercel = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/vercel.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['vercelAction'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="vercel"
                    castShadow
                    receiveShadow
                    geometry={nodes.vercel.geometry}
                    material={materials.Black}
                    position={[-565.459, 1305.438, -493.14]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/vercel.glb');

export default AnimatedVercel;
