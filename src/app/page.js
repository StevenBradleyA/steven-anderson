'use client';
import TitleScreen from '@/components/Loading/titleScreen';
import ThreeScene from '@/components/Models/threeScene';
import { useGlobalState } from '@/components/Context/stateContext';
import ControlsScript from '@/components/Controls/controlsScript';

export default function Home() {
    const { showGame, activeCamera } = useGlobalState();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10">
                <TitleScreen />
                {showGame === true && activeCamera === 'initial' && (
                    <ControlsScript />
                )}
                <ThreeScene />
            </div>
        </main>
    );
}
