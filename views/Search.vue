<template>
    <div>
        <div class="frame">
            <Search/>
     
        </div><!--frame-->
        <Footer/>
    </div>
</template>

<script>

import Search from "@/components/Search.vue"
import Footer from '@/components/Footer.vue'

export default {
    name: "home",
    components: {
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