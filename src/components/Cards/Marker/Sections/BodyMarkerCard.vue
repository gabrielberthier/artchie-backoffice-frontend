<template>
  <q-card-section class="q-pt-none">
    <div class="text-subtitle1">An awesome asset</div>
    <div class="text-caption text-grey card-info-text">
      Qui butcher farm-to-table locavore sunt quinoa. Bicycle rights pariatur marfa etsy,
      four loko lomo veniam fashion axe aesthetic. Actually irony quis selfies readymade
      narwhal. Nesciunt pinterest cillum, wolf swag american apparel carles ex butcher non
      veniam.
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
  },
  emits: ["update:modelValue"],
  methods: {
    updateModelValue(event) {
      console.log(event);
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
