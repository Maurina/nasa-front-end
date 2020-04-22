<template>
    <div>
        <div class="frame">
            <Search/>
            <Home/>
        </div><!--frame-->
        <Footer/>
    </div>
</template>

<script>
import Home from "@/components/Home.vue"
import Search from "@/components/Search.vue"
import Footer from '@/components/Footer.vue'

export default {
    name: "home",
    components: {
        Home,
        Search,
        Footer,
    }
}
</script>

<style scoped>
.frame{
  padding: 2%;
   background:#000 url(/assets/images/stars.png) repeat top center; 

}

</style>