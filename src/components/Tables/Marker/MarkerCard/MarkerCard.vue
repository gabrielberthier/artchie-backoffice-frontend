<template>
  <q-dialog ref="dialog" @update:model-value="updateModelValue" :value="modelValue">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Cafe Basilico
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            $・Italian, Cafe
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      stars: ref(3),
      card: ref(false)
    }
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateModelValue(event){
      this.$emit('update:modelValue',event );
    }
  },
  watch:{
    modelValue(newVal){
      if(newVal) this.$refs.dialog.show();
    }
  }
}
</script>
