<template>
  <div class="contact grid grid-cols-1 place-items-center">
    <v-card class="m-5 w-2/4" elevation="24" shaped>
      <div class="m-5 text-lg flex justify-center">
        <h1 class="text-4xl font-bold">Contact Me</h1>
      </div>
    </v-card>
    <v-card class="m-5 w-2/4" elevation="24" text-color="white" shaped>
      <v-form @submit.prevent="submitForm" class="flex flex-col">
        <v-text-field
          label="Name"
          v-model="name"
          required
          class="m-5"
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="email"
          class="m-5"
          required
        ></v-text-field>
        <v-text-field
          label="Subject"
          v-model="subject"
          class="m-5"
          required
        ></v-text-field>
        <v-textarea
          label="Message"
          v-model="message"
          required
          class="m-5"
        ></v-textarea>
        <div class="flex justify-center">
          <v-btn type="submit" class="m-5 rounded-full" color="#ee4540"
            >Say Hello!</v-btn
          >
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    submitForm() {},
  },
};
</script>
