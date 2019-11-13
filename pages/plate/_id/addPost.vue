<template>
	<div class="post-box">
		<div>
			<el-input class="title" v-model="post.title"></el-input>
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
                    categoryId:this.$route.params.id
                }
            }
        },
	    middleware:"auth",
	    methods:{
            imgAdd(){
            
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
	    }
    }
</script>

<style scoped lang="less">
	.post-box{
		width:80%;
		margin: 0 auto;
	}
</style>
