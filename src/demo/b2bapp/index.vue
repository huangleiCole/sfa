<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->

<template>
	<wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="icon">
		<div class="item-container" :style="contentStyle">
		<div class="c"></div>
			<div class="bar">
				<image src="http://47.98.186.145/api/web/static/img/navicon.png" class="img1 icon"></image>
				<text class="title">建功车销通</text>
			</div>
			<div class="row">
				<text class="t1">线路：线路1</text>
				<div class="item_right">
					<text class="t3">业务员：{{sales_staff_name}}</text>
				</div>
			</div>
			<div class="gird_row" @click="jump_1">
				<div class="g button">
					<image src="http://47.98.186.145/api/web/static/img/sign.png" class="img"></image><text class="text">签到</text></div>
				<div class="g" @click="jump_2">
					<image src="http://47.98.186.145/api/web/static/img/cc-user.png" class="img"></image><text class="text">售点执行</text></div>
				<div class="g" @click="jump_3">
					<image src="http://47.98.186.145/api/web/static/img/shopping-cart.png" class="img"></image><text class="text">订单</text></div>
			</div>
			<div class="gird_row" @click="jump_4">
				<div class="g">
					<image src="http://47.98.186.145/api/web/static/img/car.png" class="img"></image><text class="text">库存管理</text></div>
				<div class="g" @click="jump_5">
					<image src="http://47.98.186.145/api/web/static/img/spanner.png" class="img"></image><text class="text">系统设置</text></div>
				<div class="g" @click="jump_6">
					<image src="http://47.98.186.145/api/web/static/img/star.png" class="img"></image><text class="text">其他</text></div>
			</div>
		</div>
		<div class="item-container" :style="contentStyle"><text>消息</text></div>
		<div class="item-container" :style="contentStyle"><text>报表</text></div>
		<div class="item-container" :style="contentStyle">
			
			<wxc-minibar background-color="black">
				<image src="http://47.98.186.145/api/web/static/img/return.png" class="img_a" slot="left"></image>
				<text class="text_a" slot="middle">个人信息</text>
			</wxc-minibar>

			<div class="gird_column_a">
				<div class="gird_row_a">
					<text class="text2_a">头像</text>
					<div class="item_right_a">
						<image src="http://47.98.186.145/api/web/static/img/Tony.png" class="img_a"></image>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">姓名</text>
					<div class="item_right_a">
						<text class="text4_a">托尼</text>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">电话</text>
					<div class="item_right_a">
						<text class="text4_a">123456700</text>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">工号</text>
					<div class="item_right_a item_gap_a">
						<text class="text4_a">100001</text>
					</div>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">二维码名片</text>
					<div class="item_right_a  ">
						<image src="http://47.98.186.145/api/web/static/img/scan.png" class="img_a"></image>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">性别</text>
					<div class="item_right_a  ">
						<text class="text4_a">男</text>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">生日</text>
					<div class="item_right_a  ">
						<text class="text4_a">1995-07-29</text>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
				<div class="gird_row_a">
					<text class="text2_a">地区</text>
					<div class="item_right_a  ">
						<text class="text4_a">上海 长宁</text>
					</div>
					<image src="http://47.98.186.145/api/web/static/img/next.png" class="img2_a" slot="right"></image>
				</div>
				<div class="h_a"></div>
			</div>
		</div>
	</wxc-tab-bar>

</template>

<style scoped>
	.row {
		flex-direction: row;
		text-align: center;
		background-color: #6184aa;
		width: 750px;
	}
	
	.t1 {
		margin-left: 30px;
	}
	
	.t3 {
		margin-right: 30px;
	}
	
	.t1,.t3 {
		padding-top: 10px;
		padding-bottom: 10px;
		color: white;
		font-size: 30px;
		flex: 2;
	}
	
	.item_right {
		align-items: flex-end;
	}
	
	.gird_row {
		flex-direction: row;
		text-align: center;
		background-color: #e3e3e3;
		width: 750px;
	}
	
	.g {
		align-items: center;
		text-align: center;
		background-color: #f8f8f8;
		padding: 110px;
		flex: 2;
		margin: 1;
	}
	
	.text {
		color: #707070;
		font-size: 30px;
		margin-top: 20px;
	}
	
	.img {
		width: 75px;
		height: 75px;
	}
	
	
	
	.item-container {
		width: 750px;
		align-items: center;
		justify-content: bottom;
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

	.img1 {
		width: 45px;
		height: 45px;
	}
	
	.title {
		flex: 2;
		margin-right: 30px;
		text-align: center;
		font-size: 40px;
		color: white;
	}


	.h_a {
		background-color: #dbdbdb;
		width: 750px;
		height: 1px;
		margin-left: 20px
	}
	
	.gird_row_a {
		align-items: center;
		flex-direction: row;
		width: 750px;
		height: 120px;
		align: center;
		margin: 1px;
	}
	
	.gird_column_a {
		flex-direction: column;
		width: 750px;
	}
	
	.text_a {
		font-size: 40px;
		color: white;
	}
	
	.text2_a {
		color: #2c2c2c;
		font-size: 30px;
		margin-left: 15px;
	}
	
	.text4_a {
		color: #707070;
		font-size: 30px;
	}
	
	.item_right_a {
		flex: 3;
		align-items: flex-end;
	}
	
	.item_gap_a {
		margin-right: 70px;
	}
	
	.img_a {
		width: 45px;
		height: 45px;
	}
	
	.img2_a {
		width: 60px;
		height: 60px;
		margin-right: 25px;
	}
	
	.item-container_a {
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
	var navigator = weex.requireModule('navigator');

	import { WxcMinibar, WxcTabBar, Utils } from 'weex-ui';
	import Config from './config';
	const pref = weex.requireModule("pref");
	const modal = weex.requireModule('modal');

	export default {
		components: { WxcMinibar, WxcTabBar },
		data: () => ({
			sales_staff_name: '未登陆',
			tabTitles: Config.tabTitles,
			tabStyles: Config.tabStyles
		}),
		created() {
			var that = this;
			const tabPageHeight = Utils.env.getPageHeight();
			const { tabStyles } = this;
			this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
			var user =  pref.get('user');
		    if(user.length != 0){
		    	that.sales_staff_name = user.sales_staff_name;
		    }
		},
		methods: {
			jump_1(event) {
				var nav = weex.requireModule('navigator') ;
				nav.push('./choose.js')
			}
			,
			jump_2(event) {
				var nav = weex.requireModule('navigator') ;
				nav.push('./choose.js')
			}
			,
			jump_3(event) {
				var user=pref.get('user');
				modal.toast({
					message: user,
					duration: 3
				})
				var nav = weex.requireModule('navigator') ;
				nav.push('./order/service_center.js')
			}
			,
			jump_4(event) {
				var nav = weex.requireModule('navigator') ;
				nav.push('./inventory.js')
			}
			,
			jump_5(event) {
				var nav = weex.requireModule('navigator') ;
				nav.push('./system_settings.js')
			}
			,
			jump_6(event) {
				var nav = weex.requireModule('navigator') ;
				nav.push('./system_settings.js')
			}
		}
	};
</script>