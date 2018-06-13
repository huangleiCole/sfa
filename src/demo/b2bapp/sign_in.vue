<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->

<template>
  
    <div class="item-container">

      <!-- <wxc-minibar background-color="black">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img" slot="left" ></image>
        <text class="text6" slot="middle">门店签到</text>
        <image src="http://47.98.186.145/api/web/static/img/scan1.png" class="img" slot="right"></image>
      </wxc-minibar> -->
      <div class="c"></div>
      <div class="bar">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon" @click="returnTop"></image>
        <text class="title">门店签到</text>
      </div>

      <div class="row">
        <text class="t1">当前门店：{{member_name}}</text>
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
        <div @click="showIn" :class="[change_div ? 'd2':'d3']" ><text class="text">{{change_name}}</text></div>
      </div>
    
    <div class="p1">
      <div class="p2"><image class="img6" :src="src01" @click="takingPictures01"></image></div>
      <div class="p2"><image class="img6" :src="src02" @click="takingPictures02"></image></div>
      <div class="p2"><image class="img6" :src="src03" @click="takingPictures03"></image></div>
    </div>

    <div class="p1">
      <div class="p2"><image class="img6" :src="src04" @click="takingPictures04"></image></div>
      <div class="p2"><image class="img6" :src="src05" @click="takingPictures05"></image></div>
      <div class="p2"><image class="img6" :src="src06" @click="takingPictures06"></image></div>
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
  .p1{
    flex-direction: row;
    height: 200px;
    width: 750px;
    margin-top: 30px;
  }
  .p2{
    flex : 1;
  }
  
  .img6 {

    width: 180px;
    height: 180px;
    margin-top: 15;
    margin-left: 30px;
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
    margin-left: 30px;
  }
  
  .t2 {
    flex: 3;
  }
  
  .t3 {
    margin-right: 30px;
  }
  
  .t1,
  .t3 {
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-size: 30px;
    flex: 1;
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
  
  .text6{
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

  .c{
    width: 750px;
    height: 40px;
    background-color: #8B7D6B;
    opacity:0.5;
  }
  
  
  .item-container {
    width: 750px;
    align-items: center;
    justify-content: bottom;
  }
</style>
<script>
  import { WxcMinibar} from 'weex-ui';
  import Time from './time';
  const modal = weex.requireModule('modal');
  import Http from './http';
  const globalEvent = weex.requireModule('globalEvent');
  const page = weex.requireModule("page");
  const nav = weex.requireModule('navigator');
  export default {
    components: { WxcMinibar },
    data: {
      src01 : "http://47.98.186.145/api/web/static/img/photo.png",
      src02 : "http://47.98.186.145/api/web/static/img/photo.png",
      src03 : "http://47.98.186.145/api/web/static/img/photo.png",
      src04 : "http://47.98.186.145/api/web/static/img/photo.png",
      src05 : "http://47.98.186.145/api/web/static/img/photo.png",
      src06 : "http://47.98.186.145/api/web/static/img/photo.png",
      member_id : '',
      member_name : '未选择',
      area : '',
      addr : '',
      change_div : true,
      change_name : "签到"
    }
    ,
    created () {
      var that = this;
      var navigator = weex.requireModule('navigator');
      var param_a = navigator.param();
      that.member_id = param_a.member_id;
      that.member_name = param_a.member_name;
      that.area = param_a.area;
      that.addr = param_a.addr;

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
      showIn() {
        var that = this;
        if (that.change_name == "已签到") {
          return;
        }
      	

        var totalDays = 0;
        var now = new Date();
        var years = now.getYear()
        if (years < 1000)
            years += 1900
        var days = new Array(12);
        days[0] = 31;
        days[2] = 31;
        days[3] = 30;
        days[4] = 31;
        days[5] = 30;
        days[6] = 31;
        days[7] = 31;
        days[8] = 30;
        days[9] = 31;
        days[10] = 30;
        days[11] = 31;
        
        //判断是否为闰年，针对2月的天数进行计算
        if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
            days[1] = 29
        } else {
            days[1] = 28
        }
        if (now.getMonth() == 0) {
            totalDays = totalDays + now.getDate();
        } else {
            var curMonth = now.getMonth();
            for (var count = 1; count <= curMonth; count++) {
                totalDays = totalDays + days[count - 1];
            }
            totalDays = totalDays + now.getDate();
        }
        //得到第几周
        //var a =  totalDays / 7;
        //console.log("直接打印"+a);
        var week =  Math.ceil(totalDays / 7);

        var resdata= "{\"file1\":" + "\"" + that.src01 + "\",";
        resdata += "\"file2\":" + "\"" + that.src02 + "\",";
        resdata += "\"file3\":" + "\"" + that.src03 + "\",";
        resdata += "\"file4\":" + "\"" + that.src04 + "\",";
        resdata += "\"file5\":" + "\"" + that.src05 + "\",";
        resdata += "\"file6\":" + "\"" + that.src06 + "\"}";

        var param = JSON.parse(resdata);

      	// console.log('showIn:', Time.CurentTime())
    			// modal.toast({
    			// 	message: param,
    			// 	duration: 3
    			// })
       
        Http.postPhoto(6,param,function(res1){
          //modal.toast({ message: res1 });
          var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.sign_in" }
          , { 'name': "app_key", 'value': "b2bapp" }
          , { 'name': "format", 'value': "json" }
          , { 'name': "datetime", 'value': Http.formatTime(new Date())}
          , { 'name': "v", 'value': '2.0' }
          , { 'name': "week", 'value': week }
          , { 'name': "member_id", 'value': that.member_id }
          , { 'name': "task_id", 'value': 1 }
          , { 'name': "file_content", 'value': res1 }
          , { 'name': "file_type", 'value': 1 }
          , { 'name': "creator", 'value': 'wyc' }
          ];
          Http.post(dataparam,function(res2){
              if (res2.data == 3) {
                modal.toast({ message: '签到成功' });
                that.change_div = false;
                that.change_name = "已签到";
              }else{
                modal.toast({ message: '签到失败' });
              }
          });

        });

      },
      takingPictures01(){
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openCamera(1500,2000,'#000000',function(e){
            self.src01=e.path;
        });
      },
      takingPictures02(){
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openCamera(1500,2000,'#000000',function(e){
            self.src02=e.path;
        });
      },
      takingPictures03(){
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openCamera(1500,2000,'#000000',function(e){
            self.src03=e.path;
        });
      },
      takingPictures04(){
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openCamera(1500,2000,'#000000',function(e){
            self.src04=e.path;
        });
      },
      takingPictures05(){
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openCamera(1500,2000,'#000000',function(e){
            self.src05=e.path;
        });
      },
      takingPictures06(){
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openCamera(1500,2000,'#000000',function(e){
            self.src06=e.path;
        });
      },
      returnTop(){
            var nav = weex.requireModule('navigator') ;
            nav.push('./choose.js');
      }
    }
  };
</script>