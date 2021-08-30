import axios from "axios";

export const client = axios.create({
  // baseURL: "http://11.98.1.2:3333/",
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
