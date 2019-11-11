<template>
	<div class="nav-line">
		<div class="fl head">
			<nuxt-link to="/">首页</nuxt-link>
			<nuxt-link to="/manage">后台</nuxt-link>
		</div>
		<div class="login-box fr">
			<ul v-if="$store.getters.getToken!==null&&$store.getters.getToken!==''&&$store.getters.getToken!==undefined">
				<li><nuxt-link :to="'/personal/'+$store.getters.getUserId">个人中心</nuxt-link></li>
				<li>注销</li>
				<li>{{username}}</li>
			</ul>
			<ul v-else>
				<li><nuxt-link to="/login">登录/注册</nuxt-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        created() {
        },
	    computed:{
            username(){
                return this.$store.getters.getUserName
            }
	    },
	    mounted(){
	    },
        methods:{
        },
    }
</script>

<style scoped lang="less">
	head{
		a{
			display: inline-block;
		}
	}
	/*a{
		height: inherit;
		display: inherit;
	}*/
	.nav-line{
		height:60px;
		line-height:60px;
		//background-color: #fff0cd;
		box-shadow: #a1a5ad 0  1px 2px;
		color:#591804;
		padding:0 20px;
		.login-box{
			ul{
				height:100%;
				li{
					float: left;
					display: inline-block;
					min-width:80px;
					height:100%;
					cursor:pointer;
				}
			}
		}
	}
</style>
