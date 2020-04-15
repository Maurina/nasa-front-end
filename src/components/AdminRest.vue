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
         
            <v-btn large color="black white--text" :disabled="loading" type="submit" @click="updateCard">Update Card</v-btn>
             <v-btn large color="red white--text" :disabled="loading" @click="deleteCard">Delete Card </v-btn>
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
      id: '',
      title: '',
      description: '',
      source: '',
      keywords: '',
      dateCreated: '',
      imageURL: '',
      allData: '',
      deletedCard: ''
    }
  },
  
  methods: {
 
        updateCard(){    
        const prodId = this._id
          const url = `http://localhost:8000/admin/edit-product/` + prodId
        return axios
        .get(url)
        .then(response => {
          console.log(response.data)
          this.updatedCard = response.data
          this.$router.push('/rest')
        })
        .catch(error =>  console.log(error))
      },
      deleteCard() {
        const url = `http://localhost:8000/admin/delete-product/`
           return axios
        .get(url)
        .then(response => {
          console.log(response.data)
          this.deletedCard = response.data
          
        })
        .catch(error =>  console.log(error))
      }
  },
}



</script>