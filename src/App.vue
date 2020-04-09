<template>
  <v-app>
   <div>
    <app-header></app-header>

    <router-view></router-view>
   </div>
  </v-app>
</template>

<script>
import header from './components/Header'

export default {
  name: 'App',

  components: {
    'app-header' : header,
  },

  data: () => ({
    //
  }),
};
</script>
