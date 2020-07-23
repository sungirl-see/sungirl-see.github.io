<template>
	<div class="center">
		<prize>
				<p slot="title">{{}}</p>
				<img slot="prize-picture" src="../../assets/img/show_img/cakes.jpg"/>
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
				<p slot="content-validity">
					过去三十年商业高速发展，对设计的需求量猛增，使得这个行业的从业人员良莠不齐，很多只是参加过职业培训班的也成为了设计师。
					<br /><br />
					很多团队一开始就本着时间紧任务重，随手拖朋友介绍几个并不了解的设计师，或者到处在群里留言找设计师接活，找到后不管三七二十一把需求一丢，就等着催稿，结果不仅作品差强人意，还耽误了公司进度。
					<br /><br />
					所以，如果你找的设计师从一开始就只是表现平平，甚至你对他都不了解的话，那今后你们的沟通将后患无穷。
					<br /><br />
					选择一个满意的设计师先要做的是了解他，最直接的办法就是问他要作品。作品的好坏往往能体现设计师能力的高低，如果他作品令你满意，就可以进行到下一步，与设计师沟通需求。
					<br /><br />
					选择一个满意的设计师是合作的基础，通过他的作品去评估他的能力。
					<br /><br />
					小编请大家回想一下自己在跟设计师诉说需求的时候是如何表述的，是不是经常会说这样的内容：“我要尊贵的感觉！”“清新一点的风格吧！”“简洁大方！”“活泼一点~”…….一千个读者就有一千个哈姆雷特，不同的人成长环境的不同，对同一个词也会有不同的理解，这种抽象又虚幻的词语不仅不能明确你的需求，同时还有可能造成误导，从而反复改稿影响效率。
					<br /><br />
					想要直观明确的与设计师沟通，务必要包含以下几点信息，当然信息可以更加丰富，以下几点只是基础信息：
					这一点要建立在前面所说的“选择一个满意的设计师”的基础上，如果之前他们的作品令你满意，那起码在设计方面他们肯定比你专业。
					<br /><br />
					我们在跟设计师沟通时经常会说：“我要用超级酷炫的某某字体”“这个地方要小”“这图形要突出”……然后就出现十几稿甚至几十稿的状态，最终的结果是我们和设计师都身心俱疲。
				</p>
		</prize>
	</div>
</template>

<script>
	import prize from './prize.vue'
	export default{
	 	components:{
			prize
		},
		data(){
			return{
				show:{
					astroname:null
				}
			}
		},
		created:{
			show(){
				this.$axios.get('/',{
					params:{
						
						appkey:"6c5d248b4ff95b72"
					}
				}).then(res=>{
					this.astroname=res.data.result.astroname
				})
				}
			},
		mounted(){
			this.show()
		}
		}
</script>

<style>
	.center{
		width: 1202px;
		height: 1072px;
		margin: 0 auto;
		/* background-color: #AFAFAF; */
	}
</style>
