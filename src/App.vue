<template>
  <v-app>
    <v-app-bar app color="primary" dark/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$vuetify.theme.dark = true
  },
  data: () => ({
    //
  }),
};
</script>
