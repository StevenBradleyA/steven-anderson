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
            actions['flaskAction'].play();
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
                    position={[-605.843, 1341.559, -540.346]}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/models/skills/flask.glb');

export default AnimatedFlask;
