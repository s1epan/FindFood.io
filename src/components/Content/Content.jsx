import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import style from "./content.module.css";
import axios from "axios";
import Toggle from "../Toggle/Toggle";

const Content = () => {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataFilterCategories, setDataFilterCategories] = useState();
  const [togleTheme, setTogleTheme] = useState("header-toggle-left");

  function toggleTheme() {
    if (togleTheme === "header-toggle-left") {
      setTogleTheme("header-toggle-right");
    } else {
      setTogleTheme("header-toggle-left");
    }
  }

  function handleCategories(str) {
    axios({
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`,
    }).then((res) => setDataFilterCategories(res.data.meals));
  }

  useEffect(() => {
    axios({
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    }).then((res) => setDataCategories(res.data.categories));
  }, []);

  return (
    <div className={style["content-open"]}>
      <Header
        categories={dataCategories}
        togleTheme={togleTheme}
        func={handleCategories}
      />
      <Toggle func={toggleTheme} theme={togleTheme} />
      <div
        className={
          style[
            `${
              togleTheme === "header-toggle-right" ? "content" : "content-dark"
            }`
          ]
        }
      >
        <div
          className={
            style[
              `${
                togleTheme === "header-toggle-right"
                  ? "content-meals"
                  : "content-meals-dark"
              }`
            ]
          }
        >
          {dataFilterCategories ? (
            dataFilterCategories.map((el) => (
              <div className={style["content-elements-meals"]} key={el.idMeal}>
                <div className={style["content-element-meals"]}>
                  {el.strMeal}
                  <img
                    className={
                      style[
                        `${
                          togleTheme === "header-toggle-right"
                            ? "content-meals-img"
                            : "content-meals-img-dark"
                        }`
                      ]
                    }
                    src={el.strMealThumb}
                    alt=""
                    width={250}
                  />
                  <div className={style["content-meals-price"]}>
                    <div>
                      {el.idMeal[Math.round(Math.random())] === `3` ? (
                        <div className={style["content-meals-second-price"]}>
                          <div className={style["content-meals-sale-img"]}>
                            SALE!
                          </div>
                          <div className={style["content-meals-red-price"]}>
                            3
                          </div>
                          <div className={style["content-meals-third-price"]}>
                            {Math.floor(el.idMeal / 10000)}
                          </div>
                        </div>
                      ) : (
                        `${Math.floor(el.idMeal / 10000)}`
                      )}
                      $
                    </div>
                    <button className={style["content-meals-price-choose"]}>
                      <img src="./cart-white.png" alt="" width={25} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={style["nf"]}>Choose categories or find meal</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
