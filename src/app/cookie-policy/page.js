'use client';
import NightSky from '@/components/Background/nightSky';
import { useMobile } from '@/components/Context/mobileContext';
import Footer from '@/components/Footer/footer';
import MobileFooter from '@/components/Footer/mobileFooter';

export default function CookiePolicy() {
    const { isMobile } = useMobile();

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <NightSky />
            <div className=" mt-72 w-1/2 rounded-lg bg-[#2E3B4E] bg-opacity-30  p-5 h-96 z-10">
                cookie
            </div>
            <div className="mt-96 w-full">
                {isMobile ? <MobileFooter /> : <Footer />}
            </div>
        </div>
    );
}
