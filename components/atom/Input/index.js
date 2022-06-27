import React from "react";
import styles from "./[Input].module.css";

const Index = (props) => {
  const {
    inputName,
    inputType,
    errorInput,
    inputPlaceHolder,
    inputValue,
    ...nativeProps
  } = props;

  return (
    <input
      className={`${styles.inputSm} ${
        errorInput ? styles.inputError : styles.inputNormal
      }`}
      id={inputName}
      type={inputType}
      value={inputValue}
      name={inputName}
      // errorinput={errorInput}
      autoComplete="off"
      placeholder={inputPlaceHolder}
      {...nativeProps}
    />
  );
};

export default Index;
