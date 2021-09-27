import { client } from "../../services/http-base/index";
import jwt from "jsonwebtoken";

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
  client.defaults.headers.common["Authorization"] = `Bearer ${userData}`;
}

export function CLEAR_USER_DATA(state) {
  client.defaults.headers.common["Authorization"] = null;

  state.user = null;
}

export function SET_TOKEN_HEADER(state, userData) {
  state.user = userData;
  client.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
}
