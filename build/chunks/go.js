require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(96).concat([
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Go__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__invite_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__go_graphql__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__go_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__go_graphql__);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * @author lookis on 24/12/2017
 */






function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$query, id, invite, store, client, _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$query = _ref.query, id = _ref$query.id, invite = _ref$query.invite, store = _ref.store, client = _ref.client;

            if (invite === 'black' || invite === 'white') {
              client.mutate({
                mutation: __WEBPACK_IMPORTED_MODULE_3__invite_graphql___default.a,
                variables: {
                  id: id,
                  color: invite
                }
              });
            }

            _context.next = 4;
            return client.query({
              query: __WEBPACK_IMPORTED_MODULE_4__go_graphql___default.a,
              variables: {
                id: id
              }
            });

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;
            return _context.abrupt("return", {
              chunks: ['go'],
              title: data.go.engine === 'Go' ? '对局中' : "\u5403\u5B50\u68CB(".concat(data.go.info.goal, "\u5B50)"),
              component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Go__["a" /* default */], {
                id: id,
                boardsize: data.go.info.boardsize,
                user: store.getState().user && store.getState().user.id
              }))
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Wechat__ = __webpack_require__(111);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


 // external-global styles must be imported in your JS.







var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_7__Wechat__["a" /* default */], {});

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _jsx("div", {}, void 0, _ref, this.props.children, _ref2, _ref3);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(102);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--2-rules-1!../postcss-loader/lib/index.js??ref--2-rules-3!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--2-rules-1!../postcss-loader/lib/index.js??ref--2-rules-3!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(104);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "html{color:#222;font-weight:400;font-size:12px;font-family:Roboto,Hiragino Sans GB,Microsoft YaHei,STHeiti,SimHei,WenQuanYi Micro Hei,sans-serif;line-height:1.375}body,html{overflow-x:hidden}body{margin:0;position:relative!important}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _jsx("header", {
        className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root
      });
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(107);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".O9oW9{background:#373277;color:#fff}", ""]);

// exports
exports.locals = {
	"root": "O9oW9"
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _jsx("footer", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root
      });
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(110);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._1UUMy{background:#333;color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_1UUMy"
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_graphql__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wechat_graphql__);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-undef */

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var _ref = _jsx("div", {});

var Wechat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wechat, _React$Component);

  function Wechat() {
    _classCallCheck(this, Wechat);

    return _possibleConstructorReturn(this, (Wechat.__proto__ || Object.getPrototypeOf(Wechat)).apply(this, arguments));
  }

  _createClass(Wechat, [{
    key: "render",
    value: function render() {
      if (typeof window !== 'undefined') {
        this.context.client.query({
          query: __WEBPACK_IMPORTED_MODULE_2__wechat_graphql___default.a,
          variables: {
            url: window.location.href
          }
        }).then(function (resp) {
          wx.config(_extends({
            debug: false
          }, resp.data.wechat, {
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
          }));
        });
      }

      return _ref;
    }
  }]);

  return Wechat;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Wechat, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    client: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired,
    store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Wechat);

/***/ }),
/* 112 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Wechat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"wechat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"appId"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"timestamp"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"nonceStr"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"signature"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":109}};
    doc.loc.source = {"body":"query Wechat($url: String!) {\n  wechat(url: $url) {\n    appId\n    timestamp\n    nonceStr\n    signature\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * @author lookis on 17/01/2018
 */


