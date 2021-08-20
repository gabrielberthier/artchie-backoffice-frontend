<template>
  <q-btn round dense flat color="white" icon="notifications">
    <q-badge color="red" text-color="white" floating> 5 </q-badge>
    <q-menu>
      <q-list style="min-width: 100px">
        <messages></messages>
        <q-card class="text-center no-shadow no-border">
          <q-btn
            label="View All"
            style="max-width: 120px !important"
            flat
            dense
            class="text-indigo-8"
          ></q-btn>
        </q-card>
      </q-list>
    </q-menu>
  </q-btn>
</template>
