<template>
  <router-view />
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { intercept } from "./services/auth/interceptors";

export default defineComponent({
  name: "App",
  setup() {
    const initApp = async () => {
      const quasar = useQuasar();
      quasar.loading.show({
        backgroundColor: "purple-3",
        customClass: "loader",
      });
      const store = useStore();
      try {
        await store.dispatch("auth/setUserUp");
        intercept(store);
      } catch (error) {
      } finally {
        quasar.loading.hide();
      }
    };

    onBeforeMount(() => initApp());
  },
});
</script>

<style></style>
