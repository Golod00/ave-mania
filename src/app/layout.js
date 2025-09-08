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
        icon: '/images/favicons/512.png',
        shortcut: '/images/favicons/48.png',
        apple: '/images/favicons/512.png',
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
