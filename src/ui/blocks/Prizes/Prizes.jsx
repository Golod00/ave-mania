import classes from './Prizes.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';

export default function Prizes() {
    return (
        <section className={classes.prizes}>
            <div className="container">
                <h2 className={classes.title}>Призи</h2>
                <TextTitle>
                <div className={classes.content}>
                    <p className={classes.text}>
                        Цього року переможці (заклади освіти) у всіх категоріях отримають 3Д-принтери. 
                    </p>
                    <p className={classes.text}>
                        ЕкоНатхненник - грошовий приз.
                    </p>
                </div>
                </TextTitle>
            </div>
            <div className={classes.wrapImage}>
                <div className={classes.wrapImageBg}>
                    <picture>
                        <source
                            srcSet="/images/Prizes/background.webp"
                            media="(min-width: 1240px)" 
                        />
                        <Image
                            src="/images/Prizes/mob/background.webp"
                            width={1440}
                            height={410}
                            alt="Image ave mania"
                        />
                    </picture>
                </div>
                <div className={classes.wrapImageIcon}>
                    <TextTitle>
                    <p className={classes.text}>
                        Приз може відрізнятися від зображеного
                    </p>
                    </TextTitle>
                    <TextTitle>
                        <Image
                            src="/images/Prizes/mob/sovol.webp"
                            width={205}
                            height={205}
                            alt="Image ave mania"
                        />
                    </TextTitle>
                </div>
            </div>
        </section>
    );
}