var render = function render(boardsize, cx, intersection) {
  var intersections = [];

  for (var i = 0; i < boardsize; i += 1) {
    var row = [];

    for (var j = 0; j < boardsize; j += 1) {
      row.push(intersection(i, j));
    }

    intersections.push(_jsx("div", {
      className: cx({
        boardrow: true
      })
    }, i, row));
  }

  return _jsx("div", {
    className: cx({
      layer: true
    })
  }, void 0, intersections);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  render: render
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(167);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./BoardLayer.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./BoardLayer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q2OERERTI2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q2OERERTM2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDY4RERFMDZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDY4RERFMTZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvfq19wAAAdKSURBVHjahFc7jxxFEK7u6Xntw177sGAxZyMsgRBOjDAGI2NMABJ2iGQHiJAfQIQjhIgckCIcEQABEgFCJjCPBCzxMIiMtwhsyUYg8N7u3e7OTD/4qmd6b+58d4x21DM93V1VX31fda9YvnNIzjlSUURxt0OjyQrt6vaon3Xo1myNolhSJ0qpLMoDcZY8q609gbEPWmvvNsb0hRCEa4z2ppTyR7RX0F525K7FJCkiQVJGNCmnpARsCEnaGGrmkaL/uYSQRw25l62k542xSkpB8/mc0jT138uypCRJ+nBoPxx6BAu/iFvLKPogUdEbgsR3wdhWl9z+g+jEaXJRE31bCnfOpbGy5AhwURzHGOEoYtSUIhhvnBVNZE5prc8BtatGm4v4nm/nxG0IWGN5pWNzU70vrTvYgQFnHfoNKRhmOIEq/LAkAWeSZvhuybAT8M+in405jC+1oUrrl0QlnhFxdE4K8c2ODvCi3U5+GvBdKq2hFJZS5I0jrPCeZyk5pMBojehjTg9aBaeQV/RZjNGV5gAI8FMhK/jEztt7TVF+nWT5GXz8eEsHOIJEyuNpll+ihpSCQ8XiyDFFJianC0Qck8oTnwL+zu+MhLHMDaCgYh8Io6JAXg30qqryqJRldSlPkuN4/mpBQlaAN6jUAE+XDaJIsIiA4VgqyrLcPyeYkKkKKHDkEQwnyH8EiCufojTtkxO7qShKT9L5bIp1Y0ImSPqAFJnZnNH8BDaXi6IYMXJqsLQXkBpEYN5DjnqJ4ugEO0SdOKE8iUgBgW6nQxKSzLtZky8CGTO6dWuF+rt7GA9iVmu0t9+nOZyYTie0MtU0Xp2TiSRVRlOlJJWV7ikVvQvjZwzzql7LnUQczyWIJMagGBLLsoy6aUT9bpeSuIZ8JhT0DPcQEeecL20SKicV4J1iPGpGBlW4lPI9e0ilKwhiQpPVVSAyozWNdJDlunMa6z+JNb5Qa+MJaWcvpN3ca1sgsl6v5x1IWG5xSjMYK5FH7QwVpQas2qeFU8ck1JwGRDMtd1E1BpdiRbsdODRzcKhLmUxheExSTyhxde0AAhfSLH1cRUIe1tYcqzUdUw9Qd3AziQoECTnSbDqFQUhMM9lAWG090YTktmz0DzTWRmRgwHCxmvxDaYwKyFxCCjuDfTAa02TlXyilYiU9ZmX0EGhlz3KOmSSs87ST0xweVrpEpNA8dM/OOBjVFZJla7m6Wjq1Glj3dQcKGL6JWiOlRXpYK0VBGeSZgcCJzqnAfFbGvCzOqllVnupnPV/dWOOj8ZiViwUx0ammWLqFztkYs5f1zZpnw/zOhGIUuTYsZAj0ZCT9GIv5cywnJNKWKKqQTnx4SkVS3sfRsxwZGvYs8pM4DOsd8As6tyi12BN8cYKuvWHuY9XU5bgeWxNUMyieJ74OTGfeAe8kCB8JcQj1RnbZgIa33HLt4UXrelsXCyadq2tF8268oxw5LwxN1/uHrLeWGgnRVFdXV0itPWeoWdtZlj51FRcpdlQw8FFd3YSvbIiMc4o1a/jryPiZ2/DM/cEYt/zODoa0cGq5ZebHIKUAp3i/4coprZVKCiXQYoD1lY116JHwEfGzXkQX4A7OBDQ8f/DOz1y2A0Jhyw5IGUhEWOHT6yBT5hYwhYIBgTdgdcNo18DJ8LnFIu1ogwNhIwpzAgJttNpzjKn3BfJ2EDqgGfMEnrgZ3vDObc0LWqDAea7zWxPSKwPvq6h6QRHBEYafeRLmBhu4JzjhyJ+wwHJYMOTV71RKbXAq3G2SBRRC9Otwm0WqAlrh2SsCKcqU+FX681tr8WDcH05azyGa9h2MeMk1ewM73V4roBEUFPqsd0p8Ju5YGi7Do2tMmHZeg1GeGGBrRxzIuO2RrklJQKV9aey+KbZzrH1Iou5fx6CPmLWBB5wzvkNkbShDmnh8W3rtO6AVvq/P5ertfHXEh0+LsvxDsoSw+50PkLYr3vpRzW0gXBvKzWkJhsPYtnGyqLK4E97YqvKVaj6jaHjXfsrz/G9EtQ9RPeqPX8hZIFWIoi299nO7b/0of/sJuN6rUIyE9+QdU5VvRth7xAP3Hw6yEqPR6LfZbHaIzwKbtb65DQhsZ3AzgryfK8EnIHsTWTiI01flj5wcLV8goVtaWjqFieOQ3/ZZv53rwJfNqdp4wm6rpd628avg9CnMrYwPAAQF/NTFsYsvRH59OBwew6J/ceFo5327dOzkQJhXFz6xis4n8OmXtoOyTRxmN5D4eTAYHAHMVzjSUNdZFaE6th3ayolgvEXsHxDtESHFVb/L7vTXrNnJbkAZJ4DOefY8FJkAPY8JUmTHwu7XdqoJzEBlr0PvD8OB37dCKhoO77nN+7AwFHEFHHkbfVM4cgD3Ht6u+Y9I5Akp/N3eHZv2Bhx6C+0LeP/QO8f/KaNwyNnhv+GG/4k10f6EI6/iv+FrWPrpQpcn0X8Up5wDWGwANuOU7lYQ4XXc3yPaLxH15+ibb0Zlq+s/AQYAsROa5xHe+YAAAAAASUVORK5CYII="

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "/assets/29f401c5.png";

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCQkU2MUM2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCQkU2MUQ2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJCRTYxQTZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJCRTYxQjZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtEnsyIAAAG8SURBVHja7Fe9SgNBEM5pMCr4AmK0FGKVXovERtIpRkHFw04fQiTxIbQTxVgcAUlnFQVjZWGnIKYI0ScQ/EM4v4UpwrC3f0QP4QY+JrO3M/vt3+zEC8MwFacMpGKWhEDsBNI2nccq4RDUKlAEZoEp+tQBWkATCF73vE/TmJ7pLcDg+1BlYFrT9ZFI7PaFAAYWszwCCparewlsgUjHmQAGz0JdADnHLb4HFkCi63oIjyWDPwBVYAbIEMTvCn3rlRzFsF8BzP4Aaps1n9Kyfkf4pGm7NtinQ/jsGBNAoGGod9Z8hiDrhge2BrXGmkfg/2G6BSvMvgN8i733yUcVU0mgyOxG1LLLhPo2NDGVBOaYHTjcgEATU0kgy+y2A4G2JqaSAE+lmb9+jF6YPe4Qe4LZzzYEbplddiDAr+yNDYFrZi9RkjF9uAahFjUxlQRqzM7rUiqTE/LhWfSfpOKegE3JMywy3DlQB54AUaRMAsu07HzmVxi84FoR+ZLnOE+oGj7Hm841Ib3jJSoubEX4lFS1gG1JJjsTURK5584EiMQo7fU85XaRXr+ALl0zgToGf+t7UZr8MUkI/Jb8CDAAWH6b4LwDIB4AAAAASUVORK5CYII="

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_Toolbar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ConfirmButton__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Go_css__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Go_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Go_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layer_Layer__ = __webpack_require__(149);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 24/12/2017
 */











var regex = new RegExp('^([B|W])\\+([\\d|R|\\.]+)');

var _ref = _jsx("div", {});

var Go =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Go, _React$Component);

  function Go(props) {
    var _this;

    _classCallCheck(this, Go);

    _this = _possibleConstructorReturn(this, (Go.__proto__ || Object.getPrototypeOf(Go)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "game", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        init: function init(theGame) {
          _this.engine = new __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a[theGame.engine](theGame.info, theGame.moves);
          _this.engine.type = theGame.engine;

          _this.game.update();
        },
        append: function append(move) {
          _this.engine[move.type](move.color, move.position && move.position[0], move.position && move.position[1]);

          if (move.type === 'play') {
            var marks = JSON.parse(JSON.stringify(Array(_this.props.boardsize).fill(Array(_this.props.boardsize).fill(null))));
            marks[move.position[0]][move.position[1]] = 'choose';

            _this.game.update({
              marks: marks
            });
          } else {
            _this.game.update();
          }
        },
        result: function result(r) {
          _this.setState({
            result: r
          });
        },
        update: function update(inheritState) {
          _this.setState(Object.assign(inheritState || {}, {
            black: {
              id: _this.engine.info.black.id,
              name: _this.engine.info.black.name,
              avatar: _this.engine.info.black.avatar,
              captured: _this.controledEngine().captured[__WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK]
            },
            white: {
              id: _this.engine.info.white.id,
              name: _this.engine.info.white.name,
              avatar: _this.engine.info.white.avatar,
              captured: _this.controledEngine().captured[__WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE]
            },
            turn: _this.controledEngine().currentColor(),
            result: _this.state.result || _this.engine.info.result,
            game: {
              boardMoves: _this.controledEngine().boardMoves,
              board: _this.controledEngine().board,
              maxMoves: _this.engine.moves.length
            },
            color: // eslint-disable-next-line no-nested-ternary
            _this.props.user === _this.engine.info.black.id ? __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK : _this.props.user === _this.engine.info.white.id ? __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE : __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.EMPTY
          }));
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        changeMoves: function () {
          var _changeMoves = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(move) {
            var marks;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (move === _this.engine.moves.length) {
                      _this.controledEngine = function () {
                        return _this.engine;
                      };
                    } else {
                      _this.controledEngine = function () {
                        var controledEngine = new __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a[_this.engine.type](_this.engine.info, _this.engine.moves.slice(0, move));
                        return controledEngine;
                      };
                    }

                    _this.controledEngine = _this.controledEngine.bind(_assertThisInitialized(_this));
                    marks = JSON.parse(JSON.stringify(Array(_this.props.boardsize).fill(Array(_this.props.boardsize).fill(null))));

                    _this.game.update({
                      marks: marks
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function changeMoves(_x) {
            return _changeMoves.apply(this, arguments);
          };
        }(),
        toggleMoves: function toggleMoves() {
          _this.setState({
            control: Object.assign({}, _this.state.control, {
              showMoves: !_this.state.control.showMoves
            })
          });
        },
        pass: function pass() {
          if (_this.engine.currentColor() === _this.state.color) {
            _this.websocket.sendMessage(JSON.stringify({
              color: _this.state.color,
              type: 'pass'
            }));
          }
        },
        resign: function resign() {
          if (_this.engine.currentColor() === _this.state.color) {
            _this.websocket.sendMessage(JSON.stringify({
              color: _this.state.color,
              type: 'resign'
            }));
          }
        },
        click: function click(i, j) {
          if (_this.engine.currentColor() === _this.state.color && _this.engine.rules(_this.state.color, i, j)) {
            _this.setState({
              temporary: {
                color: _this.state.color,
                position: [i, j]
              }
            });
          }
        },
        confirm: function confirm() {
          if (_this.state.temporary) {
            _this.websocket.sendMessage(JSON.stringify({
              color: _this.state.temporary.color,
              type: 'play',
              position: _this.state.temporary.position
            }));

            _this.setState({
              temporary: null
            });
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "connection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        message: function message(msg) {
          var data = JSON.parse(msg);

          if (data && data.code === 'ok') {
            switch (data.type) {
              case 'init':
                _this.game.init(data.game);

                break;

              case 'delta':
                _this.game.append(data.move);

                break;

              case 'result':
                _this.game.result(data.result);

                break;

              default:
                break;
            }
          }
        }
      }
    });
    _this.state = {
      black: {
        id: '',
        name: '[BLACK]',
        avatar: null,
        captured: 0
      },
      white: {
        id: '',
        name: '[WHITE]',
        avatar: null,
        captured: 0
      },
      turn: __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.EMPTY,
      color: __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.EMPTY,
      temporary: null,
      result: null,
      game: {
        maxMoves: 0,
        boardMoves: JSON.parse(JSON.stringify(Array(_this.props.boardsize).fill(Array(_this.props.boardsize).fill(null)))),
        board: JSON.parse(JSON.stringify(Array(_this.props.boardsize).fill(Array(_this.props.boardsize).fill(null))))
      },
      marks: JSON.parse(JSON.stringify(Array(_this.props.boardsize).fill(Array(_this.props.boardsize).fill(null)))),
      control: {
        showMoves: false
      }
    };
    _this.engine = null;
    _this.game.init = _this.game.init.bind(_assertThisInitialized(_this));
    _this.game.append = _this.game.append.bind(_assertThisInitialized(_this));
    _this.game.result = _this.game.result.bind(_assertThisInitialized(_this));
    _this.handler.changeMoves = _this.handler.changeMoves.bind(_assertThisInitialized(_this));
    _this.handler.toggleMoves = _this.handler.toggleMoves.bind(_assertThisInitialized(_this));
    _this.handler.resign = _this.handler.resign.bind(_assertThisInitialized(_this));
    _this.handler.click = _this.handler.click.bind(_assertThisInitialized(_this));
    _this.handler.confirm = _this.handler.confirm.bind(_assertThisInitialized(_this));
    _this.connection.message = _this.connection.message.bind(_assertThisInitialized(_this));
    _this.controledEngine = _this.controledEngine.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Go, [{
    key: "controledEngine",
    value: function controledEngine() {
      return this.engine;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var match = this.state.result ? this.state.result.match(regex) : null;
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_9__Go_css___default.a.container
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Info__["a" /* default */], {
        black: this.state.black,
        white: this.state.white,
        turn: this.state.turn
      }), this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result ? _jsx(__WEBPACK_IMPORTED_MODULE_8__ConfirmButton__["a" /* default */], {
        handleConfirm: this.handler.confirm,
        disable: !this.state.temporary
      }) : _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_9__Go_css___default.a.scoreboard
      }, void 0, match ? "".concat(match[1] === 'W' ? '白' : '黑', "\u80DC").concat(match[2] === 'R' ? '' : "".concat(match[2], "\u76EE")) : ''), _jsx(__WEBPACK_IMPORTED_MODULE_10__layer_Layer__["a" /* default */], {
        moves: this.state.game.boardMoves,
        board: this.state.game.board,
        marks: this.state.marks,
        handleClick: this.handler.click,
        color: this.state.color,
        showMoves: this.state.control.showMoves,
        temporary: this.state.temporary
      }), _jsx(__WEBPACK_IMPORTED_MODULE_7__toolbar_Toolbar__["a" /* default */], {
        observer: !(this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result),
        maxMoves: this.state.game.maxMoves,
        handlePass: this.handler.pass,
        handleResign: this.handler.resign,
        changeMoves: this.handler.changeMoves,
        toggleMoves: this.handler.toggleMoves
      }), typeof window !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_websocket___default.a, {
        onMessage: this.connection.message,
        url: "ws://".concat(window.location.host, "/channel/").concat(this.props.id),
        reconnectIntervalInMilliSeconds: 100,
        ref: function ref(Websocket) {
          _this2.websocket = Websocket;
        }
      }) : _ref);
    }
  }]);

  return Go;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Go, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    user: null
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_9__Go_css___default.a))(Go));

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info_css__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Info_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 24/12/2017
 */





 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_6__Info_css___default.a);

