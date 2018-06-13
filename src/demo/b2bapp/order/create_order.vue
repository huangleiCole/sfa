<template>
	<div class="item-container">
		<div class="c"></div>
		<div class="item_column">

			<div class="d7">
				<div class="item_row1">
					<div class="d5">
						<text class="text2">商品列表</text>
					</div>
					<div class="d5">
						<text class="text2" @click="shopping_cart">购物车</text>
					</div>
					<div class="d5">
						<text class="text2">去下单</text>
					</div>
					<div class="d6">
						<text class="text2_2">提交订单</text>
					</div>
				</div>
			</div>

			<div class="item_row2">
				<div class="d8">
					<text class="text3" @click='ds'>商品</text>
				</div>
				<div class="d8">
					<text class="text3">礼品</text>
				</div>
				<!--<div class="d9">
					<wxc-checkbox  :checked="true"></wxc-checkbox>
					<text class="text1">有图</text>
				</div>-->
			</div>
			<div class="d4"></div>
			<div class="item_row3">

				<div class="d10">
					<scroller>
						<div class="d12" id="dd12">
							<wxc-radio :list="list" @wxcRadioListChecked="wxcRadioListChecked"></wxc-radio>
						</div>
					</scroller>
				</div>

				<div class="d13">
					<div class="d14">
						<input type="text" class="input2" placeholder="  请输入" />
						<div class="d15"><text class="text2">搜索</text></div>
					</div>
					<scroller>
						<div class="d16">
							<text class="text8">{{checkedInfo.brand_name}}</text>
						</div>

						<div class="d18">
							<ul>
								<li v-for="value in goods">
									<div class="d19">
										<div class="item_row5">
											<image class="img" :src="value.img"></image>
											<div>
												<text class="text9">{{value.title}}</text>
												<div class="item_row4">
													<text class="text10">￥{{value.newprice}}/{{value.unit}}</text>
													<text class="text11">￥{{value.oldprice}}/{{value.unit}}</text>
												</div>
												<div class="item_row4">
													<div class="d21"><text class="text13">省 ￥{{(value.oldprice-value.newprice).toFixed(2)}}</text></div>
													<text class="text12">积分 {{value.integral}}</text>
												</div>
											</div>
										</div>
										<ul>
											<li v-for="value in goods.se.discount">
												<div class="item_row6">
													<text class="text14">订单促销</text>
													<text class="text15">{{value}}</text>
												</div>
											</li>
										</ul>

										<div class="d22">
											<text v-if="value.count=='0'" class="text16">
												已售完
											</text>
											<div class="d23" v-else><text class="text17">+</text></div>

										</div>
										<div class="h"></div>
									</div>

								</li>
							</ul>

						</div>

					</scroller>
				</div>

			</div>

		</div>
	</div>
</template>

