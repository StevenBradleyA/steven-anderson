'use client';
import NightSky from '@/components/Background/nightSky';

export default function PrivacyPolicy() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <NightSky />
            <div className=" mt-72 w-1/2 rounded-lg bg-[#2E3B4E] bg-opacity-30  p-5 h-96 z-10">
                privacy policy
            </div>
        </div>
    );
}
