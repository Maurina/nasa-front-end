<template>
<div>
  <v-row class="style">
    <v-card class="mx-auto" max-width="750">
    <v-form>
      <v-container>
         <v-card-text>
           <p> ID: {{ id }} </p>
            <v-text-field v-model="title" label="Title" required filled>{{ title }}</v-text-field>
            <v-text-field v-model="imageUrl" label="ImageUrl" required filled>{{ imageUrl }}</v-text-field>
            <v-text-field v-model="date" label="Date Created" required filled>{{ date }}</v-text-field>   
            <v-text-field v-model="source" label="Souce" filled> {{ source }} </v-text-field>
            <v-textarea v-model="description" label="Description" rows="4" filled clearable>{{ description }}</v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn large color="black white--text"  @click="updateCard">Update Card</v-btn>
             <v-btn large color="red white--text"  @click="deleteCard">Delete Card </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
    </v-card>

  </v-row>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: function() {
    return {
      title: this.$store.getters.currentRest.title,
      description: this.$store.getters.currentRest.description,
      imageUrl: this.$store.getters.currentRest.imageUrl,
      date: this.$store.getters.currentRest.date,
      source: this.$store.getters.currentRest.source,
      id: this.$store.getters.currentRest._id,
    }
  },
  
  methods: {
        updateCard(){    
        const data={
          id: this.id,
          title: this.title,
          imageUrl: this.imageUrl,
          date: this.date,
          description: this.description,
          source: this.source
        }
          const url = `http://localhost:8000/admin/edit-product/` 
        return axios
        .post(url, data)
        .then(response => {
          console.log(response)
          console.log(response.data)
          this.updatedCard = response.data
     
        })
        .catch(error =>  console.log(error))
      },
      deleteCard() {
        const url = `http://localhost:8000/admin/delete-product`
        const data = {
          id: this.id
        }
           return axios
        .post(url, data)
        .then(response => {
          console.log(response.data)
          this.deletedCard = response.data
          
        })
        .catch(error =>  console.log(error))
      },

      
  },
}



</script>

<style scoped>
.styling{
  display: flex;
  justify-content: space-evenly;
}
</style>