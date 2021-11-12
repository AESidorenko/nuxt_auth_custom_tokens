<template>
  <v-container>
    <TestApiButton/>
    <v-btn @click.prevent="$router.go('/')">Go to Home</v-btn>
  </v-container>
</template>

<script>

import TestApiButton from "../components/TestApiButton";

export default {
  name: 'inspire',
  components: {
    TestApiButton
  },
}

</script>
