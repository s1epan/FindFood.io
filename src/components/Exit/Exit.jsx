import React from "react";
import style from "./exit.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Link className={style["exit-link"]} to={"/"}>
      <div className={style["exit"]}>
        <img src="./exit.png"></img>
      </div>
    </Link>
  );
};

export default SideBar;
