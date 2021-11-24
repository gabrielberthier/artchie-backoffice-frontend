<template>
  <q-card-section class="q-pt-none">
    <q-expansion-item
      v-model="expanded"
      icon="image"
      :label="placementObject?.pose_object_name"
      caption="Placement object name"
    >
      <q-card style="width: auto">
        <q-img
          :src="placementObject?.asset?.temporary_location"
          fit="cover"
          style="height: 300px"
          v-if="shouldBe2D"
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
        <model-fbx :src="placementObject?.asset?.temporary_location" v-else />

        <q-card-section>
          <div class="text-subtitle1">File name:</div>
          <div class="text-caption text-grey card-info-text">
            {{ placementObject?.asset?.file_name }}
          </div>
          <div class="text-subtitle1">Path:</div>
          <div class="text-caption text-grey card-info-text">
            {{ placementObject?.asset?.path }}
          </div>
          <div class="text-subtitle1">Media Type:</div>
          <div class="text-caption text-grey card-info-text">
            {{ placementObject?.asset?.media_type }}
          </div>
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
import { ModelFbx } from "vue-3d-model";

export default {
  setup() {
    return {
      active: ref(true),
      expanded: ref(false),
    };
  },
  components: { ModelFbx },
  props: {
    placementObject: {
      type: Object,
      default: () => ({
        asset: {
          file_name: "",
          media_type: "",
          path: "",
          url: "",
          original_name: "",
        },
      }),
    },
  },
  computed: {
    textActive() {
      return this.active ? "Item is active" : "Item is inactive";
    },
    shouldBe2D() {
      /** @var {String} media_type*/
      const media_type = this.placementObject?.asset?.media_type;
      if (media_type) {
        return media_type.includes("image");
      }
      return true;
    },
  },
};
</script>
