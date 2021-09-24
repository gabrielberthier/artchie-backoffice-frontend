<template>
  <div class="body-wrap boxed-container">
    <landing-header />

    <main>
      <hero-section />
    </main>
    <landing-footer />
  </div>
</template>

<script>
import LandingHeader from "./LandingHeader.vue";
import LandingFooter from "./LandingFooter.vue";
import HeroSection from "./HeroSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    LandingHeader,
    LandingFooter,
    HeroSection,
  },
});
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
