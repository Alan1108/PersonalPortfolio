<template>
  <v-main style="font-family: 'Roboto Slab', serif">
    <BgAnimation />
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-main>
</template>

<script>
import BgAnimation from "./components/BgAnimation";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    BgAnimation,
    NavBar,
  },
  data: () => ({
    computed: {
      deviceHeight() {
        return this.$vuetify.breakpoint.height;
      },
      deviceWidth() {
        return this.$vuetify.breakpoint.width;
      },
    },
  }),
};
</script>
