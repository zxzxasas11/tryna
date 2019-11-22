<template>
	<div class="main">
		<div class="left">
			<ul>
				<li v-for="u in userList" :key="u.userId">
					<nuxt-link active-class="active" :to="'/message/private/'+u.userId">
						<span>{{u.username}}</span>
						<span class="sign">{{u.unread}}</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="right">
			<nuxt-child keep-alive/>
		</div>
	</div>
</template>

<script>
	import message from "../../api/message";
    export default {
        data(){
            return{
                userList:[]
            }
        },
        async asyncData({params,store}) {
            if (!process.server) return;
            let {data} = await message.getPrivate({});
            return {
                userList: data
            }
        },
    }
</script>

<style scoped lang="less">
	@import '../../assets/css/leftTree';
	.active{
		color:#0cf;
		background-color: #7f828b;
	}
</style>
