import React from "react";
import styles from "./[Mediumtag].module.css";

const index = ({ title, color, bgColor }) => {
  return (
    <small className={styles.tagmd} style={{ color, backgroundColor: bgColor }}>
      {title}
    </small>
  );
};

export default index;
