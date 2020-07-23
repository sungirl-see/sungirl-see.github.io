<template>
	<div class="center">
		<p>作品展示</p>
		<ul>
			<li>
				<img v-for="item in img" v-lazy="item.src" />
				<ul class="pactureWords">
					<li v-for="item in words">{{item}}</li>
				</ul>
			</li>
			<li>
				<img v-for="item in secondImg" v-lazy="item.src" />
				<ul class="pactureWords">
					<li v-for="item in words">{{item}}</li>
				</ul>
			</li>
			<li>
				<img v-for="item in thirdImg" v-lazy="item.src" />
				<ul class="pactureWords">
					<li v-for="item in words">{{item}}</li>
				</ul>
			</li>
			<li>
				<img v-for="item in fourth" v-lazy="item.src" />
				<ul class="pactureWords">
					<li v-for="item in words">{{item}}</li>
				</ul>
			</li>
			<li>
				<img v-for="item in fourth" v-lazy="item.src" />
				<ul class="pactureWords">
					<li v-for="item in words">{{item}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		name:'cases',
		data(){
			return{
				img:[
					{src:require('assets/img/cases_img/pa1.jpg')},
					{src:require('assets/img/cases_img/pa2.jpg')},
					{src:require('assets/img/cases_img/pa3.jpg')},
					{src:require('assets/img/cases_img/pa4.jpg')}
				],
				secondImg:[
					{src:require('assets/img/cases_img/pa5.jpg')},
					{src:require('assets/img/cases_img/pa6.jpg')},
					{src:require('assets/img/cases_img/pa7.jpg')},
					{src:require('assets/img/cases_img/pa8.jpg')}
				],
				thirdImg:[
					{src:require('assets/img/cases_img/pa9.jpg')},
					{src:require('assets/img/cases_img/pa10.jpg')},
					{src:require('assets/img/cases_img/pa11.jpg')},
					{src:require('assets/img/cases_img/pa1.jpg')}
				],
				fourth:[
					{src:require('assets/img/cases_img/pa2.jpg')},
					{src:require('assets/img/cases_img/pa3.jpg')},
					{src:require('assets/img/cases_img/pa4.jpg')},
					{src:require('assets/img/cases_img/pa5.jpg')}
				],
				words:['颜色合理搭配','云彩中的菠萝','方块的融化','放飞梦想']
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/cases.css");
</style>
