<template>
	<div class="bg">
		<div class="nav">
			<div>tryna</div>
			<ul>
				<li>文章列表</li>
				<li><nuxt-link to="/update">更新日志</nuxt-link></li>
				<li><nuxt-link to="/document/1">文档中心</nuxt-link></li>
				<li><nuxt-link to="/about">关于我</nuxt-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
	.bg{
		width:100%;
		height:200px;
		background: url("../static/img/bg.jpg");
		.nav{
			height:80px;
			line-height: 80px;
			display: flex;
			width:100%;
			margin:0 auto;
			font-weight: bold;
			color:#666;
			div{
				flex:1;
			}
			ul{
				flex:1;
				display: flex;
				li{
					flex:1;
					text-align: center;
				}
			}
		}
	}
</style>
