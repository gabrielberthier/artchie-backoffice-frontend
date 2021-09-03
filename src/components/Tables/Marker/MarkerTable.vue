<template>
  <div class="q-pa-md">
    <q-table
      class="container"
      title="Markers"
      :rows="rows"
      :columns="columns"
      row-key="markerName"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="asset" :props="props">
            <q-skeleton type="circle" />
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
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { rows } from "./mock/rows";
import { columns } from "./mock/columns";

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  /* Align sub-items to top */
  max-width: 750px;
  margin: 0 auto;
}

.q-pa-md::v-deep(thead) {
  background-color: hsla(2, 78%, 62%, 1);
  color: white;
}
</style>
