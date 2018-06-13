<template>
    <div class="item-container">
        <div class="c"></div>
        <div class="bar">
            <div class="d1">
                <image src="http://193.112.19.135/static/img/upper.png" class="img"></image>
            </div>
            <div class="d3">
                <text class="title">会员所有订单</text>
            </div>
            <div class="d2">
                <image src="http://193.112.19.135/static/img/home.png" class="img1"></image>
            </div>
        </div>
        <scroller>
            <div class="item">
                <div class="item_row4">
                    <text class="text12">会员选择</text>
                    <div class="a"><input class="input1" type="text" placeholder="  请选择用户"/></div>
                </div>

                <div class="item_row4">
                    <text class="text12">开始时间</text>
                    <div class="a"><input class="input1" type="text" placeholder="  开始时间"/></div>
                </div>

                <div class="item_row4">
                    <text class="text12">结束时间</text>
                    <div class="a"><input class="input1" type="text" placeholder="  结束时间"/></div>
                </div>

            </div>
            <div class="d17">
                <div class="d16"  @click="check_memberName">
                    <text class="text15">查询</text>
                </div>
            </div>

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

                                    <text class="text3"></text>
                                    <div class="item_row2" @click="create_order">
                                        <text class="text8">再来一单</text>
                                        <image src="http://193.112.19.135/static/img/next.png" class="img"></image>
                                    </div>

                                </div>
                            </div>
                            <!--<div class="d8">
                                <div v-for="(value_a,key_a,index_a) in value.goods_list">
                                    <div style="flex-direction: row;">
                                        <div v-for="(value,key,index) in value_a">
                                            <div class="d14">
                                                <image :src="value.img_url" class="img2"></image>
                                                <div class="d13" v-if="value.activity!=''">
                                                    <text class="text19">{{value.activity}}</text>
                                                </div>
                                                <div class="d15">
                                                    <text class="text19">{{value.count}}</text>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
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

    .a {
        margin-left: 20px;
        border-width: 1px;
        border-style: solid;
        border-color: #c4c4c4;
        border-radius: 5px;
        width: 403px;
        height: 70px;
    }

    .input1 {
        border-radius: 5px;
        height: 65px;
        width: 300px;
        line-height: 50px;
        margin-left: 50px;
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

    .item_row4 {
        padding-left: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
        flex-direction: row;
        width: 750px;
        height: 70px;
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

    .d6 {
        flex-direction: row;
        flex: 1;
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

    .d16 {
        margin-top: 30px;
        justify-content: center;
        border-radius: 5px;
        width: 730px;
        height: 60px;
        background-color: #d0243c;
    }

    .d17 {
        align-self: center;
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

    .text8 {
        font-size: 25px;
        line-height: 40px;
        color: blue;
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
        height: 50px;
        line-height: 50px;
    }

    .text12 {
        font-size: 30px;
        text-align: center;
        height: 65px;
        line-height: 65px;
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

    .text15 {
        text-align: center;
        color: #ffffff;
        font-size: 35px;
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
        	sales_staff_name: '未登录',
        	list2:'',
        	
            list: {
                "l1": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "2842.00",
                    "deposit": "0.02",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods1": {
                            "activity": "兑换",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop1.png"
                        },
                        "goods2": {
                            "activity": "",
                            "count": "3",
                            "img_url": "http://193.112.19.135/static/img/shop2.png"
                        },
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        },
                        "goods4": {
                            "activity": "兑换",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop1.png"
                        },
                    },
                        {
                            "goods5": {
                                "activity": "",
                                "count": "3",
                                "img_url": "http://193.112.19.135/static/img/shop2.png"
                            },

                            "goods6": {
                                "activity": "",
                                "count": "1",
                                "img_url": "http://193.112.19.135/static/img/shop3.png"
                            },
                            "goods7": {
                                "activity": "兑换",
                                "count": "1",
                                "img_url": "http://193.112.19.135/static/img/shop1.png"
                            },
                            "goods8": {
                                "activity": "",
                                "count": "3",
                                "img_url": "http://193.112.19.135/static/img/shop2.png"
                            }
                        },
                        {
                            "goods9": {
                                "activity": "",
                                "count": "1",
                                "img_url": "http://193.112.19.135/static/img/shop3.png"
                            }
                        }
                    ]

                },
                "l2": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                },
                "l3": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }

                    ]

                },
                "l4": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                },
                "l5": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                }
            }
        }),
        created(){
        	var that = this;
			var user = pref.get('user');
			
			if(user.length != 0) {
				that.sales_staff_name = user.sales_staff_name;
			}
			
			var dataparam = [{ 'name': "method", 'value': "sfa.order.select" },
				{ 'name': "app_key", 'value': "b2bapp" },
				{ 'name': "format", 'value': "json" },
				{ 'name': "datetime", 'value': Http.formatTime(new Date()) },
				{ 'name': "v", 'value': '2.0' },
				{ 'name': "access_token", 'value': user.access_token },
				{ 'name': "member_id", 'value': '' },
				{ 'name': "start_time", 'value': '' },
				{ 'name': "end_time", 'value': '' },
				{ 'name': "page_index", 'value': '' },
				{ 'name': "page_size", 'value': '' }
			];
			Http.post(dataparam, function(res) {
				that.list2 = res.data;
				that.list2.member_name='';
				
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
					{ 'name': "member_id", 'value': '' },
					{ 'name': "start_time", 'value': '' },
					{ 'name': "end_time", 'value': '' },
					{ 'name': "page_index", 'value': that.list2.page_index },
					{ 'name': "page_size", 'value': '' }
				];
				Http.post(dataparam, function(res) {
					that.list2 = res.data;
					that.list2.member_name='';
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
					{ 'name': "member_id", 'value': '' },
					{ 'name': "start_time", 'value': '' },
					{ 'name': "end_time", 'value': '' },
					{ 'name': "page_index", 'value': that.list2.page_index },
					{ 'name': "page_size", 'value': '' }
				];
				Http.post(dataparam, function(res) {
					that.list2 = res.data;
				});
			},
			
			check_memberName() {
				var user = pref.get('user');
				var that = this;
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
					var mes = res.data.list;
					if(mes == '') {
						modal.toast({ message: '无数据', duration: 3 });
					}else{
						that.list2=res.data;
					}
						
				});
			}
        }
    }
</script>