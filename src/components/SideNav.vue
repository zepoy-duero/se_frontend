<template>
  <v-navigation-drawer app permanent>
    <v-list-item
      prepend-avatar="src/assets/nemsu.jpg"
      subtitle="ztechsolutions@gmail.com"
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
        { title: "Dashboard", icon: "mdi-view-dashboard", url: "/" },
        {
          title: "Students",
          icon: "mdi-account-multiple",
          url: "/list-students",
        },
        { title: "Prospectus", icon: "mdi-cart", url: "/program-prospectus" },

        { title: "Documentation", icon: "mdi-help-box", url: "/documentation" },
      ],
      right: null,
    };
  },
};
</script>
  
  <style></style>