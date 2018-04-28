<template>
    <div class="login">
    	<div class="login-hull">
    		<img :src="loginImg"/>
    		<h1>{{title}}</h1>
    		<div class="main">
    			<el-form>
    				<el-form-item label="账号">
    					<el-input v-model="validate.username"></el-input>
    				</el-form-item>
    				<el-form-item label="密码">
    					<el-input type="password" v-model="validate.password"></el-input>
    				</el-form-item>
    				<el-button plain type="primary" @click="submit">登录</el-button>
    			</el-form>
    		</div>
    	</div>
    </div>
</template>

<script>
export default {
	name: "login",
	data(){
		return {
			title: '金阳运维管理系统',
			loginImg: './static/img/u5089.png',
			validate: {
				username: 'admin',
				password: 'Aa111111'
			},
			userInfo: {}
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			let isLogin = vm.$store.getters.loginInfo.isLogin;
			if(isLogin)
			{
				vm.$router.push({name: "Index"})
			}
		})
	},
	methods: {
		submit: function(){
			if(this.validate.username && this.validate.password)
			{
				this.$axios.post('/api/user/login?loginName='+this.validate.username+'&&password='+this.validate.password+'').then( response => {
					if(response.data.code == 10000)
					{	
						this.userInfo = {
							"userName": this.validate.username,
							"isLogin": true
						}
						//登录状态存入本地sessionStorage
						let userInfoString= JSON.stringify(this.userInfo);
						sessionStorage.setItem("goldsun-userInfo",userInfoString);
						//登录状态存入VUEX中间件
						this.$store.dispatch('readinLogin',this.userInfo);

						this.$router.push("/index");
					}
					else
					{
						this.$message({
							showClose: true,
							message: '账号或密码错误!',
							type: 'error'
				        });
					}
				})
			}
			else
			{
				this.$message({
					showClose: true,
					message: '账号或密码不能为空!',
					type: 'warning'
		        });
			}
		}
	}
}
</script>

<style rel="stylesheet" scoped>
.login .login-hull
{
	position: absolute;
	width: 500px;
	height: 400px;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	text-align: center;
}
.login .login-hull h1
{
	font-size: 20px;
    color: #00cca8;
    font-weight: 550;
    margin-bottom: 10px;
}
.login .login-hull .main
{
	width: 100%;
    border-radius: 3px;
    padding: 30px 5px 50px 5px;
    background: rgba(0,0,0,0.5);
}
.login .login-hull .main .el-form
{
	width: 295px;
	margin: 0 auto;
}
.login .login-hull .main .el-form .el-form-item
{
	margin-bottom: 20px;
}
.login .login-hull .main .el-form .el-form-item .el-input
{
	margin-top: 5px;
}
.login .login-hull .main .el-form .el-button
{
	display: block;
	width: 100%;
	line-height: 34px;
	height: 34px;
	padding: 0;
	border: 0;
	background-color: #2DB69C;
	color: #FFFFFF;
}
</style>