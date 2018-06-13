// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 540);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rotateLeft = function rotateLeft(lValue, iShiftBits) {
  return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
};

var addUnsigned = function addUnsigned(lX, lY) {
  var lX4, lY4, lX8, lY8, lResult;
  lX8 = lX & 0x80000000;
  lY8 = lY & 0x80000000;
  lX4 = lX & 0x40000000;
  lY4 = lY & 0x40000000;
  lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
  if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;
  if (lX4 | lY4) {
    if (lResult & 0x40000000) return lResult ^ 0xC0000000 ^ lX8 ^ lY8;else return lResult ^ 0x40000000 ^ lX8 ^ lY8;
  } else {
    return lResult ^ lX8 ^ lY8;
  }
};

var F = function F(x, y, z) {
  return x & y | ~x & z;
};

var G = function G(x, y, z) {
  return x & z | y & ~z;
};

var H = function H(x, y, z) {
  return x ^ y ^ z;
};

var I = function I(x, y, z) {
  return y ^ (x | ~z);
};

var FF = function FF(a, b, c, d, x, s, ac) {
  a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
  return addUnsigned(rotateLeft(a, s), b);
};

var GG = function GG(a, b, c, d, x, s, ac) {
  a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
  return addUnsigned(rotateLeft(a, s), b);
};

var HH = function HH(a, b, c, d, x, s, ac) {
  a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
  return addUnsigned(rotateLeft(a, s), b);
};

var II = function II(a, b, c, d, x, s, ac) {
  a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
  return addUnsigned(rotateLeft(a, s), b);
};

var convertToWordArray = function convertToWordArray(string) {
  var lWordCount;
  var lMessageLength = string.length;
  var lNumberOfWordsTempOne = lMessageLength + 8;
  var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - lNumberOfWordsTempOne % 64) / 64;
  var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
  var lWordArray = Array(lNumberOfWords - 1);
  var lBytePosition = 0;
  var lByteCount = 0;
  while (lByteCount < lMessageLength) {
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
    lByteCount++;
  }
  lWordCount = (lByteCount - lByteCount % 4) / 4;
  lBytePosition = lByteCount % 4 * 8;
  lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
  lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
  lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
  return lWordArray;
};

var wordToHex = function wordToHex(lValue) {
  var WordToHexValue = "",
      WordToHexValueTemp = "",
      lByte,
      lCount;
  for (lCount = 0; lCount <= 3; lCount++) {
    lByte = lValue >>> lCount * 8 & 255;
    WordToHexValueTemp = "0" + lByte.toString(16);
    WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
  }
  return WordToHexValue;
};

var uTF8Encode = function uTF8Encode(string) {
  string = string.replace(/\x0d\x0a/g, "\x0a");
  var output = "";
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);
    if (c < 128) {
      output += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      output += String.fromCharCode(c >> 6 | 192);
      output += String.fromCharCode(c & 63 | 128);
    } else {
      output += String.fromCharCode(c >> 12 | 224);
      output += String.fromCharCode(c >> 6 & 63 | 128);
      output += String.fromCharCode(c & 63 | 128);
    }
  }
  return output;
};

function md5(string) {
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = uTF8Encode(string);
  x = convertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }
  var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
  return tempValue.toLowerCase();
}

function getSign(obj) {
  var obj = obj; //要排序的对象
  //进行排序
  var res = new Array();
  for (var i = 0; i < obj.length; i++) {
    res[i] = obj[i]['name'] + obj[i]["value"];
  }

  res = res.sort();
  //排序完成进行字符拼接
  var newword = "";
  for (var i = 0; i < res.length; i++) {
    newword += res[i];
  }
  //拼接完成进行第一次md5加密
  var fmd5 = md5(newword);
  //加密完成后将字符转为大写后加上token
  //var token = "8bbb73a1c8b6b9e86c6d19a51e9099d8dd3df7f17ab749c88dc93e6e150f4c20";
  //var token = "05431de91278eb78d582c48f25b940ac15cd582b88f08eee94f253c11a400088";
  var app_secret = "kj123nh21v42ejdd2j3h21uedwjkd23h12jd";
  fmd5 = fmd5.toUpperCase() + app_secret;
  fmd5 = md5(fmd5).toUpperCase();
  return fmd5;
}

