<template>
	<!--这个组件用来显示投票最终结果-->
	<div>
		<div v-for="(v,index) in voteData" class="vote-result-box" style="width:400px;">
			<div class="vote-rate" :style="'width:'+v.size/total*100+'%;background-color:'+colors[index]">
				<span>{{v.voteId|voteName(voteItem)}}</span>
				<span>{{(v.size/total*100).toFixed(2)+'%'}}</span>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "voteRate",
	    data(){
            return{
                option:{
                
                },
	            color:this.colors
            }
	    },
	    /*[
	        {}
	    ]*/
	    //props:["voteData","voteItem","colors"],
	    props:{
	        voteData:{
	            type:Object
	        },
            voteItem:{
                type:Object
            },
            colors:{
                type:Object,
	            default:["#f5656d","#f9878d","#fbb2b6","#f9d1d3"]
            },
	    },
	    computed:{
            total(){
                let data =0;
                for(let i in this.voteData){
                    data += this.voteData[i].size;
                }
                return data;
            }
	    },
	    filters:{
            voteName(data,value){
                for(let i in value){
                    if(data === value[i]._id){
                        return value[i].text;
                    }
                }
            }
	    }
    }
</script>

<style scoped>

</style>
