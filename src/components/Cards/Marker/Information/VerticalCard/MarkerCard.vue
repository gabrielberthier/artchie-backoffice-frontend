<template>
  <q-card class="my-card">
    <q-separator />
    <q-img
      :src="marker?.asset?.temporary_location"
      fit="cover"
      style="height: 300px"
      horizontal
    />

    <heading-marker-card :asset-name="marker.marker_name" />

    <body-marker-card
      v-model="activeAsset"
      :title="marker.marker_title"
      :text="marker.marker_text"
    />

    <placement-object-section v-if="hasPlacement">
      <pose-object-card :placement-object="marker.pose_object" />
    </placement-object-section>

    <q-separator />

    <marker-card-actions />
  </q-card>
</template>

<script>
import { ref, computed } from "vue";
import PlacementObjectSection from "../Sections/PlacementObjectSection.vue";
import BodyMarkerCard from "../Sections/BodyMarkerCard.vue";
import MarkerCardActions from "../../ActionButtons/MarkerCardActions.vue";
import HeadingMarkerCard from "../Sections/HeadingMarkerCard.vue";
import { makeMarkerModel } from "src/domain/marker/marker-model-factory";
import PoseObjectCard from "components/Cards/PlacementObject/PoseObjectCard.vue";

export default {
  components: {
    PlacementObjectSection,
    BodyMarkerCard,
    MarkerCardActions,
    HeadingMarkerCard,
    PoseObjectCard,
  },
  setup(props) {
    return {
      hasPlacement: computed(() => !!props.marker?.pose_object),
      stars: ref(3),
      card: ref(false),
      activeAsset: ref(false),
      expanded: ref(false),
    };
  },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    marker: {
      type: Object,
      default: () => {
        return {
          ...makeMarkerModel(),
        };
      },
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
