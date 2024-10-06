<template>
  <v-navigation-drawer app permanent :mini-variant="mini_variant">
    <v-list-item>
      <v-avatar>
        <v-img alt="John" src="@/assets/nemsu.jpg"></v-img>
      </v-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script>
export default {
  props: ["mini_variant"],
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", url: "/dashboard" },
        { title: "Students", icon: "mdi-account-multiple", url: "/" },
        { title: "Prospectus", icon: "mdi-cart", url: "/prospectus" },

        { title: "Documentation", icon: "mdi-help-box", url: "/documentation" },
      ],
      right: null,
    };
  },
};
</script>
  
  <style></style>