import React from "react";
import styles from "./[BtnOutlineSunsetOrange].module.css";

const Index = ({ children, ...nativeProps }) => {
  return (
    <button className={styles.btnOutlineSunsetOrange} {...nativeProps}>
      {children}
    </button>
  );
};

export default Index;
