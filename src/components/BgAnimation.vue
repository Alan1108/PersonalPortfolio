<template>
  <particles-bg
    type="cobweb"
    num="200"
    :canvas="{ backgroundColor: '#801336', position: 'fixed' }"
    :bg="true"
  />
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  components: {
    ParticlesBg,
  },
  data: () => ({}),
};
</script>
