<template>
  <q-card-section class="q-pt-none">
    <q-expansion-item v-model="expanded" icon="image" caption="Resource">
      <slot> Something </slot>
    </q-expansion-item>
  </q-card-section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      expanded: ref(false),
    };
  },
};
</script>
