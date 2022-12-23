import React, { useContext, useState } from "react";
import styles from "../Form.module.css";
import Button from "../../UI/Button";
import UserContext from "../../../Store/UserContext";

const DEFAULT_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const SignUp = (props) => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [invalid, setInvalid] = useState({ status: false, message: "" });

  const ctx = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const nameLength = formData.name.trim().length;
    const passLength = formData.password.trim().length;
    const emailIsValid = formData.email.trim().includes("@");
    if (nameLength >= 4 && passLength >= 8 && emailIsValid) {
      ctx.setLoading(true);
      const res = await fetch(
        "https://grand-gnome-5e4f7a.netlify.app/api/register",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const resData = await res.json();
      if (resData.success) {
        localStorage.setItem("token", resData.token);
        console.log(resData.user);
        ctx.setUser({ ...resData.user });
        setFormData({ name: "", email: "", password: "" });
      } else if (res.status === 409) {
        setInvalid({
          status: true,
          message: "User already exists with the given email id",
        });
      }
      setTimeout(() => {
        ctx.setLoading(false);
      }, 1000);
    } else if (nameLength === 0 && passLength === 0) {
      setInvalid({
        status: true,
        message: "Fields can't be empty",
      });
    } else if (nameLength < 4) {
      setInvalid({
        status: true,
        message: "Name should have more than 3 characters",
      });
    } else if (!emailIsValid) {
      setInvalid({
        status: true,
        message: "Enter valid mail",
      });
    } else if (passLength < 8) {
      setInvalid({
        status: true,
        message: "password should have more than 7 characters",
      });
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    props.optionChangeHandler();
  };

  const nameChange = (e) => {
    const updatedName = e.target.value;
    setFormData((pv) => {
      return { ...pv, name: updatedName };
    });
  };
  const emailChange = (e) => {
    const updatedEmail = e.target.value;
    setFormData((pv) => {
      return { ...pv, email: updatedEmail };
    });
  };
  const passChange = (e) => {
    const updatedPass = e.target.value;
    setFormData((pv) => {
      return { ...pv, password: updatedPass };
    });
  };

  return (
    <form className={styles["card-form"]}>
      <h1>Sign up </h1>

      <label htmlFor="name">Name</label>
      <input
        required
        onChange={nameChange}
        value={formData.name}
        type={"text"}
        placeholder="Sam"
      />

      <label htmlFor="email">Email</label>
      <input
        required
        value={formData.email}
        type={"email"}
        onChange={emailChange}
        placeholder="xxx@gmail.com"
      />

      <label htmlFor="password">Password</label>
      <input
        value={formData.password}
        onChange={passChange}
        type={"password"}
      />
      {invalid.status && (
        <span style={{ color: "red" }}>{invalid.message}</span>
      )}
      <Button
        onClick={submitHandler}
        className={styles["sign-up"]}
        type="submit"
      >
        Create new Account
      </Button>
      <Button onClick={clickHandler}>Sign in</Button>
    </form>
  );
};

export default SignUp;
