import { Inter } from 'next/font/google';
import 'reset-css';
import '@/styles/globals.scss';
import { ModalProvider } from '@/ui/contexts/ModalContext';
import Modal from '@/ui/blocks/Modal';
import fs from 'fs';
import path from 'path';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'Global Events — Організація бізнес-подій в Україні',
    description:
        'Найкращі в організації бізнес-подій на заході України. Творчі концепції, складні івенти під ключ, декорації та продакшн.',
    keywords: [
        'організація подій',
        'івенти Україна',
        'бізнес-події',
        'івент-менеджмент',
        'організація заходів Львів',
        'Global Events',
    ],
    authors: [{ name: 'Vau.agency' }],
    creator: 'Vau.agency',
    publisher: 'Vau.agency',
    robots: 'index, follow',
    metadataBase: new URL('https://www.globalevents.lviv.ua/'),

    openGraph: {
        title: 'Global Events — Організація бізнес-подій в Україні',
        description:
            'Найкращі в організації бізнес-подій на заході України. Творчі концепції, складні івенти під ключ, декорації та продакшн.',
        url: 'https://www.globalevents.lviv.ua/',
        siteName: 'Global Events',
        images: [
            {
                url: '/images/favicons/512.png',
                width: 512,
                height: 512,
                alt: 'Global Events',
            },
        ],
        locale: 'uk_UA',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Global Events — Організація бізнес-подій в Україні',
        description:
            'Найкращі в організації бізнес-подій на заході України. Творчі концепції, складні івенти під ключ, декорації та продакшн.',
        images: ['/images/favicons/512.png'],
        creator: '@globalevents',
    },

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
    const filePath = path.join(process.cwd(), 'public/data/cases.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const casesData = JSON.parse(jsonData);

    return (
        <html lang="uk">
            <body className={`${inter.variable}`}>
                <ModalProvider>
                    {children}
                    <Modal globalCasesData={casesData} />
                </ModalProvider>
            </body>
        </html>
    );
}
