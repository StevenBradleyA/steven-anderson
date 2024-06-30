'use client';
import { Plane } from '@react-three/drei';
import React, { useMemo } from 'react';
import * as THREE from 'three';

const CustomBackground = () => {
    const createGradientTexture = (startColor, endColor) => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');

        const gradient = context.createLinearGradient(0, 0, 0, size);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);

        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);

        return new THREE.CanvasTexture(canvas);
    };

    const gradientTexture = useMemo(
        () => createGradientTexture('#2e0249', '#000000'),
        []
    );
    const bottomGradientTexture = useMemo(
        () => createGradientTexture('#000000', '#000000'),
        []
    );
    const topGradientTexture = useMemo(
        () => createGradientTexture('#2e0249', '#2e0249'),
        []
    );

    const planes = [
        {
            position: [0, 0, -5000],
            rotation: [0, 0, 0],
            texture: gradientTexture,
        }, // Back
        {
            position: [0, 0, 5000],
            rotation: [0, Math.PI, 0],
            texture: gradientTexture,
        }, // Front
        {
            position: [-5000, 0, 0],
            rotation: [0, Math.PI / 2, 0],
            texture: gradientTexture,
        }, // Left
        {
            position: [5000, 0, 0],
            rotation: [0, -Math.PI / 2, 0],
            texture: gradientTexture,
        }, // Right
        {
            position: [0, 5000, 0],
            rotation: [Math.PI / 2, 0, 0],
            texture: topGradientTexture,
        }, // Top
        {
            position: [0, -5000, 0],
            rotation: [-Math.PI / 2, 0, 0],
            texture: bottomGradientTexture,
        }, // Bottom
    ];

    return (
        <>
            {planes.map((plane, index) => (
                <Plane
                    key={index}
                    args={[10000, 10000]}
                    position={plane.position}
                    rotation={plane.rotation}
                >
                    <meshBasicMaterial
                        map={plane.texture}
                        side={THREE.DoubleSide}
                    />
                </Plane>
            ))}
        </>
    );
};

export default CustomBackground;
