<template>
	<div>
		<img src="../../assets/img/person_img/person_1942_600.png" class="persontop"/> 
		<div class="person_center">
			<div class="person_center_top">
				<img  class="person_center_tx" :src='personal_tx'/>
				<span class="person_center_name">{{personame}}</span>
				<p class="personinstall">个人设置</p>
			</div>
			<div class="personfild">
				<el-upload
				ref='upload'
				name='picture'
				  class="avatar-uploader"
				  action="/picture/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  >
				  <img v-if="imageUrl" :src="imageUrl" class="avatar" >
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
				<span class="limit">仅限jpg、gif、png图片文件、小于2M</span>
				<!-- <button type="button" class="conserv" @click="conserv">保存</button>
				<button type="button" class="reset" >取消</button> -->
			</div>
			<!-- 个人信息 -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm upform">
			 <el-form-item prop="email" label="邮箱">
			    <el-input v-model.lazy="ruleForm.email" class="form-input" @keyup.enter.native="sendemail"></el-input>
			  </el-form-item>
			 <el-form-item label="验证码" prop="yz">
			 	<el-input v-model.lazy="ruleForm.yz" @keyup.enter.native='emailyz' class="form-input"></el-input>
			 </el-form-item>
			 
			  <el-form-item label="手机号" prop="phone">
			     <el-input v-model.number="ruleForm.phone" class="form-input" ></el-input>
			   </el-form-item>
			   <el-form-item label="用户名" prop="username">
			       <el-input v-model="ruleForm.username" class="form-input" ></el-input>
			     </el-form-item>
			  <el-form-item label="性别" prop="region">
			      <el-select v-model="ruleForm.region" placeholder="请选择性别">
			        <el-option label="男" value="man"></el-option>
			        <el-option label="女" value="woman"></el-option>
			      </el-select>
			  </el-form-item>
			  <el-form-item label="出生日期" required>
			    <el-col :span="11">
			      <el-form-item prop="date1" class="form-input">
			        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" ></el-date-picker>
			      </el-form-item>
			    </el-col>
			  </el-form-item>
			  <!-- 选择省市 -->
			  
			 <div class="city-box">
				 <span class="addres">地址</span>
				 <div style="overflow: hidden;margin:25px;">
					 <div class="select-l g-f-l">
						<select v-model="selected" v-if="provinceL" class="select-box t-city">
							<option selected="selected" value="">请选择省份</option>
							<option v-for="(item,index) in provinceL" :value="item">{{item.name}}</option>
						</select>
					 </div>
					<div class="select-l g-f-l g-ml-5">
						<select v-model="citySelected" v-if="cityL" class="select-box t-city">
							<option selected="selected" value="">请选择市</option>
							<option v-for="(item,index) in cityL" :value="item">{{item.name}}</option>
						</select>
					</div> 
					<div class="select-l g-f-l g-ml-5">
						<select v-model="areaSelected" v-if="areaL" class="select-box t-city">
							<option selected="selected" value="">请选择区县</option>
							<option v-for="(item,index) in areaL" :value="item">{{item.name}}</option>
						</select>
					</div>
				 </div>
			 </div>
			  
			  <el-form-item label="个人描述" prop="desc">
			    <el-input type="textarea" v-model="ruleForm.desc" class="form-input"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')" class="conserv">保存</el-button>
			    <el-button @click="resetForm('ruleForm')" class="reset">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
		
	</div>
</template>

