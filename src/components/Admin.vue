<template>
  <ApolloMutation
    :mutation="require('../graphql/AddCard.gql')"
    :variables="{
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
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field v-model="title" label="Title" required filled></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea v-model="description" label="Description" rows="4" filled clearable></v-textarea>
          </v-col>
        </v-row>
       
          <v-row>
             <v-col cols="12" md="12">
            <v-text-field v-model="source" label="Source" required filled></v-text-field>
          </v-col>
        </v-row>
            <v-row>
             <v-col cols="12" md="12">
            <v-text-field v-model="keywords" label="Keywords" required filled></v-text-field>
          </v-col>
        </v-row>
            <v-row>
             <v-col cols="12" md="12">
            <v-text-field v-model="dateCreated" label="Date Created" required filled></v-text-field>
          </v-col>
        </v-row>
        <v-btn large color="primary" :disabled="loading" @click="mutate()">Add Card</v-btn>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
  </template>
  </ApolloMutation>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      description: '',
      source: '',
      keywords: '',
      dateCreated: '',
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    }
  }
}
</script>