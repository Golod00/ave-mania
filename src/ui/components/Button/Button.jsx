import { useCallback } from 'react';
import classes from './Button.module.scss';

export default function Button({ children, type = 'filled', onClick, destination }) {
    const isFilledClass = type === 'filled' ? classes.filled : classes.transparent;
    const buttonClass = `${classes.button} ${isFilledClass}`;

    const handleClick = useCallback(
        e => {
            if (onClick) onClick(e);

            if (destination) {
                e.preventDefault();
                const el = document.querySelector(destination);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        },
        [destination, onClick]
    );

    return (
        <button className={buttonClass} onClick={handleClick}>
            <span>{children}</span>
        </button>
    );
}