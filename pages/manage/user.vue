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
				title="修改用户"
				:visible.sync="dialogVisible">
			<el-form label-width="80px" :model="user" ref="addPost">
				<el-form-item style="text-align:left" label="用户名称">
					<el-input v-model="user.name"></el-input>
				</el-form-item>
				
				<el-form-item style="text-align:left" label="用户角色">
					<el-select v-model="user.roleId">
						<el-option
							v-for="r in roleList"
							:key="r._id"
							:value="r._id"
							:label="r.name"></el-option>
					</el-select>
				</el-form-item>
			
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="postVisible = false">取 消</el-button>
				<el-button type="primary" @click="userSubmit">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    import Table from '~/components/Table'
    import user from "../../api/user";
    import role from "../../api/role";
    export default {
        data() {
            return {
                searchCondition:"",
                tableTotalData:null,
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                info: {},
                tableKey: [
                    {name: '姓名', value: 'username'},
                    {name: '账号', value: 'code'},
	                {name:'注册时间',value:'create_time'},
	                {name:'发帖数',value:"posts"},
	                {name:'回帖数',value:'comments'}
                ],
                dialogVisible:false,
	            user:{},
	            roleList:[],
	            editUserId:""
            }
        },
        components: {Table},
        middleware:"admin",
        async asyncData ({ params }) {
            let {data} = await user.getUserList({});
            let roles = await role.getAll({});
            console.log(roles);
            return{
                info:data,
	            roleList:roles.data.data
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
            //修改用户
            edit(val){
                this.editUserId = val._id;
                this.user={
                    name:val.username,
                };
                this.dialogVisible = true;
            },
            userSubmit(){
                console.log(this.user);
                user.edit(this.editUserId,this.user).then(res=>{
                    this.$message.success('修改成功');
                    this.dialogVisible = false;
                })
            }
        },
        mounted() {
        },
    }
</script>

<style scoped lang="less">
	@import '../../assets/css/tableManage.less';
</style>

