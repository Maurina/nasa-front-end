<template>
<div>
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
            <v-btn large color="black white--text" :disabled="loading" @click="onDone()">Add Card</v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

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
  },
    mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>