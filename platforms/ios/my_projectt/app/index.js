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
/******/ 	return __webpack_require__(__webpack_require__.s = 890);
/******/ })
/************************************************************************/
/******/ ({

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(891)
)

/* script */
__vue_exports__ = __webpack_require__(892)

/* template */
var __vue_template__ = __webpack_require__(893)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42e96f35"
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

/***/ 891:
/***/ (function(module, exports) {

module.exports = {
  "add": {
    "width": "250",
    "height": "250",
    "backgroundColor": "#0088fb",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "pic": {
    "width": "250",
    "height": "250",
    "backgroundColor": "#FF0000",
    "borderWidth": 1,
    "borderColor": "#ffffff"
  }
}

/***/ }),

/***/ 892:
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

exports.default = {
    data: function data() {
        return {
            items: [1, 1, 1, 1, 1, 1]
        };
    },

    methods: {
        add: function add() {
            this.items.push(1);
        },
        remove: function remove(item) {
            //                this.items.remove(0)

            this.items.splice(this.items.length - 1, 1);
        }
    },
    created: function created() {

        var globalEvent = weex.requireModule('globalEvent');
        globalEvent.addEventListener("onPageInit", function (e) {});
    }
};

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticStyle: {
      padding: "5",
      flexDirection: "row",
      marginTop: "50"
    }
  }, [_c('div', {
    staticStyle: {
      borderRadius: "3",
      marginLeft: "20",
      width: "30",
      height: "30",
      backgroundColor: "red",
      marginTop: "40",
      transform: "rotate(-45deg)"
    }
  }), _c('div', {
    staticStyle: {
      backgroundColor: "red",
      padding: "15",
      borderRadius: "5",
      paddingTop: "10",
      paddingBottom: "10",
      marginLeft: "-15"
    }
  }, [_c('text', {
    staticStyle: {
      maxWidth: "300"
    }
  }, [_vm._v("1111111111111111111111ssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssssssss")])]), _c('div', {
    staticStyle: {
      flex: "1"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });