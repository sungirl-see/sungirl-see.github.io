<template>
	<div class="mcon">
		<img class="modalclose" src="../../assets/img/id_modal_close_30_30.png" @click="isregisteClose" />
		<el-form ref="form" :model="form" label-width="80px" class="registerForm" :rules="rules">
			<el-form-item label="用户名" class="registerinput" prop="name">
				<el-input v-model.lazy="form.name" class="userinput"></el-input>
			</el-form-item>
			<el-form-item label="手机号" class="registerinput" prop="tel">
				<el-input v-model.number="form.tel" class="userinput"></el-input>
			</el-form-item>
			<!-- 验证码 -->
			<p class="yzp"><span @click='send' class="yzm">发送验证码</span></p>
			<el-form-item label="验证码" class="registerinput">
				<el-input v-model.lazy="form.yz" class="userinput" @keyup.enter.native='sendyz'></el-input>
			</el-form-item>
			
			<el-form-item label="密码" class="registerinput" prop="password">
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
			var x,y,z;
			var checkPhone = (rule, value, callback) => {
					    const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
					    if (!value) {
					      return callback(new Error('电话号码不能为空'))
					    }
					    setTimeout(() => {
					      
					      if (!Number.isInteger(+value)) {
					        callback(new Error('请输入数字值'))
					      } else {
					        if (phoneReg.test(value)) {
					          callback()
					        } else {
					          callback(new Error('电话号码格式不正确'))
					        }
					      }
					    }, 100)
					  };
			return {
				checked: true,
				form: {
					name: '',
					tel: '',
					yz: '',
					password: ''
				},
				rules:{
						tel: [
					            {required: true, validator: checkPhone, trigger: 'blur' }
					          ],
						name: [
						        { required: true, message: '请输入姓名', trigger: 'blur' },
						        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
						      ],
						password:[
						            { required: true, message: '请输入密码', trigger: 'blur' },
						            { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
						        ],
					},
				yzm: '',
				isok: false,
				session_id:'NONE'
			}
		},
		methods: {
			isregisteClose() {
				this.$emit('isreClose', false)
			},
			// 发送验证码
			send() {
				if (this.form.tel!='') {
					this.$axios.get('/demo/sendCode',{
						params:{
							phoneNumbers:this.form.tel
						}
					}).then(res => {
						console.log(res)
						alert('发送成功')
						this.yzm = res.data.code;
						this.session_id = res.data.session_id;
					}).catch(err => {
						alert(err)
					})
				} else{
					alert('请填写手机号')
				}
				
			},
			// 填写验证码
			sendyz() {
				if (this.form.yz!='') {
					this.$axios.get('/demo/verification', {
						params: {
							usercode: this.form.yz,
							session_id:this.session_id
						},
					}).then(res => {
						console.log(res)
						if (res.data.message == 'success') {
							// 验证码输入正确
							alert('验证成功')
						} else {
							// 验证码输入错误
							alert('输入错误')
						}
					})
					
				} else{
					alert('请填写验证码')
				}
				return x=1
			},
			// 注册按钮事件
			zhuce() {
				this.$axios.get('/demo/regist', {
					params: {
						username: this.form.name,
						password: this.form.password,
						phoneNumbers: this.form.tel
					}
				}).then(res => {
					
					if (res.data.status == 1) {	
						// 注册成功
						alert('注册成功')
						this.$emit('isreClose', false)
					} else {
						//失败
						alert('注册失败')
					}
				}).catch(err => {
					alert(err)
				})
			}

		},
		
	}
</script>

<style>
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
	
		.registerinput {
			width: 400px;
			margin: 20px auto;
		}
	
		.re {
			width: 100%;
			height: 32px;
			text-align: center;
		}
	
		.userinput {
			width: 150px;
			height: 32px;
		}
	
		.yzp {
			width: 100%;
			height: 22px;
		}
	
		.yzm {
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
	
		.yzmsize {
			display: inline-block;
			width: 60px;
			height: 22px;
			margin-left: 5px;
			border: 1px solid #959595;
			text-align: center;
			float: left;
		}
</style>
