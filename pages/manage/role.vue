<template>
	<div class="overflow_hide" style="height:100%;" :class="treeSwitch?'tree-show':'tree-hide'">
		<div class="fl left-window">
			<div class="nav">
				<div class="fl title">角色列表</div>
				<div class="fr btn">
					<span @click="openRoleDialog"><i class="el-icon-circle-plus-outline"></i>增加角色</span>
				</div>
			</div>
			<Table
					:totalSize="info.count"
					navHeight="40"
					ref="table"
					:tableData="info.data"
					@rowClick="rowClick"
					:tableKey="tableKey"
					@del="deletePost"
					@edit="editPost"
					:btn_group="btn">
			</Table>
		</div>
		<div class="right-window fr">
			<Tree
					ref="roleTree"
					:treeName="treeName"
					@save="saveTree"></Tree>
		</div>
		
		<el-dialog
				:close-on-click-modal="false"
				:title="postTitle"
				:visible.sync="postVisible">
			<el-form label-width="80px" :model="addRole" ref="addPost">
				<el-form-item style="text-align:left" label="角色名称">
					<el-input v-model="addRole.name"></el-input>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="postVisible = false">取 消</el-button>
				<el-button type="primary" @click="postSubmit">确 定</el-button>
			</div>
		</el-dialog>
	</div>



</template>

<script>
    import Table from '../../components/Table'
    import treeFunction from '../../assets/js/tree'
    import Tree from '../../components/Tree'
    import role from "../../api/role";
    import authority from "../../api/authority";
    export default {
        data(){
            return{
	            info:{},
	            authorityList:[],
                tableKey: [
                    {name: '角色名称', value: 'name'},
                ],
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                tableTotalData:0,
                postVisible:false,               //添加角色弹出层
	            addRole:{},
                functionList:[],                 //查询出的权限列表
                postTitle:"",
                rightType:"1",
                roleList:[],                      //角色下拉框
                role:"",
                treeSwitch:false,
                treeData:[],
	            editRoleId:"",
                treeName:""
            }
        },
        components: {Table,Tree},
        async asyncData ({ params }) {
            let {data} = await role.getAll({});
            let authData = await authority.getAll({});
            return{
                info:data,
                authorityList:authData.data.data
            }
        },
	    mounted(){
            this.$refs.roleTree.treeData = this.authorityList;
	    },
        methods:{
            getData(){
                role.getAll({}).then(res=>{
                    this.info = res.data;
                })
            },
	        //获取单个权限
	        getOne(id){
                role.getOneAuth(id).then(res=>{
                    this.$refs.roleTree.setCheckedKeys(res.data.authority);
                })
	        },
            rowClick(data){
                this.treeName = data.name;
                this.treeSwitch = true;
                this.editRoleId = data._id;
                this.getOne(this.editRoleId);
            },
            //角色添加修改提交
            postSubmit(){
                //添加角色
                switch (this.postTitle) {
                    case "增加角色":
                        role.add(this.addRole).then(res=>{
                            this.$message.success("添加成功");
                            this.getData();
                            this.postVisible = false;
                        });
                        break;
                    case "修改角色":
                        delete this.addPost.type;
                        delete this.addPost.departmentId;
                        this.$json("/post","PUT",this.addPost).then(()=>{
                            this.postVisible = false;
                            this.getPost(this.$route.params.departmentId);
                        });
                        break;

                }

            },
            //增加角色按钮点击
            openRoleDialog(){
                this.postVisible = true;
                this.postTitle = "增加角色";
            },
            //删除角色
            deletePost(val){
                this.$json("/post/"+val.obj.id,"delete",{}).then(()=>{
                    this.getPost(this.$route.params.departmentId);
                })
            },
	        //树保存
            saveTree(data){
                let putData={
                  authority:data
                };
                role.edit(this.editRoleId,putData).then(res=>{
                    this.$message.success("保存成功");
                })
            }
        }
    }
</script>

<style scoped lang="less">
	@tree-width:200px;
	
	
	.tree-show{
		.right-window{width:@tree-width;transition: width 0.5s;}
		.left-window{
			width:calc(100% - @tree-width);
			transition: width 0.5s;
		}
	}
	.tree-hide{
		.left-window{width:100%;transition: width 0.5s;}
		.right-window{width:0;transition: width 0.5s;}
	}
	@import '../../assets/css/tableManage.less';
</style>
