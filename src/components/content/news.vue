<template>
	<!-- 中间内容 -->
	<div>
		<div id="top_pacture"  >
			<div class="top_word">
				<ul>
					<li class="word_E">IDESING</li>
					<li class="word_square">
						<ul>
							<li class="word_dis">IDESING最好的设计</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<!-- 中间部分 -->
		<div class="center">
			<!-- 中间左边新闻 -->
			<div class="center_left">
				<div>
						<p class="time">{{mainContent.time}}</p>
						<p class="new1">
							{{mainContent.title}}
						</p> 
						<p class="new2"  v-html="mainContent.content">
							{{mainContent.content}}
						</p>
				</div>
			</div>
			<!-- 中间右边新闻 -->
			<div id="center_right">
				<p class="new">最新消息</p>
				<ul>
					<li v-for="(item,index) in content" :key="index">
						<a :href="item.url" target="_blank">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
			
	</div>
</template>

<script>
	export default{
		name:'news',
		data(){
			return{
				content:[],
				mainContent:''
			}
		},
		methods:{
			test(){
				// var _this=this
				this.$axios.get('/api',{
					params:{
						channel:"头条",
						start:'0',
						num:'11',
						appkey:"6c5d248b4ff95b72"
					}
				}).then(res=>{
					// 主新闻
					const newLength=res.data.result
					this.mainContent=newLength.list[0]
					 // this.mainContent.push(newLength.list[0])
					
					for(let i=1;i<newLength.list.length;i++){
						let newsContent=newLength.list[i]
						this.content.push(newsContent)
					}
					// console.log(res)
				}).catch(err=>{
					alert(err)
				})
			}
		},
		// 页面刚加载立即执行 = mounted,mounted:在模板渲染成html后调用
		mounted(){
			this.test()
		}
	}
	
</script>

<style>
	@import url("../../assets/css/news.css");
</style>
