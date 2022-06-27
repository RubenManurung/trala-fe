import React from "react";
import styles from "./[Label].module.css";

const Index = (props) => {
  const { title, activeInputElement, errorLabel } = props;

  return (
    <label
      className={styles.textLabel}
      style={{
        color: activeInputElement ? "#068EC8" : errorLabel ? "#FF0000" : "",
      }}
      active={activeInputElement.toString()}
      // errorlabel={errorLabel}
    >
      {title}
    </label>
  );
};

export default Index;