function Params(obj) {
  var param = "";
  for (var name in obj) {
    if (typeof obj[name] != 'function') {
      param += "&" + name + "=" + encodeURI(obj[name]);
    }
  }
  console.log(param.substring(1));
  return param.substring(1);
}

function post(data, complete) {
  var resdata = '{';
  for (var i = 0; i < data.length; i++) {
    if (i < data.length - 1) {
      resdata += "\"" + data[i]['name'] + "\":" + "\"" + data[i]["value"] + "\",";
      continue;
    }
    resdata += "\"" + data[i]['name'] + "\":" + "\"" + data[i]["value"] + "\",\"sign\":" + "\"" + getSign(data) + "\"}";
  }
  console.log(resdata);
  var param = JSON.parse(resdata);
  console.log(param);
  //var stream = weex.requireModule('stream');

  // var proxy = require('http-proxy-middleware');

  // var apiProxy = proxy('/api', {target: 'http://47.98.186.145/api/web/apis'});
  // console.log(apiProxy);
  // stream.fetch({
  //                   method:"POST",
  //                   type:'jsonp',
  //                   url:'http://47.98.186.145/api/web/apis',
  //                   headers:{'Content-Type':'application/x-www-form-urlencoded'},
  //                   body:Params(param)

  //               }, function(ret) {
  //                 console.log("==============");
  //                 console.log(ret);
  //                 console.log("==============");
  //                 return ret;
  //               }
  //               );

  var net = weex.requireModule('net');
  var modal = weex.requireModule('modal');
  net.post('http://193.112.19.135:88/api/web/index.php/apis', param, {}, function () {
    //start
  }, function (e) {
    //success
    complete(e.res);
    //self.header=r.headers;
  }, function (e) {
    //exception

  }, function () {
    //compelete
  });
}

function postPhoto(amount, param, complete) {
  var net = weex.requireModule("net");
  net.postFile('http://47.98.186.145/api/web/photo.php?amount=' + amount, {}, {}, param, function () {
    //start
  }, function (e) {
    //succcess
    //var modal=weex.requireModule("modal")
    //modal.toast({message:e})
    complete(e.res.code);
  }, function () {
    //compelete
  }, function () {
    //exception
    var modal = weex.requireModule("modal");
    modal.toast({ message: '上传异常！' });
  });
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function addProductStorage(data) {
  var key = 'product_list_345rdgfdg_jg';
  var plist = wx.getStorageSync(key);
  if (plist == null) {
    plist = [];
  }
}

function filterProductJson(jsonList, value) {
  var retList = [];
  var i = 0;
  for (var index in jsonList) {
    var temp = jsonList[index];
    if (temp.code.indexOf(value) != -1 || temp.goodsName.indexOf(value) != -1) {
      retList[i] = temp;
      i++;
    }
  }
  return retList;
}

function getProductStorage(key) {}

module.exports = {
  post: post,
  formatTime: formatTime,
  postPhoto: postPhoto
};

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(541)
)

/* script */
__vue_exports__ = __webpack_require__(542)

