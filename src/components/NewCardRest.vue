<template>
<div>
  <v-row class="style">

<v-card class="mx-auto" width="750">
    <v-form>
      <v-container>
         <v-card-text>
           
            <v-text-field v-model="title" label="Title" required filled>{{ title }}</v-text-field>
            <v-text-field v-model="imageUrl" label="Image Url" required filled>{{ imageUrl }}</v-text-field>
            <v-text-field v-model="source" label="Source" filled>{{ source }}</v-text-field>
            <v-text-field v-model="date" label="Date Created" required filled>{{ date }}</v-text-field>   
            <v-textarea v-model="description" label="Description" rows="4" filled clearable>{{ description }}</v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn large color="green white--text" @click="newCard">New Card</v-btn>
                <v-btn large color="red white--text"  @click="returnHome">Cancel </v-btn>
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
      title: '',
      description: '',
      source: '',
      imageUrl:'',
      date: '',
      id: '',

    }
  },
  
  methods: {
   
        newCard() {
        const url = `http://localhost:8000/admin/add-product`
        const data = {
          title: this.title,
          description: this.description,
          date: this.date,
          imageUrl: this.imageUrl,
          source: this.source,
        }
        console.log(data)
        console.log(url)
        return axios
        .post(url, data)
        .then(response => {
       
          console.log(response.data)
          
        })
        .catch(error =>  console.log(error)) 
      },
      
    returnHome() {
      this.$router.push('/rest')
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