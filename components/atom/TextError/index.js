import React from "react";
import styles from "./[TextError].module.css";

const TextError = (props) => {
  const { children } = props;
  return <p className={styles.errorText}>{children}</p>;
};

export default TextError;