var Info =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Info, _React$Component);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
  }

  _createClass(Info, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.gameinfo
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.player
      }, void 0, _jsx("img", {
        alt: "avatar_url",
        width: "64",
        height: "64",
        src: this.props.black.avatar
      }), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.info
      }, void 0, _jsx("span", {
        className: cx({
          name: true,
          active: this.props.turn === __WEBPACK_IMPORTED_MODULE_5_game_engine___default.a.Go.COLOR.BLACK
        })
      }, void 0, this.props.black.name), _jsx("span", {}, void 0, this.props.black.captured, " \u63D0\u5B50"))), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.player
      }, void 0, _jsx("img", {
        alt: "avatar_url",
        width: "64",
        height: "64",
        src: this.props.white.avatar
      }), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.info
      }, void 0, _jsx("span", {
        className: cx({
          name: true,
          active: this.props.turn === __WEBPACK_IMPORTED_MODULE_5_game_engine___default.a.Go.COLOR.WHITE
        })
      }, void 0, this.props.white.name), _jsx("span", {}, void 0, this.props.white.captured, " \u63D0\u5B50"))));
    }
  }]);

  return Info;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Info, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    turn: __WEBPACK_IMPORTED_MODULE_5_game_engine___default.a.Go.COLOR.EMPTY
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Info_css___default.a))(Info));

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(140);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Info.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Info.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._3C2ok{display:-ms-flexbox;display:flex;margin:10px 0;width:100%;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}._3C2ok>.u_iwJ{display:inherit;width:50%}._3C2ok>.u_iwJ:nth-child(2){direction:rtl}._3C2ok ._3r08Y{margin:0 13px;color:hsla(0,0%,100%,.3);line-height:18px}._3C2ok>.u_iwJ:nth-child(2) ._3r08Y{text-align:right}._3C2ok ._3r08Y>._1964-{color:#fff}._3C2ok ._3r08Y>._1964-:after{content:\"\\25CF\"}._3C2ok .u_iwJ:nth-child(2) ._3r08Y>._1964-:after{content:\"\\25CB\"}._3C2ok ._3r08Y>span{display:inherit}._3C2ok ._1lidi{font-size:16px}", ""]);

// exports
exports.locals = {
	"gameinfo": "_3C2ok",
	"player": "u_iwJ",
	"info": "_3r08Y",
	"active": "_1964-",
	"name": "_1lidi"
};

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_rangeslider__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Toolbar_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Toolbar_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 20/01/2018
 */




 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_4_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a);

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar(props) {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));
    _this.state = {
      currentMove: 0
    };
    _this.setMoves = _this.setMoves.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toolbar, [{
    key: "setMoves",
    value: function setMoves(moves) {
      this.props.changeMoves(moves);
      this.setState({
        currentMove: moves
      });
    }
  }, {
    key: "deltaMoves",
    value: function deltaMoves(moves) {
      var _this2 = this;

      return function () {
        _this2.props.changeMoves(_this2.state.currentMove + moves);

        _this2.setState({
          currentMove: _this2.state.currentMove + moves
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.observer) {
        return _jsx("div", {
          className: __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a.toolbar
        }, void 0, _jsx("div", {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_rangeslider___default.a, {
          min: 0,
          max: this.props.maxMoves,
          step: 1,
          value: this.state.currentMove,
          onChange: this.setMoves
        })), _jsx("div", {
          className: __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a.buttonGroup
        }, void 0, _jsx("button", {
          type: "button",
          onClick: this.deltaMoves(-1),
          className: cx({
            button: true
          }),
          disabled: this.state.currentMove === 0
        }, void 0, "\u524D\u4E00\u624B"), _jsx("button", {
          type: "button",
          onClick: this.deltaMoves(1),
          className: cx({
            button: true
          }),
          disabled: this.state.currentMove === this.props.maxMoves
        }, void 0, "\u540E\u4E00\u624B"), _jsx("button", {
          type: "button",
          onClick: this.props.toggleMoves,
          className: cx({
            button: true
          })
        }, void 0, "\u5F00\u5173\u624B\u6570")));
      }

      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a.buttonGroup
      }, void 0, _jsx("button", {
        type: "button",
        onClick: this.props.handlePass,
        className: cx({
          button: true
        })
      }, void 0, "\u505C\u4E00\u624B"), _jsx("button", {
        type: "button",
        onClick: this.props.handleResign,
        className: cx({
          button: true
        })
      }, void 0, "\u8BA4\u8F93"));
    }
  }]);

  return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a)(Toolbar));

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(143);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Toolbar.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Toolbar.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".rangeslider{margin:20px 0;position:relative;background:#e6e6e6;-ms-touch-action:none;touch-action:none}.rangeslider-vertical{margin:20px auto;height:150px;max-width:10px;background-color:transparent}.rangeslider-horizontal{height:12px;border-radius:10px}.rangeslider__labels{position:relative}.rangeslider,.rangeslider .rangeslider__fill{display:block;-webkit-box-shadow:inset 0 1px 3px rgba(0,0,0,.4);box-shadow:inset 0 1px 3px rgba(0,0,0,.4)}.rangeslider .rangeslider__handle{background:#fff;border:1px solid #ccc;cursor:pointer;display:inline-block;position:absolute;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4),0 -1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4),0 -1px 3px rgba(0,0,0,.4)}.rangeslider .rangeslider__handle-tooltip{width:40px;height:40px;text-align:center;position:absolute;background-color:rgba(0,0,0,.8);font-weight:400;font-size:14px;-webkit-transition:all .1s ease-in;-o-transition:all .1s ease-in;transition:all .1s ease-in;border-radius:4px;display:inline-block;color:#fff;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.rangeslider .rangeslider__handle-tooltip span{margin-top:12px;display:inline-block;line-height:100%}.rangeslider-horizontal .rangeslider__handle-tooltip{top:-55px}.rangeslider-horizontal .rangeslider__handle{width:30px;height:30px;border-radius:30px;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.rangeslider-horizontal .rangeslider__fill{height:100%;background-color:#7cb342;border-radius:10px;top:0}.rangeslider-vertical .rangeslider__fill,.rangeslider-vertical .rangeslider__handle{position:absolute}.rangeslider-vertical .rangeslider__fill{width:100%;background-color:#7cb342;-webkit-box-shadow:none;box-shadow:none;bottom:0}.rangeslider-vertical .rangeslider__handle{width:30px;height:10px;left:-10px;-webkit-box-shadow:none;box-shadow:none}.rangeslider-vertical .rangeslider__handle-tooltip{left:-100%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.rangeslider__labels .rangeslider__label-item{position:absolute;font-size:14px;cursor:pointer;display:inline-block;top:10px;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.rangeslider-vertical .rangeslider__labels{position:relative;list-style-type:none;margin:0 0 0 24px;padding:0;text-align:left;width:250px;height:100%;left:10px}.rangeslider-horizontal .rangeslider__handle:after{content:\" \";position:absolute;width:16px;height:16px;top:6px;left:6px;border-radius:50%;background-color:#dadada;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4) inset,0 -1px 3px rgba(0,0,0,.4) inset;box-shadow:inset 0 1px 3px rgba(0,0,0,.4),inset 0 -1px 3px rgba(0,0,0,.4)}.rangeslider-horizontal .rangeslider__handle-tooltip:after{border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,.8);left:50%;bottom:-8px;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.rangeslider-vertical .rangeslider__handle-tooltip:after{border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid rgba(0,0,0,.8);left:100%;top:12px}.rangeslider .rangeslider__handle-tooltip:after{content:\" \";position:absolute;width:0;height:0}.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill{right:0}.rangeslider-reverse.rangeslider-vertical .rangeslider__fill{top:0;bottom:inherit}.rangeslider-vertical .rangeslider__labels .rangeslider__label-item{position:absolute;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.rangeslider .rangeslider__handle .rangeslider__active{opacity:1}.rangeslider-vertical .rangeslider__labels .rangeslider__label-item:before{content:\"\";width:10px;height:2px;background:#000;position:absolute;left:-14px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}._3LOut{background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#b7a3f1));background:-webkit-linear-gradient(#fff,#b7a3f1);background:-o-linear-gradient(#fff,#b7a3f1);background:linear-gradient(#fff,#b7a3f1);width:50%;height:2.5em;font-size:1.5em;border-color:#000}._3LOut:active{background:-webkit-gradient(linear,left top,left bottom,from(#b7a3f1),to(#fff));background:-webkit-linear-gradient(#b7a3f1,#fff);background:-o-linear-gradient(#b7a3f1,#fff);background:linear-gradient(#b7a3f1,#fff)}._1qWo3{width:25%;height:1.5em;border-radius:8px;font-size:1.3em}._2ioNa{height:15vw;-ms-flex-direction:column;flex-direction:column}._2ioNa,._2L9el{width:100%;display:-ms-flexbox;display:flex}._2L9el{-ms-flex-pack:center;justify-content:center;margin-bottom:8%}._2L9el>button:first-child{border-radius:8px 0 0 8px}._2L9el>button:last-child{border-radius:0 8px 8px 0}", ""]);

