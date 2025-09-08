'use client';

import classes from './OwnProjectCard.module.scss';
import Image from 'next/image';
import { useModal } from '@/ui/contexts/ModalContext';
import Button from '../Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function OwnProjectCard({ caseData }) {
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
        <article ref={cardRef} className={classes.card}>
            <div className={classes.imageContainer}>
                <Image src={caseData.photo.card} width={768} height={518} alt={caseData.name} />
            </div>
            <div className={classes.content}>
                <h3>{caseData.name}</h3>
                <h4>{caseData.year}</h4>
            </div>
            <Button onClick={() => openModal({ caseData })}>Детальніше</Button>
        </article>
    );
}
