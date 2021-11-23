<template>
  <q-td key="asset" :props="props" @click="openCard">
    <q-avatar v-if="col.name == 'Image'" size="100px" class="shadow-10">
      <img :src="props.row.image" />
    </q-avatar>
  </q-td>
  <q-td key="markerName" :props="props">
    {{ props.row.markerName }}
  </q-td>
  <q-td key="text" :props="props">
    {{ props.row.text }}
  </q-td>
  <q-td key="title" :props="props">
    {{ props.row.title }}
  </q-td>
  <q-td key="path" :props="props">
    {{ props.row.path }}
  </q-td>
</template>
