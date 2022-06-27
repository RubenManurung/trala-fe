import axios from "axios";
import { REWRITE_API } from "../config";

export const slidersAPI = async () => {
  try {
    const res = await axios.get(`${REWRITE_API}/sliders`, {
      headers: {
        Authorization: "Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==",
      },
    });

    return res;
  } catch (error) {
    console.log("ERROR SLIDERS", error);
    const { message } = error;
    alert(message);
  }
};
