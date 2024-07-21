import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import style from "./content.module.css";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    }).then((res) => setData(res.data.categories));
  }, []);

  return (
    <div className={style["content-open"]}>
      <Header categories={data} />
      <div className={style["content"]}></div>
    </div>
  );
};

export default Content;
