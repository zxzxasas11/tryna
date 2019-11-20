<template>
	<div style="position: relative;height:100%">
		<div class="chat-box">
			<div class="info">
				<div v-for="c in chatList"
				     class="chat-bubble"
					:class="c.creator===$store.getters.getUserId?'self':'other'">{{c.content}}</div>
			</div>
			<div class="reply">
				<div class="message" @keyup="changeData($event)" contenteditable="true"></div>
				<el-button @click="send">发送(enter)</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import message from "../../../api/message";
    export default {
        data(){
            return{
                chatList:[],
	            replyInfo:{
                    receive:this.$route.params.userId,
		            content:"",
		            type:1
	            }
            }
        },
        async fetch({ store, params }) {
            /*if(params.userId) {
                await message.editPrivateMessage(params.userId).then(res => {
                    console.log("已经将状态修改");

                })
            }*/
            /*if(store.getters.getT){
                const { data } = await collect.check(params.id);
                store.dispatch('posts/setPost', {collect:data?1:0})
            }*/

        },
	    async asyncData({params,route}) {
            if(params.userId){
                let {data} = await message.getChat(params.userId);
                return {
                    chatList: data
                }
            }
        },
	    methods:{
            changeData(event) {
                this.replyInfo.content = event.srcElement.innerText;
            },
            //回复私信
		    
		    async send(){
		        await message.add(this.replyInfo).then(async res=>{
		            this.$message.success("回复成功");
                    await message.getChat(this.$route.params.userId).then(res=>{
                        this.chatList=res.data;
                    })
		        })
		    }
	    }
    }
</script>

<style scoped lang="less">
	.chat-box{
		width:80%;
		height:80%;
		border:1px solid #eeeeee;
		box-sizing: border-box;
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin: auto;
		.info{height:70%;overflow: auto;}
		.reply{
			height:30%;
			border-top:1px solid #eeeeee;
			box-sizing: border-box;
			padding:5px;
			.message{
				border:1px solid #eeeeee;
				height:calc(100% - 40px);
				
			}
		}
	}
	
	.chat-bubble{
		color:#fff;
		max-width:70%;
		clear: both;
		font-size:14px;
		padding:5px;
		margin:10px 0;}
	.other{background-color: #0099ff;float:left}
	.self{background-color: #7f828b;float: right}
</style>
