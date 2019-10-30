<template>
	<div style="height:100%;">
		<title>
			<span>后台管理</span>
			<div class="user-box">
				<nuxt-link to="/Home">返回主页</nuxt-link>
			</div>
		</title>
		<div class="window">
			<div class="nav">
				<Menu></Menu>
			</div>
			<div class="manage">
				<Tags></Tags>
				<nuxt-child/>
				<!--<keep-alive :include="includedComponents">
					<nuxt-child/>
				</keep-alive>-->
			</div>
		</div>
	</div>
</template>

<script>
    import Menu from '~/components/Menu'
    import Tags from '~/components/Tags'

    export default {
        layout:"blank",
        components: {Menu, Tags},
        methods: {
            logout() {
                this.$message("注销成功");
                this.$router.push("/");
            }
        },
        mounted() {
            if (this.$route.path !== '/SysHome') {
                this.$store.commit('tags/add_visit', {url: this.$route.path, name: this.$route.name});
                this.$store.commit('tags/set_active_index', this.$route.path);

            } else {
                this.$store.commit('tags/set_active_index', '/SysHome');
                this.$router.push('/SysHome');
            }
        },
        computed: {
            includedComponents() {
                return this.$store.getters.getKeepAlive.toString().replace(/\//g, "");
            }
        },
    }
</script>

<style scoped lang="less">
	@height: 60px;
	@nav-width: 200px;
	title {
		background-color: #324057;
		display: block;
		font-size: 20px;
		color: #fff;
		text-align: left;
		height: @height;
		line-height: @height;
		padding-left:20px;
		
		.user-box {
			float: right;
			padding-right: 40px;
			font-size:14px;
			.user {
				padding-right: 40px;
			}
			
			.user::before {
				content: "用户名:";
			}
			
			.logout {
				cursor: pointer;
			}
		}
	}
	
	.window {
		height: calc(100% - @height);
		
		.nav {
			width: @nav-width;
			float: left;
			height: 100%;
			overflow: auto;
		}
		
		.manage {
			width: calc(100% - @nav-width);
			float: left;
			height: 100%;
		}
	}
	
	tags {
		display: block;
	}
</style>
