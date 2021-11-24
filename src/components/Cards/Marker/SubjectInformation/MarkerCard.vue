<template>
  <q-dialog
    ref="dialog"
    @update:model-value="updateModelValue"
    :value="modelValue"
  >
    <q-card class="my-card">
      <q-img
        :src="markerElement?.asset?.temporary_location"
        fit="cover"
        style="height: 300px"
      />

      <heading-marker-card :asset-name="markerElement.marker_name" />

      <body-marker-card
        v-model="activeAsset"
        :title="markerElement.marker_title"
        :text="markerElement.marker_text"
      />

      <placement-object-section
        v-if="hasPlacement"
        :placement-object="markerElement.pose_object"
      />

      <q-separator />

      <marker-card-actions />
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, watch, reactive, computed } from "vue";
import PlacementObjectSection from "./Sections/PlacementObjectSection.vue";
import BodyMarkerCard from "./Sections/BodyMarkerCard.vue";
import MarkerCardActions from "../Subs/MarkerCardActions.vue";
import HeadingMarkerCard from "./Sections/HeadingMarkerCard.vue";
import { makeMarkerModel } from "src/components/Forms/Assets/functions/marker-model-factory";
import { MarkerApiService } from "src/services/api/marker";
import { convertResponseToModelMarker } from "./convert-response-to-marker-model";

export default {
  components: {
    PlacementObjectSection,
    BodyMarkerCard,
    MarkerCardActions,
    HeadingMarkerCard,
  },
  setup(props) {
    const markerModel = makeMarkerModel();
    const markerElement = reactive({ ...markerModel });

    const setupMarker = async (marker) => {
      const service = new MarkerApiService();
      const response = await service.get(marker);
      Object.assign(markerElement, {
        ...convertResponseToModelMarker(response),
      });
    };

    watch(
      () => props.marker,
      (value, second) => {
        if (value) {
          setupMarker(props.marker);
        }
      }
    );

    return {
      hasPlacement: computed(() => !!markerElement?.pose_object),
      stars: ref(3),
      card: ref(false),
      activeAsset: ref(false),
      expanded: ref(false),
      markerElement,
    };
  },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    marker: {
      type: Number,
    },
  },
  computed: {
    textActive() {
      return this.active ? "Item is active" : "Item is inactive";
    },
  },
  methods: {
    updateModelValue(event) {
      this.$emit("update:modelValue", event);
    },
  },
  watch: {
    modelValue(newVal) {
      if (newVal) this.$refs.dialog.show();
    },
  },
};
</script>

<style scoped>
.card-info-text {
  max-width: 380px;
}
</style>
