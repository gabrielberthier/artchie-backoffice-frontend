<template>
  <div class="q-py-md">
    <q-table
      class="container"
      title="Markers"
      :rows="rows"
      :columns="columns"
      row-key="markerName"
    >
    <template v-slot:top>
        <div class="text-h6">
          Markers
        </div>
        
        <q-space />
        
        
        <q-input  dense debounce="300" color="primary" >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn round icon="add" class="q-ml-sm colored-btn" size="md"  @click="openCard" />
        
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="asset" :props="props"  @click="openCard">
            <q-skeleton type="circle" />
          </q-td>
          <q-td key="markerName" :props="props">
            <!-- {{ props.row.markerName }} -->
            <q-skeleton type="text" />
          </q-td>
          <q-td key="text" :props="props">
            <!-- {{ props.row.text }} -->
            <q-skeleton type="text" />
          </q-td>
          <q-td key="title" :props="props">
            <!-- {{ props.row.title }} -->
            <q-skeleton type="text" />
          </q-td>
          <q-td key="path" :props="props">
            <!-- {{ props.row.path }} -->
            <q-skeleton type="text" />
          </q-td>
        </q-tr>
      </template>
    </q-table>

  <marker-card v-model="card"/>

  </div>
</template>

<script>
import { ref } from 'vue'
import { rows } from "./mock/rows";
import { columns } from "./mock/columns";
import MarkerCard from './MarkerCard/MarkerCard.vue';

export default {
  components: { MarkerCard },

  setup() {
    return {
      columns,
      rows,
      card: ref(false),
    };
  },
  methods: {
    openCard(){
      this.card = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  /* Align sub-items to top */
  max-width: 750px;
  margin: 0 auto;
}

.q-py-md {
  &::v-deep(thead){
    th{
      color: white;
      font-weight: bold !important;
    }
    background-color: hsla(2, 78%, 62%, 1);
  }
}

.colored-btn{
  // background-color: hsla(2, 78%, 62%, 1);
   background: hsla(22, 100%, 78%, 1);
  color: white;
}
</style>
