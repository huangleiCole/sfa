<template>
  <div>
    <div class="c"></div>
    <div class="a5" @click='click_photo'>
      <text class="t2">销售员登陆</text>
    </div>
    
    <img src="http://47.98.186.145/sales/web/images/passportimg.jpg" class="img">
    
    <div class="a">
      <div class="a1">
        <text class="t1">   用户名:</text>
      </div>
      <div class="a2">
        <div class="a4"></div>
      </div>
      <div class="a3">
        <input type="text" placeholder="填写用户名" class="input" @input="onchange_username($event.value)"/>
      </div>
    </div>
  
    <div class="a">
      <div class="a1">
        <text class="t1">   密 码:</text>
      </div>
      <div class="a2">
        <div class="a4"></div>
      </div>
      <div class="a3">
        <input type="password" placeholder="填写密码" class="input" @input="onchange_password($event.value)"/>
      </div>
    </div>

    <div class = "a6">
      <wxc-checkbox class = "a7"></wxc-checkbox>
      <div class="a8">
          <div>阅读并同意《</div><div><text class="t3">用户协议</text></div><div>》</div>
      </div>
    </div>

    <div class="a9" @click='click_login'>
      <text class="t4">登录</text>
    </div>
    
  </div>
  
</template>

<style scoped>
  .a{
    width: 720px;
    height:80px;
    border-style: solid;
    border-width: 2px;
    border-color: #C5C1AA;
    margin-left: 15px;
    margin-top: 20px;
    flex-direction: row;
    border-radius:8px;
  }
  .input {
    border-color: #C5C1AA;
    font-size: 30px;
    height: 45px;
    width: 500px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .a1 {
    flex-direction: row;
    align-items: center;
    flex: 1.2;
  }
  .a2 {
    flex: 0.2;
  }
  .a3 {
    flex-direction: row;
    align-items: center;
    flex: 4;
  }
  .a4 {
    width: 1px;
    height: 62px;
    margin-top: 7px;
    border-style: solid;
    border-width: 1px;
    background-color: #C5C1AA;
    border-color: #C5C1AA;
  }
  .a5 {
    width: 750px;
    height: 90px;
    background-color: rgb(208,36,60);
    flex-direction: row;
    align-items: center;
  }
  .a6 {
    width: 750px;
    height:80px;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
  }
  .a7 {
    flex: 1;
  }
  .a8 {
    flex: 14;
    flex-direction: row;
    margin-top: 6px; 
  }
  .a9 {
    width: 730px;
    height:80px;
    margin-left: 10px;
    margin-top: 20px;
    flex-direction: row;
    border-radius:10px;
    align-items: center;
    background-color: rgb(208,36,60);
  }

  .img{
    margin-top: 80px;
    width: 750px;
    height: 400px;
  }
  .t1{
    text-align: center;
    flex: 1;
    font-size: 30px;
    color: #8E8E8E;
  }
  .t2{
    text-align: center;
    flex: 1;
    font-size: 35px;
    color: white;
  }
  .t3{
    color: #3A5FCD;
  }
  .t4{
    text-align: center;
    flex: 1;
    font-size: 33px;
    color: white;
  }
  .c{
      width: 750px;
      height: 40px;
      background-color: #8B7D6B;
      opacity:0.5;
  }
</style>

<script>
  import { WxcCheckbox,WxcCheckboxList } from 'weex-ui'
  const modal = weex.requireModule('modal');
  const pref = weex.requireModule("pref");
  const navigator = weex.requireModule('navigator') ;
  import Http from './http';

  export default {
    components: { WxcCheckbox, WxcCheckboxList },
    data: {
      username : "",
      password : ""
    },
    created () {
      var user =  pref.get('user');
      if(user.length != 0){
        navigator.push('./index.js');
      }
    },
    methods: {
      click_login(){
        var that = this;
        var username_str = that.username.replace(/^\s+|\s+$/g,"");
        var password_str = that.password.replace(/^\s+|\s+$/g,"");
        if (that.username == "" || that.password == "") {
          modal.toast({message: "账号或密码不得为空!"});
        }

        var dataparam = [{ 'name': "method", 'value': "sfa.sales.login" }
          , { 'name': "app_key", 'value': "b2bapp" }
          , { 'name': "format", 'value': "json" }
          , { 'name': "datetime", 'value': Http.formatTime(new Date()) }
          , { 'name': "v", 'value': '2.0' }
          , { 'name': "login", 'value': username_str }
          , { 'name': "password", 'value': password_str }
          ];
        Http.post(dataparam,function(res){
          var loc = res.data;
          var loc1=res;
          if(loc == "无效的登录名或密码"){
            modal.toast({message: loc});
            return;
          }

          var user = {};
          user.sales_staff_id = loc.sales_staff_id;
          user.sales_staff_name = loc.sales_staff_name;
          user.account_name = loc.account_name;
          user.mobile = loc.mobile;
          user.access_token=loc1.access_token;
          modal.toast({message: user});
          pref.set('user',user);
          navigator.push('./index.js');
        });

      },
      click_photo(){
      	navigator.push('../photo.js');
      },
      onchange_username(user_name){
        this.username = user_name;
      },
      onchange_password(pass_word){
        this.password = pass_word;
      }
    }
  }
</script>