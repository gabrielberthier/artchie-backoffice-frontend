<template>
  <router-view />
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { intercept } from "./services/auth/interceptors";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const initApp = async () => {
      const quasar = useQuasar();
      quasar.loading.show({
        backgroundColor: "purple-3",
        customClass: "loader",
      });
      const store = useStore();
      try {
        const user = await store.dispatch("auth/setUserUp");
        if (user) {
          router.push({ path: route.query.next });
        }
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
