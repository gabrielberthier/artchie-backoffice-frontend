<template>
  <q-dialog v-model="showChatDialog" position="right">
    <q-card>
      <q-card-section>
        <div class="text-h6">This is your Chat</div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section style="max-height: 50vh" class="scroll">
        <p v-for="n in 15" :key="n">Put Chat in here!!! Put Chat in here!!!</p>
      </q-card-section>

      <q-separator></q-separator>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      showChatDialog: false,
    };
  },
};
</script>
