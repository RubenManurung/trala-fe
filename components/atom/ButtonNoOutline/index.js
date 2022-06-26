import React from "react";
import styles from "./[ButtonNoOutline].module.css";

const Index = ({ children, ...nativeProps }) => {
  return (
    <button className={styles.btnNoOutline} {...nativeProps}>
      {children}
    </button>
  );
};

export default Index;
