import classes from './CategoriesWorkers.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';

export default function CategoriesWorkers() {
    return (
        <section className={classes.categoriesWorkers}>
            <div className="container">
                <div className={classes.wrapImage}>
                    <div className={classes.wrapImageBg}>
                        <Image
                            src="/images/CategoriesWorkers/image.webp"
                            width={477}
                            height={477}
                            alt="Image ave mania"
                        />
                    </div>
                    <div className={classes.wrapImageIcon}>
                        <TextTitle>
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                                <path d="M33.957 3.77666C43.4547 6.48008 50.7097 14.2718 52.0654 24.9322C52.3069 26.8294 52.2201 26.95 48.518 29.8736C45.6489 32.1405 45.3137 32.5418 45.582 33.3892C45.9573 34.5735 46.9139 34.3463 49.4437 32.4714C50.8009 31.4652 51.9116 30.8232 51.9116 31.0435C51.9116 32.0477 50.5237 36.2603 49.5518 38.2047C42.4119 52.4918 26.5573 51.8195 27.9105 51.7242C27.3849 50.7042 27.2073 50.0453 24.2084 46.9401C22.0618 44.7174 21.4048 44.2108 20.7686 44.2853C20.1676 44.3562 19.9598 44.5785 19.8894 45.2269C19.8131 45.9255 20.239 46.5546 22.2954 48.7767C23.6664 50.2582 24.669 51.5184 24.5168 51.5685C23.9748 51.7451 20.1051 50.7072 17.9764 49.8136C4.74186 44.2575 -0.940216 28.545 5.74201 15.981L7.05555 13.5112L12.2844 12.6316C15.1535 12.1489 17.6809 11.6155 17.8837 11.4493C18.3776 11.046 18.3954 9.88652 17.9149 9.40626C17.4047 8.89525 16.1561 8.95131 12.8864 9.63151C11.3438 9.95201 10.0689 10.1693 10.0173 10.1197C9.81452 9.92522 13.5032 7.14886 15.385 6.0792C21.1638 2.79432 28.2001 2.13794 33.957 3.77666ZM4.96004 0.608864C4.57574 1.03901 4.38038 2.52294 4.09377 7.18359C3.72584 13.1714 3.71742 13.2161 2.55115 15.8262C-4.91156 32.5294 4.85541 49.6613 20.722 53.7743L22.6965 54.2867L21.4316 55.1133C19.9817 56.061 19.7005 57.2272 20.784 57.8032C21.6443 58.2602 22.3261 57.987 24.5783 56.2823C26.4536 54.8633 26.6148 54.8032 29.1442 54.5987C48.0479 53.0717 54.688 36.3993 54.688 31.3214C54.688 30.2145 55.1452 30.5499 55.8245 32.1549C56.308 33.297 56.6858 33.7504 57.2799 33.8988C58.762 34.2699 59.4834 32.9884 58.644 31.4757C58.0321 30.3737 56.7052 25.3802 55.6752 24.9322C55.2746 24.7575 54.9161 24.3547 54.8511 24.0059C50.2956 -0.519829 23.832 -6.53989 8.87585 7.26992L6.56167 9.40626C6.66283 7.78044 6.87356 4.21227 7.03918 2.61522C7.27025 0.393051 6.13225 -0.704891 4.96004 0.608864Z" fill="#313030"/>
                            </svg>
                        </TextTitle>
                    </div>
                </div>
                <h2 className={classes.title}>Категорії переможців</h2>
                <div className={classes.wrapper}>
                    <TextTitle>
                        <div className={`${classes.item} ${classes.red}`}>
                            <p>Кількість зібраної вторсировини</p>
                            <div className={classes.wrapImg}>
                                <Image
                                    src="/images/CategoriesWorkers/photo1.webp"
                                    width={352}
                                    height={263}
                                    alt="Image ave mania"
                                />
                            </div>
                        </div>
                    </TextTitle>
                    <TextTitle>
                        <div className={`${classes.item} ${classes.yellow}`}>
                            <p>Кількість зібраної вторсировини на одного учасника</p>
                            <div className={classes.wrapImg}>
                                <Image
                                    src="/images/CategoriesWorkers/photo3.webp"
                                    width={352}
                                    height={263}
                                    alt="Image ave mania"
                                />
                            </div>
                        </div>
                    </TextTitle>
                    <TextTitle>
                        <div className={`${classes.item} ${classes.blue}`}>
                            <p>Еко Натхненник</p>
                            <span>Спеціальна індивідуальна нагорода для працівника закладу освіти, який проявив найбільш креативний підхід у популяризації сортування відходів</span>
                            <div className={classes.wrapImgMain}>
                                <div className={classes.image2}>
                                    <Image
                                        src="/images/CategoriesWorkers/photo4.webp"
                                        width={352}
                                        height={263}
                                        alt="Image ave mania"
                                    />
                                </div>
                                <div className={classes.image3}>
                                    <Image
                                        src="/images/CategoriesWorkers/photo2.webp"
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
