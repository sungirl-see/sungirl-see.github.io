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
				  	<button type="button" class="sign" @click="login1"  v-if="!isShow">注册\登录</button>
					<router-link to="/personal" class="aaa" v-else>
						<img src='../../assets/img/show_img/pa26.jpg'/>
						<span>{{usname}}</span>
					</router-link>
				  
		</div>	
		<mantle v-show="isShow" @close="disappear" @getname='getusername'></mantle>
	</div>	
</template>

<script>
	import mantle from '../component/mantle.vue'
	export default {
	  name: 'NavTop',
	  data(){
		return{
			isShow:false,
			usname:'',
			usernameShow:false,
		}  
	  },
	  components:{
		  mantle
	  },
	 methods:{
		login1(){
			this.isShow=true
		},
		disappear(val){
			this.isShow=val
		},
		getusername(val){
			// this.usname=localStorage.getItem("username")
			this.usname=val
			console.log(val)
		},
	 },
	mounted() {
		
	}
	}

</script>

<style>
	@import url("../../assets/css/nav_top.css");
</style>
