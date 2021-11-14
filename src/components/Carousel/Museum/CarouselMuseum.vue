<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="breakpoints"
    class="mySwiper swiper-container"
  >
    <swiper-slide v-for="x in museums" :key="x.id" class="swiper-slide">
      <div class="">
        <card-museum
          :museum-name="x.name"
          :museum-email="x.email"
          :museum-info="x.info"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import CardMuseum from "src/components/Cards/Museum/CardMuseum.vue";

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  props: {
    museums: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    CardMuseum,
  },
  data() {
    return {
      lorem: "TESTE TESTE TESTE",
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 90%;
  height: 450px;
}
.swiper-slide {
  width: auto;
  height: auto;
}

@media only screen and (max-width: 1024px) {
  .swiper-container {
    width: 100%;
  }
}
</style>
