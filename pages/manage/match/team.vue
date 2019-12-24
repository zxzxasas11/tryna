<template>
	<div class="box">
		<div class="item">
			<ul>
				<li v-for="r in race">{{r.name}}</li>
			</ul>
		</div>
		<div class="single"></div>
	</div>
</template>

<script>
	import match from "../../../api/match";
    export default {
        data(){
            return{
                race:[]
            }
        },
        async asyncData ({params}) {
            let {data} = await match.getTeamList({});
            console.log(data);
            return{
                race:data
            }
        },
	    methods:{
            async changePage(page){
                await match.getTeamList({currentPage:page})
            }
	    }
    }
</script>

<style scoped>

</style>
