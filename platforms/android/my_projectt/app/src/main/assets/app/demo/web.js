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
/******/ 	return __webpack_require__(__webpack_require__.s = 823);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "layout": {
    "backgroundColor": "#333333",
    "height": 128,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "750"
  }
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    props: {
        title: {
            default: ''

        },
        back: {
            default: true
        },
        bgcolor: {
            default: '#222222'

        },
        isloading: {
            default: false
        },
        disabled: {

            default: false
        },

        type: {
            type: String,
            default: 'text'
        },
        font_size: {
            default: 20
        },
        height: {
            default: 128
        },
        top: {
            default: 40
        },
        titletop: {
            default: 10
        }

    },
    data: function data() {
        return {};
    },

    methods: {
        titleClick: function titleClick() {
            this.$emit('titleClick');
        },
        rightclick: function rightclick() {
            this.$emit('rightClick');
        },
        backTo: function backTo() {
            var nav = weex.requireModule("navigator");
            nav.back();
            this.$emit('backClick');
        },
        onclick: function onclick() {
            if (!this.disabled) this.$emit('onclick');
        },
        adjust: function adjust() {
            if (weex.config.env.platform == 'android') {
                //                    if(weex.config.env.osVersion=)
                var p = weex.config.env.osVersion;
                p = p.replace(/\./g, '');
                if (p.length < 3) p = p + "0";
                if (p <= '440') {
                    this.height = 108;
                    this.top = 16;
                    this.titletop = 4;
                }
            }
        }
    },

    created: function created() {

        this.adjust();
    },
    ready: function ready() {}
    //        watch: {
    //
    //
    //            disabled:{
    //                immediate: true,
    //                handler (val) {
    //
    //                }
    //            }
    //        }
};

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"],
    style: {
      'background-color': _vm.bgcolor,
      'height': _vm.height
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row"
    },
    style: {
      'top': _vm.titletop
    }
  }, [(_vm.isloading) ? _c('div', {
    staticStyle: {
      height: "40",
      width: "40",
      marginRight: "10"
    }
  }) : _vm._e(), _c('text', {
    staticStyle: {
      flex: "1",
      color: "#ffffff",
      textAlign: "center",
      fontSize: "38"
    },
    on: {
      "click": _vm.titleClick
    }
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.isloading) ? _c('floading', {
    staticStyle: {
      height: "40",
      width: "40",
      marginLeft: "10",
      marginTop: "5"
    },
    attrs: {
      "color": "#ffffff",
      "loadingStyle": "small"
    }
  }) : _vm._e()], 1), (_vm.back) ? _c('div', {
    staticStyle: {
      width: "200",
      top: "40",
      position: "absolute",
      left: "0"
    },
    style: {
      'height': _vm.height,
      'top': _vm.top
    },
    on: {
      "click": _vm.backTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "80",
      height: "80"
    },
    attrs: {
      "src": "root:img/back.png"
    }
  })]) : _vm._e(), _c('div', {
    staticStyle: {
      width: "200",
      position: "absolute",
      right: "0",
      top: "0",
      alignItems: "center",
      justifyContent: "center"
    },
    style: {
      'height': _vm.height
    },
    on: {
      "click": _vm.rightclick
    }
  }, [_vm._t("right")], 2), _c('div', {
    staticStyle: {
      height: "1",
      backgroundColor: "#111111",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\src\\demo\\header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0c4892c9"
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


/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(824)
)

/* script */
__vue_exports__ = __webpack_require__(825)

/* template */
var __vue_template__ = __webpack_require__(826)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\src\\demo\\web.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-34a3ba48"
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

/***/ 824:
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": 50
  },
  "btn": {
    "backgroundColor": "#0085ee",
    "height": 100,
    "marginTop": 50,
    "marginLeft": 50,
    "marginRight": 50,
    "borderRadius": 10,
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor:active": "#006ce7"
  }
}

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var head = __webpack_require__(13);
var progress = weex.requireModule("progress");
exports.default = {
    components: { head: head },
    data: function data() {
        return {
            text: '',
            param: '',
            data: {},
            src: 'https://www.baidu.com'
        };
    },

    methods: {
        load: function load() {
            //            this.src='https://www.baidu.com'
            this.src = "<div>这是富文本<img src='https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=34f6ae03998fa0ec7fc7630b1eac3ed3/4034970a304e251fc3ec88c8af86c9177f3e53e2.jpg'></img></div>";
        },
        goForward: function goForward() {
            this.$refs.web.goForward();
        },
        goBack: function goBack() {
            this.$refs.web.goBack();
        }
    },

    created: function created() {

        var self = this;
        var globalEvent = weex.requireModule('globalEvent');
        globalEvent.addEventListener("onPageInit", function (e) {});
    }
};

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('head', {
    appendAsTree: true,
    attrs: {
      "title": "web",
      "append": "tree"
    }
  }), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.load
    }
  }, [_c('text', [_vm._v("加载")])]), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.goForward()
      }
    }
  }, [_c('text', [_vm._v("前进")])]), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.goBack()
      }
    }
  }, [_c('text', [_vm._v("后退")])]), _c('div', {
    staticStyle: {
      flex: "1"
    }
  }, [_c('web', {
    ref: "web",
    staticStyle: {
      position: "absolute",
      left: "0",
      top: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "red"
    },
    attrs: {
      "src": _vm.src,
      "bounce": "false",
      "showLoading": false
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "backgroundColor": "#FF0000",
    "flex": 1,
    "flexDirection": "row"
  },
  "tz": {
    "color": "#FF0000"
  },
  "logo": {
    "width": 300,
    "height": 300,
    "marginTop": 80
  },
  "k1": {
    "alignItems": "center"
  },
  "titleback": {
    "flex": 1,
    "alignItems": "center"
  },
  "title": {
    "color": "#FFFFFF",
    "flex": 1,
    "marginTop": 73,
    "fontWeight": "bold"
  },
  "leftimage": {
    "width": 30,
    "height": 45,
    "bottom": 25,
    "left": 30,
    "position": "absolute"
  },
  "rightimage": {
    "width": 45,
    "height": 45,
    "bottom": 23,
    "right": 32,
    "position": "absolute"
  },
  "bottomline": {
    "height": 1,
    "backgroundColor": "#000000",
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flex": 1
  },
  "btn": {
    "backgroundColor": "#0085ee",
    "height": 100,
    "width": 500,
    "marginTop": 50,
    "borderRadius": 20,
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor:active": "#006ce7"
  }
}

/***/ })

/******/ });