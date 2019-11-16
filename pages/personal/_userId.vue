<template>
	<div>
		<div class="user-box">
			<div>{{userInfo.username}}的个人中心</div>
			<div>{{common.formatCurrency(userInfo.currency)}}</div>
		</div>
		
		<ul class="menu">
			<li><nuxt-link active-class="active" :to="'/personal/'+$route.params.userId+'/mine'">我的发帖</nuxt-link></li>
			<li><nuxt-link active-class="active" :to="'/personal/'+$route.params.userId+'/collect'">收藏</nuxt-link></li>
			<li><nuxt-link active-class="active" :to="'/personal/'+$route.params.userId+'/history'">历史</nuxt-link></li>
			<li><nuxt-link active-class="active" :to="'/personal/'+$route.params.userId+'/care'">关注</nuxt-link></li>
			<li><nuxt-link active-class="active" :to="'/personal/'+$route.params.userId+'/cared'">关注我的</nuxt-link></li>
		</ul>
			<nuxt-child keep-alive/>
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
	.active{
		color:#049cdb;
	}
</style>
