'use client';
import { Plane } from '@react-three/drei';
import React, { useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useAudioPlayer } from '../Context/audioContext';

const CustomBackground = () => {
    const { genre } = useAudioPlayer();
    const createGradientTexture = (
        startColor,
        endColor,
        transitionHeight = 0.35
    ) => {
        const size = 512;
        const data = new Uint8Array(size * 4);

        const color1 = new THREE.Color(startColor);
        const color2 = new THREE.Color(endColor);

        for (let i = 0; i < size; i++) {
            let alpha = i / (size - 1);
            alpha = Math.pow(alpha, 1 / transitionHeight);

            const color = color2.clone().lerp(color1, alpha);
            data[i * 4] = Math.round(color.r * 255);
            data[i * 4 + 1] = Math.round(color.g * 255);
            data[i * 4 + 2] = Math.round(color.b * 255);
            data[i * 4 + 3] = 255;
        }

        const texture = new THREE.DataTexture(data, 1, size, THREE.RGBAFormat);
        texture.needsUpdate = true;
        return texture;
    };
    // #BF00FF
    // #9400D3
    // #8A0707
    const gradientTexture = useMemo(
        () =>
            createGradientTexture(
                genre === 'phonk' ? '#007bff' : '#9400D3',
                '#000000',
                0.35
            ),
        [genre]
    );
    const bottomGradientTexture = useMemo(
        () => createGradientTexture('#000000', '#000000'),
        []
    );
    const topGradientTexture = useMemo(
        () =>
            createGradientTexture(
                genre === 'phonk' ? '#007bff' : '#9400D3',
                genre === 'phonk' ? '#007bff' : '#9400D3'
            ),
        [genre]
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
