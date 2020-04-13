<template>
<div>
    <v-card class="mx-auto" max-width="350">
    <v-form>
      <v-container>
         <v-card-text>
            <v-text-field v-model="title" label="Title" required filled></v-text-field>
            <v-text-field v-model="source" label="Source" required filled></v-text-field>
            <v-text-field v-model="imageURL" label="imageURL" required filled></v-text-field>
            <v-text-field v-model="dateCreated" label="Date Created" required filled></v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn large color="red white--text" :disabled="loading" @click="returnHome">Cancel </v-btn>
            <v-btn large color="black white--text" :disabled="loading" type="submit" @click="onDone()">Add Card</v-btn>
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
      Cards:{
            title: '',
            description: 'sdfa',
            source: 'sdfd',
            imageURL: '',
            dateCreated: 'sdfd',
            id: 'sdfds'
    }
    }
  },
  
  methods: {
    onDone() {
      axios
        .get('http://localhost:8000/add-product')
        .then(response => (
              this.Cards.title = response.test.products.title,
              this.Cards.description = response.test.products.description,
              this.Cards.source = response.test.products.source,
              this.Cards.imageURL = response.test.products.imageURL,
              this.Cards.dateCreated = response.test.products.dateCreated,
              this.Cards.id = response.test.products.id
          ))}
  },
    returnHome() {
      this.$router.push('/')
    }
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