<template>
	<div>这个是帖子的详情页</div>
</template>

<script>
    export default {
        data(){
            return{
            
            }
        },
	    created() {
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
