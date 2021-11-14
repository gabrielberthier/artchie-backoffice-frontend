import axios from "axios";

const baseURL = "https://artchie-back-end.herokuapp.com/";

axios.defaults.withCredentials = true;

export const client = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },

  withCredentials: true,
});
