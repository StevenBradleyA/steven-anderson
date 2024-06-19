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
            actions['prismaAction'].play();
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
                    position={[-501.957, 1329.628, -565.82]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/prisma.glb');

export default AnimatedPrisma;
