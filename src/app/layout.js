import './globals.css';
import { GlobalStateProvider } from '@/components/Context/stateContext';
import { GlobalMobileProvider } from '@/components/Context/mobileContext';
// import Head from 'next/head';
import Navigation from '@/components/Navigation/navigation';
import { AudioPlayerProvider } from '@/components/Context/audioContext';

/** @type {import("next").Metadata} */

export const metadata = {
    title: 'Steven Anderson',
    description:
        'Full-stack web developer in Seattle with expertise in React and Next.js building scalable and high-performance web applications.',
    applicationName: 'Steven Anderson Portfolio',
    authors: [{ name: 'Steven Anderson', url: 'https://steven-anderson.com' }],
    generator: 'Next.js',
    keywords: [
        'web development',
        'full-stack developer',
        'Seattle',
        'Steven Anderson',
        'Steven',
        'Steven Developer',
    ],
    referrer: 'origin',
    appleWebApp: {
        capable: true,
        title: 'Steven Anderson',
        statusBarStyle: 'black-translucent',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        type: 'website',
        url: 'https://steven-anderson.com',
        title: 'Steven Anderson',
        description:
            'Full-stack web developer in Seattle with expertise in React and Next.js building scalable and high-performance web applications.',
        siteName: 'Steven Anderson Portfolio',
        images: [
            {
                url: 'https://steven-anderson.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Steven Anderson Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@stevenanderson',
        creator: '@stevenanderson',
        title: 'Steven Anderson',
        description:
            'Full-stack web developer in Seattle with expertise in React and Next.js building scalable and high-performance web applications.',
        images: ['https://steven-anderson.com/images/og-image.png'],
    },
    // verification: {
    //     google: '1234567890',
    //     yandex: '1234567890',
    // },
    alternates: {
        canonical: 'https://steven-anderson.com',
        hreflang: {
            'en-US': 'https://steven-anderson.com/en-US',
        },
    },
};
// try '#121212' for theme color

/** @type {import("next").Viewport} */
export const viewport = {
    themeColor: 'dark',
    colorScheme: 'dark',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-poppins ">
                <GlobalStateProvider>
                    <GlobalMobileProvider>
                        <AudioPlayerProvider>
                            <Navigation />
                            {children}
                        </AudioPlayerProvider>
                    </GlobalMobileProvider>
                </GlobalStateProvider>
            </body>
        </html>
    );
}
