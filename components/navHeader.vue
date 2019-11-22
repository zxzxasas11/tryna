<template>
	<div class="nav-line">
		<div class="fl head">
			<nuxt-link to="/">首页</nuxt-link>
			<nuxt-link to="/manage">后台</nuxt-link>
		</div>
		<div class="login-box fr">
			<ul v-if="$store.getters.getT!==null&&$store.getters.getT!==''&&$store.getters.getT!==undefined">
				<li><nuxt-link :to="'/personal/'+$store.getters.getToken.userId">个人中心</nuxt-link></li>
				<li><nuxt-link to="/message">消息{{$store.getters.getMessage.system+$store.getters.getMessage.private}}</nuxt-link></li>
				<li><nuxt-link to="/dynamic">动态:{{$store.getters.getMessage.dynamic}}</nuxt-link></li>
				<li @click="logout">注销</li>
				<li>{{username}}</li>
			</ul>
			<ul v-else>
				<li><nuxt-link to="/login">登录/注册</nuxt-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import user from "../api/user";
    export default {
        data(){
            return{
                message:{
                    system:null,
	                private:null,
                    dynamic:null
                }
            }
        },
	    computed:{
            username(){
                return this.$store.getters.getToken.username
            }
	    },
	    mounted(){
            if(this.$store.getters.getToken.userId){
                user.getByUserId(this.$store.getters.getToken.userId).then(res=>{
                    this.message.system=res.data.system_message_number;
                    this.message.private=res.data.private_message_number;
                    this.message.dynamic = res.data.dynamic_message_number;
                    this.$store.dispatch("user/setMessage",this.message);
                });
            }
	    },
	    methods:{
            logout(){
                this.$store.dispatch("user/delToken");
                this.$router.push("/")
            }
	    }
    }
</script>

<style scoped lang="less">
	.head{
		a{
			display: inline-block;
		}
	}
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
