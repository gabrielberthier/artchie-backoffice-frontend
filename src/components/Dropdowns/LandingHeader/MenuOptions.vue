<template>
  <div>
    <q-item clickable v-ripple to="/intern">
      <q-item-section>Dashboard</q-item-section>
      <q-item-section avatar>
        <q-btn round dense flat icon="account_box"> </q-btn>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section>Profile</q-item-section>
      <q-item-section avatar>
        <q-btn round dense flat icon="account_box"> </q-btn>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section>Notifications</q-item-section>
      <q-item-section avatar>
        <q-btn round dense flat icon="notifications">
          <q-badge color="red" text-color="white" floating> 5 </q-badge>
        </q-btn>
      </q-item-section>
    </q-item>
  </div>
</template>
