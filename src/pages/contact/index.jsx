import { Button, TextField } from "@mui/material";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import icon from "../../assets/images/aboutrighticons.svg";
import register from "../../assets/images/register.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="contact__register">
        <div className="contact">
          <div className="container">
            <div className="contact__wrapper">
              <div className="contact__left">
                <span className="contact__span"></span>
                <div className="contact__left__content">
                  <h2>КОНТАКТЫ</h2>
                  <span>Наш офис:</span>
                  <p>г.Москва ул. Ломоносова д. 16 9:00-21:00 Без выходных</p>
                  <p>+8 800 800 80 80</p>
                  <span>Прием звонков: с 9:00 до 18:00 Пн-Сб</span>
                  <span>Электронная почта:</span>
                  <p>ForestINVERONMENTAL@mail.ru</p>
                  <div className="contact__img__wrapper">
                    <FaSquareFacebook />
                    <IoLogoYoutube />
                    <RiInstagramFill />
                  </div>
                  <NavLink to={"/modul"}>
                    <Button variant="outlined">Связаться с нами</Button>
                  </NavLink>
                </div>
              </div>
              <div className="contact__right">
                <iframe
                  width="100%"
                  height="600"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${register})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="register"
        >
          <div className="section__Container">
            <div className="register__wrapper">
              <div className="register__title">
                <p>
                  получите расчет сметы с учетом стоимости работ и материалов
                  через 30 минут
                </p>
                <h2>Оставьте заявку прямо сейчас</h2>
              </div>
              <form className="register__form">
                <TextField
                  className="register__input"
                  id="filled-basic"
                  label="имя"
                  variant="filled"
                />
                <TextField
                  className="register__input"
                  id="filled-basic"
                  label="телефон"
                  variant="filled"
                />
                <Button variant="outlined">Outlined</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
