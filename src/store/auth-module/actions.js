export async function register({ commit }, payload) {
  return commit("SET_USER_DATA", payload);
}

export async function login({ commit }, payload) {
  return commit("SET_USER_DATA", payload);
}

export async function logout({ commit }) {
  return commit("CLEAR_USER_DATA");
}

export function addHeader({ commit }, objectUser) {
  commit("SET_TOKEN_HEADER", objectUser);
}

export async function verifyAccess({ commit }) {
  const userRaw = localStorage.getItem("user");
  if (userRaw) {
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
