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
/******/ 	return __webpack_require__(__webpack_require__.s = 610);
/******/ })
/************************************************************************/
/******/ ({

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(611)
)
__vue_styles__.push(__webpack_require__(612)
)

/* script */
__vue_exports__ = __webpack_require__(613)

/* template */
var __vue_template__ = __webpack_require__(614)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\src\\demo\\component\\check.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3e06c846"
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

/***/ 611:
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

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "color": "#ffffff",
    "fontSize": 30
  },
  "text-disabled": {
    "color": "#b4b4b4",
    "fontSize": 30
  },
  "button": {
    "height": 100,
    "backgroundColor": "#ff4800",
    "alignItems": "center",
    "justifyContent": "center",
    "color": "#ffffff",
    "borderRadius": 8,
    "backgroundColor:active": "#ff1b08"
  },
  "button-disabled": {
    "height": 100,
    "backgroundColor": "#eeeeee",
    "alignItems": "center",
    "justifyContent": "center",
    "color": "#ffffff",
    "borderRadius": 8,
    "backgroundColor:active": "#eeeeee"
  }
}

/***/ }),

/***/ 613:
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


exports.default = {
    props: {

        ischeck: {

            default: false
        },
        item: {
            default: {}
        }

    },
    data: function data() {
        return {};
    },

    methods: {
        onclick: function onclick() {
            this.ischeck = !this.ischeck;
            var p = {};
            p.item = this.item;
            p.check = this.ischeck;
            this.$emit('change', p);
        }
    },

    created: function created() {},
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

/***/ 614:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      alignItems: "center",
      justifyContent: "center"
    },
    on: {
      "click": _vm.onclick
    }
  }, [_c('image', {
    staticStyle: {
      width: "40",
      height: "40"
    },
    attrs: {
      "src": _vm.ischeck ? 'root:img/select.png' : 'root:img/unselect.png'
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });