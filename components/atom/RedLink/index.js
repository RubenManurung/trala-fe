import Link from "next/link";
import React from "react";
import styles from "./[RedLink].module.css";

const Index = ({ href, children, ...nativeProps }) => {
  return (
    <Link href={href} {...nativeProps}>
      <a className={styles.redLink}>{children}</a>
    </Link>
  );
};

export default Index;
