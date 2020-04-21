<template>
<div>
  <v-row class="styling">
    <!-- Create a New Card -->
  <ApolloMutation
    :mutation="require('../graphql/CreateOneCard.gql')"
    :variables="{
      title,
      description,
      source,
      dateCreated,
      }"
      @done="newCard"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="350">
    <v-form>
      <v-container>
        <v-card-title> Create New Card </v-card-title>
         <v-card-text>
            <v-text-field v-model="createtitle" label="Title" required filled> {{ createtitle }} </v-text-field>
            <v-text-field v-model="createsource" label="Source" required filled> {{ createsource }}</v-text-field>
            <v-text-field v-model="createkeywords" label="Keywords" required filled> {{ createkeywords }}</v-text-field>
            <v-text-field v-model="createdateCreated" label="Date Created" required filled> {{ createdateCreated }}</v-text-field>   
            <v-textarea v-model="createdescription" label="Description" rows="4" filled clearable> {{ createdescription }}</v-textarea>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="black white--text" :disabled="loading" @click="mutate()">New Card</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>


<!-- Update a Card -->
 <ApolloMutation
    :mutation="require('../graphql/SearchWord.gql')"
    :variables="{
    id
      }"
      @done="searchCard"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="350">
    <v-form>
      <v-container>
        <v-card-title> Search </v-card-title>
         <v-card-text>
           <v-text-field v-model="searchWord" label="Search word" required filled> {{ searchWord }} </v-text-field>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="black white--text" :disabled="loading" @click="mutate()">Search</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>



<!-- Update a Card -->
 <ApolloMutation
    :mutation="require('../graphql/UpdateOneCard.gql')"
    :variables="{
      title,
      description,
      source,
      dateCreated,
      }"
      @done="updated"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="350">
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
    <v-card class="mx-auto" max-width="350">
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
      searchWord: "",
    }
  },
  methods: {

    newCard(){
      return console.log("new card created")
    },
    updateCard(){
      return console.log(this.title)
    },
    searchCard(){
      return console.log('search card')
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