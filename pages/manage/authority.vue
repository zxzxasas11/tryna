<template>
	<div>
		<div class="nav">
			<div class="fl title">权限管理</div>
			<div class="fl search" style="width:250px;">
				<el-input placeholder="搜索" v-model="searchCondition"  @keyup.native.enter="infoSearch">
					<el-button slot="append" icon="el-icon-search" @click="infoSearch"></el-button>
				</el-input>
			</div>
			<div class="fr btn">
				<span @click="openDialog"><i class="el-icon-circle-plus-outline"></i>添加权限</span>
			</div>
		</div>
		<Table
				:totalSize="info.count"
				navHeight=40
				@edit="edit"
				ref="table"
				:tableData="info.data"
				:tableKey="tableKey"
				:btn_group="btn">
		</Table>
		
		<el-dialog
				:close-on-click-modal="false"
				:title="operateType==='add'?'权限添加':'权限修改'"
				:visible.sync="dialogVisible">
			<el-form label-width="80px" :model="form" ref="info">
				<el-form-item style="text-align:left" label="权限名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				
				<el-form-item style="text-align:left" label="请求方式">
					<el-select v-model="form.method">
						<el-option value="GET" label="GET"></el-option>
						<el-option value="POST" label="POST"></el-option>
						<el-option value="PUT" label="PUT"></el-option>
						<el-option value="DELETE" label="DELETE"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item style="text-align:left" label="基础权限">
					<el-select v-model="form.base">
						<el-option value=1 label="是"></el-option>
						<el-option value=0 label="否"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item style="text-align:left" label="url">
					<el-input v-model="form.url"></el-input>
				</el-form-item>
				
				<el-form-item style="text-align:left" label="sort">
					<el-input v-model="form.sort"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="submitForm">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    import Table from '~/components/Table'
    import authority from "../../api/authority";
    export default {
        data() {
            return {
                searchCondition:"",
                tableTotalData:null,
                info: {},
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                tableKey: [
                    {name: '名称', value: 'name'},
                    {name: '提交方式', value: 'method'},
                    {name: '是否为基础权限', value: 'base'},
	                {name: '接口地址',value:"url"},
                ],
	            page:{
                    currentPage:1
	            },
	            dialogVisible:false,
	            form:{},
	            operateType:""
            }
        },
        components: {Table},
        middleware:"admin",
        async asyncData ({params}) {
            let {data} = await authority.getAll({});
            return{
                info:data
            }
        },
        methods: {
            async search(obj) {
            },
            infoSearch(){

            },
	        //点击添加权限按钮
            openDialog(){
                this.operateType = "add";
                this.form={};
                this.dialogVisible = true;
            },
	        edit(val){
                this.dialogVisible = true;
                this.form = val;
                this.operateType="edit";
	        },
            submitForm(){
                let data = JSON.parse(JSON.stringify(this.form));
                data.base = parseInt(data.base);
                switch (this.operateType) {
	                case "add":
                        authority.add(this.form).then(res=>{
                            this.dialogVisible=false;
                        });
	                    break;
                    case "edit":
                        console.log(data);
                        authority.edit(data).then(res=>{
                            this.dialogVisible=false;
                        });
                        break;
                }
            },
            changeCurrentPage(val){
                this.page.currentPage = val;
                this.$router.push({path:'/manage/log',query:{currentPage:val}});
                this.search(this.page);
            }
        },
        mounted() {
        },
    }
</script>

<style scoped lang="less">
	@import '../../assets/css/tableManage.less';
</style>

