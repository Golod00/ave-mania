import { Inter } from 'next/font/google';
import 'reset-css';
import '@/styles/globals.scss';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'AVE MANIA - Сортуй, грай, вигравай',
    keywords: [
        'Сортуй, грай, вигравай',
    ],
    authors: [{ name: 'Vau.agency' }],
    creator: 'Vau.agency',
    publisher: 'Vau.agency',
    robots: 'index, follow',
    // metadataBase: new URL('https://www.globalevents.lviv.ua/'),

    icons: {
        icon: [
            { url: '/images/favicons/16.png', sizes: '16x16', type: 'image/png' },
            { url: '/images/favicons/32.png', sizes: '32x32', type: 'image/png' },
            { url: '/images/favicons/48.png', sizes: '48x48', type: 'image/png' },
            { url: '/images/favicons/96.png', sizes: '96x96', type: 'image/png' },
            { url: '/images/favicons/128.png', sizes: '128x128', type: 'image/png' },
            { url: '/images/favicons/192.png', sizes: '192x192', type: 'image/png' },
            { url: '/images/favicons/256.png', sizes: '256x256', type: 'image/png' },
            { url: '/images/favicons/384.png', sizes: '384x384', type: 'image/png' },
            { url: '/images/favicons/512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: [
            { url: '/images/favicons/48.png', sizes: '48x48', type: 'image/png' },
        ],
        apple: [
            { url: '/images/favicons/76.png', sizes: '76x76', type: 'image/png' },
            { url: '/images/favicons/120.png', sizes: '120x120', type: 'image/png' },
            { url: '/images/favicons/152.png', sizes: '152x152', type: 'image/png' },
            { url: '/images/favicons/167.png', sizes: '167x167', type: 'image/png' },
            { url: '/images/favicons/180.png', sizes: '180x180', type: 'image/png' },
            { url: '/images/favicons/196.png', sizes: '196x196', type: 'image/png' },
            { url: '/images/favicons/228.png', sizes: '228x228', type: 'image/png' },
            { url: '/images/favicons/300.png', sizes: '300x300', type: 'image/png' },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <body className={`${inter.variable}`}>
                {children}
            </body>
        </html>
    );
}