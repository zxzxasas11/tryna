<template>
	<div>
		<div class="line">
			<div class="left-box">
				<div>{{post.creator.username}}</div>
			</div>
			<div class="right-box">
				<div>{{post.title}}</div>
				<span class="time">{{post.create_time}}</span>
				<div v-html="post.content"></div>
			</div>
		</div>
		<div class="line" v-for="p in post.comments">
			<div class="left-box">
				<div>{{p.from.username}}</div>
			</div>
			<div class="right-box">
				<div v-html="p.content"></div>
				<span class="time">{{p.create_time}}</span>
			</div>
		</div>
		
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
    import axios from '~/plugins/http'
	import post from "../../api/post";
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
	            content:""
            }
        },
	    created() {
            //this.getPost(this.$route.params.id);
        },
        async asyncData ({ params }) {
            let {data} = await post.getOne(params.id);
            return{
                post:data
            }
        },
	    methods:{
            getPost(id){
               post.getOne(id).then(res=>{
                   this.post = res.data;
               })
            },
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
	    }
    }
</script>

<style scoped lang="less">
.line{
	display: flex;
	.left-box{
		flex:1
	}
	.right-box{
		min-height:100px;
		flex:4
	}
}
	
	.time{
		float:right;
	}
</style>
