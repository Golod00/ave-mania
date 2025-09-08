import Header from '@/ui/blocks/Header';
import Hero from '@/ui/blocks/Hero';
import TakeFaten from '@/ui/blocks/takeFaten';
import CategoryBlock from '@/ui/blocks/CategoryBlock';
import CompetitionStages from '@/ui/blocks/CompetitionStages';
import CategoriesWorkers from '@/ui/blocks/CategoriesWorkers';
import Footer from '@/ui/blocks/Footer';

import fs from 'fs';
import path from 'path';

export default async function Home() {
    const filePath = path.join(process.cwd(), 'public/data/cases.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const casesData = JSON.parse(jsonData);

    return (
        <>
            <Header />
            <Hero />
            <TakeFaten />
            <CategoryBlock />
            <CompetitionStages />
            <CategoriesWorkers />
            <Footer />
        </>
    );
}
