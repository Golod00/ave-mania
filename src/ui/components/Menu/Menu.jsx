'use client'

import Link from 'next/link';
import classes from './Menu.module.scss';
import SiteLogo from '@/ui/components/SiteLogo';
import AditionalLinks from '@/ui/blocks/Header/AditionalLinks/AditionalLinks'; 

export default function Menu({ closeMenu }) {
    const handleClick = () => {
        if (closeMenu) closeMenu();
    };

    return (
        <>
            <div className={classes.logoWrapper}>
                <SiteLogo />
            </div>
            <div className={classes.wrapperNavMain}>
                <nav className={classes.navigation}>
                    <ul className={classes.container}>
                        <li className={classes.item}>
                            <Link className={classes.link} href="#services" onClick={handleClick}>
                                Умови
                            </Link>
                        </li>
                        <li className={classes.item}>
                            <Link className={classes.link} href="#aboutUs" onClick={handleClick}>
                                Учасники
                            </Link>
                        </li>
                        <li className={classes.item}>
                            <Link className={classes.link} href="#ownProjects" onClick={handleClick}>
                                Результати
                            </Link>
                        </li>
                        <li className={classes.item}>
                            <Link className={classes.link} href="#competitions" onClick={handleClick}>
                                Конкурси
                            </Link>
                        </li>
                        <li className={classes.item}>
                            <Link className={classes.link} href="#winners" onClick={handleClick}>
                                Переможці
                            </Link>
                        </li>
                        <li className={classes.item}>
                            <Link className={classes.link} href="#footer" onClick={handleClick}>
                                Контакти
                            </Link>
                        </li>
                    </ul>
                </nav>
                <AditionalLinks className={classes.aditionalLinks} closeMenu={closeMenu} />
            </div>
        </>
    );
}