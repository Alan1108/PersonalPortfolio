<template>
  <div class="pt-20 pl-10">
    <div class="overflow-visible relative mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 text-center">
      <v-img
        class="absolute -left-6 w-52 h-52 rounded-full shadow-lg"
        src="../assets/ProfilePhoto.jpg"
      >
      </v-img>
      <div
          class="flex flex-col py-5 pl-24"
        >
          <strong class=" text-xl dark:text-slate-200">Alan Bermudez</strong>
          <span class=" text-xl dark:text-slate-400">“Be greater than yesterday”</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
