<template>
	<div>
		<el-form :model="form" ref="form">
			<el-form-item label="分组">
				<el-select v-model="form.category[0]">
					<el-option :key="index"  v-for="(c,index) in category" :label="c.name" :value="c._id"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<span>状态:</span>
				<el-select v-model="form.status">
					<el-option label="启用" value=2></el-option>
					<el-option label="维护" value=1></el-option>
					<el-option label="废弃" value=0></el-option>
				</el-select>
				<span>请求协议:</span>
				<el-select v-model="form.protocol">
					<el-option value="http" label="http">http</el-option>
					<el-option value="https" label="https">https</el-option>
				</el-select>
				<span>请求方式:</span>
				<el-select v-model="form.method">
					<el-option value="GET" label="GET"></el-option>
					<el-option value="POST" label="POST"></el-option>
					<el-option value="PUT" label="PUT"></el-option>
					<el-option value="DELETE" label="DELETE"></el-option>
				</el-select>
				
			</el-form-item>
			<el-form-item label="URI">
				<el-input v-model="form.url"></el-input>
			</el-form-item>
			<el-form-item label="名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="JSON">
				<div id="editor">
					<mavon-editor
							style="height: 400px;width: 100%;"
							ref="md"
							:ishljs="true"
							v-model="form.parameter">
					</mavon-editor>
				</div>
			</el-form-item>
			
			<el-form-item label-width="0">
				<el-button type="primary" @click="submitAdd">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import project from "../../../../api/project";
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css'
    export default {
        data(){
            return{
                form:{
                    protocol:"",
                    method:"",
                    url:"",
                    name:"",
                    category:[],
                    parameter:"{'name':'', 'code':''}",
	                status:""
                },
	            category:[]
            }
        },
        components: {mavonEditor},
	    methods:{
            async submitAdd(){
                console.log(this.form.parameter);
                return;
                if(this.form.parameter){
                    let data = JSON.parse(this.form.parameter);
                    for(let i in data){
                        console.log(typeof (data[i]));
                    }
                }
                return;
                await project.addApi(this.$store.getters.getProject._id,this.form).then(res=>{
                    console.log(res);
                })
                
            }
	    },
	    created(){
            console.log(this.$store.getters.getProject);
		    this.category = this.$store.getters.getProject.category
	    },
        /*async fetch ({ app, store, params }) {
            return{category:store.getters.getProject.category}
            //let { data } = app.$axios.get('/token');
            //store.commit('setToken', data.token);
        },*/
	    mounted() {
        }
    }
</script>

<style scoped lang="less">

</style>
