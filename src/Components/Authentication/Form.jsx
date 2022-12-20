import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Form.module.css";
import LogIn from "./Form/LogIn";
import SignUp from "./Form/SignUp";

const Form = () => {
  const [option, setOption] = useState(0);

  const onClickHandler = () => {
    setOption((pv) => (pv === 0 ? 1 : 0));
  };

  return (
    <Card className={styles["form-bg-card"]}>
      {option === 0 ? (
        <LogIn optionChangeHandler={onClickHandler} />
      ) : (
        <SignUp optionChangeHandler={onClickHandler} />
      )}
    </Card>
  );
};

export default Form;
