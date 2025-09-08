'use client';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useModal } from '@/ui/contexts/ModalContext';
import classes from './Modal.module.scss';
import Image from 'next/image';

export default function Modal({ globalCasesData }) {
    const { isOpen, closeModal, modalData, openModal } = useModal();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !modalData) return null;

    const isCase = !!modalData.caseData;
    const data = isCase ? modalData.caseData : modalData.categoryData;

    const images = (isCase ? data.photo.main : data.images).map((src, index) => (
        <Image
            key={index}
            src={src}
            width={2440}
            height={1520}
            alt={`Фото: ${data.name} ${index + 1}`}
        />
    ));

    let footer = null;

    if (isCase) {
        const cases = globalCasesData.cases;
        const currentIndex = cases.findIndex(c => c.id === data.id);
        const prevCase = cases[(currentIndex - 1 + cases.length) % cases.length];
        const nextCase = cases[(currentIndex + 1) % cases.length];

        const handlePrev = e => {
            e.stopPropagation();
            openModal({ caseData: prevCase });
        };
        const handleNext = e => {
            e.stopPropagation();
            openModal({ caseData: nextCase });
        };

        footer = (
            <footer className={classes.footer}>
                <button className={classes.scroll} onClick={handlePrev}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M26.2761 17.057H10.8281L16.8281 23.057L14.9428 24.9424L5.72412 15.7237L14.9428 6.50505L16.8281 8.39038L10.8281 14.3904H26.2761V17.057Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <div className={classes.container}>
                    <h3 onClick={handleNext}>{nextCase.name}</h3>
                    <button className={classes.scroll} onClick={handleNext}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M5.72388 17.057H21.1719L15.1719 23.057L17.0572 24.9424L26.2759 15.7237L17.0572 6.50505L15.1719 8.39038L21.1719 14.3904H5.72388V17.057Z"
                                fill="#3AD976"
                            />
                        </svg>
                    </button>
                </div>
            </footer>
        );
    }

    return createPortal(
        <div
            className={isCase ? classes.modal : `${classes.modal} ${classes.modalCategory}`}
            onClick={closeModal}
        >
            <div className={classes.modalBody} onClick={e => e.stopPropagation()}>
                <div className={classes.content}>
                    <h2>{data.name}</h2>
                    {isCase && <h3>{data.year}</h3>}
                    <div className={classes.paragraps}>
                        {(data.text || []).map((p, i) => (
                            <p key={i} className={classes.paragraph}>
                                {p}
                            </p>
                        ))}
                    </div>
                    {footer}
                </div>
                <div
                    className={
                        !images[1]
                            ? `${classes.imageContainer} ${classes.single}`
                            : classes.imageContainer
                    }
                >
                    {images}
                </div>
                <button onClick={closeModal} className={classes.close}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M19.2807 18.2193C19.3504 18.289 19.4056 18.3717 19.4433 18.4628C19.4811 18.5538 19.5005 18.6514 19.5005 18.7499C19.5005 18.8485 19.4811 18.9461 19.4433 19.0371C19.4056 19.1281 19.3504 19.2109 19.2807 19.2806C19.211 19.3502 19.1283 19.4055 19.0372 19.4432C18.9462 19.4809 18.8486 19.5003 18.7501 19.5003C18.6515 19.5003 18.5539 19.4809 18.4629 19.4432C18.3718 19.4055 18.2891 19.3502 18.2194 19.2806L12.0001 13.0602L5.78068 19.2806C5.63995 19.4213 5.44907 19.5003 5.25005 19.5003C5.05103 19.5003 4.86016 19.4213 4.71943 19.2806C4.5787 19.1398 4.49963 18.949 4.49963 18.7499C4.49963 18.5509 4.5787 18.36 4.71943 18.2193L10.9397 11.9999L4.71943 5.78055C4.5787 5.63982 4.49963 5.44895 4.49963 5.24993C4.49963 5.05091 4.5787 4.86003 4.71943 4.7193C4.86016 4.57857 5.05103 4.49951 5.25005 4.49951C5.44907 4.49951 5.63995 4.57857 5.78068 4.7193L12.0001 10.9396L18.2194 4.7193C18.3602 4.57857 18.551 4.49951 18.7501 4.49951C18.9491 4.49951 19.1399 4.57857 19.2807 4.7193C19.4214 4.86003 19.5005 5.05091 19.5005 5.24993C19.5005 5.44895 19.4214 5.63982 19.2807 5.78055L13.0604 11.9999L19.2807 18.2193Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
        </div>,
        document.body
    );
}
