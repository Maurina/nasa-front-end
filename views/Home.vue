<template>
    <div>
        <div class="frame">
            <Home/>
        </div><!--frame-->
        <Footer/>
    </div>
</template>

<script>
import Home from "@/components/Home.vue"
import Footer from '@/components/Footer.vue'

export default {
    name: "home",
    components: {
        Home,
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