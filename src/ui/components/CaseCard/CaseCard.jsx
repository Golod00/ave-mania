'use client';

import { useEffect, useRef } from 'react';
import classes from './CaseCard.module.scss';
import Image from 'next/image';
import { useModal } from '@/ui/contexts/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CaseCard({ caseData }) {
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
        <article className={classes.card} ref={cardRef} onClick={() => openModal({ caseData })}>
            <Image src={caseData.photo.card} width={768} height={518} alt={caseData.name} />
            <footer className={classes.footer}>
                <h3>{caseData.name}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                >
                    <path
                        d="M16.0974 35.8025L28.8346 17.612L30.9527 29.6243L34.7272 28.9588L31.4729 10.5026L13.0167 13.7569L13.6822 17.5314L25.6945 15.4133L12.9574 33.6038L16.0974 35.8025Z"
                        fill="#3AD976"
                    />
                </svg>
            </footer>
        </article>
    );
}
