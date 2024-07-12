'use client';
import TitleScreen from '@/components/Loading/titleScreen';
import ThreeScene from '@/components/Models/threeScene';
import { useGlobalState } from '@/components/Context/stateContext';
import ControlsScript from '@/components/Controls/controlsScript';
import { useMobile } from '@/components/Context/mobileContext';
import MobileThreeScene from '@/components/Models/mobileThreeScene';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/Loading/loadingSpinner';

export default function Home() {
    const { showGame, activeCamera, renderContent, setRenderContent } =
        useGlobalState();
    const { isMobile } = useMobile();

    useEffect(() => {
        if (renderContent === false) {
            const timer = setTimeout(() => {
                setRenderContent(true);
            }, 5200);

            return () => clearTimeout(timer);
        }
    }, []);

    if (!renderContent) {
        return <LoadingSpinner />;
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10">
                {isMobile === false && <TitleScreen />}
                {showGame === true &&
                    activeCamera === 'initial' &&
                    isMobile === false && <ControlsScript />}
                {isMobile === false ? <ThreeScene /> : <MobileThreeScene />}
            </div>
        </main>
    );
}
