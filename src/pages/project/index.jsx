import { Button } from "@mui/material";
import React from "react";
import projectimg from "../../assets/images/projecthero.png";
import Description from "../../components/description/Description";
import Product from "../../components/product/Product";
import Consultation from "../consultation";

const Project = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="project">
        <div className="project__wrapper">
          <div className="project__wrapper__hero">
            <div className="section__Container">
              <div className="project__wrapper__hero__left">
                <span className="project__span"></span>
                <div className="project__hero__left__text__wrapper">
                  <div className="project__left__text__top">
                    <h2>котеж в краснодаре</h2>
                    <p>
                      Равным образом реализация намеченных плановых заданий
                      широкому кругу (специалистов) участи кругу (специалистов)
                      участи
                    </p>
                    <Button variant="outlined">Связаться с нами</Button>
                  </div>
                  <div className="project__left__text__bottom">
                    <span>01/</span>
                    <p>04</p>
                  </div>
                </div>
              </div>
            </div>
            <img className="project__hero__img" src={projectimg} alt="" />
          </div>
        </div>
        <Description />
        <Product />
        <Consultation />
      </div>
    </>
  );
};

export default Project;
