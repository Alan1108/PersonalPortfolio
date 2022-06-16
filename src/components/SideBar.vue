<template>
  <v-navigation-drawer
    floating
    style="position: relative; border-radius: 30px; margin-left: 10px;"
    color="#363636"
    dark
    permanent
    width="57"
    height="330"
  >
    <v-col >
      <v-row>
        <v-list>
          <v-list-item v-for="item in routes" :key="item.title" link>
            <v-icon color="#F8F8F8">{{ item.icon }}</v-icon>
          </v-list-item>
        </v-list>
      </v-row>
      <v-row >
        <v-list>
          <v-list-item
            v-for="item in social_links"
            :key="item.title"
            link
            :href="item.href"
          >
            <v-icon color="#F8F8F8">{{ item.icon }}</v-icon>
          </v-list-item>
        </v-list>
      </v-row>
    </v-col>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { icon: "mdi-account" },
      { icon: "mdi-source-branch" },
      { icon: "mdi-email-fast-outline" },
    ],
    social_links: [
      { href: "https://github.com/Alan1108", icon: "mdi-github" },
      { href: "https://www.linkedin.com/in/alanibm/", icon: "mdi-linkedin" },
      { href: "https://www.instagram.com/alan_ibm/", icon: "mdi-instagram" },
    ],
  }),
};
</script>
