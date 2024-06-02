import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import consultationimg from "../../assets/images/consultation.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Consultation = () => {
  window.scrollTo(0, 0);

  return (
    <div
      style={{
        backgroundImage: `url(${consultationimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="consultation"
    >
      <div className="section__Container">
        <div className="consultation__wrapper">
          <div className="consultation__wrapper__left">
            <span className="consultation__span"></span>
            <div className="consultation__left__content">
              <div className="consultation__title">
                <h2>Консультация</h2>
                <p>Персональный менеджер свяжется с вами в течение 15 минут</p>
              </div>
              <form className="consulation__form">
                <TextField
                  className="consultation__input"
                  id="filled-basic"
                  label="имя"
                  variant="filled"
                />
                <TextField
                  className="consultation__input"
                  id="filled-basic"
                  label="E-mail"
                  variant="filled"
                />
                <TextField
                  className="consultation__input"
                  id="filled-basic"
                  label="телефон"
                  variant="filled"
                />
                <div className="input__wrapper">
                  <input className="checkbox" type="checkbox" />
                  <p>Согласен(на) с обработкой персональных данных</p>
                </div>
                <Button variant="outlined">ОСТАВИТЬ ЗАЯВКУ</Button>
              </form>
            </div>
          </div>
          <div className="consultation__wrapper__right">
            <span className="consultation__span"></span>
            <div className="consultation__wrapper__right__content">
              <div className="consultation__title">
                <h2>КОНТАКТЫ</h2>
                <p>Наш офис:</p>
              </div>
              <p>
                г.Москва ул. Ломоносова д. 16 9:00-21:00 Без выходных +8 800 800
                80 80
              </p>
              <div className="email__wrapper">
                <span>Электронная почта:</span>
                <p>ForestINVERONMENTAL@mail.ru</p>
              </div>
              <div className="media__wrapper">
                <FaSquareFacebook />
                <IoLogoYoutube />
                <RiInstagramFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
