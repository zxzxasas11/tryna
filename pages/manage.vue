<template>
	<div style="height:100%;">
		<div class="title">
			<span>后台管理</span>
			<nuxt-link to="/">返回主页</nuxt-link>
		</div>
		<div class="window">
			<div class="nav">
				<Menu></Menu>
			</div>
			<div class="manage">
				<nuxt-child/>
			</div>
		</div>
	</div>
</template>

<script>
    import Menu from '~/components/Menu'

    export default {
        layout:"blank",
        components: {Menu},
        methods: {
            logout() {
                this.$message("注销成功");
                this.$router.push("/");
            }
        },
	    middleware:"admin",
    }
</script>

<style scoped lang="less">
	@height: 60px;
	@nav-width: 200px;
	.title {
		background-color: #324057;
		display: block;
		font-size: 20px;
		color: #fff;
		text-align: left;
		height: @height;
		line-height: @height;
		padding-left:20px;
		
		a {
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
		height:calc(100% - @height);
		
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
