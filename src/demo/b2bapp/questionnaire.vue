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

      <wxc-dialog title="调查问卷"
                content="您确认提交吗？"
                :show="show"
                :single="false"
                :is-checked="isChecked"
                @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
                @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked"
                >
    </wxc-dialog>
    <scroller>
      <div v-for = "(item,index,key) in list">
        <div v-if="item.type_id == '3'">
    <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">   {{item.ques_remark}}</text>
          <wxc-radio :list="item.ques_option" @wxcRadioListChecked="wxcRadioListChecked(item.ques_id,$event.value)"></wxc-radio>
        </div>
        <div v-else-if="item.type_id == '4'">
    <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">   {{item.ques_remark}}</text>
          <wxc-checkbox-list :list="item.ques_option" @wxcCheckBoxListChecked="wxcCheckBoxListChecked(item.ques_id,$event.checkedList)"></wxc-checkbox-list>
        </div>
        <div v-else-if="item.type_id == '1'">
  <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">   {{item.ques_remark}}</text>
          <textarea class="textarea" @input="onchange_textarea(item.ques_id,$event.value)"></textarea>
        </div>
  <div v-else-if="item.type_id == '2'">
     <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">   {{item.ques_remark}}</text>
     <input type="number" placeholder="请输入数字" class="input" @input="onchange_item(item.ques_id,$event.value)"/>
  </div>

  <div v-else-if="item.type_id == '5'">
     <text class="text2">  {{index+1}}. {{item.ques_desc}}</text>
          <text class="text3">   {{item.ques_remark}}</text>
     <div class="p1">
      <div class="p2"><image class="img6" :src="photos[item.ques_id][0]" @click="takingPictures(item.ques_id,0)"></image></div>
      <div class="p2"><image class="img6" :src="photos[item.ques_id][1]" @click="takingPictures(item.ques_id,1)"></image></div>
      <div class="p2"><image class="img6" :src="photos[item.ques_id][2]" @click="takingPictures(item.ques_id,2)"></image></div>
    </div>
  </div>
        <div v-else>
          Not A/B/C
        </div>
      </div>
    </scroller>
    <div class="d1">
        <div class="d2" @click="openDialog"><text class="text">提交问卷</text></div>
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
    font-size:30;
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
        list: [],
        answers: [],
        photos: [],
        show: false,
        isChecked: false,
        num:0,
        member_id : '',
        member_name : '未选择',
        area : '',
        addr : ''
    } ,
     methods: {
        wxcRadioListChecked(ques_id,value){
          var that = this;
          console.log("题号为：" + ques_id + "----value值为：" + value);
          for(var index in that.answers){
              if(that.answers[index].ques_id == ques_id){
                that.answers[index].answer = value;
              }
          }
        },
        wxcCheckBoxListChecked(ques_id,value){
          var that = this;
          console.log("题号为：" + ques_id + "----value值为：" + value);
          for(var index in that.answers){
              if(that.answers[index].ques_id == ques_id){
                that.answers[index].answer = value.join("||");
              }
          }
        },
        onchange_textarea(ques_id,value){
          var that = this;
          console.log("题号为：" + ques_id + "----value值为：" + value);
          for(var index in that.answers){
              if(that.answers[index].ques_id == ques_id){
                that.answers[index].answer = value;
              }
          }
        },
        onchange_item(ques_id,value){
          var that = this;
          console.log("题号为：" + ques_id + "----value值为：" + value);
          for(var index in that.answers){
              if(that.answers[index].ques_id == ques_id){
                that.answers[index].answer = value;
              }
          }
        },
      openDialog () {
        this.show = true;
      },
      wxcDialogCancelBtnClicked () {
      //此处必须设置，组件为无状态组件，自己管理
        this.show = false;
      },
      wxcDialogConfirmBtnClicked () {
        var that = this;
      //此处必须设置，组件为无状态组件，自己管理
        this.show = false;

        var filestr = "file";
        var number = 0;
        var resdata='{';
        for(var key in that.photos){
          for(var index in that.photos[key]){
              number += 1;
              resdata +="\""+filestr+number+"\":" + "\"" + that.photos[key][index] + "\",";


            // var key01 = key;
            // var index01 = index;
            // Http.postPhoto(that.photos[key][index],function(res){
            //   if(index01 == 1){
            //       modal.toast({message: "====="+ key01 + "=============" +index01+"========="+res, duration: 3});
            //   } 
            //   that.photos[key01][index01] = res;
            //   number = number - 1;
            //   if (number == 0) {
            //     for(var index in that.answers){
            //       for (var key in that.photos) {
            //         if (that.answers[index].ques_id == key) {
            //             that.answers[index].answer = that.photos[key].join("||");
            //         }
            //       }
            //     }
            //     var str1 = JSON.stringify(that.answers);
            //     str1 = str1.replace("[", "");
            //     str1 = str1.replace("]", "");
            //     str1 = str1.replace(/\"/g, "\'");
            //   }
            //});
          }
        }
        resdata = resdata.substr(0 , resdata.length-1);
        resdata += '}';
        var param=JSON.parse(resdata);
        Http.postPhoto(number,param,function(res){
          var splstr = res.split("|");
          var i = 0;
          for(var key in that.photos){
            for(var index in that.photos[key]){
                that.photos[key][index] = splstr[i];
                i++;
            }
          }
          for(var index in that.answers){
            for (var key in that.photos) {
              if (that.answers[index].ques_id == key) {
                  that.answers[index].answer = that.photos[key].join("||");
              }
            }
          }
          var str1 = JSON.stringify(that.answers);
          str1 = str1.replace("[", "");
          str1 = str1.replace("]", "");
          str1 = str1.replace(/\"/g, "\'");
          //modal.toast({message:str1});
          
          var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.question_answers" }
          , { 'name': "app_key", 'value': "b2bapp" }
          , { 'name': "format", 'value': "json" }
          , { 'name': "datetime", 'value': Http.formatTime(new Date())}
          , { 'name': "v", 'value': '2.0' }
          , { 'name': "member_id", 'value': that.member_id }
          , { 'name': "creator", 'value': "wyc" }
          , { 'name': "json_list", 'value': str1 }
          ];
          Http.post(dataparam,function(res){
            modal.toast({message:res});
            var param={};
            param.member_id = that.member_id;
            param.member_name = that.member_name;
            param.area = that.area;
            param.addr = that.addr;
            nav.pushParam('execute.js',param);

          });
        });
      },
      takingPictures(ques_id,index){
        var that = this;
        console.log(ques_id+"======"+index);
        photo.openCamera(1500,2000,'#000000',function(e){
            that.photos[ques_id][index] = e.path;
            var str = that.list[0].ques_desc;
            if(str.substr(str.length-1,1) == " "){
              str = str.substr(0 , str.length-1);
            }else{
              str += " ";
            }
            that.list[0].ques_desc = str;
        });
      },
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

      var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.selectList_question" }
          , { 'name': "app_key", 'value': "b2bapp" }
          , { 'name': "format", 'value': "json" }
          , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
          , { 'name': "v", 'value': '2.0' }
          , { 'name': "tmp_id", 'value': 1 }];
        Http.post(dataparam,function(res){
          that.list = res.data;
          var answerList = JSON.parse("[]");
          var photoList = JSON.parse("[]");
          for(var index in that.list){
            var obj = new Object();
            obj["ques_id"] = that.list[index].ques_id;
            obj["answer"] = "";
            answerList[answerList.length] = obj;
          }
          var obj = new Object();
          var src = "http://47.98.186.145/api/web/static/img/photo.png";
          for(var index in that.list){
            if(that.list[index].type_id == "5"){
              that.num += 1; 
              obj[that.list[index].ques_id] = [src,src,src];
            }
          }
          that.answers = answerList;
          that.photos = obj;
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
          
    }

  };
</script>
