<template>
  <div class="ma-5">
    <v-btn @click.prevent="testApi">Test API</v-btn>
    <span class="ml-5" v-if="message">API response message: {{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "TestApiButton",
  data() {
    return {
      message: null,
      isRequesting: false,
    }
  },
  methods: {
    async testApi() {
      this.message = 'loading...';
      let response = await this.$axios.get('/api/v2/test');
      this.message = response.data.message;
      this.isRequesting = false;
    },
  }
}
</script>

<style scoped>

</style>
