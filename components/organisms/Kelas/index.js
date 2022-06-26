import React, { useRef, useEffect } from "react";
import TitleUnderline from "@components/atom/TitleUnderline";
import styles from "./[Kelas].module.css";
import MediumTag from "@components/atom/MediumTag";
import Image from "next/image";
import moment from "moment";
import Router from "next/router";

const Index = ({ kelas, getDetails }) => {
  const parent = useRef(null);

  useEffect(() => {
    const slider = parent.current;

    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    let stopDragging = function (event) {
      mouseDown = false;
    };

    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  }, []);

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
    <section className={styles.containerKelas}>
      <h1>Kelas</h1>
      <TitleUnderline />

      <div className={styles.subContainer} ref={parent}>
        {kelas.contents?.map((value, index) => {
          return (
            <section
              key={index}
              className={styles.card}
              onClick={() => {
                getDetails(value);
                Router.push(`/details/${value.title}`);
              }}
            >
              <img
                src={value.imageURL ? value.imageURL : "/images/logo.png"}
                alt="Avatar"
                style={{ width: 230, height: 230 }}
                // width={130}
                // height={130}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 180,
                  margin: "auto auto 16px 16px",
                }}
              >
                {renderTag(
                  value.type.name ? value.type.name : "Webinar",
                  value.isNewest
                )}
                <span style={{ marginLeft: 4 }}>
                  {value.isNewest && renderTag("Baru", value.isNewest)}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h4>
                  <b>{value.title.substring(0, 47)}...</b>
                </h4>
                <p>{value.date} | 16:00 WIB</p>

                <div className={styles.profileContainer}>
                  {!value.instructors && (
                    <>
                      <Image
                        src={`/images/logo.png`}
                        width={30}
                        height={30}
                        style={{ borderRadius: "100%" }}
                        alt="logo"
                      />
                      <div style={{ marginLeft: 10 }}>
                        <h5>Not Available</h5>
                        <p>Not Available</p>
                      </div>
                    </>
                  )}

                  {value.instructors?.map((val, idx) => {
                    return (
                      <>
                        <Image
                          src={val.profilePic}
                          width={30}
                          height={30}
                          style={{ borderRadius: "100%" }}
                          alt="profile"
                        />

                        <div style={{ marginLeft: 10 }}>
                          <h5>
                            {val.name.length > 0 ? val.name : "Not Available"}
                          </h5>
                          <p>
                            {val.type.name.length > 30
                              ? `${val.type.name.substring(0, 27)}...`
                              : val.type.name}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <hr />
                <div style={{ display: "flex", marginTop: 12 }}>
                  {value.price.id == 0 ? (
                    <p
                      style={{
                        display: "flex",
                        fontWeight: 700,
                        fontSize: 14,
                        marginLeft: "auto",
                      }}
                    >
                      {value.price.name}
                    </p>
                  ) : (
                    <>
                      <p className={styles.cardPrice}>
                        {value.price.discountPercentage}%
                      </p>
                      <p
                        style={{
                          textDecoration: "line-through",
                          textDecorationColor: "var(--sunsetorange)",
                          color: "var(--brightgrey)",
                          fontSize: 13,
                        }}
                      >
                        {value.price.name}
                      </p>
                      <p
                        style={{
                          // textDecoration: "line-through",
                          // textDecorationColor: "var(--sunsetorange)",
                          // color: "var(--brightgrey)",
                          marginLeft: "auto",
                          fontSize: 13,
                        }}
                      >
                        {value.price.priceafter}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
