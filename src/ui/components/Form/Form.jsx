"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import classes from "./Form.module.scss";

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

  const totalSteps = 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (stepIndex) => {
    let newErrors = {};

    if (stepIndex === 0) {
      if (!formData.name) newErrors.name = "Вкажіть назву закладу";
      if (!formData.city) newErrors.city = "Вкажіть населений пункт";
      if (!formData.street) newErrors.street = "Вкажіть вулицю";
    }

    if (stepIndex === 1) {
      if (!formData.contactPerson) newErrors.contactPerson = "Вкажіть контактну особу";
      if (!formData.position) newErrors.position = "Вкажіть посаду";
      if (!formData.phone) newErrors.phone = "Вкажіть телефон";
      if (!formData.email) newErrors.email = "Вкажіть email";
    }

    if (stepIndex === 2) {
      if (!formData.kidsCount) newErrors.kidsCount = "Вкажіть кількість дітей";
    }

    if (stepIndex === 3) {
      if (!formData.container) newErrors.container = "Оберіть відповідь";
    }

    if (stepIndex === 4 && formData.container === "yes") {
      if (!formData.containers120) newErrors.containers120 = "Вкажіть кількість контейнерів 120 л";
      if (!formData.type120) newErrors.type120 = "Оберіть тип відходів 120 л";
      if (!formData.containers11) newErrors.containers11 = "Вкажіть кількість контейнерів 11 м³";
      if (!formData.type11) newErrors.type11 = "Оберіть тип відходів 11 м³";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (validateStep(activeStep)) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEND DATA", formData);
    swiperRef.current.slideNext();
  };

  return (
    <div className={classes.formWrapper}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".customPagination",
        }}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        className={classes.swiper}
      >
        {/* step 1 */}
        <SwiperSlide>
          <div className={classes.step}>
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
          </div>
        </SwiperSlide>

        {/* step 2 */}
        <SwiperSlide>
          <div className={classes.step}>
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
          </div>
        </SwiperSlide>

        {/* step 3 */}
        <SwiperSlide>
          <div className={classes.step}>
            {/* Кількість дітей */}
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

            {/* Чи є контейнери? */}
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
          </div>
        </SwiperSlide>

        {/* step 4 */}
        <SwiperSlide>
          <div className={classes.step}>
            {formData.container === "yes" ? (
              <>
                <input
                  className={classes.input}
                  type="number"
                  name="containers120"
                  placeholder="Кількість контейнерів 120 л"
                  value={formData.containers120}
                  onChange={handleChange}
                />
                {errors.containers120 && <p className={classes.error}>{errors.containers120}</p>}

                <select name="type120" value={formData.type120} onChange={handleChange}>
                  <option value="">Вид відходів (120 л)</option>
                  <option value="plastic">Пластик</option>
                  <option value="paper">Папір</option>
                  <option value="glass">Скло</option>
                  <option value="mixed">Змішані</option>
                </select>
                {errors.type120 && <p className={classes.error}>{errors.type120}</p>}

                <input
                  className={classes.input}
                  type="number"
                  name="containers11"
                  placeholder="Кількість контейнерів 11 м³"
                  value={formData.containers11}
                  onChange={handleChange}
                />
                {errors.containers11 && <p className={classes.error}>{errors.containers11}</p>}

                <select name="type11" value={formData.type11} onChange={handleChange}>
                  <option value="">Вид відходів (11 м³)</option>
                  <option value="plastic">Пластик</option>
                  <option value="paper">Папір</option>
                  <option value="glass">Скло</option>
                  <option value="mixed">Змішані</option>
                </select>
                {errors.type11 && <p className={classes.error}>{errors.type11}</p>}
              </>
            ) : (
              <p>Контейнери відсутні</p>
            )}
          </div>
        </SwiperSlide>

        {/* step 6 (finish) */}
        <SwiperSlide>
          <div className={classes.success}>
            <h2 className={classes.title}>Дякуємо!</h2>
            <p>Форма успішно відправлена. На ваш e-mail був надісланий номер поданої заявки.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={classes.navWrapper}>
        {activeStep < totalSteps - 1 && (
          <button className={classes.btnNext} onClick={goNext}>
            Далі
          </button>
        )}
        {activeStep < totalSteps - 1 && (
          <div className={`${classes.customPagination} customPagination`}></div>
        )}
        {activeStep > 0 && activeStep < totalSteps - 1 && (
          <button className={classes.btnPrev} onClick={goPrev}>
            Повернутись назад
          </button>
        )}
      </div>
    </div>
  );
}