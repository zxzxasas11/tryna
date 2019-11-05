<template>
	<div>
		<div class="user-box">
			<div>{{userInfo.username}}</div>
			<div>{{common.formatCurrency(userInfo.currency)}}</div>
		</div>
		
		<ul class="menu">
			<li><nuxt-link :to="'/personal/'+$route.params.userId+'/collect'">收藏</nuxt-link></li>
			<li><nuxt-link :to="'/personal/'+$route.params.userId+'/history'">历史</nuxt-link></li>
			<li>关注</li>
		</ul>
		
		<nuxt-child></nuxt-child>
	</div>
</template>

<script>
	import user from "~/api/user";
    export default {
        data(){
            return{
                userInfo:{}
            }
        },
	    async asyncData({params}){
            let {data} =  await user.getByUserId(params.userId);
            console.log(data);
            return{
                userInfo:data
            }
	    }
    }
</script>

<style scoped lang="less">
	.menu{
		display: inline-block;
		li{
			display: inline-block;
		}
	}
</style>
