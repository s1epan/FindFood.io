import React, { useEffect } from "react";
import style from "./toggle.module.css";

import { useState } from "react";

const Toggle = (props) => {
  const [togleTheme, setTogleTheme] = useState("header-toggle-left");

  // function toggleTheme() {
  //   if (togleTheme === "header-toggle-left") {
  //     setTogleTheme("header-toggle-right");
  //   } else {
  //     setTogleTheme("header-toggle-left");
  //   }
  // }

  useEffect(() => {
    setTogleTheme(props.theme);
  });

  return (
    <div
      className={
        style[
          `${
            togleTheme === "header-toggle-right"
              ? "header-toggle"
              : "header-toggle-dark"
          }`
        ]
      }
    >
      <button
        onClick={props.func}
        className={
          style[
            `${
              togleTheme === "header-toggle-left"
                ? "header-toggle-right"
                : "header-toggle-left"
            }`
          ]
        }
      ></button>
    </div>
  );
};

export default Toggle;
