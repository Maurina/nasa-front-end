<template>
<div>
  <!-- Search Word  -->
 <ApolloMutation
    :mutation="require('../graphql/SearchItem.gql')"
     :variables="{ searchString }"
      @done="searchCard"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="350">
    <v-form>
      <v-container>
        <v-card-title> Search </v-card-title>
         <v-card-text>
           <v-text-field v-model="searchString" label="Search" required filled> {{ searchString }} </v-text-field>
        
        
         </v-card-text>
              <v-card-actions>
        <v-btn large color="black white--text" :disabled="loading" @click="mutate()">Search</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
          <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-row>
          <v-col cols="4" v-for="(item, i) in data.Cards" :key="i">
        
                <h2>{{ item.title}}</h2>
           
         
           
          
          </v-col>
        </v-row>
      </div>
     
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>

  
  </div>
</template>

<script>
//import vue-truncate-filter from 'vue-truncate-filter'

export default {
  name: 'Search',

  data: () => ({
   searchString: "",
  }),
  methods: {

      searchCard(){
      return console.log('search')
      

    },
  }
}
</script>

<style scoped>
.result {
  padding: 1rem;
}


</style>
