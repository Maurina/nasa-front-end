<template>


  <!-- Apollo watched Graphql query -->
  <ApolloQuery :query="require('../graphql/AllCards.gql')"
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
                <h2>{{ item.title}}</h2>
                <p>
                  {{ item.description  | truncate(100)   }}
                </p>
                <p>{{ item.source }}</p>
                <p>{{ item.keywords }}</p>
                <p>{{ item.dateCreated }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="black white--text" @click="editCard(item)">
                  Edit
                </v-btn>
                  <v-btn text color="green white--text"  @click="newCard">
                  New Card
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>

</template>

<script>
//import vue-truncate-filter from 'vue-truncate-filter'

export default {
  name: 'Home',

  data: () => ({
   searchString: "",
  }),
  methods: {
    editCard(card) {
      console.log(card)
      this.$store.dispatch('editCard', card)
      this.$router.push('graphqledit')
    },
  newCard(){
      this.$router.push('/graphqlcard')
  }
  }
}
</script>

<style scoped>
.result {
  padding: 1rem;
}


</style>
