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
						<text class="text2">购物车</text>
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
				<div class="d1"><text class="text1">购物清单</text></div>

				<div class="d2" @click="clear"><text class="text1_1">清空购物清单</text></div>
				<wxc-dialog :title="title" :content="content" :confirm-text="confirmText" :cancel-text="cancelText" :show="show" :single="single" :is-checked="isChecked" :no-prompt-text="noPromptText" :show-no-prompt="showNoPrompt" @wxcDialogCancelBtnClicked="dialogCancelBtnClick" @wxcDialogConfirmBtnClicked="dialogConfirmBtnClick" @wxcDialogNoPromptClicked="dialogNoPromptClick">
				</wxc-dialog>
			</div>
			<div class="h"></div>
			<div class="item_row3">
				<wxc-checkbox></wxc-checkbox>
				<!--<image class="img" :src="src" @click="change" src="http://193.112.19.135/static/img/checkbox.png"></image>-->
				<div class="d3">
					<div><text class="text3">商品金额</text></div>
					<div><text class="text4">￥{{total.goods_amount}}</text></div>
					<div><text class="text3">消费积分</text></div>
					<div><text class="text4">{{total.point_u}}</text></div>
					<div><text class="text3">预计可得积分</text></div>
					<div><text class="text4">{{total.point_g}}</text></div>
				</div>
			</div>

			<div class="h"></div>

			<div class="item_row4">
				<text class="text5">商品清单</text>
			</div>
			<div class="h"></div>
			<scroller class="scroller">
				<ul>
					<li v-for="value in carts">
						<div class="item_column1">
							<div class="item_row5">
								<wxc-checkbox></wxc-checkbox>
								<image class="img1 img_center" :src="value.img_url"></image>
								<div class="item_column2">
									<text class="text6">{{value.name}}</text>
									<text class="text10" v-if="value.store_forsale<=20">库存不足，剩余: {{value.store_forsale}}</text>
								</div>

								<div class="item_row5_right">
									<image class="img2" src="http://193.112.19.135/static/img/dustbin.png" @click="clear_item"></image>
									<wxc-dialog :title="title" :content="content1" :confirm-text="confirmText" :cancel-text="cancelText" :show="show1" :single="single" :is-checked="isChecked" :no-prompt-text="noPromptText" :show-no-prompt="showNoPrompt" @wxcDialogCancelBtnClicked="dialogCancelBtnClick" @wxcDialogConfirmBtnClicked="dialogConfirmBtnClick" @wxcDialogNoPromptClicked="dialogNoPromptClick">
									</wxc-dialog>
								</div>

							</div>
							<div class="item_row6">
								<text class="text7">价格：{{value.price}}</text>
								<div class="d12">
									<wxc-stepper :default-value="value.nums" step="1" max="9999999" min="1" @wxcStepperValueIsMinOver="wxcStepperValueIsMinOver" @wxcStepperValueIsMaxOver="wxcStepperValueIsMaxOver" @wxcStepperValueChanged="wxcStepperValueChanged">
									</wxc-stepper>
								</div>

							</div>
							<div class="h1"></div>
						</div>
					</li>
				</ul>

			</scroller>
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
		width: 750px;
		background-color: #cdcdcd;
	}
	
	.h1 {
		height: 1px;
		width: 730px;
		background-color: #cdcdcd;
		opacity: 0.6;
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
	
	.item_column1 {
		align-items: center;
		margin-top: 30px;
		width: 730px;
		flex-direction: column;
		/*background-color: #3CA8FF;*/
	}
	
	.item_column2 {
		align-items: flex-start;
		width: 380px;
		flex-direction: column;
		/*background-color: #3CA8FF;*/
	}
	
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
		align-items: center;
		background-color: #f0f0f0;
		height: 90px;
		width: 750px;
		flex-direction: row;
	}
	
	.item_row4 {
		flex-direction: row;
		align-items: center;
		background-color: #f9f9f9;
		height: 90px;
		width: 750px;
		justify-content: center;
	}
	
	.item_row5 {
		flex-direction: row;
		height: 200px;
		width: 730px;
		justify-content: flex-start;
	}
	
	.item_row5_right {
		flex: 1;
		align-items: flex-end;
	}
	
	.item_row6 {
		align-items: center;
		flex-direction: row;
		height: 120px;
		width: 730px;
	}
	
	.input {
		background-color: #DBDBDB;
		text-align: center;
		height: 80px;
		width: 80px;
	}
	
	.img {
		margin-left: 20px;
		width: 30px;
		height: 30px;
	}
	
	.img1 {
		margin-left: 20px;
		width: 180px;
		height: 180px;
	}
	
	.img2 {
		margin-top: 10px;
		margin-right: 20px;
		width: 50px;
		height: 50px;
	}
	
	.img_center {
		align-self: center;
	}
	
	.d1 {
		justify-content: center;
		width: 170px;
		height: 70px;
		align-items: center;
		border-top-width: 2px;
		border-left-width: 2px;
		border-right-width: 2px;
		border-style: solid;
		border-color: #CCCCCC;
	}
	
	.d2 {
		height: 100px;
		margin-left: 20px;
		justify-content: center;
		width: 300px;
		align-items: center;
	}
	
	.d3 {
		flex-direction: row;
		flex: 1;
		justify-content: flex-end;
		margin-right: 20px;
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
		border-radius: 5px;
		width: 90px;
		height: 80px;
		background-color: #CDCDCD;
	}
	
	.d9 {
		margin-right: 20px;
		flex: 1;
		flex-direction: row;
		justify-content: flex-end;
	}
	
	.d10 {
		width: 80px;
		height: 80px;
	}
	
	.d10_left {
		transform: rotate(180deg);
	}
	
	.d11 {
		flex-direction: column;
	}
	
	.d12 {
		margin-right: 20px;
		flex: 1;
		align-items: flex-end;
	}
	
	.text1 {
		line-height: 70px;
		font-size: 32px;
		text-align: center;
	}
	
	.text1_1 {
		width: 300px;
		height: 95px;
		line-height: 65px;
		font-size: 32px;
		text-align: center;
		color: blue;
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
		margin-left: 10px;
		color: #715549;
		font-size: 30px;
	}
	
	.text4 {
		color: red;
		font-size: 28px;
	}
	
	.text5 {
		text-align: center;
		font-size: 32px;
	}
	
	.text6 {
		margin-top: 20px;
		word-wrap: break-word;
		word-break: normal;
		font-size: 28px;
		width: 380px;
	}
	
	.text7 {
		margin-left: 20px;
		font-size: 30px;
		color: #d22b57;
	}
	
	.text8 {
		color: #707070;
		margin-right: 10px;
		text-align: center;
		height: 80px;
		line-height: 80px;
		font-size: 50px;
	}
	
	.text9 {
		margin-top: 20px;
		word-wrap: break-word;
		word-break: normal;
		font-size: 28px;
	}
	
	.text10 {
		font-size: 28px;
		color: red;
		position: absolute;
		bottom: 0;
	}
	
	.scroller {
		height: 910px;
	}
