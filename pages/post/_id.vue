<template>
	<div>
		<div class="operate-btn" v-if="$store.getters.getPower">
			<div>删除</div>
			<div @click="topOrEssence('essence',1)">{{$store.getters.getPostInfo.essence|essenceFilter}}</div>
			<div @click="setTop()">{{$store.getters.getPostInfo.top|topFilter}}</div>
		</div>
		<div @click="openReply(null)">发表回复</div>
		<div @click="collectPost">{{$store.getters.getPostInfo.collect|collectFilter}}</div>
		<div class="line">
			<div class="left-box">
				<div>
					<nuxt-link :to="'/personal/'+post.creator._id">{{post.creator.username}}</nuxt-link>
				</div>
				<div>{{common.formatCurrency(post.creator.currency)}}</div>
			</div>
			<div class="right-box">
				<div class="post-title">{{post.title}}</div>
				<span class="time">{{post.create_time}}</span>
				<span @click="edit(post)">修改帖子</span>
				<div v-html="post.content"></div>
			</div>
		</div>
		<div class="line" v-for="p in post.comments">
			<div class="left-box">
				<div>
					<nuxt-link :to="'/personal/'+p.from._id">{{p.from.username}}</nuxt-link>
				</div>
			</div>
			<div class="right-box">
				<div v-if="p.to" style="color:red" v-html="common.markdownToHtml(p.to.content)"></div>
				<div class="comment-text" v-html="common.markdownToHtml(p.content)"></div>
				<span class="time">{{p.create_time}}</span>
				<span @click="openReply(p)" v-if="p.from._id!==$store.getters.getUserId">回复</span>
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
		
		<el-pagination
				:page-size="20"
				:pager-count="11"
				@current-change="changePage"
				layout="prev, pager, next"
				:total="post.size">
		</el-pagination>
		<div v-if="replyVisible">
			<div id="editor">
				<client-only>
					<mavon-editor
							style="height: 400px;width: 100%;"
							v-model="content"
							ref="md"
							@imgAdd="imgAdd"
							:ishljs="true">
					</mavon-editor>
				</client-only>
				<el-button @click="publish">提交回复</el-button>
			</div>
		</div>
	</div>
</template>

<script>
    import post from "../../api/post";
    import category from "../../api/category";
    import collect from "../../api/collect";
    import jwt_decode from 'jwt-decode'
    export default {
        head() {
            return {
                title: this.post.title,
                meta: [{
                    hid: "description",
                    name: "description",
                    content: this.post.content
                }, {
                    hid: 'viewport',
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                }]

            }
        },
        data() {
            return {
                page:{
                    currentPage:1
                },
                post: {},
	            to:"",
                content: "",
                dialogVisible: false,
                topId: "",
                categoryList: {},
	            user:{},
	            replyVisible:false,
	            ifAdmin:false
            }
        },
	    filters:{
            collectFilter(data){
                return data===0?'收藏':'取消收藏'
            },
            topFilter(data){
                return data===0?'置顶':'取消置顶'
            },
            essenceFilter(data){
                return data===0?'加精':'取消加精'
            }
	    },
        async fetch({ store, params }) {
            if(store.getters.getT){
                const { data } = await collect.check(params.id);
                store.dispatch('posts/setPost', {collect:data?1:0})
            }
            
        },
        async asyncData({params,store}) {
            let {data} = await post.getOne(params.id);
            let c = await category.getOne({id: data.categoryId});
            store.dispatch('posts/setPost', {top:data.top,essence:data.essence});
            return {
                post: data,
                categoryList: c.data
            }
        },
        methods: {
            //显示回复框
            openReply(from){
                //回复某人
                if(from!==null){
                    console.log(from);
                    this.to = from._id;
                }
                else{
                    this.to =undefined;
                }
                this.replyVisible=true;
            },
            getPost(id,page) {
                post.getOne(id,page).then(res => {
                    this.post = res.data;
                })
            },
            //发布回复
            publish() {
                post.addComment({postId: this.$route.params.id, content: this.content,to:this.to}).then(res => {
                    this.$message.success("回复成功");
                    this.getPost(this.$route.params.id,{currentPage:1});
                })
            },
            imgAdd() {

            },
            /*updateDoc(markdown, html) {
                this.content = html;
            },*/
            //加精置顶
            topOrEssence(type, flag) {
                let data = {};
                data[type] = flag;
                this.$confirm(type === 'essence' ? '确认加精?' : '确认置顶?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await post.setTopOrEssence(this.$route.params.id, data).then(res => {
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
            setTop() {
                this.dialogVisible = true;
            },
            topConfirm() {
                category.addTopList(this.topId, this.$route.params.id).then(res => {
                    console.log(res);
                })
            },
	        //对帖子进行修改
            edit(json){
                console.log(json);
                this.$refs.md.value=json.content
            },
	        //收藏
            collectPost(){
                collect.add(this.$route.params.id).then(res=>{
                    this.$message.success("收藏成功");
                    this.$store.dispatch("posts/setPost",{collect:1})
                })
            },
            changePage(val){
                this.page.currentPage=val;
                this.getPost(this.$route.params.id,this.page);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped lang="less">
	.line {
		clear: both;
		display: flex;
		
		.left-box {
			flex: 1;
			border-right: 1px solid #eeeeee;
			box-sizing: border-box;
		}
		
		.right-box {
			min-height: 100px;
			flex: 4;
			
			.comment-text{
				width:80%;
				float: left
			}
			
			.post-title {
				font-weight: bold;
			}
		}
		
		&:nth-child(odd) {
			background-color: #fffcdd;
		}
		
		&:nth-child(even) {
			background-color: #a8dabd;
		}
	}
	
	.time {
		float: right;
	}
	
	.operate-btn {
		display: flex;
		float: right;
		width: 120px;
		clear: both;
		
		div {
			flex: 1;
		}
	}
</style>
