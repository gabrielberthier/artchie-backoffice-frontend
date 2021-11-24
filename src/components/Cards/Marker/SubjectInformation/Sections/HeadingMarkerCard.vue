<template>
  <q-card-section>
    <q-btn
      fab
      color="primary"
      icon="place"
      class="absolute"
      style="top: 0; right: 12px; transform: translateY(-50%)"
    />

    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">{{ assetName }}</div>
      <div
        class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
      >
        <q-icon name="today" />
        15/03/2021
      </div>
    </div>
  </q-card-section>
</template>

<script>
export default {
  props: ["assetName"],
};
</script>
