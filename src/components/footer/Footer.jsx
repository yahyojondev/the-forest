import React from "react";
import { Routers } from "../../static/router";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

const Header = () => {
  const navbarItem = Routers?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.path}>{el.title}</NavLink>
    </li>
  ));

  return (
    <div className="footer">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <div className="navbar__left">
              <p>FOREST</p>
              <span>
                INVERONMENTAL <span></span>
              </span>
            </div>
            <p className="footer__text">© Все право защищены 2021</p>
            <div className="navbar__list">{navbarItem}</div>
          </div>
          <a href="#" className="top__btn">
            <MdOutlineVerticalAlignTop />
          </a>
          <div className="navbar__right">
            <FaFacebookSquare />
            <IoLogoYoutube />
            <RiInstagramFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
