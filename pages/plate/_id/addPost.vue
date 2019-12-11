<template>
	<div class="post-box">
		<div>
			<el-input class="title" v-model="post.title"></el-input>
		</div>
		<div>
			<span>是否添加投票</span>
			<el-switch
				v-model="ifVote"
				active-color="#13ce66">
			</el-switch>
		</div>
		<div class="vote-box" v-if="ifVote">
			<el-input v-model="post.vote.title" placeholder="请输入投票标题" />
			<span>投票类型</span>
			<el-select v-model="post.vote.type">
				<el-input label="单选" value="0"/>
				<el-input label="多选" value="1"/>
			</el-select>
			<el-button @click="addContent">添加选项</el-button>
			<div class="vote-content" v-for="(v,index) in post.vote.content">
				<span>{{index+1}}</span>
				<span style="display: inline-block;width:200px;"><el-input v-model="v.text"/></span>
			</div>
		</div>
		<div>
			<div id="editor">
				<client-only>
					<mavon-editor
							style="height: 400px;width: 100%;"
							ref="md"
							v-model="post.content"
							@imgAdd="imgAdd"
							:ishljs="true">
					</mavon-editor>
				</client-only>
				<el-button @click="reply">提交回复</el-button>
			</div>
		</div>
	</div>
</template>

<script>
    import post from "../../../api/post";
    export default {
        data(){
            return{
                post:{
                    categoryId:this.$route.params.id,
	                vote:{
                        type:0,
                        title:"",
		                content:[]
	                }
                },
	            ifVote:false
            }
        },
	    middleware:"auth",
	    methods:{
            imgAdd(){
            
            },
            addContent(){
                this.post.vote.content.push({text:""});
            },
            /*updateDoc(markdown, html){
                this.post.content = html;
            },*/
            reply(){
                post.addPost(this.post).then(res=>{
                    this.$message.success('发布成功');
                    setTimeout(()=>{
                        this.$router.push("/plate/"+this.$route.params.id);
                    },2000);
                })
            }
	    },
	    watch:{
            'ifVote'(data){
                if(!data){
                    this.post.vote={};
                }
            }
	    }
    }
</script>

<style scoped lang="less">
	.post-box{
		width:80%;
		margin: 0 auto;
	}
</style>