// exports
exports.locals = {
	"button": "_3LOut",
	"confirm": "_1qWo3",
	"toolbar": "_2ioNa",
	"buttonGroup": "_2L9el"
};

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Button_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 26/12/2017
 */



 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__Button_css___default.a);

var ConfirmButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmButton, _React$Component);

  function ConfirmButton() {
    _classCallCheck(this, ConfirmButton);

    return _possibleConstructorReturn(this, (ConfirmButton.__proto__ || Object.getPrototypeOf(ConfirmButton)).apply(this, arguments));
  }

  _createClass(ConfirmButton, [{
    key: "render",
    value: function render() {
      return _jsx("button", {
        id: "confirm-btn",
        type: "button",
        className: cx({
          confirm: true,
          button: true
        }),
        disabled: this.props.disable,
        onClick: this.props.handleConfirm
      }, void 0, "\u786E\u8BA4");
    }
  }]);

  return ConfirmButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Button_css___default.a)(ConfirmButton));

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(146);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Button.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Button.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._3HhQ3{background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#b7a3f1));background:-webkit-linear-gradient(#fff,#b7a3f1);background:-o-linear-gradient(#fff,#b7a3f1);background:linear-gradient(#fff,#b7a3f1);width:50%;height:2.5em;font-size:1.5em;border-color:#000}._3HhQ3:active{background:-webkit-gradient(linear,left top,left bottom,from(#b7a3f1),to(#fff));background:-webkit-linear-gradient(#b7a3f1,#fff);background:-o-linear-gradient(#b7a3f1,#fff);background:linear-gradient(#b7a3f1,#fff)}._3NGAC{width:25%;height:1.5em;border-radius:8px;font-size:1.3em}", ""]);

// exports
exports.locals = {
	"button": "_3HhQ3",
	"confirm": "_3NGAC"
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(148);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Go.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Go.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".r_vGR{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;padding:0 6%;height:100vh;background:-webkit-radial-gradient(#2e1f59,#16102b)!important;background:-o-radial-gradient(#2e1f59,#16102b)!important;background:radial-gradient(#2e1f59,#16102b)!important}.r_vGR>div{margin-top:4%}._3lFG9{color:#fff;margin-top:0!important}", ""]);

