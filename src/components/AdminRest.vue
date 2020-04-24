<template>
<div>
  <v-row class="style">
    <v-card class="mx-auto" width="750">
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
import qs from 'qs'
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
      const url = `http://localhost:8000/admin/edit-product` 
      const data = {
        title: this.title,
        description: this.description,
        date: this.date,
        imageUrl: this.imageUrl,
        source: this.source,
        id: this.id,
      }

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      }
      console.log(data)
      console.log(url)
      return axios(options)
      .then(response => {
        console.log(response)
            console.log("Updated Card")
      })
      .catch(error => console.log(error)) 
      },

    returnHome() {
      this.$router.push('/rest')
    },
   
  deleteCard()  {
      const url =`http://localhost:8000/admin/delete-product`
      const data = {
        id: '5ea300fca9795b42f8e52937'
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      }
      console.log(data)
      console.log(url)
      return axios(options)
      .then(response => {
        console.log(response)
           console.log("Gone")
      })
      .catch(error => console.log(error)) 
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