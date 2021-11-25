<template>
  <div class="q-my-md">
    <q-table
      class="container"
      title="Markers"
      :rows="rows"
      :columns="columns"
      row-key="markerName"
    >
      <template v-slot:top>
        <div class="text-h6">Markers</div>

        <q-space />

        <q-input dense debounce="300" color="primary">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          round
          icon="add"
          class="q-ml-sm colored-btn"
          size="md"
          @click="openMarkerCreatorCard"
        />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" v-if="hasMarkers">
          <q-td key="asset" :props="props">
            <q-avatar
              size="45px"
              class="shadow-10"
              @click="openCard(props.row.id)"
            >
              <img :src="props.row.asset" />
            </q-avatar>
          </q-td>
          <q-td key="markerName" :props="props">
            {{ props.row.markerName }}
          </q-td>
          <q-td key="text" :props="props" class="ellipsis">
            {{ truncateText(props.row.text) }}
          </q-td>
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="path" :props="props">
            {{ props.row.path }}
          </q-td>
        </q-tr>
        <q-tr v-else>
          <marker-table-skeletons />
        </q-tr>
      </template>
    </q-table>
    <create-marker v-model="markerCreator" @success-created="insertMarker" />
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
import { columns } from "./mock/columns";
import MarkerTableSkeletons from "./MarkerTableSkeletons.vue";
import CreateMarker from "src/components/Cards/Marker/Create/CreateMarker.vue";
import { MarkerApiService } from "src/services/api/marker";
import { createPresignedUrl } from "src/services/aws/get-objects-urls";

export default {
  components: {
    CreateMarker,
    MarkerTableSkeletons,
  },
  props: {
    museumId: {
      type: Number,
    },
  },
  setup(props) {
    const hasMarkers = computed(() => !!markers.value.length);
    const markers = ref([]);
    const selectedMarker = ref(null);
    const rows = computed(() => {
      return markers.value.map((marker) => ({
        id: marker.id,
        asset: createPresignedUrl(marker.asset.path),
        markerName: marker.name,
        text: marker.dataInfo.text,
        title: marker.dataInfo.title,
        path: marker.asset.path,
      }));
    });

    const getMarkers = async (museumId) => {
      const service = new MarkerApiService();
      const data = await service.fetchByMuseumId(museumId);

      markers.value = data.items;
    };

    watch(
      () => props.museumId,
      (value, second) => {
        if (value) {
          getMarkers(props.museumId);
        }
      }
    );

    return {
      columns: reactive(columns),
      rows,
      markerCreator: ref(false),
      hasMarkers,
      getMarkers,
      selectedMarker,
    };
  },
  methods: {
    openCard(markerId) {
      this.$router.push({ name: "markerPage", params: { id: markerId } });
    },
    openMarkerCreatorCard() {
      this.markerCreator = true;
    },
    insertMarker() {
      this.getMarkers(this.museumId);
    },
    /**
     * @param {String}
     */
    truncateText(str) {
      if (str.length < 45) return str;
      return str.substring(0, 45) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  /* Align sub-items to top */
  max-width: 750px;
  margin: 0 auto;
}

.q-py-md {
  &::v-deep(thead) {
    th {
      color: white;
      font-weight: bold !important;
    }
    background-color: hsla(2, 78%, 62%, 1);
  }
}

.colored-btn {
  // background-color: hsla(2, 78%, 62%, 1);
  background: hsla(22, 100%, 78%, 1);
  color: white;
}
</style>
