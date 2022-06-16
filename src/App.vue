<template>
  <v-main style="font-family: 'Roboto Slab', serif;">
    <BgAnimation />
      <SideBar />
    <v-container>
      <v-col>
        <AboutAndEducation/>
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import BgAnimation from "./components/BgAnimation";
import SideBar from "./components/SideBar";
import AboutAndEducation from "./components/AboutAndEducation.vue";
export default {
  name: "App",
  components: {
    BgAnimation,
    SideBar,
    AboutAndEducation,
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
