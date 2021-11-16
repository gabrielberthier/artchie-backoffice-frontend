<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-input
      filled
      v-model="name"
      label="Museu"
      hint="Nome do Museu"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      filled
      v-model="email"
      label="Email"
      hint="Email do Museu"
      lazy-rules
      :rules="[(val) => !!val || 'Email is missing', isValidEmail()]"
    />

    <q-input
      filled
      v-model="info"
      label="Localização"
      hint="Localização do Museu"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      filled
      v-model="description"
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
import { ref } from "vue";
import { mapGetters } from "vuex";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const email = ref(null);
    const info = ref(null);
    const description = ref(null);

    return {
      name,
      email,
      info,
      description,

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
        email.value = null;
        info.value = null;
        description.value = null;
      },
    };
  },
  computed: {
    ...mapGetters({ token: "auth/userToken" }),
  },
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.email) || "Invalid email";
    },
  },
};
</script>
