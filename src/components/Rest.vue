<template>
<div>
  
     <v-row>
          <v-col cols="4" v-for="(item, i) in Cards" :key="i">
            <v-card class="mx-auto newCard" max-width="350">
              <v-card-text>
                <h2>{{ item.title}}</h2>
                <p>
                  {{ item.description }}
                </p>
                <p>{{ item.source }}</p>
                <p>{{ item.keywords }}</p>
                <p>{{ item.dateCreated }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="black white--text">
                  Learn More
                </v-btn>
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
          Cards:{
            title: '',
            description: 'sdfa',
            source: 'sdfd',
            keywords: 'dfsf',
            dateCreated: 'sdfd',
            id: 'sdfds'
    }
        }
  },
   mounted () {
    axios
      .get('http://localhost:8000/products')
      .then(response => (
             this.Cards.title = response.test.products.title,
              this.Cards.description = response.test.products.description,
              this.Cards.source = response.test.products.source,
              this.Cards.keywords = response.test.products.keywords,
              this.Cards.dateCreated = response.test.products.dateCreated,
              this.Cards.id = response.test.products.dateCreated
        ))}
}
</script>

<style scoped>
h2{
  font-size: 2rem;
}

p{
  font-size: 1.4rem;
}
</style>

