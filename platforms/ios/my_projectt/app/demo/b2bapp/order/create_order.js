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
/******/ 	return __webpack_require__(__webpack_require__.s = 536);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (fn) {
  if (( false ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = fn();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
      module.exports = fn();
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var root;
    if (typeof window !== "undefined") {
      root = window;
    } else if (typeof self !== "undefined") {
      root = self;
    } else if (typeof global !== "undefined") {
      root = global;
    } else {
      // NOTICE: In JavaScript strict mode, this is null
      root = this;
    }
    root["index"] = fn();
  }
})(function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var _bindingxParser = __webpack_require__(1);

      var isWeb = false;
      var isWeex = true;

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      }

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};

      try {
        WeexBinding = requireModule('bindingx');
        isSupportNewBinding = true;
      } catch (e) {
        isSupportNewBinding = false;
      }
      if (!WeexBinding || !WeexBinding.bind) {
        try {
          WeexBinding = requireModule('binding');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
      }
      isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
      if (!isSupportNewBinding) {
        try {
          WeexBinding = requireModule('expressionBinding');
          isSupportBinding = true;
        } catch (err) {
          isSupportBinding = false;
        }
      }
      isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));

      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT
            });
          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
            } else {
              WeexBinding.enableBinding(options.anchor, options.eventType);
              // 处理expression的参数格式
              var expressionArgs = options.props.map(function (prop) {
                return {
                  element: prop.element,
                  property: prop.property,
                  expression: prop.expression.transformed
                };
              });
              WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
            }
          }
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbind(options);
            } else {
              return WeexBinding.disableBinding(options.anchor, options.eventType);
            }
          }
        },
        unbindAll: function unbindAll() {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbindAll();
            } else {
              return WeexBinding.disableAll();
            }
          }
        },
        prepare: function prepare(options) {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.prepare(options);
            } else {
              return WeexBinding.enableBinding(options.anchor, options.eventType);
            }
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (isSupportNewBinding) {
            return WeexBinding.getComputedStyle(el);
          } else {
            return {};
          }
        }
      };
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = __webpack_require__(2);

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var lex = {
        InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
        WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
        LineTerminator: /[\n\r\u2028\u2029]/,
        Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
        NullLiteral: /null(?![_$a-zA-Z0-9])/,
        BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
        Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
        Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
        DivPunctuator: /\/=|\//,
        NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
        StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
        RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
      };

      function XRegExp(xregexps, rootname, flag) {
        var expnames = [rootname];

        function buildRegExp(source) {
          var regexp = new RegExp();
          regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
            if (!xregexps[expname]) return '';
            expnames.push(expname);
            if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
            return '(' + buildRegExp(xregexps[expname]).source + ')';
          }), flag);
          return regexp;
        }

        var regexp = buildRegExp(xregexps[rootname]);
        this.exec = function (string) {
          var matches = regexp.exec(string);
          if (matches == null) return null;
          var result = new String(matches[0]);
          for (var i = 0; i < expnames.length; i++) {
            if (matches[i]) result[expnames[i]] = matches[i];
          }return result;
        };
        Object.defineProperty(this, 'lastIndex', {
          'get': function get() {
            return regexp.lastIndex;
          },
          'set': function set(v) {
            regexp.lastIndex = v;
          }
        });
      }

      function LexicalParser() {
        var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
        var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
        var source;
        Object.defineProperty(this, 'source', {
          'get': function get() {
            return source;
          },
          'set': function set(v) {
            source = v;
            inputElementDiv.lastIndex = 0;
            inputElementRegExp.lastIndex = 0;
          }
        });
        this.reset = function () {
          inputElementDiv.lastIndex = 0;
          inputElementRegExp.lastIndex = 0;
        };
        this.getNextToken = function (useDiv) {
          var lastIndex = inputElementDiv.lastIndex;
          var inputElement;
          if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
          var token = inputElement.exec(source);
          if (token && inputElement.lastIndex - lastIndex > token.length) {
            throw new SyntaxError('Unexpected token ILLEGAL');
          }
          inputElementDiv.lastIndex = inputElement.lastIndex;
          inputElementRegExp.lastIndex = inputElement.lastIndex;
          return token;
        };
      }

      var rules = {
        'IdentifierName': [['Identifier']],
        'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
        'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
        'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
        'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
        'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
        'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
        'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
        'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
        'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
        'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
        'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
        'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
        'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
        'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
        'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
        'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
        'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
        'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
        'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
        'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
        'Program': [['Expression']]

      };

      function _Symbol(symbolName, token) {
        this.name = symbolName;
        this.token = token;
        this.childNodes = [];
        this.toString = function (indent) {
          if (!indent) indent = '';
          if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
          var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
          for (var i = 0; i < this.childNodes.length; i++) {
            str += this.childNodes[i].toString(indent + '    ');
          }return str;
        };
      }

      function SyntacticalParser() {
        var currentRule;
        var root = {
          Program: '$'
        };
        var hash = {};

        function closureNode(node) {

          hash[JSON.stringify(node)] = node;

          var queue = Object.getOwnPropertyNames(node);
          while (queue.length) {
            var symbolName = queue.shift();
            if (!rules[symbolName]) continue;
            rules[symbolName].forEach(function (rule) {
              if (!node[rule[0]]) queue.push(rule[0]);
              var rulenode = node;
              var lastnode = null;
              rule.forEach(function (symbol) {
                if (!rulenode[symbol]) rulenode[symbol] = {};
                lastnode = rulenode;
                rulenode = rulenode[symbol];
              });
              if (node[symbolName].$div) rulenode.$div = true;
              rulenode.$reduce = symbolName;
              rulenode.$count = rule.length;
            });
          }

          for (var p in node) {
            if (_typeof2(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
            if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
              closureNode(node[p]);
            }
          }
          node.$closure = true;
        }

        closureNode(root);
        var symbolStack = [];
        var statusStack = [root];
        var current = root;
        this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
          while (!current[symbol.name] && current.$reduce) {
            var count = current.$count;
            var newsymbol = new _Symbol(current.$reduce);
            while (count--) {
              newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
            }current = statusStack[statusStack.length - 1];
            this.insertSymbol(newsymbol);
          }
          current = current[symbol.name];
          symbolStack.push(symbol), statusStack.push(current);
          if (!current) throw new Error();
          return current.$div;
        };
        this.reset = function () {
          current = root;
          symbolStack = [];
          statusStack = [root];
        };
        Object.defineProperty(this, 'grammarTree', {
          'get': function get() {
            try {
              while (current.$reduce) {
                var count = current.$count;
                var newsymbol = new _Symbol(current.$reduce);
                while (count--) {
                  newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                }current = statusStack[statusStack.length - 1];
                this.insertSymbol(newsymbol);
              }
              if (symbolStack.length > 0 && current[';']) {
                this.insertSymbol(new _Symbol(';', ';'));
                return this.grammarTree;
              }
              if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
            } catch (e) {
              throw new SyntaxError('Unexpected end of input');
            }
            return symbolStack[0];
          }
        });
      }

      function Parser() {
        this.lexicalParser = new LexicalParser();
        this.syntacticalParser = new SyntacticalParser();
        var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
        var terminalSymbolIndex = {};
        terminalSymbols.forEach(function (e) {
          Object.defineProperty(terminalSymbolIndex, e, {});
        });
        this.reset = function () {
          this.lexicalParser.reset();
          this.syntacticalParser.reset();
        };
        this.parse = function (source, onInputElement) {
          var _this = this;

          var token;
          var haveLineTerminator = false;
          this.lexicalParser.source = source;
          var useDiv = false;
          while (token = this.lexicalParser.getNextToken(useDiv)) {
            if (onInputElement) onInputElement(token);
            try {
              if (Object.getOwnPropertyNames(token).some(function (e) {
                if (terminalSymbolIndex.hasOwnProperty(e)) {
                  useDiv = _this.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
                  haveLineTerminator = false;
                  return true;
                } else return false;
              })) continue;
              if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
              }
            } catch (e) {
              throw new SyntaxError('Unexpected token ' + token);
            }
          }
          return this.syntacticalParser.grammarTree;
        };
      }

      var parser = new Parser();

      function JavaScriptExpression(text) {
        parser.reset();
        this.tree = parser.parse(text);
        this.paths = [];
        var context = Object.create(null);
        var me = this;
        var pathIndex = Object.create(null);
        this.isSimple;
        this.isConst;
        walk(this.tree);
        checkSimple(this.tree);
        if (this.paths.length === 0) {
          this.isConst = true;
        }
        this.setter = function (path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          return {
            isCompleted: function isCompleted() {
              for (var p in pathIndex) {
                if (!pathIndex[p]) return false;
              }return true;
            },
            set: function set(value) {
              if (!pathIndex[path.join('.')]) {
                pathIndex[path.join('.')] = true;
              }
              curr[path[i]] = value;
              if (this.isCompleted()) {
                return me.exec();
              } else {
                return undefined;
              }
            }
          };
        };

        this.valueOf = this.exec = function () {
          try {
            return function () {
              return eval(text);
            }.call(context);
          } catch (e) {}
        };

        function checkSimple(symbol) {

          var curr = symbol;
          while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
            curr = curr.childNodes[0];
          }
          // TODO: need to point out "[……]"
          if (curr.name === 'MemberExpression') {
            me.isSimple = true;
          } else {
            me.isSimple = false;
          }
        }

        function walk(symbol) {
          if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
            var path = getPath(symbol.childNodes[1]);
            walk(symbol.childNodes[0]);
          } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol.childNodes[0]);
          } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol);
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function getPath(symbol) {
          // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

          if (symbol.childNodes[0].name === 'IdentifierName') {
            // MemberExpression : MemberExpression "." IdentifierName
            var path = getPath(symbol.childNodes[2]);
            if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
            createPath(path);
            return path;
          } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
            // MemberExpression : PrimaryExpression
            if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
              var path = [symbol.childNodes[0].childNodes[0].token.toString()];
              createPath(path);
              return path;
            } else {
              return null;
            }
          } else if (symbol.childNodes[0].name === ']') {
            // MemberExpression : MemberExpression "[" Expression "]"
            getPath(symbol.childNodes[3]);
            walk(symbol.childNodes[1]);
            return null;
          } else if (symbol.childNodes[0].name === 'Arguments') {
            // MemberExpression : "new" MemberExpression Arguments
            walk(symbol.childNodes[0]);
            walk(symbol.childNodes[1]);
            return null;
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function createPath(path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          me.paths.push(path);
          pathIndex[path.join('.')] = false;
        }
      }

      function visit(tree) {
        var childNodes = tree.childNodes.slice().reverse();
        var children = childNodes.filter(function (e) {
          return !e.token || !e.token.Punctuator;
        });
        if (tree.name === 'UnaryExpression') {
          // negative number support
          if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
            var res = visit(children[0]);
            res.value = -res.value;
            return res;
          }
        }

        if (tree.name === 'Arguments') {
          var argumentList = [];
          var listNode = children[0];
          while (listNode) {
            if (listNode.childNodes.length === 3) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = listNode.childNodes[2];
            }
            if (listNode.childNodes.length === 1) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = null;
            }
          }
          return {
            type: 'Arguments',
            children: argumentList.map(function (e) {
              return visit(e);
            })
          };
        }

        if (children && children.length === 1) {
          var res = visit(children[0]);
          return res;
        }

        if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
          return tree.token[e];
        })) {
          var type = Object.keys(tree.token).filter(function (e) {
            return e.match(/Literal/) || e.match(/Identifier/);
          })[0];
          var value = {
            'NullLiteral': null,
            'BooleanLiteral': Boolean(tree.token),
            'NumericLiteral': Number(tree.token),
            'StringLiteral': tree.token,
            'Identifier': tree.token
          }[type];

          return {
            type: type,
            value: value
          };
        }

        if (tree.name === 'CallExpression') return {
          type: 'CallExpression',
          children: [visit(childNodes[0]), visit(childNodes[1])]
        };

        return {
          type: childNodes.filter(function (e) {
            return e.token && e.token.Punctuator;
          })[0].name,
          children: childNodes.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          }).map(function (e) {
            return visit(e);
          })
        };
      }

      function parse(originExp) {
        var exp = new JavaScriptExpression(originExp);
        return JSON.stringify(visit(exp.tree), null);
      }

      module.exports = {
        parse: parse
      };

      /***/
    }]
    /******/)
  );
});;

