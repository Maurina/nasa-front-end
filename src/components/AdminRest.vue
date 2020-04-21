<template>
<div>
  <v-row class="style">
    <v-card class="mx-auto" max-width="750">
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
            <v-btn large color="green white--text"  @click="info">Info</v-btn>
            <v-btn large color="black white--text"  @click="updateCard">Update Card</v-btn>
             <v-btn large color="red white--text"  @click="deleteCard">Delete Card </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
    </v-card>
<v-card class="mx-auto" max-width="750">
    <v-form>
      <v-container>
         <v-card-text>
        
            <v-text-field v-model="newtitle" label="Title" required filled></v-text-field>
            <v-text-field v-model="newsource" label="Source" required filled></v-text-field>
            <v-text-field v-model="newimageURL" label="imageURL" required filled></v-text-field>
            <v-text-field v-model="newdateCreated" label="Date Created" required filled></v-text-field>   
            <v-textarea v-model="newdescription" label="Description" rows="4" filled clearable></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn large color="green white--text" @click="newCard">New Card</v-btn>
          
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
      id: '5e4c47434422b94094e56604',
      title: 'That No Moon...',
      description: 'That No Moon...',
      source: '',
      keywords: '',
      dateCreated:  '2011',
      imageURL: 'http://images-assets.nasa.gov/image/PIA14208/PIA14208~orig.jpg',
      allData: '',
      deletedCard: '',
      newData: '',
      updatedCard:''
    }
  },
  
  methods: {
 
    info(){
         const data={
          id: this.id
        }
          const url = `http://localhost:8000/admin/edit-product/` 
        return axios
        .get(url, data)
        .then(response => {
          console.log(response)
          console.log(response.data)
     
        })
        .catch(error =>  console.log(error))
    },
        updateCard(){    
        const data={
          id: this.id,
          title: this.title,
          imageURL: this.imageURL,
          dateCreated: this.dateCreated,
          description: this.description
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
        newCard() {
        const url = `http://localhost:8000/admin/add-product`
        const product = {
          title: this.title,
          description: this.description,
          dateCreated: this.dateCreated,
          imageURL: this.imageURL,
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

<style scoped>
.styling{
  display: flex;
  justify-content: space-evenly;
}
</style>