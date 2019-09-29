<template>
	<div class="box">
		<!--<div v-for="doc in docList" class="doc-single">
		
		</div>-->
	</div>
</template>

<script>
	import document from "../api/document";
    export default {
        data(){
            return{
            
            }
        },
	    created(){
	    },
        async asyncData ({ params }) {
            return await document.getList({currentPage:1}).then((res) => {
                    console.log(res);
                    //return { title: res.data.data }
                })
        },
        methods:{
        
        }
    }
</script>

<style scoped lang="less">

</style>
