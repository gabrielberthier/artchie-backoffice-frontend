<template>
  <q-layout view="hHh lpR lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.bg-header {
  background: #aa076b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #61045f,
    #aa076b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #61045f,
    #aa076b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  // background: linear-gradient(-60.76deg, #9679ff, #d499ea 57.96%, #eea4b3);
}
</style>
