<template>
	<div>
		<div>这个是选手名单</div>
		<div v-for="p in player.data">
			{{p.name}}
		</div>
	</div>
</template>

<script>
	import match from "../../../api/match";
    export default {
        data(){
            return{
                player:{}
            }
        },
        async asyncData ({params}) {
            let {data} = await match.getPlayerList({});
            return{
                player:data
            }
        },
	    methods:{
            async changePage(page){
                await match.getPlayerList({currentPage:page})
            }
	    }
    }
</script>

<style scoped>

</style>
