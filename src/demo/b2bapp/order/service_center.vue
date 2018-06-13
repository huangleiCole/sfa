<template>
	<div class="item-container">
		<div class="c"></div>
		<div class="bar">
			<div class="d1">
				<image src="http://193.112.19.135/static/img/upper.png" class="img"></image>
			</div>
			<div class="d3"><text class="title">销售代表服务中心</text></div>
			<div class="d2">
				<image src="http://193.112.19.135/static/img/home.png" class="img1"></image>
			</div>
		</div>
		<div class="item_row">
			<image class="img2" src="http://193.112.19.135/static/img/logo.jpg"></image>
			<div class="item_column">
				<div>
					<text class="text">账号: {{account_name}}</text>
					<text class="text">姓名: {{sales_staff_name}}</text>
					<text class="text">手机: {{mobile}}</text>
				</div>
			</div>
		</div>
		<div class="d4">
			<div class="item_row1">
				<div class="item_left">
					<div class="btn" @click="vip_manager"><text class="text1">会员管理</text></div>
				</div>
				<div class="item_right">
					<div class="btn"><text class="text1">会员申请订单</text></div>
				</div>
			</div>
			<div class="item_row1">
				<div class="item_left">
					<div class="btn"><text class="text1">会员信息更新</text></div>
				</div>
				<div class="item_right">
					<div class="btn" @click="list"><text class="text1">订单列表</text></div>
				</div>
			</div>
			<div class="item_row1">
				<div class="item_left">
					<div class="btn"><text class="text1">添加订单</text></div>
				</div>
			</div>
			<div class="h"></div>
			<div class="item_row2">
				<div class="text2">
					<text class="text5">您好，{{sales_staff_name}}! </text>

				</div>
				<div class="d"></div>
				<div class="text3">
					<text class="text6">退出</text>

				</div>
				<div class="d6">
					<div class="d4">
						<image src="http://193.112.19.135/static/img/up.png" class="img3"></image>
						<text class="text4">回到顶部</text>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<style .scoped>
	.text {
		color: #707070;
		font-size: 30px;
	}
	
	.text1 {
		text-align: center;
		color: #ffffff;
		font-size: 35px;
	}
	
	.text2 {
		margin-left: 50px;
		margin-right: 10px;
		justify-content: center;
	}
	
	.text3 {
		margin-left: 10px;
		margin-right: 10px;
		justify-content: center;
	}
	
	.text4 {
		font-size: 35px;
		color: #707070;
		justify-content: center;
	}
	
	.c {
		width: 750px;
		height: 40px;
		background-color: #8B7D6B;
		opacity: 0.5;
	}
	
	.text5 {
		font-size: 30px;
		color: #2C2C2C;
		justify-content: center;
	}
	
	.text6 {
		color: #5b8dfd;
		font-size: 30px;
		justify-content: center;
	}
	
	.bar {
		align-items: center;
		flex-direction: row;
		height: 100px;
		background-color: #d0243c;
		width: 750px;
	}
	
	.btn {
		justify-content: center;
		background-color: #d0243c;
		width: 345px;
		height: 100px;
		border-radius: 12px;
	}
	
	.item-container {
		width: 750px;
		align-items: center;
		background-color: #f7f7f7;
	}
	
	.item_left {
		margin-left: 20px;
		flex: 1;
		align-items: flex-start;
	}
	
	.item_right {
		margin-right: 20px;
		flex: 1;
		align-items: flex-end;
	}
	
	.d {
		justify-content: center;
		background-color: #bfbfbf;
		height: 30px;
		width: 2px;
	}
	
	.d1 {
		margin-left: 30px;
	}
	
	.d2 {
		margin-right: 20px;
	}
	
	.d3 {
		flex: 1;
		align-items: center;
	}
	
	.d4 {
		align-items: center;
	}
	
	.d6 {
		flex: 1;
		align-items: flex-end;
		margin-right: 40px;
	}
	
	.img {
		width: 30px;
		height: 30px;
	}
	
	.img1 {
		width: 60px;
		height: 60px;
	}
	
	.img2 {
		width: 300px;
		height: 300px;
		padding-left: 30px;
		padding-right: 30px;
	}
	
	.img3 {
		width: 45px;
		height: 45px;
	}
	
	.title {
		flex: 1;
		text-align: center;
		font-size: 40px;
		color: white;
	}
	
	.item_row {
		margin-top: 30px;
		margin-bottom: 20px;
		flex-direction: row;
		width: 750px;
		height: 300px;
	}
	
	.item_row1 {
		margin-top: 10px;
		flex-direction: row;
		width: 750px;
		height: 105px;
	}
	
	.item_row2 {
		align-items: center;
		background-color: #f3f3f3;
		flex-direction: row;
		width: 750px;
		height: 180px;
	}
	
	.item_column {
		width: 750px;
		flex-direction: column;
	}
	
	.h {
		margin-top: 30px;
		background-color: #dcdcdc;
		width: 750px;
		height: 2px;
	}
</style>

<script>
	const modal = weex.requireModule('modal');
	const pref = weex.requireModule("pref");
	import Http from '../http';
	
	export default {
		data: () => ({
			sales_staff_name: '未登录',
			account_name: ' ',
			mobile: ' '
		}),
		created() {
			var that = this;
			var user = pref.get('user');
			if(user.length != 0) {
				that.sales_staff_name = user.sales_staff_name;
				that.account_name = user.account_name;
				that.mobile = user.mobile;
			}
			
			
		},
		methods: {
			vip_manager(event) {
				console.log('vip_manager:', event)
				var user = pref.get('user');
				var nav = weex.requireModule('navigator');
				nav.push('./vip_manager.js')
			},
			list(event) {
				console.log('list:', event)
				modal.toast({
					message: '跳转到订单列表页(orders_list.vue)',
					duration: 3
				})
				var nav = weex.requireModule('navigator');
				nav.push('./orders_list.js')
			}

		}

	};
</script>