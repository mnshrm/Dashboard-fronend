import React from "react";
import ReactDOM from "react-dom";
import styles from "./Background.module.css";

const BG = () => {
  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

const Background = () => {
  return ReactDOM.createPortal(<BG />, document.getElementById("background"));
};
export default Background;
