import styles from "./[Slider].module.css";
import SlideImage from "@components/molecules/SlideImage";
import BtnNoOutline from "@components/atom/ButtonNoOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Index = (props) => {
  const {
    sliders,
    toggle,
    setToggle,
    slideIndex,
    setSlideIndex,
    isMobile,
    setIsMobile,
    ...nativeProps
  } = props;

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <section className={styles.containerSlider}>
      <div
        onClick={() => {
          setToggle(false);
          if (slideIndex <= 0) {
            setSlideIndex(2);
          } else {
            setSlideIndex(slideIndex - 1);
          }
        }}
        className={styles.arrowContainer}
        style={{
          transform: "translate(-1310%, 700%)",
          zIndex: 2,
        }}
      >
        <BtnNoOutline>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ color: "var(--white)" }}
          />
        </BtnNoOutline>
      </div>{" "}
      <div className={styles.sliderList}>
        {/* {sliders.mainimages.map((value, index) => (
          <SlideImage key={index} sliders={value} style={{ zIndex: -1 }} />
        ))} */}
        {sliders?.mainimages?.length > 0 ? (
          <>
            <SlideImage
              sliders={
                sliders?.mainimages[slideIndex === 2 ? 0 : slideIndex + 1]
              }
              style={{ zIndex: 0 }}
            />
            <SlideImage
              sliders={sliders?.mainimages[toggle ? slideIndex : slideIndex]}
              style={{ zIndex: 2 }}
            />
            <SlideImage
              sliders={
                sliders?.mainimages[slideIndex === 0 ? 2 : slideIndex - 1]
              }
              style={{ zIndex: 0 }}
            />
          </>
        ) : (
          "Loading..."
        )}
      </div>
      <div
        onClick={() => {
          setToggle(true);
          if (slideIndex >= 2) {
            setSlideIndex(0);
          } else {
            setSlideIndex(slideIndex + 1);
          }
        }}
        className={styles.arrowContainer}
        style={{
          transform: "translate(1300%, 700%)",
        }}
      >
        <BtnNoOutline>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "var(--white)" }}
          />
        </BtnNoOutline>
      </div>
    </section>
  );
};

export default Index;
