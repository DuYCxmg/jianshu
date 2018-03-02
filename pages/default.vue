<template>
    <div>
        <my-header></my-header>
        <div class="person my-container">
          asd asd das da
            <div class="row">
                <div class="col-8 main">
                    asd
                </div>
                <div class="col-4 aside">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '~/components/myHeader'
    export default {
        components:{
            myHeader
        }
    }
</script>
<style scoped>
    *, ::after, ::before {
        box-sizing: border-box;
    }
</style>