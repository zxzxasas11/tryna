<template>
	<div>
		<div></div>
	</div>
</template>

<script>
	import category from "../../api/category";
    export default {
        data(){
            return{
                menu:[]
            }
        },
        async asyncData ({ params }) {
            let {data} = await category.getPlateByUserId();
            console.log(data);
            return{
                menu:data,
            }
        },
    }
</script>

<style scoped>

</style>
