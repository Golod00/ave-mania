"use client";

import Form from "@/ui/components/Form/Form";
import classes from './FormBlock.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';

export default function FormBlock() {
    return (
        <section className={classes.formBlock}>
            <div className="container">
                <h2 className={classes.title}>Долучайтесь до АВЕМанії!</h2>
                <Form />
            </div>
        </section>
    );
}
