import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Exit from "../Exit/Exit";
import { useState } from "react";
import DropMenu from "../DropmMenu/DropMenu";
import { useEffect } from "react";

const Header = (props) => {
  const [togleTheme, setTogleTheme] = useState("header-toggle-left");
  const [data, setData] = useState([]);
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
      <div className={style["header-icon-elements"]}>
        <img src="./icon.png" />
        <h1 className={style["header-icon-element-text"]}>FindFood</h1>
      </div>
      <div className={style["header-second-elements"]}>
        <div className={style["header-search"]}>
          <Search theme={togleTheme} />
        </div>
      </div>
      <Exit />
    </div>
  );
};

export default Header;
