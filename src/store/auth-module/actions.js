import { api } from "src/boot/axios";

export async function register({ commit }, payload) {
  return commit("SET_USER_DATA", payload);
}

export async function login({ commit }, payload) {
  return commit("SET_USER_DATA", payload);
}

export async function logout({ commit }) {
  await api.get("auth/logout");

  return commit("CLEAR_USER_DATA");
}

export function addHeader({ commit }, objectUser) {
  commit("SET_TOKEN_HEADER", objectUser);
}

export async function verifyAccess({ commit, state }) {
  const { user } = state;

  if (user) {
    try {
      const userData = JSON.parse(user.token);

      const now = new Date();
      const createdWhen = new Date(userData.createdAt);
      const minutes = (now - createdWhen) / (1000 * 60);

      if (minutes >= 45) {
        commit("CLEAR_USER_DATA");
        return false;
      }
      if (user.token) {
        commit("SET_USER_DATA", user.token);
      }
    } catch (error) {
      commit("CLEAR_USER_DATA");
    }
  }
}

/**
 *
 * @param {import("vuex").Store}
 */
export async function setUserUp({ commit, state }) {
  const { user } = state;

  if (!user) {
    const response = await api.get("/auth/refresh-token", {
      withCredentials: true,
    });

    const authToken = response.headers["x-renew-token"];

    if (authToken) {
      commit("SET_USER_DATA", authToken);
      return authToken;
    }
  }
}
