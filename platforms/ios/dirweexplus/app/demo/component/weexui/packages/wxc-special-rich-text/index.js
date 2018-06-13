// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=300)}({0:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(7),s=function(e){return e&&e.__esModule?e:{default:e}}(i),a={UrlParser:s.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===a._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":o(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(!r.length)return e;var i=r.shift();if(a.isObject(e)&&a.isObject(i))for(var s in i)a.isObject(i[s])?(e[s]||Object.assign(e,n({},s,{})),a.mergeDeep(e[s],i[s])):Object.assign(e,n({},s,i[s]));return a.mergeDeep.apply(a,[e].concat(r))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new s.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=weex.requireModule("navigator"),o=new a.UrlParser(e,!0),i=a.appendProtocol(o.toString());n.push({url:a.encodeURLParams(i),animated:t.toString()},r)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":o(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return a.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":o(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):a.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return a.env.isTmall()||a.env.isTrip()||a.env.isTaobao()},supportsEB:function(){var e=weex.config.env.weexVersion||"0",t=a.compareVersion(e,"0.10.1.4")&&(a.env.isIOS()||a.env.isAndroid()),r=weex.requireModule("expressionBinding");return r&&r.enableBinding&&t},supportsEBForAndroid:function(){return a.env.isAndroid()&&a.env.supportsEB()},supportsEBForIos:function(){return a.env.isIOS()&&a.env.supportsEB()},getPageHeight:function(){var e=weex.config.env,t=a.env.isWeb()?0:a.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var r=e.split("."),n=t.split("."),o=Math.max(r.length,n.length),i=0;i<o;i++){var s=~~n[i],a=~~r[i];if(s<a)return!0;if(s>a)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=[];return e&&e.length>0&&(r=e.map(function(r,n){return n%t==0?e.slice(n,n+t):null}).filter(function(e){return e})),r},truncateString:function(e,t){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,o="",i="",s=/[^\x00-\xff]/g,a=e.replace(s,"**").length,c=0;c<a&&(i=e.charAt(c).toString(),null!==i.match(s)?n+=2:n++,!(n>t));c++)o+=i;return r&&a>t&&(o+="..."),o}};t.default=a},187:function(e,t){e.exports={"tag-div":{position:"absolute",top:0,color:"#A5A5A5",fontSize:"24",lineHeight:"30"},"wxc-text":{fontSize:"24",lineHeight:"34",color:"#3d3d3d",lines:2,textOverflow:"ellipsis"},black:{color:"#3D3D3D"},yellow:{color:"#EE9900"},blue:{color:"#30A0FF"},gray:{color:"#A5A5A5"},red:{color:"#FF5000"},"margin-text":{marginRight:"6"}}},188:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(0),s=n(i),a=r(19),c=n(a),l=r(41),u=n(l),f=weex.config.env,p=f.appName,d=f.osName,h=f.deviceWidth,g=(s.default.env.isAlipay()||"UC"===p||"TUnionSDK"===p)&&"iOS"!==d||s.default.env.isAndroid(),y="iOS"===d&&h>1300;t.default={components:{WxcRichTextText:c.default,WxcRichTextTag:u.default},props:{configList:{type:[Array,String],default:function(){return{}}}},data:function(){return{iconWidth:90,iconHeight:24}},computed:{newList:function(){var e=this.configList,t=this.iconHeight,r=this.iconWidth;if(s.default.isNonEmptyArray(e)&&2===e.length){var n=e[0],i=e[1],a=n.style,c=i.style,l={},u=24,f=a&&a.width?a.width:24;c&&c.fontSize&&!isNaN(c.fontSize)&&(u=c.fontSize,l={fontSize:c.fontSize+"px",lineHeight:Number(1.4*c.fontSize).toFixed(2)+"px"}),c&&c.color&&(l=o({},l,{color:c.color})),c&&c.lines&&(l=o({},l,{lines:c.lines})),"icon"===n.type&&a&&a.height&&!a.width&&(f=parseInt(r*(a.height/t)),n=o({},n,{style:{width:f+"px",height:a.height+"px"}})),"icon"!==n.type||a&&a.height||(n=o({},n,{style:{width:r+"px",height:t+"px"}})),"tag"===n.type&&a&&a.width&&(n=o({},n,{style:o({},a,{width:null})}));var p="",d=Math.ceil(f/u)+1;"tag"===n.type&&n.value&&(d=this.countString(n.value));var h=(!y&&d<7?"  ":"")+(g?"  ":""),v=d>2?g?"     ":"   ":" ";"tag"===n.type?p=new Array(d).join("  ")+h:"icon"===n.type&&(p=new Array(d).join("  ")+v),p+=y&&d>2?"     ":"";var w=i.value?p+" "+i.value:"";return i=o({},i,{style:l,value:w}),[n,i]}return e},top:function(){var e=this.configList,t=this.needHack;if(s.default.isNonEmptyArray(e)&&2===e.length){var r=e[0].style,n=e[1].style,o=24,i=r&&r.height?r.height:26;n&&n.fontSize&&(o=n.fontSize);var a=t?1.1:1.4;return Math.ceil((o*a-i)/2)}return 0}},methods:{onLoad:function(e){if(e.success&&e.size&&e.size.naturalWidth>0){var t=e.size,r=t.naturalWidth,n=t.naturalHeight;this.iconWidth=r,this.iconHeight=n}else{var o=this.configList;if(s.default.isNonEmptyArray(o)&&2===o.length){var i=o[0].style;i&&i.height&&i.width&&(this.iconWidth=i.width,this.iconHeight=i.height)}}},countString:function(e){var t=/[^ -~]/g;return e.replace(t,"**").length}}}},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["wxc-special-rich-text"]},[r("div",{staticClass:["tag-div"],style:{top:e.top+"px"}},[e.newList[0]&&"icon"===e.newList[0].type&&e.newList[0].src?r("image",{staticClass:["wxc-image"],style:e.newList[0].style,attrs:{src:e.newList[0].src,quality:"original",original:!0,ariaHidden:!0},on:{load:e.onLoad}}):e._e(),e.newList[0]&&"tag"===e.newList[0].type&&e.newList[0].value?r("wxc-rich-text-tag",{attrs:{tagValue:e.newList[0].value,tagTheme:e.newList[0].theme,tagStyle:e.newList[0].style}}):e._e()],1),e.newList[0]&&"text"===e.newList[0].type&&e.newList[0].value?r("text",{class:["wxc-text",e.newList[0].theme],style:e.newList[0].style},[e._v(e._s(e.newList[0].value))]):e._e(),e.newList[1]&&e.newList[1].value?r("text",{class:["wxc-text",e.newList[1].theme],style:e.newList[1].style},[e._v(e._s(e.newList[1].value))]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},19:function(e,t,r){var n,o,i=[];i.push(r(25)),n=r(26);var s=r(27);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-8e3110de",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},25:function(e,t){e.exports={"wxc-text":{fontSize:"24",color:"#3d3d3d"},black:{color:"#3D3D3D"},yellow:{color:"#EE9900"},blue:{color:"#30A0FF"},gray:{color:"#A5A5A5"},red:{color:"#FF5000"},"margin-text":{marginRight:"6"}}},26:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default={props:{textValue:{type:String,default:""},textTheme:{type:String,default:"gray"},textStyle:{type:Object,default:function(){return{}}},hasTextMargin:{type:Boolean,default:!0}},computed:{themeStyle:function(){var e={},t=this.textStyle;return t&&t.fontSize&&(e=n({},e,{fontSize:t.fontSize+"px",height:1.2*t.fontSize+"px"})),t&&t.color&&(e=n({},e,{color:t.color})),e}}}},27:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{class:["wxc-text",e.textTheme,e.hasTextMargin?"margin-text":""],style:e.themeStyle},[e._v(e._s(e.textValue))])},staticRenderFns:[]},e.exports.render._withStripped=!0},300:function(e,t,r){var n,o,i=[];i.push(r(187)),n=r(188);var s=r(189);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-special-rich-text\\index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-b8709178",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},36:function(e,t){e.exports={"wxc-tag":{borderColor:"#3d3d3d",borderWidth:"2",borderRadius:"4",marginRight:"6",backgroundColor:"rgba(0,0,0,0)",paddingLeft:"6",paddingRight:"6",height:"26",justifyContent:"center",alignItems:"center"},"tag-text":{fontSize:"20",color:"#3d3d3d"},black:{color:"#3D3D3D"},yellow:{color:"#EE9900"},blue:{color:"#30A0FF"},gray:{color:"#A5A5A5"},red:{color:"#FF5000"},"border-black":{borderColor:"#A5A5A5"},"border-yellow":{borderColor:"#EE9900"},"border-blue":{borderColor:"#30A0FF"},"border-gray":{borderColor:"#A5A5A5"},"border-red":{borderColor:"#FF5000"}}},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default={props:{tagValue:{type:[String,Number],default:""},tagTheme:{type:String,default:"blue"},tagStyle:{type:Object,default:function(){return{}}}},computed:{newTheme:function(){var e=this.tagStyle,t=this.tagValue,r={},o={};return e&&e.fontSize&&(o=n({},o,{fontSize:e.fontSize+"px"})),e&&e.color&&(o=n({},o,{color:e.color})),e&&e.borderColor&&(r=n({},r,{borderColor:e.borderColor})),e&&e.borderWidth&&(r=n({},r,{borderWidth:e.borderWidth+"px"})),e&&e.borderRadius&&(r=n({},r,{borderRadius:e.borderRadius+"px"})),e&&e.backgroundColor&&(r=n({},r,{backgroundColor:e.backgroundColor})),e&&e.height&&(r=n({},r,{height:e.height+"px"})),e&&e.width&&(r=n({},r,{width:e.width+"px"})),t&&1===t.length&&(r=n({},r,{paddingLeft:0,paddingRight:0})),{divStyle:r,textStyle:o}}}}},38:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["wxc-tag","border-"+e.tagTheme],style:e.newTheme.divStyle},[r("text",{class:["tag-text",e.tagTheme],style:e.newTheme.textStyle},[e._v(e._s(e.tagValue))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},41:function(e,t,r){var n,o,i=[];i.push(r(36)),n=r(37);var s=r(38);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="D:\\weexProjects\\my_projectt\\src\\demo\\component\\weexui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-03d58534",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},6:function(e,t,r){"use strict";var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},7:function(e,t,r){"use strict";(function(t){function n(e){e=e||t.location||{};var r,n={},o=void 0===e?"undefined":l(e);if("blob:"===e.protocol)n=new s(unescape(e.pathname),{});else if("string"===o){n=new s(e,{});for(r in g)delete n[r]}else if("object"===o){for(r in e)r in g||(n[r]=e[r]);void 0===n.slashes&&(n.slashes=d.test(e.href))}return n}function o(e){var t=p.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function i(e,t){for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,s=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),s++):s&&(0===n&&(i=!0),r.splice(n,1),s--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}function s(e,t,r){if(!(this instanceof s))return new s(e,t,r);var a,c,p,d,g,y,v=h.slice(),w=void 0===t?"undefined":l(t),x=this,m=0;for("object"!==w&&"string"!==w&&(r=t,t=null),r&&"function"!=typeof r&&(r=f.parse),t=n(t),c=o(e||""),a=!c.protocol&&!c.slashes,x.slashes=c.slashes||a&&t.slashes,x.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(v[2]=[/(.*)/,"pathname"]);m<v.length;m++)d=v[m],p=d[0],y=d[1],p!==p?x[y]=e:"string"==typeof p?~(g=e.indexOf(p))&&("number"==typeof d[2]?(x[y]=e.slice(0,g),e=e.slice(g+d[2])):(x[y]=e.slice(g),e=e.slice(0,g))):(g=p.exec(e))&&(x[y]=g[1],e=e.slice(0,g.index)),x[y]=x[y]||(a&&d[3]?t[y]||"":""),d[4]&&(x[y]=x[y].toLowerCase());r&&(x.query=r(x.query)),a&&t.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==t.pathname)&&(x.pathname=i(x.pathname,t.pathname)),u(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(d=x.auth.split(":"),x.username=d[0]||"",x.password=d[1]||""),x.origin=x.protocol&&x.host&&"file:"!==x.protocol?x.protocol+"//"+x.host:"null",x.href=x.toString()}function a(e,t,r){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||f.parse)(t)),n[e]=t;break;case"port":n[e]=t,u(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";n[e]=t.charAt(0)!==o?o+t:t}else n[e]=t;break;default:n[e]=t}for(var i=0;i<h.length;i++){var s=h[i];s[4]&&(n[s[1]]=n[s[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n}function c(e){e&&"function"==typeof e||(e=f.stringify);var t,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var o=n+(r.slashes?"//":"");return r.username&&(o+=r.username,r.password&&(o+=":"+r.password),o+="@"),o+=r.host+r.pathname,t="object"===l(r.query)?e(r.query):r.query,t&&(o+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(o+=r.hash),o}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(8),f=r(9),p=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,d=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};s.prototype={set:a,toString:c},s.extractProtocol=o,s.location=n,s.qs=f,e.exports=s}).call(t,r(6))},8:function(e,t,r){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},9:function(e,t,r){"use strict";function n(e){return decodeURIComponent(e.replace(/\+/g," "))}function o(e){for(var t,r=/([^=?&]+)=?([^&]*)/g,o={};t=r.exec(e);){var i=n(t[1]),s=n(t[2]);i in o||(o[i]=s)}return o}function i(e,t){t=t||"";var r=[];"string"!=typeof t&&(t="?");for(var n in e)s.call(e,n)&&r.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return r.length?t+r.join("&"):""}var s=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=o}});