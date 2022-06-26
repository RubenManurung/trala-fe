import {
  faEye,
  faHouseChimney,
  faShareFromSquare,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../Layout";
import MediumTag from "@components/atom/MediumTag";
import Card from "@components/organisms/Card";
import RedLink from "@components/atom/RedLink";
import styles from "./[DetailPage].module.css";
import Image from "next/image";

import { connect } from "react-redux";

const Index = ({ detailKelas }) => {
  const renderTag = (tag, isNewest) => {
    if (tag === "Kursus") {
      return (
        <MediumTag
          title={tag}
          color="var(--white)"
          bgColor="var(--endeavour)"
        />
      );
    } else if (tag === "Microlearning") {
      return (
        <MediumTag title={tag} color="var(--white)" bgColor="var(--oldrose)" />
      );
    } else if (tag === "Webinar") {
      return (
        <MediumTag
          title={tag}
          color="var(--white)"
          bgColor="var(--sunsetorange)"
        />
      );
    }

    if (isNewest) {
      return (
        <MediumTag title={"Baru"} color="var(--nero)" bgColor="var(--white)" />
      );
    }
  };

  return (
    <>
      <Layout>
        <div className={styles.containerDetail}>
          <section className={styles.detailHeader}>
            <div>
              <FontAwesomeIcon icon={faHouseChimney} />{" "}
              {`> Detail ${detailKelas?.type?.name}`}
            </div>
            <div>
              <FontAwesomeIcon icon={faShareFromSquare} /> {`Bagikan`}
            </div>
          </section>

          <section className={styles.detailBody}>
            <div
              className={styles.mobile}
              style={{
                backgroundImage: `url(${
                  detailKelas?.imageURL
                    ? detailKelas?.imageURL
                    : "/images/logo.png"
                })`,
              }}
            ></div>
            <div>
              {renderTag(detailKelas?.type?.name, detailKelas?.isNewest)}
              <span>
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ color: "var(--white)" }}
                />{" "}
                1200 orang melihat ini
              </span>
              <h1>{detailKelas?.title}</h1>
              <p>
                <span style={{ marginRight: 50 }}>Pembicara</span>:{" "}
                {detailKelas?.instructors
                  ? detailKelas?.instructors?.map((value) => {
                      return value.name;
                    })
                  : "Not Available"}
              </p>
              <p>
                <span style={{ marginRight: 82 }}>Waktu</span>:{" "}
                {detailKelas?.date}
              </p>
            </div>
            <div className={styles.desktop}>
              <Card detailKelas={detailKelas} />
            </div>
          </section>

          <section className={styles.detailSummary}>
            <div className={styles.summaryContainer}>
              <h2>Ringkasan</h2>
              <p>
                {detailKelas?.brief
                  ? detailKelas?.brief
                  : "Tidak ada keterangan."}{" "}
              </p>
              <RedLink href="/">
                Lihat lebih{" "}
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ transform: "rotate(180deg)", marginLeft: 4 }}
                />
              </RedLink>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    detailKelas: state.kelasReducers.detailKelas,
  };
};

export default connect(mapStateToProps)(Index);
