<template>
  <v-navigation-drawer app permanent>
    <v-list-item
      prepend-avatar="src/assets/nemsu.jpg"
      subtitle="ZtechSolutions@gmail.com"
      title="NEMSU SE_System"
    >
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script>
export default {
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