import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faClose,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "@components/organisms/Modal";
import FormInput from "@components/molecules/FormInput";
import { SIDEBAR_MENU_LOGIN, SUB_MENU_LIST, SIDEBAR_MENU } from "./constant";
import styles from "./[Navbar].module.css";
import SmallTag from "@components/atom/SmallTag";
import ButtonOutline from "@components/atom/ButtonOutline";
import ButtonExternal from "@components/atom/ButtonExternal";
import ButtonSunsetOrange from "@components/atom/ButtonSunsetOrange";
import BtnNoOutline from "@components/atom/ButtonNoOutline";
import RedLink from "@components/atom/RedLink";
import Image from "next/image";
import Link from "next/link";
import { RFC_2822 } from "moment";

const Index = ({ SignIn, token, deauthenticate }) => {
  const parent = useRef(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [selectedMenuNav, setSelectedMenuNav] = useState("");
  const [userAccount, setUserAccount] = useState({
    email: "",
    password: "",
    deviceID: 1,
  });
  const [errorValidation, setErrorValidation] = useState({});
  const [togglePassword, setTogglePassword] = useState(false);

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

    // // Add the event listeners
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  }, []);

  const handleMenuSelect = (title) => {
    setSelectedMenuNav(title);
  };

  const validationLogin = (data) => {
    let errorValidation = {};
    if (selectedMenuNav === "Register") {
      if (!data.name) {
        errorValidation.name = "wajib diisi";
      }
    }
    if (!data.email) {
      errorValidation.email = "wajib diisi";
    }
    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    //   errorValidation.email = "format email salah";
    // }

    if (!data.password) {
      errorValidation.password = "wajib diisi";
    }

    if (Object.keys(errorValidation).length === 0) {
      SignIn({
        username: userAccount.email,
        password: userAccount.password,
        deviceID: userAccount.deviceID,
      });
      setSelectedMenuNav("");
    }

    return errorValidation;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && e.target.value) {
      errorValidation.name = "";
    }
    if (name === "email" && e.target.value) {
      errorValidation.email = "";
    }
    if (name === "password" && e.target.value) {
      errorValidation.password = "";
    }

    setUserAccount({
      ...userAccount,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValidation(validationLogin(userAccount));
  };

  return (
    <>
      <nav className={styles.navSm}>
        <section>
          <BtnNoOutline onClick={() => setHamburgerToggle(!hamburgerToggle)}>
            <FontAwesomeIcon className={styles.navIcon} icon={faBars} />
          </BtnNoOutline>
          <BtnNoOutline>
            <FontAwesomeIcon className={styles.navIcon} icon={faSearch} />
          </BtnNoOutline>
        </section>
        <div className={styles.center}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={52}
                height={50}
                alt="logo-mobile"
              />
            </a>
          </Link>
        </div>

        <div
          className={`${styles.overlay}`}
          style={{ visibility: hamburgerToggle ? "visible" : "hidden" }}
        >
          <section
            id="mySidenav"
            className={styles.sideNavbar}
            style={{ width: hamburgerToggle ? "286px" : "0px" }}
            // toggle={hamburgerToggle}
          >
            <div>
              <section>
                <Image
                  src="/images/logo.png"
                  width={52}
                  height={50}
                  alt="logo mobile"
                />
                <BtnNoOutline
                  onClick={() => setHamburgerToggle(!hamburgerToggle)}
                >
                  <FontAwesomeIcon icon={faBars} className={styles.navIcon} />
                </BtnNoOutline>
              </section>

              <section>
                <ul>
                  {token
                    ? SIDEBAR_MENU_LOGIN.map((value, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              if (value.title === "Masuk/Daftar") {
                                setSelectedMenuNav("Masuk");
                              } else if (value.title === "Keluar") {
                                deauthenticate();
                              }
                            }}
                          >
                            <FontAwesomeIcon
                              icon={value.icon}
                              style={{
                                width: 12,
                                height: 12,
                                transform:
                                  value.title === "Masuk/Daftar" &&
                                  "rotate(180deg)",
                              }}
                            />{" "}
                            {value.title}
                          </li>
                        );
                      })
                    : SIDEBAR_MENU.map((value, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              if (value.title === "Masuk/Daftar") {
                                setSelectedMenuNav("Masuk");
                              } else if (value.title === "Keluar") {
                                deauthenticate();
                              }
                            }}
                          >
                            <FontAwesomeIcon
                              icon={value.icon}
                              style={{
                                width: 12,
                                height: 12,
                                transform:
                                  value.title === "Masuk/Daftar" &&
                                  "rotate(180deg)",
                              }}
                            />{" "}
                            {value.title}
                          </li>
                        );
                      })}
                </ul>
              </section>
            </div>
          </section>
        </div>
      </nav>

      <nav className={styles.navLg}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              width={74}
              height={71}
              alt="logo-desktop"
            />
          </a>
        </Link>
        <section className={styles.searchContainer}>
          <FormInput
            isIcon
            title=""
            inputPlaceHolder="Mau Belajar apa hari ini?"
          >
            <button className={styles.buttonIcon}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  width: 15,
                  height: 15,
                  color: "var(--black)",
                  margin: "auto",
                }}
              />
            </button>
          </FormInput>
          <ul className={styles.menuList} ref={parent}>
            {SUB_MENU_LIST.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    style={{
                      display: "inline-block",
                      position: "relative",
                      right: -20,
                      top: 5,
                      flexDirection: "column",
                    }}
                  >
                    {value.isNew && <SmallTag title="Baru" />}
                  </div>

                  <li key={index}>{value.title}</li>
                </React.Fragment>
              );
            })}
          </ul>
        </section>

        <section className={styles.btnContainer}>
          {token ? (
            <ButtonOutline
              onClick={() => deauthenticate()}
              border="0.5px solid #262626"
              fw={700}
            >
              Logout
            </ButtonOutline>
          ) : (
            <>
              <ButtonOutline
                onClick={() => setSelectedMenuNav("Masuk")}
                border="0.5px solid #262626"
                fw={700}
              >
                Masuk
              </ButtonOutline>
              <ButtonSunsetOrange onClick={() => setSelectedMenuNav("Daftar")}>
                Daftar
              </ButtonSunsetOrange>
            </>
          )}

          {/* <div>TEST</div> */}
        </section>
      </nav>

      <Modal open={selectedMenuNav === "Masuk"} title={""}>
        <section className={styles.modalContent}>
          <div className={styles.center}>
            <div className={styles.flex}>
              <Image
                src="/images/logo.png"
                width={45}
                height={43}
                alt="logo-desktop"
              />
              <span>Bergabung sekarang, gratis</span>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faClose}
            className={styles.closeIcon}
            onClick={() => setSelectedMenuNav("")}
          />
        </section>

        <hr className={styles.horizontalLine} />

        <form
          onSubmit={handleSubmit}
          autoComplete={"off"}
          className={styles.form}
        >
          <div className={styles.containerInput}>
            <div>
              <FormInput
                inputCategory="normal"
                inputName="email"
                inputType="text"
                title={"Username/Email"}
                isIcon={false}
                value={userAccount.email}
                errorInput={!!errorValidation.email}
                validateInputError={errorValidation.email}
                inputPlaceHolder={"Masukkan username atau email perusahaan"}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                inputCategory="normal"
                inputName="password"
                inputType={togglePassword ? "password" : "text"}
                title={"Kata Sandi"}
                isIcon
                value={userAccount.password}
                errorInput={!!errorValidation.password}
                validateInputError={errorValidation.password}
                inputPlaceHolder={"Masukkan kata sandi"}
                onChange={handleChange}
              >
                {togglePassword ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={styles.navIcon}
                    onClick={() => setTogglePassword(!togglePassword)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    className={styles.navIcon}
                    onClick={() => setTogglePassword(!togglePassword)}
                  />
                )}
              </FormInput>
            </div>
            <div className={styles.alignRight}>
              <RedLink href="/">Lupa Sandi?</RedLink>
            </div>

            <ButtonSunsetOrange>Masuk</ButtonSunsetOrange>
            <span>
              <span>atau</span>
            </span>
            <ButtonExternal>
              <div className={styles.flex}>
                <Image
                  src="/images/google.svg"
                  width={18}
                  height={18}
                  alt="google"
                />
                <span style={{ whiteSpace: "nowrap" }}>
                  Masuk dengan Google
                </span>
              </div>
            </ButtonExternal>
          </div>
        </form>
        <section className={styles.modalFooter}>
          <span>
            Belum punya akun? <RedLink href="/">Daftar</RedLink>
          </span>
        </section>
      </Modal>
    </>
  );
};

export default Index;
