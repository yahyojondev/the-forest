import React from "react";
import aboutrightimg from "../../assets/images/aboutright.png";
import about__topi__icon from "../../assets/images/aboutrighticons.svg";
import aboutbottomrightigm from "../../assets/images/aboutbottomright.png";
const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about">
      <div className="section__Container">
        <div className="about__wrapper">
          <div className="about__top">
            <div className="about__top__left">
              <h2>о нас</h2>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <div className="about__top__left__absolute">
                <span className="about__span"></span>
                <div className="about__top__left__absolute__right">
                  <h4>
                    <span>принципы</span> которых мы придерживаемся
                  </h4>
                  <div className="about__left__text__wrapper">
                    <p>Качества</p>
                    <span>
                      Равным образом реализация намеченных плановых заданий
                      широкому кругу (специалистов) участие в формировании вилла
                      в лесу
                    </span>
                  </div>
                  <div className="about__left__text__wrapper">
                    <p>Креативность</p>
                    <span>
                      Значимость этих проблем настолько очевидна, что реализация
                      намеченных плановых заданий
                    </span>
                  </div>
                  <div className="about__left__text__wrapper">
                    <p>Современность</p>
                    <span>
                      Значимость этих проблем настолько очевидна, что реализация
                      намеченных плановых заданий играет важную роль в
                      формировании позиций
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__top__right">
              <img
                className="about__top__right__img"
                src={aboutrightimg}
                alt=""
              />
              <img
                className="about__top__right__img__absolute"
                src={about__topi__icon}
                alt=""
              />
            </div>
          </div>
          <div className="about__bottom">
            <div className="about__bottom__left">
              <h2>Что мы можем?</h2>
              <div className="about__top__left__absolute">
                <span className="about__span"></span>
                <div className="about__top__left__absolute__right">
                  <h4>
                    <span>индивидуальное</span> проектирование вашех домов
                  </h4>
                  <p>
                    на выбор подходяший раззмер и конфигурация дома для разных
                    земельных участок и разного состава семьи ( молодая пара.
                    семья с маленьким ребенком, дом для большой семьи).Мы сможем
                    установить дом где угодно - на участке перед вышем домом, в
                    лесной зоне, на береге реки. Доставку осуществляет наша
                    компания
                  </p>
                  <button>
                    Подробнее об услугах
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="about__bottom__right">
              <img
                className="about__bottom__right__img"
                src={aboutbottomrightigm}
                alt=""
              />
              <img
                className="about__bottom__right__img__absolute"
                src={about__topi__icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