// exports
exports.locals = {
	"container": "r_vGR",
	"scoreboard": "_3lFG9"
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_BackgroundLayer__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_LineLayer__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highlight_HighlightLayer__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stone_StoneLayer__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__move_MoveLayer__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_EventLayer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mark_MarkLayer__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Layer_css__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Layer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Layer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 17/01/2018
 */












var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__background_BackgroundLayer__["a" /* default */], {});

var Layer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layer, _React$Component);

  function Layer(props) {
    var _this;

    _classCallCheck(this, Layer);

    _this = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, props));
    _this.listener = {};
    _this.events = {};
    _this.listenerRegister = _this.listenerRegister.bind(_assertThisInitialized(_this));
    _this.handler = _this.handler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Layer, [{
    key: "handler",
    value: function handler(event) {
      var self = this;
      return function (i, j) {
        if (!self.events[event] || self.events[event][0] !== i || self.events[event][1] !== j) {
          self.events[event] = [i, j];

          if (self.listener[event] && self.listener[event].length > 0) {
            self.listener[event].forEach(function (listener) {
              listener(i, j);
            });
          }
        }
      };
    }
  }, {
    key: "listenerRegister",
    value: function listenerRegister(event, listener) {
      this.listener[event] = this.listener[event] || [];
      this.listener[event].push(listener);
    }
  }, {
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_10__Layer_css___default.a.layers
      }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_5__highlight_HighlightLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        listenerRegister: this.listenerRegister
      }), _jsx(__WEBPACK_IMPORTED_MODULE_4__line_LineLayer__["a" /* default */], {
        boardsize: this.props.board.length
      }), _jsx(__WEBPACK_IMPORTED_MODULE_6__stone_StoneLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        listenerRegister: this.listenerRegister,
        board: this.props.board,
        handleClick: this.props.handleClick,
        temporary: this.props.temporary
      }), _jsx(__WEBPACK_IMPORTED_MODULE_9__mark_MarkLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        marks: this.props.marks
      }), this.props.showMoves && _jsx(__WEBPACK_IMPORTED_MODULE_7__move_MoveLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        board: this.props.board,
        moves: this.props.moves
      }), _jsx(__WEBPACK_IMPORTED_MODULE_8__event_EventLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        click: this.handler('click'),
        touchStart: this.handler('touchStart'),
        touchMove: this.handler('touchMove'),
        touchEnd: this.handler('touchEnd')
      }));
    }
  }]);

  return Layer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Layer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    temporary: null,
    showMoves: false
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_10__Layer_css___default.a)(Layer));

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 17/01/2018
 */


 // eslint-disable-next-line css-modules/no-unused-class


var bgCx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css___default.a);

var BackgroundLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BackgroundLayer, _React$Component);

  function BackgroundLayer() {
    _classCallCheck(this, BackgroundLayer);

    return _possibleConstructorReturn(this, (BackgroundLayer.__proto__ || Object.getPrototypeOf(BackgroundLayer)).apply(this, arguments));
  }

  _createClass(BackgroundLayer, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: bgCx({
          layer: true,
          background: true
        })
      });
    }
  }]);

  return BackgroundLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css___default.a)(BackgroundLayer));

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(152);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./BackgroundLayer.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./BackgroundLayer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(115);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._1rVFt{height:100%;-ms-flex-direction:column;flex-direction:column;background:no-repeat 50%/cover;position:absolute;width:100%}._1rVFt,._2XZLw{display:-ms-flexbox;display:flex}._2XZLw{-ms-flex-preferred-size:100%;flex-basis:100%}.DEUcU{background-image:url(" + escape(__webpack_require__(153)) + ")}", ""]);

// exports
exports.locals = {
	"layer": "_1rVFt",
	"boardrow": "_2XZLw",
	"background": "DEUcU"
};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "/assets/0f28f248.jpg";

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LineIntersection__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LineLayer_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LineLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__LineLayer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 17/01/2018
 */





 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_6__LineLayer_css___default.a);

var LineLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LineLayer, _React$Component);

  function LineLayer(props) {
    var _this;

    _classCallCheck(this, LineLayer);

    _this = _possibleConstructorReturn(this, (LineLayer.__proto__ || Object.getPrototypeOf(LineLayer)).call(this, props));
    _this.intersection = _this.intersection.bind(_assertThisInitialized(_this));
    _this.stars = [];

    switch (_this.props.boardsize) {
      case 9:
        _this.stars = [[2, 2], [2, 6], [4, 4], [6, 2], [6, 6]];
        break;

      case 13:
        _this.stars = [[3, 3], [3, 9], [6, 6], [9, 3], [9, 9]];
        break;

      case 19:
        _this.stars = [[3, 3], [3, 9], [3, 15], [9, 3], [9, 9], [9, 15], [15, 3], [15, 9], [15, 15]];
        break;

      default:
        break;
    }

    return _this;
  }

  _createClass(LineLayer, [{
    key: "isItemInArray",
    value: function isItemInArray(array, item) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][0] === item[0] && array[i][1] === item[1]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "intersection",
    value: function intersection(i, j) {
      return _jsx(__WEBPACK_IMPORTED_MODULE_5__LineIntersection__["a" /* default */], {
        star: this.isItemInArray(this.stars, [i, j]),
        classNames: {
          lastLine: i === this.props.boardsize - 1
        }
      }, "".concat(i, ",").concat(j));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return LineLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__LineLayer_css___default.a)(LineLayer));

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LineIntersection_css__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LineIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__LineIntersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 17/01/2018
 */



 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__LineIntersection_css___default.a);

var LineIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LineIntersection, _React$Component);

  function LineIntersection(props) {
    var _this;

    _classCallCheck(this, LineIntersection);

    _this = _possibleConstructorReturn(this, (LineIntersection.__proto__ || Object.getPrototypeOf(LineIntersection)).call(this, props));
    _this.state = {
      style: {}
    };
    return _this;
  }

  _createClass(LineIntersection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        style: {
          height: this.element.clientHeight
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(element) {
          _this2.element = element;
        },
        style: this.state.style,
        className: cx(_extends({
          star: this.props.star,
          intersection: true,
          line: true
        }, this.props.classNames))
      });
    }
  }]);

  return LineIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__LineIntersection_css___default.a)(LineIntersection));

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(157);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./LineIntersection.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./LineIntersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".aFWmk{-ms-flex-preferred-size:100%;flex-basis:100%}._1QXHI:before{opacity:1;border-top:1px solid #000;content:\"\";z-index:-1;width:100%;display:block;margin-top:50%;margin-left:50%}._1QXHI:last-child:before{border-top:1px solid transparent}._1QXHI:after{opacity:1;border-left:1px solid #000;content:\" \";z-index:-1;height:100%;display:block;margin-left:50%}._2pqiF{border-radius:50%;background:-webkit-radial-gradient(#000 20%,transparent 0);background:-o-radial-gradient(#000 20%,transparent 20%);background:radial-gradient(#000 20%,transparent 0);background-position:1px 1px}._7cXHx:after{border-left:0}", ""]);

// exports
exports.locals = {
	"intersection": "aFWmk",
	"line": "_1QXHI",
	"star": "_2pqiF",
	"lastLine": "_7cXHx"
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(159);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./LineLayer.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./LineLayer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._1i_JF{height:100%;-ms-flex-direction:column;flex-direction:column;background:no-repeat 50%/cover;position:absolute;width:100%}._1i_JF,._3-Giy{display:-ms-flexbox;display:flex}._3-Giy{-ms-flex-preferred-size:100%;flex-basis:100%}", ""]);

// exports
exports.locals = {
	"layer": "_1i_JF",
	"boardrow": "_3-Giy"
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HighlightIntersection__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 17/01/2018
 */





 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css___default.a);

var HighlightLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HighlightLayer, _React$Component);

  function HighlightLayer(props) {
    var _this;

    _classCallCheck(this, HighlightLayer);

    _this = _possibleConstructorReturn(this, (HighlightLayer.__proto__ || Object.getPrototypeOf(HighlightLayer)).call(this, props));
    ['touchStart', 'touchMove', 'touchEnd', 'click'].forEach(function (event) {
      _this.props.listenerRegister(event, _this.eventHandler(event));
    });
    _this.intersection = _this.intersection.bind(_assertThisInitialized(_this));
    _this.state = {
      events: {}
    };
    return _this;
  }

  _createClass(HighlightLayer, [{
    key: "eventHandler",
    value: function eventHandler(event) {
      var _this2 = this;

      return function (i, j) {
        _this2.setState({
          events: _defineProperty({}, event, [i, j])
        });
      };
    }
  }, {
    key: "intersection",
    value: function intersection(i, j) {
      var highlight = this.state.events.touchStart || this.state.events.touchMove || [];
      return _jsx(__WEBPACK_IMPORTED_MODULE_5__HighlightIntersection__["a" /* default */], {
        row: i,
        col: j,
        classNames: {
          highlight: j === highlight[1] || i === highlight[0]
        }
      }, "".concat(i, ",").concat(j));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return HighlightLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css___default.a)(HighlightLayer));

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 17/01/2018
 */



 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css___default.a);

var HighlightIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HighlightIntersection, _React$Component);

  function HighlightIntersection() {
    _classCallCheck(this, HighlightIntersection);

    return _possibleConstructorReturn(this, (HighlightIntersection.__proto__ || Object.getPrototypeOf(HighlightIntersection)).apply(this, arguments));
  }

  _createClass(HighlightIntersection, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx(_extends({
          intersection: true
        }, this.props.classNames))
      });
    }
  }]);

  return HighlightIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css___default.a)(HighlightIntersection));

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(163);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./HighlightIntersection.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./HighlightIntersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".Omtl7{-ms-flex-preferred-size:100%;flex-basis:100%}._2gC7x{background-color:rgba(0,0,0,.5)}", ""]);

