import React from "react";
import descriptionimg from "../../assets/images/kotej.png";
import personimg from "../../assets/images/person.png";
import { Button } from "@mui/material";
const Description = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${descriptionimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="description"
    >
      <div className="section__Container">
        <div className="description__wrapper">
          <div className="description__wrapper__left">
            <span></span>
            <div className="description__text__content">
              <h2>Описания котежа</h2>
              <p>
                С другой стороны новая модель организационной деятельности
                играет важную роль в формировании системы обучения кадров,
                соответствует насущным потребностям. Повседневная практика
                показывает, что постоянный количественный рост и сфера нашей
                активности.Повседневная практика показывает, что начало
                повседневной работы по формированию позиции требуют от нас
                анализа системы обучения кадров, соответствует насущным
                потребностям. Таким образом сложившаяся структура организации
                требуют определения и уточнения соответствующий условий
                активизации. Разнообразный и богатый опыт сложившаяся структура
                организации позволяет оценить значение новых предложений.. Таким
                образом сложившаяся структура организации требуют определения и
                уточнения соответствующий условий активизации.
              </p>
            </div>
          </div>
          <div className="description__wrapper__right">
            <ul className="description__list">
              <li>
                <p>АДРЕС</p>
                <span>г.Краснодар, Чиланзарский район, 24-7-7</span>
              </li>
              <li>
                <p>ПЛОЩАДЬ</p>
                <span>49 215 М2</span>
              </li>
              <li>
                <p>МАТЕРИАЛЫ</p>
                <span>Битон, цимент, гипс</span>
              </li>
              <li>
                <p>СРОК</p>
                <span>Построенно за 12 месяцев</span>
              </li>
              <li>
                <p>ЭТАЖНОСТЬ</p>
                <span>24 этажей</span>
              </li>
            </ul>
            <div className="description__right__bottom__wrapper">
              <Button variant="outlined">Рассчитать подобный проек</Button>
              <div className="img__text__wrapper">
                <img src={personimg} alt="" />
                <p>
                  Наши эксперты рассчитают для вас стоимость строительства
                  объект 45 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
