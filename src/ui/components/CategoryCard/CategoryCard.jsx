'use client';

import classes from './CategoryCard.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Button from '../Button';
import { useModal } from '@/ui/contexts/ModalContext';

gsap.registerPlugin(ScrollTrigger);

export default function CategoryCard({ categoryData }) {
    const { openModal } = useModal();
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;

        gsap.fromTo(
            el,
            { opacity: 0, y: 30, scale: 0.9, rotation: -2 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <article onClick={() => openModal({ categoryData })} ref={cardRef} className={classes.card}>
            <Image src={categoryData.mainImage} width={768} height={540} alt={categoryData.name} />
            <div className={classes.content}>
                <h3>{categoryData.name}</h3>
                <Button type="transparent">Детальніше</Button>
            </div>
        </article>
    );
}
