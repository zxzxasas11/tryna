<template>
	<div class="loading-page" v-if="loading">
		<i class="el-icon-loading" style="font-size: 26px;"/>
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
		background: rgba(255, 202, 41, 0);
		text-align: center;
		z-index:99999;
	}

</style>
