<template>
  <v-container>
    <TestApiButton/>
    <v-btn @click.prevent="$router.push('/')">Go to Home</v-btn>
  </v-container>
</template>

<script>

import TestApiButton from "../components/TestApiButton";

export default {
  name: 'inspire',
  middleware: ['auth'],
  components: {
    TestApiButton
  },
}

</script>
