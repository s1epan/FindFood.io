import React from "react";
import { Link } from "react-router-dom";
import style from "./join.module.css";

const Join = () => {
  return (
    <div className={style["join-bcg"]}>
      <div className={style["join-text"]}>FindFood!</div>
      <Link to={"/content"} className={style["join"]}>
        Join
      </Link>
    </div>
  );
};

export default Join;
