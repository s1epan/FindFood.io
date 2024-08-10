import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Exit from "../Exit/Exit";
import { useState } from "react";
import DropMenu from "../DropmMenu/DropMenu";
import Toggle from "../Toggle/Toggle";

import { useEffect } from "react";

const Header = (props) => {
  const [togleTheme, setTogleTheme] = useState("header-toggle-left");
  const [data, setData] = useState([]);
  const [countMeals, setCountMeals] = useState(0);
  // const [loaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   if (loaded) return;
  //   //получение data
  //   setData(props.categories.map((el) => el.strCategory));
  //   setLoaded(true);
  // }, [loaded]);

  useEffect(() => {
    setData(props.categories);
    setTogleTheme(props.togleTheme);
    setCountMeals(props.count);
  });

  // function toggleTheme() {
  //   if (togleTheme === "header-toggle-left") {
  //     setTogleTheme("header-toggle-right");
  //   } else {
  //     setTogleTheme("header-toggle-left");
  //   }
  // }

  return (
    <div
      className={
        style[
          `${togleTheme === "header-toggle-left" ? "header-dark" : "header"}`
        ]
      }
    >
      <DropMenu togleTheme={togleTheme} categor={data} func={props.func} />
      <div className={style["header-counting-meals-cart"]}>
        <a
          className={
            style[
              `${
                togleTheme === "header-toggle-right"
                  ? "header-link"
                  : "header-link-dark"
              }`
            ]
          }
          // to={"/content/cart"}
        >
          <div>
            <img
              className={style["icon"]}
              src={`${
                togleTheme === "header-toggle-left"
                  ? "cart-white.png"
                  : "cart.png"
              }`}
              alt=""
            />
          </div>
        </a>
        {/* <img src="./cart-white.png" alt="" /> */}
        {countMeals}
      </div>
      <div className={style["header-icon-elements"]}>
        <img className={style["header-main-icon"]} src="./icon.png" />
        <div className={style["header-icon-element-text"]}>FindFood</div>
      </div>
      <div className={style["header-second-elements"]}>
        <div className={style["header-search"]}>
          <Search theme={togleTheme} searchFunc={props.searchFunc} />
        </div>
      </div>
      <div></div>
      {/* <Exit /> */}
      <Toggle />
    </div>
  );
};

export default Header;
