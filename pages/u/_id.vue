<template>
   <div>
       <my-header></my-header>
       <div class="person my-container">
           <div class="row">
               <div class="col-8 main">
                   <div class=""> </div>
               </div>
               <div class="col-4 aside"></div>
           </div>
       </div>
   </div>
</template>

<script>
    import myHeader from "~/components/myHeader"
    export default {
        name: "_id",
        components:{
            myHeader
        }
    }
</script>

<style scoped>

</style>