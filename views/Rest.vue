<template>
    <div>
        <div class="frame">
            <Rest/>
        </div><!--frame-->
        <Footer/>
    </div>
</template>

<script>
import Rest from "@/components/Rest.vue"
import Footer from '@/components/Footer.vue'

export default {
    name: "home",
    components: {
        Rest,
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