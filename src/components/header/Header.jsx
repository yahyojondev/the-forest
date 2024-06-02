import React, { useState } from "react";
import { Routers } from "../../static/router";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";

const Header = () => {
  const [see, setSee] = useState(false);

  const navbarItem = Routers?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.path}>{el.title}</NavLink>
    </li>
  ));

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 143) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header__bg" : "header"}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <div className="navbar__left">
              <p>FOREST</p>
              <span>
                INVERONMENTAL <span></span>
              </span>
            </div>
            <div className="navbar__list">{navbarItem}</div>
          </div>
          <div className="navbar__right">
            <FaFacebookSquare />
            <IoLogoYoutube />
            <RiInstagramFill />
          </div>
          <button
            value={see}
            onClick={(e) => setSee((p) => !p)}
            className="navbar__burger"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
      {see ? (
        <div className="navbar__burger__list">
          <button
            value={see}
            onClick={(e) => setSee((p) => !p)}
            className="exit"
          >
            <FiX />
          </button>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/services">Услуги</a>
          </li>
          <li>
            <a href="/project">Проекты</a>
          </li>
          <li>
            <a href="/consultation">Консультация</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
          <li className="navbar__fixed__media">
            <FaFacebookSquare />
            <IoLogoYoutube />
            <RiInstagramFill />
          </li>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
