<template>
  <q-form @submit="submit" @reset="onReset" class="q-gutter-md">
    <q-input
      filled
      v-model="data.name"
      label="Museu"
      hint="Nome do Museu"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      filled
      v-model="data.email"
      label="Email"
      hint="Email do Museu"
      lazy-rules
      :rules="[(val) => !!val || 'Email is missing', isValidEmail()]"
    />

    <q-input
      filled
      v-model="data.info"
      label="Localização"
      hint="Localização do Museu"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      filled
      v-model="data.description"
      label="Descrição"
      hint="Descrição do Museu"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { useQuasar } from "quasar";
import { reactive } from "vue";
import { mapGetters } from "vuex";
import _ from "lodash";
import { MuseumApiService } from "src/services/api";

export default {
  setup(props, { emit }) {
    const $q = useQuasar();

    const data = reactive({
      name: null,
      email: null,
      info: null,
      description: null,
    });

    return {
      data,
      async submit() {
        const { name, email, info, description } = data;
        const service = new MuseumApiService();
        try {
          const response = await service.post({
            name,
            email,
            info,
            description,
          });
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
          emit("successful-submit");
        } catch (error) {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "cancel",
            message: response.data,
          });
        }
      },
      onReset() {
        data.name = null;
        data.email = null;
        data.info = null;
        data.description = null;
      },
    };
  },
  emits: ["update:data", "successful-submit"],
  computed: {
    ...mapGetters({ token: "auth/userToken" }),
  },
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.data.email) || "Invalid email";
    },
  },
};
</script>
