import { mapActions } from "vuex";

export const makeStoreLogout = {
  ...mapActions({
    logout: "auth/logout",
    // map object context `this.setEditionMode()` to
    // `this.$store.dispatch('profile/setEditionMode')`
  }),
};
