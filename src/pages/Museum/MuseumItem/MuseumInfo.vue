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

    <div id="viewer" />

    <marker-table />
  </div>
</template>

<script>
import CoolMuseumBg from "./CoolMuseumBg.vue";
import MuseumContent from "./MuseumContent.vue";
import MediaMuseum from "./MediaMuseum.vue";
import MarkerTable from "src/components/Tables/Marker/MarkerTable.vue";
import { listObjectUrls } from "src/services/aws/get-objects-urls";
import { useRoute } from "vue-router";
import { setupService } from "./functions/setup-service";
import { reactive, computed } from "vue";

export default {
  components: { CoolMuseumBg, MuseumContent, MediaMuseum, MarkerTable },
  setup() {
    let museum = reactive({
      id: undefined,
      name: "",
      mail: "",
      info: "",
      description: "",
      image: "",
      uuid: "",
    });

    const route = useRoute();
    setupService(route.params.id).then((response) =>
      Object.assign(museum, response)
    );

    return {
      museum,
    };
  },
  mounted() {
    listObjectUrls();
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

.container:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
@media only screen and (max-width: 600px) {
  .container {
    margin-top: -15px !important;
  }
}
</style>