<style .scoped>
	.c {
		width: 750px;
		height: 40px;
		background-color: #8B7D6B;
		opacity: 0.5;
	}
	
	.h {
		height: 1px;
		width: 550px;
		background-color: #cdcdcd;
	}
	
	.item-container {
		width: 750px;
		align-items: center;
		background-color: #ffffff;
	}
	
	.item_column {
		align-items: center;
		margin-top: 30px;
		width: 750px;
		flex-direction: column;
	}
	/*.item_row {
		height: 70px;
		width: 730px;
		flex-direction: row;
	}*/
	
	.item_row1 {
		margin-left: 70px;
		margin-top: 20px;
		height: 50px;
		width: 730px;
		flex-direction: row;
	}
	
	.item_row2 {
		margin-top: 30px;
		height: 70px;
		width: 750px;
		flex-direction: row;
	}
	
	.item_row3 {
		height: 1090px;
		width: 750px;
		flex-direction: row;
	}
	
	.item_row4 {
		margin-top: 20px;
		margin-bottom: 20px;
		height: 50px;
		flex-direction: row;
		line-height: 50px;
	}
	
	.item_row5 {
		margin-top: 20px;
		margin-bottom: 20px;
		height: 200px;
		flex-direction: row;
	}
	
	.item_row6 {
		width: 580px;
		height: 50px;
		flex-direction: row;
	}
	
	.img {
		margin: 5px;
		width: 200px;
		height: 200px;
	}
	
	.img1 {
		width: 30px;
		height: 30px;
	}
	
	.input {
		width: 200px;
		border: 1px;
		border-color: gray;
		border-style: solid;
		border-radius: 3px;
		margin-right: 10px;
		margin-left: 10px;
		background-color: #dbdbdb;
	}
	
	.input1 {
		align-items: center;
		justify-content: center;
	}
	
	.input2 {
		border-radius: 5px;
		height: 50px;
		width: 300px;
		background-color: #ffffff;
	}
	/*.d1 {
		margin-left: 5px;
		margin-right: 5px;
		border-radius: 5px;
		color: #ffffff;
		text-align: center;
		justify-content: center;
		height: 70px;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #3ca8ff;
	}*/
	
	.d4 {
		height: 1px;
		width: 750px;
		background-color: #e5e5e5;
	}
	
	.d5 {
		background-color: #ff6839;
	}
	
	.d6 {
		background-color: #e6e6e6;
	}
	
	.d5,
	.d6 {
		margin-left: 10px;
		margin-right: 10px;
		padding-left: 20px;
		padding-right: 20px;
		height: 50px;
		text-align: center;
		justify-content: center;
		border-radius: 5px;
	}
	
	.d7 {
		width: 750px;
		flex: 1;
		align-items: center;
	}
	
	.d8 {
		justify-content: center;
		text-align: center;
		color: #2C2C2C;
		width: 170px;
		height: 70px;
		border-top-width: 2px;
		border-left-width: 2px;
		border-right-width: 2px;
		border-style: solid;
		border-color: #CCCCCC;
	}
	
	.d8_choose {
		border-top: 1px;
		border-left: 1px;
		border-right: 1px;
		border-style: solid;
		border-color: #BFBFBF;
	}
	
	.d9 {
		height: 70px;
		line-height: 70px;
		flex-direction: row;
		margin-left: 180px;
		align-items: center;
		justify-content: center;
	}
	
	.d10 {
		border: 1px;
		border-style: solid;
		border-color: #BFBFBF;
		flex-direction: column;
		width: 168px;
		align-items: center;
		text-align: center;
	}
	
	.d12 {
		width: 170px;
		background-color: #f8f8f8;
		align-items: center;
	}
	
	.d13 {
		width: 580px;
		flex-direction: column;
		align-items: center;
	}
	
	.d14 {
		width: 580px;
		height: 80px;
		background-color: #e5e5e5;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.d15 {
		margin-left: 15px;
		margin-right: 5px;
		border-radius: 5px;
		color: #ffffff;
		text-align: center;
		justify-content: center;
		height: 50px;
		padding-left: 20px;
		padding-right: 25px;
		background-color: #3ca8ff;
	}
	
	.d16 {
		margin-left: 45px;
		font-size: 30px;
		width: 580px;
		height: 80px;
		background-color: #f1f1f1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.d18 {
		flex-direction: column;
		align-items: center;
	}
	
	.d19 {
		padding: 30px;
		flex-direction: column;
		align-items: center;
	}
	
	.d21 {
		border-radius: 5px;
		padding-left: 5px;
		padding-right: 5px;
		height: 50px;
		background-color: #f74134;
		margin-right: 20px;
	}
	
	.d22 {
		width: 580px;
		height: 100px;
		flex: 1;
		align-items: flex-end;
		margin-right: 30px;
	}
	
	.d23 {
		border-radius: 25px;
		padding-left: 25px;
		padding-right: 25px;
		height: 50px;
		background-color: #f74134;
	}
	
	.text1 {
		font-size: 25px;
		margin-left: 10px;
	}
	
	.text2 {
		font-size: 30px;
		color: #ffffff;
		text-align: center;
	}
	
	.text2_2 {
		font-size: 30px;
		color: #cdcdcd;
		text-align: center;
	}
	
	.text3 {
		height: 70px;
		line-height: 70px;
		font-size: 30px;
		color: #2c2c2c;
		text-align: center;
	}
	/*.text4 {
		margin-bottom: 10px;
		font-size: 25px;
		color: #2c2c2c;
		text-align: center;
	}*/
	/*.text5 {
		margin-top: 10px;
		font-size: 30px;
		color: #ec3b79;
		text-align: center;
	}*/
	/*.text6 {
		margin-bottom: 10px;
		font-size: 25px;
		color: #ec3b79;
		text-align: center;
	}*/
	
	.text8 {
		font-size: 30px;
		color: #7b706e;
		text-align: center;
	}
	
	.text9 {
		font-size: 30px;
		color: #343434;
		text-align: left;
	}
	
	.text10 {
		font-size: 35px;
		color: #bb1032;
		text-align: left;
	}
	
	.text11 {
		height: 50px;
		line-height: 50px;
		font-size: 30px;
		color: #8a8a8a;
		text-align: left;
		text-decoration: line-through;
	}
	
	.text12 {
		height: 50px;
		line-height: 50px;
		font-size: 25px;
		color: #8a8a8a;
		text-align: left;
	}
	
	.text13 {
		height: 50px;
		line-height: 50px;
		font-size: 25px;
		color: #ffffff;
		text-align: center;
	}
	
	.text14 {
		margin-left: 30px;
		margin-right: 20px;
		text-align: left;
		color: #ff6839;
		height: 50px;
		line-height: 50px;
		font-size: 30px;
	}
	
	.text15 {
		color: #2c2c2c;
		height: 50px;
		line-height: 50px;
		font-size: 30px;
	}
	
	.text16 {
		color: #9d9d9d;
		font-size: 35px;
		font-weight: bolder;
	}
	
	.text17 {
		height: 50px;
		line-height: 50px;
		font-size: 35px;
		color: #ffffff;
		text-align: center;
	}
