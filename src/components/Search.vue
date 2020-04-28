<template>
<div>
  <v-card class="mx-auto" max-width="350">
       <v-card-text>
            <v-text-field v-model="searchString" label="Search" required filled> {{ searchString }} </v-text-field>
            </v-card-text>
            </v-card>

  <!-- Apollo watched Graphql query -->
  <ApolloQuery :query="require('../graphql/SearchItem.gql')"
   :variables="{ searchString }">
    <template v-slot="{ result: { loading, error, data } }">


      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occured</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-row>
          <v-col cols="4" v-for="(item, i) in data.Cards" :key="i">
            <v-card class="mx-auto" max-width="350">
              <v-card-text>
                    <v-card-text>
                <h2>{{ item.title}}</h2>
                <p>
                  {{ item.description  | truncate(100)   }}
                </p>
              
              </v-card-text>
              </v-card-text>
       
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
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

      searchCard(item){
        console.log(item)
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
