import { Bloom, EffectComposer, GodRays } from '@react-three/postprocessing';

const PostProcessing = ({ sunRef }) => {
    return sunRef.current ? (
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
