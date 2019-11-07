<template>
	<div>
		<div class="operate-btn">
			<div>删除</div>
			<div @click="topOrEssence('essence',1)">加精</div>
			<div @click="setTop()">置顶</div>
		</div>
		<div class="line">
			<div class="left-box">
				<div><nuxt-link :to="'/personal/'+post.creator._id">{{post.creator.username}}</nuxt-link></div>
				<div>{{common.formatCurrency(post.creator.currency)}}</div>
			</div>
			<div class="right-box">
				<div class="post-title">{{post.title}}</div>
				<span class="time">{{post.create_time}}</span>
				<div v-html="post.content"></div>
			</div>
		</div>
		<div class="line" v-for="p in post.comments">
			<div class="left-box">
				<div><nuxt-link :to="'/personal/'+p.from._id">{{p.from.username}}</nuxt-link></div>
			</div>
			<div class="right-box">
				<div v-html="p.content"></div>
				<span class="time">{{p.create_time}}</span>
			</div>
		</div>
		
		<el-dialog
				:close-on-click-modal="false"
				title="置顶"
				:visible.sync="dialogVisible">
			<el-form label-width="80px">
				<el-form-item style="text-align:left" label="选择板块">
					<el-select v-model="topId">
						<el-option
								v-for="r in categoryList.top"
								:key="r._id"
								:value="r._id"
								:label="r.name"></el-option>
					</el-select>
				</el-form-item>
			
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="topConfirm">确 定</el-button>
			</div>
		</el-dialog>
		
		<div>
			<div id="editor">
				<no-ssr>
					<mavon-editor
							style="height: 400px;width: 100%;"
							ref="md"
							@imgAdd="imgAdd"
							@change="updateDoc"
							:ishljs="true">
					</mavon-editor>
				</no-ssr>
				<el-button @click="publish">提交回复</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import post from "../../api/post";
	import category from "../../api/category";
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        head(){
            return {
                title: this.post.title,
                meta: [{
                    hid: "description",
                    name: "description",
                    content: this.post.content
                },{
                    hid: 'viewport',
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                }]
                
            }
        },
        components: {mavonEditor},
        data(){
            return{
                post:{},
	            content:"",
                dialogVisible:false,
	            topId:"",
	            categoryList:{}
            }
        },
	    filters:{
            currency(data){
                let gold=0,silver=0,copper=parseInt(data);
                if(copper>=100){
                    silver = parseInt(copper/100);
                    copper = parseInt(copper%100);
                    if(silver>=100){
                        gold = parseInt(silver/100);
                        gold = parseInt(silver%100);
                    }
                }
                return `${gold}金${silver}银${copper}铜`;
                
            }
	    },
        async asyncData ({ params }) {
            let {data} = await post.getOne(params.id);
            let c = await category.getOne({id: data.categoryId});
            console.log(c);
            return{
                post:data,
	            categoryList:c.data
            }
        },
	    mounted(){
            console.log(this.categoryList);
	    },
	    methods:{
            getPost(id){
               post.getOne(id).then(res=>{
                   this.post = res.data;
               })
            },
		    //发布回复
            publish(){
                post.addComment({postId:this.$route.params.id,content:this.content}).then(res=>{
                    this.$message.success("回复成功");
                    this.getPost(this.$route.params.id);
                })
            },
            imgAdd(){

            },
            updateDoc(markdown, html){
                this.content = html;
            },
		    //加精置顶
		    topOrEssence(type,flag){
                let data = {};
                data[type] = flag;
                this.$confirm(type==='essence'?'确认加精?':'确认置顶?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async() => {
                    await post.setTopOrEssence(this.$route.params.id,data).then(res=>{
                        this.$message.success("成功");
                    })
                }).catch((err) => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });
		    },
		    //设置置顶
            setTop(){
                this.dialogVisible=true;
            },
            topConfirm(){
                category.addTopList(this.topId,this.$route.params.id).then(res=>{
                    console.log(res);
                })
            }
	    }
    }
</script>

<style scoped lang="less">
.line{
	clear: both;
	display: flex;
	.left-box{
		flex:1
	}
	.right-box{
		min-height:100px;
		flex:4;
		.post-title{
			font-weight: bold;
		}
	}
}
	
	.time{
		float:right;
	}
	
	.operate-btn{
		display: flex;
		float: right;
		width:120px;
		clear: both;
		div{
			flex:1;
		}
	}
</style>
