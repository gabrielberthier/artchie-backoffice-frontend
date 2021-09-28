<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-input
      filled
      v-model="name"
      label="Your name *"
      hint="Name and surname"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      filled
      type="number"
      v-model="age"
      label="Your age *"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 0 && val < 100) || 'Please type a real age',
      ]"
    />

    <image-files @filechanged="submitFile" />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import ImageFiles from "../Files/ImageFiles.vue";
import { fileUpload } from "src/services/http-base";
import { mapGetters } from "vuex";

export default {
  components: { ImageFiles },
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);

    return {
      name,
      age,

      onSubmit() {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      },

      onReset() {
        name.value = null;
        age.value = null;
      },
    };
  },
  computed: {
    ...mapGetters({ token: "auth/userToken" }),
  },
  methods: {
    async submitFile(file) {
      if (!file) return;
      const response = await fileUpload("api/upload-file", this.token, file, {
        params: {
          prefix: "marker",
        },
      });
      console.log(response);
    },
  },
};
</script>
