<template>
  <q-card-section class="q-pt-none">
    <div class="text-subtitle1">{{ title }}</div>
    <div class="text-caption text-grey card-info-text">
      {{ text }}
    </div>

    <div class="row no-wrap items-center">
      <div class="text-subtitle1">{{ textActive }}</div>
      <q-toggle
        @update:modelValue="updateModelValue"
        :model-value="modelValue"
        color="green"
        keep-color
      />
    </div>
  </q-card-section>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateModelValue(event) {
      this.$emit("update:modelValue", event);
    },
  },
  computed: {
    textActive() {
      return this.modelValue ? "Item is active" : "Item is inactive";
    },
  },
};
</script>
