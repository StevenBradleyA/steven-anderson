import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const AnimatedFlask = () => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/models/skills/flask.glb'
    );

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            actions['flaskAction.001'].play();
        }
    }, [actions]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="flask"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask.geometry}
                    material={materials.Black}
                    position={[-578, 1339, -490]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/flask.glb');

export default AnimatedFlask;
