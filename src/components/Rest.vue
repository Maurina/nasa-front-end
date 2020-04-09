<template>
<div>
        <v-row>
          <v-col cols="4" v-for="(item, i) in data.Cards" :key="i">
            <v-card class="mx-auto" max-width="350">
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

export default {
  name: 'HelloWorld',

  data: () => ({
    searchString: "earth"
  }),
}
</script>

<style scoped>
.result {
  padding: 1rem;
}


</style>

