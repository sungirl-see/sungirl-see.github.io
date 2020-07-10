<template>
	<div class="home_start">
		<!-- 轮播图 -->
		<cpacture></cpacture>
		<!--中间部分-->
		<div id="center">
			<div>
				<div id="square4">
				<ul>
					<li>ADCSCA</li>
					<li>SA</li>
				</ul>
			</div>	
			</div>
			<div>
				<p class="center_2">
					IDESING品牌营销咨询有限公司是一家精熟品牌策划营销咨询的专业公司，团队拥有经验丰富的国际营销咨询师、品牌策划师、创意设计师和精准营销专业人士。服务对象主要为进入新市场的品牌和营销力度不达预期效果的中期企业。专攻营销策划类服务，为企业打造并落实一个以差异化为导向的，具有核心竞争力的品牌与营销传播概念。专注营销策划经验一一200项成果累积 ，专注文化创意服务。
				</p>
			</div>
			<div>
				<img src="../../assets/img/home_img/pa3.jpg" />
			</div>
			<div>
				<ul class="ul">					
					<li>ABOUS</li>
					<li>US</li>
				</ul>
			</div>
			<div id="square2">
				<ul>
					<li>---</li>
					<li>DD&nbsp;DADSADDS</li>
					<li>WS&nbsp;DAA</li>
				</ul>				
			</div>
			<div>
				<p id="word2">
					IDESING团队规模行业第一，从品牌咨询、标志VI到视频、传播均为独立专业团队，欢迎莅临正邦王府井4000平独栋办公楼现场考察。拒绝流水作业、套搬模板，为每个客户做定制营销务从战略制定到执行督导再到目标达成，客户的信任就是对央正最大的责任。大量的实战经验表明 :只有深度解析企业发展战略，才能创造最有价值的商业品牌。
				</p>
			</div>
			<div class="center_3">
				
			</div>
			<div class="last">
				<ul>
					<li><img src="../../assets/img/home_img/pa2.jpg" /></li>
					<li class="last_word3">千里之行始于足下，需求分析是建立互联网营销的第一步 其决定了未来产<br /> 品上线后的竞争力与失败。精准的把握客户深层次的需求，从而精确的定位出企业<br /> 的互联网营销思路，是我们的核心竞争力之一。</li>
				</ul>
			</div>
		</div>
			<!--图片堆叠-->
			<div id="bottmo_TU">
				<div class="TU_satr">
					<div id="bg_square1">
					<ul>
						<li>DSCDS</li>
						<li>HN</li>
					</ul>
			        </div>
				</div>
				<div id="TU_left">
					<div class="left_1">
				       <ul>
					     <li class="Mword1">VI/CI/SI企业文化</li>
					     <li class="Mword2">中国国际航空股份有限公司(国航)是中国唯一中国国际航空股份有限公司(国航)是中国唯一公司(国航)是中国唯一 </li>
				      </ul>
					</div>
					<div class="left_2">
						<img src="../../assets/img/home_img/pacture46.jpg" />
					</div>
					<div class="left_2">
						<img src="../../assets/img/home_img/pacture-47.jpg" />
					</div>
					<div class="left_3">
						<img class="img" src="../../assets/img/home_img/pacture-48.jpg" />
						<img src="../../assets/img/home_img/pacture-49.jpg" />
					</div>
					<div class="double">
						<img src="../../assets/img/home_img/pacture-50.jpg" />
					</div>
				</div>
			</div>
			<div id="bg_square">
				<p class="bg_word">OUR&nbsp;SERVICE&nbsp;PROVIDER</p>
			</div>
			<div id="word4">
			 <p align="center">我们标志VI设计服务，主要包括品牌标志策略与实际，品牌视觉审计<br /> 与诊断，吉祥物设计等。为您提供品牌<br /> 名称企业形象设计</p>
			</div>
			<!--发送按钮-->
			 <div id="button">
			    <button type="button" class="sign1">建立合作</button>
			    <button type="button" class="sign2">发送电子邮件</button>
			</div>
			<div class="newsquire">
				<div id="square_last">
					<p class="last_word1">INESING广告传媒设计服务，主要包含传播策略，执行顾问，广告策划及设计，画册设计等。我们会为您提供传播终端的数据研究</p>
				</div>
			</div>
			
			<div class="last_word2">
				<p>设计作为人的主观意志的体现，一方面基于对客观世界物的因素的认识，这种认识来源于人类的科学和生产实践；<br/> 一方面基于对人的因素的认识</p>
			</div>
			<!--地址-->
			    <div id="bottom">                    	
					<p align="center" class="arr">天津市和平区张自忠路13号<br /> 电话：0000-123465&nbsp;&nbsp;&nbsp;&nbsp;传真：86-01-22545
					</p>         
			</div>
			<div id="bottom1">
				<div id="Bpacture">
					<img class="t" src="../../assets/img/home_img/pacture51.jpg"  />
				</div>
				<div id="cal">
					<ul>
						<li class="a">联系我们</li>
						<li>
							<input class="tip1" type="text" placeholder="姓名" /><br />
							<input class="tip1" type="tel" placeholder="手机号" />
						</li>
						<li>
							<textarea class="tip1" rows="7" cols="40" placeholder="提供您所需设计"></textarea>
						</li>
						<li>
							<button type="button" class="button_last">发送</button>
						</li>
					</ul>
				</div>
			</div>
	</div>
</template>
<script>
	import cpacture from '../component/cpacture.vue'
	export default {
		name:'home',
		components:{
			cpacture,
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/home.scss';
	
</style>
