<template>
	<div class="nav-line">
		<div class="fl head">
			<nuxt-link to="/">首页</nuxt-link>
			<nuxt-link to="/manage">后台</nuxt-link>
		</div>
		<div class="login-box fr">
			<ul v-if="$store.getters.getT!==null&&$store.getters.getT!==''">
				<li>注销</li>
			</ul>
			<ul v-else>
				<li><nuxt-link to="/login">登录/注册</nuxt-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
    import jwt_decode from 'jwt-decode'
    export default {
        data(){
            return{
				token:{}
            }
        },
        created() {

        },
	    mounted(){
            console.log(this.$store.getters.getToken);
	    },
        async asyncData ({params,store}) {
            let token = store.getters.getT;
            return{
                token:token
            }
        },
        methods:{
        },
        computed:{
        }
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
		background-color: #fff0cd;
		color:#591804;
		padding:0 20px;
		.login-box{
			ul{
				height:100%;
				li{
					float: left;
					display: inline-block;
					width:80px;
					height:100%;
					cursor:pointer;
				}
			}
		}
	}
</style>
