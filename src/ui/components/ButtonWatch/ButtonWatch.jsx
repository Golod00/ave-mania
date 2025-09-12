import classes from './ButtonWatch.module.scss';

export default function ButtonWatch({ children, type = 'filled' }) {
    const isFilledClass = type === 'filled' ? classes.filled : classes.transparent;
    const buttonClass = `${classes.button} ${isFilledClass}`;

    return (
        <a className={buttonClass} href='#competitions'>
            <span>{children}</span>
        </a>
    );
}