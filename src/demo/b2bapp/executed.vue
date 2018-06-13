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
  <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="icon"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
    <div class="item-container" v-for = "(item_a,index_a,key_a) in list01">
        <div class="gird_column">
          <div v-for = "(item_b,index_b,key_b) in item_a">
            <div class="gird_row" @click="jump(item_b.task_link,item_b.detail_id,item_b.performance,$event)">
              <image :src="'http://47.98.186.145/api/web/static/img/'+item_b.icon_url" class="img1"></image>
              <text class="text2">{{item_b.task_name}}</text>
              <div class="item_right">
                <text class="text3">{{item_b.performance}}</text>
              </div>
              <image src="http://47.98.186.145/api/web/static/img/next.png" class="img2"></image>
            </div>
          </div>
        </div>
    </div>
      
    <!-- <div class="item-container">
      
    </div> -->


  </wxc-tab-page>
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
  import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui';
  import Http from './http';
  const globalEvent = weex.requireModule('globalEvent');
  const page = weex.requireModule("page");
  const nav = weex.requireModule('navigator');
  export default {
    components: { WxcTabPage, WxcPanItem },
    data: () => ({
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        height: 70,
        fontSize: 40,
        hasActiveBottom: true,
        activeBottomColor: '#FFC900',
        activeBottomHeight: 6,
        activeBottomWidth: 120,
        textPaddingLeft: 10,
        textPaddingRight: 10
      },
      list:  [],
      tabTitles: [],
      list01:[],
      task_items:[],
      member_id : '',
      member_name : '未选择',
      area : '',
      addr : ''
    }),
    created () {
      //需要的可遍历的有
      //icon_url :
      //task_name :
      //performance : true/false
      //以下是在点击事件中的
      //当前任务id : id/no
      var that = this;
      //var alist = that.list;
      //先行判断alist有没有值，如果是空的，则说明是第一次

      
      //如果是满任务不用查，如果不是满的，无论如何都要先查一次今日任务模板
      //考虑任务完成一半的情况，他的模板又是什么
      //先假设一种模板 模板的数量为4
      //如果为空则 未完成，否则已完成
      //让list与模板相同
      //模板的[0]插入每个的[0] 模板的[1] 插入每个的 [1]
      //这样说模板必查
      
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
      //console.log("天花板"+week);
      //var week = Math.round(totalDays / 7);
      //console.log("今天是本年第"+totalDays+"天，第"+week+"周");

      var day1 = new Date();
      day1.setTime(day1.getTime());
      var year = day1.getFullYear(); //得到年份
      var month = day1.getMonth() + 1;//得到月份
      var date = day1.getDate();//得到日期
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      var s1 = year + "-" + month + "-" +date;
      
      var tabTitle_1 = [];
      var arr = [];
      var alist = [];
      var iten_ids = "";
      //先构建列头
      //查询为空的情况下
      
      
        var navigator = weex.requireModule('navigator') ;
        var param=navigator.param();
        that.member_id = param.member_id;
        that.member_name = param.member_name;
        that.area = param.area;
        that.addr = param.addr;
        var modal=weex.requireModule("modal")
        //modal.toast({message: param.sales_staff_id + "=========" + param.member_id})

        var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.select_step_task" }
             , { 'name': "app_key", 'value': "b2bapp" }
             , { 'name': "format", 'value': "json" }
             , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
             , { 'name': "v", 'value': '2.0' }
             , { 'name': "member_id", 'value': param.member_id }
             , { 'name': "week", 'value': week }
             ];
        Http.post(dataparam,function(res){ 
          that.list = res.data;
          // modal.toast({message: param.member_id + "=========" + week })
          var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.select_task_item" }
             , { 'name': "app_key", 'value': "b2bapp" }
             , { 'name': "format", 'value': "json" }
             , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
             , { 'name': "v", 'value': '2.0' }
          ];
          Http.post(dataparam,function(res){ 
            that.task_items = res.data;

              if (that.list.length != 0) {

                for(var index in that.list){
                  if (arr.indexOf(that.list[index].in_time) == -1) {
                      arr[arr.length] = that.list[index].in_time;
                  }
                }

                for(var index in arr){
                  var obj = new Object();
                  obj["title"] = arr[index];
                  tabTitle_1[tabTitle_1.length] = obj;
                }
                var num = that.list.length;
                //可以在此位置构建循环遍历
                for(var index1 in arr){
                  var arr_d = [];
                  aaa:
                  for(var index2 in that.task_items){
                    var i = 0;
                    for(var index3 in that.list){
                        i++;
                        if (that.list[index3].in_time == arr[index1] && that.list[index3].task_id == that.task_items[index2].id ) {
                            var obj = new Object();
                            obj["task_name"] = that.task_items[index2].task_name;
                            obj["icon_url"] =  that.task_items[index2].icon_url;
                            obj["task_link"] =  that.task_items[index2].task_link;
                            obj["detail_id"] =  that.list[index3].id;
                            obj["performance"] = "已完成";
                            arr_d[arr_d.length] = obj;
                            break;
                        }
                        if (i == num) {
                            var obj = new Object();
                            obj["task_name"] = that.task_items[index2].task_name;
                            obj["icon_url"] = that.task_items[index2].icon_url;
                            obj["task_link"] = that.task_items[index2].task_link;
                            obj["detail_id"] = obj["task_link"] =  that.task_items[index2].task_link;
                            obj["detail_id"] = "null";
                            obj["performance"] = "未完成";
                            arr_d[arr_d.length] = obj;
                        }
                    }
                  }
                  alist[alist.length] = arr_d;
                }

                //console.log(alist);

                // if (that.list[0].visit_count == that.list[0].visited_count) {
                //  //不做处理
                // }else{
                //    if(arr.indexOf(s1) == -1){
                //       var obj = new Object();
                //       obj["title"] = s1;
                //       tabTitle_1[tabTitle_1.length] = obj;
                //       var arr_b = [];
                //       for(var index in that.task_items){
                //         var obj = new Object();
                //         obj["task_name"] = that.task_items[index].task_name;
                //         obj["icon_url"] =  that.task_items[index].icon_url;
                //         obj["performance"] = "未完成";
                //         arr_b[arr_b.length] = obj;
                //       }
                //       alist[alist.length] = arr_b;
                //    }else{
                //       //因今天已经在操作，故不作处理
                //    }
                // }
              }else{
                // var obj = new Object();
                // obj["title"] = s1;
                // tabTitle_1[tabTitle_1.length] = obj;
                // var arr_b = [];
                // for(var index in that.task_items){
                //   var obj = new Object();
                //   obj["task_name"] = that.task_items[index].task_name;
                //   obj["icon_url"] =  that.task_items[index].icon_url;
                //   obj["performance"] = "未完成";
                //   arr_b[arr_b.length] = obj;
                // }
                // alist[alist.length] = arr_b;
              }

              that.tabTitles = tabTitle_1;
              //console.log(that.tabTitles);

              that.list01 = alist;

          });
        });

      
      
      

      // var globalEvent = weex.requireModule('globalEvent') ;
      // globalEvent.addEventListener("onPageInit", function (e) {

      //   var modal = weex.requireModule('modal') ;
      //   modal.toast({message:'home init'})

      // });
      // that.$refs['wxc-tab-page'].setPage(that.tabTitles.length - 1);

      globalEvent.addEventListener("onPageInit", function(param) { 
        page.enableBackKey(false);
        page.setBackKeyCallback(function() {
          nav.push('choose.js');
        });
      });

            
    },
    //ready: function () {
      //this.$refs['wxc-tab-page'].setPage(this.tabTitles.length - 1);
      // var d1 = new Date();
      // var d2 = new Date();
      // d2.setMonth(0);
      // d2.setDate(1);
      // var rq = d1-d2;
      // console.log(d1);
      // console.log(d2);
      // //rq = rq - 24*60*60*1000;
      // console.log(rq);
      // var s1 = Math.ceil(rq/(24*60*60*1000));
      // var s2 = Math.ceil(s1/7);
      // console.log("今天是本年第"+s1+"天，第"+s2+"周");

      // var time,week,checkDate = new Date(new Date());
      // checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      // time = checkDate.getTime();
      // checkDate.setMonth(0);
      // checkDate.setDate(1);
      // var days = (time - checkDate) / 86400000;
      // week=Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      // console.log("今天是本年第"+days+"天，第"+week+"周");

      // var totalDays = 0;
      // var now = new Date();
      // var years = now.getYear()
      // if (years < 1000)
      //     years += 1900
      // var days = new Array(12);
      // days[0] = 31;
      // days[2] = 31;
      // days[3] = 30;
      // days[4] = 31;
      // days[5] = 30;
      // days[6] = 31;
      // days[7] = 31;
      // days[8] = 30;
      // days[9] = 31;
      // days[10] = 30;
      // days[11] = 31;
      
      // //判断是否为闰年，针对2月的天数进行计算
      // if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
      //     days[1] = 29
      // } else {
      //     days[1] = 28
      // }
      // if (now.getMonth() == 0) {
      //     totalDays = totalDays + now.getDate();
      // } else {
      //     var curMonth = now.getMonth();
      //     for (var count = 1; count <= curMonth; count++) {
      //         totalDays = totalDays + days[count - 1];
      //     }
      //     totalDays = totalDays + now.getDate();
      // }
      // //得到第几周
      // var a =  totalDays / 7;
      // console.log("直接打印"+a);
      // var b =  Math.ceil(totalDays / 7);
      // console.log("天花板"+b);
      // var week = Math.round(totalDays / 7);
      // console.log("今天是本年第"+totalDays+"天，第"+week+"周");
      

    //},
    methods: {
      wxcTabPageCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        //console.log(e); 
      },
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
          param.exe_link = 'executed.js';
          nav.pushParam('./' + task_link + 'ed.js',param);
        }else{
          // var nav = weex.requireModule('navigator') ;
          // var param={};
          // param.member_id = this.member_id;
          // param.member_name = this.member_name;
          // param.area = this.area;
          // param.addr = this.addr;
          // nav.pushParam('./' + task_link + '.js',param);
        }
      }
    }
  };
</script>