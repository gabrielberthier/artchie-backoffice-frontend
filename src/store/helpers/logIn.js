import { mapActions } from "vuex";

export const makeStoreLogin = {
  ...mapActions({
    login: "auth/setUserUp",
    // map object context `this.setEditionMode()` to
    // `this.$store.dispatch('profile/setEditionMode')`
  }),
};
