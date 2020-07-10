<template>
	<div id="bottom2">
		<div class="bottom2all">
			<div class="bottom2_left">
				<ul>
					    <li><router-link to="/home">首页</router-link></li>
						<li><router-link to="/cases">服务</router-link></li>
						<li><router-link to="/prize">荣誉</router-link></li></li>
						<li><router-link to="/news">新闻</router-link></li></li>
				</ul>
			</div>
			<div class="bottom2_center">
				      	   <ul>
				      	   	<li class="we">其他平台联系我们</li>
				      	   </ul>
				      	<!--   联系方式图标-->
					      <ul>
					      	<li class="icon"><p><img class="web" src="../../assets/img/bottom_img/qq.jpg"></p></li>
					      	<li class="icon"><p><img class="web" src="../../assets/img/bottom_img/web.jpg"></p></li>
					      	<li class="icon"><p><img class="web" src="../../assets/img/bottom_img/weixin.jpg"></p></li>
					      </ul>
							<ul>
								<li class="we">订阅信息</li>
								<li>
									<input class="tip" type="text" placeholder="请输入您要的信息" />
								    <button class="go" type="button">GO</button>
								</li> 
							</ul>
			</div>
			<div class="bottom2_right">
				<img class="logo1" src="../../assets/img/bottom_img/logo.png">
				<img class="logo2" src="../../assets/img/bottom_img/logo2.png">
				<p class="over">Copyright 2013-2020,chengzhushuo.com</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'bottom'
	
	}
</script>

<style lang="scss" scoped>
	@import url("../../assets/scss/bottom.scss");
</style>
