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
                <p>
                  {{ item.description  | truncate(100)  }}
                </p>
              
                <p>{{ item.date }}</p>
                <p> {{ item._id }} </p>
              </v-card-text>
              <v-card-actions>
  

              <v-btn color="blue darken-1" text  @click="ManageCard(index)">Manage Cards</v-btn>
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
        })
        .catch(error =>  console.log(error))
      },
        newCard(){
          this.$router.push('/restedit')          
        },
       
         ManageCard(index, allData){
             /* this.$router.push('/restedit')   */
             console.log(index)
             console.log(allData[index])

              const productId = '5e4c49f7c9e6ad41bc3c28e0'
            const url = `http://localhost:8000/admin/edit-product/` + productId 
                return axios
        .get(url)
        .then(response => {
          this.manage = response.data      
        })
        .catch(error =>  console.log(error))
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
</style>

