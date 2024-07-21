import React from "react";
import Header from "../Header/Header";
import style from "./categories.module.css";

const Categories = () => {
  return (
    <div className={style["content-open"]}>
      <Header />
      <div className={style["content"]}></div>
    </div>
  );
};

export default Categories;
