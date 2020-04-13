<template>
<div>
  
     <v-row>
          <v-col cols="4" v-for="(item, i) in Cards" :key="i">
            <v-card class="mx-auto newCard" max-width="350">
              <v-card-text>
                <h2>{{ item.titleREST}}</h2>
                <p>
                  {{ item.descriptionREST }}
                </p>
                <p>{{ item.sourceREST }}</p>
                <p>{{ item.keywordsREST }}</p>
                <p>{{ item.dateCreatedREST }}</p>
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
            description: '',
            source: '',
            keywords: '',
            dateCreated: '',
            id: ''
    }
        }
  },
    methods: {
    editCardREST(Cards) {
      this.$store.dispatch('editCardREST', Cards)
      this.$router.push('adminrest')
    }
  },
   mounted () {
    axios
      .get('http://localhost:8000/')
      .then(response => (
             this.Cards.title = response.test.products.title,
              this.Cards.description = response.test.products.description,
              this.Cards.source = response.test.products.source,
              this.Cards.keywords = response.test.products.keywords,
              this.Cards.dateCreated = response.test.products.dateCreated,
              this.Cards.id = response.test.products.id
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

