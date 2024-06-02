import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import productimg1 from "../../assets/images/product1.png";
import productimg2 from "../../assets/images/product2.png";
import productimg3 from "../../assets/images/product3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay, Navigation } from "swiper/modules";
import partnerimg1 from "../../assets/images/partner1.png";
import partnerimg2 from "../../assets/images/partner2.png";
import partnerimg3 from "../../assets/images/partner3.png";
import partnerimg4 from "../../assets/images/partner4.png";
import partnerimg5 from "../../assets/images/partner5.png";
import partnerimg6 from "../../assets/images/partner6.png";
import partnerimg7 from "../../assets/images/partner7.png";
import partnerimg8 from "../../assets/images/partner8.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Product = () => {
  return (
    <div className="product">
      <div className="product__wrapper">
        <div className="product__wrapper__top">
          <div className="section__Container">
            <div className="product__title">
              <h2>Проекты</h2>
              <div className="product__title__absolute">
                <span></span>
                <h2>проекты компании</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="products__cards">
              <Swiper
                slidesPerView={1}
                spaceBetween={35}
                loop={true}
                navigation={true}
                autoplay={true}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Pagination, Autoplay, Navigation]}
                className="mySwiper "
                id="swiper__one"
              >
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide slide__center"
                  style={{
                    backgroundImage: `url(${productimg2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                slidesPerView={2}
                spaceBetween={35}
                loop={true}
                navigation={true}
                autoplay={true}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Pagination, Autoplay, Navigation]}
                className="mySwiper "
                id="swiper__two"
              >
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide slide__center"
                  style={{
                    backgroundImage: `url(${productimg2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                slidesPerView={3}
                spaceBetween={35}
                loop={true}
                navigation={true}
                autoplay={true}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Pagination, Autoplay, Navigation]}
                className="mySwiper "
                id="swiper__three"
              >
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide slide__center"
                  style={{
                    backgroundImage: `url(${productimg2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper__slide"
                  style={{
                    backgroundImage: `url(${productimg2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="product__card">
                    <h3>лесный дом в Новосибирске |</h3>
                    <FaAngleRight />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="product__wrapper__top">
          <div className="section__Container">
            <div className="product__title">
              <h2>ПАРТНЕРЫ</h2>
              <div className="product__title__absolute">
                <span></span>
                <h2>проекты компании</h2>
              </div>
            </div>
            <div className="product__bottom__cards">
              <img src={partnerimg1} alt="" />
              <img src={partnerimg2} alt="" />
              <img src={partnerimg3} alt="" />
              <img src={partnerimg4} alt="" />
              <img src={partnerimg5} alt="" />
              <img src={partnerimg6} alt="" />
              <img src={partnerimg7} alt="" />
              <img src={partnerimg8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
