<template>
  <nav>
    <div class="mx-auto overflow-hidden">
      <v-app-bar
        elevate-on-scroll
        dense
        dark
        scroll-target="#scrolling-techniques-7"
        height="60"
      >
        <v-toolbar-title class="text-2xl" id="name">
          Alan Ibm - Software Dev
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-for="link in links" :key="link.title" data-app class="sticky">
          <v-btn icon router :to="link.route">
            <v-icon size="30">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div v-for="(link, index) in social_links" :key="index">
          <v-btn icon :href="link.href" target="_blank">
            <v-icon size="30">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-app-bar>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { icon: "mdi-account", title: "Main Panel", route: "/" },
      { icon: "mdi-source-branch", title: "Projects", route: "/projects" },
      {
        icon: "mdi-email-fast-outline",
        title: "Contact Info",
        route: "/contact",
      },
    ],
    social_links: [
      { href: "https://github.com/Alan1108", icon: "mdi-github" },
      { href: "https://www.linkedin.com/in/alanibm/", icon: "mdi-linkedin" },
      { href: "https://www.instagram.com/alan_ibm/", icon: "mdi-instagram" },
    ],
  }),
};
</script>
