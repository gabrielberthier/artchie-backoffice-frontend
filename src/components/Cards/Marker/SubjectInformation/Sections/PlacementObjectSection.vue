<template>
  <q-card-section class="q-pt-none">
    <q-expansion-item
      v-model="expanded"
      icon="image"
      label="Placement object"
      caption="Placement object name"
    >
      <q-card style="width: auto">
        <q-img
          src="https://i.pinimg.com/originals/5c/5d/86/5c5d867cbe7287af854ea84c4d7b4a86.jpg"
          fit="cover"
          style="height: 300px"
        >
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="delete"
            color="negative"
            style="top: 8px; left: 8px; cursor: pointer"
          >
            <q-tooltip> Delete object </q-tooltip>
          </q-icon>
        </q-img>
        <q-card-section>
          <div class="text-subtitle1">File name:</div>
          <div class="text-caption text-grey card-info-text">pathname.png</div>
          <div class="text-subtitle1">Path:</div>
          <div class="text-caption text-grey card-info-text">file/to/pathname.png</div>
          <div class="text-subtitle1">UUID:</div>
          <div class="text-caption text-grey card-info-text">
            f3b3b6c7-7f94-4ec3-8026-d6d5f6295e05
          </div>
          <div class="text-subtitle1">Media Type:</div>
          <div class="text-caption text-grey card-info-text">PNG</div>
          <div class="row no-wrap items-center q-pt-md">
            <div class="text-subtitle1">{{ textActive }}</div>
            <q-toggle v-model="active" color="green" keep-color />
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-card-section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      active: ref(true),
      expanded: ref(false),
    };
  },
  computed: {
    textActive() {
      return this.active ? "Item is active" : "Item is inactive";
    },
  },
};
</script>