// exports
exports.locals = {
	"intersection": "Omtl7",
	"highlight": "_2gC7x"
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(165);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./HighlightLayer.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./HighlightLayer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._3k527{height:100%;-ms-flex-direction:column;flex-direction:column;background:no-repeat 50%/cover;position:absolute;width:100%}._3k527,.n34La{display:-ms-flexbox;display:flex}.n34La{-ms-flex-preferred-size:100%;flex-basis:100%}", ""]);

// exports
exports.locals = {
	"layer": "_3k527",
	"boardrow": "n34La"
};

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StoneIntersection__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(113);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





 // eslint-disable-next-line css-modules/no-unused-class




var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default.a);

var StoneLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StoneLayer, _React$Component);

  function StoneLayer(props) {
    var _this;

    _classCallCheck(this, StoneLayer);

    _this = _possibleConstructorReturn(this, (StoneLayer.__proto__ || Object.getPrototypeOf(StoneLayer)).call(this, props));
    ['touchEnd', 'click'].forEach(function (event) {
      _this.props.listenerRegister(event, _this.eventHandler(event));
    });
    _this.intersection = _this.intersection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StoneLayer, [{
    key: "eventHandler",
    value: function eventHandler() {
      return this.props.handleClick;
    }
  }, {
    key: "intersection",
    value: function intersection(i, j) {
      var temporary = !!this.props.temporary && this.props.temporary.position[0] === i && this.props.temporary.position[1] === j;
      return _jsx(__WEBPACK_IMPORTED_MODULE_6__StoneIntersection__["a" /* default */], {
        row: i,
        col: j,
        classNames: {
          black: this.props.board[i][j] === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK || temporary && !!this.props.temporary && this.props.temporary.color === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK,
          white: this.props.board[i][j] === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE || temporary && !!this.props.temporary && this.props.temporary.color === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE,
          temporary: temporary
        }
      }, "".concat(i, ",").concat(j));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return StoneLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(StoneLayer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    temporary: null
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default.a)(StoneLayer));

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._4qWkE{height:100%;-ms-flex-direction:column;flex-direction:column;background:no-repeat 50%/cover;position:absolute;width:100%}._3__Nz,._4qWkE{display:-ms-flexbox;display:flex}._3__Nz{-ms-flex-preferred-size:100%;flex-basis:100%}", ""]);

// exports
exports.locals = {
	"layer": "_4qWkE",
	"boardrow": "_3__Nz"
};

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 18/01/2018
 */



 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css___default.a);

var StoneIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StoneIntersection, _React$Component);

  function StoneIntersection() {
    _classCallCheck(this, StoneIntersection);

    return _possibleConstructorReturn(this, (StoneIntersection.__proto__ || Object.getPrototypeOf(StoneIntersection)).apply(this, arguments));
  }

  _createClass(StoneIntersection, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx(_extends({
          intersection: true
        }, this.props.classNames))
      });
    }
  }]);

  return StoneIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css___default.a)(StoneIntersection));

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(170);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./StoneIntersection.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./StoneIntersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(115);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._1EuLX{-ms-flex-preferred-size:100%;flex-basis:100%}._2mAoN,._2t8S_{background:no-repeat 50%/cover;border-radius:50%}._2mAoN:before,._2t8S_:before{width:50%;margin-left:100%}._2mAoN:after,._2t8S_:after{height:58%;margin-top:42%}._2mAoN{background-image:url(" + escape(__webpack_require__(117)) + ")}._2t8S_{background-image:url(" + escape(__webpack_require__(118)) + ")}._3U4gy._2mAoN{background-image:url(" + escape(__webpack_require__(119)) + "),url(" + escape(__webpack_require__(117)) + ")}._3U4gy._2t8S_{background-image:url(" + escape(__webpack_require__(119)) + "),url(" + escape(__webpack_require__(118)) + ")}", ""]);

// exports
exports.locals = {
	"intersection": "_1EuLX",
	"black": "_2mAoN",
	"white": "_2t8S_",
	"temporary": "_3U4gy"
};

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MoveIntersection__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 18/01/2018
 */





 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default.a);

var MoveLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MoveLayer, _React$Component);

  function MoveLayer(props) {
    var _this;

    _classCallCheck(this, MoveLayer);

    _this = _possibleConstructorReturn(this, (MoveLayer.__proto__ || Object.getPrototypeOf(MoveLayer)).call(this, props));
    _this.intersection = _this.intersection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MoveLayer, [{
    key: "intersection",
    value: function intersection(i, j) {
      return _jsx(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection__["a" /* default */], {
        row: i,
        col: j,
        stone: this.props.board[i][j],
        value: this.props.moves[i][j],
        boardsize: this.props.boardsize
      }, "".concat(i, ",").concat(j));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return MoveLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default.a)(MoveLayer));

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 17/01/2018
 */




 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css___default.a);

var MoveIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MoveIntersection, _React$Component);

  function MoveIntersection(props) {
    var _this;

    _classCallCheck(this, MoveIntersection);

    _this = _possibleConstructorReturn(this, (MoveIntersection.__proto__ || Object.getPrototypeOf(MoveIntersection)).call(this, props));
    _this.state = {
      style: {}
    };
    return _this;
  }

  _createClass(MoveIntersection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        style: {
          height: this.element.clientHeight
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(element) {
          _this2.element = element;
        },
        style: this.state.style,
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx({
          intersection: true
        })
      }, _jsx("div", {
        style: {
          transform: "translateY(-50%) scale(calc(1.6 - ".concat(this.props.boardsize / 20, "))")
        },
        className: cx({
          number: true,
          black: this.props.stone === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE,
          white: this.props.stone === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK
        })
      }, void 0, this.props.value !== 0 ? this.props.value : ''));
    }
  }]);

  return MoveIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css___default.a)(MoveIntersection));

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(174);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./MoveIntersection.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./MoveIntersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._3U1JR{-ms-flex-preferred-size:100%;flex-basis:100%}._1QWrn{color:#fff}._23ss0{color:#000}._3voXz{text-align:center;position:relative;top:50%;left:-.5vw}._3U1JR{overflow-x:hidden}", ""]);

// exports
exports.locals = {
	"intersection": "_3U1JR",
	"white": "_1QWrn",
	"black": "_23ss0",
	"number": "_3voXz"
};

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventIntersection__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable react/no-unused-prop-types */

/**
 * @author lookis on 17/01/2018
 */




 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default.a);

var EventLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventLayer, _React$Component);

  function EventLayer(props) {
    var _this;

    _classCallCheck(this, EventLayer);

    _this = _possibleConstructorReturn(this, (EventLayer.__proto__ || Object.getPrototypeOf(EventLayer)).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventLayer, [{
    key: "onClick",
    value: function onClick(e) {
      var clientX = e.clientX,
          clientY = e.clientY;
      var target = document.elementFromPoint(clientX, clientY);
      this.props.click(parseInt(target.getAttribute('data-offset-x'), 10), parseInt(target.getAttribute('data-offset-y'), 10));
    }
  }, {
    key: "handler",
    value: function handler(event) {
      var _this2 = this;

      return function (e) {
        e.preventDefault();
        var _e$changedTouches$ = e.changedTouches[0],
            clientX = _e$changedTouches$.clientX,
            clientY = _e$changedTouches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        _this2.props[event](parseInt(target.getAttribute('data-offset-x'), 10), parseInt(target.getAttribute('data-offset-y'), 10));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var intersections = [];

      for (var i = 0; i < this.props.boardsize; i += 1) {
        var row = [];

        for (var j = 0; j < this.props.boardsize; j += 1) {
          row.push(_jsx(__WEBPACK_IMPORTED_MODULE_4__EventIntersection__["a" /* default */], {
            row: i,
            col: j
          }, "".concat(i, ",").concat(j)));
        }

        intersections.push(_jsx("div", {
          className: cx({
            boardrow: true
          })
        }, i, row));
      }

      return _jsx("div", {
        onClick: this.onClick,
        onTouchStart: this.handler('touchStart'),
        onTouchMove: this.handler('touchMove'),
        onTouchEnd: this.handler('touchEnd'),
        className: cx({
          layer: true
        })
      }, void 0, intersections);
    }
  }]);

  return EventLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default.a)(EventLayer));

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Intersection_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Intersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Intersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 17/01/2018
 */



 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__Intersection_css___default.a);

var EventIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventIntersection, _React$Component);

  function EventIntersection() {
    _classCallCheck(this, EventIntersection);

    return _possibleConstructorReturn(this, (EventIntersection.__proto__ || Object.getPrototypeOf(EventIntersection)).apply(this, arguments));
  }

  _createClass(EventIntersection, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx({
          intersection: true
        })
      });
    }
  }]);

  return EventIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Intersection_css___default.a)(EventIntersection));

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(178);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Intersection.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Intersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._34vW8{-ms-flex-preferred-size:100%;flex-basis:100%}", ""]);

// exports
exports.locals = {
	"intersection": "_34vW8"
};

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkIntersection__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 18/01/2018
 */





 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default.a);

var MarkLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarkLayer, _React$Component);

  function MarkLayer(props) {
    var _this;

    _classCallCheck(this, MarkLayer);

    _this = _possibleConstructorReturn(this, (MarkLayer.__proto__ || Object.getPrototypeOf(MarkLayer)).call(this, props));
    _this.intersection = _this.intersection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MarkLayer, [{
    key: "intersection",
    value: function intersection(i, j) {
      if (this.props.marks[i][j]) {
        return _jsx(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection__["a" /* default */], {
          row: i,
          col: j,
          mark: this.props.marks[i][j]
        }, "".concat(i, ",").concat(j));
      }

      return _jsx(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection__["a" /* default */], {
        row: i,
        col: j
      }, "".concat(i, ",").concat(j));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return MarkLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default.a)(MarkLayer));

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 17/01/2018
 */




 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css___default.a);

var MarkIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarkIntersection, _React$Component);

  function MarkIntersection() {
    _classCallCheck(this, MarkIntersection);

    return _possibleConstructorReturn(this, (MarkIntersection.__proto__ || Object.getPrototypeOf(MarkIntersection)).apply(this, arguments));
  }

  _createClass(MarkIntersection, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx(_defineProperty({
          intersection: true,
          mark: true
        }, this.props.mark, true))
      });
    }
  }]);

  return MarkIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(MarkIntersection, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    mark: 'empty'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css___default.a)(MarkIntersection));

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(182);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./MarkIntersection.css", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./MarkIntersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(115);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._1vznG{-ms-flex-preferred-size:100%;flex-basis:100%}._3OWtQ{background:no-repeat 50%/cover url(" + escape(__webpack_require__(183)) + ");border-radius:50%}._1UWT1:before{width:50%;margin-left:100%}._1UWT1:after{height:58%;margin-top:42%}", ""]);

// exports
exports.locals = {
	"intersection": "_1vznG",
	"choose": "_3OWtQ",
	"mark": "_1UWT1"
};

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCQkU2MUM2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCQkU2MUQ2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJCRTYxQTZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJCRTYxQjZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtEnsyIAAAG8SURBVHja7Fe9SgNBEM5pMCr4AmK0FGKVXovERtIpRkHFw04fQiTxIbQTxVgcAUlnFQVjZWGnIKYI0ScQ/EM4v4UpwrC3f0QP4QY+JrO3M/vt3+zEC8MwFacMpGKWhEDsBNI2nccq4RDUKlAEZoEp+tQBWkATCF73vE/TmJ7pLcDg+1BlYFrT9ZFI7PaFAAYWszwCCparewlsgUjHmQAGz0JdADnHLb4HFkCi63oIjyWDPwBVYAbIEMTvCn3rlRzFsF8BzP4Aaps1n9Kyfkf4pGm7NtinQ/jsGBNAoGGod9Z8hiDrhge2BrXGmkfg/2G6BSvMvgN8i733yUcVU0mgyOxG1LLLhPo2NDGVBOaYHTjcgEATU0kgy+y2A4G2JqaSAE+lmb9+jF6YPe4Qe4LZzzYEbplddiDAr+yNDYFrZi9RkjF9uAahFjUxlQRqzM7rUiqTE/LhWfSfpOKegE3JMywy3DlQB54AUaRMAsu07HzmVxi84FoR+ZLnOE+oGj7Hm841Ib3jJSoubEX4lFS1gG1JJjsTURK5584EiMQo7fU85XaRXr+ALl0zgToGf+t7UZr8MUkI/Jb8CDAAWH6b4LwDIB4AAAAASUVORK5CYII="

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(185);
    var insertCss = __webpack_require__(18);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Layer.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Layer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._16CDK{position:relative;width:85vw;height:85vw}", ""]);

// exports
exports.locals = {
	"layers": "_16CDK"
};

/***/ }),
/* 186 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"updateGo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":101}};
    doc.loc.source = {"body":"mutation updateGo($id: String!, $color: String!) {\n  updateGo(id: $id, color: $color) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),
/* 187 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Go"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"go"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"engine"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"info"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"boardsize"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"black"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"white"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"goal"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":133}};
    doc.loc.source = {"body":"query Go($id: String!) {\n  go(id: $id) {\n    id\n    engine\n    info {\n      boardsize\n      black\n      white\n      goal\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ })
]);;
//# sourceMappingURL=go.js.map