<template>
  <div class="about">
    <v-row class="flex justify-center">
      <v-col class="w-auto">
        <PhotoAndQuote />
      </v-col>
      <v-col> <AboutMeComponent /> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PersonalInfo class="pt-5 m-5 grid place-content-center" />
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
import PhotoAndQuote from "../components/PhotoAndQuote.vue";
import AboutMeComponent from "@/components/AboutMeComponent.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";

export default {
  components: {
    PhotoAndQuote,
    AboutMeComponent,
    PersonalInfo,
  },
  setup() {},
};
</script>
