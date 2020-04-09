<template>
    <div>
        <div class="frame">
            <AdminRest/>
        </div>
    </div>
</template>

<script>
import AdminRest from "@/components/AdminRest.vue"


export default {
    name: "admin",
    components: {
        AdminRest
    }
}
</script>

<style scoped>
.frame{
  padding: 2%;
   background:#000 url(/assets/images/stars.png) repeat top center; 

}

</style>