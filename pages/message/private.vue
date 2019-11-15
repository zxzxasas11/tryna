<template>
	<div class="main">
		<div class="left">
			<ul>
				<li v-for="u in userList" :key="u.userId">
					<nuxt-link :to="'/message/private/'+u.userId">
						<span>{{u.username}}</span>
						<span class="sign">{{u.unread}}</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="right">
			<nuxt-child></nuxt-child>
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
        async asyncData({params}) {
            let {data} = await message.getPrivate({});
            console.log(data);
            return {
                userList: data
            }
        },
    }
</script>

<style scoped lang="less">
	@import '../../assets/css/leftTree';
</style>
