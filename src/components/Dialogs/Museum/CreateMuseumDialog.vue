<template>
  <q-dialog
    ref="create-museum-dialog"
    @update:model-value="updateModelValue"
    :value="modelValue"
  >
    <q-card class="create-museum-card">
      <div class="q-pa-md">
        <museum-form @successful-submit="closeDialogOnSuccess" />
      </div>

      <q-card-actions align="right">
        <q-btn
          v-close-popup
          flat
          size="md"
          color="primary"
          label="close"
          class="left"
        />
        <q-btn v-close-popup size="md" color="negative" round icon="delete" />
        <q-btn v-close-popup size="md" color="accent" round icon="update" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { reactive } from "vue";

import MuseumForm from "src/components/Forms/Museum/MusemInclusionForm.vue";

export default {
  components: { MuseumForm },
  setup() {
    return {
      museum: reactive({}),
    };
  },
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
    closeDialogOnSuccess() {
      this.$emit("successful-insertion", true);
    },
  },
  emits: ["successful-insertion", "update:modelValue"],
  watch: {
    modelValue(newVal) {
      if (newVal) this.$refs["create-museum-dialog"].show();
      else this.$refs["create-museum-dialog"].hide();
    },
  },
};
</script>

<style scoped>
.create-museum-card {
  width: 90vw;
  max-width: 450px;
}
</style>
