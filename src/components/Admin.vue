<template>
  <ApolloMutation
    :mutation="require('../graphql/UpdateCard.gql')"
    :variables="{
      id,
      title,
      description,
      source,
      keywords,
      dateCreated,
      }"
      @done="onDone"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="350">
    <v-form>
      <v-container>
         <v-card-text>
  
            <v-text-field v-model="title" label="Title" required filled></v-text-field>
            <v-text-field v-model="source" label="Source" required filled></v-text-field>
            <v-text-field v-model="keywords" label="Keywords" required filled></v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled></v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable></v-textarea>
         </v-card-text>
              <v-card-actions>
        <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
        <v-btn large color="black white--text" :disabled="loading" @click="mutate()">Add Card</v-btn>
              </v-card-actions>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
    </v-card>
  </template>
  </ApolloMutation>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$store.getters.currentEditableCard.id,
      title: this.$store.getters.currentEditableCard.title,
      description: this.$store.getters.currentEditableCard.description,
      source: this.$store.getters.currentEditableCard.source,
      keywords: this.$store.getters.currentEditableCard.keywords,
      dateCreated: this.$store.getters.currentEditableCard.dateCreated,
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    },
    returnHome() {
      this.$router.push('/')
    },
    
  }
}
</script>