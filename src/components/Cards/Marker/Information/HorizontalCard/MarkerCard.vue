<template>
  <div class="row justify-around">
    <div class="col-md-5">
      <q-card class="my-card" flat>
        <q-card-section class="q-pt-xs bg-blue text-white">
          <div class="text-h5 q-mt-sm q-mb-xs">Marker</div>
        </q-card-section>
        <q-separator />
        <q-card-section horizontal>
          <marker-card-actions vertical class="justify-around q-px-md" />
          <q-img
            :src="marker?.asset?.temporary_location"
            fit="cover"
            style="height: 300px"
            horizontal
          />
        </q-card-section>
        <q-separator />
        <heading-marker-card :asset-name="marker.marker_name" />
        <body-marker-card
          v-model="activeAsset"
          :title="marker.marker_title"
          :text="marker.marker_text"
        />
      </q-card>
    </div>
    <div class="col-md-5">
      <pose-object-card :placement-object="marker.pose_object" />
    </div>
  </div>
</template>

<script>
import { makeMarkerModel } from "src/domain/marker/marker-model-factory";
import MarkerCardActions from "../../ActionButtons/MarkerCardActions.vue";
import BodyMarkerCard from "../Sections/BodyMarkerCard.vue";
import HeadingMarkerCard from "../Sections/HeadingMarkerCard.vue";
import PoseObjectCard from "components/Cards/PlacementObject/PoseObjectCard.vue";

export default {
  data() {
    return {
      activeAsset: true,
    };
  },
  components: {
    MarkerCardActions,
    BodyMarkerCard,
    HeadingMarkerCard,
    PoseObjectCard,
  },
  props: {
    marker: {
      type: Object,
      default: () => {
        return {
          ...makeMarkerModel(),
        };
      },
    },
  },
};
</script>
