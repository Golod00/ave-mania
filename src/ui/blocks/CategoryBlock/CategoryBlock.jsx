import classes from './CategoryBlock.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';

export default function CategoryBlock() {
    return (
        <section className={classes.categoryBlock}>
            <div className="container">
                <h2 className={classes.title}>Категорії прийнятої вторсировини</h2>
                <div className={classes.wrapper}>
                    <TextTitle>
                        <div className={`${classes.item} ${classes.yellow}`}>
                            <p>ПЕТ-пляшка</p>
                            <div className={classes.wrapImg}>
                                <Image
                                    className={`${classes.image} ${classes.imageBg}`}
                                    src="/images/CategoryBlock/photo3.webp"
                                    width={352}
                                    height={263}
                                    alt="Image ave mania"
                                />
                            </div>
                        </div>
                    </TextTitle>
                    <TextTitle>
                        <div className={`${classes.item} ${classes.blue}`}>
                            <p>Папір / картон</p>
                            <div className={classes.wrapImg}>
                                <div className={classes.image2}>
                                    <Image
                                        src="/images/CategoryBlock/photo4.webp"
                                        width={352}
                                        height={263}
                                        alt="Image ave mania"
                                    />
                                </div>
                                <div className={classes.imageBg}>
                                    <Image
                                        src="/images/CategoryBlock/photo5.webp"
                                        width={352}
                                        height={263}
                                        alt="Image ave mania"
                                    />
                                </div>
                            </div>
                        </div>
                    </TextTitle>
                    <TextTitle>
                        <div className={`${classes.item} ${classes.green}`}>
                            <p>Скло</p>
                            <div className={classes.wrapImg}>
                                <div className={classes.image3}>
                                    <Image
                                        src="/images/CategoryBlock/photo1.webp"
                                        width={352}
                                        height={263}
                                        alt="Image ave mania"
                                    />
                                </div>
                                <div className={classes.image}>
                                    <Image
                                        src="/images/CategoryBlock/photo2.webp"
                                        width={352}
                                        height={263}
                                        alt="Image ave mania"
                                    />
                                </div>
                            </div>
                        </div>
                    </TextTitle>
                </div>
            </div>
        </section>
    );
}
