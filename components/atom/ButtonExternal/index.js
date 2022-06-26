import React from "react";
import styles from "./[ButtonExternal].module.css";

const Index = ({ children, ...nativeProps }) => {
  return (
    <button className={styles.btnExternal} {...nativeProps}>
      {children}
    </button>
  );
};

export default Index;
