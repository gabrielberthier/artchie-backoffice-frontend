<template>
  <div
    class="input-errors text-red"
    v-for="(error, index) of errors"
    :key="index"
  >
    <div class="error-msg">
      {{ error.$message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["errors"],
};
</script>
