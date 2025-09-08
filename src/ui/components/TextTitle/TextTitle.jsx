'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from './TextTitle.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function TextTitle({ children, type = 'h2', className }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;

        gsap.fromTo(
            el,
            { opacity: 0, y: 30, scale: 0.8, skewY: 5, filter: 'blur(8px)' },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                skewY: 0,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'back.out(1.7)', // «подпрыгивающее» появление
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    const Tag = type;

    return (
        <Tag className={`${className} ${classes.element}`} ref={ref}>
            {children}
        </Tag>
    );
}
