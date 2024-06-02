import React, { useRef } from "react";
import heroimg from "../../assets/images/hero.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import herorifghtimg from "../../assets/images/heroright.png";
import herobottomimg from "../../assets/images/herorightbottom.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          className="swiper"
          style={{
            backgroundImage: `url(${heroimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="hero">
            <div className="container">
              <div className="hero__wrapper">
                <div className="hero__top">
                  <div className="hero__top__left">
                    <span className="span"></span>
                    <div className="text__wrapper">
                      <h1>
                        посреди <span>леса</span> далеко от шума
                      </h1>
                      <p>
                        Равным образом реализация намеченных плановых заданий
                        широкому кругу (специалистов) участие в формировании
                      </p>
                      <NavLink to={"/contact"}>
                        <Button variant="outlined">Связаться с нами</Button>
                      </NavLink>
                    </div>
                  </div>
                  <img src={herorifghtimg} alt="" />
                </div>
                <div className="hero__bottom">
                  <div className="hero__bottom__left">
                    <span>01/</span>
                    <p>04</p>
                  </div>
                  <img src={herobottomimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
