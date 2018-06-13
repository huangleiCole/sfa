
<template>
  <div>
     <!-- <wxc-minibar background-color="black">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img" slot="left"></image>
        <text class="text" slot="middle">问卷调查</text>
      </wxc-minibar> -->
      <div class="c"></div>
      <div class="bar">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon" @click="returnTop"></image>
        <text class="title">问卷调查</text>
      </div>
      
      <div class="row">
        <text class="t1">当前门店：{{member_name}}</text>
      </div>

    <scroller>
      <div v-for = "(item,index,key) in list">
        <div v-if="item.type_id == '1'">
          <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">      {{item.answer}}</text>
        </div>
        <div v-else-if="item.type_id == '2'">
          <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">      {{item.answer}}</text>
        </div>
        <div v-else-if="item.type_id == '3'">
          <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">      {{item.answer}}</text>
        </div>
        <div v-else-if="item.type_id == '4'">
           <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
           <div v-for = "(item_a,index,key) in item.answer">
              <text class="text3">      {{item_a}}</text>
           </div>
        </div>

  <div v-else-if="item.type_id == '5'">
     <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
     <div class="p1">
      <div class="p2"><image class="img6" :src="item.answer[0]"></image></div>
      <div class="p2"><image class="img6" :src="item.answer[1]"></image></div>
      <div class="p2"><image class="img6" :src="item.answer[2]"></image></div>
    </div>
  </div>
        <div v-else>
          Not A/B/C
        </div>
      </div>
    </scroller>

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
  .text{
    font-size: 40px;
    color:white;
  }
  .text1 {
    color: #8a8a8a;
    font-size: 25px;
    margin-top: 15px;
    margin-left: 30px;
    margin-bottom: 50px;
  }
  .text2 {
    color: #6A5ACD;
    margin-top:8;
    font-size:40;
    font-weight: bold;
  }
  .text3{
    color: #376956;
    margin-top:5;
    font-size:35;
    font-weight: bold;
  }
  .img {
    width: 45px;
    height: 45px;
  }
  .textarea {
      font-size: 50px;
      width: 710px;
      margin-top: 10px;
      margin-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 10px;
      padding-right: 20px;
      color: #666666;
      border-width: 2px;
      border-style: solid;
      border-color: #41B883;
    }
  .input {
     font-size: 30px;
     height: 50px;
     width: 710px;
     margin-top: 10px;
     margin-left: 20px;
   }
   .d1 {
    margin-top: 50px;
    margin-bottom:30px;
    align-items: center;
  }
  
  .d2 {
    justify-content: center;
    width: 600px;
    height: 100px;
    border-radius: 12px;
    background-color: #44cf7c;
  }
  .text {
    text-align: center;
    font-size: 35px;
    color: #ffffff;
  }
  
  .row {
    flex-direction: row;
    text-align: center;
    background-color: #6184aa;
    width: 750px;
  }

  .t1 {
    margin-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-size: 30px;
    flex: 1;
  }

  .c{
    width: 750px;
    height: 40px;
    background-color: #8B7D6B;
    opacity:0.5;
  }
</style>

<script>
  import { WxcCheckbox,WxcCheckboxList, WxcSearchbar, WxcRadio,WxcMinibar,WxcDialog   } from 'weex-ui'
  const modal = weex.requireModule('modal');
  import Http from './http';
  const photo = weex.requireModule('photo');
  const globalEvent = weex.requireModule('globalEvent');
  const page = weex.requireModule("page");
  const nav = weex.requireModule('navigator');
  export default {
    components: { WxcCheckbox, WxcCheckboxList, WxcSearchbar, WxcRadio,WxcMinibar ,WxcDialog },
    data:{  
        list:  [],
        member_id : '',
        member_name : '未选择',
        area : '',
        addr : '',
        exe_link : ''
    } ,
     methods: {
      returnTop(){
        var nav = weex.requireModule('navigator') ;
        nav.push('./execute.js');
      }
     },
     created : function() {
      var that = this;

      var navigator = weex.requireModule('navigator');
      var param = navigator.param();
      that.member_id = param.member_id;
      that.member_name = param.member_name;
      that.area = param.area;
      that.addr = param.addr;
      that.exe_link = param.exe_link;
      var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.select_question_answers" }
          , { 'name': "app_key", 'value': "b2bapp" }
          , { 'name': "format", 'value': "json" }
          , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
          , { 'name': "v", 'value': '2.0' }
          , { 'name': "detail_id", 'value': param.detail_id }];
      Http.post(dataparam,function(res){
          
        var alist = [];
        that.list = res.data;
        for(var index in that.list){
          var obj = new Object();
          obj['type_id'] = that.list[index].type_id;
          obj['ques_desc'] = that.list[index].ques_desc;
          if(that.list[index].type_id == "1" || that.list[index].type_id == "2" || that.list[index].type_id == "3"){
              obj['answer'] = that.list[index].answer;
          }else if (that.list[index].type_id == "4" ) {
              obj['answer'] = that.list[index].answer.split("||");
          }else if (that.list[index].type_id == "5" ) {
              obj['answer'] = that.list[index].answer.split("||");
              for(var index in obj['answer']){
                obj['answer'][index] = "http://47.98.186.145/api/web/static/photo/" + obj['answer'][index] + ".jpg";
              }
          }
          alist[alist.length] = obj;
        } 
        console.log(alist);
        that.list = alist;
          
      });
      
      var alist = [];

      for(var index in that.list){
        var obj = new Object();
        obj['type_id'] = that.list[index].type_id;
        obj['ques_desc'] = that.list[index].ques_desc;
        if(that.list[index].type_id == "1" || that.list[index].type_id == "2" || that.list[index].type_id == "3"){
            obj['answer'] = that.list[index].answer;
        }else if (that.list[index].type_id == "4" ) {
            obj['answer'] = that.list[index].answer.split("||");
        }else if (that.list[index].type_id == "5" ) {
            obj['answer'] = that.list[index].answer.split("||");
            for(var index in obj['answer']){
              obj['answer'][index] = "http://47.98.186.145/api/web/static/photo/" + obj['answer'][index] + ".jpg";
            }
        }
        alist[alist.length] = obj;
      } 
      console.log(alist);
      that.list = alist;

      globalEvent.addEventListener("onPageInit", function(param) { 
          page.enableBackKey(false);
          page.setBackKeyCallback(function() {
            var param={};
            param.member_id = that.member_id;
            param.member_name = that.member_name;
            param.area = that.area;
            param.addr = that.addr;
            nav.pushParam(that.exe_link,param);
        });
      });
    }

  };
</script>
