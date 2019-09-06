<template>
	<div>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="英灵列表" name="/FGO/list"></el-tab-pane>
			<el-tab-pane label="礼装列表" name="/FGO/equipmentList/1"></el-tab-pane>
			<el-tab-pane label="材料" name="/FGO/material/1"></el-tab-pane>
			<el-tab-pane label="计算" name="/FGO/calculate"></el-tab-pane>
		</el-tabs>
		<keep-alive>
			<nuxt-child/>
		</keep-alive>
	</div>
</template>

<script>
    export default {
		data(){
            return{
                activeName:this.$route.path
			}
		},
		methods:{
            handleClick(){
                this.$router.push(this.activeName);
			},
		}
    }
</script>

<style scoped lang="less">

</style>
