import { client } from "src/services/http-base";

export async function register({ commit }, payload) {
  return commit("SET_USER_DATA", payload);
}

export async function login({ commit }, payload) {
  return commit("SET_USER_DATA", payload);
}

export async function logout({ commit }) {
  await client.get("auth/logout");

  return commit("CLEAR_USER_DATA");
}

export function addHeader({ commit }, objectUser) {
  commit("SET_TOKEN_HEADER", objectUser);
}

export async function verifyAccess({ commit, state }) {
  const { user } = state;

  if (user) {
    const user = JSON.parse(userRaw);

    const now = new Date();
    const createdWhen = new Date(user.createdAt);
    const minutes = (now - createdWhen) / (1000 * 60);

    if (minutes >= 45) {
      commit("CLEAR_USER_DATA");
      return false;
    }
    if (user.token) {
      commit("SET_USER_DATA", user.token);
    }
  }
  return true;
}

/**
 *
 * @param {import("vuex").Store}
 */
export async function setUserUp({ commit, state }) {
  const { user } = state;

  if (!user) {
    const response = await client.get("/api");

    console.log(response);
  }
}
