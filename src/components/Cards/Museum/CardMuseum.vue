<template>
  <q-card class="my-card relative">
    <q-img :src="museumImage" class="imagem-height">
      <div class="absolute-bottom text-h6">{{ museumName }}</div>
    </q-img>
    <q-card-section>
      <q-btn
        fab
        icon="o_arrow_forward"
        class="absolute btn-more-info"
        style=""
        @click="sendToInfo"
      >
      </q-btn>

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">{{ museumInfo }}</div>
      </div>
      <div class="text-subtitle2">{{ museumEmail }}</div>
    </q-card-section>

    <q-card-section>
      <p class="ellipsis-3-lines text-card">
        {{ museumDescription }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardMuseum",
  setup() {
    return {
      image: "~/assets/museums/louvre.jpg",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
  props: {
    museumName: {
      type: String,
    },
    museumEmail: {
      type: String,
    },
    museumInfo: {
      type: String,
      default: "",
    },
    museumDescription: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    museumImage: {
      type: String,
      default: require("assets/museums/louvre.jpg"),
    },
  },
  methods: {
    sendToInfo() {
      this.$router.push({ path: "/museums/5" });
    },
  },
});
</script>

<style lang="scss" scoped>
.imagem-height {
  height: 200px;
}

.my-card {
  max-width: 350px;
  margin: 0 auto;
}

.btn-more-info {
  background-color: rgba($color: #9932cc, $alpha: 1);
  color: white;
  top: 0;
  right: 12px;
  transform: translateY(-50%);
  min-height: 25px !important;
  min-width: 25px !important;
}

.text-card {
  text-align: justify;
}
</style>
