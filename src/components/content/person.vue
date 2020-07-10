<template>
<div>
	<div class="topbigimg">
		<img src="img/9_grzhglbigimg_1922_600.jpg">
	</div>
	<div class="mid_content">
		<div class="midtop">
			<div class="midtoptop">
				<img src="img/9_grzhgl_tx_41_41.png">
				<p>竹离亭</p>
				<img src="img/anli2zsfh.png">
				<p>个人设置</p>
			</div>
			<p>个人设置</p>
			<div class="midmid_9">
				<div class="midmid_9l">
					<img class="ylt0">
				</div>
				<div class="midmid_9r">
					<div><img class="ylt1">
						<p>240×240像素</p>
					</div>
					<div><img class="ylt2" >
						<p>180×180像素</p>
					</div>
					<div><img class="ylt3">
						<p>80×80像素</p>
					</div>
				</div>
			</div>
			<div class="midbtmbtm09">
				<div class="scwjj"><img src="img/9_grzhgl_wjj_32_26.png"></div>
				<p class="bdscll">本地上传/浏览...</p>
				<input class="upload" type="file" accept="image/jpeg,image/png,image/jpg">
				<p class="sczysx">仅限jpg、gif、png图片文件、小于2M</p>
				<a href="">保存</a>
				<a href="">取消</a>
			</div>
		</div>
		<div class="midbtm">
			<form action="" method="post">
				<ul class="grzhgllist">
					<li>
						<p>邮箱 :</p>
						<input type="text">
					</li>
					<li>
						<p>手机号 :</p>
						<input type="text">
					</li>
					<li>
						<p>用户名 :</p>
						<input type="text">
					</li>
					<li>
						<p>昵称 :</p>
						<input type="text">
						<p class="nczysx">4-8位字符，包括英文，数字和中文</p>
					</li>
					<li>
						<p>性别 :</p>
						<div class="gender">
							<p>保密 ▼</p>
							<ol>
								<li>男</li>
								<li>女</li>
							</ol>
						</div>
					</li>
					<li class="date">
						<p>生日 :</p>
						<div class="year">
							<p>年  ▼</p>
							<ol class="jglist"></ol>
						</div>
						<div class="month">
							<p style="margin-left: 10px;">月  ▼</p>
							<ol class="jglist"></ol>
						</div>
						<div class="day">
							<p style="margin-left: 10px;">日  ▼</p>
							<ol class="jglist"></ol>
						</div>
						<ol class="xingzuo">
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						<li><img src="img/9_xingzuo_554_28.png" ></li>
						</ol>
					</li>
					<li>
						<p>籍贯 :</p>
						<div>
							<p>省份  ▼</p>
							<ol></ol>
						</div>
						<div>
							<p style="margin-left: 10px;">城市  ▼</p>
							<ol></ol>
						</div>
						<div>
							<p style="margin-left: 10px;">街道  ▼</p>
							<ol></ol>
						</div>
					</li>
					<li>
						<p>个人描述 :</p>
						<input type="text">
					</li>
				</ul>
				<input class="grzhglbc" type="submit" value="保存" />
				<button class="grzhglqx" type="button">取消</button>
			</form>
		</div>
	</div>
</div>
	
</template>

<script>
	
</script>

