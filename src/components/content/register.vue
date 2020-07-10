<template>
	<div class="mcon">
		<img class="modalclose" src="../../assets/img/id_modal_close_30_30.png" @click="isregisteClose"/>
		<el-form ref="form" :model="form" label-width="80px" class="registerForm">
			<el-form-item label="用户名" class="input">
				<el-input v-model.lazy="form.name" class="userinput"></el-input>
			</el-form-item>
			<el-form-item label="手机号" class="input">
				<el-input v-model="form.tel" class="userinput"></el-input>
			</el-form-item>
			<p class="yzp"><span @click='send' class="yzm">发送验证码</span><span class="yzmsize">{{yzm}}</span></p>
			<el-form-item label="验证码" class="input">
				<el-input v-model.lazy="form.yz" class="userinput" @blur='sendyz'></el-input>
			</el-form-item>
			<el-form-item label="密码" class="input">
				<el-input placeholder="请输入密码" v-model="form.password" show-password class="userinput"></el-input>
			</el-form-item>
			<el-form-item class="re">
				<el-button type="primary" @click='zhuce'>注册</el-button>
			</el-form-item>
		</el-form>
		
	</div>
</template>

<script>
	export default {
		name: 'register',
		components: {
			
		},
		data() {
			return {
				checked: true,
				form: {
					name: '',
					tel: '',
					yz: '',
					password: ''
				},
				yzm:'',
				isok: false,
			}
		},
		methods: {

			isregisteClose(){
				this.$emit('isreClose',false)
			},
			// 发送验证码
			send(){
				this.$axios.get('/demo/sendCode',{
					params:{
						code:this.form.yz,
						}
						// withCredentials:true,
					}).then(res=>{
					// console.log(res)
					this.yzm=res.data.code
				}).catch(err=>{
					alert(err)
				})
			},
			sendyz(){
				this.$axios.get('/demo/verification',{
					params:{
						usercode:this.form.yz,
					}
				}).then(res=>{
					if (res.data.message=='success') {
						// 验证码输入正确
						alert('验证成功')
					}else{
						// 验证码输入错误
						alert('输入错误')
					}
				})
			},
			// 注册按钮事件
			zhuce(){
					this.$axios.get('/demo/regist', {
						params: {
							username: this.form.name,
							password: this.form.password,
							tel: this.form.tel
						}
					}).then(res => {
						if(res.data.status==1){
							// 注册成功
							alert('注册成功')
							this.$emit('isreClose',false)
						}else{
							//失败
							alert('注册失败')
						}
					}).catch(err => {
						alert(err)
					})
				}
				
			},
			mounted() {
				
			}
		}
</script>

<style scoped="scoped">
	.mcon {
		width: 543px;
		height: 466px;
		background: #ffffff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -233px 0 0 -271.5px;
	}

	.modalclose {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 1px;
		right: 1px;
		border: none;
	}

	.registerForm {
		width: 100%;
		height: 300px;
		margin-top: 65px;
	}

	.input {
		width: 400px;
		margin: 20px auto;
	}

	.re {
		width: 100%;
		height: 32px;
		text-align: center;
	}

	.userinput{
		width: 150px;
		height: 32px;
	}
	.yzp{
		width: 100%;
		height: 22px;
	}
	.yzm{
		width: 80px;
		height: 22px;
		outline: none;
		border: none;
		float: left;
		font-size: 15px;
		line-height: 20px;
		margin-left: 95px;
		color: #4E4E4E;
		cursor: pointer;
	}
	.yzmsize{
		display: inline-block;
		width: 60px;
		height: 22px;
		margin-left: 5px;
		border: 1px solid #959595;
		text-align: center;
		float: left;
	}
</style>
