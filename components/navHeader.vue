<template>
	<div class="bg">
		<div class="nav">
			<div>tryna</div>
			<ul>
				<li>文章列表</li>
				<li>更新日志</li>
				<li><nuxt-link to="/document">文档中心</nuxt-link></li>
				<li>关于我</li>
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
			width:1200px;
			margin:0 auto;
			color:#666666;
			font-weight: bold;
			div{
				flex:2
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
