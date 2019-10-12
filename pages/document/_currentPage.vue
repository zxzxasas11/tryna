<template>
	<div>
		<div class="box">
			<div @click="openDetail(doc)" v-for="doc in docList" class="doc-single">
				<img :src="doc.url" alt="error">
				<div>{{doc.name}}</div>
			</div>
		</div>
		<div>
			<el-pagination
					@current-change="handleCurrentChange"
					:current-page=currentPage
					layout="total, prev, pager, next, jumper"
					:total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
    import document from "~/api/document";
    export default {
        data(){
            return{
                docList:[],
	            total:0,
	            currentPage:parseInt(this.$route.params.currentPage)
            }
        },
        created(){
            this.getDoc(this.currentPage);
        },
        /*async asyncData ({ params }) {
             await document.getList(this.currentPage).then((res) => {
                    return {docList:res.data.data,total:res.data.count}
                })
        },*/
        methods:{
            //获取数据
            async getDoc(page){
                await document.getList(page).then((res) => {
                    localStorage.setItem(`page${page}`,JSON.stringify(res.data));
                    this.docList = res.data.data;
                    this.total = res.data.count;
                })
            },
	        //分页
            handleCurrentChange(val){
                this.currentPage =val;
                this.$router.push(`/document/${val}`)
            },
            openDetail(doc){
                localStorage.setItem("name",doc.name);
                this.$router.push("/detail");
            }
        },
	    destroyed(){
            //localStorage.removeItem(`page${this.$route.params.currentPage}`);
	    },
	    watch:{
            /*'$route.params.currentPage'(data){
                //this.$router.push(`/document/${data}`)
	            this.getDoc(data);
            }*/
	    }
    }
</script>

<style scoped lang="less">
	.box{
		width:100%;
		padding:0 10%;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
		.doc-single{
			width:30%;
			background-color: #fff;
			img{
				width:100%;
				height:80%;
				object-fit: cover;
			}
			div{
				height:20%;
				//display: table-cell;
				//vertical-align: center;
				//height:40px;
				//line-height: 40px;
			}
		}
	}
</style>
