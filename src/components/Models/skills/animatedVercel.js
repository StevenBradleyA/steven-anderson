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
            actions['vercelAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="vercel"
                    geometry={nodes.vercel.geometry}
                    material={materials.Black}
                    position={[-557, 1305.438, -471]}
                    rotation={[-0.372, 0.996, 0.334]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/vercel.glb');

export default AnimatedVercel;
