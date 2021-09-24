<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { intercept } from "./services/auth/interceptors";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    intercept(store);
    store.dispatch("auth/verifyAccess").then(console.log);
  },
});
</script>

<style></style>