<script>
	import {province,city,area} from '../../../public/json/vue-area.js'
	export default{
		name:'personal',
		data(){
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
			return{
				personal_tx:require('../../assets/img/show_img/pa26.jpg'),
				personame:localStorage.getItem('Name'),
				imageUrl: '',
				ruleForm: {
							username:localStorage.getItem('Name'),
							// username:'',
							email: '',
							   phone:'',
							   region: '',
							   date1: '',
							   desc: '',
							   yz:''
				         },
				selected:'',
				citySelected:'',
				areaSelected:'',
				provinceL:[],
				cityL:[],
				areaL:[],
				// selectedData:'',
				// citySelectedData:'',
				// areaSelectedData:'',
				rules:{
					username:[
					  { required: true, message: '请输入用户名', trigger: 'blur' },
					],
					email:[
					  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
					  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
					],
					yz:[
						{ required: true, message: '请输入验证码', trigger: 'blur' },
					],
					region: [
					            { required: true, message: '请选择性别', trigger: 'change' }
					          ],
					phone:
					 		[{required: true, validator: checkPhone, trigger: 'blur' }],
					
					date1: [
					        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
					        ],
					
					desc: [
					        { required: true, message: '请填写个人描述', trigger: 'blur' }
					      ]
				}
			}
		},
		mounted(){
			this.provinceL=[...province]
		},
		 watch: {
		    selected: function () {
		      // 清除区县
		      this.citySelected = {}
		      this.cityL = city.filter((item) => item.parentId == this.selected.code)
		      for (const i in this.cityL) {
		        if (this.cityL[i].code == this.citySelectedData && this.cityL[i].parentId == this.selected.code) {
		          this.citySelected = this.cityL[i]
		        }
		      }
		    },
		    citySelected: function () {
		      this.areaSelected = {}
		      if (this.citySelected){
		        this.areaL = area.filter((item) => item.parentId === this.citySelected.code)
		      }
		      for (const i in this.areaL) {
		        if (this.areaL[i].code == this.areaSelectedData && this.areaL[i].parentId == this.citySelected.code) {
		          this.areaSelected = this.areaL[i]
		        }
		      }
		    }
		  },
		methods:{
			// 点击更换头像
			handleAvatarSuccess(res, file){
			        this.imageUrl = URL.createObjectURL(file.raw);
					this.personal_tx=res.picUrl;
					
			      },
			      beforeAvatarUpload(file) {
			        const isJPG = file.type === 'image/jpeg||image/png||image/gif';
			        const isLt2M = file.size / 1024 / 1024 < 2;
					
			        if (!isJPG) {
			          this.$message.error('上传头像图片只能是 JPG 格式!');
			        }
			        if (!isLt2M) {
			          this.$message.error('上传头像图片大小不能超过 2MB!');
			        }
					
			        return isJPG && isLt2M;
			      },
					// 发送邮箱验证码
				sendemail(){
						this.$axios.get('/demo/email',{
							params:{
								email:this.ruleForm.email
							}
						}).then(res=>{
							console.log(res)
							const message=res.data.message
							alert(message)
							// 获取验证码
						}).catch(err=>{
							alert('服务器错误')
						})
					
				},
				// 填写邮箱验证码
				emailyz(){
					this.$axios.get('/demo/emailverif',{
						params:{
							usercode:this.ruleForm.yz
						}
					}).then(res=>{
						console.log(res)
						if (res.data.message == 'success') {
							alert('输入正确')
						} else{
							alert('输入错误')
						}
					}).catch(err=>{
						alert('服务器错误')
					})
				},
				// 表单提交  保存按钮
				submitForm(formName) {
					this.$refs[formName].validate((valid) => {
					  if (valid) {
						  this.$axios.get('/demo/add',{
						  	params:{
						  		username:this.ruleForm.username,
						  		gender:this.ruleForm.region,
						  		birth:this.ruleForm.date1,
						  		// place:this.selected+this.citySelected+this.areaSelected
						  	}
						  }).then(res=>{
						  	console.log(res)
						  	if(res.data.status==0){
								alert('保存失败')
							}else{
								alert('保存成功')
							}
						  }).catch(err=>{
						  	console.log(err)
						  	// alert('服务器错误111')
						  })
						  this.$axios.get('/demo/updateAvatar',{
						  	params:{
						  		username:this.ruleForm.username,
						  		picurl:this.personal_tx
						  	}
						  }).then(res=>{
						  	// console.log(res)
						  	localStorage.setItem('navImg',res.data.picurl)
						  })
					  } else {
					    alert('保存失败!');
					    return false
					  }
					})
				        
				      },
				// 重置按钮
				resetForm(formName) {
				        this.$refs[formName].resetFields();
				      },
			},
			
			     
	}
		
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.persontop{
		width: 100%;
		height: auto;
		min-width: 1200px;
		display: block;
	}
	.person_center{
		width: 1054px;
		height: auto;
		/* background-color: #ccc; */
		margin: 80px auto 0 auto;
	}
	.person_center_top{
		width: 100%;
		height: 40px;
		/* background-color: aquamarine; */
	}
	.person_center_tx{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		float: left;
	}
	.person_center_name{
		width: auto;
		height: 40px;
		font-size: 19px;
		line-height: 40px;
		display: inline-block;
		/* background-color: darkgoldenrod; */
		float: left;
	}
	.personinstall{
		width: 100%;
		height: 34px;
		/* background-color: darksalmon; */
		float: left;
		margin-top: 21px;
		font-size: 34px;
		line-height: 34px;
	}
	.personfild{
		width: 100%;
		height: 300px;
		 /* background-color: aquamarine; */
		float: left; 
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
	  .limit{
	  		width: 100%;
	  		height: 18px;
			margin-top: 10px;
	  		display: inline-block;
	  		line-height: 16px;
	  		font-family: "微软雅黑";
	  	}
	  	.conserv,.reset{
	  		width: 160px;
	  		height: 40px;
	  		background-color: transparent;
	  		border: 1px solid #000000;
	  		margin-top: 30px;
	  		cursor: pointer;
	  		outline:none;
			color: #007AFF;
	  	}
	  	.reset{
	  		margin-left: 31px;
	  	}
		
		.form-input{
			width: 318px;
		}
		.city-box{
			width: 100%;
			/* background-color: #88A0C2; */
		}
		.g-f-l{
		  float: left;
		  border-radius: 5px;
		  margin-left: 10px;
		}
		.g-ml-5 {
		  margin-left: 5px;
		  border-radius: 5px;
		}
		.select-box{
		  width: 100px;
		  height: 32px;
		  outline: none;
		}
		.t-city{
			width: 150px;
			height: 32px;
			color: #606266;
			border-radius: 4px;
			outline: none;
			border: 1px solid #DCDFE6;
		}
		.addres{
			height: 32px;
			line-height: 32px;
			color: #606266;
			font-size: 14px;
			float: left;
			margin-left: 30px;
		}
</style>
