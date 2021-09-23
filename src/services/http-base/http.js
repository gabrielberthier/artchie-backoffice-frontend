import axios from "axios";

export const client = axios.create({
  // baseURL: "http://11.98.1.2:3333/",
  baseURL: "https://artchie-back-end.herokuapp.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
