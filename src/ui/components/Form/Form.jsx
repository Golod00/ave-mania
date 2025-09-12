"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import classes from "./Form.module.scss";
import CustomSelect from "@/ui/components/CustomSelect/CustomSelect";

export default function Form() {
  const swiperRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    street: "",
    contactPerson: "",
    position: "",
    phone: "",
    email: "",
    kidsCount: "",
    container: "",
    containers120: "",
    type120: "",
    containers11: "",
    type11: "",
  });

  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 0:
        if (!formData.name) newErrors.name = "Вкажіть назву закладу";
        if (!formData.city) newErrors.city = "Вкажіть населений пункт";
        if (!formData.street) newErrors.street = "Вкажіть вулицю";
        break;
      case 1:
        if (!formData.contactPerson) newErrors.contactPerson = "Вкажіть контактну особу";
        if (!formData.position) newErrors.position = "Вкажіть посаду";
        if (!formData.phone) newErrors.phone = "Вкажіть телефон";
        if (!formData.email) newErrors.email = "Вкажіть email";
        break;
      case 2:
        if (!formData.kidsCount) newErrors.kidsCount = "Вкажіть кількість дітей";
        if (!formData.container) newErrors.container = "Оберіть відповідь";
        break;
      case 3:
        if (formData.container === "yes") {
          if (!formData.containers120) newErrors.containers120 = "Вкажіть кількість контейнерів 120 л";
          if (!formData.type120) newErrors.type120 = "Оберіть тип відходів 120 л";
          if (!formData.containers11) newErrors.containers11 = "Вкажіть кількість контейнерів 11 м³";
          if (!formData.type11) newErrors.type11 = "Оберіть тип відходів 11 м³";
        }
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formSteps = [0, 1, 2];
  if (formData.container === "yes") formSteps.push(3);

  const steps = [
    // Шаг 0
    <div className={classes.step} key={0}>
      <div className={classes.wrap}>
        <p className={classes.title}>Назва закладу</p>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="Ужгородська початкова школа № 1"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className={classes.error}>{errors.name}</p>}
      </div>
      <div className={classes.wrap}>
        <p className={classes.title}>Населений пункт</p>
        <input
          className={classes.input}
          type="text"
          name="city"
          placeholder="Ужгород"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className={classes.error}>{errors.city}</p>}
      </div>
      <div className={classes.wrap}>
        <p className={classes.title}>Вулиця</p>
        <input
          className={classes.input}
          type="text"
          name="street"
          placeholder="вулиця Висока, 4"
          value={formData.street}
          onChange={handleChange}
        />
        {errors.street && <p className={classes.error}>{errors.street}</p>}
      </div>
    </div>,

    // Шаг 1
    <div className={classes.step} key={1}>
      <div className={classes.wrap}>
        <p className={classes.title}>Контактна особа</p>
        <input
          className={classes.input}
          type="text"
          name="contactPerson"
          placeholder="Прізвище та ім’я"
          value={formData.contactPerson}
          onChange={handleChange}
        />
        {errors.contactPerson && <p className={classes.error}>{errors.contactPerson}</p>}
      </div>
      <div className={classes.wrap}>
        <p className={classes.title}>Посада</p>
        <input
          className={classes.input}
          type="text"
          name="position"
          placeholder="Завуч з навчально виховної роботи"
          value={formData.position}
          onChange={handleChange}
        />
        {errors.position && <p className={classes.error}>{errors.position}</p>}
      </div>
      <div className={classes.wrap}>
        <p className={classes.title}>Телефон</p>
        <input
          className={classes.input}
          type="tel"
          name="phone"
          placeholder="+38 097 000 00 00"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className={classes.error}>{errors.phone}</p>}
      </div>
      <div className={classes.wrap}>
        <p className={classes.title}>Email</p>
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="mail.mail@mail.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={classes.error}>{errors.email}</p>}
      </div>
    </div>,

    // Шаг 2
    <div className={classes.step} key={2}>
      <div className={classes.wrap}>
        <p className={classes.title}>Орієнтовна кількість дітей</p>
        <input
          className={classes.input}
          type="number"
          name="kidsCount"
          placeholder="250"
          value={formData.kidsCount}
          onChange={handleChange}
        />
        {errors.kidsCount && <p className={classes.error}>{errors.kidsCount}</p>}
      </div>

      <p className={classes.title}>Чи є контейнери?</p>
      <div className={classes.blockLable}>
        <div className={classes.wrap}>
          <label>
            <input
              type="radio"
              name="container"
              value="yes"
              checked={formData.container === "yes"}
              onChange={handleChange}
            />
            Так
          </label>
          <label>
            <input
              type="radio"
              name="container"
              value="no"
              checked={formData.container === "no"}
              onChange={handleChange}
            />
            Ні
          </label>
          {errors.container && <p className={classes.error}>{errors.container}</p>}
        </div>
      </div>
    </div>,

    // Шаг 3 — контейнеры
    formData.container === "yes" && (
      <div className={classes.step} key={3}>
        <div className={classes.wrap}>
          <p className={classes.title}>Кількість контейнерів 120 л</p>
          <input
            className={classes.input}
            type="number"
            name="containers120"
            placeholder="Кількість контейнерів 120 л"
            value={formData.containers120}
            onChange={handleChange}
          />
          {errors.containers120 && <p className={classes.error}>{errors.containers120}</p>}
        </div>

        <div className={classes.wrapCustomSelect}>
          <p className={classes.title}>Вид відходів (120 л)</p>
          <CustomSelect
            parentClassName={classes.selectWrapper}
            selectedClassName={classes.select}
            options={[
              { value: "plastic", label: "Пластик" },
              { value: "paper", label: "Папір" },
              { value: "glass", label: "Скло" },
              { value: "mixed", label: "Змішані" },
            ]}
            name="type120"
            value={formData.type120}
            onChange={handleChange}
            placeholder="Вид відходів (120 л)"
          />
          {errors.type120 && <p className={classes.error}>{errors.type120}</p>}
        </div>

        <div className={classes.wrap}>
          <p className={classes.title}>Кількість контейнерів 11 м³</p>
          <input
            className={classes.input}
            type="number"
            name="containers11"
            placeholder="Кількість контейнерів 11 м³"
            value={formData.containers11}
            onChange={handleChange}
          />
          {errors.containers11 && <p className={classes.error}>{errors.containers11}</p>}
        </div>

        <div className={classes.wrapCustomSelect}>
          <p className={classes.title}>Вид відходів (11 м³)</p>
          <CustomSelect
            parentClassName={classes.selectWrapper}
            selectedClassName={classes.select}
            options={[
              { value: "plastic", label: "Пластик" },
              { value: "paper", label: "Папір" },
              { value: "glass", label: "Скло" },
              { value: "mixed", label: "Змішані" },
            ]}
            name="type11"
            value={formData.type11}
            onChange={handleChange}
            placeholder="Вид відходів (11 м³)"
          />
          {errors.type11 && <p className={classes.error}>{errors.type11}</p>}
        </div>
      </div>
    ),
  ].filter(Boolean);

  const lastFormStepIndex = steps.length - 1;
  const isSendStep = activeStep === lastFormStepIndex;

  const goNext = () => {
    if (!validateStep(activeStep)) return;

    if (isSendStep) {
      handleSubmit();
      return;
    }

    swiperRef.current.slideNext();
  };

  const goPrev = () => swiperRef.current.slidePrev();

  const handleSubmit = async () => {
    const telegramToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";
    const message = `
      Назва закладу: ${formData.name}
      Місто: ${formData.city}
      Вулиця: ${formData.street}
      Контактна особа: ${formData.contactPerson}
      Посада: ${formData.position}
      Телефон: ${formData.phone}
      Email: ${formData.email}
      Кількість дітей: ${formData.kidsCount}
      Контейнери: ${formData.container}
      ${formData.container === "yes" ? `
      120л: ${formData.containers120} (${formData.type120})
      11м³: ${formData.containers11} (${formData.type11})
      ` : ""}
      `;
    try {
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Telegram send error:", err);
    }
  };

  return (
    <div className={`${classes.formWrapper} ${isSubmitted ? classes.successWrapper : ""}`}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".customPagination" }}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        className={classes.swiper}
      >
        {steps.map((s, i) => (
          <SwiperSlide key={i}>{s}</SwiperSlide>
        ))}
      </Swiper>

      {!isSubmitted && (
        <div className={classes.navWrapper}>
          <button className={classes.btnNext} onClick={goNext}>
            {isSendStep ? "Надіслати" : "Далі"}
          </button>

          <div className={`${classes.customPagination} customPagination`}></div>

          {activeStep > 0 && <button className={classes.btnPrev} onClick={goPrev}>Повернутись назад</button>}
        </div>
      )}

      {isSubmitted && (
        <div className={classes.success}>
          <h2 className={classes.title}>Дякуємо!</h2>
          <p>Форма успішно відправлена. На ваш e-mail був надісланий номер поданої заявки.</p>
        </div>
      )}
    </div>
  );
}
