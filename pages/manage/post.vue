<template>
	<div>
		<div class="nav">
			<div class="fl title">帖子管理</div>
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
				navHeight=40
				ref="table"
				:tableData="info.data"
				:tableKey="tableKey"
				:btn_group="btn">
		</Table>
	</div>
</template>

<script>
    import Table from '~/components/Table'
    import post from "../../api/post";
    export default {
        data() {
            return {
                searchCondition:"",
                tableTotalData:null,
                btn: [
                    {name: "删除", method:"del"}
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
	    middleware:"admin",
        async asyncData ({ params,store }) {
            let {data} = await post.getList({});
            return{
                info:data
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
        },
        mounted() {
        },
    }
</script>

<style scoped lang="less">
	@import '../../assets/css/tableManage.less';
</style>

