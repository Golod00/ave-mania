import classes from './NotAccept.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';

export default function NotAccept() {
    return (
        <section className={classes.notAccept}>
            <div className="container">
                <h2 className={classes.title}>Не приймаємо</h2>
                
                <div className={classes.wrapper}>
                    <div className={classes.wrapperContent}>
                        <TextTitle className={classes.item}>
                            <div className={classes.imageWrap}>
                                <Image
                                    src="/images/notAccept/photo1.webp"
                                    width={295}
                                    height={201}
                                    alt="Image ave mania"
                                />
                            </div>
                            <div className={classes.content}>
                                <p className={classes.titleContent}>
                                    1.
                                </p>
                                <p className={classes.text}>
                                    Будь-які вироби з PVC-3 (ПВХ), C/LDPE, CPE або PE-C. Тетрапак C/PAP; твердий пластик(з автомобілів чи дитячих іграшок); кульки усіх кольорів; шуршики - плівка або упаковка, яка шуршить при стисканні; упаковки з чіпсів, цукерок, шоколадок, майонезу, кетчупу; упаковки з фольгою або білі всередині;                                
                                </p>
                            </div>
                        </TextTitle>    
                        <TextTitle className={classes.item}>
                            <div className={classes.imageWrap}>
                                <Image
                                    src="/images/notAccept/photo2.webp"
                                    width={295}
                                    height={201}
                                    alt="Image ave mania"
                                />
                            </div>
                            <div className={classes.content}>
                                <p className={classes.titleContent}>
                                    2.
                                </p>
                                <p className={classes.text}>
                                    Підвіконня; плінтуси; інші пластикові будівельні та меблеві деталі; пластикові банківські чи дисконтні картки; віконні рами; дощовики та інший водонепронектий спецодяг; лінолеум; намети; плащі; парасолі; матраци; круги надувні; для плавання; басейни; шини; вінілові платівки; банери; вироби з резини та резина; душові штори; інші речі з маркуванням “3 PVC”
                                </p>
                            </div>
                        </TextTitle> 
                        <TextTitle className={classes.item}>
                            <div className={classes.imageWrap}>
                                <Image
                                    src="/images/notAccept/photo3.webp"
                                    width={295}
                                    height={201}
                                    alt="Image ave mania"
                                />
                            </div>
                            <div className={classes.content}>
                                <p className={classes.titleContent}>
                                    3.
                                </p>
                                <p className={classes.text}>
                                    Лампочки; термометри; фарбоване скло; кераміку; посуд керамічний; кружки та інше; дзеркала; термоскло; гартоване скло; захисне скло для гаджетів; склопакети; батарейки
                                </p>
                            </div>
                        </TextTitle> 
                         <TextTitle className={classes.item}>
                            <div className={classes.imageWrap}>
                                <Image
                                    src="/images/notAccept/photo4.webp"
                                    width={295}
                                    height={201}
                                    alt="Image ave mania"
                                />
                            </div>
                            <div className={classes.content}>
                                <p className={classes.titleContent}>
                                    4.
                                </p>
                                <p className={classes.text}>
                                    Туалетний папір;  труби з під чіпсів; використані серветки       
                                </p>
                            </div>
                        </TextTitle>
                    </div>
                </div>
            </div>
        </section>
    );
}