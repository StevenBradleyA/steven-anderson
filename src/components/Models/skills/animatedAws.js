import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedAws = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/skills/aws.glb');

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['awsAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group
                    name="aws"
                    position={[-465.997, 1330, -624.996]}
                    rotation={[0, 0.809, 0]}
                >
                    <mesh
                        name="Curve030"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve030.geometry}
                        material={materials.awsOrange}
                    />
                    <mesh
                        name="Curve030_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve030_1.geometry}
                        material={materials.awsBlue}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/aws.glb');

export default AnimatedAws;
