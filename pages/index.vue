<template>
  <v-container>
    <TestApiButton/>
    <v-btn @click.prevent="$router.push('inspire')">Go to Inspire</v-btn>
  </v-container>
</template>

<script>

import TestApiButton from "../components/TestApiButton";

export default {
  name: 'index',
  middleware: ['auth'],
  components: {
    TestApiButton
  },
}

</script>
