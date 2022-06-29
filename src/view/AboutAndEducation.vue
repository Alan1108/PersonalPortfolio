<template>
  <div class="about">
    <v-row>
      <v-col class="w-auto">
        <PhotoAndQuote/>
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import PhotoAndQuote from "../components/PhotoAndQuote.vue";

export default {
  components: {
    PhotoAndQuote,
},
  setup() {},
};
</script>
