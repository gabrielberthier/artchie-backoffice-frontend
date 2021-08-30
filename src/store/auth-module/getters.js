export function loggedIn(state) {
  return !!state.user;
}

export function userRole(state) {
  return state.user?.role;
}
