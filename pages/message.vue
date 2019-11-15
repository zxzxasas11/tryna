<template>
	<div class="main" style="height:calc(100% - 60px)">
		<div class="left">
			<ul>
				<li><nuxt-link to="/message/system">系统消息<span class="sign">{{$store.getters.getMessage.system}}</span></nuxt-link></li>
				<li><nuxt-link to="/message/private">个人消息<span class="sign">{{$store.getters.getMessage.private}}</span></nuxt-link></li>
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
	@import '../assets/css/leftTree';
	
	
</style>
