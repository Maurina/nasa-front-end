<template>
<div>
  
     <v-row>
          <v-col cols="4" v-for="(item, i) in Cards" :key="i">
            <v-card class="mx-auto newCard" max-width="350">
              <v-card-text>
                <div>{{ item.title}}</div>
                <p>
                  {{ item.description }}
                </p>
                <p>{{ item.source }}</p>
                <p>{{ item.keywords }}</p>
                <p>{{ item.dateCreated }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
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
      .get('http://localhost:8000')
      .then(response => (
             this.Cards.title = response.product.title,
              this.Cards.description = response.product.description,
              this.Cards.source = response.product.source,
              this.Cards.keywords = response.product.keywords,
              this.Cards.dateCreated = response.product.dateCreated
        ))}
}
</script>

<style scoped>

p{
  font-size: 1.4rem;
}
</style>

