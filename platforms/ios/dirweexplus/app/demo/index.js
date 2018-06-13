// { "framework": "Vue"} 

!function(t){function e(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=336)}({20:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},21:function(t,e){t.exports={layout:{backgroundColor:"#333333",height:128,width:750,flexDirection:"row",alignItems:"center",justifyContent:"center"}}},22:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},back:{default:!0},bgcolor:{default:"#222222"},isloading:{default:!1},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20},height:{default:128},top:{default:40},titletop:{default:10}},data:function(){return{}},methods:{titleClick:function(){this.$emit("titleClick")},rightclick:function(){this.$emit("rightClick")},backTo:function(){weex.requireModule("navigator").back()},onclick:function(){this.disabled||this.$emit("onclick")},adjust:function(){if("android"==weex.config.env.platform){var t=weex.config.env.osVersion;t=t.replace(/\./g,""),t.length<3&&(t+="0"),t<="440"&&(this.height=108,this.top=16,this.titletop=4)}}},created:function(){this.adjust()},ready:function(){}}},23:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["layout"],style:{"background-color":t.bgcolor,height:t.height}},[i("div",{staticStyle:{flexDirection:"row"},style:{top:t.titletop}},[t.isloading?i("div",{staticStyle:{height:"40",width:"40",marginRight:"10"}}):t._e(),i("text",{staticStyle:{flex:"1",color:"#ffffff",textAlign:"center",fontSize:"38"},on:{click:t.titleClick}},[t._v(t._s(t.title))]),t.isloading?i("floading",{staticStyle:{height:"40",width:"40",marginLeft:"10",marginTop:"5"},attrs:{color:"#ffffff",loadingStyle:"small"}}):t._e()],1),t.back?i("div",{staticStyle:{width:"200",top:"40",position:"absolute",left:"0"},style:{height:t.height,top:t.top},on:{click:t.backTo}},[i("image",{staticStyle:{width:"80",height:"80"},attrs:{src:"root:img/back.png"}})]):t._e(),i("div",{staticStyle:{width:"200",position:"absolute",right:"0",top:"0",alignItems:"center",justifyContent:"center"},style:{height:t.height},on:{click:t.rightclick}},[t._t("right")],2),i("div",{staticStyle:{height:"1",backgroundColor:"#111111",position:"absolute",bottom:"0",left:"0",right:"0"}})])},staticRenderFns:[]},t.exports.render._withStripped=!0},28:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={postShort:function(t,e,i,s,o,r){var a=weex.requireModule("modal");this.postFull(t,e,i,s,o,function(t){a.toast({message:t.msg})},function(){a.toast({message:"网络异常！"})},function(){r()})},postFull:function(t,e,i,s,o,r,a,n){var l=weex.requireModule("net"),c=(weex.requireModule("modal"),"http://59.110.169.246/movie/"+t),f=weex.requireModule("static"),d=f.getString("token");void 0!=d&&""!=d&&(i.token=d),l.post(c,e,i,function(){s()},function(t){if(0==t.res.err)o(t.res);else{if(void 0!=d&&""!=d)return void f.remove("token");1e3==t.res.err||r(t.res)}},function(t){n()},function(t){a()})},post:function(t,e,i){var s=weex.requireModule("progress");this.postShort(t,e,{},function(){s.show()},i,function(){s.dismiss()})},postSilent:function(t,e,i){this.postFull(t,e,{},function(){},i,function(t){},function(){},function(){})}};e.default=s},336:function(t,e,i){var s,o,r=[];r.push(i(337)),s=i(338);var a=i(339);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-f8f0bdf0",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=s,t.exports.el="true",new Vue(t.exports)},337:function(t,e){t.exports={title:{paddingTop:"40",paddingBottom:"40",fontSize:"48"},item_text:{marginLeft:20,fontSize:35},item_flex:{flex:1},item_img:{width:25,height:40,marginRight:20},item:{height:100,flexDirection:"row",alignItems:"center",borderBottomColor:"#999999",borderBottomWidth:1,"backgroundColor:active":"#eeeeee"},group:{marginTop:30,marginLeft:20,color:"#FF0000",fontSize:40}}},338:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(39);i(28);e.default={components:{head:s},data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",index:0},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},showpicker:function(){weex.requireModule("modal").toast({message:"ok"})},goton:function(){weex.requireModule("navigator").push("Login.js")},change:function(t){this.index=t},show:function(){var t=weex.requireModule("modal"),e=weex.config.env.osVersion;e=e.replace(/\./g,""),t.alert({message:e})}},created:function(){var t=weex.requireModule("globalEvent");t.addEventListener("onPageInit",function(t){var e=weex.requireModule("navbar"),i=weex.requireModule("navigator");i.addBackGestureSelfControl(),i.setRoot("index"),i.setPageId("root"),e.setStatusBarStyle("white")})}}},339:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("head",{attrs:{title:"weexplus demo",back:!1}}),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroller",{staticStyle:{flex:"1"}},[i("text",{staticClass:["group"]},[t._v("组件")]),i("a",{staticClass:["item"],staticStyle:{borderTopWidth:"1",borderTopColor:"#999999",marginTop:"20"},attrs:{href:"./host.js"}},[i("text",{staticClass:["item_text"]},[t._v("tab框架")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./drawlayout.js"}},[i("text",{staticClass:["item_text"]},[t._v("侧滑框架")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./looper.js"}},[i("text",{staticClass:["item_text"]},[t._v("text轮播器（looper）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./floading.js"}},[i("text",{staticClass:["item_text"]},[t._v("小菊花组件（floading）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("text",{staticClass:["group"]},[t._v("模块")]),i("a",{staticClass:["item"],staticStyle:{borderTopWidth:"1",borderTopColor:"#999999",marginTop:"20"},attrs:{href:"./navigator.js"}},[i("text",{staticClass:["item_text"]},[t._v("导航")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],staticStyle:{borderTopWidth:"1",borderTopColor:"#999999",marginTop:"20"},attrs:{href:"./font.js"}},[i("text",{staticClass:["item_text"]},[t._v("字体")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./notify.js"}},[i("text",{staticClass:["item_text"]},[t._v("通知")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./photo.js"}},[i("text",{staticClass:["item_text"]},[t._v("相机相册（图片上传）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./static.js"}},[i("text",{staticClass:["item_text"]},[t._v("静态存储（static）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./picker.js"}},[i("text",{staticClass:["item_text"]},[t._v("选择器（picker）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./progress.js"}},[i("text",{staticClass:["item_text"]},[t._v("无状态进度条（progress）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./qr.js"}},[i("text",{staticClass:["item_text"]},[t._v("二维码（qr）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./net.js"}},[i("text",{staticClass:["item_text"]},[t._v("网络访问（net）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})]),i("a",{staticClass:["item"],attrs:{href:"./updater.js"}},[i("text",{staticClass:["item_text"]},[t._v("更新检测（updater）")]),i("div",{staticClass:["item_flex"]}),i("image",{staticClass:["item_img"],attrs:{src:"root:img/arrow.png"}})])])}]},t.exports.render._withStripped=!0},39:function(t,e,i){var s,o,r=[];r.push(i(20)),r.push(i(21)),s=i(22);var a=i(23);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\header.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-10772cf4",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=s}});