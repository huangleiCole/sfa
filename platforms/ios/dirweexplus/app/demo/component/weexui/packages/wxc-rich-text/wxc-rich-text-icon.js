// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=292)}({292:function(t,e,n){var r,i,o=[];o.push(n(88)),r=n(89);var c=n(90);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue",i.render=c.render,i.staticRenderFns=c.staticRenderFns,i._scopeId="data-v-6e842e46",i.style=i.style||{},o.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)},88:function(t,e){t.exports={"wxc-image":{width:"90",height:"24",marginRight:"6"}}},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{iconSrc:{type:String,default:""},iconStyle:{type:Object,default:function(){return{height:24}}}},data:function(){return{width:90}},computed:{computedStyle:function(){var t=this.width,e=this.iconStyle;return e&&e.width&&e.height?{width:e.width+"px",height:e.height+"px"}:{width:t+"px",height:e.height+"px"}}},methods:{onLoad:function(t){if(t.success&&t.size&&t.size.naturalWidth>0){var e=t.size.naturalWidth,n=t.size.naturalHeight;this.width=e*(this.iconStyle.height/n)}}}}},90:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("image",{staticClass:["wxc-image"],style:{width:t.computedStyle.width,height:t.computedStyle.height},attrs:{src:t.iconSrc,ariaHidden:!0},on:{load:t.onLoad}})},staticRenderFns:[]},t.exports.render._withStripped=!0}});