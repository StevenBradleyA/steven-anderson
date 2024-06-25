import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedPostgres = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/postgres.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['postgresAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="postgres" position={[-556.665, 1326, -528.511]}>
                    <mesh
                        name="Curve042"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042.geometry}
                        material={materials['Curve.025_Baked']}
                    />
                    <mesh
                        name="Curve042_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042_1.geometry}
                        material={materials['Curve.026_Baked']}
                    />
                    <mesh
                        name="Curve042_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042_2.geometry}
                        material={materials['SVGMat.009']}
                    />
                    <mesh
                        name="Curve042_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve042_3.geometry}
                        material={materials['Curve.024_Baked']}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/postgres.glb');

export default AnimatedPostgres;
