import classes from './Button.module.scss';

export default function Button({ children, type = 'filled' }) {
    const isFilledClass = type === 'filled' ? classes.filled : classes.transparent;
    const buttonClass = `${classes.button} ${isFilledClass}`;

    return (
        <a className={buttonClass} href='#form'>
            <span>{children}</span>
        </a>
    );
}