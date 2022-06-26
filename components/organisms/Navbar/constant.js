import {
  faArrowRightToBracket,
  faCirclePlay,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const MENU_LIST = [
  {
    title: "Masuk",
    subMenu: ["Linux", "Windows", "MAC OS", "Android", "iOS"],
  },
  {
    title: "Daftar",
    subMenu: [],
  },
];

export const SUB_MENU_LIST = [
  {
    title: "Trala Goes to Campus",
    isNew: true,
  },
  {
    title: "Liga PoinQu",
    isNew: false,
  },
  {
    title: "Keterampilan Digital Milenial",
    isNew: true,
  },
  {
    title: "Keterampilan Sukses Milenial",
    isNew: false,
  },
  {
    title: "Personal Development",
    isNew: false,
  },
  {
    title: "Career Development",
    isNew: false,
  },
];

export const SIDEBAR_MENU = [
  { title: "Masuk/Daftar", icon: faArrowRightToBracket },
];

export const SIDEBAR_MENU_LOGIN = [
  { title: "Kursus Qu", icon: faCirclePlay },
  { title: "Keluar", icon: faArrowRightFromBracket },
];
