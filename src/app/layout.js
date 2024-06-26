import './globals.css';
import { GlobalStateProvider } from '@/components/Context/stateContext';
import Head from 'next/head';
import Navigation from '@/components/Navigation/navigation';

export const metadata = {
    title: 'Steven Anderson',
    description:
        'Full-stack web developer in Seattle with expertise in React and Next.js building scalable and high-performance web applications.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body className="font-poppins night-sky">
                <GlobalStateProvider>
                    <Navigation />
                    {children}
                </GlobalStateProvider>
            </body>
        </html>
    );
}
