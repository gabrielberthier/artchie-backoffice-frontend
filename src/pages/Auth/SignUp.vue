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
              <q-input filled clearable v-model="email" type="email" label="Email" />
              <q-input filled clearable v-model="username" type="text" label="Username" />
              <q-input
                filled
                clearable
                v-model="password"
                type="password"
                label="Password"
              />
              <q-input
                v-model="password_confirmation"
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
export default {
  name: "Login",
  data() {
    return {
      password: "",
      email: "",
      username: "",
      password_confirmation: "",
      isPwd: true,
    };
  },
};
</script>

<style>
.q-card {
  width: 360px;
}

.signup-background {
  background-color: #1fd1f9;
  background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
}
</style>
