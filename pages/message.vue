<template>
	<div class="main">
		<div class="left">
			<ul>
				<li><nuxt-link to="/message/system">系统消息</nuxt-link></li>
				<li><nuxt-link to="/message/private">个人消息</nuxt-link></li>
			</ul>
		</div>
		<div class="right">
			<nuxt-child></nuxt-child>
		</div>
	</div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
	@width:200px;
	@lineHeight:40px;
	.main {
		display: flex;
		.left {
			width: @width;
			ul{
				width: 100%;
				li{
					margin:10px 0;
					height:@lineHeight;
					line-height: @lineHeight;
					&:hover{
						background-color: #eeeeee;
					}
					a{
						display: inline-block;
						width: 100%;
					}
				}
			}
		}
		.right {
			width: calc(100% - 200px)
		}
	}
</style>
