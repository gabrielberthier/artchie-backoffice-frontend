<template>
  <div class="q-py-md">
    <div class="container flex-start">
      <cool-museum-bg />
      <museum-content />
      <media-museum />
    </div>

    <marker-table />
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { QSpinnerGears, QSpinnerRadio } from "quasar";
import CoolMuseumBg from "./CoolMuseumBg.vue";
import MuseumContent from "./MuseumContent.vue";
import MediaMuseum from "./MediaMuseum.vue";
import MarkerTable from "src/components/Tables/Marker/MarkerTable.vue";

export default {
  components: { CoolMuseumBg, MuseumContent, MediaMuseum, MarkerTable },
  setup() {
    const isOnline = window.navigator.onLine;
    const $q = useQuasar();

    $q.loading.show({
      message: isOnline
        ? "Loading your user information..."
        : "Looks like you've lost network connectivity. Please connect back to your network to access your data.",
      backgroundColor: isOnline ? "grey" : "red-6",
      spinner: isOnline ? QSpinnerGears : QSpinnerRadio,
      customClass: "loader",
    });

    setTimeout(() => {
      $q.loading.hide();
    }, 1000);
  },
};
</script>

<style scoped>
.container {
  /* Align sub-items to top */

  display: flex;
  background-color: #f3f3f3;
  width: 100%;
  flex-wrap: wrap-reverse;
  max-width: 750px;
  margin: 15px auto 0;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.2s ease-in;
}

.container:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
