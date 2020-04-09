<template>
  <v-app>
   <div>
    <Header/>

    <router-view></router-view>
   </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
