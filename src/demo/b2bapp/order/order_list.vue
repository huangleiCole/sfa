<template>
	<div class="item-container">
		<div class="c"></div>
		<div class="bar">
			<div class="d1">
				<image src="http://193.112.19.135/static/img/upper.png" class="img"></image>
			</div>
			<div class="d3">
				<text class="title">订单列表</text>
			</div>
			<div class="d2">
				<image src="http://193.112.19.135/static/img/home.png" class="img1"></image>
			</div>
		</div>
		<scroller>

			<ul>
				<li v-for="value in list2.list">
					<div class="d7">

						<div class="d12">
							<text class="text14">{{value.state_name}}</text>
						</div>
						<div class="d5">

							<div class="item_row1">
								<div class="text1">
									<text class="text3">店铺名称：</text>
									<text class="text3">会员名称：</text>
									<text class="text3">订单号：</text>
									<text class="text3">应付金额：</text>
									<text class="text3">支付方式：</text>
									<text class="text3">订单时间：</text>
								</div>
								<div class="text2">
									<text class="text3">{{value.shop_name}}</text>
									<text class="text3">{{value.member_name}}</text>
									<text class="text3">{{value.order_id}}</text>
									<div class="item_row2">
										<text class="text10">￥{{value.pay_amount}}</text>
										<text class="text11" v-if="value.foregift!='0.00' && value.foregift!=''">[押￥{{value.foregift}}]</text>
									</div>

									<text class="text3">{{value.payment_name}}</text>
									<text class="text3">{{value.created}}</text>
								</div>
								<div class="text4">
									<div class="item_row2">
										<text class="text9">查看</text>
										<image src="http://193.112.19.135/static/img/next.png" class="img"></image>
									</div>

								</div>
							</div>
							<div class="d8">
								<div v-for="(value_a,key_a,index_a) in value.items">
									<div style="flex-direction: row;">
										<!--<div v-for="(value,key,index) in value_a">-->
											<div class="d14">
												<image v-if="value_a.img_url==''" src="http://193.112.19.135/static/img/nopicture.gif" class="img2"></image>
												<image v-else :src="value_a.img_url" class="img2"></image>
												<!--<div class="d13" v-if="value.activity!=''">
													<text class="text19">{{value.activity}}</text>
												</div>-->
												<div class="d15">
													<text class="text19">{{value_a.nums}}</text>
												</div>

											</div>
										<!--</div>-->
									</div>
								</div>
							</div>
						</div>

					</div>
				</li>
			</ul>

			<div class="d9">
				<div class="input2" @click="previousPage">
					<text class="text18">上一页</text>
				</div>

				<text class="text13">{{list2.page_index}}/{{list2.page_count}}</text>
				<image src="http://193.112.19.135/static/img/Inverted-triangle.png" class="img3"></image>

				<div class="input2" @click="nextPage">
					<text class="text18">下一页</text>
				</div>
			</div>

			<div class="item_row3">
				<div class="text5">
					<text class="text16">您好，{{sales_staff_name}}! </text>
				</div>
				<div class="d"></div>
				<div class="text6">
					<text class="text17">退出</text>
				</div>
				<div class="d10">
					<div class="d11">
						<image src="http://193.112.19.135/static/img/up.png" class="img3"></image>
						<text class="text7">回到顶部</text>
					</div>
				</div>

			</div>
		</scroller>

	</div>
</template>

