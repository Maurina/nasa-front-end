<template>
<div>
   <v-row class="styling">
<!-- Update a Card -->
 <ApolloMutation
    :mutation="require('../graphql/UpdateOneCard.gql')"
    :variables="{
      title,
      description,
      source,
      dateCreated,
      }"
      @done="updateCard"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" width="550">
    <v-form>
      <v-container>
        <v-card-title> Update Card </v-card-title>
         <v-card-text>
            <v-text-field v-model="title" label="Title" required filled> {{ title }} </v-text-field>
            <v-text-field v-model="source" label="Source" required filled> {{ source }} </v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled> {{ keywords }}</v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled> {{ dateCreated }}</v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable> {{ description }}</v-textarea>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="black white--text" :disabled="loading" @click="mutate()">Update</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>

<!-- Delete a card -->
   <ApolloMutation
    :mutation="require('../graphql/DeleteOneCard.gql')"
    :variables="{
        id
      }"
      @done="deleteCard"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" width="550">
    <v-form>
      <v-container>
        <v-card-title> Delete Card </v-card-title>
         <v-card-text>
            <h3> {{ title }}</h3>
            <p> {{ source }}</p>
            <p> {{ keywords }}</p>
            <p> {{ dateCreated }}</p>   
            <p> {{ description }}</p>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="red white--text" :disabled="loading" @click="mutate()">Delete</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>
  </v-row>
</div>
</template>

<script>

export default {
  data: function() {
    return {
      title: this.$store.getters.currentEditableCard.title,
      description: this.$store.getters.currentEditableCard.description,
      source: this.$store.getters.currentEditableCard.source,
      keywords: this.$store.getters.currentEditableCard.keywords,
      dateCreated: this.$store.getters.currentEditableCard.dateCreated,
      id: this.$store.getters.currentEditableCard.id,
       createtitle: 'New',
      createdescription: 'New Description',
      createsource: 'New Source',
      createkeywords: 'New Keyword',
      createdateCreated: 'New Date',
      
    }
  },
  methods: {

    newCard(){
      return console.log("new card created")
    },
    updateCard(){
      return console.log(this.title)
    },
    deleteCard(){
      return console.log('delete card')
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