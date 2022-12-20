import React from "react";
import styles from "../Form.module.css";
import Button from "../../UI/Button";

const LogIn = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.optionChangeHandler();
  };

  return (
    <form className={styles["card-form"]}>
      <h1>Log in</h1>
      <label htmlFor="email">Email</label>
      <input type={"email"} placeholder="xxx@gmail.com" />
      <label htmlFor="password">Password</label>
      <input type={"password"} />
      <Button type="submit">Sign in</Button>
      <Button onClick={clickHandler} className={styles["sign-up"]}>
        Create new Account
      </Button>

      <hr />
      <div className={styles["alt-option"]}>
        <i className={`${styles.icon} fa-brands fa-google`}></i>
        <span>Log in with google</span>
      </div>
    </form>
  );
};

export default LogIn;
