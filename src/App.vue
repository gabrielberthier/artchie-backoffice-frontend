<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { intercept } from "./services/auth/interceptors";

export default defineComponent({
  name: "App",
  setup() {
    intercept();
  },
});
</script>
