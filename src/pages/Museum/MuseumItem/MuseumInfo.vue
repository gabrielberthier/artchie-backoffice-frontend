<template>
  <div class="q-py-md">
    <div class="container flex-start">
      <cool-museum-bg />
      <museum-content
        :museum-name="museum.name"
        :museum-email="museum.email"
        :museum-info="museum.info"
        :museum-description="museum.description"
      />
      <media-museum :museum-image="museum.image" />
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
import { MuseumApiService } from "src/services/api";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: { CoolMuseumBg, MuseumContent, MediaMuseum, MarkerTable },
  setup() {
    const isOnline = window.navigator.onLine;
    const $q = useQuasar();

    const museum = reactive({
      name: "",
      mail: "",
      info: "",
      description: "",
      image: "",
    });

    const service = new MuseumApiService();
    const route = useRoute();
    const router = useRouter();

    $q.loading.show({
      message: isOnline
        ? "Loading your user information..."
        : "Looks like you've lost network connectivity. Please connect back to your network to access your data.",
      backgroundColor: isOnline ? "grey" : "red-6",
      spinner: isOnline ? QSpinnerGears : QSpinnerRadio,
      customClass: "loader",
    });

    service
      .get(route.params.id)
      .then((response) => {
        if (!response) {
          console.log("Teste");
          $q.dialog({
            title: "Error",
            message: "O museu não existe",
            class: "negative",
          }).onDismiss(() => router.push("/intern/museums"));
        }
        museum.name = response.name;
        museum.mail = response.email;
        museum.info = response.info;
        museum.description = response.description;
        museum.image = "";
      })
      .catch(({ data }) =>
        $q.dialog({
          title: "Error",
          message: data,
          class: "negative",
        })
      )
      .finally($q.loading.hide());

    return {
      museum,
    };
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
@media only screen and (max-width: 600px) {
  .container {
    margin-top: -15px !important;
  }
}
</style>
