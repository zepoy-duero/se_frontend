<template>
  <v-app>
    <side-nav />
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
export default {
  components: { SideNav },
  name: "App",
};
</script>

<style>
@import "@mdi/font/css/materialdesignicons.css";
@import "vuetify/styles";
</style>
