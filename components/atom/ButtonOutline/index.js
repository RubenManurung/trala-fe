import React from "react";
import styles from "./[ButtonOutline].module.css";

const Index = ({ border, fw, children, ...nativeProps }) => {
  return (
    <button
      className={styles.btnOutline}
      style={{ border: border, fontWeight: fw }}
      {...nativeProps}
    >
      {children}
    </button>
  );
};

export default Index;
