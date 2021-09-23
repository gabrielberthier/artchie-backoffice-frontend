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
                @keydown.enter="login"
              />
              <div
                class="input-errors text-red"
                v-for="(error, index) of v$.access?.$errors"
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
                @keydown.enter="login"
              />
              <div
                class="input-errors text-red"
                v-for="(error, index) of v$.password?.$errors"
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
              <router-link :to="{ name: 'signup' }">
                Create a new Account
              </router-link>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { reactive } from "vue";
import _ from "lodash";
import createValidation from "./validation";
import { useQuasar } from "quasar";
import { doLogin } from "./login-call";

export default {
  name: "Login",
  setup() {
    const state = reactive({
      access: "",
      password: "",
    });

    const v$ = createValidation(state);

    const quasar = useQuasar();

    const makeLogin = async () => {
      if (await v$.value.$validate()) {
        const { status, data } = await doLogin(state);
        if (status >= 200 && status < 300) {
          console.log(data);
        } else {
          quasar.dialog({
            title: "Error",
            message: data,
            class: "negative",
          });
        }
      }
    };

    return { state, v$, login: _.debounce(makeLogin, 1000) };
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 360px;
}

.login-background {
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
}

.negative {
  background-color: #c10015;
}
</style>
