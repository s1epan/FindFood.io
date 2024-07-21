import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./dropMenu.module.css";

const DropMenu = ({ togleTheme }) => {
  const [menu, setMenu] = useState("dropmenu-close");

  function dropMenuOver() {
    if (menu === "dropmenu-close") {
      setMenu("dropmenu-open");
    } else {
      setMenu("dropmenu-close");
    }
  }

  function dropMenuOut() {
    if (menu === "dropmenu-open") {
      setMenu("dropmenu-close");
    } else {
      setMenu("dropmenu-open");
    }
  }

  function dropMenuMove() {
    setMenu("dropmenu-open");
  }

  return (
    <div className={style["icon-menu"]} onMouseOver={dropMenuOver}>
      <img
        src={`${
          togleTheme === "header-toggle-right"
            ? "./drop-menu.png"
            : "./drop-menu-white.png"
        }`}
        alt=""
      />
      <div
        onMouseMove={dropMenuMove}
        onMouseOut={dropMenuOut}
        className={
          style[
            `${menu === "dropmenu-close" ? "dropmenu-close" : "dropmenu-open"}`
          ]
        }
      >
        <div className={style["links-menu"]}>
          <Link
            className={
              style[
                `${
                  togleTheme === "header-toggle-right"
                    ? "header-link"
                    : "header-link-dark"
                }`
              ]
            }
            to={"/cart"}
          >
            <div>
              <img className="icon" src="./cart-white.png" alt="" />
            </div>
            Cart
          </Link>
          <Link
            className={
              style[
                `${
                  togleTheme === "header-toggle-right"
                    ? "header-link"
                    : "header-link-dark"
                }`
              ]
            }
            to={"/cart"}
          >
            <img className="icon" src="./menu-white.png" alt="" />
            Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
