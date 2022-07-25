<template>
  <div>
    <v-card shaped elevation="24" width="300">
      <v-card-title>
        <div>
          <h3 class="text-center" ><b>Personal Info</b></h3>
          <div class="justify-center">
            <v-list disabled>
              <v-list-item v-for="(info, key) in personal_info" :key="key">
                <v-list-item-icon>
                  <v-icon v-text="info.icon" style="color: #801336;" ></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-lg" > <b>{{info.info}}</b> {{info.value}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
var currentTime = new Date();
const age = currentTime.getFullYear() - 1999;
export default {
  data: () => ({
    personal_info: [
      { icon: "mdi-account-circle", info: "Age: ", value: `${age}` },
      { icon: "mdi-earth", info: "Citizenship: ", value: "Ecuadorian" },
      { icon: "mdi-city", info: "City: ", value: "Quito" },
    ],
  }),
};
</script>
