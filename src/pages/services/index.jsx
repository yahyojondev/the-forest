import { Button, TextField } from "@mui/material";
import React from "react";
import servicesimg from "../../assets/images/services.png";
import icon from "../../assets/images/aboutrighticons.svg";
import register from "../../assets/images/register.png";

const Services = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="services">
        <div className="container">
          <div className="services__wrapper">
            <div className="services__left">
              <span className="services__span"></span>
              <div className="services__left__content">
                <h2>
                  <span>Строительство</span> домов и коттеджей
                </h2>
                <p>
                  на выбор подходяший раззмер и конфигурация дома для разных
                  земельных участок и разного состава семьи ( молодая пара.
                  семья с маленьким ребенком, дом для большой семьи).Мы сможем
                  установить дом где угодно - на участке перед вышем домом, в
                  лесной зоне, на береге реки. Доставку осуществляет наша
                  компания Преимущества Комплексный подряд. Вы можете заказать
                  выполнение всех работ в нашей компании: от проектирования до
                  электромонтажа в готовом здании. «АНКА техник» располагает
                  парком спецтехники, штатом специалистов. Возможно
                  сотрудничество на условиях субподряда. Качество. Мы учитываем
                  характеристики участка, соблюдаем ШНК, другие нормы,
                  используем надежные строительные технологии. Сотрудничество.
                  Компания «АНКА техник» подберет технологии строительства,
                  стройматериалы, обеспечит их поставку. Запланированные работы
                  выполняются без нарушения графика. Грамотная организация
                  строительства позволяет возводить коттеджи и таунхаусы всего
                  за несколько месяцев.
                </p>
                <p>
                  Сопутствующие услуги. Мы выполняем изыскания, топосъемку,
                  подготовку территории к застройке, демонтаж старых зданий.{" "}
                </p>
                <Button variant="outlined">Подробнее</Button>
              </div>
            </div>
            <div className="services__right">
              <img className="services__img" src={servicesimg} alt="" />
              <img className="services__img__absolute" src={icon} alt="" />
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
    </>
  );
};

export default Services;
