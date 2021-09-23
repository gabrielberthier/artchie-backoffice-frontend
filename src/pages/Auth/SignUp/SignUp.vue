<template>
  <q-page class="signup-background row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Artchie - Register</h5>
      </div>
      <div class="row">
        <q-card bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                filled
                clearable
                v-model="v$.email.$model"
                type="email"
                label="Email"
              />
              <error-component :errors="v$.email?.$errors" />
              <q-input
                filled
                clearable
                v-model="v$.username.$model"
                type="text"
                label="Username"
              />
              <error-component :errors="v$.username?.$errors" />
              <q-input
                filled
                clearable
                v-model="v$.password.$model"
                type="password"
                label="Password"
              />
              <error-component :errors="v$.password?.$errors" />
              <q-input
                v-model="v$.passwordConfirmation.$model"
                filled
                label="Password confirmation"
                :type="isPwd ? 'password' : 'text'"
                hint="Password with toggle"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <error-component :errors="v$.passwordConfirmation?.$errors" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="purple-4"
              size="lg"
              class="full-width"
              label="Register"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">
              Already registered?
              <router-link :to="{ name: 'login' }"> Login </router-link>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { reactive, ref } from "vue";
import validationFactory from "./sign-up-validation";
import ErrorComponent from "./ErrorComponent.vue";

export default {
  components: { ErrorComponent },
  name: "Login",
  setup() {
    const state = reactive({
      password: "",
      email: "",
      username: "",
      passwordConfirmation: "",
    });

    const v$ = validationFactory(state);

    return { state, v$, isPwd: ref(true) };
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 360px;
}

.signup-background {
  background-color: #1fd1f9;
  background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
}
</style>