/***/ }),

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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(4);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2017/10/21.
 */

var CHECKED = exports.CHECKED = 'http://193.112.19.135/static/img/checkbox_on.png';
var UNCHECKED = exports.UNCHECKED = 'http://193.112.19.135/static/img/checkbox.png';
var CHECKED_DISABLED = exports.CHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';
var UNCHECKED_DISABLED = exports.UNCHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(359);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(368);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(386);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(353);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WxcOverlay = exports.WxcDialog = exports.WxcStepper = exports.WxcCheckbox = exports.WxcRadio = exports.WxcCell1 = exports.WxcCell = exports.BindEnv = exports.Utils = undefined;

var _utils = __webpack_require__(260);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(367);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _wxcCell = __webpack_require__(285);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcCell3 = __webpack_require__(286);

var _wxcCell4 = _interopRequireDefault(_wxcCell3);

var _wxcCheckbox = __webpack_require__(372);

var _wxcCheckbox2 = _interopRequireDefault(_wxcCheckbox);

var _wxcRadio = __webpack_require__(337);

var _wxcRadio2 = _interopRequireDefault(_wxcRadio);

var _wxcStepper = __webpack_require__(377);

var _wxcStepper2 = _interopRequireDefault(_wxcStepper);

var _wxcDialog = __webpack_require__(382);

var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

var _wxcOverlay = __webpack_require__(287);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Utils = _utils2.default;
exports.BindEnv = _bindEnv2.default;
exports.WxcCell = _wxcCell2.default;
exports.WxcCell1 = _wxcCell4.default;
exports.WxcRadio = _wxcRadio2.default;
exports.WxcCheckbox = _wxcCheckbox2.default;
exports.WxcStepper = _wxcStepper2.default;
exports.WxcDialog = _wxcDialog2.default;
exports.WxcOverlay = _wxcOverlay2.default; /**
                                            * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                            * Created by Tw93 on 17/09/25
                                            */

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(346)
)

/* script */
__vue_exports__ = __webpack_require__(347)

/* template */
var __vue_template__ = __webpack_require__(348)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\example\\_mods\\title.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5cf54ce2"
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

/***/ 346:
/***/ (function(module, exports) {

module.exports = {
  "wxc-title": {
    "marginTop": "20",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "logo": {
    "width": "120",
    "height": "120"
  },
  "text": {
    "fontSize": "30",
    "fontWeight": "600",
    "color": "#000000"
  }
}

/***/ }),

/***/ 347:
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

exports.default = {
  props: {
    title: String
  }
};

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-title"],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(350)
)

/* script */
__vue_exports__ = __webpack_require__(351)

/* template */
var __vue_template__ = __webpack_require__(352)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\example\\_mods\\category.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b4db0138"
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

/***/ 350:
/***/ (function(module, exports) {

module.exports = {
  "category": {
    "marginTop": "20",
    "paddingLeft": "24",
    "width": "750",
    "height": "68",
    "backgroundColor": "#FFF100",
    "justifyContent": "center"
  },
  "category-text": {
    "color": "#000000",
    "fontWeight": "600",
    "fontSize": "28"
  }
}

/***/ }),

/***/ 351:
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

