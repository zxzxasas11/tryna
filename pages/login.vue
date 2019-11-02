<template>
	<div class="box">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="用户登录" name="login">
				<el-form label-width="80px" :model="user"  ref="user">
					<el-form-item style="text-align:left" label="登录账号">
						<el-input style="width:250px;"  v-model="user.code"></el-input>
					</el-form-item>
					<el-form-item style="text-align:left" label="密码">
						<el-input style="width:250px;" type="password" v-model="user.password"></el-input>
					</el-form-item>
				</el-form>
				<div class="dialog-footer">
					<el-button >取 消</el-button>
					<el-button type="primary" @click="login(user)">确 定</el-button>
				</div>
			</el-tab-pane>
			<el-tab-pane label="用户注册" name="register">
				<el-form label-width="80px" :model="register"  ref="user">
					<el-form-item style="text-align:left" label="账号">
						<el-input style="width:250px;"  v-model="register.code"></el-input>
					</el-form-item>
					<el-form-item style="text-align:left" label="密码">
						<el-input style="width:250px;" type="password" v-model="register.password"></el-input>
					</el-form-item>
				</el-form>
				<div class="dialog-footer">
					<el-button >取 消</el-button>
					<el-button type="primary" @click="regist">确 定</el-button>
				</div>
			</el-tab-pane>
		</el-tabs>
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
                },
	            register:{
                    code:"",
		            password:"",
		            //password2:"",
		            
	            },
                activeName: 'login'
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            login(data){
                alert(1);
                user.login(data).then(res=>{
                    this.$store.dispatch("user/setToken",res.data.token);
                    this.$router.replace("/");
                })
            },
            regist(){
                user.register(this.register).then(res=>{
                    this.$message.success("注册成功,三秒后跳转至主页");
                    setTimeout(()=>{
                        this.login(this.register);
                    },3000)
                })
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
		height: 400px;
	}
</style>
