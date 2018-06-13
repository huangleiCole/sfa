<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->

<template>

	<div class="item-container">
		<!-- <wxc-minibar background-color="black">
			<image src="http://47.98.186.145/api/web/static/img/return.png" class="img" slot="left" ></image>
			<text class="text" slot="middle">系统设置</text>
		</wxc-minibar> -->
		<div class="c"></div>
		<div class="bar">
	        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon" @click="returnTop"></image>
	        <text class="title">系统设置</text>
      	</div>

		<div class="gird_column">
			<text class="text1">个人设置</text>

			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/lock.png" class="img1"></image>
				<text class="text2">安全设置</text>
				<div class="item_right">
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img1 " slot="right"></image>
				</div>
			</div>

			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/location.png" class="img1"></image>
				<text class="text2">默认路线</text>
				<div class="item_right">
					<text class="text3">路线一</text>
				</div>
				<image src="http://47.98.186.145/api/web/static/img/next.png" class="img1 " slot="right"></image>
			</div>

			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/credit_card.png" class="img1"></image>
				<text class="text2">默认收款方式</text>
				<div class="item_right">
					<text class="text3">现金</text>
				</div>
				<image src="http://47.98.186.145/api/web/static/img/next.png" class="img1 " slot="right"></image>
			</div>

			<div class="gap"></div>
		</div>

		<div class="gird_column">
			<text class="text1">其他设置</text>
			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/clean.png" class="img1"></image>
				<text class="text2">清空缓存</text>
				<div class="item_right">
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img1 " slot="right"></image>
				</div>
			</div>

			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/bell.png" class="img1"></image>
				<text class="text2">允许通知</text>
				<div class="item_right item_gap1">
					<switch></switch>
				</div>
			</div>

			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/about.png" class="img1"></image>
				<text class="text2">关于</text>
				<div class="item_right">
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img1 "></image>
				</div>
			</div>
		</div>

	</div>

</template>

<style scoped>
	.title {
		flex: 2;
		margin-right: 30px;
		text-align: center;
		font-size: 40px;
		color: white;
	}
	.bar {
    align-items: center;
    flex-direction: row;
    height: 90px;
    background-color: #000000;
    width: 750px;
  }
  
  .icon {
    margin-left: 30px;
  }

  .img10 {
    width: 45px;
    height: 45px;
  }
	.row {
		flex-direction: row;
		text-align: center;
		background-color: #6184aa;
		width: 100%;
	}
	
	.gap {
		height: 60px;
	}
	
	.gird_row {
		align-items: center;
		flex-direction: row;
		width: 750px;
		height: 120px;
		align: center;
	}
	
	.gird_column {
		flex-direction: column;
		width: 750px;
	}
	
	.text {
		font-size: 40px;
		color: white;
	}
	
	.text1 {
		color: #707070;
		font-size: 25px;
		margin-top: 15px;
		margin-left: 30px;
		margin-bottom: 20px;
	}
	
	.text2 {
		color: #8a8a8a;
		font-size: 30px;
	}
	
	.text3 {
		color: #2c2c2c;
		font-size: 30px;
	}
	
	.img {
		width: 45px;
		height: 45px;
	}
	
	.img1 {
		width: 35px;
		height: 35px;
		margin-left: 20px;
		margin-right: 25px;
	}
	
	.item_right {
		flex: 3;
		align-items: flex-end;
	}
	
	.item_gap {
		margin-right: 70px;
	}
	
	.item_gap1 {
		margin-right: 35px;
	}
	
	.item-container {
		width: 750px;
		align-items: center;
		justify-content: bottom;
	}

	.c{
    width: 750px;
    height: 40px;
    background-color: #8B7D6B;
    opacity:0.5;
  }
</style>
<script>
	import { WxcMinibar } from 'weex-ui';
	const modal = weex.requireModule('modal');
	const globalEvent = weex.requireModule('globalEvent');
    const page = weex.requireModule("page")
	export default {
		components: { WxcMinibar },
		created() {
            globalEvent.addEventListener("onPageInit", function(param) { 
				page.enableBackKey(false);
				page.setBackKeyCallback(function() {
					modal.toast({ message: '触发返回键事件' });
				});
            });
        },
		methods : {
			returnTop(){
        		var nav = weex.requireModule('navigator') ;
        		nav.push('./index.js');
      		}
		}
	};
</script>