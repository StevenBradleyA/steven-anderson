import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalStateProvider } from '@/components/Context/stateContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Steven Anderson',
    description:
        'Full-stack web developer in Seattle with expertise in React and Next.js building scalable and high-performance web applications.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <GlobalStateProvider>{children}</GlobalStateProvider>
            </body>
        </html>
    );
}
