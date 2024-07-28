import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import style from "./content.module.css";
import axios from "axios";
import Toggle from "../Toggle/Toggle";
import classNames from "classnames";

const Content = () => {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataFilterCategories, setDataFilterCategories] = useState();
  const [togleTheme, setTogleTheme] = useState("header-toggle-left");
  const [countMeals, setCountMeals] = useState(0);
  const [state, setState] = useState("");

  function toggleTheme() {
    if (togleTheme === "header-toggle-left") {
      setTogleTheme("header-toggle-right");
    } else {
      setTogleTheme("header-toggle-left");
    }
  }

  // function handleButton() {
  //   if (state === "cart") {
  //     setState("cancel");
  //   } else if (state === "cancel") {
  //     setState("cart");
  //   }

  //   setCountMeals(countMeals + 1);
  // }

  // function handleCountMeals() {
  //   setCountMeals(countMeals + 1);

  //   let meal = document.getElementById('name-meal').innerText
  //   if (meal === )
  // }

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

  function handleSearch(str) {
    axios({
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`,
    }).then((res) => setDataFilterCategories(res.data.meals));
  }

  return (
    <div className="container">
      <div className={style["content-open"]}>
        <Header
          count={countMeals}
          searchFunc={handleSearch}
          categories={dataCategories}
          togleTheme={togleTheme}
          func={handleCategories}
        />
        <Toggle func={toggleTheme} theme={togleTheme} />
        <div
          className={
            style[
              `${
                togleTheme === "header-toggle-right"
                  ? "content"
                  : "content-dark"
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
                <div
                  className={style["content-elements-meals"]}
                  key={el.idMeal}
                >
                  <div
                    // onClick={(e) => {
                    //   console.log(e.target.innerText);
                    // }}
                    className={style["content-element-meals"]}
                  >
                    {el.strMeal.length <= 16 ? (
                      <div
                        className={style["handle-scrollbar-content-text-meals"]}
                        name="name-meal"
                        id="name-meal"
                        onClick={(e) => {
                          setState(e.target.innerText);
                        }}
                        // ==================================================================== here
                      >
                        {el.strMeal}
                      </div>
                    ) : (
                      <div
                        onClick={(e) => {
                          setState(e.target.innerText);
                        }}
                        // id="name-meal"
                        className={style["handle-size-content-text-meals"]}
                      >
                        {el.strMeal}
                        {/* {console.log(el.strMeal.length)} */}
                      </div>
                    )}
                    <img
                      id="img-meal"
                      className={classNames(
                        style[
                          `${
                            togleTheme === "header-toggle-right"
                              ? "content-meals-img"
                              : "content-meals-img-dark"
                          }`
                        ],
                        style[
                          `${
                            state === el.strMeal
                              ? "choosed-meal"
                              : "content-meals-img-dark"
                          }`
                        ]
                      )}
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
                      <div>
                        <button
                          // onClick={() => {
                          //   setCountMeals(countMeals + 1);

                          //   let meal =
                          //     document.getElementById("name-meal").innerText;
                          //   console.log(meal);
                          //   console.log(el.strMeal);
                          //   if (state === el.strMeal) {
                          //     document.getElementsById(
                          //       `name-meal`
                          //     ).style.cssText = `
                          //       border: 5px solid green;
                          //       box-shadow: 0 0 15px green;
                          //     `;
                          //   } else {
                          //     return;
                          //   }
                          // }}
                          className={style["content-meals-price-choose"]}
                        >
                          <img src={"./cart-white.png"} alt="" width={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={style["nf"]}>
                <wrap>Something is wrong</wrap> <br />{" "}
                <wrap>Choose categories or find meal with searchbar</wrap>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
