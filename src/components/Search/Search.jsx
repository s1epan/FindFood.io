import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const [theme, setTheme] = useState("input");

  useEffect(() => {
    setTheme(props.theme);
  });

  return (
    <div>
      <input
        className={
          styles[
            `${theme === "header-toggle-right" ? "search" : "search-dark"}`
          ]
        }
        type="text"
      />
      <img
        src={`${
          theme === "header-toggle-right"
            ? "./search.png"
            : "./search-white.png"
        }`}
        alt=""
      />
    </div>
  );
};

export default Search;
