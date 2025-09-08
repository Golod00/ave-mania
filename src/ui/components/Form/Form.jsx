'use client'

import { useState } from 'react';
import Button from '../Button';
import classes from './Form.module.scss';

export default function Form() {
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    async function onSubmit(e) {
        e.preventDefault();
        setStatus({ state: 'pending', message: 'Відправляємо...' });

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        try {
            const res = await fetch('/API/Telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (!res.ok || !json.ok) {
                throw new Error(json.error || 'Помилка відправки');
            }

            setStatus({ state: 'success', message: 'Надіслано! Ми скоро зв’яжемось з Вами.' });
            form.reset();
        } catch (err) {
            setStatus({ state: 'error', message: err.message || 'Щось пішло не так' });
        }
    }

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <fieldset>
                <label htmlFor="formCompany">Назва компанії</label>
                <input
                    type="text"
                    name="formCompany"
                    id="formCompany"
                    placeholder="Назва компанії"
                />
            </fieldset>

            <fieldset>
                <label htmlFor="formName">Контактна особа</label>
                <input
                    type="text"
                    name="formName"
                    id="formName"
                    required
                    placeholder="Контактна особа"
                />
            </fieldset>

            <fieldset>
                <label htmlFor="formTel">Номер телефону</label>
                <input
                    type="tel"
                    name="formTel"
                    id="formTel"
                    required
                    placeholder="Номер телефону"
                />
            </fieldset>

            <fieldset>
                <label htmlFor="formEmail">Email</label>
                <input type="email" name="formEmail" id="formEmail" required placeholder="Email" />
            </fieldset>

            <fieldset>
                <label htmlFor="formText">Коментар</label>
                <input type="text" name="formText" id="formText" required placeholder="Коментар" />
            </fieldset>

            <Button>
                {status.state === 'pending' ? 'Відправляємо...' : 'Зв’язатися'}
            </Button>

            {status.message && (
                <p
                    aria-live="polite"
                    style={{
                        marginTop: 8,
                        color: status.state === 'error' ? 'crimson' : 'inherit',
                    }}
                >
                    {status.message}
                </p>
            )}
        </form>
    );
}
