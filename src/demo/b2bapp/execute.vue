<template>
  <div class="item-container" >
  <div class="c"></div>
  <div class="bar">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon" @click="returnTop"></image>
        <text class="title">售点执行</text>
  </div>
  <div class="row">
      <text class="t1">当前门店：{{member_name}}</text>
  </div>
  
        <div class="gird_column">
          <div v-for = "(item,index,key) in list01">
            <div class="gird_row" @click="jump(item.task_link,item.detail_id,item.performance,$event)" >
              <image :src="'http://47.98.186.145/api/web/static/img/'+item.icon_url" class="img1"></image>
              <text class="text2">{{item.task_name}}</text>
              <div class="item_right">
                <text class="text3">{{item.performance}}</text>
              </div>
              <image src="http://47.98.186.145/api/web/static/img/next.png" class="img2"></image>
            </div>
          </div>
        </div>
  </div>
</template>

<style scoped>
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
  .gird_row {
    align-items: center;
    flex-direction: row;
    width: 750px;
    background-color: #e6e6e6;
    height: 120px;
    align: center;
    margin: 1px;
  }
  
  .gird_column {
    flex-direction: column;
    width: 750px;
  }
  
  .item_right {
    flex: 1;
    align-items: flex-end;
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
    color: #2c2c2c;
    font-size: 30px;
  }
  
  .text3 {
    color: #2c2c2c;
    font-size: 30px;
  }
  
  .img {
    width: 45px;
    height: 45px;
  }
  
  .img1 {
    width: 60px;
    height: 60px;
    margin-left: 25px;
    margin-right: 25px;
  }
  
  .img2 {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
  
  .item-container {
    width: 750px;
    align-items: center;
    justify-content: bottom;
  }
  .c{
    width: 750px;
    height: 40px;
    background-color: #8B7D6B;
    opacity:0.5;
  }
</style>
<script>
  const dom = weex.requireModule('dom');
  import { WxcPanItem, Utils, BindEnv } from 'weex-ui';
  import Http from './http';
  const globalEvent = weex.requireModule('globalEvent');
  const page = weex.requireModule("page");
  const nav = weex.requireModule('navigator');
  export default {
    components: { WxcPanItem },
    data: () => ({
      list:  [],
      list01:[],
      task_items:[],
      member_id : '',
      member_name : '未选择',
      area : '',
      addr : ''
    }),
    created () {
      var that = this;
      
      var alist = [];
      //先构建列头
      //查询为空的情况下
      
 
        var navigator = weex.requireModule('navigator') ;
        var param=navigator.param();
        that.member_id = param.member_id;
        that.member_name = param.member_name;
        that.area = param.area;
        that.addr = param.addr;
        var modal=weex.requireModule("modal")

        var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.select_day_task" }
             , { 'name': "app_key", 'value': "b2bapp" }
             , { 'name': "format", 'value': "json" }
             , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
             , { 'name': "v", 'value': '2.0' }
             , { 'name': "member_id", 'value': that.member_id }
             ];
        Http.post(dataparam,function(res){ 
          that.list = res.data;
          var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.select_task_item" }
             , { 'name': "app_key", 'value': "b2bapp" }
             , { 'name': "format", 'value': "json" }
             , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
             , { 'name': "v", 'value': '2.0' }
          ];
          Http.post(dataparam,function(res){ 
            that.task_items = res.data;
            var num = that.list.length;
              if (that.list.length != 0) {
                  for(var index1 in that.task_items){
                    var i = 0;
                    for(var index2 in that.list){
                        i++;
                        if (that.task_items[index1].id == that.list[index2].task_id  ) {
                            var obj = new Object();
                            obj["task_name"] = that.task_items[index1].task_name;
                            obj["icon_url"] =  that.task_items[index1].icon_url;
                            obj["task_link"] =  that.task_items[index1].task_link;
                            obj["performance"] = "已完成";
                            obj["detail_id"] = that.list[index2].id;
                            alist[alist.length] = obj;
                            break;
                        }
                        if (i == num) {
                            var obj = new Object();
                            obj["task_name"] = that.task_items[index1].task_name;
                            obj["icon_url"] =  that.task_items[index1].icon_url;
                            obj["task_link"] =  that.task_items[index1].task_link
                            obj["performance"] = "未完成";
                            obj["detail_id"] = "null";
                            alist[alist.length] = obj;
                        }
                    }
                  }
              }else{
                
                for(var index in that.task_items){
                  var obj = new Object();
                  obj["task_name"] = that.task_items[index].task_name;
                  obj["icon_url"] =  that.task_items[index].icon_url;
                  obj["task_link"] =  that.task_items[index].task_link
                  obj["performance"] = "未完成";
                  obj["detail_id"] = "null";
                  alist[alist.length] = obj;
                }
              }

              

              that.list01 = alist;

          });
        });
        globalEvent.addEventListener("onPageInit", function(param) { 
          page.enableBackKey(false);
          page.setBackKeyCallback(function() {
            nav.push('choose.js');
          });
        });
      
    },
    methods: {
      jump(task_link,detail_id,performance,event){
        // var nav = weex.requireModule('navigator') ;
        // nav.push('./' + task_link + '.js')
        if(performance == '已完成'){
          var nav = weex.requireModule('navigator') ;
          var param={};
          param.member_id = this.member_id;
          param.member_name = this.member_name;
          param.area = this.area;
          param.addr = this.addr;
          param.detail_id = detail_id;
          param.exe_link = 'execute.js';
          nav.pushParam('./' + task_link + 'ed.js',param);
        }else{
          var nav = weex.requireModule('navigator') ;
          var param={};
          param.member_id = this.member_id;
          param.member_name = this.member_name;
          param.area = this.area;
          param.addr = this.addr;
          nav.pushParam('./' + task_link + '.js',param);
        }
      }
    }
  };
</script>