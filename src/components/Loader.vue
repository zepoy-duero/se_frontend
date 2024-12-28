<template>
  <div class="text-center">
    <v-overlay v-model="overlay">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
export default {
  data: () => ({
    overlay: false,
  }),

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
  },
};
</script>
  <style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>