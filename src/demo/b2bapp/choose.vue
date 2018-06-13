<template>
  <div class="item-container" >
  <div class="c"></div>
  <div class="bar">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon" @click="returnTop"></image>
        <text class="title">门店选择</text>
  </div>
  <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="icon"
                :tab-page-height="tabPageHeight"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
    <div class="item-container" key="1">
      <scroller>

        <div class="gird_column">
          <div class="d">
            <image src="http://47.98.186.145/api/web/static/img/map.png" class="img3"></image>
          </div>

          <div v-for = "(item,index,key) in list">

            <div class="gird_row" @click="jump(item.sales_staff_id,item.member_id,item.member_name,item.area,item.addr,$event)">

              <div>
                <text class="text2">{{item.member_name}}</text>
                <text class="text5">{{item.area}}</text>
                <text class="text5">{{item.addr}}</text>
                <text class="text6">完成度： {{item.visited_count}} / {{item.visit_count}}</text>
              </div>

              <div v-if="item.weekwork == '本周已完成'" class="item_right">
                <div>
                  <image src="http://47.98.186.145/api/web/static/img/tick.png" class="img2"></image>
                </div>
              </div>
              <div v-else-if="item.daywork == '今日已完成'" class="item_right">
                <div class="item_right">
                  <image src="http://47.98.186.145/api/web/static/img/tick.png" class="img2"></image>
                </div>
              </div>
              <div v-else></div>

            </div>

            <div class="h"></div>
          </div>

        
        </div>

      </scroller>
    </div>
      
    <div class="item-container" key="2">
      <scroller>

        <div class="gird_column">

          <div v-for = "(item,index,key) in visitedlist">

            <div class="gird_row" @click="jump_b(item.sales_staff_id,item.member_id,item.member_name,item.area,item.addr,$event)">

              <div>
                <text class="text2">{{item.member_name}}</text>
                <text class="text5">{{item.area}}</text>
                <text class="text5">{{item.addr}}</text>
                <text class="text6">完成度： {{item.visited_count}} / {{item.visit_count}}</text>
              </div>

              <div v-if="item.weekwork == '本周已完成'" class="item_right">
                <div>
                  <image src="http://47.98.186.145/api/web/static/img/tick.png" class="img2"></image>
                </div>
              </div>
              <div v-else-if="item.daywork == '今日已完成'" class="item_right">
                <div class="item_right">
                  <image src="http://47.98.186.145/api/web/static/img/tick.png" class="img2"></image>
                </div>
              </div>
              <div v-else></div>

            </div>

            <div class="h"></div>
          </div>

        
        </div>

      </scroller>
    </div>

  </wxc-tab-page>
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
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }

  .border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }

  .cell {
    background-color: #ffffff;
  }

  .content{
    width:750px;
    height:300px;
    border-bottom-width:1px;
    align-items: center;
    justify-content: center;
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
    align: center;
    margin: 1px;
  }
  
  .gird_column {
    flex-direction: column;
    width: 750px;
  }
  
  .d {
    height: 300px;
    width: 750px
  }

  .img3{
    height: 300px;
    width: 750px
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
    font-size: 40px;
    color: white;
  }
  
  .text2 {
    color: #2c2c2c;
    font-size: 30px;
    margin-left: 15px;
  }
  
  .text5 {
    color: #707070;
    font-size: 30px;
    margin-left: 15px;
    margin-top: 3px;
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

  .text6 {
    margin-left: 15px;
    color: #8B1A1A;
    font-size: 35px;
    font-weight: bold;
  }
  
  .img {
    width: 45px;
    height: 45px;
  }
  
  .img2 {
    width: 90px;
    height: 90px;
    margin-top: 10px;
    margin-right: 25px;
  }
  
  .item_right {
    flex: 1;
    align-items: flex-end;
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
  import Config from './config01'
  import Http from './http';
  
  const modal = weex.requireModule('modal');
  
  const pref = weex.requireModule("pref");
  const globalEvent = weex.requireModule('globalEvent');
  const page = weex.requireModule("page");
  const nav = weex.requireModule('navigator');
  export default {
    components: { WxcTabPage, WxcPanItem },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles,
      tabList: [],
      demoList: [1, 2],
      list: [],
      visitedlist:[]
    }),
    created () {
      var that = this;
         var dataparam = [{ 'name': "method", 'value': "b2bapp.sales.choose_member" }
             , { 'name': "app_key", 'value': "b2bapp" }
             , { 'name': "format", 'value': "json" }
             , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
             , { 'name': "v", 'value': '2.0' }
             , { 'name': "sales_staff_id", 'value': pref.get('user').sales_staff_id }];
           Http.post(dataparam,function(res){
            var reslist = res.data;
            var tranList = JSON.parse("[]");
            var vList = JSON.parse("[]");
            for(var index in reslist){
              if (reslist[index].weekwork == "本周已完成") {
                vList[vList.length] = reslist[index];
                reslist[index].daywork = "已处理";
              }
            }

            console.log(reslist);
            for(var index in reslist){
              if (reslist[index].daywork == "今日已完成") {
                tranList[tranList.length] = reslist[index];
              }
            }

            for(var index in reslist){
              if (reslist[index].daywork == "今日未完成") {
                tranList[tranList.length] = reslist[index];
              }
            }

            that.list = tranList;
            that.visitedlist = vList;
            console.log(tranList);
          });

        globalEvent.addEventListener("onPageInit", function(param) { 
          page.enableBackKey(false);
          page.setBackKeyCallback(function() {
            nav.push('index.js');
          });
        });
    },
    methods: {
      wxcTabPageCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        /* Unloaded tab analog data request */
        if (!Utils.isNonEmptyArray(self.tabList[index])) {
          setTimeout(() => {
            Vue.set(self.tabList, index, self.demoList);
          }, 100);
        }
      },
      wxcPanItemPan (e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      },
      jump(sales_staff_id,member_id,member_name,area,addr,event) {
        var nav = weex.requireModule('navigator') ;
        var param={};
        param.sales_staff_id = sales_staff_id;
        param.member_id = member_id;
        param.member_name = member_name;
        param.area = area;
        param.addr = addr;
        nav.pushParam('./execute.js',param);
      },
      jump_b(sales_staff_id,member_id,member_name,area,addr,event) {
        var nav = weex.requireModule('navigator') ;
        var param={};
        param.sales_staff_id = sales_staff_id;
        param.member_id = member_id;
        param.member_name = member_name;
        param.area = area;
        param.addr = addr;
        nav.pushParam('./executed.js',param);
      }
    }
  };
</script>