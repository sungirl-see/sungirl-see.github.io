<template>
		<div id="center">
				<div>
					<img :src="newsPic[0]" class="bb1"/>
				    <div class="bb2">
					    <p class="bb2_word">{{newsTitle[0]}}</p>
						<router-link to="/show" target="_blank" class="bb2_btn">查看更多</router-link>
				    </div>
				</div>
				<div>
					<div class="bb2">
					    <p class="bb2_word">{{newsTitle[1]}}</p>
					    <router-link to="/designPrize" target="_blank" class="bb2_btn">查看更多</router-link>
				    </div>
					<img :src="newsPic[1]" class="bb1"/>				    
				</div>
				<div>
					<img :src="newsPic[2]" class="bb1"/>
				    <div class="bb2">
					    <p class="bb2_word">{{newsTitle[2]}}</p>
					     <a href="demo好设计.html" class="bb2_btn">查看更多</a>
				    </div>
				</div>
				<div>
					<div class="bb2">
					    <p class="bb2_word">{{newsTitle[3]}}</p>
					    <a href="demo_红锦.html" class="bb2_btn">查看更多</a>
				    </div>
					<img :src="newsPic[3]" class="bb1"/>	
				</div>
				<div>
					<img :src="newsPic[4]" class="bb1"/>
				    <div class="bb2">
					    <p class="bb2_word">{{newsTitle[4]}}</p>
					    
					    <a href="金瑞奖.html" class="bb2_btn">查看更多</a>
				    </div>
				</div>
		</div>
</template>

<script>
	export default{
		name:'honour',
		data(){
			return{
				newsTitle:[],
				newsPic:[]
			}
		},
		methods:{
			news(){
				this.$axios.get('/',{
					params:{
						channel:"头条",
						start:'0',
						num:'5',
						appkey:"6c5d248b4ff95b72"
					}
				}).then(res=>{
					const firstNews=res.data.result.list
					console.log(firstNews)
					for (var i=0;i<firstNews.length;i++) {
						// this.newsTitle+=firstNews[i].title
						this.newsTitle.push(firstNews[i].title)
						this.newsPic.push(firstNews[i].pic)
						console.log(this.newsTitle)
					}
				}).catch(err=>{
					alert(err)
				})
			}
		},
		mounted(){
			this.news()
		}
	}
</script>

<style>
	@import url("../../assets/css/honour.css");
</style>
