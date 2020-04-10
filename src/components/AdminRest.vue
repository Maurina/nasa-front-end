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
      axios
        .get('http://localhost:8000')
        .then(response => (
              this.title = response.data.title,
                this.description = response.data.description,
                this.source = response.data.source,
                this.keywords = response.data.keywords,
                this.dateCreated = response.data.dateCreated
          ))}
  },
/*     mounted () {
    axios
      .get('http://localhost:8000')
      .then(response => (
             this.title = response.data.title,
              this.description = response.data.description,
              this.source = response.data.source,
              this.keywords = response.data.keywords,
              this.dateCreated = response.data.dateCreated
        ))}
} */

    } 
</script>