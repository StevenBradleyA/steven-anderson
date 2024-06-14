'use client';
import { useGLTF } from '@react-three/drei';

const RetroSun = () => {
    const { nodes, materials } = useGLTF('/models/retroSun.glb');

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sun001.geometry}
                material={materials.Sun}
                position={[-616, 884, 2003]}
                rotation={[Math.PI, -1.535, Math.PI]}
            />
        </group>
    );
};
useGLTF.preload('/models/retroSun.glb');

export default RetroSun;
