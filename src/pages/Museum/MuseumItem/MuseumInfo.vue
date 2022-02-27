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
      <q-btn fab icon="key" color="accent" class="key-gen-btn" @click="generateKey">
        <q-tooltip anchor="top left" self="top middle">
          Click to generate app access key
        </q-tooltip>
      </q-btn>
    </div>

    <a id="viewer" href="#" ref="downloader" />

    <marker-table :museum-id="museum.id" />
  </div>
</template>

<script>
import CoolMuseumBg from "./CoolMuseumBg.vue";
import MuseumContent from "./MuseumContent.vue";
import MediaMuseum from "./MediaMuseum.vue";
import MarkerTable from "src/components/Tables/Marker/MarkerTable.vue";
import { useRoute } from "vue-router";
import { setupService } from "./functions/setup-service";
import { reactive, computed, ref, onMounted } from "vue";
import { downloadFile } from "./functions/download-file";
import { AppKeyCreatorService } from "src/services/api/security";
import { useQuasar } from "quasar";

export default {
  components: { CoolMuseumBg, MuseumContent, MediaMuseum, MarkerTable },
  setup() {
    const $q = useQuasar();
    let museum = reactive({
      id: undefined,
      name: "",
      mail: "",
      info: "",
      description: "",
      image: "",
      uuid: "",
    });
    const markers = ref([]);

    const downloader = ref(null);

    const generateKey = async () => {
      try {
        const service = new AppKeyCreatorService();
        const { data } = await service.makeKey(museum.uuid);
        downloadFile(downloader.value, data.token);
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "API Key downloaded",
        });
      } catch (error) {
        $q.notify({
          color: "red",
          textColor: "white",
          icon: "cloud_off",
          message: "Museum code is invalid",
        });
      }
    };

    const route = useRoute();
    setupService(route.params.id).then((response) => Object.assign(museum, response));

    return {
      museum,
      markers,
      downloader,
      generateKey,
    };
  },
  provide() {
    return {
      uuid: computed(() => this.museum.uuid),
      museumId: computed(() => this.museum.id),
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

.key-gen-btn {
  z-index: 1000;
  position: absolute;
  top: 5px;
  right: 5px;
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
