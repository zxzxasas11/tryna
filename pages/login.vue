<template>
	<div class="box">
		<el-form label-width="80px" :model="user"  ref="user">
			<div style="margin:10px 0;font-size:20px;">登录</div>
			<el-form-item style="text-align:left" label="账号">
				<el-input style="width:250px;"  v-model="user.code"></el-input>
			</el-form-item>
			<el-form-item style="text-align:left" label="密码">
				<el-input style="width:250px;" type="password" v-model="user.password"></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button >取 消</el-button>
			<el-button type="primary" @click="login">确 定</el-button>
		</div>
	</div>
</template>

<script>
	import user from "../api/user";
    export default {
        layout:"blank",
        data(){
            return{
                user:{
                    code:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                user.login(this.user).then(res=>{
                    this.$store.dispatch("user/setToken",res.data.token);
                    this.$router.replace("/");
                })
                /*this.$json("/login","POST",this.user).then(res=>{
                    this.$store.dispatch("setToken",res.data.token);
                    this.$router.replace("/SysHome");
                });*/
            }
        }
    }
</script>

<style scoped lang="less">
	.box{
		width:360px;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		height: 240px;
	}
</style>
