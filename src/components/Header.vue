<template>
 <div class="menu">
    <v-row justify="space-between">
           <h1> NASA </h1>
      <v-menu
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon v-on="on"
            dark
          >
          <v-icon>mdi-dots-vertical</v-icon>
      
          </v-btn>
        </template>
  
        <v-list>
           <v-list-item>
          <v-list-item-title>
            <router-link to="/" tag="li" active-class="active" exact>
              <a class= "black--text">GraphQL Display</a>
            </router-link>
          </v-list-item-title>
        </v-list-item>
           <v-list-item>
           <v-list-item-title> 
            <router-link to="/graphqledit" tag="li" active-class="active">
              <a class= "black--text">GraphQL Edit
              </a>
            </router-link>
          </v-list-item-title>
        </v-list-item>
    <v-list-item>
           <v-list-item-title> 
            <router-link to="/graphqlcard" tag="li" active-class="active">
              <a class= "black--text">GraphQL New Card
              </a>
            </router-link>
          </v-list-item-title>
        </v-list-item>

   <!--       <v-list-item>
           <v-list-item-title> 
            <router-link to="/graphqlsearch" tag="li" active-class="active">
              <a class= "black--text">GraphQL Search
              </a>
            </router-link>
          </v-list-item-title>
        </v-list-item> -->


      <v-list-item>
           <v-list-item-title> 
            <router-link to="/rest" tag="li" active-class="active">
              <a class= "black--text">Rest Display
              </a>
            </router-link>
          </v-list-item-title>
        </v-list-item>
              <v-list-item>
           <v-list-item-title> 
            <router-link to="/restedit" tag="li" active-class="active">
              <a class= "black--text">Rest Edit
              </a>
            </router-link>
          </v-list-item-title>
        </v-list-item>
               <v-list-item>
           <v-list-item-title> 
            <router-link to="/restcard" tag="li" active-class="active">
              <a class= "black--text">Rest New Card
              </a>
            </router-link>
          </v-list-item-title>
        </v-list-item>
         
        </v-list>
      </v-menu>
 
     
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      showMenu: false,
      x: 0,
      y: 0,
   
    }),

    methods: {
      show (e) {
        e.preventDefault()
        this.showMenu = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.showMenu = true
        })
      },
    },
  }
  </script>

<style scoped>
.menu{
  margin: 0 auto;
  background: black;
  width: 100%;
  color: white;
  padding: 2%;
}
li{
  list-style-type: none;
  padding: .5rem 1.5rem;

}

a{
  text-decoration: none;
 }

 .active{
   color: blue;
 }
</style>
