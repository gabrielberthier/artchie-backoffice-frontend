<template>
  <div class="q-pa-md row items-start justify-center q-gutter-md">
    <div class="col-sm-12 col-md-3">
      <q-card class="my-card">
        <q-img
          src="~/assets/museums/foto-aerea-do-nosso-forte.jpg"
          class="imagem-height"
        >
          <div class="absolute-bottom text-h6">Museu do Forte</div>
        </q-img>
        <q-card-section>
          <div class="text-h6 ellipsis">Museu em São Luís - Maranhão</div>
          <div class="text-subtitle2">forte@mail.com</div>
        </q-card-section>
        <q-card-section>
          <p class="ellipsis-3-lines text-card">
            {{ lorem }}
          </p>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-sm-12 col-md-3">
      <q-card class="my-card">
        <q-img
          src="~/assets/museums/cathedral-of-santa-maria.jpg"
          class="imagem-height"
        >
          <div class="absolute-bottom text-h6">Maria Del Fiore</div>
        </q-img>
        <q-card-section>
          <div class="text-h6">Catedral em Itália</div>
          <div class="text-subtitle2">fiore@mail.com</div>
        </q-card-section>
        <q-card-section>
          <p class="ellipsis-3-lines text-card">
            {{ lorem }}
          </p>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-sm-12 col-md-3">
      <q-card class="my-card">
        <q-img src="~/assets/museums/louvre.jpg" class="imagem-height">
          <div class="absolute-bottom text-h6">Museu do Louvre</div>
        </q-img>
        <q-card-section>
          <q-btn
            fab
            icon="add"
            class="absolute btn-more-info"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Museu de Paris</div>
          </div>
          <div class="text-subtitle2">fiore@mail.com</div>
        </q-card-section>

        <q-card-section>
          <p class="ellipsis-3-lines text-card">
            {{ lorem }}
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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
.imagem-height {
  height: 200px;
}

.btn-more-info {
  background-color: rgba($color: #9932cc, $alpha: 0.9);
  color: white;
}

.text-card {
  text-align: justify;
}
</style>
