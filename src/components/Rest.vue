<template>
<div>
    <v-btn text color="white black--text" @click="getAllCards">
                  Get Cards
                </v-btn>
    <v-btn text color="white black--text" @click="newCard"> New Card </v-btn>
    
     <v-row>
          <v-col cols="4" v-for="(item, index) in allData" :key="index">
            <v-card class="mx-auto newCard" max-width="350">
              <v-card-text>
                <h2>{{ item.title }}</h2>
                <img class="image" v-bind:src="item.imageUrl">
                <p>
                  {{ item.description  | truncate(100)  }}
                </p>
                <p> {{ item.source }}</p>
                <p>{{ item.date }}</p>
                <p> {{ item._id }} </p>
              </v-card-text>
              <v-card-actions>
  

              <v-btn color="blue darken-1" text  @click="ManageCard(item)">Manage Cards</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row> 
   </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
          manage: '',
          dialog: false,
         
    allData: [],
    editCard: [],
        }
  },
    methods: {
      getAllCards(){
        return axios
        .get('http://localhost:8000/admin/products')
        .then(response => {
          this.allData = response.data      
          console.log(response.data)
        })
        .catch(error =>  console.log(error))
      },
        newCard(){
          this.$router.push('/restcard')          
        },
       
         ManageCard(card) {
      console.log(card)
      this.$store.dispatch('editRest', card)
      this.$router.push('/restedit')
    }
         
  },
  

}
</script>

<style scoped>
h2{
  font-size: 1.3rem;
}

p{
  font-size: 1rem;
}

.image{
 max-width: 320px;
 padding: 2% 0;
}
</style>

