<template>
	<div>
		<img style="width:100%;" v-for="i in imgList" :src="i.url">
	</div>
</template>

<script>
    import document from "~/api/document";
    export default {
        data(){
            return{
                imgList:[]
            }
        },
        /*async asyncData ({ params }) {
            return await document.getByName({title:localStorage.getItem("name")}).then((res) => {
                return {imgList:res.data}
            })
        }*/
        created() {
            /*document.getByName({title:localStorage.getItem("name")}).then((res) => {
                this.imgList = res.data;
            })*/
        }
    }
</script>

<style scoped>

</style>
