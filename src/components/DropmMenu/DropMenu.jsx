import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./dropMenu.module.css";
import cn from "classnames";

const DropMenu = ({ togleTheme }) => {
  const [menu, setMenu] = useState("dropmenu-close");
  const [categories, setCategories] = useState("dropmenu-categories-close");

  function dropMenuOver() {
    if (menu === "dropmenu-close") {
      setMenu("dropmenu-open");
    } else {
      setMenu("dropmenu-close");
    }
  }

  function categoriesOver() {
    if (categories === "dropmenu-categories-close") {
      setCategories("dropmenu-categories-open");
    } else {
      setCategories("dropmenu-categories-close");
    }
  }

  function dropMenuOut() {
    if (menu === "dropmenu-open") {
      setMenu("dropmenu-close");
    } else {
      setMenu("dropmenu-open");
    }
  }

  function categoriesOut() {
    if (categories === "dropmenu-categories-open") {
      setCategories("dropmenu-categories-close");
    } else {
      setCategories("dropmenu-categories-open");
    }
  }

  function dropMenuMove() {
    setMenu("dropmenu-open");
  }

  function categoriesMove() {
    setCategories("dropmenu-categories-open");
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
            to={"/content/cart"}
          >
            <div>
              <img className="icon" src="./cart-white.png" alt="" />
            </div>
            Cart
          </Link>
          <div
            onMouseMove={categoriesMove}
            onMouseOut={categoriesOver}
            className={cn(
              style[
                `${
                  togleTheme === "header-toggle-right"
                    ? "header-link"
                    : "header-link-dark"
                }`
              ]
            )}
          >
            <img className="icon" src="./menu-white.png" alt="" />
            <div onMouseOver={categoriesOver}>
              Categories
              <div
                className={
                  style[
                    `${
                      categories === "dropmenu-categories-close"
                        ? "dropmenu-categories-close"
                        : "dropmenu-categories-open"
                    }`
                  ]
                }
              >
                Categories
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