exports.default = {
  props: {
    title: String
  }
};

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["category"]
  }, [_c('text', {
    staticClass: ["category-text"]
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(354)
)

/* script */
__vue_exports__ = __webpack_require__(355)

/* template */
var __vue_template__ = __webpack_require__(365)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-radio\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e8c68d02"
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

/***/ 354:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(356);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { wxcRadio: _item2.default },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      checkedIndex: -1
    };
  },
  computed: {
    updateList: function updateList() {
      var checkedIndex = this.checkedIndex,
          list = this.list;

      var updateList = [];
      list && list.forEach(function (item, i) {
        item.checked = i === checkedIndex;
        updateList.push(item);
      });
      return updateList;
    }
  },
  watch: {
    list: function list(newList) {
      this.setListChecked(newList);
    }
  },
  created: function created() {
    this.setListChecked(this.list);
  },

  methods: {
    setListChecked: function setListChecked(list) {
      var _this = this;

      if (list && list.length > 0) {
        list.forEach(function (item, i) {
          item.checked && (_this.checkedIndex = i);
        });
      }
    },
    wxcRadioItemChecked: function wxcRadioItemChecked(i, e) {
      var oldIndex = this.checkedIndex;
      var _list$i = this.list[i],
          value = _list$i.value,
          brand_name = _list$i.brand_name;

      this.checkedIndex = i;
      this.$emit('wxcRadioListChecked', { brand_name: brand_name, value: value });
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(357)
)

/* script */
__vue_exports__ = __webpack_require__(358)

/* template */
var __vue_template__ = __webpack_require__(364)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-radio\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b251e76"
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

/***/ 357:
/***/ (function(module, exports) {

module.exports = {
  "radio": {
    "width": "48",
    "height": "48"
  },
  "title-text": {
    "width": "170",
    "textAlign": "center",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _wxcCell = __webpack_require__(285);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _type = __webpack_require__(363);

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

exports.default = {
	components: { WxcCell: _wxcCell2.default },
	props: {
		hasTopBorder: {
			type: Boolean,
			default: false
		},
		ch_name: {
			type: String,
			require: true
		},
		en_name: {
			type: String,
			require: true
		},
		brand_name: {
			type: String,
			require: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: false
		},
		config: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {
			icon: [_type.CHECKED, _type.DISABLED]
		};
	},
	computed: {
		radioIcon: function radioIcon() {
			var icon = this.icon,
			    disabled = this.disabled,
			    checked = this.checked,
			    config = this.config;

			var mergeIcon = icon;
			config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
			config.disabledIcon && (mergeIcon[1] = config.disabledIcon);
			return checked ? mergeIcon[disabled ? 1 : 0] : '';
		},
		backgroundColor: function backgroundColor() {
			var disabled = this.disabled,
			    checked = this.checked;

			return checked && !disabled ? '#FFFFFF' : '#F8F8F8';
		},
		color: function color() {
			var disabled = this.disabled,
			    checked = this.checked,
			    config = this.config;

			var checkedColor = '#ec3b79';
			config.checkedColor && (checkedColor = config.checkedColor);
			return checked && !disabled ? checkedColor : '#3D3D3D';
		}
	},
	methods: {
		wxcCellClicked: function wxcCellClicked() {
			var disabled = this.disabled,
			    value = this.value;

			if (!disabled) {
				this.$emit('wxcRadioItemChecked', { value: value, disabled: disabled });
			}
		}
	}
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(360)
)

/* script */
__vue_exports__ = __webpack_require__(361)

/* template */
var __vue_template__ = __webpack_require__(362)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-75ddd00c"
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

/***/ 360:
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(260);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB1Y9vlpwMPMeJjy1XcXXXpppXa-72-72.png';
var DISABLED = exports.DISABLED = 'https://gw.alicdn.com/tfs/TB1PtN3pwMPMeJjy1XdXXasrXXa-72-72.png';

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "cellStyle": {
        backgroundColor: _vm.backgroundColor
      },
      "accessible": true,
      "ariaLabel": (_vm.brand_name + ",状态为" + (_vm.checked?'已选中':'未选中') + "," + (_vm.disabled?'不可更改':''))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [(_vm.ch_name != null) ? _c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.color
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.ch_name))]) : _vm._e(), (_vm.en_name != null) ? _c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.color
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.en_name))]) : _vm._e(), (_vm.ch_name == null) ? _c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.color
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.brand_name))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.updateList), function(item, i) {
    return _c('wxc-radio', _vm._b({
      key: i,
      attrs: {
        "config": _vm.config
      },
      on: {
        "wxcRadioItemChecked": function($event) {
          _vm.wxcRadioItemChecked(i, $event)
        }
      }
    }, 'wxc-radio', item, false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = setTitle;

var _index = __webpack_require__(338);

/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2017/7/26.
 * demo设置标题和右上角按钮
 */

var navigationBar = weex.requireModule('navigationBar');
var navigator = weex.requireModule('navigator');
function setTitle(title) {
  if (navigationBar && navigationBar.setTitle) {
    var NOOP = function NOOP() {};
    navigationBar.setTitle({
      title: title
    }, NOOP, NOOP);

    var CALLBACK = function CALLBACK(event) {
      if (event.index !== undefined) {
        navigator.push({
          url: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
          animated: true
        }, NOOP);
      }
    };
    _index.Utils.env.isAliWeex() && navigationBar.setRightItem({
      items: [{
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcTMzMzMzMzAwMDIyMjIyMjExMTAwMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzIyMjAwMDMzMzMzMzIyMjMzMxR9TlYAAAAVdFJOUwCgvzCfgD9AYMCQcO+P389/IG9Q0HT9VioAAADRSURBVEjH7ZXrDoMgDEZhVgFvu/L+r7pZgQlSLcuSJYvfHwKcU5HUKMSRj6P7Xhfx9hVdyBcYjmcbyEvJNmZeCK7hea5xCTzPgAXPMZCv3/M9A1b7aAx83hnA54XoSAOI82rCAPL98gZs3EfOgM37Wxuwc9+pgTw0V4qvGoiM1vd/l+fDfusW/NyOeaEPgFswyUI1nObckoLGl1BTHkEYbXzGqYERiR9sgmCTknEHf0mo5+EQfiM0GOx1HM5+TglkcoIsFe5bgsp+iIpM9V+//CcugShOKAURTAAAAABJRU5ErkJggg=='
      }]
    }, CALLBACK, NOOP);
  }
}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(1);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _index = __webpack_require__(260);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 18/03/22
 */
console.log(1111);
var BindEnv = {
  supportsEB: function supportsEB() {
    return _indexWeex2.default.isSupportBinding && !_index2.default.env.isWeb();
  },


  /**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */
  supportsEBForAndroid: function supportsEBForAndroid() {
    return _index2.default.env.isAndroid() && BindEnv.supportsEB();
  },


  /**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */
  supportsEBForIos: function supportsEBForIos() {
    return _index2.default.env.isIOS() && BindEnv.supportsEB();
  }
};

exports.default = BindEnv;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(369)
)

/* script */
__vue_exports__ = __webpack_require__(370)

/* template */
var __vue_template__ = __webpack_require__(371)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-cell1\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4b027f93"
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

/***/ 369:
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(260);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(373);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(374)
)

/* script */
__vue_exports__ = __webpack_require__(375)

/* template */
var __vue_template__ = __webpack_require__(376)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-040c101b"
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

/***/ 374:
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "marginLeft": "20",
    "width": "30",
    "height": "30"
  },
  "title-text": {
    "fontSize": "30"
  }
}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(286);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _type = __webpack_require__(284);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { WxcCell: _wxcCell2.default },
  props: {
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      require: true
    },
    value: {
      type: [String, Number, Object],
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      icon: [_type.CHECKED, _type.UNCHECKED, _type.CHECKED_DISABLED, _type.UNCHECKED_DISABLED],
      color: '#3D3D3D',
      innerChecked: false
    };
  },
  computed: {
    checkIcon: function checkIcon() {
      var icon = this.icon,
          disabled = this.disabled,
          innerChecked = this.innerChecked,
          config = this.config;

      var mergeIcon = [].concat(_toConsumableArray(icon));
      config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
      config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
      config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
      config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);
      if (disabled) {
        return mergeIcon[innerChecked ? 2 : 3];
      } else {
        return mergeIcon[innerChecked ? 0 : 1];
      }
    },
    textColor: function textColor() {
      var innerChecked = this.innerChecked,
          disabled = this.disabled,
          config = this.config;

      var checkedColor = config.checkedColor ? config.checkedColor : '#4183ff';
      return innerChecked && !disabled ? checkedColor : '#3D3D3D';
    }
  },
  watch: {
    checked: function checked(newChecked) {
      this.innerChecked = newChecked;
    }
  },
  created: function created() {
    var checked = this.checked;

    this.innerChecked = checked;
  },

  methods: {
    wxcCellClicked: function wxcCellClicked() {
      var disabled = this.disabled,
          innerChecked = this.innerChecked,
          value = this.value;

      if (!disabled) {
        this.innerChecked = !innerChecked;
        this.$emit('wxcCheckBoxItemChecked', { value: value, checked: this.innerChecked });
      }
    }
  }
};

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "hasBottomBorder": _vm.hasBottomBorder,
      "accessible": true,
      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked ? '已选中' : '未选中') + "," + (_vm.disabled ? '不可更改' : '点击可切换'))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.textColor
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
    staticClass: ["checkbox"],
    attrs: {
      "slot": "value",
      "src": _vm.checkIcon
    },
    slot: "value"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(378);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(379)
)

/* script */
__vue_exports__ = __webpack_require__(380)

/* template */
var __vue_template__ = __webpack_require__(381)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-stepper\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-910ab956"
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

/***/ 379:
/***/ (function(module, exports) {

module.exports = {
  "wxc-stepper": {
    "flexDirection": "row"
  },
  "stepper-plus": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ededed",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6"
  },
  "stepper-minus": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ededed",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6"
  },
  "stepper-input": {
    "borderWidth": 0,
    "textAlign": "center",
    "color": "#3d3d3d",
    "fontSize": "30",
    "lineHeight": "56",
    "width": "86"
  },
  "stepper-icon": {
    "fontSize": "36",
    "color": "#666666",
    "marginTop": "-4"
  }
}

/***/ }),

