<template>
  <v-navigation-drawer :rail="drawer" app permanent>
    <!-- <v-divider class="mt-2"></v-divider> -->
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
  props: ["toggle_drawer"],
  data() {
    return {
      toggle: false,
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
  computed: {
    drawer() {
      console.log(this.toggle_drawer);
      return this.toggle_drawer;
    },
  },
};
</script>
  
  <style></style>