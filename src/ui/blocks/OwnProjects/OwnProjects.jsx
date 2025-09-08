'use client';

import { useRef, useState, useEffect } from 'react';
import classes from './OwnProjects.module.scss';
import OwnProjectCard from '@/ui/components/OwnProjectCard';
import TextTitle from '@/ui/components/TextTitle';

export default function OwnProjects({ casesData }) {
    const scrollContainerRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const movedRef = useRef(false);

    const cases = casesData.cases
        .filter(item => item.isOwnProject)
        .map((item, index) => (
            <div key={index} className={classes.slide}>
                <OwnProjectCard caseData={item} />
            </div>
        ));

    const scrollByOneCard = dir => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const first = container.firstElementChild;
        if (!first) return;

        const cardWidth = first.getBoundingClientRect().width;
        const gap = parseFloat(
            getComputedStyle(container).columnGap || getComputedStyle(container).gap || '0'
        );
        const step = cardWidth + (isNaN(gap) ? 0 : gap);

        container.scrollBy({
            left: dir === 'left' ? -step : step,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const c = scrollContainerRef.current;
        if (!c) return;

        const updateButtons = () => {
            setCanScrollLeft(c.scrollLeft > 0);
            setCanScrollRight(Math.ceil(c.scrollLeft + c.clientWidth) < c.scrollWidth);
        };

        c.addEventListener('scroll', updateButtons, { passive: true });
        updateButtons();
        return () => c.removeEventListener('scroll', updateButtons);
    }, []);

    useEffect(() => {
        const c = scrollContainerRef.current;
        if (!c) return;

        const onPointerDown = e => {
            if (e.pointerType !== 'mouse' || e.button !== 0) return;

            if (e.target.closest('a, button, input, textarea, select, label')) return;

            isDraggingRef.current = true;
            movedRef.current = false;

            c.classList.add(classes.dragging);
            c.setPointerCapture?.(e.pointerId);

            startXRef.current = e.clientX;
            startScrollLeftRef.current = c.scrollLeft;
        };

        const onPointerMove = e => {
            if (!isDraggingRef.current) return;
            if (e.pointerType !== 'mouse') return;

            e.preventDefault();
            const dx = e.clientX - startXRef.current;
            if (Math.abs(dx) > 2) movedRef.current = true;

            c.scrollLeft = startScrollLeftRef.current - dx;
        };

        const endDrag = e => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            c.classList.remove(classes.dragging);
            c.releasePointerCapture?.(e.pointerId);
        };

        const onDragStart = e => e.preventDefault();

        const onClickCapture = e => {
            if (movedRef.current) {
                e.stopPropagation();
                e.preventDefault();
                movedRef.current = false;
            }
        };

        c.addEventListener('pointerdown', onPointerDown);
        c.addEventListener('pointermove', onPointerMove);
        c.addEventListener('pointerup', endDrag);
        c.addEventListener('pointerleave', endDrag);
        c.addEventListener('pointercancel', endDrag);
        c.addEventListener('dragstart', onDragStart);
        c.addEventListener('click', onClickCapture, true);

        return () => {
            c.removeEventListener('pointerdown', onPointerDown);
            c.removeEventListener('pointermove', onPointerMove);
            c.removeEventListener('pointerup', endDrag);
            c.removeEventListener('pointerleave', endDrag);
            c.removeEventListener('pointercancel', endDrag);
            c.removeEventListener('dragstart', onDragStart);
            c.removeEventListener('click', onClickCapture, true);
        };
    }, []);

    return (
        <div className={classes.wrapper} id="ownProjects">
            <section className={`${classes.OwnProjectsSection} container`}>
                <header className={classes.header}>
                    <TextTitle type="h2">
                        Власні <br />
                        проекти <br />
                        Global Events
                    </TextTitle>
                    <p>
                        З 2018 року наша компанія є засновником та організатором масштабних ділових
                        подій національного і міжнародного рівнів. Більшість з них стали ключовими
                        майданчиками для комунікації у своїх галузях та проводяться щороку.
                    </p>
                </header>

                <main className={classes.container}>
                    <div ref={scrollContainerRef} className={classes.innerContainer}>
                        {cases}
                    </div>
                </main>

                <div className={classes.controls}>
                    <button
                        onClick={() => scrollByOneCard('left')}
                        disabled={!canScrollLeft}
                        className={!canScrollLeft ? classes.disabled : ''}
                        aria-label="Предыдущий"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                        >
                            <path d="M37.7715 20.6867L15.565 20.6867L24.19 12.0617L21.4799 9.35156L8.22803 22.6034L21.4799 35.8552L24.19 33.1451L15.565 24.5201L37.7715 24.5201V20.6867Z" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scrollByOneCard('right')}
                        disabled={!canScrollRight}
                        className={!canScrollRight ? classes.disabled : ''}
                        aria-label="Следующий"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                        >
                            <path d="M8.22799 24.5198H30.4345L21.8095 33.1448L24.5197 35.855L37.7715 22.6031L24.5197 9.35131L21.8095 12.0615L30.4345 20.6865H8.22799V24.5198Z" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
}
