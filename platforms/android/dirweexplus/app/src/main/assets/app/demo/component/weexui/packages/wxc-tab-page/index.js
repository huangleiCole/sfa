// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=307)}({0:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),a=function(t){return t&&t.__esModule?t:{default:t}}(i),s={UrlParser:a.default,_typeof:function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},isPlainObject:function(t){return"object"===s._typeof(t)},isString:function(t){return"string"==typeof t},isNonEmptyArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t&&t.length>0&&Array.isArray(t)&&void 0!==t},isObject:function(t){return t&&"object"===(void 0===t?"undefined":r(t))&&!Array.isArray(t)},isEmptyObject:function(t){return 0===Object.keys(t).length&&t.constructor===Object},decodeIconFont:function(t){var e=/&#x[a-z|0-9]{4,5};?/g;return e.test(t)?t.replace(new RegExp(e,"g"),function(t){var e=t.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(e)}):t},mergeDeep:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();if(s.isObject(t)&&s.isObject(i))for(var a in i)s.isObject(i[a])?(t[a]||Object.assign(t,o({},a,{})),s.mergeDeep(t[a],i[a])):Object.assign(t,o({},a,i[a]));return s.mergeDeep.apply(s,[t].concat(n))},appendProtocol:function(t){if(/^\/\//.test(t)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+t}return t},encodeURLParams:function(t){return new a.default(t,!0).toString()},goToH5Page:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new s.UrlParser(t,!0),i=s.appendProtocol(r.toString());o.push({url:s.encodeURLParams(i),animated:e.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var t=weex.config.env.appName;return"Boat"===t||"BoatPlayground"===t},isWeb:function(){var t=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":r(window))&&"web"===t.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var t=weex.config.env.deviceHeight;return s.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":r(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):s.env.isIOS()&&2436===t},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return s.env.isTmall()||s.env.isTrip()||s.env.isTaobao()},supportsEB:function(){var t=weex.config.env.weexVersion||"0",e=s.compareVersion(t,"0.10.1.4")&&(s.env.isIOS()||s.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&e},supportsEBForAndroid:function(){return s.env.isAndroid()&&s.env.supportsEB()},supportsEBForIos:function(){return s.env.isIOS()&&s.env.supportsEB()},getPageHeight:function(){var t=weex.config.env,e=s.env.isWeb()?0:s.env.isIPhoneX()?176:132;return t.deviceHeight/t.deviceWidth*750-e}},compareVersion:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(t===e)return!0;for(var n=t.split("."),o=e.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var a=~~o[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return t&&t.length>0&&(n=t.map(function(n,o){return o%e==0?t.slice(o,o+e):null}).filter(function(t){return t})),n},truncateString:function(t,e){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",a=/[^\x00-\xff]/g,s=t.replace(a,"**").length,l=0;l<s&&(i=t.charAt(l).toString(),null!==i.match(a)?o+=2:o++,!(o>e));l++)r+=i;return n&&s>e&&(r+="..."),r}};e.default=s},196:function(t,e){t.exports={"wxc-tab-page":{width:"750"},"tab-title-list":{flexDirection:"row"},"title-item":{justifyContent:"center",alignItems:"center",borderBottomStyle:"solid"},"border-bottom":{position:"absolute",bottom:0},"tab-page-wrap":{width:"750",overflow:"hidden"},"tab-container":{flex:1,flexDirection:"row",position:"absolute"},"tab-text":{lines:1,textOverflow:"ellipsis"},"icon-font":{marginBottom:"8",fontFamily:"wxcIconFont"}}},197:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(o),i=weex.requireModule("dom"),a=weex.requireModule("animation"),s=weex.requireModule("swipeBack"),l=weex.requireModule("expressionBinding"),c=r.default.env.supportsEB(),u=r.default.env.supportsEBForIos(),f=r.default.env.isIOS();e.default={props:{tabTitles:{type:Array,default:function(){return[]}},panDist:{type:Number,default:200},spmC:{type:[String,Number],default:""},titleUseSlot:{type:Boolean,default:!1},tabStyles:{type:Object,default:function(){return{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,hasActiveBottom:!0,activeBottomColor:"#FFC900",activeBottomWidth:120,activeBottomHeight:6,textPaddingLeft:10,textPaddingRight:10,leftOffset:0}}},titleType:{type:String,default:"icon"},tabPageHeight:{type:[String,Number],default:1334},isTabView:{type:Boolean,default:!0},needSlider:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:String,default:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},wrapBgColor:{type:String,default:"#f2f3f4"}},data:function(){return{currentPage:0,isMoving:!1,startTime:0,deltaX:0,translateX:0,startPosX:0,startPosY:0,judge:"INITIAL"}},created:function(){var t=this.titleType,e=this.tabStyles;"iconFont"===t&&e.iconFontUrl&&i.addRule("fontFace",{fontFamily:"wxcIconFont",src:"url("+e.iconFontUrl+")"})},mounted:function(){var t=this;s&&s.forbidSwipeBack&&s.forbidSwipeBack(!0),u&&this.needSlider&&this.isTabView&&setTimeout(function(){var e=t.$refs["tab-page-wrap"];e&&e.ref&&(l.enableBinding(e.ref,"pan"),t.bindExp(e))},20)},methods:{next:function(){var t=this.currentPage;t<this.tabTitles.length-1&&t++,this.setPage(t)},prev:function(){var t=this.currentPage;t>0&&t--,this.setPage(t)},startHandler:function(t){var e=this;u&&"start"===t.state&&this.isTabView&&this.needSlider&&setTimeout(function(){e.bindExp(e.$refs["tab-page-wrap"])},0)},bindExp:function(t){var e=this;if(!this.isMoving&&t&&t.ref){var n=this.$refs["tab-container"],o=this.currentPage,r=this.panDist,i=750*o,a=[{element:n.ref,property:"transform.translateX",expression:'{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":'+i+"}]}"}];l.createBinding(t.ref,"pan","",a,function(t){var n=t.deltaX;"end"===t.state&&(n<-r?e.next():n>r?e.prev():e.setPage(o))})}},setPage:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!this.isTabView)return void this.jumpOut(n);if(!0!==this.isMoving){this.isMoving=!0;var r=this.currentPage,a=this.$refs["wxc-tab-title-"+t][0],s=this.tabStyles.width,l=parseInt(750/s),c=this.tabTitles.length,u=t>l?-(750-s)/2:2*-s;l<c&&((r>l||t>1)&&i.scrollToElement(a,{offset:u,animated:o}),t<=1&&r>t&&i.scrollToElement(a,{offset:-s*t,animated:o})),this.isMoving=!1,this.currentPage=t,f?setTimeout(function(){e._animateTransformX(t,o),e.$emit("wxcTabPageCurrentTabSelected",{page:t})},10):(this._animateTransformX(t,o),this.$emit("wxcTabPageCurrentTabSelected",{page:t}))}},jumpOut:function(t){t&&r.default.goToH5Page(t)},_animateTransformX:function(t,e){var n=this.duration,o=this.timingFunction,r=e?n:1e-5,i=this.$refs["tab-container"],s=750*t;a.transition(i,{styles:{transform:"translateX("+-s+"px)"},duration:r,timingFunction:o,delay:0},function(){})},_onTouchStart:function(t){!c&&this.isTabView&&this.needSlider&&(this.startPosX=this._getTouchXPos(t),this.startPosY=this._getTouchYPos(t),this.deltaX=0,this.startTime=(new Date).getTime())},_onTouchMove:function(t){!c&&this.isTabView&&this.needSlider&&(this.deltaX=this._getTouchXPos(t)-this.startPosX,this.deltaY=Math.abs(this._getTouchYPos(t)-this.startPosY+1),"INITIAL"===this.judge&&Math.abs(this.deltaX)/this.deltaY>1.73&&(this.judge="SLIDE_ING"))},_onTouchEnd:function(){!c&&this.isTabView&&this.needSlider&&("SLIDE_ING"===this.judge&&(this.deltaX<-50?this.next():this.deltaX>50&&this.prev()),this.judge="INITIAL")},_getTouchXPos:function(t){return t.changedTouches[0].pageX},_getTouchYPos:function(t){return t.changedTouches[0].pageY}}}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wxc-tab-page"],style:{height:t.tabPageHeight+"px",backgroundColor:t.wrapBgColor}},[n("scroller",{ref:"tab-title-list",staticClass:["tab-title-list"],style:{backgroundColor:t.tabStyles.bgColor,height:t.tabStyles.height+"px",paddingLeft:t.tabStyles.leftOffset+"px"},attrs:{showScrollbar:!1,scrollDirection:"horizontal",dataSpm:t.spmC}},t._l(t.tabTitles,function(e,o){return n("div",{key:o,ref:"wxc-tab-title-"+o,refInFor:!0,staticClass:["title-item"],style:{width:t.tabStyles.width+"px",height:t.tabStyles.height+"px",backgroundColor:t.currentPage==o?t.tabStyles.activeBgColor:t.tabStyles.bgColor},attrs:{accessible:!0,ariaLabel:""+(e.title?e.title:"标签"+o)},on:{click:function(n){t.setPage(o,e.url)}}},["icon"!==t.titleType||t.titleUseSlot?t._e():n("image",{style:{width:t.tabStyles.iconWidth+"px",height:t.tabStyles.iconHeight+"px"},attrs:{src:t.currentPage==o?e.activeIcon:e.icon}}),"iconFont"===t.titleType&&e.codePoint&&!t.titleUseSlot?n("text",{staticClass:["icon-font"],style:{fontFamily:"wxcIconFont",fontSize:t.tabStyles.iconFontSize+"px",color:t.currentPage==o?t.tabStyles.activeIconFontColor:t.tabStyles.iconFontColor}},[t._v(t._s(e.codePoint))]):t._e(),t.titleUseSlot?t._e():n("text",{staticClass:["tab-text"],style:{fontSize:t.tabStyles.fontSize+"px",fontWeight:t.currentPage==o&&t.tabStyles.isActiveTitleBold?"bold":"normal",color:t.currentPage==o?t.tabStyles.activeTitleColor:t.tabStyles.titleColor,paddingLeft:t.tabStyles.textPaddingLeft+"px",paddingRight:t.tabStyles.textPaddingRight+"px"}},[t._v(t._s(e.title))]),t.tabStyles.hasActiveBottom&&!t.titleUseSlot?n("div",{staticClass:["border-bottom"],style:{width:t.tabStyles.activeBottomWidth+"px",left:(t.tabStyles.width-t.tabStyles.activeBottomWidth)/2+"px",height:t.tabStyles.activeBottomHeight+"px",backgroundColor:t.currentPage==o?t.tabStyles.activeBottomColor:"transparent"}}):t._e(),t.titleUseSlot?t._t("tab-title-"+o):t._e()],2)})),n("div",{ref:"tab-page-wrap",staticClass:["tab-page-wrap"],style:{height:t.tabPageHeight-t.tabStyles.height+"px"},attrs:{preventMoveEvent:!0},on:{panstart:t._onTouchStart,panmove:t._onTouchMove,panend:t._onTouchEnd,horizontalpan:t.startHandler}},[n("div",{ref:"tab-container",staticClass:["tab-container"]},[t._t("default")],2)])])},staticRenderFns:[]},t.exports.render._withStripped=!0},307:function(t,e,n){var o,r,i=[];i.push(n(196)),o=n(197);var a=n(198);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-tab-page\\index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-1385ee49",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)},6:function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o},7:function(t,e,n){"use strict";(function(e){function o(t){t=t||e.location||{};var n,o={},r=void 0===t?"undefined":c(t);if("blob:"===t.protocol)o=new a(unescape(t.pathname),{});else if("string"===r){o=new a(t,{});for(n in g)delete o[n]}else if("object"===r){for(n in t)n in g||(o[n]=t[n]);void 0===o.slashes&&(o.slashes=h.test(t.href))}return o}function r(t){var e=p.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function i(t,e){for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function a(t,e,n){if(!(this instanceof a))return new a(t,e,n);var s,l,p,h,g,b,y=d.slice(),v=void 0===e?"undefined":c(e),m=this,w=0;for("object"!==v&&"string"!==v&&(n=e,e=null),n&&"function"!=typeof n&&(n=f.parse),e=o(e),l=r(t||""),s=!l.protocol&&!l.slashes,m.slashes=l.slashes||s&&e.slashes,m.protocol=l.protocol||e.protocol||"",t=l.rest,l.slashes||(y[2]=[/(.*)/,"pathname"]);w<y.length;w++)h=y[w],p=h[0],b=h[1],p!==p?m[b]=t:"string"==typeof p?~(g=t.indexOf(p))&&("number"==typeof h[2]?(m[b]=t.slice(0,g),t=t.slice(g+h[2])):(m[b]=t.slice(g),t=t.slice(0,g))):(g=p.exec(t))&&(m[b]=g[1],t=t.slice(0,g.index)),m[b]=m[b]||(s&&h[3]?e[b]||"":""),h[4]&&(m[b]=m[b].toLowerCase());n&&(m.query=n(m.query)),s&&e.slashes&&"/"!==m.pathname.charAt(0)&&(""!==m.pathname||""!==e.pathname)&&(m.pathname=i(m.pathname,e.pathname)),u(m.port,m.protocol)||(m.host=m.hostname,m.port=""),m.username=m.password="",m.auth&&(h=m.auth.split(":"),m.username=h[0]||"",m.password=h[1]||""),m.origin=m.protocol&&m.host&&"file:"!==m.protocol?m.protocol+"//"+m.host:"null",m.href=m.toString()}function s(t,e,n){var o=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||f.parse)(e)),o[t]=e;break;case"port":o[t]=e,u(e,o.protocol)?e&&(o.host=o.hostname+":"+e):(o.host=o.hostname,o[t]="");break;case"hostname":o[t]=e,o.port&&(e+=":"+o.port),o.host=e;break;case"host":o[t]=e,/:\d+$/.test(e)?(e=e.split(":"),o.port=e.pop(),o.hostname=e.join(":")):(o.hostname=e,o.port="");break;case"protocol":o.protocol=e.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(e){var r="pathname"===t?"/":"#";o[t]=e.charAt(0)!==r?r+e:e}else o[t]=e;break;default:o[t]=e}for(var i=0;i<d.length;i++){var a=d[i];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function l(t){t&&"function"==typeof t||(t=f.stringify);var e,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,e="object"===c(n.query)?t(n.query):n.query,e&&(r+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(r+=n.hash),r}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=n(8),f=n(9),p=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,h=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,d=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};a.prototype={set:s,toString:l},a.extractProtocol=r,a.location=o,a.qs=f,t.exports=a}).call(e,n(6))},8:function(t,e,n){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},9:function(t,e,n){"use strict";function o(t){return decodeURIComponent(t.replace(/\+/g," "))}function r(t){for(var e,n=/([^=?&]+)=?([^&]*)/g,r={};e=n.exec(t);){var i=o(e[1]),a=o(e[2]);i in r||(r[i]=a)}return r}function i(t,e){e=e||"";var n=[];"string"!=typeof e&&(e="?");for(var o in t)a.call(t,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return n.length?e+n.join("&"):""}var a=Object.prototype.hasOwnProperty;e.stringify=i,e.parse=r}});