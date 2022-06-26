import React, { useState } from "react";
import Slider from "@components/organisms/Slider";
import Skills from "@components/organisms/Skills";
import Kelas from "@components/organisms/Kelas";
import Artikel from "@components/organisms/Artikel";
import Layout from "../Layout";
import { connect } from "react-redux";
import actions from "@redux/actions";
import { useEffect } from "react";

const Index = (props) => {
  const {
    sliders,
    getSliders,
    kelas,
    artikel,
    getKelas,
    getArtikel,
    getDetails,
  } = props;
  const [slideIndex, setSlideIndex] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getSliders();
    getKelas();
    getArtikel();
  }, []);

  return (
    <>
      <Layout>
        <Slider
          toggle={toggle}
          setToggle={setToggle}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
          sliders={sliders}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
        />
        <Skills />
        <Kelas kelas={kelas} getDetails={getDetails} />
        <Artikel artikel={artikel} />
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  if (state?.signInReducers?.data?.accessToken) {
    return {
      sliders: state.slidersReducers.data,
      kelas: state.kelasReducers.data,
      artikel: state.artikelReducers.data,
      token: state.signInReducers.data.accessToken.token,
    };
  } else {
    return {
      sliders: state.slidersReducers.data,
      kelas: state.kelasReducers.data,
      artikel: state.artikelReducers.data,
      token: "",
    };
  }
};

export default connect(mapStateToProps, actions)(Index);
