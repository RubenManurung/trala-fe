import Image from "next/image";
import React from "react";
import styles from "./[Skills].module.css";
import ButtonOutlineSunsetOrange from "@components/atom/ButtonOutlineSunsetOrange";
import TitleUnderline from "@components/atom/TitleUnderline";

const Index = () => {
  return (
    <>
      <section className={styles.containerSkills}>
        <Image src="/images/ksm.png" width={670} height={435} alt="ksm" />
        <div className={styles.subContainer + " " + styles.start}>
          <h1>Keterampilan Sukses Milenial (KSM)</h1>
          <TitleUnderline />
          <p>
            Keterampilan pengembangan diri untuk membantu kamu mencapai sukses
            di berbagai bidang.
          </p>
          <ButtonOutlineSunsetOrange>Ambil Assesment</ButtonOutlineSunsetOrange>
        </div>
      </section>

      <section className={styles.containerSkills}>
        <div className={styles.imgMobile}>
          <Image src="/images/kdm.png" width={670} height={435} alt="kdm" />
        </div>
        <div className={styles.subContainer + " " + styles.end}>
          <h1>Keterampilan Digital Milenial (KDM)</h1>
          <TitleUnderline />
          <p>
            Keterampilan digital yang wajib kamu miliki untuk membantu kamu
            menjadi ahli di bidang digital.
          </p>
          <ButtonOutlineSunsetOrange>Ambil Assesment</ButtonOutlineSunsetOrange>
        </div>
        <div className={styles.imgDesktop}>
          <Image src="/images/kdm.png" width={670} height={435} alt="kdm2" />
        </div>
      </section>
    </>
  );
};

export default Index;
