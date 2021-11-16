import jwt from "jsonwebtoken";
import { api } from "src/boot/axios";

export function SET_USER_DATA(state, userData) {
  const decoded = jwt.decode(userData);
  const { data, exp, iat } = decoded;
  const expiresIn = new Date(exp * 1000);
  const issuedAt = new Date(iat * 1000);
  const createdAt = new Date();
  const user = {
    ...data,
    token: userData,
    expiresIn,
    issuedAt,
    createdAt,
  };
  state.user = user;
  api.defaults.headers.common["Authorization"] = `Bearer ${userData}`;
}

export function CLEAR_USER_DATA(state) {
  api.defaults.headers.common["Authorization"] = null;

  state.user = null;
}

export function SET_TOKEN_HEADER(state, userData) {
  state.user = userData;
  api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
}
