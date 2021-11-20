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
        <q-fab-action class="sub" icon="add_circle" @click="openDialog" />
        <q-fab-action class="sub" icon="filter_list" />
      </q-fab>
    </q-page-sticky>

    <create-museum-dialog
      v-model="openFormDialog"
      @successful-insertion="updateDialog"
    />
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import CarouselMuseum from "../../components/Carousel/Museum/CarouselMuseum.vue";
import CreateMuseumDialog from "src/components/Dialogs/Museum/CreateMuseumDialog.vue";
import { MuseumApiService } from "src/services/api";

export default defineComponent({
  components: { CarouselMuseum, CreateMuseumDialog },
  name: "MuseumIndex",
  setup() {
    const museums = ref([]);

    const getMuseums = async () => {
      const service = new MuseumApiService();
      service
        .fetch()
        .then((response) => (museums.value = response.data.items))
        .catch(console.log);
    };

    onBeforeMount(getMuseums);

    const openFormDialog = ref(false);

    return {
      museums,
      getMuseums,
      openFormDialog,
      updateDialog() {
        console.log("Chamado");
        openFormDialog.value = false;
        getMuseums();
      },
    };
  },
  methods: {
    openDialog() {
      this.openFormDialog = true;
    },
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
