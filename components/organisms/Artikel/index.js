import React from "react";
import TitleUnderline from "@components/atom/TitleUnderline";
import styles from "./[Artikel].module.css";
import ButtonOutline from "@components/atom/ButtonOutline";
import { CATEGORY_ARTIKEL } from "./constant";
import Image from "next/image";

const Index = ({ artikel }) => {
  return (
    <section className={styles.containerArtikel}>
      <h1>Artikel</h1>
      <TitleUnderline />
      <div style={{ display: "flex", gridGap: 10, marginTop: 22 }}>
        {CATEGORY_ARTIKEL.map((value, index) => (
          <ButtonOutline key={index} border="1px solid #DCDCDC" fw={400}>
            <div style={{ padding: "0px 16px" }}>{value.title}</div>
          </ButtonOutline>
        ))}
      </div>

      <div className={styles.subContainer}>
        {artikel?.articles?.map((value, index) => {
          return (
            <div key={index} className={styles.cardContainer}>
              <Image
                src={value.imageUrlPreview}
                width={508}
                height={100}
                style={{ borderRadius: 2 }}
                alt="Artikel img"
              />

              <div>
                <h2>{value.title}</h2>
                <p>{value.brief}</p>
                <p>
                  <span>{value.category.name}</span> | {value.created_date} .{" "}
                  {value.timeOfRead} menit membaca
                </p>

                <div className={styles.profile}>
                  <Image
                    src={value.instructor.profilePic}
                    width={21}
                    height={21}
                    alt="Instructor"
                  />
                  <span>{value.instructor.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
