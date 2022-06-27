import axios from "axios";
import { REWRITE_API } from "../config";

export const kelasAPI = async () => {
  const path = "/Testing/slide/v2";
  // console.log("YOU ARE HERE");
  try {
    const res = await axios.get(`${REWRITE_API}/kelas`, {
      headers: {
        Authorization: "Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==",
      },
    });

    return res;
  } catch (error) {
    console.log("ERROR KELAS", error);
    const { message } = error;
    alert(message);
  }
};
