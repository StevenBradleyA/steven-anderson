'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import ThreeScene from '@/components/HomeScene';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fixed w-full h-full top-5 left-0 right-0 bottom-0 bg-blue-700">
                <ThreeScene />
            </div>
        </main>
    );
}
