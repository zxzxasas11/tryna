<template>
	<div>
		<div class="nav">
			<div class="fl title">用户管理</div>
			<div class="fl search" style="width:250px;">
				<el-input placeholder="搜索" v-model="searchCondition"  @keyup.native.enter="infoSearch">
					<el-button slot="append" icon="el-icon-search" @click="infoSearch"></el-button>
				</el-input>
			</div>
			<div class="fr btn">
			</div>
		</div>
		<Table
				:totalSize="tableTotalData"
				@del="del"
				@edit="edit"
				navHeight=40
				ref="table"
				:tableData="info"
				:tableKey="tableKey"
				:btn_group="btn">
		</Table>
	</div>
</template>

<script>
    import Table from '~/components/Table'
    export default {
        data() {
            return {
                searchCondition:"",
                tableTotalData:null,
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                info: [],
                tableKey: [
                    {name: '姓名', value: 'username'},
                    {name: '账号', value: 'code'},
                    /*{name: '邮箱', value: 'email'},
                    {name: '性别', value: 'sex',filter:{0:"男",1:"女"}},*/
                ],
            }
        },
        components: {Table},

        methods: {
            search(obj) {
            },
            infoSearch(){

            },
            //删除用户
            del(val){
            },
            //修改用户
            edit(val){
            },
        },
        mounted() {
        },
    }
</script>

<style scoped lang="less">
	@import '../../../assets/css/tableManage.less';
</style>

