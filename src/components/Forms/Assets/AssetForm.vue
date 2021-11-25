<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div
      class="q-form-section-break q-form-builder-element"
      required="required"
      debounce="500"
    >
      <p class="text-h5 text-center text-white q-py-md form-title">
        Create Marker
      </p>
      <hr
        role="separator"
        aria-orientation="horizontal"
        class="q-separator q-separator--horizontal bg-purple"
        style="margin-bottom: 8px; margin-top: 8px"
      />
      <p class="text-caption">Define a marker and its placement object</p>
    </div>

    <q-input
      filled
      v-model="marker.marker_name"
      label="Marker name *"
      hint="The original marker name"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />
    <q-input
      filled
      v-model="marker.marker_title"
      label="Marker title"
      hint="An associated title can be displayed to your final user based on this marker"
      lazy-rules
    />
    <q-input
      filled
      v-model="marker.marker_text"
      label="Marker text"
      hint="An associated text can be displayed to your final user based on this marker"
      lazy-rules
    />

    <image-files @filechanged="addMarkerAsset" ref="fileMarker" />

    <div
      class="q-form-section-break q-form-builder-element"
      required="required"
      debounce="500"
    >
      <label class="text-h6">Pose Object</label>
      <hr
        role="separator"
        aria-orientation="horizontal"
        class="q-separator q-separator--horizontal bg-purple"
        style="margin-bottom: 8px; margin-top: 8px"
      />
      <p class="text-caption">Which object will be placed over this marker?</p>
    </div>

    <q-input
      filled
      v-model="marker.pose_object.pose_object_name"
      label="Object name*"
      hint="The name for this placement object"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <image-files @filechanged="addObjectAsset" ref="filePlacementObject" />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { useQuasar } from "quasar";
import { reactive, ref, inject, computed } from "vue";
import ImageFiles from "../../Files/ImageFiles.vue";
import { useStore } from "vuex";
import { submitMarkerUseCase } from "src/services/use-cases/submit-marker";
import { makeMarkerModel } from "src/domain/marker/marker-model-factory";

export default {
  components: { ImageFiles },
  setup(props, { emit }) {
    const $q = useQuasar();
    const markerAsset = ref(null);
    const poseAsset = ref(null);
    const uuid = inject("uuid", "");
    const museumId = inject("museumId");
    const markerModel = makeMarkerModel();
    const filePlacementObject = ref(null);
    const fileMarker = ref(null);

    const store = useStore();

    const marker = reactive({ ...markerModel });
    const token = computed(() => store.getters["auth/userToken"]);

    const onReset = () => {
      Object.assign(marker, { ...markerModel });
      markerAsset.value = null;
      poseAsset.value = null;
      filePlacementObject.value.cleanInput();
      fileMarker.value.cleanInput();
    };

    return {
      marker,
      markerAsset,
      poseAsset,
      addMarkerAsset: (file) => {
        markerAsset.value = file;
      },
      addObjectAsset: (file) => {
        poseAsset.value = file;
      },
      onSubmit: async () => {
        try {
          const response = await submitMarkerUseCase(
            token.value,
            uuid.value,
            museumId.value,
            marker,
            markerAsset.value,
            poseAsset.value
          );
          if (response) {
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted!",
            });
            onReset();
            emit("close-dialog", response);
          } else {
            $q.notify({
              color: "red-5",
              textColor: "white",
              icon: "close",
              message: "Missing values!",
            });
          }
        } catch (error) {
          $q.dialog({
            title: "Error",
            message: error.data,
            class: "negative",
          });
        }
      },
      filePlacementObject,
      fileMarker,
      onReset,
    };
  },
};
</script>

<style scoped>
.form-title {
  margin: 0 auto;
  align-self: center;
  border-radius: 5px;
  background: -webkit-linear-gradient(
    321deg,
    hsla(22, 100%, 78%, 1) 0%,
    hsla(2, 78%, 62%, 1) 100%
  );
}
</style>
