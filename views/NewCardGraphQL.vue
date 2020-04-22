<template>
    <div>
        <div class="frame">
            <NewCard/>
    
        </div>
    </div>
</template>

<script>
import NewCard from "@/components/NewCard.vue"


export default {
    name: "admin",
    components: {
 
        NewCard
    }
}
</script>

<style scoped>
.frame{
  padding: 2%;
   background:#000 url(/assets/images/stars.png) repeat top center; 
   display:flex;
   justify-content: space-around;

}

</style>