<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
    <h3>Home page</h3>
    </v-flex>
  </v-layout>
</template>

<script>
import transition from '~/mixins/transition';

export default {
  mixins: [transition]
}
</script>
