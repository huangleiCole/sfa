<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->

<template>

	<div class="item-container">
		<!-- <wxc-minibar background-color="black">
			<image src="http://47.98.186.145/api/web/static/img/return.png" class="img" slot="left"></image>
			<text class="text6" slot="middle">门店签到</text>
			<image src="http://47.98.186.145/api/web/static/img/scan1.png" class="img" slot="right"></image>
		</wxc-minibar> -->
		<div class="c"></div>
		<div class="bar">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon"  @click="returnTop"></image>
        <text class="title">门店签出</text>
      </div>

		<div class="row">
			<div class="item_left">
				<text class="t1 left_gap">当前门店</text>
				<text class="t1">{{member_name}}</text>
			</div>

			<div class="item_right">
				<text class="t3 right_gap">签到时间</text>
				<text class="t3">{{sign_in_time}}</text>
			</div>

		</div>
		<div class="gird_column">
			<div class="gird_row">
				<image src="http://47.98.186.145/api/web/static/img/bld.jpg" class="img3"></image>
				<div>
					<text class="text2">{{member_name}}</text>
					<text class="text5">{{area}}</text>
					<text class="text5">{{addr}}</text>
				</div>
				<text class="text3"></text>
			</div>
			<div class="h"></div>

			<div class="gird_row1">
				<image class="img4" src="http://47.98.186.145/api/web/static/img/location.png"></image>
				<text class="text5">{{addr}}</text>
				<text style="flex:2"></text>
				<image class="img5" src="http://47.98.186.145/api/web/static/img/t.png"></image>
				<div class="d"></div>
				<image class="img5" src="http://47.98.186.145/api/web/static/img/phone.png"></image>
			</div>
			<div class="h"></div>
		</div>
		<div class="d1">
			<div @click="showOff" :class="[change_div ? 'd2':'d3']" ><text class="text">{{change_name}}</text></div>
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
	.d {
		background-color: #bfbfbf;
		height: 50px;
		width: 2px;
	}
	
	.d1 {
		margin-top: 50px;
		align-items: center;
	}
	
	.d2 {
		justify-content: center;
		width: 600px;
		height: 100px;
		border-radius: 12px;
		background-color: #44cf7c;
	}

	.d3 {
		justify-content: center;
		width: 600px;
		height: 100px;
		border-radius: 12px;
		background-color: #ce0000;
	}
	
	.h {
		background-color: #dbdbdb;
		width: 750px;
		height: 2px;
	}
	
	.row {
		flex-direction: row;
		text-align: center;
		background-color: #6184aa;
		width: 750px;
		height: 120px;
	}
	
	.gird_row {
		align-items: center;
		flex-direction: row;
		width: 750px;
		height: 300px;
		align: center;
		margin: 1px;
	}
	
	.gird_row1 {
		align-items: center;
		flex-direction: row;
		width: 750px;
		height: 120px;
		align: center;
		margin: 1px;
	}
	
	.gird_column {
		flex-direction: column;
		width: 750px;
	}
	
	.t1 {
		margin-left: 60px;
	}
	
	.t3 {
		margin-right: 30px;
	}
	
	.t1,
	.t3 {
		padding-top: 10px;
		padding-bottom: 10px;
		color: #ffffff;
		font-size: 30px;
	}
	
	.text {
		text-align: center;
		font-size: 35px;
		color: #ffffff;
	}
	
	.text1 {
		font-size: 40px;
		color: white;
	}
	
	.text2 {
		color: #2c2c2c;
		font-size: 30px;
		margin-left: 15px;
	}
	
	.text3 {
		padding-left: 100px;
		flex: 3;
		color: #707070;
		font-size: 30px;
	}
	
	.text4 {
		padding-left: 380px;
		flex: 3;
		color: #707070;
		font-size: 30px;
	}
	
	.text5 {
		color: #707070;
		font-size: 30px;
		margin-left: 15px;
		margin-top: 20px;
	}
	
	.text6 {
		font-size: 40px;
		color: #ffffff;
	}
	
	.img {
		width: 45px;
		height: 45px;
	}
	
	.img2 {
		width: 60px;
		height: 60px;
		margin-right: 45px;
	}
	
	.img3 {
		width: 300px;
		height: 300px;
		padding: 45px;
	}
	
	.img4 {
		width: 30px;
		height: 30px;
		margin-left: 30px;
	}
	
	.img5 {
		width: 50px;
		height: 50px;
		margin-left: 30px;
		margin-right: 30px;
	}
	
	.item_right {
		flex: 3;
		align-items: flex-end;
	}
	
	.item_left {
		flex: 3;
		align-items: flex-start;
	}
	
	.item-container {
		width: 750px;
		align-items: center;
		justify-content: bottom;
	}
	
	.left_gap {
		margin-left: 80px;
	}
	
	.right_gap {
		margin-right: 50px;
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
  	import Http from './http';
	import Time from './time';
	const globalEvent = weex.requireModule('globalEvent');
	const page = weex.requireModule("page");
	const nav = weex.requireModule('navigator');

	const modal = weex.requireModule('modal');
	export default {
		components: { WxcMinibar },
		data: {
	      member_id : '',
	      member_name : '未选择',
	      area : '',
	      addr : '',
	      sign_in_time : 'sign time',
	      change_div : true,
	      change_name : "签出"
	    },
		created () {
	      var that = this;
	      var navigator = weex.requireModule('navigator');
	      var param_a = navigator.param();
	      that.member_id = param_a.member_id;
	      that.member_name = param_a.member_name;
	      that.area = param_a.area;
	      that.addr = param_a.addr;

	      var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.nowday_signin_time" }
          , { 'name': "app_key", 'value': "b2bapp" }
          , { 'name': "format", 'value': "json" }
          , { 'name': "datetime", 'value': Http.formatTime(new Date())}
          , { 'name': "v", 'value': '2.0' }
          , { 'name': "member_id", 'value': that.member_id }
          ];
          Http.post(dataparam,function(res){
          	modal.toast({
				message: res,
				duration: 3
			})
          	that.sign_in_time = res.data[0].sign_in_time;
          });

          globalEvent.addEventListener("onPageInit", function(param) { 
	        page.enableBackKey(false);
	        page.setBackKeyCallback(function() {
	          var param={};
	          param.member_id = that.member_id;
	          param.member_name = that.member_name;
	          param.area = that.area;
	          param.addr = that.addr;
	          nav.pushParam('execute.js',param);
	        });
	      });

	    },
		methods: {
			showOff(event) {
				// console.log('showOff:', Time.CurentTime())
				// modal.toast({
				// 	message: '签出时间：' + Time.CurentTime(),
				// 	duration: 3
				// })
			var that = this

			if (that.change_name == "已签出") {
		        return;
		    }
			var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.sign_off" }
		          , { 'name': "app_key", 'value': "b2bapp" }
		          , { 'name': "format", 'value': "json" }
		          , { 'name': "datetime", 'value': Http.formatTime(new Date())}
		          , { 'name': "v", 'value': '2.0' }
		          , { 'name': "member_id", 'value': that.member_id }
		          , { 'name': "creator", 'value': "wyc" }
		          ];
	        Http.post(dataparam,function(res){
	          	if (res.data == 3) {
	          		modal.toast({
						message: '签出成功！时间：' + Time.CurentTime(),
						duration: 3
					})
					that.change_div = false;
					that.change_name = "已签出";
	          	}else{
	          		modal.toast({
						message: '签出失败！',
						duration: 3
					})
	          	}
	        });	

				
			},
			returnTop(){
        		var nav = weex.requireModule('navigator') ;
        		nav.push('./execute.js');
      		}
		}
	};
</script>