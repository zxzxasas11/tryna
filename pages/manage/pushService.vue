<template>
	<div>
		<div>这个页面是用来测试推送消息的</div>
		<el-input v-model="mess" placeholder="输入要发送的消息" />
		<el-button @click="sendMessage">发送</el-button>
	</div>
</template>

<script>
    export default {
        name: "pushService",
	    data(){
            return{
                mess:""
            }
	    },
	    methods:{
            sendMessage(){
                let data = {name:this.$store.getters.getToken.username,msg:this.mess};
                this.common.ws.send(JSON.stringify(data));
            },
	    }
    }
</script>

<style scoped>

</style>
