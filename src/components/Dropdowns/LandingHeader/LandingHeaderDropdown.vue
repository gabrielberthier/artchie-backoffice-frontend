<template>
  <q-btn flat dense color="purple" icon="account_circle" :label="username">
    <!-- <q-badge color="red" text-color="white" floating> 5 </q-badge> -->
    <q-menu>
      <q-list class="list-header-dropdown-right">
        <menu-options />

        <q-item clickable v-ripple>
          <q-item-section class="" @click="logout">Logout</q-item-section>
          <q-item-section avatar>
            <q-btn round dense flat color="blue" icon="logout"> </q-btn>
          </q-item-section>

          <!-- <q-item-section side>Side</q-item-section> -->
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
import { mapGetters } from "vuex";
import MenuOptions from "./MenuOptions.vue";

export default {
  components: {
    MenuOptions,
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");

      this.$router.push({ name: "landing" });
    },
  },
  computed: {
    ...mapGetters({ username: "auth/userName" }),
  },
};
</script>

<style lang="scss">
.list-header-dropdown-right {
  font-weight: 400;
  min-width: 150px;
  color: #333;
}
</style>
