<template>
    <div>
        <div class="frame">

            <NewCardRest/>
        </div>
    </div>
</template>

<script>

import NewCardRest from "@/components/NewCardRest.vue"


export default {
    name: "admin",
    components: {

        NewCardRest
    }
}
</script>

<style scoped>
.frame{
  padding: 2%;
   background:#000 url(/assets/images/stars.png) repeat top center; 

}

</style>