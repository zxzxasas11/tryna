<template>
	<div>
		<span>系统消息</span>
		<div class="list-box full-width">
			<div class="list-single" v-for="m in message.data">
				<div>{{m.title}}<span style="margin-left:20px;font-size:14px;">通知时间:{{m.create_time}}</span></div>
				<div>{{m.content}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import message from "../../api/message";
    export default {
        data(){
            return{
                message:{}
            }
        },
        async fetch({ store, params }) {
            await message.clear({system_message_number:0}).then(async res=>{
                store.dispatch("user/setMessage",{system:0});
            })
        },
        async asyncData({params}) {
            let {data} = await message.getAll({type:0});
            return {
                message: data
            }
        },
    }
</script>

<style scoped lang="less">
	@import "../../assets/css/personalList";
</style>
