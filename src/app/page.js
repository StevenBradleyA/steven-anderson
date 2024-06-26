'use client';
import TitleScreen from '@/components/Loading/titleScreen';
import Navigation from '@/components/Navigation/navigation';
import ThreeScene from '@/components/Models/threeScene';
import { useGlobalState } from '@/components/Context/stateContext';

export default function Home() {
    const { showGame } = useGlobalState();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black z-10">
                <TitleScreen />
                {showGame && <Navigation />}
                <ThreeScene />
            </div>
        </main>
    );
}
