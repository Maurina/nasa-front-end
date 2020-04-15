<template>
<div>
    <v-btn text color="white black--text" @click="getAllCards">
                  Get Cards
                </v-btn>
  
     <v-row>
          <v-col cols="4" v-for="(item, i) in allData" :key="i">
            <v-card class="mx-auto newCard" max-width="350">
              <v-card-text>
                <h2>{{ item.title }}</h2>
                <p>
                  {{ item.description }}
                </p>
                <p>{{ item.source }}</p>
                <p>{{ item.keywords }}</p>
                <p>{{ item.dateCreated }}</p>
                <p> {{ item._id }} </p>
              </v-card-text>
              <v-card-actions>
                    <v-btn text color="black white--text" @click="editCard"> Edit </v-btn>
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
          deletedCard: '',
          updatedCard: '',
          Cards:{
            title: '',
            description: '',
            source: '',
            keywords: '',
            dateCreated: '',
            _id: '', 
    },
    allData: {}
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
        editCard(){
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
</style>

