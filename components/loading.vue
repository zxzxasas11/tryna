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

<style scoped>

</style>
