<template>
  <v-app>
    <v-app-bar flat color="white" density="compact">
      <template v-slot:prepend>
        <v-avatar>
          <v-img src="src/assets/nemsu.jpg"></v-img>
        </v-avatar>
        <v-list-item
          v-show="drawer"
          prepend-avatar="src/assets/nemsu.jpg"
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

    <side-nav :toggle_drawer="drawer" />
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
export default {
  components: { SideNav },
  data() {
    return {
      drawer: false,
      rail: true,
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
