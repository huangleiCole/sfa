<template>
	<div class="item-container">
		<div class="c"></div>
		<div class="bar">
			<div class="d1">
				<image src="http://193.112.19.135/static/img/upper.png" class="img"></image>
			</div>
			<div class="d3"><text class="title">会员管理</text></div>
			<div class="d2">
				<image src="http://193.112.19.135/static/img/home.png" class="img1"></image>
			</div>
		</div>
		<div class="item_row">
			<div class="a">
				<input class="input" type="text" placeholder="  请输入会员名" @input="onchange_memberName($event.value)" />
			</div>

			<div class="d4"  @click='check_memberName'>
				<text class="text8">查询</text>
			</div>

			<div class="d4">
				<text class="text8">添加会员</text>
			</div>
		</div>
		<scroller>
			<ul>
				<li v-for="value in list2.list">
					<div class="d7">

						<div class="d5">
							<div class="item_row1">
								<div class="text1">
									<text class="text3">店铺：</text>
									<text class="text3">登录名：</text>
									<text class="text3">会员名：</text>
									<text class="text3">地区：</text>
									<text class="text3">地址：</text>
								</div>
								<div class="text2">
									<text class="text3">{{value.shop_name}}</text>
									<text class="text3">{{value.name}}</text>
									<text class="text3">{{value.member_name}}</text>
									<text class="text3">{{value.area}}</text>
									<text class="text3">{{value.addr}}</text>
								</div>
							</div>
							<div class="item_row2">
								<div class="d8" @click="order_list(value.member_id)">
									<text class="text8">订单列表</text>
								</div>
								<div class="d8" @click="create_order">
									<text class="text8">创建订单</text>
								</div>
							</div>
						</div>

					</div>
				</li>
			</ul>

			<div class="d9">
				<div class="input2">
					<text class="text9" @click="previousPage">上一页</text>
				</div>

				<text class="text4">{{list2.page_index}}/{{list2.page_count}}页</text>
				<image src="http://193.112.19.135/static/img/Inverted-triangle.png" class="img2"></image>

				<div class="input2">
					<text class="text9" @click="nextPage">下一页</text>
				</div>
			</div>
			<div class="item_row3">
				<div class="text5">
					<text class="text10">您好，{{sales_staff_name}}! </text>

				</div>
				<div class="d"></div>
				<div class="text6">
					<text class="text11">退出</text>
				</div>
				<div class="d10">
					<div class="d11">
						<image src="http://193.112.19.135/static/img/up.png" class="img2"></image>
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
	
	.a {
		width: 303px;
		height: 53px;
		border-style: solid;
		border-color: #cccccc;
		border-width: 1px;
		border-radius: 5px;
	}
	
	.input {
		padding-left: 10px;
		width: 300px;
		height: 50px;
		border-radius: 5px;
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
	
	.item_row {
		justify-content: center;
		padding-top: 30px;
		padding-bottom: 30px;
		flex-direction: row;
		width: 750px;
		height: 100px;
	}
	
	.item_row1 {
		padding-top: 20px;
		flex-direction: row;
		width: 750px;
		height: 300px;
	}
	
	.item_row2 {
		justify-content: center;
		padding-bottom: 20px;
		flex-direction: row;
		width: 730px;
		height: 80px;
	}
	
	.item_row3 {
		align-items: center;
		background-color: #f3f3f3;
		flex-direction: row;
		width: 750px;
		height: 180px;
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
	
	.d4 {
		color: #947b77;
		border-radius: 12px;
		margin-left: 15px;
		margin-right: 15px;
		padding-left: 20px;
		padding-right: 20px;
		justify-content: center;
		height: 50px;
		background-color: #edf1f2;
		font-size: 25px;
	}
	
	.d5 {
		border-top-width: 2px;
		border-bottom-width: 2px;
		border-style: dotted;
		border-color: #c4c4c4;
		flex-direction: column;
		background-color: #fbfbfb;
	}
	
	.d6 {
		height: 1px;
		width: 730px;
		border-color: #D3D3D3;
		background-color: #d3d3d3;
		border-style: dashed;
	}
	
	.d7 {
		margin-left: 10px;
		margin-top: 20px;
		width: 730px;
	}
	
	.d8 {
		color: #947b77;
		border-radius: 12px;
		margin-left: 5px;
		margin-right: 5px;
		padding-left: 20px;
		padding-right: 20px;
		justify-content: center;
		height: 50px;
		background-color: #edf1f2;
		font-size: 25px;
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
	
	.img {
		width: 30px;
		height: 30px;
	}
	
	.img1 {
		width: 60px;
		height: 60px;
	}
	
	.img2 {
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
		width: 200px;
	}
	
	.text2 {
		font-size: 20px;
		align-items: flex-start;
		width: 550px;
	}
	
	.text3 {
		font-size: 25px;
		height: 50px;
	}
	
	.text4 {
		font-size: 25px;
	}
	
	.text5 {
		margin-left: 50px;
		margin-right: 10px;
		justify-content: center;
	}
	
	.text6 {
		margin-left: 10px;
		margin-right: 10px;
		justify-content: center;
	}
	
	.text7 {
		font-size: 35px;
		color: #707070;
		justify-content: center;
	}
	
	.text8 {
		font-size: 30px;
		color: #707070;
		justify-content: center;
	}
	
	.text9 {
		font-size: 30px;
		color: #707070;
		justify-content: center;
	}
	
	.text10 {
		font-size: 30px;
		color: #2C2C2C;
		justify-content: center;
	}
	
	.text11 {
		color: #5b8dfd;
		font-size: 30px;
		justify-content: center;
	}
</style>

<script>
	const modal = weex.requireModule('modal');
	const pref = weex.requireModule("pref");
	import Http from '../http';

	export default {
		data: () => ({
			sales_staff_name: '请登录',
			list2: ''

		}),
		created() {
			var that = this;
			var user = pref.get('user');
			if(user.length != 0) {
				that.sales_staff_name = user.sales_staff_name;
			}

			var dataparam = [{ 'name': "method", 'value': "sfa.member.select" },
				{ 'name': "app_key", 'value': "b2bapp" },
				{ 'name': "format", 'value': "json" },
				{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
				{ 'name': "v", 'value': '2.0' },
				{ 'name': "access_token", 'value': user.access_token },
				{ 'name': "name", 'value': '' },
				{ 'name': "member_name", 'value': '' },
				{ 'name': "member_code", 'value': '' },
				{ 'name': "mobile", 'value': '' },
				{ 'name': "addr", 'value': '' },
				{ 'name': "area", 'value': '' },
				{ 'name': "page_index", 'value': '' },
				{ 'name': "page_size", 'value': '' }
			];
			Http.post(dataparam, function(res) {
				that.list2 = res.data;
				that.list2.member_name='';

			});
		},

		methods: {

			order_list(member_id) {
				console.log('order_list:', member_id)
				modal.toast({
					message: '跳转到订单列表页(order_list.vue)',
					duration: 3
				})
				var nav = weex.requireModule('navigator');
				var param={};
				param.member_id=member_id;
				nav.pushParam('./order_list.js',param)
			},
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

				var dataparam = [{ 'name': "method", 'value': "sfa.member.select" },
					{ 'name': "app_key", 'value': "b2bapp" },
					{ 'name': "format", 'value': "json" },
					{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
					{ 'name': "v", 'value': '2.0' },
					{ 'name': "access_token", 'value': user.access_token },
					{ 'name': "name", 'value': '' },
					{ 'name': "member_name", 'value': '' },
					{ 'name': "member_code", 'value': '' },
					{ 'name': "mobile", 'value': '' },
					{ 'name': "addr", 'value': '' },
					{ 'name': "area", 'value': '' },
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
				var dataparam = [{ 'name': "method", 'value': "sfa.member.select" },
					{ 'name': "app_key", 'value': "b2bapp" },
					{ 'name': "format", 'value': "json" },
					{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
					{ 'name': "v", 'value': '2.0' },
					{ 'name': "access_token", 'value': user.access_token },
					{ 'name': "name", 'value': '' },
					{ 'name': "member_name", 'value': '' },
					{ 'name': "member_code", 'value': '' },
					{ 'name': "mobile", 'value': '' },
					{ 'name': "addr", 'value': '' },
					{ 'name': "area", 'value': '' },
					{ 'name': "page_index", 'value': that.list2.page_index },
					{ 'name': "page_size", 'value': '' }
				];
				Http.post(dataparam, function(res) {
					that.list2 = res.data;
				});
			},
			onchange_memberName(member_name) {
				this.list2.member_name = member_name;
			},
			check_memberName() {
				var user = pref.get('user');
				var that = this;
				var dataparam = [{ 'name': "method", 'value': "sfa.member.select" },
					{ 'name': "app_key", 'value': "b2bapp" },
					{ 'name': "format", 'value': "json" },
					{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
					{ 'name': "v", 'value': '2.0' },
					{ 'name': "access_token", 'value': user.access_token },
					{ 'name': "name", 'value': '' },
					{ 'name': "member_name", 'value': that.list2.member_name },
					{ 'name': "member_code", 'value': '' },
					{ 'name': "mobile", 'value': '' },
					{ 'name': "addr", 'value': '' },
					{ 'name': "area", 'value': '' },
					{ 'name': "page_index", 'value': that.list2.page_index },
					{ 'name': "page_size", 'value': '' }
				];
				Http.post(dataparam, function(res) {
					var mes = res.data.list;
					if(mes == '') {
						modal.toast({ message: '无数据', duration: 3 });
					}else{
						that.list2=res.data;
					}
						
				});
			}
		}
	};
</script>