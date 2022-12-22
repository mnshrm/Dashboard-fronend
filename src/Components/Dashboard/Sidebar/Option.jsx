import React, { useContext } from "react";
import styles from "./Option.module.css";
import StatisticContext from "../../../Store/StatisticContext";

const Option = (props) => {
  const ctx = useContext(StatisticContext);
  const chosenOption = ctx.option;
  const changeOption = (e) => {
    ctx.setOption(props.index);
  };

  return (
    <li
      onClick={changeOption}
      className={`${chosenOption === props.index ? styles.chosen : ""}`}
    >
      <i className={props.icon}></i> {props.heading}
    </li>
  );
};

export default Option;
