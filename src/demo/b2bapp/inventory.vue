<template>
  <div class="container" :style="{ height: height }">

      
      <!-- <wxc-minibar background-color="black">
        <image src="http://47.98.186.145/api/web/static/img/back.png" slot="left" 
          style="height: 60px;width: 60px;"></image>
            <text style="font-size: 40px;color:white" slot="middle">库存管理</text>
      </wxc-minibar> -->
      <div class="c"></div>

      <div class="bar">
        <image src="http://47.98.186.145/api/web/static/img/return.png" class="img10 icon" @click="returnTop"></image>
        <text class="title">库存管理</text>
      </div>

      
      <wxc-searchbar ref="wxc-searchbar"
                     @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                     @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                     @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                     @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
                     @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                     @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>

      <scroller>
        <div class="drink">

          <div class="a1">
            <image src="http://47.98.186.145/api/web/static/img/beer01.png" class="img"></image>
          </div>

          <div class="a2">

            <div>
              <text class="t3">Goose Island 鹅岛啤酒Sofie</text>
            </div>

            <div>
              <text class="t4">规格：355ml 4*6瓶</text>
            </div>

            <div>
              <text class="t5">仓库库存：5箱</text>
            </div>

            <div>
              <text class="t6">车载库存：1箱</text>
            </div>

          </div>

          <div class="a3">
            
              <image src="http://47.98.186.145/api/web/static/img/redact.png" class="img1"></image>
            
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
  .img{
    width:220;
    height:220;
    margin-left: 10;
  }
  .img1{
    width:110;
    height:110;
    margin: 40;
  }
  .drink{
    flex-direction: row;
    height:220;
  }
  .a1{
    flex:3.2;
  }
  .a2{
    flex:4;
  }
  .a3{
    flex:2.5;
  }
  .rank {
    background-color:#6184aa;
    padding-top:10px;
    padding-bottom:10px;
  }
  .row {
    flex-direction: row;
  }
  .t{
    text-align:center;
    color:white;
    font-size:20;
    flex:1;
  }
  .t2{
    align-items: center;
    text-align:center;
    color:white;
    margin-top:8;
    font-size:30;
    font-weight: bold;
  }
  .t3{
    color:black;
    margin-top:30;
    font-size:25;
  }
  .t4{
    color:gray;
    margin-top:8;
    font-size:25;
  }
  .t5{
    color:black;
    margin-top:8;
    font-size:30;
    font-weight: bold;
  }
  .t6{
    color:black;
    margin-top:8;
    font-size:30;
    font-weight: bold;
  }
  .c{
    width: 750px;
    height: 40px;
    background-color: #8B7D6B;
    opacity:0.5;
  }
</style>

<script>
  import { WxcMinibar,WxcSearchbar } from 'weex-ui';
  const modal = weex.requireModule('modal');

  export default {
    components: { WxcMinibar,WxcSearchbar },
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        
      },
      returnTop(){
            var nav = weex.requireModule('navigator') ;
            nav.push('./index.js');
      }
    }
  };
</script>

