import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Exit from "../Exit/Exit";
import { useState } from "react";
import DropMenu from "../DropmMenu/DropMenu";

const Header = () => {
  const [togleTheme, setTogleTheme] = useState("header-toggle-left");

  function toggleTheme() {
    if (togleTheme === "header-toggle-left") {
      setTogleTheme("header-toggle-right");
    } else {
      setTogleTheme("header-toggle-left");
    }
  }

  return (
    <div
      className={
        style[
          `${togleTheme === "header-toggle-left" ? "header-dark" : "header"}`
        ]
      }
    >
      <DropMenu togleTheme={togleTheme} />
      <div className={style["header-icon-elements"]}>
        <img src="./icon.png" />
        <h1 className={style["header-icon-element-text"]}>FindFood</h1>
      </div>
      <div className={style["header-second-elements"]}>
        <div className={style["header-search"]}>
          <Search theme={togleTheme} />
        </div>
        <div
          className={
            style[
              `${
                togleTheme === "header-toggle-right"
                  ? "header-toggle"
                  : "header-toggle-dark"
              }`
            ]
          }
        >
          <button
            onClick={toggleTheme}
            className={
              style[
                `${
                  togleTheme === "header-toggle-left"
                    ? "header-toggle-right"
                    : "header-toggle-left"
                }`
              ]
            }
          ></button>
        </div>
      </div>
      <Exit />
    </div>
  );
};

export default Header;
