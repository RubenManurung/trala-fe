import Image from "next/image";
import React from "react";
import styles from "./[Footer].module.css";

const Index = () => {
  return (
    <footer className={styles.footer}>
      <p>Trala ©2021. All rights reserved.</p>
      <div>
        <span>Follow Kami di </span>
        <ul>
          <li>
            <Image src="/images/fb.svg" width={15} height={15} alt="facebook" />
          </li>
          <li>
            <Image
              src="/images/ig.svg"
              width={15}
              height={15}
              alt="instagram"
            />
          </li>
          <li>
            <Image src="/images/yt.svg" width={15} height={15} alt="youtube" />
          </li>
          <li>
            <Image
              src="/images/twitter.svg"
              width={15}
              height={15}
              alt="twitter"
            />
          </li>
          <li>
            <Image
              src="/images/linkedin.svg"
              width={15}
              height={15}
              alt="linkedin"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Index;
