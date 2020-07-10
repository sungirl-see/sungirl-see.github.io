<template>
	<!-- 轮播图组件开始 -->
	<div class="cpacture">
		<swiper ref="mySwiper" :options="swiperOptions" >
		   <swiper-slide><img src="../../assets/img/home_img/sugur.jpg"></swiper-slide>
		   <swiper-slide><img src="../../assets/img/home_img/bbt.jpg"></swiper-slide>
		   <!-- 分页器 -->
		   <div class="swiper-pagination" slot="pagination"></div>
		   <!-- 左右按钮 -->
		   <div class="swiper-button-prev" slot="button-prev"></div>
		   　　<div class="swiper-button-next" slot="button-next"></div>
		 </swiper>
	</div>
</template>
<!-- 轮播图组件结束 -->
<script>
	export default {
		name:'carrousel',
		data() {
		      return {
		        swiperOptions: {
					// 分页器
		          pagination: {
		            el: '.swiper-pagination',
					clickable: true // 允许点击小圆点跳转
		          },
				  loop:true,
		          // 自动轮播
				  autoplay: {
				  　　　　delay: 5000,
						disableOnInteraction:false
				  　　},
				  navigation: {
				  　　　　nextEl: '.swiper-button-next',
				  　　　　prevEl: '.swiper-button-prev'
				  　　}
		        }
		      }
		    },
		computed: {
			      swiper() {
			        return this.$refs.mySwiper.$swiper
			      }
			    },
		mounted() {
		      this.swiper.slideTo(0, 1000, false)
			  
		    }
	}
</script>

<style lang="scss" scoped>
	$button:rgba(0,0,0,.3);
	$pagination:rgba(0,0,0,.7);
	$pagination_hover:#333;
	.cpacture{
		width: 1300px;
		height: 300px;
		margin: 0 auto;
	}
	.swiper-container {
	      width: 100%;
	      height: 100%;
	    }
	.swiper-button-prev,.swiper-button-next{
		color: $button;
	}
	.swiper-pagination{
		color: $pagination;
	}
</style>
