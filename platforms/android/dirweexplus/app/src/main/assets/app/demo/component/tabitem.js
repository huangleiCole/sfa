// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=250)}({250:function(e,t,o){var n,i,r=[];r.push(o(251)),r.push(o(252)),n=o(253);var c=o(254);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\tabitem.vue",i.render=c.render,i.staticRenderFns=c.staticRenderFns,i._scopeId="data-v-66a98002",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=n,e.exports.el="true",new Vue(e.exports)},251:function(e,t){e.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},252:function(e,t){e.exports={text:{color:"#ffffff",fontSize:30},"text-disabled":{color:"#b4b4b4",fontSize:30},button:{height:100,backgroundColor:"#ff4800",alignItems:"center",justifyContent:"center",color:"#ffffff",borderRadius:8,"backgroundColor:active":"#ff1b08"},"button-disabled":{height:100,backgroundColor:"#eeeeee",alignItems:"center",justifyContent:"center",color:"#ffffff",borderRadius:8,"backgroundColor:active":"#eeeeee"}}},253:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{text:{default:""},currentIndex:{default:0},color:{default:"#000000"},selectColor:{default:"#000000"},img:{default:""},selectImg:{default:""},select:{default:!1},fontSize:{default:28},index:{default:0}},data:function(){return{visiable:!0}},methods:{layoutclick:function(){this.select=!this.select,this.$emit("change",this.index)},oninput:function(e){this.$emit("oninput",e),this.visiable=""!=e.value},onclick:function(){this.disabled||this.$emit("onclick")},panstart:function(){this.disabled||(this.bgcolor="#ff1b08")},panend:function(){this.disabled||(this.bgcolor="#ff4800")},setenable:function(){},onclose:function(){this.value=""}},created:function(){this.visiable=""==!this.value},ready:function(){}}},254:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{alignItems:"center",justifyContent:"center"},on:{click:e.layoutclick}},[o("image",{staticStyle:{width:"50",height:"50",marginTop:"10"},attrs:{src:e.currentIndex==e.index?e.selectImg:e.img}}),o("text",{staticStyle:{marginTop:"5"},style:{"font-size":e.fontSize,color:e.currentIndex==e.index?e.selectColor:e.color}},[e._v(e._s(e.text))])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});