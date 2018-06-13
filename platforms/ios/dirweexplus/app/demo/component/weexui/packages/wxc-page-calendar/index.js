// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=283)}({0:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(7),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s={UrlParser:a.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===s._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":o(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(!n.length)return e;var i=n.shift();if(s.isObject(e)&&s.isObject(i))for(var a in i)s.isObject(i[a])?(e[a]||Object.assign(e,r({},a,{})),s.mergeDeep(e[a],i[a])):Object.assign(e,r({},a,i[a]));return s.mergeDeep.apply(s,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new a.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=weex.requireModule("navigator"),o=new s.UrlParser(e,!0),i=s.appendProtocol(o.toString());r.push({url:s.encodeURLParams(i),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":o(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return s.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":o(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):s.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return s.env.isTmall()||s.env.isTrip()||s.env.isTaobao()},supportsEB:function(){var e=weex.config.env.weexVersion||"0",t=s.compareVersion(e,"0.10.1.4")&&(s.env.isIOS()||s.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&t},supportsEBForAndroid:function(){return s.env.isAndroid()&&s.env.supportsEB()},supportsEBForIos:function(){return s.env.isIOS()&&s.env.supportsEB()},getPageHeight:function(){var e=weex.config.env,t=s.env.isWeb()?0:s.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),r=t.split("."),o=Math.max(n.length,r.length),i=0;i<o;i++){var a=~~r[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,r){return r%t==0?e.slice(r,r+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=0,o="",i="",a=/[^\x00-\xff]/g,s=e.replace(a,"**").length,c=0;c<s&&(i=e.charAt(c).toString(),null!==i.match(a)?r+=2:r++,!(r>t));c++)o+=i;return n&&s>t&&(o+="..."),o}};t.default=s},154:function(e,t){e.exports={"wxc-page-calendar":{position:"fixed",top:0,bottom:0,right:"-750",width:"750",color:"#333333",backgroundColor:"#ffffff"},"flex-item":{flex:1,textAlign:"center"},"calendar-weekday":{height:"60",backgroundColor:"#ffffff",borderBottomWidth:"1",borderTopWidth:"1",borderColor:"#e2e2e2",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},"weekday-text":{color:"#000000",flex:1,fontSize:"24",textAlign:"center"},"calendar-list":{flex:1},"month-text":{fontSize:"32",height:"60",lineHeight:"60",width:"750",textAlign:"center",alignItems:"center",backgroundColor:"#f2f3f4"},"calendar-row":{height:"140",flexDirection:"row",backgroundColor:"#ffffff",borderBottomWidth:"1",borderColor:"#f2f3f4",alignItems:"center",justifyContent:"space-between"},"row-item":{flex:1,height:"140",paddingTop:"10",paddingBottom:"10",justifyContent:"center",alignItems:"center"},"iphone-x":{height:"68"},"calendar-note":{height:"36",lineHeight:"36",fontSize:"24",color:"#000000",textAlign:"center"},"calendar-day":{height:"48",lineHeight:"48",fontSize:"36",color:"#000000",textAlign:"center"},"calendar-ext":{height:"36",lineHeight:"36",color:"#999999",textAlign:"center",fontSize:"24",textOverflow:"ellipsis"},"calendar-holiday":{color:"#FF5000"},"calendar-rest":{color:"#FF5000"},"item-row-selected":{color:"#ffffff",backgroundColor:"#FFC900",textAlign:"center"},"item-text-selected":{color:"#3d3d3d",textAlign:"center"},"calendar-disabled":{color:"#CCCCCC"},"cell-disabled":{backgroundColor:"#FBFBFB"},"calendar-day-include":{backgroundColor:"#FFF7D6"}}},155:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(156),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),a=n(0),s=r(a),c=n(95),l=r(c),u=s.default.env.isWeb(),f=weex.requireModule("animation"),d=weex.requireModule("dom");t.default={components:{WxcMinibar:l.default},props:{selectedDate:Array,dateRange:{type:Array,required:!0,default:function(){return[]}},minibarCfg:{type:Object,default:function(){return{title:"选择日期","background-color":"#FFC900","text-color":"#3D3D3D"}}},showHeader:{type:Boolean,default:!1},selectedNote:{type:Array,default:function(){return["开始","到达","往返"]}},isRange:{type:Boolean,default:!1},needDestroy:{type:Boolean,default:!1},descList:{type:Array,default:function(){return[]}}},data:function(){return{isShow:!1,reSelect:!0,today:i.getToDay(),departDate:"",arriveDate:""}},computed:{monthsArray:function(){var e=this.dateRange,t=this.today,n=this.departDate,r=this.arriveDate,o=this.selectedNote,a=this.descList,s={range:e,today:t,departDate:n,arriveDate:r,selectedNote:o,descList:a};return i.generateDateCell(s)}},created:function(){this.isIPhoneX=s.default.env.isIPhoneX(),this.showTitle=u||this.showHeader,this.detectShow()},mounted:function(){var e=this,t=this.needDestroy,n=u?700:100;!t&&setTimeout(function(){e.isShow=!0,e.scrollToDate()},n)},watch:{needDestroy:function(e,t){var n=this;e||e===t||setTimeout(function(){n.isShow=!0},200)}},methods:{minibarLeftButtonClick:function(){var e=this;setTimeout(function(){e.hide(),e.$emit("wxcPageCalendarBackClicked",{})},100)},onClickDate:function(e){var t=this;e.disabled||e.isEmpty||(t.reSelect&&(t.departDate="",t.arriveDate="",t.reSelect=!1),t.isRange?(t.departDate&&Date.parse(t.departDate)<=Date.parse(e.date)?t.arriveDate=e.date:t.departDate=e.date,t.departDate&&t.arriveDate&&t.dispatchDateChange([t.departDate,t.arriveDate])):(t.departDate=e.date,t.dispatchDateChange([t.departDate])))},scrollToDate:function(){var e=this;setTimeout(function(){if(e.departDate){var t=e.$refs.departDate[0];t&&d.getComponentRect&&d.getComponentRect(t,function(e){if(e&&e.result){var n=e.size.bottom,r=weex.config.env;(n>r.deviceHeight/r.deviceWidth*750-50||0===n)&&d.scrollToElement(t,{offset:-146,animated:!1})}})}},10)},dispatchDateChange:function(e){var t=this,n=u?400:600;setTimeout(function(){t.hide()},n),this.$emit("wxcPageCalendarDateSelected",{date:e})},detectShow:function(){this.isRange&&this.selectedDate.length>=2?(this.departDate=this.selectedDate[0],this.arriveDate=this.selectedDate[1]):this.selectedDate.length>=1&&(this.departDate=this.selectedDate[0],this.arriveDate="")},_animate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=u?200:300;f.transition(this.$refs.pageCalendar,{styles:{transform:"translateX("+-e+"px)"},timingFunction:"ease-out",duration:t},function(){})},show:function(){var e=this.needDestroy;e&&(this.isShow=!0),this.reSelect=!0,this.detectShow(),this._animate(750),e&&this.scrollToDate()},hide:function(){this.needDestroy&&(this.isShow=!1),this.reSelect=!1,this._animate(0),this.$emit("wxcPageCalendarHide",{})}}}},156:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){var e={};return Object.keys(x).forEach(function(t){x[t].forEach(function(n){e[n]=t})}),e}function i(e){return"[object date]"===(null===e?String(e):{}.toString.call(e)||"object")}function a(e,t){return e&&e.match(/#/)&&e.replace(/^.*#/,"")===t}function s(e){if(i(e))return new Date(e).getTime();try{return new Date(e.replace(/-/g,"/")).getTime()}catch(e){return 0}}function c(e,t){var n=s(e[0]),r=s(e[1]),o=s(t);return n<=o&&r>=o}function l(e,t){var n=s(e[0]),r=s(e[1]),o=s(t);return n<o&&r>o}function u(e){return(e<10?"0":"")+e}function f(e){var t=new Date(e.replace(/-/g,"/")).getDay();return 0===t||6===t}function d(e,t){return s(e)===s(t)}function p(e,t){var n=[31,28,31,30,31,30,31,31,30,31,30,31],r=e||t.getFullYear(),o=!1;return o=r%100?!(r%4):!(r%400),n[1]=o?29:28,n}function h(e,t){return new Date(e+"/"+t+"/1").getDay()}function g(e){return Array.prototype.filter.call(e,function(t,n){return e.indexOf(t)===n})}function y(){return(new Date).getFullYear()+"-"+u((new Date).getMonth()+1)+"-"+u((new Date).getDate())}function v(e,t,n,r,i,a,s,y){for(var v=p(e,n),m=h(e,t,7),x=v[t-1]+m,D=Math.ceil(x/7),C=x%7,S=[],k=1;k<=D;k++){for(var j=[],A=1;A<=7;A++){var B={};1===k&&A<=m||C&&k===D&&A>C?B.isEmpty=!0:function(){var p=7*(k-1)+A-m,h=e+"-"+u(t)+"-"+u(p),v=[],x="",D=[],C=c(r,h),S=!1,j=u(t)+"-"+u(p),O="",T="";if(y&&y.length>0){var P=y.filter(function(e){return e.date==h});P&&P.length>0&&(T=P[0].value,P[0].emphasize&&v.push("calendar-holiday"))}w[j]&&(O=w[j],v.push("calendar-holiday"));var F=o()[h];F&&(O=F,v.push("calendar-holiday")),b.indexOf(h)>-1&&v.push("calendar-holiday"),_.indexOf(h)>-1&&v.push("calendar-work"),f(h)&&v.push("calendar-holiday"),d(n,h)&&(v.push("calendar-today"),O="今天"),C||(S=!0),S&&(v=[],v.push("calendar-disabled"),D.push("cell-disabled")),!T&&S&&C&&(T="不可选"),i!==h&&a!==h||(O=i===h?s[0]:s[1],x=i===h?"departDate":"arriveDate",i===a&&s.length>=3&&(O=s[2]),v.push("item-text-selected"),D.push("item-row-selected")),i&&a&&l([i,a],h)&&D.push("calendar-day-include"),B={isEmpty:!1,ref:x,cls:g(v).join(" "),cellClass:g(D).join(" "),note:O,date:h,ext:T,disabled:S,text:p}}(),j.push(B)}S.push(j)}return S}function m(e){for(var t=e.range,n=e.today,o=e.departDate,i=e.arriveDate,a=e.selectedNote,s=e.descList,c=new Date(t[0].replace(/-/g,"/")),l=new Date(t[1].replace(/-/g,"/")),f=c.getFullYear(),d=c.getMonth()+1,p=l.getFullYear(),h=l.getMonth()+1,g=12*(p-f)+h-d+1,y=f,m=d,w=[],x=0;x<g;x++)m>12&&(m=1,y++),w.push.apply(w,[{title:y+"-"+u(m)}].concat(r(v(y,m,n,t,o,i,a,s)))),m++;return w}Object.defineProperty(t,"__esModule",{value:!0}),t._getTraditionalHoliday=o,t._isDate=i,t._checkHash=a,t.getTime=s,t._isInRange=c,t._isInSelectRange=l,t._fixNum=u,t._isWeekend=f,t._isToday=d,t._getMonthDays=p,t._getPadding=h,t._unique=g,t.getToDay=y,t.getWeekRows=v,t.generateDateCell=m;var w=t.GLOBAL_HOLIDAY={"01-01":"元旦","02-14":"情人","05-01":"劳动","06-01":"儿童","10-01":"国庆","12-25":"圣诞"},x={"除夕":["2015-02-18","2016-02-07","2017-01-27","2018-02-15","2019-02-04","2020-01-24"],"春节":["2015-02-19","2016-02-08","2017-01-28","2018-02-16","2019-02-05","2020-01-25"],"元宵":["2015-03-05","2016-02-22","2017-02-11","2018-03-02","2019-02-19","2020-02-08"],"清明":["2015-04-05","2016-04-04","2017-04-04","2018-04-05","2019-04-05","2020-04-04"],"端午":["2015-06-20","2016-06-09","2017-05-30","2018-06-18","2019-06-07","2020-06-25"],"中秋":["2015-09-27","2016-09-15","2017-10-04","2018-09-24","2019-09-13","2020-10-01"],"重阳":["2015-10-21","2016-10-09","2017-10-28","2018-10-17","2019-10-07","2020-10-25"]},b=["2017-10-01","2017-10-02","2017-10-03","2017-10-04","2017-10-05","2017-10-06","2017-10-07","2017-10-08"],_=["2017-09-30"]},157:function(e,t,n){var r,o,i=[];i.push(n(79)),r=n(80);var a=n(81);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-minibar\\index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-09966cb6",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},158:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"pageCalendar",staticClass:["wxc-page-calendar"]},[n("wxc-minibar",e._b({attrs:{show:e.showTitle,useDefaultReturn:!1},on:{wxcMinibarLeftButtonClicked:e.minibarLeftButtonClick}},"wxc-minibar",e.minibarCfg,!1)),e.isShow?n("div",{staticClass:["calendar-weekday"]},e._l(["日","一","二","三","四","五","六"],function(t,r){return n("text",{key:r,staticClass:["flex-item","weekday-text"],attrs:{ariaLabel:"周"+t}},[e._v(e._s(t))])})):e._e(),e.isShow?n("list",{staticClass:["calendar-list"]},[e._l(e.monthsArray,function(t,r){return n("cell",{key:r,class:[!t.title&&"calendar-row"],appendAsTree:!0,attrs:{append:"tree"}},[t.title?n("text",{staticClass:["month-text"]},[e._v(e._s(t.title))]):e._l(t,function(t,o){return n("div",{key:r+"-"+o,ref:t.ref,refInFor:!0,class:["row-item",t.cellClass],attrs:{accessible:!0,ariaLabel:(t.text?t.text:"")+","+(t.note?t.note:"")+","+(t.ext?t.ext:"")},on:{click:function(n){e.onClickDate(t)}}},[n("text",{class:["calendar-note",t.cls]},[e._v(e._s(t.note))]),n("text",{class:["calendar-day",t.cls]},[e._v(e._s(t.text))]),n("text",{class:["calendar-ext",t.cls]},[e._v(e._s(t.ext))])])})],2)}),e.isIPhoneX?n("cell",{staticClass:["iphone-x"],appendAsTree:!0,attrs:{append:"tree"}}):e._e()],2):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},283:function(e,t,n){var r,o,i=[];i.push(n(154)),r=n(155);var a=n(158);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-page-calendar\\index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-254d1416",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)},6:function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},7:function(e,t,n){"use strict";(function(t){function r(e){e=e||t.location||{};var n,r={},o=void 0===e?"undefined":l(e);if("blob:"===e.protocol)r=new a(unescape(e.pathname),{});else if("string"===o){r=new a(e,{});for(n in g)delete r[n]}else if("object"===o){for(n in e)n in g||(r[n]=e[n]);void 0===r.slashes&&(r.slashes=p.test(e.href))}return r}function o(e){var t=d.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function i(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,o=n[r-1],i=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(i=!0),n.splice(r,1),a--);return i&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}function a(e,t,n){if(!(this instanceof a))return new a(e,t,n);var s,c,d,p,g,y,v=h.slice(),m=void 0===t?"undefined":l(t),w=this,x=0;for("object"!==m&&"string"!==m&&(n=t,t=null),n&&"function"!=typeof n&&(n=f.parse),t=r(t),c=o(e||""),s=!c.protocol&&!c.slashes,w.slashes=c.slashes||s&&t.slashes,w.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(v[2]=[/(.*)/,"pathname"]);x<v.length;x++)p=v[x],d=p[0],y=p[1],d!==d?w[y]=e:"string"==typeof d?~(g=e.indexOf(d))&&("number"==typeof p[2]?(w[y]=e.slice(0,g),e=e.slice(g+p[2])):(w[y]=e.slice(g),e=e.slice(0,g))):(g=d.exec(e))&&(w[y]=g[1],e=e.slice(0,g.index)),w[y]=w[y]||(s&&p[3]?t[y]||"":""),p[4]&&(w[y]=w[y].toLowerCase());n&&(w.query=n(w.query)),s&&t.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==t.pathname)&&(w.pathname=i(w.pathname,t.pathname)),u(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(p=w.auth.split(":"),w.username=p[0]||"",w.password=p[1]||""),w.origin=w.protocol&&w.host&&"file:"!==w.protocol?w.protocol+"//"+w.host:"null",w.href=w.toString()}function s(e,t,n){var r=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||f.parse)(t)),r[e]=t;break;case"port":r[e]=t,u(t,r.protocol)?t&&(r.host=r.hostname+":"+t):(r.host=r.hostname,r[e]="");break;case"hostname":r[e]=t,r.port&&(t+=":"+r.port),r.host=t;break;case"host":r[e]=t,/:\d+$/.test(t)?(t=t.split(":"),r.port=t.pop(),r.hostname=t.join(":")):(r.hostname=t,r.port="");break;case"protocol":r.protocol=t.toLowerCase(),r.slashes=!n;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";r[e]=t.charAt(0)!==o?o+t:t}else r[e]=t;break;default:r[e]=t}for(var i=0;i<h.length;i++){var a=h[i];a[4]&&(r[a[1]]=r[a[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r}function c(e){e&&"function"==typeof e||(e=f.stringify);var t,n=this,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var o=r+(n.slashes?"//":"");return n.username&&(o+=n.username,n.password&&(o+=":"+n.password),o+="@"),o+=n.host+n.pathname,t="object"===l(n.query)?e(n.query):n.query,t&&(o+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(o+=n.hash),o}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(8),f=n(9),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};a.prototype={set:s,toString:c},a.extractProtocol=o,a.location=r,a.qs=f,e.exports=a}).call(t,n(6))},79:function(e,t){e.exports={"wxc-minibar":{width:"750",height:"90",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#009ff0"},left:{width:"180",paddingLeft:"32"},"middle-title":{fontSize:"30",color:"#ffffff",height:"36",lineHeight:"34"},right:{width:"180",paddingRight:"32",alignItems:"flex-end"},"left-button":{width:"21",height:"36"},"right-button":{width:"32",height:"32"},"icon-text":{fontSize:"28",color:"#ffffff"}}},8:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("navigator");t.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var e=this;e.useDefaultReturn&&r.pop({},function(e){}),e.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var e=this;(e.rightText||e.rightButton)&&e.$emit("wxcMinibarRightButtonClicked",{})}}}},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:["wxc-minibar"],style:{backgroundColor:e.backgroundColor}},[n("div",{staticClass:["left"],attrs:{ariaLabel:"返回",accessible:!0},on:{click:e.leftButtonClicked}},[e._t("left",[e.leftButton&&!e.leftText?n("image",{staticClass:["left-button"],attrs:{src:e.leftButton}}):e._e(),e.leftText?n("text",{staticClass:["icon-text"],style:{color:e.textColor}},[e._v(e._s(e.leftText))]):e._e()])],2),e._t("middle",[n("text",{staticClass:["middle-title"],style:{color:e.textColor}},[e._v(e._s(e.title))])]),n("div",{staticClass:["right"],on:{click:e.rightButtonClicked}},[e._t("right",[e.rightButton&&!e.rightText?n("image",{staticClass:["right-button"],attrs:{src:e.rightButton,ariaHidden:!0}}):e._e(),e.rightText?n("text",{staticClass:["icon-text"],style:{color:e.textColor}},[e._v(e._s(e.rightText))]):e._e()])],2)],2):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,n){"use strict";function r(e){return decodeURIComponent(e.replace(/\+/g," "))}function o(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,o={};t=n.exec(e);){var i=r(t[1]),a=r(t[2]);i in o||(o[i]=a)}return o}function i(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var r in e)a.call(e,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return n.length?t+n.join("&"):""}var a=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=o},95:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(157);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})}});