<template>
  <v-card flat class="mt-8 mx-auto overflow-visible" max-width="100%">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="indigo"
      elevation="12"
      max-width="100%"
      rounded="lg"
    >
      <v-sparkline
        :labels="labels"
        :model-value="value"
        color="white"
        line-width="15"
        padding="16"
        :label-size="4"
        type="bar"
        class="pa-6"
        height="100"
      ></v-sparkline>
    </v-sheet>
  </v-card>
</template>
      <script>
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [
      900, 1100, 950, 850, 800, 900, 400, 1356, 860, 1290, 1310, 1450, 1420,
      1623,
    ],
  }),
};
</script>
      <style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>