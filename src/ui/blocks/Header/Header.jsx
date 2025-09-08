'use client';

import { useState, useEffect } from 'react';
import classes from './Header.module.scss';
import SiteLogo from '@/ui/components/SiteLogo';
import Menu from '@/ui/components/Menu';
import AditionalLinks from './AditionalLinks';
import Image from 'next/image';

export default function Header() {
    const [burgerIsOpened, toggleBurger] = useState(false);

    const toggleBurgerFunction = () => {
        toggleBurger(prev => !prev);
    };

    useEffect(() => {
        if (burgerIsOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [burgerIsOpened]);

    return (
        <>
            <div className={classes.wrapper}>
                <header className={`${classes.header} container`}>
                    <SiteLogo />
                    <div className={classes.HeaderMenuContainer}>
                        <Menu />
                    </div>
                    <div className={classes.HeaderMenuContainer}>
                        <AditionalLinks />
                    </div>
                    <button className={classes.burgerButton} onClick={toggleBurgerFunction}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16ZM5 9H27C27.2652 9 27.5196 8.89464 27.7071 8.70711C27.8946 8.51957 28 8.26522 28 8C28 7.73478 27.8946 7.48043 27.7071 7.29289C27.5196 7.10536 27.2652 7 27 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9ZM27 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H27C27.2652 25 27.5196 24.8946 27.7071 24.7071C27.8946 24.5196 28 24.2652 28 24C28 23.7348 27.8946 23.4804 27.7071 23.2929C27.5196 23.1054 27.2652 23 27 23Z" fill="#262626"/>
                        </svg>
                    </button>
                </header>
            </div>
            <div
                className={
                    burgerIsOpened ? `${classes.mobileMenu} ${classes.active}` : classes.mobileMenu
                }
            >
                <button onClick={toggleBurgerFunction} className={classes.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M25.7076 24.2925C25.8005 24.3854 25.8742 24.4957 25.9245 24.6171C25.9747 24.7385 26.0006 24.8686 26.0006 25C26.0006 25.1314 25.9747 25.2615 25.9245 25.3829C25.8742 25.5043 25.8005 25.6146 25.7076 25.7075C25.6147 25.8004 25.5044 25.8741 25.383 25.9244C25.2616 25.9747 25.1315 26.0006 25.0001 26.0006C24.8687 26.0006 24.7386 25.9747 24.6172 25.9244C24.4958 25.8741 24.3855 25.8004 24.2926 25.7075L16.0001 17.4138L7.70757 25.7075C7.51993 25.8951 7.26543 26.0006 7.00007 26.0006C6.7347 26.0006 6.48021 25.8951 6.29257 25.7075C6.10493 25.5199 5.99951 25.2654 5.99951 25C5.99951 24.7346 6.10493 24.4801 6.29257 24.2925L14.5863 16L6.29257 7.70751C6.10493 7.51987 5.99951 7.26537 5.99951 7.00001C5.99951 6.73464 6.10493 6.48015 6.29257 6.29251C6.48021 6.10487 6.7347 5.99945 7.00007 5.99945C7.26543 5.99945 7.51993 6.10487 7.70757 6.29251L16.0001 14.5863L24.2926 6.29251C24.4802 6.10487 24.7347 5.99945 25.0001 5.99945C25.2654 5.99945 25.5199 6.10487 25.7076 6.29251C25.8952 6.48015 26.0006 6.73464 26.0006 7.00001C26.0006 7.26537 25.8952 7.51987 25.7076 7.70751L17.4138 16L25.7076 24.2925Z" fill="black"/>
                    </svg>
                </button>
                <Menu closeMenu={burgerIsOpened ? toggleBurgerFunction : undefined} />
                <div className={classes.backgroundWrapper}>
                    <div className={classes.background}>
                        <Image
                            className={classes.imgFirst}
                            src="/images/logoBackground.svg"
                            width={220}
                            height={220}
                            alt="Image ave mania"
                        />
                    </div>

                    <div className={classes.background}>
                        <Image
                            className={classes.imgSecond}
                            src="/images/logoBackgroundImg.svg"
                            width={100}
                            height={114}
                            alt="Image ave mania"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}