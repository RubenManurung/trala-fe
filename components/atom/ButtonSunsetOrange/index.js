import React from "react";
import styles from "./[ButtonSunsetOrange].module.css";

const Index = ({ children, ...nativeProps }) => {
  return (
    <button className={styles.btnSunsetOrange} {...nativeProps}>
      {children}
    </button>
  );
};

export default Index;
