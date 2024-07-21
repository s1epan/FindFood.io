import React from "react";
import Header from "../Header/Header";
import style from "./content.module.css";

const Content = () => {
  return (
    <div className={style["content-open"]}>
      <Header />
      <div className={style["content"]}></div>
    </div>
  );
};

export default Content;
