<template>
  <q-file
    clearable
    color="teal"
    standout
    bottom-slots
    filled
    v-model="model"
    label="Asset"
    counter
  >
    <template v-slot:prepend>
      <q-icon name="cloud_upload" />
    </template>
  </q-file>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
    };
  },
};
</script>
