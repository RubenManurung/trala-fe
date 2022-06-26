import React from "react";
import styles from "./[FormInput].module.css";

const InputContainer = (props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};

export default InputContainer;
