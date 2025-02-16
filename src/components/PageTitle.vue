<template>
  <span>{{ pageTitle }}</span>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      pageTitle: null,
    };
  },
  created() {
    this.pageTitle = this.title;
    console.log(this.pageTitle);
  },
};
</script>