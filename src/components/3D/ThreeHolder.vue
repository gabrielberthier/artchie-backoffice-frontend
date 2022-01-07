<template>
  <div id="canvas" ref="canvas"></div>
</template>
<script>
import { onMounted, ref, computed } from "vue";
import { create3dCanvas } from "./setup";

export default {
  setup(props) {
    const canvas = ref(null);
    const extension = computed(() => props.objectName.split(".").pop());
    onMounted(() =>
      create3dCanvas(canvas.value, props.objectPath, extension.value)
    );

    return {
      canvas,
      extension,
    };
  },
  props: {
    objectPath: {
      type: String,
    },
    objectName: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
#canvas {
  height: 300px;
}
</style>
