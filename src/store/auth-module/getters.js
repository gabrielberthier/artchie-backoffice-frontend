export function loggedIn(state) {
  return !!state.user;
}

export function userRole(state) {
  return state.user?.role;
}

export const userName = (state) => state.user.username;
