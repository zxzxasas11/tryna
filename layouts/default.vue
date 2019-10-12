<template>
	<div>
		<navHeader></navHeader>
		<nuxt keep-alive/>
		
	</div>
</template>
<script>
    import navHeader from '~/components/navHeader.vue'
    export default {
        data() {
            return {
            }
        },
        components: {navHeader},
        mounted() {
            //let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        }
    }
</script>
<style>
	html {
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}
</style>
