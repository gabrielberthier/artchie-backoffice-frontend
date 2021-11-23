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
    ref="fileupload"
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

  watch: {
    /**
     * @param { File  } newValue
     */
    model(newValue, oldValue) {
      this.$emit("filechanged", newValue);
    },
  },
  methods: {
    cleanInput() {
      this.model = null;
      this.$refs.fileupload.value = null;
    },
  },
};
</script>
