<template>
  <q-dialog
    ref="dialog"
    @update:model-value="updateModelValue"
    :value="modelValue"
  >
    <q-card class="my-card">
      <q-img
        src="https://64.media.tumblr.com/tumblr_ljs1vbcL1K1qa5yk4o1_500.jpg"
        fit="cover"
        style="height: 300px"
      />

      <heading-marker-card />

      <body-marker-card v-model="activeAsset" />

      <placement-object-section v-if="hasPlacement" />

      <q-separator />

      <marker-card-actions />
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import PlacementObjectSection from "./Sections/PlacementObjectSection.vue";
import BodyMarkerCard from "./Sections/BodyMarkerCard.vue";
import MarkerCardActions from "../Subs/MarkerCardActions.vue";
import HeadingMarkerCard from "./Sections/HeadingMarkerCard.vue";

export default {
  components: {
    PlacementObjectSection,
    BodyMarkerCard,
    MarkerCardActions,
    HeadingMarkerCard,
  },
  setup() {
    return {
      hasPlacement: ref(true),
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
