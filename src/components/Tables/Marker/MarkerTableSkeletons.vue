<template>
  <q-td key="asset" :props="props" @click="$emit('open-card')">
    <q-skeleton type="circle" />
  </q-td>
  <q-td key="markerName" :props="props">
    <q-skeleton type="text" />
  </q-td>
  <q-td key="text" :props="props">
    <q-skeleton type="text" />
  </q-td>
  <q-td key="title" :props="props">
    <q-skeleton type="text" />
  </q-td>
  <q-td key="path" :props="props"> </q-td>
</template>
