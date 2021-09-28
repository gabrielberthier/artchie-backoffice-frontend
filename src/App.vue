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

    store.dispatch("auth/setUserUp").then(() => intercept(store));
  },
});
</script>

<style></style>
