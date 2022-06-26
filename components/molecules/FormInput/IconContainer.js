import React from "react";
import styles from "./[FormInput].module.css";

const IconContainer = (props) => {
  const { children } = props;
  return <div className={styles.eyeIcon}>{children}</div>;
};

export default IconContainer;
