import Button from '@/ui/components/Button';
import classes from './AditionalLinks.module.scss';

export default function AditionalLinks({ closeMenu, className }) {
    const handleClick = () => {
        if (closeMenu) closeMenu();
    };

    return (
        <div className={`${classes.aditionalLinks} ${className || ''}`}>
            <Button onClick={handleClick} destination="#footer">Подати заявку</Button>
        </div>
    );
}