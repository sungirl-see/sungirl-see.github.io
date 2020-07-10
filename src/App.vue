<template>
  <div id="app">
	  <!-- 导航栏 -->
	  <nav-top></nav-top>
	   
	  <router-view></router-view>
	  
	  <!-- 导航栏结束 -->

	  <!-- 最低端部分 -->
	  <bottom></bottom>
	  <!-- 最低端部分结束 -->
		
  </div>
</template>
<script>
import NavTop from './components/content/nav_top.vue'
import bottom from './components/content/bottom.vue'

export default {
  name: 'App',
  components:{
	  NavTop,
	  bottom
	  
  }
}
</script>

<style >
	@import url("assets/css/base.css");
</style>
