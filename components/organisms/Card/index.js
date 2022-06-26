import Image from "next/image";
import React from "react";
import ButtonSunsetOrange from "@components/atom/ButtonSunsetOrange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./[Card].module.css";
import {
  faCalendar,
  faCertificate,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Index = ({ detailKelas }) => {
  return (
    <section className={styles.cardSection}>
      <div className={styles.cardContainer}>
        <div
          className={styles.desktop}
          style={{
            backgroundImage: `url(${
              detailKelas?.imageURL ? detailKelas?.imageURL : "/images/logo.png"
            })`,
          }}
        >
          {/* <Image
          src={detailKelas?.imageURL ? detailKelas?.imageURL : "/images/logo.png"}
          width={321}
          height={161}
          style={{ borderRadius: "6px 6px 0px 0px" }}
        /> */}
        </div>
        <div className={styles.cardBody}>
          <h2>
            {detailKelas?.price.id == 0
              ? detailKelas?.price.name
              : detailKelas?.price.priceafter}

            {detailKelas?.price.priceafter && (
              <small
                style={{
                  textDecoration: "line-through",
                  fontSize: 16,
                  marginLeft: 20,
                  paddingTop: -10,
                  fontWeight: 400,
                  color: "var(--nero)",
                }}
              >
                {detailKelas?.price.name}
              </small>
            )}
          </h2>
          <span>
            {detailKelas?.price.discountPercentage &&
              detailKelas?.price.discountPercentage + "% off"}
          </span>
          <ButtonSunsetOrange>Daftar Sekarang</ButtonSunsetOrange>
          <p className={styles.title}>
            <FontAwesomeIcon icon={faUser} /> Pembicara
          </p>
          {detailKelas?.instructors ? (
            detailKelas?.instructors?.map((value, index) => {
              return (
                <p key={index} className={styles.info}>
                  {value.name}
                </p>
              );
            })
          ) : (
            <p className={styles.info}>Not Available</p>
          )}

          <p className={styles.title}>
            <FontAwesomeIcon icon={faCalendar} /> Tanggal webinar
          </p>
          <p className={styles.info}>{detailKelas?.date}</p>
          {/* {detailKelas.isCertificate && ( */}
          <p className={styles.title}>
            <FontAwesomeIcon icon={faCertificate} /> Bersertifikat
          </p>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default Index;
