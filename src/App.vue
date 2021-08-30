<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { intercept } from "./services/auth/interceptors";
import { client } from "./services/http-base";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    intercept(store);
    client.post("/").then(console.log);
  },
});
</script>
