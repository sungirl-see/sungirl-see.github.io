<template>
	<div>
		<div id="top">
				  <img class="logo_img" src="../../assets/img/logo.png" />
				  <div id="nav">
				  		  <ul>
				  			  <li><router-link to="/home">首页</router-link></li>
				  			  <li><router-link to="/cases">案例</router-link></li>
				  			  <li><router-link to="/honour">荣誉</router-link></li>
				  			  <li><router-link to="/news">新闻</router-link></li>
				  		  </ul>
				  </div>
				  	<button type="button" class="sign" @click="loginfirst"  v-if="!isShow">注册\登录</button>
					<router-link to="/personal" class="aaa" v-else>
						<img :src='navtop_img' v-show="istshow"/>
						<span>{{usname}}</span>
					</router-link>
				  
		</div>	
		<mantle v-show="isShow" @close="disappear" @getname='getusername' @txshow='istxshow'></mantle>
	</div>	
</template>

<script>
	import mantle from '../component/mantle.vue'
	export default {
	  name: 'NavTop',
	  data(){
		return{
			navtop_img:require('../../assets/img/show_img/pa26.jpg'),
			isShow:false,
			usname:'',
			usernameShow:false,
			istshow:false
		}  
	  },
	  components:{
		  mantle
	  },
	  
	 methods:{
		uploadAvatar(){
			this.navtop_img=localStorage.getItem('navImg')
		},
		loginfirst(){
				this.isShow=true
		},
		disappear(val){
			this.isShow=val
		},
		getusername(val){
			this.usname=val
			localStorage.setItem('Name',val)
		},
		istxshow(val){
			this.istshow=val
		}
	 },
	 mounted(){
	 		this.uploadAvatar()
	 },
	}

</script>

<style>
	@import url("../../assets/css/nav_top.css");
</style>
