<template>
  <div class="q-pa-md q-my-md">
    <carousel-museum v-if="museums.length" :museums="museums" />
    <q-card class="my-card bg-red text-white" v-else>
      <q-card-section>
        <div class="text-h3">Nada aqui</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">
          Adicione museus ao aplicativo utilizando o botão abaixo
        </div>
      </q-card-section>
    </q-card>

    <q-page-sticky
      position="bottom"
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
import { isSuccessfulResponse, makeSelection } from "src/services/http-base";
import { defineComponent, onBeforeMount, ref } from "vue";
import CarouselMuseum from "../../components/Carousel/Museum/CarouselMuseum.vue";

export default defineComponent({
  components: { CarouselMuseum },
  name: "MuseumIndex",
  setup() {
    const museums = ref([]);
    const getMuseums = async () => {
      const response = await makeSelection("api/museum/");

      if (isSuccessfulResponse(response)) {
        museums.value = response.data.data.items;
      }
    };

    onBeforeMount(getMuseums);

    return {
      museums,
      getMuseums,
    };
  },
});
</script>

<style lang="scss" scoped>
.button-more {
  position: fixed;
  bottom: 5px;
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
