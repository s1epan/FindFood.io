import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const [theme, setTheme] = useState("input");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTheme(props.theme);
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      props.searchFunc(search);
    }
  }

  return (
    <div className={styles["search"]}>
      <input
        className={
          styles[
            `${theme === "header-toggle-right" ? "search" : "search-dark"}`
          ]
        }
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      {/* <div className={styles["search-btn"]} onKeyDown={handleKey}> */}
      <button
        className={styles["search-btn"]}
        onClick={() => props.searchFunc(search)}
      >
        <img
          src={`${
            theme === "header-toggle-right"
              ? "./search.png"
              : "./search-white.png"
          }`}
          alt=""
        />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Search;
