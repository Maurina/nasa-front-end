<template>
<div>

    <!-- Create a New Card -->
  <ApolloMutation
    :mutation="require('../graphql/CreateOneCard.gql')"
    :variables="{
      title,
      description,
      source,
      dateCreated,
      keywords,
      }"
      @done="onDone"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="350">
    <v-form>
      <v-container>
        <v-card-title> Create New Card </v-card-title>
         <v-card-text>
            <v-text-field v-model="title" label="Title" required filled> {{ title }} </v-text-field>
            <v-text-field v-model="source" label="Source" required filled> {{ source }}</v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled> {{ keywords }}</v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled> {{ dateCreated }}</v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable> {{ description }}</v-textarea>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="green white--text" :disabled="loading" @click="mutate()">New Card</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>

</div>
</template>


<script>
export default {
  data: function() {
    return {
      title: '',
      description:'',
      source: '',
      keywords: '',
      dateCreated: '',
      id: '',

      
    }
  },
  methods: {

    onDone(card){
      console.log(card)
      return console.log("new card created")
    },


    returnHome() {
      this.$router.push('/')
    },
    
    
  }
}
</script>

<style scoped>
.styling{
  display: flex;
  justify-content: space-evenly;
}
</style>