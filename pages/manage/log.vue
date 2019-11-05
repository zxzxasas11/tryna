<template>
	<div>
		<div class="nav">
			<div class="fl title">日志管理</div>
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
				navHeight=40
				ref="table"
				:tableData="info.data"
				:tableKey="tableKey">
		</Table>
	</div>
</template>

<script>
    import Table from '~/components/Table'
    import log from "../../api/log";
    import user from "../../api/user";
    export default {
        data() {
            return {
                searchCondition:"",
                tableTotalData:null,
                btn: [
                ],
                info: {},
                tableKey: [
                    {name: '用户名', value: 'username'},
                    {name: '提交方式', value: 'method'},
	                {name:'ip',value:'host'},
	                {name:'接口地址',value:"url"},
	                {name:'描述',value:'desc'},
	                {name:'请求时间',value:'create_time'}
                ],
	            page:{
                    currentPage:1
	            }
            }
        },
        components: {Table},
        middleware:"admin",
        async asyncData ({params}) {
            try {
                let {data} = await log.getLogList({});
                return{
                    info:data
                }
            }catch (e) {
	            console.log(e)
            }
            
        },
        methods: {
            async search(obj) {
                await log.getLogList(obj).then(res=>{
                    this.info = res.data;
                })
            },
            infoSearch(){

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

