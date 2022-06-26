import React from "react";
import styles from "./[SmallTag].module.css";

const index = ({ title }) => {
  return <small className={styles.tagsm}>{title}</small>;
};

export default index;
