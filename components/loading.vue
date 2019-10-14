<template>
	<div class="loading-page" v-if="loading">
		<p>loading...</p>
	</div>
</template>

<script>
    export default {
        layout:"blank",
        data: () => ({
            loading: false
        }),
        methods: {
            start () {
                this.loading = true
            },
            finish () {
                this.loading = false
            }
        }
    }
</script>

<style scoped lang="less">
	.loading-page{
		width:100%;
		height:100%;
		position: absolute;
		left:0;
		top:0;
		background: rgba(0,0,0,.3);
		text-align: center;
	}

</style>
