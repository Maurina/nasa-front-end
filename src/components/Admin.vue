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
            <v-text-field v-model="title" label="Title" required filled> {{ title }} </v-text-field>
            <v-text-field v-model="source" label="Source" required filled></v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled></v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled></v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable></v-textarea>
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
    :mutation="require('../graphql/IdSearch.gql')"
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
           <v-text-field v-model="id" label="id" required filled> {{ id }} </v-text-field>
            <v-text-field v-model="title" label="Title" required filled> {{ title }} </v-text-field>
            <v-text-field v-model="source" label="Source" required filled> {{ source }}</v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled>{{ keywords }}</v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled> {{ dateCreated }}</v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable> {{ description }}</v-textarea>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="black white--text" :disabled="loading" @click="mutate()">Get by id</v-btn>
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
            <v-text-field v-model="title" label="Title" required filled> {{ id }} </v-text-field>
            <v-text-field v-model="source" label="Source" required filled></v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled></v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled></v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable></v-textarea>
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
           <h2>  {{ id }} </h2>
            <v-text-field v-model="title" label="Title" required filled> </v-text-field>
            <v-text-field v-model="source" label="Source" required filled></v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled></v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled></v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable></v-textarea>
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
      title: 'New',
      description: '',
      source: '',
      keywords: '',
      dateCreated: '',
      id:'ck8svyb1i0002mgua3rmsmz7w'
    }
  },
  methods: {
    onDone() {
    
      return console.log(this.id)
    },
    newCard(){
      return console.log("new card created")
    },
    updateCard(){
      return console.log('updated card')
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