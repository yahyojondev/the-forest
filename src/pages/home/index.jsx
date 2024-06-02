import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../about/index";
import numberbg from "../../assets/images/little.png";
import Product from "../../components/product/Product";
import Consultation from "../consultation/index";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className="home">
      <Hero />
      <About />
      <div
        style={{
          backgroundImage: `url(${numberbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="number"
      >
        <div className="section__Container">
          <div className="number__wrapper">
            <div className="number__text__wrapper">
              <p>9</p>
              <span>
                лет опыта <br /> работы
              </span>
            </div>
            <div className="number__text__wrapper">
              <p>13</p>
              <span>крутых дизайнеров и архитекторов</span>
            </div>
            <div className="number__text__wrapper">
              <p>103</p>
              <span>проектов во всех регионах страны</span>
            </div>
          </div>
        </div>
      </div>
      <Product />
      <Consultation />
    </div>
  );
};

export default Home;
