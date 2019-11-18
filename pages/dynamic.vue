<template>
	<div class="box">
		<div class="dynamic-singe" v-for="d in dynamicList.data">{{d.content}}</div>
	</div>
</template>

<script>
	import message from "../api/message";
    export default {
        data(){
            return{
                dynamicList:{}
            }
        },
        async asyncData({params}){
            let {data} =  await message.getDynamicList();
            console.log(data);
            return{
                dynamicList:data
            }
        },
	    methods:{
     
	    }
	    
    }
</script>

<style scoped lang="less">
	.box{
		
		background-color: #c5c9d3;
		min-height:calc(100% - 60px);
		.dynamic-singe{
			width:80%;
			margin:10px auto;
			background-color: #fff;
			border-radius: 5px;
		}
	}
</style>
