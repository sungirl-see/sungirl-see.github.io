<template>
	<div class="center">
		<prize>
				<p slot="title">{{newsTitle}}</p>
				<img slot="prize-picture" :src="img"/>
				<img slot="small-pacture" src="../../assets/img/show_img/pa17.jpg"/>
				<img slot="small-pacture-second" src="../../assets/img/show_img/pa18.jpg"/>
				<img slot="small-pacture-third" src="../../assets/img/show_img/pa26.jpg"/>
				
				<p slot="small-word-name">奥黛丽赫本</p>
				<p slot="small-word-month">5月5日到5月10日</p>
				<p slot="small-word-content">获奖理由：奥黛丽运用细腻的线条强烈的色彩搭配充分的体现了设计的美感</p>
				
				<p slot="small-word-second-name">新品展览</p>
				<p slot="small-word-second-month">2月3日到2月10日</p>
				<p slot="small-word-second-content">新品展览新品展览新品展览新品展览</p>
				
				<p slot="small-word-third-name">设计师交流会</p>
				<p slot="small-word-third-month">1月20日到1月26日</p>
				<p slot="small-word-third-content">设计师交流会</p>
				<p slot="content-validity" v-html="content">
					{{content}}
				</p>
		</prize>
	</div>
</template>

<script>
	import prize from './prize.vue'
	export default{
		name:'serve',
		components:{
			prize
		},
		data(){
			return{
				newsTitle:'',
				img:'',
				content:''
			}
		},
		methods:{
			news(){
				this.$axios.get('/',{
					params:{
						channel:"头条",
						start:'0',
						num:'1',
						appkey:"6c5d248b4ff95b72"
					}
				}).then(res=>{
					const firstNews=res.data.result.list[0]
					this.newsTitle=firstNews.title
					this.img=firstNews.pic
					this.content=firstNews.content
				}).catch(err=>{
					alert(err)
				})
			}
		},
		mounted() {
			this.news()
		}
	}
</script>

<style>
	.center{
		width: 1202px;
		height: auto;
		margin: 0 auto;
		/* background-color: #AFAFAF; */
	}
</style>
