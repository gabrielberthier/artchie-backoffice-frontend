<template>
  <q-dialog
    ref="create-marker-dialog"
    @update:model-value="updateModelValue"
    :value="modelValue"
  >
    <q-card class="create-marker-card">
      <div class="q-pa-md">
        <asset-form @close-dialog="submittedSuccessfully" />
      </div>

      <marker-card-actions />
    </q-card>
  </q-dialog>
</template>

<script>
import { reactive } from "vue";
import MarkerCardActions from "../Subs/MarkerCardActions.vue";
import AssetForm from "src/components/Forms/Assets/AssetForm.vue";

export default {
  components: { MarkerCardActions, AssetForm },
  setup() {
    return {
      marker: reactive({}),
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
    submittedSuccessfully() {
      this.$emit("success-created");
    },
  },
  watch: {
    modelValue(newVal) {
      if (newVal) this.$refs["create-marker-dialog"].show();
    },
  },
};
</script>

<style scoped>
.card-info-text {
  max-width: 380px;
}

.create-marker-card {
  width: 90vw;
  max-width: 450px;
}
</style>
