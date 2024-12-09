<template>
  <v-card flat class="mt-8 mx-auto overflow-visible" max-width="100%">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="deep-purple"
      elevation="12"
      max-width="calc(100% - 32px)"
      rounded="lg"
    >
      <v-sparkline
        :labels="labels"
        :model-value="value"
        color="white"
        line-width="2"
        padding="16"
        height="100"
        class="pa-4"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0 pb-1">
      <div class="text-h6 font-weight-light mb-2">ComSci</div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="me-2" size="small"> mdi-clock </v-icon>
      <span class="text-caption text-grey font-weight-light"
        >last registration 26 minutes ago</span
      >
    </v-card-text>
  </v-card>
</template>
  <script>
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>
  <style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>