<template>
	<div>
		<div class="nav">
			<div class="fl title">{{info.name}}管理员列表</div>
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
				:totalSize="5"
				@del="del"
				navHeight=40
				ref="table"
				:tableData="info.admin"
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
					<el-button @click="searchUser(admin.code)">查询</el-button>
				</el-form-item>
				<div>
					<div v-for="u in userList"
					     @click="setActive(u)"
					     :class="u.active?'active-class':''">{{u.username}}</div>
				</div>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="addAdmin">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    import Table from '~/components/Table';
    import category from "../../../api/category";
    import user from "../../../api/user";
    export default {
        data() {
            return {
                admin:{},
	            userList:[],
                dialogVisible:false,
                searchCondition:"",
                tableTotalData:null,
                btn: [
                    {name: "删除", method:"del"}
                ],
                info: {},
                tableKey: [
                    {name: '账号', value: 'code'},
                    {name: '用户名', value: 'username'},
                    {name: '注册时间',value:'create_time'},
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
                this.$confirm('是否撤销该管理员?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    category.delAdmin(this.$route.params.categoryId,val._id).then(res=>{
                        console.log(res);
                        this.$message.success("撤销成功");
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });
            },
            openDialog(){
                this.dialogVisible = true;
            },
            addAdmin(){
                let data = {
                    categoryId:this.$route.params.categoryId
                };
                this.userList.forEach((a)=>{
                    if(a.active){
                        console.log(a.username);
                        data.id = a._id;
                    }
                });
                category.addAdmin(data).then(res=>{
                    this.$message.success("添加成功");
                    this.dialogVisible = false;
                })
            },
	        //根据code查询用户列表
            searchUser(code){
                user.getUserList({code:code}).then(res=>{
                    console.log(res.data.data);
                    this.userList = res.data.data;
                })
            },
            setActive(u){
                this.$nextTick((a)=>{
                    this.$set(u,"active",!u.active);
                })
            }
        },
        mounted() {
        },
    }
</script>

<style scoped lang="less">
	@import '../../../assets/css/tableManage.less';
	.active-class{
		color:#fff;
		background-color: #0cf;
	}
</style>

