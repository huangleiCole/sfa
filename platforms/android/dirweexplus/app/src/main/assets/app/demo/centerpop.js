// { "framework": "Vue"} 

!function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=220)}({1:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},2:function(t,e){t.exports={layout:{backgroundColor:"#333333",height:128,flexDirection:"row",alignItems:"center",justifyContent:"center",width:"750"}}},220:function(t,e,o){var i,n,r=[];r.push(o(221)),r.push(o(222)),i=o(223);var l=o(224);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="D:\\weexProjects\\my_projectt\\src\\demo\\centerpop.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-4c1323dc",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},221:function(t,e){t.exports={cl:{alignItems:"center"}}},222:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:200,marginTop:50,borderRadius:10,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},223:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(5);weex.requireModule("globalEvent").addEventListener("onPageInit",function(t){}),e.default={components:{head:i},data:function(){return{back:"",header:{}}},methods:{ok:function(){weex.requireModule("centerpop").show("center.js",{width:500,height:700},{},!0)}},created:function(){}}},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{alignItems:"center",justifyContent:"center",backgroundColor:"#ffffff"}},[o("div",{staticStyle:{width:"100",height:"100",backgroundColor:"red"},on:{click:t.ok}},[o("text",[t._v("ok")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},back:{default:!0},bgcolor:{default:"#222222"},isloading:{default:!1},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20},height:{default:128},top:{default:40},titletop:{default:10}},data:function(){return{}},methods:{titleClick:function(){this.$emit("titleClick")},rightclick:function(){this.$emit("rightClick")},backTo:function(){weex.requireModule("navigator").back(),this.$emit("backClick")},onclick:function(){this.disabled||this.$emit("onclick")},adjust:function(){if("android"==weex.config.env.platform){var t=weex.config.env.osVersion;t=t.replace(/\./g,""),t.length<3&&(t+="0"),t<="440"&&(this.height=108,this.top=16,this.titletop=4)}}},created:function(){this.adjust()},ready:function(){}}},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["layout"],style:{"background-color":t.bgcolor,height:t.height}},[o("div",{staticStyle:{flexDirection:"row"},style:{top:t.titletop}},[t.isloading?o("div",{staticStyle:{height:"40",width:"40",marginRight:"10"}}):t._e(),o("text",{staticStyle:{flex:"1",color:"#ffffff",textAlign:"center",fontSize:"38"},on:{click:t.titleClick}},[t._v(t._s(t.title))]),t.isloading?o("floading",{staticStyle:{height:"40",width:"40",marginLeft:"10",marginTop:"5"},attrs:{color:"#ffffff",loadingStyle:"small"}}):t._e()],1),t.back?o("div",{staticStyle:{width:"200",top:"40",position:"absolute",left:"0"},style:{height:t.height,top:t.top},on:{click:t.backTo}},[o("image",{staticStyle:{width:"80",height:"80"},attrs:{src:"root:img/back.png"}})]):t._e(),o("div",{staticStyle:{width:"200",position:"absolute",right:"0",top:"0",alignItems:"center",justifyContent:"center"},style:{height:t.height},on:{click:t.rightclick}},[t._t("right")],2),o("div",{staticStyle:{height:"1",backgroundColor:"#111111",position:"absolute",bottom:"0",left:"0",right:"0"}})])},staticRenderFns:[]},t.exports.render._withStripped=!0},5:function(t,e,o){var i,n,r=[];r.push(o(1)),r.push(o(2)),i=o(3);var l=o(4);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="D:\\weexProjects\\my_projectt\\src\\demo\\header.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-3962dbc7",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=i}});