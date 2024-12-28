<template>
  <v-app>
    <v-app-bar flat color="indigo" density="comfortable">
      <template v-slot:prepend>
        <v-avatar v-show="drawer" class="ml-2">
          <v-img src="src/assets/nemsu.jpg"></v-img>
        </v-avatar>
        <v-list-item
          v-show="drawer"
          subtitle="ztechsolutions@gmail.com"
          title="NEMSU SE_System"
        >
        </v-list-item>

        <v-app-bar-nav-icon dark @click.stop="toggle"></v-app-bar-nav-icon>
      </template>

      <template v-slot:append>
        <v-btn icon="mdi-logout"></v-btn>
      </template>
    </v-app-bar>

    <side-nav :toggle_drawer="!drawer" />
    <loader v-show="loading" />
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import Loader from "./components/Loader.vue";
// import { useLoader } from "./stores/loader";
export default {
  components: { SideNav, Loader },
  data() {
    return {
      drawer: false,
      rail: true,
      loading: false,
    };
  },
  name: "App",

  methods: {
    toggle() {
      this.drawer = !this.drawer;
      this.rail = !this.rail;
    },
  },
};
</script>

<style>
@import "@mdi/font/css/materialdesignicons.css";
@import "vuetify/styles";
</style>
