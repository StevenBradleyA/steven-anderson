import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedPrisma = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/prisma.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['prismaAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="prisma"
                    castShadow
                    receiveShadow
                    geometry={nodes.prisma.geometry}
                    material={materials.Black}
                    position={[-501.957, 1336, -565.82]}
                    rotation={[0, 0.545, 0]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/prisma.glb');

export default AnimatedPrisma;
