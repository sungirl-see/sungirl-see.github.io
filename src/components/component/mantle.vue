<template>
	<div class='modal' v-show="ismantleClose">
		<div class='mcon'>
			<img class="modalclose" src="../../assets/img/id_modal_close_30_30.png" @click="closeMantle" />
			<div class="modaltitle">
				<div>
					<p :class="{active:istab}" @click="tabLogin">扫一扫登录</p>
				</div>
				<div>
					<p :class="{active:!istab}" @click="tabLogin">账号登录</p>
				</div>
			</div>
			<div class="modalcon">
				<!-- 扫码登录 -->
				<div v-show="istab">
					<img src="../../assets/img/wepic.jpg" width="300px" height="300px" />
				</div>
				<!-- 账号登录 -->
				<div v-show="!istab">
					<div class="h40"></div>
						<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
						  <el-form-item label="用户名" class="name">
						    <el-input v-model="formLabelAlign.name" placeholder="用户登录" class="input"></el-input>
						  </el-form-item>
						  <el-form-item label="密码" class="name">
						    <el-input v-model="formLabelAlign.password" placeholder="请输入密码" class="input" show-password></el-input>
						  </el-form-item>
						  <el-form-item class="denglu">
						    <el-button type="primary" class="loginbtn" @click='login'>登录</el-button>
						  </el-form-item>
						</el-form>
					<a class="prob" href="">登录遇到问题</a>
				</div>
				
				<div class="boline">
					<div class="left">
						<a class="sina" href=""></a>
						<a class="qq" href=""></a>
						<a class="wechat" href=""></a>
					</div>
					<div class="right">
						<el-button type="primary" class="registerbtn" @click='checkin'>立即注册</el-button>
					</div>
				</div>
			</div>
		</div>
		<register v-show="isregisterClose" @isreClose='closere'></register>
	</div>
</template>

<script>
	import register from '../content/register.vue'
	import registerok from '../content/registerok.vue'
	export default{
		name:'mantle',
		components:{
			register,
			registerok
		},
		 data() {
		      return {
		        checked: true,
				labelPosition: 'right',
				formLabelAlign: {
								name: '',
								password:'',
								
				        },
				istab:true,
				ismantleClose:true,
				isregisterClose:false,
				isregisterokClose:false
		      }
		    },
			methods:{
				closeMantle(){
					this.ismantleClose=!this.ismantleClose
				},
				tabLogin(){
					this.istab=!this.istab
				},
				checkin(){
					this.isregisterClose=!this.isregisterClose
				},
				
				closere(val){
					this.isregisterClose=val
					this.ismantleClose=true
					
				},
				login(){
					this.$axios.get('/demo/login',{
						params: {
							username: this.formLabelAlign.name,
							password: this.formLabelAlign.password
						}
					}).then(res=>{
						// console.log(res)
						if(res.data.status){
							alert('登录成功')
							this.ismantleClose=!this.ismantleClose
							this.$emit('txshow',true)
							this.$emit('getname',this.formLabelAlign.name)	
							
						}
						else{
							// 登录失败
							alert('登录失败')
						}
					}).catch(err=>{
						alert('服务器错误')
					})
				}
	},
}
</script>

<style >
	.modal{
			/* display: none; */
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.5);
			z-index: 9999;
		}
		.mcon{
			width: 543px;
			height: 466px;
			background: #ffffff;
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -233px 0 0 -271.5px;
		}
		.modalclose{
			width: 30px;
			height: 30px;
			position: absolute;
			top: 1px;
			right: 1px;
			border: none;
		}
		.modaltitle{
			width: 100%;
			height: 79px;
			border-bottom: 1px solid #cecece;
		}
		.modaltitle>div{
			float: left;
			width: 50%;
			height: 79px;
			text-align: center;
		}
		.modaltitle>div>p{
			display: inline-block;
			height: 78px;
			line-height: 78px;
			padding: 0 5px;
			cursor: pointer;
		}
		.active{
			border-bottom: 2px solid #ff2c66;
		}
		.modalcon{
			width: 100%;
			height: 386px;
		}
		
		.modalcon>div{
			width: 383px;
			height: 300px;
			/*background: aqua;*/
			margin: 0 auto;
		}
		.h40{
			height: 40px;
		}
		.name>label{
			line-height: 48px !important;
		}
		.input{
			width: 200px;
			height: 38px;
			border: none;
			background: transparent;
			margin-top: 10px;
		}
		.reline{
				width: 100%;
				height: 30px;
				line-height: 30px;
				margin-bottom:3px;
				text-align: center;
				/*background: palegreen;*/
			}
			.loginbtn{
				width: 100px;
				height: 40px;
				border: none !important;
				/*渐变*/
				background: linear-gradient(45deg, #ff2c66, #ff5b3d) !important;
				font-family: "微软雅黑";
				font-size: 21px !important;
				color: #fff;
				cursor: pointer;
			}
			.prob{
				display: block;
				width: 100%;
				height: 14px;
				font-family: "微软雅黑";
				font-size: 14px;
				color: #3e3e3e;
				line-height: 14px;
				margin: 20px 0 0 0;
				/*首行缩进*/
				text-indent: 3px;
			}
			.boline{
				width: 383px !important;
				height: 34px !important;
				/*background: palegreen;*/
			}
			.denglu{
				width: 100%;
				text-align: center;
			}
			.denglu>div{
				margin-left: 0 !important;
			}
			.left>a{
				float: left;
				width: 32px;
				height: 32px;
				border: 1px solid #ff494c;
				border-radius: 50%;
				margin: 0 3px;
			}
			.sina{
				background-image: url(../../assets/img/id_sprite_icon_117-34.png);
			}
			.qq{
				background-image: url(../../assets/img/id_sprite_icon_117-34.png);
				background-position: -42px 0;
			}
			.wechat{
				background-image: url(../../assets/img/id_sprite_icon_117-34.png);
				background-position: -85px 0;
			}
			.registerbtn{
				width: 88px;
				height: 31px;
				background: linear-gradient(45deg, #ff2c66, #ff5b3d) !important;
				font-family: "微软雅黑";
				font-size: 14px !important;
				text-align: center;
				/* line-height: 31px; */
				cursor: pointer;
				float: right;
			}
</style>
