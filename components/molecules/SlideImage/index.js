import React from "react";
import styles from "./[SlideImage].module.css";

const Index = (props) => {
  const { sliders, ...nativeProps } = props;
  return (
    <section {...nativeProps}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${sliders?.imageURL?.desktop})`,
        }}
      >
        <div className={styles.item}></div>
      </div>
      <h1 className={styles.title}>{sliders.title}</h1>
    </section>
  );
};

export default Index;
