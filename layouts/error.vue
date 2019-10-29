<template>
	<div class="container">
		<h1 v-if="error.statusCode === 404">页面不存在</h1>
		<h1 v-else>应用发生错误异常{{error.statusCode}}</h1>
		<nuxt-link to="/">首 页</nuxt-link>
	</div>
</template>

<script>
    export default {
        layout:"blank",
        props: ['error'],
	    created() {
        },
    }
</script>

<style scoped>

</style>