<style .scoped>
	.c {
		width: 750px;
		height: 40px;
		background-color: #d0243c;
		/*opacity: 0.5;*/
	}
	
	.input2 {
		border-width: 1px;
		border-style: solid;
		border-color: #dddddd;
		justify-content: center;
		padding-left: 20px;
		padding-right: 20px;
		height: 50px;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.bar {
		align-items: center;
		flex-direction: row;
		height: 100px;
		background-color: #d0243c;
		width: 750px;
	}
	
	.item_row1 {
		padding-top: 20px;
		padding-bottom: 20px;
		flex-direction: row;
		width: 730px;
	}
	
	.item_row2 {
		align-items: center;
		flex-direction: row;
		height: 50px;
		line-height: 50px;
	}
	
	.item_row3 {
		align-items: center;
		background-color: #f3f3f3;
		flex-direction: row;
		width: 750px;
		height: 180px;
	}
	
	.item {
		width: 750px;
		align-items: flex-start;
	}
	
	.item-container {
		width: 750px;
		align-items: center;
		background-color: #ffffff;
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
	
	.d5 {
		border-width: 2px;
		border-color: #c4c4c4;
		border-style: solid;
		flex-direction: column;
		background-color: #f5f5f5;
	}
	
	.d7 {
		border-top-width: 2px;
		border-bottom-width: 2px;
		border-style: dotted;
		border-color: gray;
		padding-top: 20px;
		padding-bottom: 20px;
		margin-top: 20px;
		margin-left: 10px;
		width: 730px;
	}
	
	.d8 {
		flex-direction: column;
		padding-left: 30px;
		/*flex-direction: row;*/
		padding-top: 20px;
		width: 726px;
		background-color: #ffffff;
		border-top-width: 2px;
		border-style: solid;
		border-color: #c4c4c4;
	}
	
	.d9 {
		align-items: center;
		justify-content: center;
		margin-top: 30px;
		margin-bottom: 30px;
		background-color: #ffffff;
		width: 750px;
		height: 100px;
		flex-direction: row;
	}
	
	.d10 {
		flex: 1;
		align-items: flex-end;
		margin-right: 40px;
	}
	
	.d11 {
		align-items: center;
	}
	
	.d12 {
		text-align: center;
		background-color: #d0243c;
		color: #ffffff;
		width: 100px;
		height: 40px;
	}
	
	.d13 {
		text-align: center;
		font-size: 25px;
		color: white;
		width: 60px;
		height: 30px;
		background-color: #d0243c;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	
	.d14 {
		position: relative;
		border-width: 1px;
		border-style: solid;
		border-color: #c4c4c4;
		width: 165px;
		height: 165px;
		margin-bottom: 30px;
	}
	
	.d15 {
		text-align: center;
		color: white;
		width: 30px;
		height: 30px;
		background-color: #d0243c;
		position: absolute;
		right: 0px;
		top: 0px;
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
		width: 165px;
		height: 165px;
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
	
	.text1 {
		font-size: 20px;
		align-items: flex-end;
		width: 150px;
	}
	
	.text2 {
		font-size: 20px;
		align-items: flex-start;
		width: 300px;
	}
	
	.text3 {
		align-items: center;
		font-size: 25px;
		height: 50px;
		line-height: 50px;
	}
	
	.text4 {
		font-size: 20px;
		align-items: flex-end;
		width: 280px;
	}
	
	.text5 {
		margin-left: 50px;
		margin-right: 10px;
		font-size: 30px;
		color: gray;
		justify-content: center;
	}
	
	.text6 {
		margin-left: 10px;
		margin-right: 10px;
		font-size: 30px;
		color: blue;
		justify-content: center;
	}
	
	.text7 {
		font-size: 35px;
		color: #707070;
		justify-content: center;
	}
	
	.text9 {
		align-items: center;
		font-size: 25px;
		line-height: 40px;
	}
	
	.text10 {
		color: #d0243c;
		height: 50px;
		line-height: 50px;
	}
	
	.text11 {
		font-size: 30px;
		color: red;
		white-space: unset;
		line-height: 50px;
	}
	
	.text13 {
		font-size: 25px;
	}
	
	.text14 {
		text-align: center;
		color: #ffffff;
		font-size: 30px;
		justify-content: center;
	}
	
	.text16 {
		font-size: 30px;
		color: #2C2C2C;
		justify-content: center;
	}
	
	.text17 {
		color: #5b8dfd;
		font-size: 30px;
		justify-content: center;
	}
	
	.text18 {
		text-align: center;
		font-size: 30px;
		color: #707070;
		justify-content: center;
	}
	
	.text19 {
		text-align: center;
		font-size: 25px;
		color: #ffffff;
		justify-content: center;
	}
</style>

<script>
	const modal = weex.requireModule('modal');
	const pref = weex.requireModule("pref");
	import Http from '../http';

	export default {
		data: () => ({
			sales_staff_name: '',
			member_id: '',
			list2: '',
			list: {
				"l1": {
					"status": "待发货",
					"store_name": "万豪国际",
					"user_name": "wh001",
					"order_no": "179523795008001",
					"pay": "2842.00",
					"deposit": "0.02",
					"payment_method": "信用支付",
					"order_time": "2018-03-05 16:26:36"
				},
				"l2": {
					"status": "已发货",
					"store_name": "万豪国际",
					"user_name": "wh001",
					"order_no": "179523795008001",
					"pay": "772.00",
					"deposit": "",
					"payment_method": "信用支付",
					"order_time": "2018-03-05 16:56:22"
				},
				"l3": {
					"status": "已发货",
					"store_name": "万豪国际",
					"user_name": "wh001",
					"order_no": "179523795008001",
					"pay": "772.00",
					"deposit": "",
					"payment_method": "信用支付",
					"order_time": "2018-03-05 16:56:22"
				},
				"l4": {
					"status": "已发货",
					"store_name": "万豪国际",
					"user_name": "wh001",
					"order_no": "179523795008001",
					"pay": "772.00",
					"deposit": "",
					"payment_method": "信用支付",
					"order_time": "2018-03-05 16:56:22"
				}

			}
		}),
		created() {
			var that = this;
			var user = pref.get('user');
			if(user.length != 0) {
				that.sales_staff_name = user.sales_staff_name;
			}
			var navigator = weex.requireModule('navigator');
			var param = navigator.param();
			that.member_id = param.member_id;

			var dataparam = [{ 'name': "method", 'value': "sfa.order.select" },
				{ 'name': "app_key", 'value': "b2bapp" },
				{ 'name': "format", 'value': "json" },
				{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
				{ 'name': "v", 'value': '2.0' },
				{ 'name': "access_token", 'value': user.access_token },
				{ 'name': "member_id", 'value': that.member_id },
				{ 'name': "start_time", 'value': '' },
				{ 'name': "end_time", 'value': '' },
				{ 'name': "page_index", 'value': '' },
				{ 'name': "page_size", 'value': '' }
			];
			Http.post(dataparam, function(res) {
				that.list2 = res.data;

			});

		},
		methods: {
			create_order(event) {
				console.log('create_order:', event)
				modal.toast({
					message: '跳转到创建订单页(create_order.vue)',
					duration: 3
				})
				var nav = weex.requireModule('navigator');
				nav.push('./create_order.js')
			},
			nextPage() {
				var user = pref.get('user');
				var that = this;
				if(that.list2.page_index != that.list2.page_count) {
					that.list2.page_index++;
				} else {
					modal.toast({
						message: '已经到尾了!',
						duration: 1
					})
				}

				var dataparam = [{ 'name': "method", 'value': "sfa.order.select" },
					{ 'name': "app_key", 'value': "b2bapp" },
					{ 'name': "format", 'value': "json" },
					{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
					{ 'name': "v", 'value': '2.0' },
					{ 'name': "access_token", 'value': user.access_token },
					{ 'name': "member_id", 'value': that.member_id },
					{ 'name': "start_time", 'value': '' },
					{ 'name': "end_time", 'value': '' },
					{ 'name': "page_index", 'value': that.list2.page_index },
					{ 'name': "page_size", 'value': '' }
				];
				Http.post(dataparam, function(res) {
					that.list2 = res.data;
				});
			},
			previousPage() {
				var user = pref.get('user');
				var that = this;

				if(that.list2.page_index != 1) {
					that.list2.page_index--;
				} else {
					modal.toast({
						message: '已经到头了!',
						duration: 1
					})
				}

				var dataparam = [{ 'name': "method", 'value': "sfa.order.select" },
					{ 'name': "app_key", 'value': "b2bapp" },
					{ 'name': "format", 'value': "json" },
					{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
					{ 'name': "v", 'value': '2.0' },
					{ 'name': "access_token", 'value': user.access_token },
					{ 'name': "member_id", 'value': that.member_id },
					{ 'name': "start_time", 'value': '' },
					{ 'name': "end_time", 'value': '' },
					{ 'name': "page_index", 'value': that.list2.page_index },
					{ 'name': "page_size", 'value': '' }
				];
				Http.post(dataparam, function(res) {
					that.list2 = res.data;
				});
			},
		}
	}
</script>