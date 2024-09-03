'use client';
import { Bloom, EffectComposer, GodRays } from '@react-three/postprocessing';
import { useEffect, useState } from 'react';

const PostProcessing = ({ sunRef }) => {
    const [isSunReady, setIsSunReady] = useState(false);

    useEffect(() => {
        if (sunRef.current) {
            setIsSunReady(true);
        } else {
            setIsSunReady(false);
        }
    }, [sunRef]);

    return isSunReady ? (
        <EffectComposer>
            <GodRays
                sun={sunRef.current}
                samples={20}
                density={0.1}
                decay={1}
                weight={0.2}
                exposure={0.1}
                clampMax={1.0}
                blur={true}
            />
            <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                intensity={0.3}
            />
        </EffectComposer>
    ) : null;
};

export default PostProcessing;
