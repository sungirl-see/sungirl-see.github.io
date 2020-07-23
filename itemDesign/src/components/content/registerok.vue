<template>
	<div class="registerok">
		<img class="modalclose" src="../../assets/img/id_modal_close_30_30.png" @click="isClose"/>
		<div class="touxiang">
			<img src="../../assets/img/touxiang.png" >
		</div>
		<p class="reok">注册成功</p>
	</div>
</template>

<script>
	export default{
		name:"registerok",
		methods:{
			isClose(){
				// this.$emit('closeok',false)
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.registerok{
		width: 543px;
		height: 466px;
		background: #ffffff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -233px 0 0 -271.5px;
	}
	.modalclose{
		width: 30px;
		height: 30px;
		position: absolute;
		top: 1px;
		right: 1px;
		border: none;
	}
	.touxiang{
		width: 100%;
		height: 139px;
		text-align: center;
		margin-top: 22px;
	}
	.touxiang>img{
		width: 139px;
		height: 139px;
	}
	.reok{
		width: 100%;
		height: 35px;
		margin-top: 60px;
		text-align: center;
		font-size: 35px;
		line-height: 35px;
	}
</style>