</style>

<script>
	import { CHECKED, UNCHECKED, CHECKED_DISABLED, UNCHECKED_DISABLED } from '../../../../weex-ui-master/packages/wxc-checkbox/type';
	import Title from '../../../../weex-ui-master/example/_mods/title.vue';
	import Category from '../../../../weex-ui-master/example/_mods/category.vue';
	import { WxcStepper, WxcDialog, WxcCheckbox } from '../../../../weex-ui-master/index';
	const modal = weex.requireModule('modal');
	import { setTitle } from '../../../../weex-ui-master/example/_mods/set-nav';
	export default {
		components: { Title, Category, WxcCheckbox, WxcStepper, WxcDialog },
		data: () => ({
			value: 1,
			isDisabled: true,
			isOnlyRead: true,
			icon: [CHECKED, UNCHECKED, CHECKED_DISABLED, UNCHECKED_DISABLED],
			color: '#3D3D3D',
			innerChecked: false,

			carts: {
				"item": {
					"product_id": "789",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "33",
					"name": "红牛第三方",
					"cost_price": "0.000",
					"nums": "7",
					"url": "/api/web/index.php/market/product/detail?product_id=789&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20171025/1508916261481687.png",
					"price": "50.00",
					"fix_point": "0",
					"amount": "350.00",
					"accounting_price": "0.00",
					"accounting_amount": "0.00",
					"old_price": "40.00",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "93"
				},

				"item1": {
					"product_id": "651",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "30961",
					"name": "哈尔滨小麦王10度330ML 4x6半托纸箱听装",
					"cost_price": "0.000",
					"nums": "100",
					"url": "/api/web/index.php/market/product/detail?product_id=651&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/2b/08/15/1bb79cc41231e89ec2d463749e97e53c8b1def03.png",
					"price": "53.76",
					"fix_point": "0",
					"amount": "5376.00",
					"accounting_price": "50.00",
					"accounting_amount": "5000.00",
					"old_price": "53.76",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "9194"
				},
				"item3": {
					"product_id": "789",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "33",
					"name": "红牛第三方",
					"cost_price": "0.000",
					"nums": "7",
					"url": "/api/web/index.php/market/product/detail?product_id=789&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20171025/1508916261481687.png",
					"price": "50.00",
					"fix_point": "0",
					"amount": "350.00",
					"accounting_price": "0.00",
					"accounting_amount": "0.00",
					"old_price": "40.00",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "93"
				},

				"item4": {
					"product_id": "651",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "30961",
					"name": "哈尔滨小麦王10度330ML 4x6半托纸箱听装",
					"cost_price": "0.000",
					"nums": "100",
					"url": "/api/web/index.php/market/product/detail?product_id=651&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/2b/08/15/1bb79cc41231e89ec2d463749e97e53c8b1def03.png",
					"price": "53.76",
					"fix_point": "0",
					"amount": "5376.00",
					"accounting_price": "50.00",
					"accounting_amount": "5000.00",
					"old_price": "53.76",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "9194"
				},
				"item5": {
					"product_id": "789",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "33",
					"name": "红牛第三方",
					"cost_price": "0.000",
					"nums": "7",
					"url": "/api/web/index.php/market/product/detail?product_id=789&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20171025/1508916261481687.png",
					"price": "50.00",
					"fix_point": "0",
					"amount": "350.00",
					"accounting_price": "0.00",
					"accounting_amount": "0.00",
					"old_price": "40.00",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "93"
				},

				"item6": {
					"product_id": "651",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "30961",
					"name": "哈尔滨小麦王10度330ML 4x6半托纸箱听装",
					"cost_price": "0.000",
					"nums": "100",
					"url": "/api/web/index.php/market/product/detail?product_id=651&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/2b/08/15/1bb79cc41231e89ec2d463749e97e53c8b1def03.png",
					"price": "53.76",
					"fix_point": "0",
					"amount": "5376.00",
					"accounting_price": "50.00",
					"accounting_amount": "5000.00",
					"old_price": "53.76",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "9194"
				},
				"item7": {
					"product_id": "789",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "33",
					"name": "红牛第三方",
					"cost_price": "0.000",
					"nums": "7",
					"url": "/api/web/index.php/market/product/detail?product_id=789&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20171025/1508916261481687.png",
					"price": "50.00",
					"fix_point": "0",
					"amount": "350.00",
					"accounting_price": "0.00",
					"accounting_amount": "0.00",
					"old_price": "40.00",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "93"
				},

				"item8": {
					"product_id": "651",
					"shop_id": "1",
					"item_type": "goods",
					"product_code": "30961",
					"name": "哈尔滨小麦王10度330ML 4x6半托纸箱听装",
					"cost_price": "0.000",
					"nums": "100",
					"url": "/api/web/index.php/market/product/detail?product_id=651&shop_id=1",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/2b/08/15/1bb79cc41231e89ec2d463749e97e53c8b1def03.png",
					"price": "53.76",
					"fix_point": "0",
					"amount": "5376.00",
					"accounting_price": "50.00",
					"accounting_amount": "5000.00",
					"old_price": "53.76",
					"selected": "1",
					"foregift": "0.00",
					"retbt_price": "0.00",
					"package_credit_num": 0,
					"free_retbt_price": "0.00",
					"store_forsale": "9194"
				}

			},

			"total": {
				"goods_amount": "5726.00",
				"order_amount": "5726.00",
				"pay_amount": "5726.00",
				"accounting_amount": "5000.00",
				"pay_advance": 0,
				"pmt_goods": "0.00",
				"pmt_order": "0.00",
				"discount": "0.00",
				"point_amount": "5726.00",
				"point_u": 80,
				"point_g": 314,
				"wine_num": 109,
				"item_num": 109,
				"foregift": 0,
				"weight": 0,
				"foregift_credit": 0,
				"order_amount_ori": "5726.00",
				"point_g_basic": 286.3,
				"pmt_addtional_point": 0,
				"point_g_basic_moq": 314.93,
				"point_tips": " | 按订单金额计算,换算比率:0.05 基础积分:286.30, 购买的总箱数(109)>大于设置的最小箱数(5)，奖励积分 286.30 * 0.1 = 28.63",
				"first_order_point": 0
			},

			title: '信息',
			content: '您确定要清空购物清单吗?',
			content1: '你确定要删除吗?',
			confirmText: '确定',
			cancelText: '取消',
			noPromptText: '不再提示',
			show: false,
			show1: false,
			single: false,
			showNoPrompt: false,
			isChecked: false,
		}),
		//		data: function() {
		//			return {
		//				title: '信息',
		//				content: '您确定要清空购物清单吗?',
		//				content1: '你确定要删除吗?',
		//				confirmText: '确定',
		//				cancelText: '取消',
		//				noPromptText: '不再提示',
		//				show: false,
		//				show1: false,
		//				single: false,
		//				showNoPrompt: false,
		//				isChecked: false,
		//
		//			};
		//		},
		props: {
			hasTopBorder: {
				type: Boolean,
				default: false
			},
			hasBottomBorder: {
				type: Boolean,
				default: true
			},

			//			value: {
			//				type: [String, Number, Object],
			//				require: true
			//			},
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

		created() {
			setTitle('Stepper');
			setTitle('Dialog');
			setTitle('Checkbox');
			const { checked } = this;
			this.innerChecked = checked;
		},
		mounted() {
			//			setTimeout(() => {
			//				this.value = 10;
			//			}, 2000)
		},
		methods: {
			change() {
				this.src = !this.src;

			},
			wxcCheckBoxListChecked(e) {
				this.checkedList = e.checkedList;
			},

			wxcStepperValueChanged(e) {
				console.log(e.value);
			},
			wxcStepperValueIsMaxOver() {
				modal.toast({
					message: '超过最大值啦'
				})
			},
			wxcStepperValueIsMinOver() {
				modal.toast({
					message: '超过最小值啦'
				})
			},
			clear() {
				const self = this;
				self.show = true;
			},
			clear_item() {
				const self = this;
				self.show1 = true;
			},
			dialogCancelBtnClick() {
				this.show = false;
				this.show1 = false;
			},
			dialogConfirmBtnClick() {
				this.show = false;
				this.show1 = false;
			},
			dialogNoPromptClick(e) {
				this.isChecked = e.isChecked;
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
	};
</script>