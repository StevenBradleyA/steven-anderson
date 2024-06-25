import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedTailwind = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/tailwind.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['tailwindAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="tailwind"
                    castShadow
                    receiveShadow
                    geometry={nodes.tailwind.geometry}
                    material={materials.tailwind}
                    position={[-508.493, 1306.581, -494]}
                    rotation={[0, 0.43, 0]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/tailwind.glb');

export default AnimatedTailwind;
