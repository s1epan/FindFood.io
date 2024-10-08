import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./dropMenu.module.css";
import cn from "classnames";
import { useEffect } from "react";

const DropMenu = ({ togleTheme, categor, func }) => {
  const [menu, setMenu] = useState("dropmenu-close");
  const [categories, setCategories] = useState("dropmenu-categories-close");
  const [dropInfo, setDropInfo] = useState("drop-info-close");
  const [data, setData] = useState([]);
  const [handleStrCategories, setHandleStrCategories] = useState("Beef");

  useEffect(() => {
    setData(categor);
  });

  function dropMenuOver() {
    if (menu === "dropmenu-close") {
      setMenu("dropmenu-open");
    } else {
      setMenu("dropmenu-close");
    }
  }

  function categoriesOver() {
    if (categories === "dropmenu-categories-close") {
      setCategories("dropmenu-categories-open");
    } else {
      setCategories("dropmenu-categories-close");
    }
  }

  function infoOver() {
    if (dropInfo === "drop-info-close") {
      setDropInfo("drop-info-open");
    } else {
      setDropInfo("drop-info-close");
    }
  }

  function dropMenuOut() {
    if (menu === "dropmenu-open") {
      setMenu("dropmenu-close");
    } else {
      setMenu("dropmenu-open");
    }
  }

  function categoriesOut() {
    if (categories === "dropmenu-categories-open") {
      setCategories("dropmenu-categories-close");
    } else {
      setCategories("dropmenu-categories-open");
    }
  }

  function dropMenuMove() {
    setMenu("dropmenu-open");
  }

  function categoriesMove() {
    setCategories("dropmenu-categories-open");
  }

  function infoMove() {
    setDropInfo("drop-info-open");
  }

  function handleCatefories() {
    func(handleStrCategories);
  }

  return (
    <div className={style["icon-menu"]} onMouseOver={dropMenuOver}>
      <img
        src={`${
          togleTheme === "header-toggle-right"
            ? "./drop-menu.png"
            : "./drop-menu-white.png"
        }`}
        alt=""
      />
      <div
        onMouseMove={dropMenuMove}
        onMouseOut={dropMenuOut}
        className={
          style[
            `${menu === "dropmenu-close" ? "dropmenu-close" : "dropmenu-open"}`
          ]
        }
      >
        <div className={style["links-menu"]}>
          {/* ABOUT LINK HERE====================================================================== */}
          <div
            onMouseMove={categoriesMove}
            onMouseOut={categoriesOver}
            className={cn(
              style[
                `${
                  togleTheme === "header-toggle-right"
                    ? "header-link"
                    : "header-link-dark"
                }`
              ]
            )}
          >
            <img className="icon" src="./menu-white.png" alt="" />
            <div>Categories</div>
            <div onMouseOver={categoriesOver}>
              <div
                className={
                  style[
                    `${
                      categories === "dropmenu-categories-close"
                        ? "dropmenu-categories-close"
                        : "dropmenu-categories-open"
                    }`
                  ]
                }
              >
                <div>
                  <wrap className={style["underline"]}>Categories</wrap>
                  <ul className={style["categories"]}>
                    {data.map((el) => (
                      <li
                        key={el.idCategory}
                        onClick={() => {
                          setHandleStrCategories(el.strCategory);
                          handleCatefories();
                        }}
                      >
                        {el.strCategory}
                        <img src={el.strCategoryThumb} />
                      </li>
                    ))}
                  </ul>
                  {/* <div
                    className={
                      style[
                        `${
                          dropInfo === "drop-info-close"
                            ? "drop-info-open"
                            : "drop-info-close"
                        }`
                      ]
                    }
                  ></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