/* template */
var __vue_template__ = __webpack_require__(543)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\src\\demo\\b2bapp\\order\\orders_list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63aae54e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = {
  "c": {
    "width": "750",
    "height": "40",
    "backgroundColor": "#d0243c"
  },
  "a": {
    "marginLeft": "20",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#c4c4c4",
    "borderRadius": "5",
    "width": "403",
    "height": "70"
  },
  "input1": {
    "borderRadius": "5",
    "height": "65",
    "width": "300",
    "lineHeight": "50",
    "marginLeft": "50"
  },
  "input2": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "justifyContent": "center",
    "paddingLeft": "20",
    "paddingRight": "20",
    "height": "50",
    "marginLeft": "10",
    "marginRight": "10"
  },
  "bar": {
    "alignItems": "center",
    "flexDirection": "row",
    "height": "100",
    "backgroundColor": "#d0243c",
    "width": "750"
  },
  "item_row1": {
    "paddingTop": "20",
    "paddingBottom": "20",
    "flexDirection": "row",
    "width": "730"
  },
  "item_row2": {
    "alignItems": "center",
    "flexDirection": "row",
    "height": "50",
    "lineHeight": "50"
  },
  "item_row3": {
    "alignItems": "center",
    "backgroundColor": "#f3f3f3",
    "flexDirection": "row",
    "width": "750",
    "height": "180"
  },
  "item_row4": {
    "paddingLeft": "50",
    "marginTop": "10",
    "marginBottom": "10",
    "flexDirection": "row",
    "width": "750",
    "height": "70"
  },
  "item": {
    "width": "750",
    "alignItems": "flex-start"
  },
  "item-container": {
    "width": "750",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "d": {
    "justifyContent": "center",
    "backgroundColor": "#bfbfbf",
    "height": "30",
    "width": "2"
  },
  "d1": {
    "marginLeft": "30"
  },
  "d2": {
    "marginRight": "20"
  },
  "d3": {
    "flex": 1,
    "alignItems": "center"
  },
  "d5": {
    "borderWidth": "2",
    "borderColor": "#c4c4c4",
    "borderStyle": "solid",
    "flexDirection": "column",
    "backgroundColor": "#f5f5f5"
  },
  "d6": {
    "flexDirection": "row",
    "flex": 1
  },
  "d7": {
    "borderTopWidth": "2",
    "borderBottomWidth": "2",
    "borderStyle": "dotted",
    "borderColor": "#808080",
    "paddingTop": "20",
    "paddingBottom": "20",
    "marginTop": "20",
    "marginLeft": "10",
    "width": "730"
  },
  "d8": {
    "flexDirection": "column",
    "paddingLeft": "30",
    "paddingTop": "20",
    "width": "726",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#c4c4c4"
  },
  "d9": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "30",
    "marginBottom": "30",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "100",
    "flexDirection": "row"
  },
  "d10": {
    "flex": 1,
    "alignItems": "flex-end",
    "marginRight": "40"
  },
  "d11": {
    "alignItems": "center"
  },
  "d12": {
    "textAlign": "center",
    "backgroundColor": "#d0243c",
    "color": "#ffffff",
    "width": "100",
    "height": "40"
  },
  "d13": {
    "textAlign": "center",
    "fontSize": "25",
    "color": "#FFFFFF",
    "width": "60",
    "height": "30",
    "backgroundColor": "#d0243c",
    "position": "absolute",
    "left": "0",
    "top": "0"
  },
  "d14": {
    "position": "relative",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#c4c4c4",
    "width": "165",
    "height": "165",
    "marginBottom": "30"
  },
  "d15": {
    "textAlign": "center",
    "color": "#FFFFFF",
    "width": "30",
    "height": "30",
    "backgroundColor": "#d0243c",
    "position": "absolute",
    "right": "0",
    "top": "0"
  },
  "d16": {
    "marginTop": "30",
    "justifyContent": "center",
    "borderRadius": "5",
    "width": "730",
    "height": "60",
    "backgroundColor": "#d0243c"
  },
  "d17": {
    "alignSelf": "center"
  },
  "img": {
    "width": "30",
    "height": "30"
  },
  "img1": {
    "width": "60",
    "height": "60"
  },
  "img2": {
    "width": "165",
    "height": "165"
  },
  "img3": {
    "width": "45",
    "height": "45"
  },
  "title": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "40",
    "color": "#FFFFFF"
  },
  "text1": {
    "fontSize": "20",
    "alignItems": "flex-end",
    "width": "150"
  },
  "text2": {
    "fontSize": "20",
    "alignItems": "flex-start",
    "width": "300"
  },
  "text3": {
    "alignItems": "center",
    "fontSize": "25",
    "height": "50",
    "lineHeight": "50"
  },
  "text4": {
    "fontSize": "20",
    "alignItems": "flex-end",
    "width": "280"
  },
  "text5": {
    "marginLeft": "50",
    "marginRight": "10",
    "fontSize": "30",
    "color": "#808080",
    "justifyContent": "center"
  },
  "text6": {
    "marginLeft": "10",
    "marginRight": "10",
    "fontSize": "30",
    "color": "#0000FF",
    "justifyContent": "center"
  },
  "text7": {
    "fontSize": "35",
    "color": "#707070",
    "justifyContent": "center"
  },
  "text8": {
    "fontSize": "25",
    "lineHeight": "40",
    "color": "#0000FF"
  },
  "text9": {
    "alignItems": "center",
    "fontSize": "25",
    "lineHeight": "40"
  },
  "text10": {
    "color": "#d0243c",
    "height": "50",
    "lineHeight": "50"
  },
  "text11": {
    "fontSize": "30",
    "color": "#FF0000",
    "height": "50",
    "lineHeight": "50"
  },
  "text12": {
    "fontSize": "30",
    "textAlign": "center",
    "height": "65",
    "lineHeight": "65"
  },
  "text13": {
    "fontSize": "25"
  },
  "text14": {
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "30",
    "justifyContent": "center"
  },
  "text15": {
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "35"
  },
  "text16": {
    "fontSize": "30",
    "color": "#2C2C2C",
    "justifyContent": "center"
  },
  "text17": {
    "color": "#5b8dfd",
    "fontSize": "30",
    "justifyContent": "center"
  },
  "text18": {
    "textAlign": "center",
    "fontSize": "30",
    "color": "#707070",
    "justifyContent": "center"
  },
  "text19": {
    "textAlign": "center",
    "fontSize": "25",
    "color": "#ffffff",
    "justifyContent": "center"
  }
}

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(24);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var pref = weex.requireModule("pref");
exports.default = {
    data: function data() {
        return {
            sales_staff_name: '未登录',
            list2: '',

            list: {
                "l1": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "2842.00",
                    "deposit": "0.02",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods1": {
                            "activity": "兑换",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop1.png"
                        },
                        "goods2": {
                            "activity": "",
                            "count": "3",
                            "img_url": "http://193.112.19.135/static/img/shop2.png"
                        },
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        },
                        "goods4": {
                            "activity": "兑换",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop1.png"
                        }
                    }, {
                        "goods5": {
                            "activity": "",
                            "count": "3",
                            "img_url": "http://193.112.19.135/static/img/shop2.png"
                        },

                        "goods6": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        },
                        "goods7": {
                            "activity": "兑换",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop1.png"
                        },
                        "goods8": {
                            "activity": "",
                            "count": "3",
                            "img_url": "http://193.112.19.135/static/img/shop2.png"
                        }
                    }, {
                        "goods9": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                },
                "l2": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                },
                "l3": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                },
                "l4": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                },
                "l5": {
                    "status": "待发货",
                    "store_name": "万豪国际",
                    "user_name": "wh001",
                    "order_no": "179523795008001",
                    "pay": "172.00",
                    "deposit": "",
                    "payment_method": "信用支付",
                    "order_time": "2018-03-05 16:26:36",
                    "goods_list": [{
                        "goods3": {
                            "activity": "",
                            "count": "1",
                            "img_url": "http://193.112.19.135/static/img/shop3.png"
                        }
                    }]

                }
            }
        };
    },
    created: function created() {
        var that = this;
        var user = pref.get('user');

        if (user.length != 0) {
            that.sales_staff_name = user.sales_staff_name;
        }

        var dataparam = [{ 'name': "method", 'value': "sfa.order.select" }, { 'name': "app_key", 'value': "b2bapp" }, { 'name': "format", 'value': "json" }, { 'name': "datetime", 'value': _http2.default.formatTime(new Date()) }, { 'name': "v", 'value': '2.0' }, { 'name': "access_token", 'value': user.access_token }, { 'name': "member_id", 'value': '' }, { 'name': "start_time", 'value': '' }, { 'name': "end_time", 'value': '' }, { 'name': "page_index", 'value': '' }, { 'name': "page_size", 'value': '' }];
        _http2.default.post(dataparam, function (res) {
            that.list2 = res.data;
            that.list2.member_name = '';
        });
    },


    methods: {
        create_order: function create_order(event) {
            console.log('create_order:', event);
            modal.toast({
                message: '跳转到创建订单页(create_order.vue)',
                duration: 3
            });
            var nav = weex.requireModule('navigator');
            nav.push('./create_order.js');
        },
        nextPage: function nextPage() {
            var user = pref.get('user');
            var that = this;
            if (that.list2.page_index != that.list2.page_count) {
                that.list2.page_index++;
            } else {
                modal.toast({
                    message: '已经到尾了!',
                    duration: 1
                });
            }

            var dataparam = [{ 'name': "method", 'value': "sfa.order.select" }, { 'name': "app_key", 'value': "b2bapp" }, { 'name': "format", 'value': "json" }, { 'name': "datetime", 'value': _http2.default.formatTime(new Date()) }, { 'name': "v", 'value': '2.0' }, { 'name': "access_token", 'value': user.access_token }, { 'name': "member_id", 'value': '' }, { 'name': "start_time", 'value': '' }, { 'name': "end_time", 'value': '' }, { 'name': "page_index", 'value': that.list2.page_index }, { 'name': "page_size", 'value': '' }];
            _http2.default.post(dataparam, function (res) {
                that.list2 = res.data;
                that.list2.member_name = '';
            });
        },
        previousPage: function previousPage() {
            var user = pref.get('user');
            var that = this;

            if (that.list2.page_index != 1) {
                that.list2.page_index--;
            } else {
                modal.toast({
                    message: '已经到头了!',
                    duration: 1
                });
            }

            var dataparam = [{ 'name': "method", 'value': "sfa.order.select" }, { 'name': "app_key", 'value': "b2bapp" }, { 'name': "format", 'value': "json" }, { 'name': "datetime", 'value': _http2.default.formatTime(new Date()) }, { 'name': "v", 'value': '2.0' }, { 'name': "access_token", 'value': user.access_token }, { 'name': "member_id", 'value': '' }, { 'name': "start_time", 'value': '' }, { 'name': "end_time", 'value': '' }, { 'name': "page_index", 'value': that.list2.page_index }, { 'name': "page_size", 'value': '' }];
            _http2.default.post(dataparam, function (res) {
                that.list2 = res.data;
            });
        },
        check_memberName: function check_memberName() {
            var user = pref.get('user');
            var that = this;
            var dataparam = [{ 'name': "method", 'value': "sfa.order.select" }, { 'name': "app_key", 'value': "b2bapp" }, { 'name': "format", 'value': "json" }, { 'name': "datetime", 'value': _http2.default.formatTime(new Date()) }, { 'name': "v", 'value': '2.0' }, { 'name': "access_token", 'value': user.access_token }, { 'name': "member_id", 'value': that.member_id }, { 'name': "start_time", 'value': '' }, { 'name': "end_time", 'value': '' }, { 'name': "page_index", 'value': that.list2.page_index }, { 'name': "page_size", 'value': '' }];
            _http2.default.post(dataparam, function (res) {
                var mes = res.data.list;
                if (mes == '') {
                    modal.toast({ message: '无数据', duration: 3 });
                } else {
                    that.list2 = res.data;
                }
            });
        }
    }
};

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-container"]
  }, [_c('div', {
    staticClass: ["c"]
  }), _vm._m(0), _c('scroller', [_vm._m(1), _c('div', {
    staticClass: ["d17"]
  }, [_c('div', {
    staticClass: ["d16"],
    on: {
      "click": _vm.check_memberName
    }
  }, [_c('text', {
    staticClass: ["text15"]
  }, [_vm._v("查询")])])]), _c('ul', _vm._l((_vm.list2.list), function(value) {
    return _c('li', [_c('div', {
      staticClass: ["d7"]
    }, [_c('div', {
      staticClass: ["d12"]
    }, [_c('text', {
      staticClass: ["text14"]
    }, [_vm._v(_vm._s(value.state_name))])]), _c('div', {
      staticClass: ["d5"]
    }, [_c('div', {
      staticClass: ["item_row1"]
    }, [_c('div', {
      staticClass: ["text1"]
    }, [_c('text', {
      staticClass: ["text3"]
    }, [_vm._v("店铺名称：")]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v("会员名称：")]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v("订单号：")]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v("应付金额：")]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v("支付方式：")]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v("订单时间：")])]), _c('div', {
      staticClass: ["text2"]
    }, [_c('text', {
      staticClass: ["text3"]
    }, [_vm._v(_vm._s(value.shop_name))]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v(_vm._s(value.member_name))]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v(_vm._s(value.order_id))]), _c('div', {
      staticClass: ["item_row2"]
    }, [_c('text', {
      staticClass: ["text10"]
    }, [_vm._v("￥" + _vm._s(value.pay_amount))]), (value.foregift != '0.00' && value.foregift != '') ? _c('text', {
      staticClass: ["text11"]
    }, [_vm._v("[押￥" + _vm._s(value.foregift) + "]")]) : _vm._e()]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v(_vm._s(value.payment_name))]), _c('text', {
      staticClass: ["text3"]
    }, [_vm._v(_vm._s(value.created))])]), _c('div', {
      staticClass: ["text4"]
    }, [_c('div', {
      staticClass: ["item_row2"]
    }, [_c('text', {
      staticClass: ["text9"]
    }, [_vm._v("查看")]), _c('image', {
      staticClass: ["img"],
      attrs: {
        "src": "http://193.112.19.135/static/img/next.png"
      }
    })]), _c('text', {
      staticClass: ["text3"]
    }), _c('div', {
      staticClass: ["item_row2"],
      on: {
        "click": _vm.create_order
      }
    }, [_c('text', {
      staticClass: ["text8"]
    }, [_vm._v("再来一单")]), _c('image', {
      staticClass: ["img"],
      attrs: {
        "src": "http://193.112.19.135/static/img/next.png"
      }
    })])])])])])])
  })), _c('div', {
    staticClass: ["d9"]
  }, [_c('div', {
    staticClass: ["input2"],
    on: {
      "click": _vm.previousPage
    }
  }, [_c('text', {
    staticClass: ["text18"]
  }, [_vm._v("上一页")])]), _c('text', {
    staticClass: ["text13"]
  }, [_vm._v(_vm._s(_vm.list2.page_index) + "/" + _vm._s(_vm.list2.page_count))]), _c('image', {
    staticClass: ["img3"],
    attrs: {
      "src": "http://193.112.19.135/static/img/Inverted-triangle.png"
    }
  }), _c('div', {
    staticClass: ["input2"],
    on: {
      "click": _vm.nextPage
    }
  }, [_c('text', {
    staticClass: ["text18"]
  }, [_vm._v("下一页")])])]), _c('div', {
    staticClass: ["item_row3"]
  }, [_c('div', {
    staticClass: ["text5"]
  }, [_c('text', {
    staticClass: ["text16"]
  }, [_vm._v("您好，" + _vm._s(_vm.sales_staff_name) + "! ")])]), _c('div', {
    staticClass: ["d"]
  }), _vm._m(2), _vm._m(3)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bar"]
  }, [_c('div', {
    staticClass: ["d1"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": "http://193.112.19.135/static/img/upper.png"
    }
  })]), _c('div', {
    staticClass: ["d3"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("会员所有订单")])]), _c('div', {
    staticClass: ["d2"]
  }, [_c('image', {
    staticClass: ["img1"],
    attrs: {
      "src": "http://193.112.19.135/static/img/home.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('div', {
    staticClass: ["item_row4"]
  }, [_c('text', {
    staticClass: ["text12"]
  }, [_vm._v("会员选择")]), _c('div', {
    staticClass: ["a"]
  }, [_c('input', {
    staticClass: ["input1"],
    attrs: {
      "type": "text",
      "placeholder": "  请选择用户"
    }
  })])]), _c('div', {
    staticClass: ["item_row4"]
  }, [_c('text', {
    staticClass: ["text12"]
  }, [_vm._v("开始时间")]), _c('div', {
    staticClass: ["a"]
  }, [_c('input', {
    staticClass: ["input1"],
    attrs: {
      "type": "text",
      "placeholder": "  开始时间"
    }
  })])]), _c('div', {
    staticClass: ["item_row4"]
  }, [_c('text', {
    staticClass: ["text12"]
  }, [_vm._v("结束时间")]), _c('div', {
    staticClass: ["a"]
  }, [_c('input', {
    staticClass: ["input1"],
    attrs: {
      "type": "text",
      "placeholder": "  结束时间"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text6"]
  }, [_c('text', {
    staticClass: ["text17"]
  }, [_vm._v("退出")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["d10"]
  }, [_c('div', {
    staticClass: ["d11"]
  }, [_c('image', {
    staticClass: ["img3"],
    attrs: {
      "src": "http://193.112.19.135/static/img/up.png"
    }
  }), _c('text', {
    staticClass: ["text7"]
  }, [_vm._v("回到顶部")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });