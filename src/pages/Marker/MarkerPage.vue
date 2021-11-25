<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12" v-if="screenBreakpoint">
        <marker-card :marker="markerElement" />
      </div>
      <div class="col-12" v-else>
        <horizontal-marker-card :marker="markerElement" />
      </div>
    </div>
  </q-page>
</template>

<script>
import MarkerCard from "src/components/Cards/Marker/Information/VerticalCard/MarkerCard.vue";
import HorizontalMarkerCard from "src/components/Cards/Marker/Information/HorizontalCard/MarkerCard.vue";
import { ref, computed, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { MarkerApiService } from "src/services/api/marker";
import { convertResponseToModelMarker } from "src/domain/marker/convert-response-to-marker-model";
import { makeMarkerModel } from "src/domain/marker/marker-model-factory";

export default {
  components: { MarkerCard, HorizontalMarkerCard },
  setup() {
    const route = useRoute();
    const markerId = ref(parseInt(route.params.id));
    const $q = useQuasar();

    const screenBreakpoint = computed(() => {
      return $q.screen.lt.md;
    });

    const markerModel = makeMarkerModel();
    const markerElement = reactive({ ...markerModel });

    const setupMarker = async (marker) => {
      const service = new MarkerApiService();
      const response = await service.get(marker);
      Object.assign(markerElement, {
        ...convertResponseToModelMarker(response),
      });
    };

    onBeforeMount(() => setupMarker(markerId.value));

    return {
      markerId,
      screenBreakpoint,
      markerElement,
    };
  },
};
</script>
