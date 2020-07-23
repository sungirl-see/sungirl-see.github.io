<template>
	<div >
		<!-- 标题 -->
		<div class="center-left">
		<div class="title">
			<slot name="title"></slot>
		</div>
		<!-- 图片 -->
		<div class="prize-picture">
			<slot name="prize-picture"></slot>
		</div>
		
		<!-- 内容介绍 -->
		<div class="content-validity">
			<slot name="content-validity"></slot>
		</div>
			
		</div>
		
		<!-- 右边图文 -->
		<div class="center-right">
			<div class="small-pacture">
				<slot name="small-pacture"></slot>
			</div>
			<ul class="small-word">
				<li>
					<slot name="small-word-name"></slot>
				</li>
				<li>
					<slot name="small-word-month"></slot>
				</li>
				<li>
					<slot name="small-word-content"></slot>
				</li>
			</ul>
			<div class="small-pacture">
				<slot name="small-pacture-second"></slot>
			</div>
			<ul class="small-word">
				<li>
					<slot name="small-word-second-name"></slot>
				</li>
				<li>
					<slot name="small-word-second-month"></slot>
				</li>
				<li>
					<slot name="small-word-second-content"></slot>
				</li>
			</ul>
			<div class="small-pacture">
				<slot name="small-pacture-third"></slot>
			</div>
			<ul class="small-word">
				<li>
					<slot name="small-word-third-name"></slot>
				</li>
				<li>
					<slot name="small-word-third-month"></slot>
				</li>
				<li>
					<slot name="small-word-third-content"></slot>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'prize'
	}
</script>

<style>
	.center-left{
		width: 810px;
		height: auto;
		float: left;
	}
	.title{
		width: auto;
		height: 40px;
		line-height: 40px;
		font-size: 25px;
		font-family: "微软雅黑";
		float: left;
		/* background-color: aqua; */
	}
	.title>p{
		background-image: -webkit-linear-gradient(left,#ff2c66,#ff5b3d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.prize-picture{
		width: 810px;
		height: auto;
		/* background-color: aquamarine; */
		margin-top: 20px;
		float: left;
	}
	.content-validity{
		width: 810px;
		height: auto;
		/* background-color: antiquewhite; */
		margin-top: 20px;
		float: left;
	}
	.content-validity>p{
		text-align: left;
		font-size: 17px;
		line-height: 24px;
	}
	.content-validity>p img{
		display: none;
	}
	.center-right{
		width: 323px;
		height: 450px;
		/* background-color: antiquewhite; */
		float: left;
		margin-top: 20px;
		margin-left: 69px;
	}
	.small-pacture{
		width: 120px;
		height: 120px;
		float: left;
		margin-top: 20px;
		/* background-color: aquamarine; */
	}
	.small-word{
		float: left;
		width: 190px;
		height: 110px;
		margin-top:30px;
		margin-left:13px;
		/* background-color: darkseagreen; */
		list-style: none;
	}
	.small-word>li>p{
		font-family: "微软雅黑";
		font-size: 17px;
		height: 17px;
		line-height: 17px;
		color: #4e4e4e;
	}
</style>
