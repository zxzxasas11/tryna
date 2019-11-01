<template>
	<div>
		<div class="nav">
			<div class="fl title">管理员列表</div>
			<div class="fl search" style="width:250px;">
				<el-input placeholder="搜索" v-model="searchCondition"  @keyup.native.enter="infoSearch">
					<el-button slot="append" icon="el-icon-search" @click="infoSearch"></el-button>
				</el-input>
			</div>
			<div class="fr btn">
				<span @click="openDialog"><i class="el-icon-circle-plus-outline"></i>添加管理员</span>
			</div>
		</div>
		<Table
				:totalSize="info.count"
				@del="del"
				@edit="edit"
				navHeight=40
				ref="table"
				:tableData="info.data"
				:tableKey="tableKey"
				:btn_group="btn">
		</Table>
		
		<el-dialog
				:close-on-click-modal="false"
				title="添加管理员"
				:visible.sync="dialogVisible">
			<el-form label-width="80px" :model="admin" ref="info">
				<el-form-item style="text-align:left" label="输入账号">
					<el-input v-model="admin.code" style="width:calc(100% - 100px)"></el-input>
					<el-button>查询</el-button>
				</el-form-item>
				<div>
					<div v-for="u in userList"></div>
				</div>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="addAdmin">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    import Table from '~/components/Table'
    import category from "../../../api/category";
    export default {
        data() {
            return {
                admin:{},
	            userList:[],
                dialogVisible:false,
                searchCondition:"",
                tableTotalData:null,
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                info: {},
                tableKey: [
                    {name: '标题', value: 'title'},
                    {name:'所属分类',value:'category'},
                    {name: '发帖人', value: 'username'},
                    {name: '发帖时间',value:'create_time'},
                    {name: '回帖数',value:'comments'}
                ],
            }
        },
        components: {Table},
        async asyncData ({ params }) {
            if(params.categoryId){
                let {data} = await category.getOne({id:params.categoryId});
                console.log(data);
                return{
                    info:data
                }
            }
            
        },
        methods: {
            search(obj) {
            
            },
            infoSearch(){

            },
            //删除用户
            del(val){
            },
            openDialog(){
                this.dialogVisible = true;
            },
            addAdmin(){
            
            }
        },
        mounted() {
        },
    }
</script>

<style scoped lang="less">
	@import '../../../assets/css/tableManage.less';
</style>

