<template>
  <div>
    Logging in...
    <v-btn @click.prevent="login()">Login manually</v-btn>
  </div>
</template>

<script>
export default {
  name: "login",

  async mounted() {
    let key = this.$config.gpnmUserKey;
    console.log('Login with key', key);
    let response = await this.$auth.loginWith('local', { data: {key} })
    await this.$auth.setUserToken(response.data.token);
  },

  methods: {
    async login() {
      let key = '%9E%2C%BC%CA%2F%3B%19E%D9%A2%17%BD%EF%D48%17t%A2%11%5CG%D3%14%B7%CE%04%FC%3Ccw%E8%C0%9Fx%EE%2F%D4%F2%88%28%15%27%97M%2F%F5~R%DF%E9%17%0A%D5%C1KS%D4%28%13e%C5%05%C6s%CD%5E%06I%B7V%94%9E.%EA%DE%DE%F0%D1M%94%9F%C2ji%C5n%D2%A9%08%10%A6Y%B2%17%D0q%25%9D%24.~3%A9T%FE%04%84%B3%A4%E0%FE_%A2%99%2A%28%7C%DE%2C%D7Ww%83%E6%DA%1A%94%F0%9B%5B%F6%5C%A7%F0mh%10%B1%1F%29%B9v%F0%7F';
      let response = await this.$auth.loginWith('local', { data: {key} })
      console.log('Logged in manually', this.$auth.loggedIn);
    }
  }
}
</script>

<style scoped>

</style>
