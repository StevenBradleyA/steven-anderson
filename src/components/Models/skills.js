'use client';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Skills = () => {
    const { nodes, materials } = useGLTF('/models/skills.glb');

    // const blueGlow= new THREE.MeshStandardMaterial({
    //     color:  new THREE.Color(0x007bff),
    //     emissive: new THREE.Color(0x007bff),
    //     emissiveIntensity: 0.69,
    // });

    return (
        <group dispose={null}>
            <mesh geometry={nodes.flask.geometry} material={materials.Black} />
            <mesh
                geometry={nodes.tailwind.geometry}
                material={materials.tailwind}
            />
            <mesh geometry={nodes.prisma.geometry} material={materials.Black} />
            <mesh geometry={nodes.react.geometry} material={materials.react} />
            <mesh geometry={nodes.redux.geometry} material={materials.redux} />
            <mesh geometry={nodes.vercel.geometry} material={materials.Black} />
            <mesh
                geometry={nodes.docker.geometry}
                material={materials.docker}
            />
            <mesh geometry={nodes.github.geometry} material={materials.Black} />
            <mesh
                geometry={nodes.Curve030.geometry}
                material={materials.awsOrange}
            />
            <mesh
                geometry={nodes.Curve030_1.geometry}
                material={materials.awsBlue}
            />
            <mesh
                geometry={nodes.Curve032.geometry}
                material={materials.White}
            />
            <mesh
                geometry={nodes.Curve032_1.geometry}
                material={materials.BlenderBlue}
            />
            <mesh
                geometry={nodes.Curve032_2.geometry}
                material={materials.blenderOrange}
            />
            <mesh geometry={nodes.Curve021.geometry} material={materials.css} />
            <mesh
                geometry={nodes.Curve021_1.geometry}
                material={materials.csslight}
            />
            <mesh
                geometry={nodes.Curve021_2.geometry}
                material={materials.White}
            />
            <mesh geometry={nodes.Curve016.geometry} material={materials.git} />
            <mesh
                geometry={nodes.Curve016_1.geometry}
                material={materials.White}
            />
            <mesh
                geometry={nodes.Curve036.geometry}
                material={materials.htmllight}
            />
            <mesh
                geometry={nodes.Curve036_1.geometry}
                material={materials.White}
            />
            <mesh
                geometry={nodes.Curve036_2.geometry}
                material={materials.htmlorange}
            />
            <mesh
                geometry={nodes.Curve037.geometry}
                material={materials['SVGMat.010']}
            />
            <mesh
                geometry={nodes.Curve037_1.geometry}
                material={materials.Black}
            />
            <mesh
                geometry={nodes.Curve042.geometry}
                material={materials['Curve.025_Baked']}
            />
            <mesh
                geometry={nodes.Curve042_1.geometry}
                material={materials['Curve.026_Baked']}
            />
            <mesh
                geometry={nodes.Curve042_2.geometry}
                material={materials['SVGMat.009']}
            />
            <mesh
                geometry={nodes.Curve042_3.geometry}
                material={materials['Curve.024_Baked']}
            />
            <mesh
                geometry={nodes.Curve045.geometry}
                material={materials.python}
            />
            <mesh
                geometry={nodes.Curve045_1.geometry}
                material={materials.pythonyellow}
            />
            <mesh
                geometry={nodes.Curve060.geometry}
                material={materials.White}
            />
            <mesh
                geometry={nodes.Curve060_1.geometry}
                material={materials.TypeScript}
            />
        </group>
    );
};
useGLTF.preload('/models/skills.glb');

export default Skills;
