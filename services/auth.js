import axios from "axios";
import { REWRITE_API } from "../config";

export const loginAPI = async ({ username, password, deviceID }) => {
  console.log("RESPONSE  username,", username);
  console.log("RESPONSE  password,", password);
  console.log("RESPONSE  deviceID,", deviceID);
  try {
    const res = await axios.post(`${REWRITE_API}/login`, {
      username,
      password,
      deviceID,
    });
    alert("Berhasil Login");
    return res;
  } catch (error) {
    console.log("ERROR LOGIN", error);
    const { message } = error;
    alert(message);
  }
};
