<template>
<div>
    <v-card class="mx-auto" max-width="450">
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
          <v-btn large color="green white--text" @click="newCard">New Card</v-btn>
            <v-btn large color="black white--text"  @click="updateCard">Update Card</v-btn>
             <v-btn large color="red white--text"  @click="deleteCard">Delete Card </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
    </v-card>

       <h4> {{ newData }} </h4>
        <h4> {{ updatedCard }} </h4>
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
      deletedCard: '',
      newData: '',
      updatedCard:''
    }
  },
  
  methods: {
 
        updateCard(){    
        const data={
          productId: '5e4c49f7c9e6ad41bc3c28e0'
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
          productId: '5e4c49f7c9e6ad41bc3c28e0'
        }
           return axios
        .post(url, data)
        .then(response => {
          console.log(response.data)
          this.deletedCard = response.data
          
        })
        .catch(error =>  console.log(error))
      },
        newCard() {
        const url = `http://localhost:8000/admin/add-product`
        const product = {
          title: 'That No Moon...',
          description: 'That No Moon...',
          date: '2011',
          imageURL: 'http://images-assets.nasa.gov/image/PIA14208/PIA14208~orig.jpg',
        }
        console.log(product)
        console.log(url)
        return axios
        .post(url, product)
        .then(response => {
          console.log('axios call')
          console.log(response.data)
          this.newData = response.data
          
        })
        .catch(error =>  console.log(error)) 
      },
      
  },
}



</script>