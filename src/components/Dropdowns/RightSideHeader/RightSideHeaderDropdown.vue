<template>
  <q-btn round dense flat color="white" icon="account_circle">
    <!-- <q-badge color="red" text-color="white" floating> 5 </q-badge> -->
    <q-menu>
      <q-list class="list-header-dropdown-right">
        <menu-options />

        <q-item clickable v-ripple>
          <q-item-section class="">Logout</q-item-section>
          <q-item-section avatar>
            <q-btn round dense flat color="blue" icon="logout"> </q-btn>
          </q-item-section>

          <!-- <q-item-section side>Side</q-item-section> -->
        </q-item>
        <q-card class="text-center no-shadow no-border">
          <q-btn
            style="max-width: 120px !important"
            flat
            dense
            padding="10px 5px"
          >
            <q-icon name="settings" />
          </q-btn>
        </q-card>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
import MenuOptions from "./MenuOptions.vue";

export default {
  components: {
    MenuOptions,
  },
};
</script>

<style lang="scss">
.list-header-dropdown-right {
  font-weight: 400;
  min-width: 150px;
  color: #333;
}
</style>