<style>
	.topbigimg {
		width: 100%;
		height: auto;
	}
	
	.topbigimg>img {
		width: 100%;
		height: auto;
		min-width: 1200px;
	}
	
	.mid_content {
		width: 1200px;
		height: auto;
		margin: 0 auto;
	}
	
	.midtop {
		width: 100%;
		height: 851px;
	}
	
	.midtop:before {
		display: block;
		content: "";
		width: 100%;
		height: 80px;
	}
	
	.midtoptop {
		width: 100%;
		height: 40px;
	}
	
	.midtoptop>img {
		float: left;
	}
	
	.midtoptop>p {
		float: left;
	}
	.midtoptop>img:nth-child(1){
		width: 40px;
		height: 40px;
	}
	.midtoptop>p:nth-child(2) {
		font-size: 20px;
		line-height: 20px;
		color: #626262;
		margin: 11px 0 0 10px;
	}
	
	.midtoptop>img:nth-child(3) {
		width: 18px;
		height: 16px;
		margin: 14px 0 0 12px;
	}
	
	.midtoptop>p:nth-child(4) {
		font-family: "黑体";
		font-size: 20px;
		line-height: 20px;
		color: #fe6a6a;
		margin: 12px 0 0 11px;
	}
	.midtop>p{
		font-family: "黑体";
		font-size: 36px;
		line-height: 36px;
		color: #000000;
		margin-top: 22px;
	}
	.midmid_9{
		width: 100%;
		height: 400px;
		padding-top: 29px;
	}
	.midmid_9l{
		float: left;
		width: 401px;
		height: 400px;
		border-right: 1px solid #c2c1c3;
	}
	.ylt0{
		width: 348px;
		height: 348px;
		border: 1px solid #000;
		margin: 6px 0 0 0;
	}
	.midmid_9r{
		float: left;
		width: 798px;
		height: 400px;
	}
	.midmid_9r>div{
		float: left;
	}
	.ylt1{
		width: 238px;
		height: 238px;
		border: 1px solid #000;
		margin: 36px 0 0 50px;
	}
	.ylt2{
		width: 178px;
		height: 178px;
		border: 1px solid #000;
		margin: 96px 0 0 50px;
	}
	.ylt3{
		width: 78px;
		height: 78px;
		border: 1px solid #000;
		margin: 196px 0 0 50px;
	}
	.midmid_9r>div>p{
		font-size: 16px;
		line-height: 16px;
		color: #3e3e3e;
		margin: 9px 0 0 50px;
	}
	.midbtmbtm09{
		width: 100%;
		height: 247px;
	}
	.upload{
		display: none;
	}
	.midbtmbtm09>div{
		float: left;
		width: 99px;
		height: 38px;
		border: 1px solid #000;
		border-right: 0;
		margin: 7px 0 0 -1px;
		cursor: pointer;
	}
	.midbtmbtm09>div>img{
		width: 32px;
		height: 26px;
		margin: 6px 0 0 30px;
	}
	.bdscll{
		float: left;
		display: block;
		width: 250px;
		height: 40px;
		background: linear-gradient(45deg,#ff2c66,#ff5b3d);
		margin-top: 7px !important;
		margin-left: 0 !important;
		color: #fff !important;
		font-size: 16px !important;
		line-height: 40px !important;
		text-align: center;
		cursor: pointer;
	}
	.sczysx{
		display: block;
		width: 100%;
		float: left;
		font-size: 16px;
		color: #3e3e3e;
		line-height: 16px;
		margin-top: 30px;
	}
	.midbtmbtm09>a{
		float: left;
		display: block;
		width: 158px;
		height: 38px;
		border: 1px solid #000;
		text-align: center;
		font-size: 16px;
		line-height: 38px;
		color: #3e3e3e;
		margin-top: 30px;
	}
	.midbtmbtm09>a:nth-child(6){
		margin-left: 31px;
	}
	.midbtmbtm09>a:hover{
		background: linear-gradient(45deg,#ff2c66,#ff5b3d);
		color: #fff;
	}
	.midbtmbtm09>a:active{
		color: #000;
	}
	.midbtm{
		width: 100%;
		height: 620px;
	}
	.grzhgllist>li{
		width: 100%;
		height: 50px;
	}
	.grzhgllist>li>p{
		float: left;
		font-size: 16px;
		color: #3e3e3e;
		line-height: 40px;
		display: block;
		width: 111px;
	}
	.grzhgllist>li>div>p{
		float: left;
		width: 56px;
		height: 38px;
		border: 1px solid #88a0c2;
		background: linear-gradient(45deg,#ff2c66,#ff5b3d);
		color: #fff;
		text-align: justify;
		padding: 0 20px 0 22px;
		font-size: 16px;
		line-height: 38px;
		cursor: pointer;
	}
	.grzhgllist>li>div>p::after{
		content: "";
		width: 100%;
		display: inline-block;
	}
	.grzhgllist>li>input{
		float: left;
		width: 300px;
		height: 38px;
		border: 1px solid #000;
		background: transparent;
		padding: 0 9px;
	}
	.nczysx{
		width: 255px !important;
		color: #3e3e3e;
		font-size: 16px;
		line-height: 40px;
		margin-left: 20px;
	}
	.xingzuo{
		float: left;
		margin-left: 12px;
	}
	.xingzuo>li{
		float: left;
		width: 40px;
		height: 40px;
		background: #c2c1c3;
		margin-left: 8px;
		overflow: hidden;
	}
	.xingzuo>li:nth-child(1)>img{margin-top: 6px;margin-left: 6px;}
	.xingzuo>li:nth-child(2)>img{margin-top: 6px;margin-left: -42px;}
	.xingzuo>li:nth-child(3)>img{margin-top: 6px;margin-left: -90px;}
	.xingzuo>li:nth-child(4)>img{margin-top: 6px;margin-left: -138px;}
	.xingzuo>li:nth-child(5)>img{margin-top: 6px;margin-left: -186px;}
	.xingzuo>li:nth-child(6)>img{margin-top: 6px;margin-left: -234px;}
	.xingzuo>li:nth-child(7)>img{margin-top: 6px;margin-left: -282px;}
	.xingzuo>li:nth-child(8)>img{margin-top: 6px;margin-left: -330px;}
	.xingzuo>li:nth-child(9)>img{margin-top: 6px;margin-left: -378px;}
	.xingzuo>li:nth-child(10)>img{margin-top: 6px;margin-left: -426px;}
	.xingzuo>li:nth-child(11)>img{margin-top: 6px;margin-left: -474px;}
	.xingzuo>li:nth-child(12)>img{margin-top: 6px;margin-left: -522px;}
	.grzhglbc,.grzhglqx{
		float: left;
		width: 160px;
		height: 40px;
		background: linear-gradient(45deg,#ff2c66,#ff5b3d);
		outline: none;
		color: #fff;
		border: none;
		margin-top: 20px;
		cursor: pointer;
	}
	.grzhglqx{
		margin-left: 31px;
	}
	.gender{
	}
	.gender>ol{
		width: 56px;
		height: 76px;
		position: relative;
		display: none;
	}
	.gender>ol>li{
		margin-left: 111px;
		width: 56px;
		height: 38px;
		border: 1px solid #88a0c2;
		background: linear-gradient(45deg,#ff2c66,#ff5b3d);
		color: #fff;
		text-align: center;
		padding: 0 20px 0 22px;
		font-size: 16px;
		line-height: 38px;
		cursor: pointer;
		position: absolute;
		
	}
	.gender>ol>li:hover{
		color: #000000;
	}
	.gender>ol>li:nth-child(1){
		top: 39px;
	}
	.gender>ol>li:nth-child(2){
		top: 78px;
	}
	.date>div{
		float: left;
		width: 98px;
		position: relative;
	}
	.jglist{
		display: none;
		float: left;
		overflow-y: auto;
		height: 200px;
		position: absolute;
	}
	.zindex{
		position: relative;
		z-index: 1;
	}
	.jglist>li{
		width: 98px;
		height: 38px;
		border: 1px solid #88a0c2;
		background: linear-gradient(45deg,#ff2c66,#ff5b3d);
		color: #fff;
		text-align: center;
	}
</style>