/***/ 380:
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
//
//
//
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
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: 100
    },
    step: {
      type: [String, Number],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disableStyle: function disableStyle() {
      if (this.disabled) {
        return {
          color: '#cccccc'
        };
      }
    },
    valueString: function valueString() {
      return this.value.toString();
    }
  },
  data: function data() {
    return {
      value: 1,
      isLess: false,
      isOver: false
    };
  },
  watch: {
    defaultValue: function defaultValue(newNum) {
      this.value = newNum;
    }
  },
  created: function created() {
    this.value = parseInt(this.defaultValue, 10);
    if (this.disabled) {
      this.isLess = true;
      this.isOver = true;
    }
  },

  methods: {
    minusClicked: function minusClicked() {
      if (this.disabled) {
        return;
      }
      var isMinOver = this.value <= this.min;
      var nowNum = this.value - parseInt(this.step, 10);
      if (isMinOver) {
        this.$emit('wxcStepperValueIsMinOver', { value: this.value });
      } else {
        this.value = nowNum;
        this.resetDisabledStyle();
      }
      // 由于此处已经减step
      if (nowNum <= this.min) {
        this.value = parseInt(this.min, 10);
        this.isLess = true;
      }
      this.$emit('wxcStepperValueChanged', { value: this.value });
    },
    plusClicked: function plusClicked() {
      if (this.disabled) {
        return;
      }
      var isMaxOver = this.value >= this.max;
      var nowNum = this.value + parseInt(this.step, 10);
      if (isMaxOver) {
        this.$emit('wxcStepperValueIsMaxOver', { value: this.value });
      } else {
        this.value = nowNum;
        this.resetDisabledStyle();
      }
      // 由于此处已经加step
      if (nowNum >= this.max) {
        this.value = parseInt(this.max, 10);
        this.isOver = true;
      }
      this.$emit('wxcStepperValueChanged', { value: this.value });
    },
    onInput: function onInput(e) {
      this.correctInputValue(e.value);
    },
    onBlur: function onBlur(e) {
      this.correctInputValue(e.value);
    },
    correctInputValue: function correctInputValue(v) {
      if (/^[1-9]\d{0,}$/.test(v) && parseInt(v, 10) >= this.min && parseInt(v, 10) <= this.max) {
        this.value = parseInt(v, 10);
      }
      this.$emit('wxcStepperValueChanged', { value: this.value });
    },
    resetDisabledStyle: function resetDisabledStyle() {
      this.isLess = false;
      this.isOver = false;
    }
  }
};

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-stepper"]
  }, [_c('div', {
    staticClass: ["stepper-minus"],
    attrs: {
      "ariaLabel": "减数",
      "accessible": true
    },
    on: {
      "click": _vm.minusClicked
    }
  }, [_c('text', {
    staticClass: ["stepper-icon"],
    style: {
      color: _vm.isLess ? '#cccccc' : '#666666'
    }
  }, [_vm._v("-")])]), _c('input', {
    staticClass: ["stepper-input"],
    style: _vm.disableStyle,
    attrs: {
      "type": "number",
      "value": _vm.valueString,
      "disabled": _vm.disabled || _vm.readOnly
    },
    on: {
      "input": _vm.onInput,
      "blur": _vm.onBlur
    }
  }), _c('div', {
    staticClass: ["stepper-plus"],
    attrs: {
      "ariaLabel": "加数",
      "accessible": true
    },
    on: {
      "click": _vm.plusClicked
    }
  }, [_c('text', {
    staticClass: ["stepper-icon"],
    style: {
      color: _vm.isOver ? '#cccccc' : '#666666'
    }
  }, [_vm._v("+")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(383);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(384)
)

/* script */
__vue_exports__ = __webpack_require__(385)

/* template */
var __vue_template__ = __webpack_require__(391)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-dialog\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5cf9a9e0"
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

/***/ 384:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "left": "96",
    "width": "558",
    "backgroundColor": "#FFFFFF"
  },
  "dialog-content": {
    "paddingTop": "36",
    "paddingBottom": "36",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "content-title": {
    "color": "#333333",
    "fontSize": "36",
    "textAlign": "center",
    "marginBottom": "24"
  },
  "content-subtext": {
    "color": "#666666",
    "fontSize": "26",
    "lineHeight": "36",
    "textAlign": "center"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopColor": "#F3F3F3",
    "borderTopWidth": "1"
  },
  "footer-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "90"
  },
  "cancel": {
    "borderRightColor": "#F3F3F3",
    "borderRightWidth": "1"
  },
  "btn-text": {
    "fontSize": "36",
    "color": "#666666"
  },
  "no-prompt": {
    "width": "486",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "no-prompt-icon": {
    "width": "24",
    "height": "24",
    "marginRight": "12"
  },
  "no-prompt-text": {
    "fontSize": "24",
    "color": "#A5A5A5"
  }
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcOverlay = __webpack_require__(287);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _type = __webpack_require__(390);

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

exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    top: {
      type: Number,
      default: 400
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    mainBtnColor: {
      type: String,
      default: '#EE9900'
    },
    secondBtnColor: {
      type: String,
      default: '#666666'
    },
    showNoPrompt: {
      type: Boolean,
      default: false
    },
    noPromptText: {
      type: String,
      default: '不再提示'
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      noPromptIcon: _type.UN_CHECKED,
      pageHeight: 1334
    };
  },
  created: function created() {
    var _weex$config$env = weex.config.env,
        deviceHeight = _weex$config$env.deviceHeight,
        deviceWidth = _weex$config$env.deviceWidth;

    this.pageHeight = deviceHeight / deviceWidth * 750;
  },

  methods: {
    secondaryClicked: function secondaryClicked() {
      this.$emit('wxcDialogCancelBtnClicked', {
        type: 'cancel'
      });
    },
    primaryClicked: function primaryClicked(e) {
      this.$emit('wxcDialogConfirmBtnClicked', {
        type: 'confirm'
      });
    },
    noPromptClicked: function noPromptClicked(e) {
      var isChecked = !this.isChecked;
      this.noPromptIcon = isChecked ? _type.CHECKED : _type.UN_CHECKED;
      this.$emit('wxcDialogNoPromptClicked', { isChecked: isChecked });
    }
  }
};

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(387)
)

/* script */
__vue_exports__ = __webpack_require__(388)

/* template */
var __vue_template__ = __webpack_require__(389)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\weex-ui-master\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3520ae14"
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

/***/ 387:
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ 388:
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

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/29.
 */

var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';
var UN_CHECKED = exports.UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', {
    attrs: {
      "show": true,
      "hasAnimation": false
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: ["dialog-box"],
    style: {
      top: _vm.top + 'px'
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
    staticClass: ["no-prompt"],
    on: {
      "click": _vm.noPromptClicked
    }
  }, [_c('image', {
    staticClass: ["no-prompt-icon"],
    attrs: {
      "src": _vm.noPromptIcon
    }
  }), _c('text', {
    staticClass: ["no-prompt-text"]
  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
    staticClass: ["dialog-footer"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["footer-btn", "cancel"],
    on: {
      "click": _vm.secondaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.secondBtnColor
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["footer-btn", "confirm"],
    on: {
      "click": _vm.primaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.mainBtnColor
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(5),
    qs = __webpack_require__(6),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(537)
)

/* script */
__vue_exports__ = __webpack_require__(538)

/* template */
var __vue_template__ = __webpack_require__(539)
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
__vue_options__.__file = "E:\\Users\\Cole\\weex_project\\my_projectt\\src\\demo\\b2bapp\\order\\create_order.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a979a90c"
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

/***/ 537:
/***/ (function(module, exports) {

module.exports = {
  "c": {
    "width": "750",
    "height": "40",
    "backgroundColor": "#8B7D6B",
    "opacity": 0.5
  },
  "h": {
    "height": "1",
    "width": "550",
    "backgroundColor": "#cdcdcd"
  },
  "item-container": {
    "width": "750",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "item_column": {
    "alignItems": "center",
    "marginTop": "30",
    "width": "750",
    "flexDirection": "column"
  },
  "item_row1": {
    "marginLeft": "70",
    "marginTop": "20",
    "height": "50",
    "width": "730",
    "flexDirection": "row"
  },
  "item_row2": {
    "marginTop": "30",
    "height": "70",
    "width": "750",
    "flexDirection": "row"
  },
  "item_row3": {
    "height": "1090",
    "width": "750",
    "flexDirection": "row"
  },
  "item_row4": {
    "marginTop": "20",
    "marginBottom": "20",
    "height": "50",
    "flexDirection": "row",
    "lineHeight": "50"
  },
  "item_row5": {
    "marginTop": "20",
    "marginBottom": "20",
    "height": "200",
    "flexDirection": "row"
  },
  "item_row6": {
    "width": "580",
    "height": "50",
    "flexDirection": "row"
  },
  "img": {
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "width": "200",
    "height": "200"
  },
  "img1": {
    "width": "30",
    "height": "30"
  },
  "input": {
    "width": "200",
    "border": "1",
    "borderColor": "#808080",
    "borderStyle": "solid",
    "borderRadius": "3",
    "marginRight": "10",
    "marginLeft": "10",
    "backgroundColor": "#dbdbdb"
  },
  "input1": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "input2": {
    "borderRadius": "5",
    "height": "50",
    "width": "300",
    "backgroundColor": "#ffffff"
  },
  "d4": {
    "height": "1",
    "width": "750",
    "backgroundColor": "#e5e5e5"
  },
  "d5": {
    "backgroundColor": "#ff6839",
    "marginLeft": "10",
    "marginRight": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "height": "50",
    "textAlign": "center",
    "justifyContent": "center",
    "borderRadius": "5"
  },
  "d6": {
    "backgroundColor": "#e6e6e6",
    "marginLeft": "10",
    "marginRight": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "height": "50",
    "textAlign": "center",
    "justifyContent": "center",
    "borderRadius": "5"
  },
  "d7": {
    "width": "750",
    "flex": 1,
    "alignItems": "center"
  },
  "d8": {
    "justifyContent": "center",
    "textAlign": "center",
    "color": "#2C2C2C",
    "width": "170",
    "height": "70",
    "borderTopWidth": "2",
    "borderLeftWidth": "2",
    "borderRightWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#CCCCCC"
  },
  "d8_choose": {
    "borderTop": "1",
    "borderLeft": "1",
    "borderRight": "1",
    "borderStyle": "solid",
    "borderColor": "#BFBFBF"
  },
  "d9": {
    "height": "70",
    "lineHeight": "70",
    "flexDirection": "row",
    "marginLeft": "180",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "d10": {
    "border": "1",
    "borderStyle": "solid",
    "borderColor": "#BFBFBF",
    "flexDirection": "column",
    "width": "168",
    "alignItems": "center",
    "textAlign": "center"
  },
  "d12": {
    "width": "170",
    "backgroundColor": "#f8f8f8",
    "alignItems": "center"
  },
  "d13": {
    "width": "580",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "d14": {
    "width": "580",
    "height": "80",
    "backgroundColor": "#e5e5e5",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "d15": {
    "marginLeft": "15",
    "marginRight": "5",
    "borderRadius": "5",
    "color": "#ffffff",
    "textAlign": "center",
    "justifyContent": "center",
    "height": "50",
    "paddingLeft": "20",
    "paddingRight": "25",
    "backgroundColor": "#3ca8ff"
  },
  "d16": {
    "marginLeft": "45",
    "fontSize": "30",
    "width": "580",
    "height": "80",
    "backgroundColor": "#f1f1f1",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "d18": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "d19": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "d21": {
    "borderRadius": "5",
    "paddingLeft": "5",
    "paddingRight": "5",
    "height": "50",
    "backgroundColor": "#f74134",
    "marginRight": "20"
  },
  "d22": {
    "width": "580",
    "height": "100",
    "flex": 1,
    "alignItems": "flex-end",
    "marginRight": "30"
  },
  "d23": {
    "borderRadius": "25",
    "paddingLeft": "25",
    "paddingRight": "25",
    "height": "50",
    "backgroundColor": "#f74134"
  },
  "text1": {
    "fontSize": "25",
    "marginLeft": "10"
  },
  "text2": {
    "fontSize": "30",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "text2_2": {
    "fontSize": "30",
    "color": "#cdcdcd",
    "textAlign": "center"
  },
  "text3": {
    "height": "70",
    "lineHeight": "70",
    "fontSize": "30",
    "color": "#2c2c2c",
    "textAlign": "center"
  },
  "text8": {
    "fontSize": "30",
    "color": "#7b706e",
    "textAlign": "center"
  },
  "text9": {
    "fontSize": "30",
    "color": "#343434",
    "textAlign": "left"
  },
  "text10": {
    "fontSize": "35",
    "color": "#bb1032",
    "textAlign": "left"
  },
  "text11": {
    "height": "50",
    "lineHeight": "50",
    "fontSize": "30",
    "color": "#8a8a8a",
    "textAlign": "left",
    "textDecoration": "line-through"
  },
  "text12": {
    "height": "50",
    "lineHeight": "50",
    "fontSize": "25",
    "color": "#8a8a8a",
    "textAlign": "left"
  },
  "text13": {
    "height": "50",
    "lineHeight": "50",
    "fontSize": "25",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "text14": {
    "marginLeft": "30",
    "marginRight": "20",
    "textAlign": "left",
    "color": "#ff6839",
    "height": "50",
    "lineHeight": "50",
    "fontSize": "30"
  },
  "text15": {
    "color": "#2c2c2c",
    "height": "50",
    "lineHeight": "50",
    "fontSize": "30"
  },
  "text16": {
    "color": "#9d9d9d",
    "fontSize": "35"
  },
  "text17": {
    "height": "50",
    "lineHeight": "50",
    "fontSize": "35",
    "color": "#ffffff",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _type = __webpack_require__(284);

var _title = __webpack_require__(345);

var _title2 = _interopRequireDefault(_title);

var _category = __webpack_require__(349);

var _category2 = _interopRequireDefault(_category);

var _wxcRadio = __webpack_require__(337);

var _wxcRadio2 = _interopRequireDefault(_wxcRadio);

var _setNav = __webpack_require__(366);

var _http = __webpack_require__(24);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');

var globalEvent = weex.requireModule('globalEvent');
var page = weex.requireModule("page");
var nav = weex.requireModule('navigator');
var pref = weex.requireModule("pref");

var modal = weex.requireModule('modal');

exports.default = {
	components: { Title: _title2.default, Category: _category2.default, WxcRadio: _wxcRadio2.default, WxcCheckbox: _setNav.WxcCheckbox },

	created: function created() {
		(0, _setNav.setTitle)('Checkbox');
		var checked = this.checked;

		this.innerChecked = checked;

		var that = this;
		var navigator = weex.requireModule('navigator');
		var param = navigator.param();
		that.member_id = param.member_id;
		that.member_name = param.member_name;
		var modal = weex.requireModule("modal");

		var dataparam = [{ 'name': "method", 'value': "sfa.member.goods.list" }, { 'name': "app_key", 'value': "b2bapp" }, { 'name': "format", 'value': "json" }, { 'name': "datetime", 'value': _http2.default.formatTime(new Date()) }, { 'name': "v", 'value': '2.0' }, { 'name': "member_id", 'value': pref.get('user').member_id }];
		_http2.default.post(dataparam, function (res) {
			that.list2 = res.data;
			for (var index in that.list2.goods_list) {
				var j = 0;
				for (var index1 in index) {
					j++;
					list3[j].brand_name = index1.brand_name;
					break;
				}
			}
		});

		for (var i = 0; i < this.list.length; i++) {
			var English = this.list[i].brand_name;
			var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(English);
			if (rt != null) {
				this.list[i].ch_name = rt[1];
				this.list[i].en_name = rt[2];
			}
		}
	},

	props: {
		hasTopBorder: {
			type: Boolean,
			default: false
		},
		hasBottomBorder: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			require: true
		},
		value: {
			type: [String, Number, Object],
			require: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: false
		},
		config: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {
			icon: [_type.CHECKED, _type.UNCHECKED, _type.CHECKED_DISABLED, _type.UNCHECKED_DISABLED],
			color: '#3D3D3D',
			innerChecked: false,
			goods: {
				"se": {
					"img": "http://193.112.19.135/static/img/beer.jpg",
					"title": "11°麦之初330ML易拉罐",
					"oldprice": "90.00",
					"newprice": "80.00",
					"integral": "4",
					"discount": {
						"d1": "订单满5万减1000元",
						"d2": "订单满3万减800元",
						"d3": "订单满2万减300元"
					},
					"count": "0",
					"unit": "箱"
				},
				"se1": {
					"img": "http://193.112.19.135/static/img/beer.jpg",
					"title": "11°麦之初330ML易拉罐",
					"oldprice": "90.00",
					"newprice": "80.00",
					"integral": "4",
					"discount": {
						"d1": "订单满5万减1000元",
						"d2": "订单满3万减800元",
						"d3": "订单满2万减300元"
					},
					"count": "10",
					"unit": "箱"
				},
				"se2": {
					"img": "http://193.112.19.135/static/img/beer.jpg",
					"title": "11°麦之初330ML易拉罐",
					"oldprice": "90.00",
					"newprice": "80.00",
					"integral": "4",
					"discount": {
						"d1": "订单满5万减1000元",
						"d2": "订单满3万减800元",
						"d3": "订单满2万减300元"
					},
					"count": "10",
					"unit": "箱"
				}

			},

			list: [{
				"brand_id": "15",
				"brand_name": "时代（Stella）",
				"brand_url": "https://sc.ab-inbev.cn/gallery-8.html",
				"brand_desc": "<font face=\"仿宋_GB2312\" color=\"#0000ff\">&nbsp;</font>",
				"brand_logo": "37bb15ed4dd0af462317c76eec2eb2f9",
				"ordernum": "700",
				"marketing_copy": "Stella Artois有着令人愉悦的苦涩味道和使之区别于其它欧式贮藏啤酒的令人耳目一新的回味。品尝Stella Artois时，它标志性的圣餐杯是必不可少的美器，只有圣杯才能展示其丰富的金黄色并释放出啤酒的香味。",
				"romance_copy": "Stella Artois的历史可溯源到1366年，Leuven的Den Hoom啤酒厂设立在比利时布鲁塞尔郊外。这款啤酒最早是为了欢庆圣诞节而酿造出来的，并因其不凡的清晰度而被命名为Stella（拉丁语中的星星）。",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:28:39",
				"modified": "2017-04-19 12:28:39",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "106",
					"product_code": "459781",
					"goods_name": "时代330ml*24瓶装+福佳白330ml*24瓶装+乐飞金330ml*24瓶装 三箱组合（促销）",
					"product_id": "691",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "15",
					"unit": "组",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "550.00",
					"mkt_price": "444.00",
					"mkt_price_unit": "组",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/98/9e/97/f2954d0307bc9ed066d69488dc59fa9658d25d51.jpg",
					"fix_point": "0",
					"store_forsale": 94,
					"real_price": "550.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "27"
				}, {
					"goods_id": "11",
					"product_code": "45978",
					"goods_name": "Stella 时代啤酒330ml*24瓶",
					"product_id": "67",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "15",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "90.00",
					"store_prompt": "1",
					"price": "90.00",
					"mkt_price": "290.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/8e/44/b5/4a1c698cf8e15fc8c7d3cad205bdcf7fb9107e5a.png",
					"fix_point": "0",
					"store_forsale": "972",
					"real_price": "0.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "0"
				}],
				checked: true
			}, {
				"brand_id": "16",
				"brand_name": "乐飞（Leffe）",
				"brand_url": "https://sc.ab-inbev.cn/gallery-11.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "5b272378f6c75367a1bebd73bd988650",
				"ordernum": "500",
				"marketing_copy": "Leffe Brune是一款比利时暗色果味麦酒，中等瓶身和丰富的甜味是它独有的特点。",
				"romance_copy": "Leffe啤酒厚重的酿造传统可以追溯到始建于1152年的Leffe圣母院，至今已有超过700年的历史。圣诺伯特的僧侣们在1240年就开始为社区和路过的旅行者酿造这种啤酒。直到修道院在法国大革命后被废除，Leffe啤酒一直在安静的比利时村落流传。最终，僧侣们同酿造师Albert Lootvoot达成协议，重新启动Leffe的生产。",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:29:14",
				"modified": "2017-04-19 12:29:14",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "8",
					"product_code": "52643",
					"goods_name": "Leffe Ruby 5度 330ML 1X24纸箱OW瓶装",
					"product_id": "70",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "16",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "271.20",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/71/a9/17/630dec0addab0c38150f50d91248051df06d352c.png",
					"fix_point": "0",
					"store_forsale": "82",
					"real_price": "271.20",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "13"
				}, {
					"goods_id": "5",
					"product_code": "44947",
					"goods_name": "Leffe Blonde 乐飞金啤酒330ml*24瓶",
					"product_id": "73",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "16",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "271.20",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/3f/ae/51/e84c934d2645af9eb7b8fcf8790f2eb58b30cdc1.png",
					"fix_point": "0",
					"store_forsale": "94",
					"real_price": "271.20",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "13"
				}]
			}, {
				"brand_id": "17",
				"brand_name": "科罗娜（Corona）",
				"brand_url": "https://sc.ab-inbev.cn/gallery-2.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "11aaf383539f6ec6bbe47088aed28721",
				"ordernum": "600",
				"marketing_copy": "Corona Extra在1981年进入美国，并成为美国历史上增长最快的进口啤酒。自1925年以来，Corona Extra一直在墨西哥酿造并灌装。Corona Extra是美国进口啤酒的销售冠军，在所有啤酒销量排行中也位列第五。",
				"romance_copy": "Corona传递了一种特有的欢乐、阳光、积极和无忧无虑的心境。不经意抑或努力留下印象，都成为Corona品牌文化中的鲜明个性。刚在美国销售的时候，它被定义为一个最初由Corona的消费者创造的休闲形象，而这一品牌形象至今仍然深入人心。",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:28:53",
				"modified": "2017-04-19 12:28:53",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "1",
					"product_code": "46694",
					"goods_name": "科罗娜330",
					"product_id": "77",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "17",
					"unit": "箱",
					"accounting_price": "120.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "120.00",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/ea/d7/a1/e3d652370dfa510ec884810fed7232956f8a0732.png",
					"fix_point": "0",
					"store_forsale": "0",
					"store_tips": "CORONA科罗娜啤酒330ml*24瓶库存不足，当前可用库存：0",
					"name": "科罗娜330",
					"gift_name": "科罗娜330",
					"real_price": "120.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "6"
				}, {
					"goods_id": "2",
					"product_code": "49951",
					"goods_name": "科罗娜207",
					"product_id": "76",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "17",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "200.00",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/bf/83/4d/382056b6bfff64f8a904141d4b9cbd2fe27160de.png",
					"fix_point": "0",
					"store_forsale": "70",
					"name": "科罗娜207",
					"gift_name": "科罗娜207",
					"real_price": "200.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "10"
				}, {
					"goods_id": "295",
					"product_code": "335509",
					"goods_name": "CORONA科罗娜啤酒330ml*24瓶 1箱",
					"product_id": "883",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "17",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "120.00",
					"store_prompt": "1",
					"price": "150.00",
					"mkt_price": "120.00",
					"mkt_price_unit": "元",
					"img_url": "/public/assets/images/noimg_215.jpg",
					"fix_point": "0",
					"store_forsale": "1994",
					"real_price": "30.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "1"
				}, {
					"goods_id": "130",
					"product_code": "466942 ",
					"goods_name": "CORONA科罗娜啤酒330ml*24瓶 2箱 + Hoegaarden福佳白啤酒330ml*24瓶 1箱",
					"product_id": "715",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "17",
					"unit": "组",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "800.00",
					"mkt_price": "693.60",
					"mkt_price_unit": "组",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/e2/ec/5a/e6daad1ae355cf0b2cbcd8c18180f4788b116e5e.jpg",
					"fix_point": "0",
					"store_forsale": 0,
					"store_tips": "CORONA科罗娜啤酒330ml*24瓶 2箱 + Hoegaarden福佳白啤酒330ml*24瓶 1箱库存不足，当前可用库存：0",
					"real_price": "800.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "40"
				}]
			}, {
				"brand_id": "18",
				"brand_name": "福佳（Hoegaarden)",
				"brand_url": "https://sc.ab-inbev.cn/gallery-5.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "81626db7dedf5a80031a7263f1ed12fb",
				"ordernum": "400",
				"marketing_copy": "500年的不懈追求造就了这款口味鲜明的啤酒，它融合了橙皮、芫荽的独特口味，并且混合了快乐的僧侣们从阳光明媚的Curacao岛进口的草药味道",
				"romance_copy": "值得一提的是倒一杯Hoegaarden就好像把阳光注入你的杯子：一抹亮丽的鲜黄划破杯的静默，柔软的泡沫泛成片片云朵。口感柔和，轻柔裹挟着甜酸，唇齿间荡漾着微妙的柑橘味。",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:29:24",
				"modified": "2017-04-19 12:29:24",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "7",
					"product_code": "52641",
					"goods_name": "Hoegaarden Gran Cru 17.9度 330ML 1X24纸箱OW",
					"product_id": "71",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "18",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "273.60",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/b0/77/81/a12a6b97ad6c9082231ad523a0e6163dd9a83e53.png",
					"fix_point": "0",
					"store_forsale": "94",
					"real_price": "273.60",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "13"
				}, {
					"goods_id": "6",
					"product_code": "f102",
					"goods_name": "Hoeggarden Radler 250ml*24瓶",
					"product_id": "72",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "18",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "320.00",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/b0/38/0e/9f997b6af2b87f4a54d9e3d543a64911be8812a6.png",
					"fix_point": "0",
					"store_forsale": "64",
					"real_price": "320.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "16"
				}, {
					"goods_id": "3",
					"product_code": "44962",
					"goods_name": "Hoegaarden福佳白啤酒330ml*24瓶 ",
					"product_id": "75",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "18",
					"unit": "箱",
					"accounting_price": "180.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "200.00",
					"mkt_price": "252.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/b8/40/f6/d304c8fc15ea52a3ae5612f119b07ecfc4fb48a0.png",
					"fix_point": "0",
					"store_forsale": "1958",
					"real_price": "200.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "10"
				}]
			}, {
				"brand_id": "19",
				"brand_name": "鹅岛（Goose Island）",
				"brand_url": "https://sc.ab-inbev.cn/gallery-15.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "c77cbc62f83e356258297713c341cab1",
				"ordernum": "301",
				"marketing_copy": "啤酒花爱好者梦寐以求的充满果香的啤酒产品，入口鲜明的干麦芽气息，浓郁的啤酒花香气令人久久回味。",
				"romance_copy": "我们的印度麦酒保持了其一贯的传统，麦酒从英国运输到印度时，为了在漫长旅途中保持其独特的口感，使用了大量的啤酒花，造就了这款啤酒，为啤酒花爱好者奉献了美妙的果香口感，入口鲜明的干麦芽气息，浓郁的啤酒花香气令人久久回味。",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:26:51",
				"modified": "2017-04-19 12:26:51",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "9",
					"product_code": "55462",
					"goods_name": "Goose Island 鹅岛啤酒IPA 355ml 2*12瓶",
					"product_id": "69",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "19",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "309.60",
					"mkt_price": "498.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/a5/26/a0/889c36be9f11ece7e691bef25f5c5baedaf6ae82.png",
					"fix_point": "0",
					"store_forsale": "48",
					"real_price": "309.60",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "15"
				}, {
					"goods_id": "119",
					"product_code": "554622",
					"goods_name": "Goose Island 鹅岛啤酒Honkers Ale + 鹅岛啤酒IPA 两箱（促销）",
					"product_id": "704",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "19",
					"unit": "组",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "557.28",
					"mkt_price": "599.00",
					"mkt_price_unit": "组",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/06/c7/65/23357d35cf3bcd0a836e3089171e2f38697aeb34.png",
					"fix_point": "0",
					"store_forsale": 0,
					"store_tips": "Goose Island 鹅岛啤酒Honkers Ale + 鹅岛啤酒IPA 两箱（促销）库存不足，当前可用库存：0",
					"real_price": "557.28",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "27"
				}, {
					"goods_id": "120",
					"product_code": "554623",
					"goods_name": "Goose Island 鹅岛啤酒IPA + 鹅岛啤酒Honkers Ale + 鹅岛啤酒Sofie 三箱（促销）",
					"product_id": "705",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "19",
					"unit": "组",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "1464.72",
					"mkt_price": "498.00",
					"mkt_price_unit": "组",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/9f/21/10/90d6f7b7724f2e30ec38e90d2fcc2da3a8e92b16.png",
					"fix_point": "0",
					"store_forsale": 0,
					"store_tips": "Goose Island 鹅岛啤酒IPA + 鹅岛啤酒Honkers Ale + 鹅岛啤酒Sofie 三箱（促销）库存不足，当前可用库存：0",
					"real_price": "1464.72",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "73"
				}]
			}, {
				"brand_id": "20",
				"brand_name": "百威（Budweiser）",
				"brand_url": "https://sc.ab-inbev.cn/gallery-17.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "b49247e046f18c50972d53a361f2fe04",
				"ordernum": "900",
				"marketing_copy": "&nbsp;",
				"romance_copy": "&nbsp;",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-21 14:21:24",
				"modified": "2017-04-21 14:21:24",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "185",
					"product_code": "43022",
					"goods_name": "CT_百威9.7度500ML1X12纸箱听装",
					"product_id": "769",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "20",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "123.00",
					"mkt_price": "80.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20180319/1521430537336825.png",
					"fix_point": "0",
					"store_forsale": "0",
					"store_tips": "CT_百威9.7度500ML1X12纸箱听装库存不足，当前可用库存：0",
					"real_price": "123.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "6"
				}, {
					"goods_id": "69",
					"product_code": "25247",
					"goods_name": "百威9.7度330ML 1x24纸箱听装",
					"product_id": "654",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "20",
					"unit": "箱",
					"accounting_price": "100.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "133.44",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/24/8c/76/e1debc8ead36917c2facdc83308916440503af81.png",
					"fix_point": "0",
					"store_forsale": "999934",
					"real_price": "133.44",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "6"
				}, {
					"goods_id": "70",
					"product_code": "30879",
					"goods_name": "百威9.7度330ML 4x6半托纸箱听装",
					"product_id": "655",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "20",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "133.44",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/96/26/8e/0b36c5bdd75869d75017bc71eb3a41c4cfc78cc4.png",
					"fix_point": "0",
					"store_forsale": 0,
					"store_tips": "百威9.7度330ML 4x6半托纸箱听装库存不足，当前可用库存：0",
					"real_price": "133.44",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "6"
				}]
			}, {
				"brand_id": "21",
				"brand_name": "魅夜（Mixxtail） ",
				"brand_url": "https://sc.ab-inbev.cn/gallery-20.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "3c87473645757a1c3165050ca9ff149b",
				"ordernum": "90",
				"marketing_copy": "&nbsp;",
				"romance_copy": "&nbsp;",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:25:21",
				"modified": "2017-04-19 12:25:21",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "79",
					"product_code": "50124",
					"goods_name": "魅夜蓝色幻想3.8度275ML 1x24纸箱OW瓶装",
					"product_id": "664",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "21",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "229.92",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/49/ff/0a/bfa48a0e094df52b1ab09db74f6607a28ec40cd8.png",
					"fix_point": "0",
					"store_forsale": "82",
					"real_price": "229.92",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "11"
				}, {
					"goods_id": "80",
					"product_code": "50136",
					"goods_name": "魅夜蓝色幻想3.8度310ML 1x24半托纸箱听装",
					"product_id": "665",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "21",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "155.04",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/1b/eb/c6/cadd63c709970211342c15739e40f92690c2459e.png",
					"fix_point": "0",
					"store_forsale": "39",
					"real_price": "155.04",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "7"
				}]
			}, {
				"brand_id": "23",
				"brand_name": "哈尔滨（Harbin）",
				"brand_url": "https://sc.ab-inbev.cn/gallery-26.html",
				"brand_desc": "&nbsp;",
				"brand_logo": "97c09ca7429540f2cae40b618ac108b0",
				"ordernum": "800",
				"marketing_copy": "&nbsp;",
				"romance_copy": "&nbsp;",
				"flag": "0",
				"creator": "system",
				"modifier": "system",
				"created": "2017-04-19 12:28:09",
				"modified": "2017-04-19 12:28:09",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "66",
					"product_code": "30961",
					"goods_name": "哈尔滨小麦王10度330ML 4x6半托纸箱听装",
					"product_id": "651",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "23",
					"unit": "箱",
					"accounting_price": "50.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "53.76",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/1e/60/18/09ff0c920a48d62efd172d64c31ead6028f79761.png",
					"fix_point": "0",
					"store_forsale": "9194",
					"real_price": "53.76",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "2"
				}, {
					"goods_id": "67",
					"product_code": "30940",
					"goods_name": "哈尔滨冰纯淡爽7度500ML 1x12纸箱回瓶",
					"product_id": "652",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "23",
					"unit": "箱",
					"accounting_price": "0.00",
					"ret_price": "3.00",
					"store_prompt": "1",
					"price": "48.96",
					"mkt_price": "0.00",
					"mkt_price_unit": "箱",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/5a/8b/96/1068226bd6805762ff68a686afbc840f20236358.png",
					"fix_point": "0",
					"store_forsale": "89",
					"real_price": "45.96",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "2"
				}]
			}, {
				"brand_id": "31",
				"brand_name": "可口可乐",
				"brand_url": null,
				"brand_desc": "",
				"brand_logo": "24b7e108d3003cd7f314aa0c7b7fbb51",
				"ordernum": "1",
				"marketing_copy": "",
				"romance_copy": "",
				"flag": "0",
				"creator": "admin",
				"modifier": "admin",
				"created": "2017-07-27 14:47:50",
				"modified": "2017-07-28 11:18:04",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "205",
					"product_code": "33",
					"goods_name": "红牛第三方",
					"product_id": "789",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "31",
					"unit": "3",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "40.00",
					"mkt_price": "0.00",
					"mkt_price_unit": "33",
					"img_url": "http://b2bstresstest.chinacloudapp.cn//public/images/20171025/1508916261481687.png",
					"fix_point": "0",
					"store_forsale": "93",
					"real_price": "40.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "2"
				}]
			}, {
				"brand_id": "34",
				"brand_name": "雪碧",
				"brand_url": null,
				"brand_desc": "",
				"brand_logo": "cbc9bff104ad72a875a83ed8e3663194",
				"ordernum": "0",
				"marketing_copy": "<p><span style=\"color: rgb(51, 51, 51); font-family: arial,宋体,sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 28px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">汽水产品与可口可乐公司的其他饮料产品齐头并进，如今已经成为美国发展速度领先的主要非酒精饮料产品之一，并且是全球深受青睐的柠檬味汽水非酒精饮料产品之一</span></p>",
				"romance_copy": "<p><span style=\"color: rgb(51, 51, 51); font-family: arial,宋体,sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 28px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">汽水产品与可口可乐公司的其他饮料产品齐头并进，如今已经成为美国发展速度领先的主要非酒精饮料产品之一，并且是全球深受青睐的柠檬味汽水非酒精饮料产品之一</span></p>",
				"flag": "0",
				"creator": "admin",
				"modifier": "admin",
				"created": "2017-07-27 16:38:27",
				"modified": "2017-07-28 11:19:04",
				"seo_info": null,
				"is_self_support": "1",
				"goods": [{
					"goods_id": "300",
					"product_code": "1223",
					"goods_name": "老汉口热干面 5包",
					"product_id": "888",
					"channel_id": "16",
					"shop_id": "1",
					"brand_id": "34",
					"unit": "包",
					"accounting_price": "0.00",
					"ret_price": "0.00",
					"store_prompt": "1",
					"price": "20.00",
					"mkt_price": "12.00",
					"mkt_price_unit": "元",
					"img_url": "/public/assets/images/noimg_215.jpg",
					"fix_point": "0",
					"store_forsale": "0",
					"store_tips": "老汉口热干面 5包库存不足，当前可用库存：0",
					"real_price": "20.00",
					"show_mkt_price": "1",
					"shop_name": "百威上海直销",
					"gain_point": "1"
				}]
			}],
			list1: [{ title: '雪津', value: "Sedrin", checked: true }, { title: '贝克', value: "Beck's" }, { title: '奶盖', value: "" }, { title: '可口可乐', value: "Coca Cola" }, { title: '魅夜', value: "Mixxtail" }, { title: '鹅岛', value: "Goose Island" }, { title: '碧蓝岸点', value: "Blue Point" }, { title: '福佳', value: "Hoegaarden" }, { title: '乐飞', value: "Leffe" }, { title: '科罗娜', value: "Corona" }, { title: '时代', value: "Stella" }, { title: '哈尔滨', value: "Harbin" }, { title: '百威', value: "Budweiser" }],
			list2: [],
			list3: [],

			checkedInfo: { brand_name: '时代（Stella）' }
		};
	},

	methods: {
		wxcRadioListChecked: function wxcRadioListChecked(e) {
			this.checkedInfo = e;
			console.log(this.checkedInfo);
		},
		wxcCheckBoxListChecked: function wxcCheckBoxListChecked(e) {
			this.checkedList = e.checkedList;
		},
		shopping_cart: function shopping_cart(event) {
			console.log('shopping_cart:', event);
			modal.toast({
				message: '跳转到购物车页(shopping_cart.vue)',
				duration: 3
			});
			var nav = weex.requireModule('navigator');
			nav.push('./shopping_cart.js');
		},
		ds: function ds() {
			modal.toast({ message: pref.get('user').member_id });
		}
	},
	computed: {
		checkIcon: function checkIcon() {
			var icon = this.icon,
			    disabled = this.disabled,
			    innerChecked = this.innerChecked,
			    config = this.config;

			var mergeIcon = [].concat(_toConsumableArray(icon));
			config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
			config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
			config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
			config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);
			if (disabled) {
				return mergeIcon[innerChecked ? 2 : 3];
			} else {
				return mergeIcon[innerChecked ? 0 : 1];
			}
		},
		textColor: function textColor() {
			var innerChecked = this.innerChecked,
			    disabled = this.disabled,
			    config = this.config;

			var checkedColor = config.checkedColor ? config.checkedColor : '#4183ff';
			return innerChecked && !disabled ? checkedColor : '#3D3D3D';
		}
	},
	watch: {
		checked: function checked(newChecked) {
			this.innerChecked = newChecked;
		}
	}
};

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-container"]
  }, [_c('div', {
    staticClass: ["c"]
  }), _c('div', {
    staticClass: ["item_column"]
  }, [_c('div', {
    staticClass: ["d7"]
  }, [_c('div', {
    staticClass: ["item_row1"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["d5"]
  }, [_c('text', {
    staticClass: ["text2"],
    on: {
      "click": _vm.shopping_cart
    }
  }, [_vm._v("购物车")])]), _vm._m(1), _vm._m(2)])]), _c('div', {
    staticClass: ["item_row2"]
  }, [_c('div', {
    staticClass: ["d8"]
  }, [_c('text', {
    staticClass: ["text3"],
    on: {
      "click": _vm.ds
    }
  }, [_vm._v("商品")])]), _vm._m(3)]), _c('div', {
    staticClass: ["d4"]
  }), _c('div', {
    staticClass: ["item_row3"]
  }, [_c('div', {
    staticClass: ["d10"]
  }, [_c('scroller', [_c('div', {
    staticClass: ["d12"],
    attrs: {
      "id": "dd12"
    }
  }, [_c('wxc-radio', {
    attrs: {
      "list": _vm.list
    },
    on: {
      "wxcRadioListChecked": _vm.wxcRadioListChecked
    }
  })], 1)])]), _c('div', {
    staticClass: ["d13"]
  }, [_vm._m(4), _c('scroller', [_c('div', {
    staticClass: ["d16"]
  }, [_c('text', {
    staticClass: ["text8"]
  }, [_vm._v(_vm._s(_vm.checkedInfo.brand_name))])]), _c('div', {
    staticClass: ["d18"]
  }, [_c('ul', _vm._l((_vm.goods), function(value) {
    return _c('li', [_c('div', {
      staticClass: ["d19"]
    }, [_c('div', {
      staticClass: ["item_row5"]
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": value.img
      }
    }), _c('div', [_c('text', {
      staticClass: ["text9"]
    }, [_vm._v(_vm._s(value.title))]), _c('div', {
      staticClass: ["item_row4"]
    }, [_c('text', {
      staticClass: ["text10"]
    }, [_vm._v("￥" + _vm._s(value.newprice) + "/" + _vm._s(value.unit))]), _c('text', {
      staticClass: ["text11"]
    }, [_vm._v("￥" + _vm._s(value.oldprice) + "/" + _vm._s(value.unit))])]), _c('div', {
      staticClass: ["item_row4"]
    }, [_c('div', {
      staticClass: ["d21"]
    }, [_c('text', {
      staticClass: ["text13"]
    }, [_vm._v("省 ￥" + _vm._s((value.oldprice - value.newprice).toFixed(2)))])]), _c('text', {
      staticClass: ["text12"]
    }, [_vm._v("积分 " + _vm._s(value.integral))])])])]), _c('ul', _vm._l((_vm.goods.se.discount), function(value) {
      return _c('li', [_c('div', {
        staticClass: ["item_row6"]
      }, [_c('text', {
        staticClass: ["text14"]
      }, [_vm._v("订单促销")]), _c('text', {
        staticClass: ["text15"]
      }, [_vm._v(_vm._s(value))])])])
    })), _c('div', {
      staticClass: ["d22"]
    }, [(value.count == '0') ? _c('text', {
      staticClass: ["text16"]
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t已售完\n\t\t\t\t\t\t\t\t\t\t")]) : _c('div', {
      staticClass: ["d23"]
    }, [_c('text', {
      staticClass: ["text17"]
    }, [_vm._v("+")])])]), _c('div', {
      staticClass: ["h"]
    })], 1)])
  }))], 1)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["d5"]
  }, [_c('text', {
    staticClass: ["text2"]
  }, [_vm._v("商品列表")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["d5"]
  }, [_c('text', {
    staticClass: ["text2"]
  }, [_vm._v("去下单")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["d6"]
  }, [_c('text', {
    staticClass: ["text2_2"]
  }, [_vm._v("提交订单")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["d8"]
  }, [_c('text', {
    staticClass: ["text3"]
  }, [_vm._v("礼品")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["d14"]
  }, [_c('input', {
    staticClass: ["input2"],
    attrs: {
      "type": "text",
      "placeholder": "  请输入"
    }
  }), _c('div', {
    staticClass: ["d15"]
  }, [_c('text', {
    staticClass: ["text2"]
  }, [_vm._v("搜索")])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ })

/******/ });