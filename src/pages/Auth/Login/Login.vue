<template>
  <q-page class="login-background row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Artchie - Login</h5>
      </div>
      <div class="row">
        <q-card bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                filled
                clearable
                v-model="v$.access.$model"
                label="Access"
              />
              <div
                class="input-errors text-red"
                v-for="(error, index) of v$?.access?.$errors"
                :key="index"
              >
                <div class="error-msg">
                  {{ error.$message }}
                </div>
              </div>
              <q-input
                filled
                clearable
                v-model="v$.password.$model"
                type="password"
                label="Password"
              />
              <div
                class="input-errors text-red"
                v-for="(error, index) of v$?.password?.$errors"
                :key="index"
              >
                <div class="error-msg">
                  {{ error.$message }}
                </div>
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              :disabled="v$.$invalid"
              unelevated
              color="purple-4"
              size="lg"
              class="full-width"
              label="Login"
              @click="login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">
              Not reigistered?
              <router-link :to="{ name: 'signup' }"
                >Create a new Account
              </router-link>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, computed, reactive } from "vue";
import createValidation from "./validation";

export default {
  name: "Login",
  setup() {
    const state = reactive({
      access: "",
      password: "",
    });

    const v$ = createValidation(state);

    return { state, v$ };
  },

  methods: {
    async login() {
      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        const { access, password } = this.state;
        console.log(access);
        console.log(password);
      }
    },
  },
};
</script>

<style>
.q-card {
  width: 360px;
}

.login-background {
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
}
</style>