</style>

<script>
	const dom = weex.requireModule('dom');
	import { CHECKED, UNCHECKED, CHECKED_DISABLED, UNCHECKED_DISABLED } from '../../../../weex-ui-master/packages/wxc-checkbox/type';
	import Title from '../../../../weex-ui-master/example/_mods/title.vue';
	import Category from '../../../../weex-ui-master/example/_mods/category.vue';
	import WxcRadio from '../../../../weex-ui-master/packages/wxc-radio';
	import { setTitle, WxcCheckbox } from '../../../../weex-ui-master/example/_mods/set-nav';
	import Http from '../http';
	const globalEvent = weex.requireModule('globalEvent');
	const page = weex.requireModule("page");
	const nav = weex.requireModule('navigator');
	const pref = weex.requireModule("pref");

	const modal = weex.requireModule('modal');

	export default {
		components: { Title, Category, WxcRadio, WxcCheckbox },

		created() {
			setTitle('Checkbox');
			const { checked } = this;
			this.innerChecked = checked;

			var that = this;
			var navigator = weex.requireModule('navigator');
			var param = navigator.param();
			that.member_id = param.member_id;
			that.member_name = param.member_name;
			var modal = weex.requireModule("modal");

			var dataparam = [{ 'name': "method", 'value': "sfa.member.goods.list" },
				{ 'name': "app_key", 'value': "b2bapp" },
				{ 'name': "format", 'value': "json" },
				{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
				{ 'name': "v", 'value': '2.0' },
				{ 'name': "member_id", 'value': pref.get('user').member_id }
			];
			Http.post(dataparam, function(res) {
				that.list2 = res.data;
				for(var index in that.list2.goods_list) {
					var j = 0;
					for(var index1 in index) {
						j++;
						list3[j].brand_name = index1.brand_name;
						break;
					}
				}
			});

			for(var i = 0; i < this.list.length; i++) {
				var English = this.list[i].brand_name;
				var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(English);
				if(rt != null) {
					this.list[i].ch_name = rt[1];
					this.list[i].en_name = rt[2];
				}

			}

		},
		props: {
			hasTopBorder: {
				type: Boolean,
				default: false
			},
			hasBottomBorder: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				require: true
			},
			value: {
				type: [String, Number, Object],
				require: true
			},
			disabled: {
				type: Boolean,
				default: false
			},
			checked: {
				type: Boolean,
				default: false
			},
			config: {
				type: Object,
				default: () => ({})
			}
		},
		data: () => ({
			icon: [CHECKED, UNCHECKED, CHECKED_DISABLED, UNCHECKED_DISABLED],
			color: '#3D3D3D',
			innerChecked: false,
			goods: {
				"se": {
					"img": "http://193.112.19.135/static/img/beer.jpg",
					"title": "11°麦之初330ML易拉罐",
					"oldprice": "90.00",
					"newprice": "80.00",
					"integral": "4",
					"discount": {
						"d1": "订单满5万减1000元",
						"d2": "订单满3万减800元",
						"d3": "订单满2万减300元"
					},
					"count": "0",
					"unit": "箱"
				},
				"se1": {
					"img": "http://193.112.19.135/static/img/beer.jpg",
					"title": "11°麦之初330ML易拉罐",
					"oldprice": "90.00",
					"newprice": "80.00",
					"integral": "4",
					"discount": {
						"d1": "订单满5万减1000元",
						"d2": "订单满3万减800元",
						"d3": "订单满2万减300元"
					},
					"count": "10",
					"unit": "箱"
				},
				"se2": {
					"img": "http://193.112.19.135/static/img/beer.jpg",
					"title": "11°麦之初330ML易拉罐",
					"oldprice": "90.00",
					"newprice": "80.00",
					"integral": "4",
					"discount": {
						"d1": "订单满5万减1000元",
						"d2": "订单满3万减800元",
						"d3": "订单满2万减300元"
					},
					"count": "10",
					"unit": "箱"
				}

			},

			list: [{
					"brand_id": "15",
					"brand_name": "时代（Stella）",
					"brand_url": "https://sc.ab-inbev.cn/gallery-8.html",
					"brand_desc": "<font face=\"仿宋_GB2312\" color=\"#0000ff\">&nbsp;</font>",
					"brand_logo": "37bb15ed4dd0af462317c76eec2eb2f9",
					"ordernum": "700",
					"marketing_copy": "Stella Artois有着令人愉悦的苦涩味道和使之区别于其它欧式贮藏啤酒的令人耳目一新的回味。品尝Stella Artois时，它标志性的圣餐杯是必不可少的美器，只有圣杯才能展示其丰富的金黄色并释放出啤酒的香味。",
					"romance_copy": "Stella Artois的历史可溯源到1366年，Leuven的Den Hoom啤酒厂设立在比利时布鲁塞尔郊外。这款啤酒最早是为了欢庆圣诞节而酿造出来的，并因其不凡的清晰度而被命名为Stella（拉丁语中的星星）。",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:28:39",
					"modified": "2017-04-19 12:28:39",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "106",
							"product_code": "459781",
							"goods_name": "时代330ml*24瓶装+福佳白330ml*24瓶装+乐飞金330ml*24瓶装 三箱组合（促销）",
							"product_id": "691",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "15",
							"unit": "组",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "550.00",
							"mkt_price": "444.00",
							"mkt_price_unit": "组",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/98/9e/97/f2954d0307bc9ed066d69488dc59fa9658d25d51.jpg",
							"fix_point": "0",
							"store_forsale": 94,
							"real_price": "550.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "27"
						},
						{
							"goods_id": "11",
							"product_code": "45978",
							"goods_name": "Stella 时代啤酒330ml*24瓶",
							"product_id": "67",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "15",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "90.00",
							"store_prompt": "1",
							"price": "90.00",
							"mkt_price": "290.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/8e/44/b5/4a1c698cf8e15fc8c7d3cad205bdcf7fb9107e5a.png",
							"fix_point": "0",
							"store_forsale": "972",
							"real_price": "0.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "0"
						}
					],
					checked: true
				},
				{
					"brand_id": "16",
					"brand_name": "乐飞（Leffe）",
					"brand_url": "https://sc.ab-inbev.cn/gallery-11.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "5b272378f6c75367a1bebd73bd988650",
					"ordernum": "500",
					"marketing_copy": "Leffe Brune是一款比利时暗色果味麦酒，中等瓶身和丰富的甜味是它独有的特点。",
					"romance_copy": "Leffe啤酒厚重的酿造传统可以追溯到始建于1152年的Leffe圣母院，至今已有超过700年的历史。圣诺伯特的僧侣们在1240年就开始为社区和路过的旅行者酿造这种啤酒。直到修道院在法国大革命后被废除，Leffe啤酒一直在安静的比利时村落流传。最终，僧侣们同酿造师Albert Lootvoot达成协议，重新启动Leffe的生产。",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:29:14",
					"modified": "2017-04-19 12:29:14",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "8",
							"product_code": "52643",
							"goods_name": "Leffe Ruby 5度 330ML 1X24纸箱OW瓶装",
							"product_id": "70",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "16",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "271.20",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/71/a9/17/630dec0addab0c38150f50d91248051df06d352c.png",
							"fix_point": "0",
							"store_forsale": "82",
							"real_price": "271.20",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "13"
						},
						{
							"goods_id": "5",
							"product_code": "44947",
							"goods_name": "Leffe Blonde 乐飞金啤酒330ml*24瓶",
							"product_id": "73",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "16",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "271.20",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/3f/ae/51/e84c934d2645af9eb7b8fcf8790f2eb58b30cdc1.png",
							"fix_point": "0",
							"store_forsale": "94",
							"real_price": "271.20",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "13"
						}
					]
				},
				{
					"brand_id": "17",
					"brand_name": "科罗娜（Corona）",
					"brand_url": "https://sc.ab-inbev.cn/gallery-2.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "11aaf383539f6ec6bbe47088aed28721",
					"ordernum": "600",
					"marketing_copy": "Corona Extra在1981年进入美国，并成为美国历史上增长最快的进口啤酒。自1925年以来，Corona Extra一直在墨西哥酿造并灌装。Corona Extra是美国进口啤酒的销售冠军，在所有啤酒销量排行中也位列第五。",
					"romance_copy": "Corona传递了一种特有的欢乐、阳光、积极和无忧无虑的心境。不经意抑或努力留下印象，都成为Corona品牌文化中的鲜明个性。刚在美国销售的时候，它被定义为一个最初由Corona的消费者创造的休闲形象，而这一品牌形象至今仍然深入人心。",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:28:53",
					"modified": "2017-04-19 12:28:53",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "1",
							"product_code": "46694",
							"goods_name": "科罗娜330",
							"product_id": "77",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "17",
							"unit": "箱",
							"accounting_price": "120.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "120.00",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/ea/d7/a1/e3d652370dfa510ec884810fed7232956f8a0732.png",
							"fix_point": "0",
							"store_forsale": "0",
							"store_tips": "CORONA科罗娜啤酒330ml*24瓶库存不足，当前可用库存：0",
							"name": "科罗娜330",
							"gift_name": "科罗娜330",
							"real_price": "120.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "6"
						},
						{
							"goods_id": "2",
							"product_code": "49951",
							"goods_name": "科罗娜207",
							"product_id": "76",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "17",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "200.00",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/bf/83/4d/382056b6bfff64f8a904141d4b9cbd2fe27160de.png",
							"fix_point": "0",
							"store_forsale": "70",
							"name": "科罗娜207",
							"gift_name": "科罗娜207",
							"real_price": "200.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "10"
						},
						{
							"goods_id": "295",
							"product_code": "335509",
							"goods_name": "CORONA科罗娜啤酒330ml*24瓶 1箱",
							"product_id": "883",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "17",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "120.00",
							"store_prompt": "1",
							"price": "150.00",
							"mkt_price": "120.00",
							"mkt_price_unit": "元",
							"img_url": "/public/assets/images/noimg_215.jpg",
							"fix_point": "0",
							"store_forsale": "1994",
							"real_price": "30.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "1"
						},
						{
							"goods_id": "130",
							"product_code": "466942 ",
							"goods_name": "CORONA科罗娜啤酒330ml*24瓶 2箱 + Hoegaarden福佳白啤酒330ml*24瓶 1箱",
							"product_id": "715",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "17",
							"unit": "组",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "800.00",
							"mkt_price": "693.60",
							"mkt_price_unit": "组",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/e2/ec/5a/e6daad1ae355cf0b2cbcd8c18180f4788b116e5e.jpg",
							"fix_point": "0",
							"store_forsale": 0,
							"store_tips": "CORONA科罗娜啤酒330ml*24瓶 2箱 + Hoegaarden福佳白啤酒330ml*24瓶 1箱库存不足，当前可用库存：0",
							"real_price": "800.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "40"
						}
					]
				},
				{
					"brand_id": "18",
					"brand_name": "福佳（Hoegaarden)",
					"brand_url": "https://sc.ab-inbev.cn/gallery-5.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "81626db7dedf5a80031a7263f1ed12fb",
					"ordernum": "400",
					"marketing_copy": "500年的不懈追求造就了这款口味鲜明的啤酒，它融合了橙皮、芫荽的独特口味，并且混合了快乐的僧侣们从阳光明媚的Curacao岛进口的草药味道",
					"romance_copy": "值得一提的是倒一杯Hoegaarden就好像把阳光注入你的杯子：一抹亮丽的鲜黄划破杯的静默，柔软的泡沫泛成片片云朵。口感柔和，轻柔裹挟着甜酸，唇齿间荡漾着微妙的柑橘味。",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:29:24",
					"modified": "2017-04-19 12:29:24",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "7",
							"product_code": "52641",
							"goods_name": "Hoegaarden Gran Cru 17.9度 330ML 1X24纸箱OW",
							"product_id": "71",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "18",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "273.60",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/b0/77/81/a12a6b97ad6c9082231ad523a0e6163dd9a83e53.png",
							"fix_point": "0",
							"store_forsale": "94",
							"real_price": "273.60",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "13"
						},
						{
							"goods_id": "6",
							"product_code": "f102",
							"goods_name": "Hoeggarden Radler 250ml*24瓶",
							"product_id": "72",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "18",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "320.00",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/b0/38/0e/9f997b6af2b87f4a54d9e3d543a64911be8812a6.png",
							"fix_point": "0",
							"store_forsale": "64",
							"real_price": "320.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "16"
						},
						{
							"goods_id": "3",
							"product_code": "44962",
							"goods_name": "Hoegaarden福佳白啤酒330ml*24瓶 ",
							"product_id": "75",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "18",
							"unit": "箱",
							"accounting_price": "180.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "200.00",
							"mkt_price": "252.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/b8/40/f6/d304c8fc15ea52a3ae5612f119b07ecfc4fb48a0.png",
							"fix_point": "0",
							"store_forsale": "1958",
							"real_price": "200.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "10"
						}
					]
				},
				{
					"brand_id": "19",
					"brand_name": "鹅岛（Goose Island）",
					"brand_url": "https://sc.ab-inbev.cn/gallery-15.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "c77cbc62f83e356258297713c341cab1",
					"ordernum": "301",
					"marketing_copy": "啤酒花爱好者梦寐以求的充满果香的啤酒产品，入口鲜明的干麦芽气息，浓郁的啤酒花香气令人久久回味。",
					"romance_copy": "我们的印度麦酒保持了其一贯的传统，麦酒从英国运输到印度时，为了在漫长旅途中保持其独特的口感，使用了大量的啤酒花，造就了这款啤酒，为啤酒花爱好者奉献了美妙的果香口感，入口鲜明的干麦芽气息，浓郁的啤酒花香气令人久久回味。",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:26:51",
					"modified": "2017-04-19 12:26:51",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "9",
							"product_code": "55462",
							"goods_name": "Goose Island 鹅岛啤酒IPA 355ml 2*12瓶",
							"product_id": "69",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "19",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "309.60",
							"mkt_price": "498.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/a5/26/a0/889c36be9f11ece7e691bef25f5c5baedaf6ae82.png",
							"fix_point": "0",
							"store_forsale": "48",
							"real_price": "309.60",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "15"
						},
						{
							"goods_id": "119",
							"product_code": "554622",
							"goods_name": "Goose Island 鹅岛啤酒Honkers Ale + 鹅岛啤酒IPA 两箱（促销）",
							"product_id": "704",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "19",
							"unit": "组",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "557.28",
							"mkt_price": "599.00",
							"mkt_price_unit": "组",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/06/c7/65/23357d35cf3bcd0a836e3089171e2f38697aeb34.png",
							"fix_point": "0",
							"store_forsale": 0,
							"store_tips": "Goose Island 鹅岛啤酒Honkers Ale + 鹅岛啤酒IPA 两箱（促销）库存不足，当前可用库存：0",
							"real_price": "557.28",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "27"
						},
						{
							"goods_id": "120",
							"product_code": "554623",
							"goods_name": "Goose Island 鹅岛啤酒IPA + 鹅岛啤酒Honkers Ale + 鹅岛啤酒Sofie 三箱（促销）",
							"product_id": "705",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "19",
							"unit": "组",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "1464.72",
							"mkt_price": "498.00",
							"mkt_price_unit": "组",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/9f/21/10/90d6f7b7724f2e30ec38e90d2fcc2da3a8e92b16.png",
							"fix_point": "0",
							"store_forsale": 0,
							"store_tips": "Goose Island 鹅岛啤酒IPA + 鹅岛啤酒Honkers Ale + 鹅岛啤酒Sofie 三箱（促销）库存不足，当前可用库存：0",
							"real_price": "1464.72",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "73"
						}
					]
				},
				{
					"brand_id": "20",
					"brand_name": "百威（Budweiser）",
					"brand_url": "https://sc.ab-inbev.cn/gallery-17.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "b49247e046f18c50972d53a361f2fe04",
					"ordernum": "900",
					"marketing_copy": "&nbsp;",
					"romance_copy": "&nbsp;",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-21 14:21:24",
					"modified": "2017-04-21 14:21:24",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "185",
							"product_code": "43022",
							"goods_name": "CT_百威9.7度500ML1X12纸箱听装",
							"product_id": "769",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "20",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "123.00",
							"mkt_price": "80.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20180319/1521430537336825.png",
							"fix_point": "0",
							"store_forsale": "0",
							"store_tips": "CT_百威9.7度500ML1X12纸箱听装库存不足，当前可用库存：0",
							"real_price": "123.00",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "6"
						},
						{
							"goods_id": "69",
							"product_code": "25247",
							"goods_name": "百威9.7度330ML 1x24纸箱听装",
							"product_id": "654",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "20",
							"unit": "箱",
							"accounting_price": "100.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "133.44",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/24/8c/76/e1debc8ead36917c2facdc83308916440503af81.png",
							"fix_point": "0",
							"store_forsale": "999934",
							"real_price": "133.44",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "6"
						},
						{
							"goods_id": "70",
							"product_code": "30879",
							"goods_name": "百威9.7度330ML 4x6半托纸箱听装",
							"product_id": "655",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "20",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "133.44",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/96/26/8e/0b36c5bdd75869d75017bc71eb3a41c4cfc78cc4.png",
							"fix_point": "0",
							"store_forsale": 0,
							"store_tips": "百威9.7度330ML 4x6半托纸箱听装库存不足，当前可用库存：0",
							"real_price": "133.44",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "6"
						}
					]
				},
				{
					"brand_id": "21",
					"brand_name": "魅夜（Mixxtail） ",
					"brand_url": "https://sc.ab-inbev.cn/gallery-20.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "3c87473645757a1c3165050ca9ff149b",
					"ordernum": "90",
					"marketing_copy": "&nbsp;",
					"romance_copy": "&nbsp;",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:25:21",
					"modified": "2017-04-19 12:25:21",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "79",
							"product_code": "50124",
							"goods_name": "魅夜蓝色幻想3.8度275ML 1x24纸箱OW瓶装",
							"product_id": "664",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "21",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "229.92",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/49/ff/0a/bfa48a0e094df52b1ab09db74f6607a28ec40cd8.png",
							"fix_point": "0",
							"store_forsale": "82",
							"real_price": "229.92",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "11"
						},
						{
							"goods_id": "80",
							"product_code": "50136",
							"goods_name": "魅夜蓝色幻想3.8度310ML 1x24半托纸箱听装",
							"product_id": "665",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "21",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "155.04",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/1b/eb/c6/cadd63c709970211342c15739e40f92690c2459e.png",
							"fix_point": "0",
							"store_forsale": "39",
							"real_price": "155.04",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "7"
						}
					]
				},
				{
					"brand_id": "23",
					"brand_name": "哈尔滨（Harbin）",
					"brand_url": "https://sc.ab-inbev.cn/gallery-26.html",
					"brand_desc": "&nbsp;",
					"brand_logo": "97c09ca7429540f2cae40b618ac108b0",
					"ordernum": "800",
					"marketing_copy": "&nbsp;",
					"romance_copy": "&nbsp;",
					"flag": "0",
					"creator": "system",
					"modifier": "system",
					"created": "2017-04-19 12:28:09",
					"modified": "2017-04-19 12:28:09",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
							"goods_id": "66",
							"product_code": "30961",
							"goods_name": "哈尔滨小麦王10度330ML 4x6半托纸箱听装",
							"product_id": "651",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "23",
							"unit": "箱",
							"accounting_price": "50.00",
							"ret_price": "0.00",
							"store_prompt": "1",
							"price": "53.76",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/1e/60/18/09ff0c920a48d62efd172d64c31ead6028f79761.png",
							"fix_point": "0",
							"store_forsale": "9194",
							"real_price": "53.76",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "2"
						},
						{
							"goods_id": "67",
							"product_code": "30940",
							"goods_name": "哈尔滨冰纯淡爽7度500ML 1x12纸箱回瓶",
							"product_id": "652",
							"channel_id": "16",
							"shop_id": "1",
							"brand_id": "23",
							"unit": "箱",
							"accounting_price": "0.00",
							"ret_price": "3.00",
							"store_prompt": "1",
							"price": "48.96",
							"mkt_price": "0.00",
							"mkt_price_unit": "箱",
							"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/5a/8b/96/1068226bd6805762ff68a686afbc840f20236358.png",
							"fix_point": "0",
							"store_forsale": "89",
							"real_price": "45.96",
							"show_mkt_price": "1",
							"shop_name": "百威上海直销",
							"gain_point": "2"
						}
					]
				},
				{
					"brand_id": "31",
					"brand_name": "可口可乐",
					"brand_url": null,
					"brand_desc": "",
					"brand_logo": "24b7e108d3003cd7f314aa0c7b7fbb51",
					"ordernum": "1",
					"marketing_copy": "",
					"romance_copy": "",
					"flag": "0",
					"creator": "admin",
					"modifier": "admin",
					"created": "2017-07-27 14:47:50",
					"modified": "2017-07-28 11:18:04",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
						"goods_id": "205",
						"product_code": "33",
						"goods_name": "红牛第三方",
						"product_id": "789",
						"channel_id": "16",
						"shop_id": "1",
						"brand_id": "31",
						"unit": "3",
						"accounting_price": "0.00",
						"ret_price": "0.00",
						"store_prompt": "1",
						"price": "40.00",
						"mkt_price": "0.00",
						"mkt_price_unit": "33",
						"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20171025/1508916261481687.png",
						"fix_point": "0",
						"store_forsale": "93",
						"real_price": "40.00",
						"show_mkt_price": "1",
						"shop_name": "百威上海直销",
						"gain_point": "2"
					}]
				},
				{
					"brand_id": "34",
					"brand_name": "雪碧",
					"brand_url": null,
					"brand_desc": "",
					"brand_logo": "cbc9bff104ad72a875a83ed8e3663194",
					"ordernum": "0",
					"marketing_copy": "<p><span style=\"color: rgb(51, 51, 51); font-family: arial,宋体,sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 28px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">汽水产品与可口可乐公司的其他饮料产品齐头并进，如今已经成为美国发展速度领先的主要非酒精饮料产品之一，并且是全球深受青睐的柠檬味汽水非酒精饮料产品之一</span></p>",
					"romance_copy": "<p><span style=\"color: rgb(51, 51, 51); font-family: arial,宋体,sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 28px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">汽水产品与可口可乐公司的其他饮料产品齐头并进，如今已经成为美国发展速度领先的主要非酒精饮料产品之一，并且是全球深受青睐的柠檬味汽水非酒精饮料产品之一</span></p>",
					"flag": "0",
					"creator": "admin",
					"modifier": "admin",
					"created": "2017-07-27 16:38:27",
					"modified": "2017-07-28 11:19:04",
					"seo_info": null,
					"is_self_support": "1",
					"goods": [{
						"goods_id": "300",
						"product_code": "1223",
						"goods_name": "老汉口热干面 5包",
						"product_id": "888",
						"channel_id": "16",
						"shop_id": "1",
						"brand_id": "34",
						"unit": "包",
						"accounting_price": "0.00",
						"ret_price": "0.00",
						"store_prompt": "1",
						"price": "20.00",
						"mkt_price": "12.00",
						"mkt_price_unit": "元",
						"img_url": "/public/assets/images/noimg_215.jpg",
						"fix_point": "0",
						"store_forsale": "0",
						"store_tips": "老汉口热干面 5包库存不足，当前可用库存：0",
						"real_price": "20.00",
						"show_mkt_price": "1",
						"shop_name": "百威上海直销",
						"gain_point": "1"
					}]
				}
			],
			list1: [
				{ title: '雪津', value: "Sedrin", checked: true },
				{ title: '贝克', value: "Beck's" },
				{ title: '奶盖', value: "" },
				{ title: '可口可乐', value: "Coca Cola" },
				{ title: '魅夜', value: "Mixxtail" },
				{ title: '鹅岛', value: "Goose Island" },
				{ title: '碧蓝岸点', value: "Blue Point" },
				{ title: '福佳', value: "Hoegaarden" },
				{ title: '乐飞', value: "Leffe" },
				{ title: '科罗娜', value: "Corona" },
				{ title: '时代', value: "Stella" },
				{ title: '哈尔滨', value: "Harbin" },
				{ title: '百威', value: "Budweiser" }
			],
			list2: [],
			list3: [],

			checkedInfo: { brand_name: '时代（Stella）' }
		}),

		methods: {

			wxcRadioListChecked(e) {
				this.checkedInfo = e;
				console.log(this.checkedInfo);

			},
			wxcCheckBoxListChecked(e) {
				this.checkedList = e.checkedList;
			},
			shopping_cart(event) {
				console.log('shopping_cart:', event)
				modal.toast({
					message: '跳转到购物车页(shopping_cart.vue)',
					duration: 3
				})
				var nav = weex.requireModule('navigator');
				nav.push('./shopping_cart.js')
			},
			ds(){
				 modal.toast({message: pref.get('user').member_id});
			}
		},
		computed: {
			checkIcon() {
				const { icon, disabled, innerChecked, config } = this;
				const mergeIcon = [...icon];
				config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
				config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
				config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
				config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);
				if(disabled) {
					return mergeIcon[innerChecked ? 2 : 3];
				} else {
					return mergeIcon[innerChecked ? 0 : 1];
				}
			},
			textColor() {
				const { innerChecked, disabled, config } = this;
				const checkedColor = config.checkedColor ? config.checkedColor : '#4183ff';
				return innerChecked && !disabled ? checkedColor : '#3D3D3D';
			}
		},
		watch: {
			checked(newChecked) {
				this.innerChecked = newChecked;
			}
		},
	}
</script>