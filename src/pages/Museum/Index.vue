<template>
  <div class="q-pa-md q-my-md">
    <carousel-museum />

    <q-page-sticky
      position="bottom-center"
      :offset="[18, 18]"
      class="q-mt-lg button-more"
    >
      <q-fab icon="add" direction="right" class="button-action" glossy>
        <q-fab-action class="sub" icon="add_circle" />
        <q-fab-action class="sub" icon="filter_list" />
      </q-fab>
    </q-page-sticky>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CarouselMuseum from "../../components/Carousel/Museum/CarouselMuseum.vue";

export default defineComponent({
  components: { CarouselMuseum },
  name: "MuseumIndex",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
});
</script>

<style lang="scss" scoped>
.button-more {
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-100%) !important;
}

.button-action {
  background-color: rgba($color: #be2182, $alpha: 0.9);
  color: white;
  .sub {
    // background: linear-gradient(-60.76deg, #9679ff, #d499ea 57.96%, #eea4b3);
    background-color: #61045f;
  }
}
</style>
