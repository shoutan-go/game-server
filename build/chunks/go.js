require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(93).concat([
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Go__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__invite_graphql__);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * @author lookis on 24/12/2017
 */





function action(_ref) {
  var _ref$query = _ref.query,
      id = _ref$query.id,
      invite = _ref$query.invite,
      store = _ref.store,
      client = _ref.client;

  if (invite === 'black' || invite === 'white') {
    client.mutate({
      mutation: __WEBPACK_IMPORTED_MODULE_3__invite_graphql___default.a,
      variables: {
        id: id,
        color: invite
      }
    });
  }

  return {
    chunks: ['go'],
    title: '对局中',
    component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Go__["a" /* default */], {
      id: id,
      user: store.getState().user && store.getState().user.id
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Wechat__ = __webpack_require__(107);
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(98);
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(100);
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "*{font:normal 14px Roboto,Hiragino Sans GB,Microsoft YaHei,STHeiti,SimHei,WenQuanYi Micro Hei,sans-serif}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}body,html{overflow-x:hidden}body{margin:0;position:relative!important}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(102);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(103);
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
/* 103 */
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
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(105);
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(106);
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
/* 106 */
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
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_graphql__ = __webpack_require__(108);
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
/* 108 */
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(144);
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
/* 110 */,
/* 111 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(139);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./BoardIntersection.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./BoardIntersection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
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
/* 113 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q2OERERTI2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q2OERERTM2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDY4RERFMDZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDY4RERFMTZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvfq19wAAAdKSURBVHjahFc7jxxFEK7u6Xntw177sGAxZyMsgRBOjDAGI2NMABJ2iGQHiJAfQIQjhIgckCIcEQABEgFCJjCPBCzxMIiMtwhsyUYg8N7u3e7OTD/4qmd6b+58d4x21DM93V1VX31fda9YvnNIzjlSUURxt0OjyQrt6vaon3Xo1myNolhSJ0qpLMoDcZY8q609gbEPWmvvNsb0hRCEa4z2ppTyR7RX0F525K7FJCkiQVJGNCmnpARsCEnaGGrmkaL/uYSQRw25l62k542xSkpB8/mc0jT138uypCRJ+nBoPxx6BAu/iFvLKPogUdEbgsR3wdhWl9z+g+jEaXJRE31bCnfOpbGy5AhwURzHGOEoYtSUIhhvnBVNZE5prc8BtatGm4v4nm/nxG0IWGN5pWNzU70vrTvYgQFnHfoNKRhmOIEq/LAkAWeSZvhuybAT8M+in405jC+1oUrrl0QlnhFxdE4K8c2ODvCi3U5+GvBdKq2hFJZS5I0jrPCeZyk5pMBojehjTg9aBaeQV/RZjNGV5gAI8FMhK/jEztt7TVF+nWT5GXz8eEsHOIJEyuNpll+ihpSCQ8XiyDFFJianC0Qck8oTnwL+zu+MhLHMDaCgYh8Io6JAXg30qqryqJRldSlPkuN4/mpBQlaAN6jUAE+XDaJIsIiA4VgqyrLcPyeYkKkKKHDkEQwnyH8EiCufojTtkxO7qShKT9L5bIp1Y0ImSPqAFJnZnNH8BDaXi6IYMXJqsLQXkBpEYN5DjnqJ4ugEO0SdOKE8iUgBgW6nQxKSzLtZky8CGTO6dWuF+rt7GA9iVmu0t9+nOZyYTie0MtU0Xp2TiSRVRlOlJJWV7ikVvQvjZwzzql7LnUQczyWIJMagGBLLsoy6aUT9bpeSuIZ8JhT0DPcQEeecL20SKicV4J1iPGpGBlW4lPI9e0ilKwhiQpPVVSAyozWNdJDlunMa6z+JNb5Qa+MJaWcvpN3ca1sgsl6v5x1IWG5xSjMYK5FH7QwVpQas2qeFU8ck1JwGRDMtd1E1BpdiRbsdODRzcKhLmUxheExSTyhxde0AAhfSLH1cRUIe1tYcqzUdUw9Qd3AziQoECTnSbDqFQUhMM9lAWG090YTktmz0DzTWRmRgwHCxmvxDaYwKyFxCCjuDfTAa02TlXyilYiU9ZmX0EGhlz3KOmSSs87ST0xweVrpEpNA8dM/OOBjVFZJla7m6Wjq1Glj3dQcKGL6JWiOlRXpYK0VBGeSZgcCJzqnAfFbGvCzOqllVnupnPV/dWOOj8ZiViwUx0ammWLqFztkYs5f1zZpnw/zOhGIUuTYsZAj0ZCT9GIv5cywnJNKWKKqQTnx4SkVS3sfRsxwZGvYs8pM4DOsd8As6tyi12BN8cYKuvWHuY9XU5bgeWxNUMyieJ74OTGfeAe8kCB8JcQj1RnbZgIa33HLt4UXrelsXCyadq2tF8268oxw5LwxN1/uHrLeWGgnRVFdXV0itPWeoWdtZlj51FRcpdlQw8FFd3YSvbIiMc4o1a/jryPiZ2/DM/cEYt/zODoa0cGq5ZebHIKUAp3i/4coprZVKCiXQYoD1lY116JHwEfGzXkQX4A7OBDQ8f/DOz1y2A0Jhyw5IGUhEWOHT6yBT5hYwhYIBgTdgdcNo18DJ8LnFIu1ogwNhIwpzAgJttNpzjKn3BfJ2EDqgGfMEnrgZ3vDObc0LWqDAea7zWxPSKwPvq6h6QRHBEYafeRLmBhu4JzjhyJ+wwHJYMOTV71RKbXAq3G2SBRRC9Otwm0WqAlrh2SsCKcqU+FX681tr8WDcH05azyGa9h2MeMk1ewM73V4roBEUFPqsd0p8Ju5YGi7Do2tMmHZeg1GeGGBrRxzIuO2RrklJQKV9aey+KbZzrH1Iou5fx6CPmLWBB5wzvkNkbShDmnh8W3rtO6AVvq/P5ertfHXEh0+LsvxDsoSw+50PkLYr3vpRzW0gXBvKzWkJhsPYtnGyqLK4E97YqvKVaj6jaHjXfsrz/G9EtQ9RPeqPX8hZIFWIoi299nO7b/0of/sJuN6rUIyE9+QdU5VvRth7xAP3Hw6yEqPR6LfZbHaIzwKbtb65DQhsZ3AzgryfK8EnIHsTWTiI01flj5wcLV8goVtaWjqFieOQ3/ZZv53rwJfNqdp4wm6rpd628avg9CnMrYwPAAQF/NTFsYsvRH59OBwew6J/ceFo5327dOzkQJhXFz6xis4n8OmXtoOyTRxmN5D4eTAYHAHMVzjSUNdZFaE6th3ayolgvEXsHxDtESHFVb/L7vTXrNnJbkAZJ4DOefY8FJkAPY8JUmTHwu7XdqoJzEBlr0PvD8OB37dCKhoO77nN+7AwFHEFHHkbfVM4cgD3Ht6u+Y9I5Akp/N3eHZv2Bhx6C+0LeP/QO8f/KaNwyNnhv+GG/4k10f6EI6/iv+FrWPrpQpcn0X8Up5wDWGwANuOU7lYQ4XXc3yPaLxH15+ibb0Zlq+s/AQYAsROa5xHe+YAAAAAASUVORK5CYII="

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "/assets/29f401c5.png";

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCQkU2MUM2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCQkU2MUQ2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJCRTYxQTZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJCRTYxQjZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtEnsyIAAAG8SURBVHja7Fe9SgNBEM5pMCr4AmK0FGKVXovERtIpRkHFw04fQiTxIbQTxVgcAUlnFQVjZWGnIKYI0ScQ/EM4v4UpwrC3f0QP4QY+JrO3M/vt3+zEC8MwFacMpGKWhEDsBNI2nccq4RDUKlAEZoEp+tQBWkATCF73vE/TmJ7pLcDg+1BlYFrT9ZFI7PaFAAYWszwCCparewlsgUjHmQAGz0JdADnHLb4HFkCi63oIjyWDPwBVYAbIEMTvCn3rlRzFsF8BzP4Aaps1n9Kyfkf4pGm7NtinQ/jsGBNAoGGod9Z8hiDrhge2BrXGmkfg/2G6BSvMvgN8i733yUcVU0mgyOxG1LLLhPo2NDGVBOaYHTjcgEATU0kgy+y2A4G2JqaSAE+lmb9+jF6YPe4Qe4LZzzYEbplddiDAr+yNDYFrZi9RkjF9uAahFjUxlQRqzM7rUiqTE/LhWfSfpOKegE3JMywy3DlQB54AUaRMAsu07HzmVxi84FoR+ZLnOE+oGj7Hm841Ib3jJSoubEX4lFS1gG1JJjsTURK5584EiMQo7fU85XaRXr+ALl0zgToGf+t7UZr8MUkI/Jb8CDAAWH6b4LwDIB4AAAAASUVORK5CYII="

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
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
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Board__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ConfirmButton__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PassButton__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ResignButton__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Go_css__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Go_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Go_css__);
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
 * @author lookis on 24/12/2017
 */












var regex = new RegExp('^([B|W])\\+([\\d|R|\\.]+)');

var _ref = _jsx("div", {});

var _ref2 = _jsx("div", {});

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

          _this.game.update();
        },
        append: function append(move) {
          _this.engine[move.type](move.color, move.position && move.position[0], move.position && move.position[1]);

          _this.game.update();
        },
        result: function result(r) {
          _this.setState({
            result: r
          });
        },
        update: function update() {
          _this.setState({
            board: _this.engine.board,
            black: {
              id: _this.engine.info.black.id,
              name: _this.engine.info.black.name,
              avatar: _this.engine.info.black.avatar,
              captured: _this.engine.captured[__WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK]
            },
            white: {
              id: _this.engine.info.white.id,
              name: _this.engine.info.white.name,
              avatar: _this.engine.info.white.avatar,
              captured: _this.engine.captured[__WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE]
            },
            turn: _this.engine.currentColor(),
            result: _this.engine.info.result,
            color: // eslint-disable-next-line no-nested-ternary
            _this.props.user === _this.engine.info.black.id ? __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK : _this.props.user === _this.engine.info.white.id ? __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE : __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.EMPTY
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        pass: function pass() {
          if (_this.engine.currentColor() === _this.state.color) {
            // this.engine.pass(this.state.color);
            _this.websocket.sendMessage(JSON.stringify({
              color: _this.state.color,
              type: 'pass'
            }));
          }
        },
        resign: function resign() {
          if (_this.engine.currentColor() === _this.state.color) {
            // this.engine.resign(this.state.color);
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
            console.log(data);

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
      board: Array(19).fill(Array(19).fill(0)),
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
      result: null
    };
    _this.engine = null;
    _this.game.init = _this.game.init.bind(_assertThisInitialized(_this));
    _this.game.append = _this.game.append.bind(_assertThisInitialized(_this));
    _this.game.result = _this.game.result.bind(_assertThisInitialized(_this));
    _this.handler.pass = _this.handler.pass.bind(_assertThisInitialized(_this));
    _this.handler.resign = _this.handler.resign.bind(_assertThisInitialized(_this));
    _this.handler.click = _this.handler.click.bind(_assertThisInitialized(_this));
    _this.handler.confirm = _this.handler.confirm.bind(_assertThisInitialized(_this));
    _this.connection.message = _this.connection.message.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Go, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var match = this.state.result ? this.state.result.match(regex) : null;
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__Go_css___default.a.container
      }, void 0, typeof window !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_websocket___default.a, {
        onMessage: this.connection.message,
        url: "ws://".concat(window.location.host, "/channel/").concat(this.props.id),
        reconnectIntervalInMilliSeconds: 100,
        ref: function ref(Websocket) {
          _this2.websocket = Websocket;
        }
      }) : _ref, _jsx(__WEBPACK_IMPORTED_MODULE_6__Info__["a" /* default */], {
        black: this.state.black,
        white: this.state.white,
        turn: this.state.turn
      }), this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result ? _jsx(__WEBPACK_IMPORTED_MODULE_8__ConfirmButton__["a" /* default */], {
        handleConfirm: this.handler.confirm,
        disable: !this.state.temporary
      }) : _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__Go_css___default.a.scoreboard
      }, void 0, match ? "".concat(match[1] === 'W' ? '白' : '黑', "\u80DC").concat(match[2] === 'R' ? '，对方投降' : "".concat(match[2], "\u76EE")) : ''), _jsx(__WEBPACK_IMPORTED_MODULE_7__Board__["a" /* default */], {
        board: this.state.board,
        handleClick: this.handler.click,
        temporary: this.state.temporary
      }), this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result ? _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__Go_css___default.a.action
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_9__PassButton__["a" /* default */], {
        handlePass: this.handler.pass
      }), _jsx(__WEBPACK_IMPORTED_MODULE_10__ResignButton__["a" /* default */], {
        handleResign: this.handler.resign
      })) : _ref2);
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
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_11__Go_css___default.a))(Go));

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info_css__ = __webpack_require__(135);
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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(136);
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
/* 136 */
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
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BoardIntersection__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Board_css__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Board_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Board_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css__);
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
 * @author lookis on 26/12/2017
 */




 // eslint-disable-next-line css-modules/no-unused-class

 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__Board_css___default.a);

var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
    _this.state = {
      highlight: []
    };
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.handleHoverEnd = _this.handleHoverEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Board, [{
    key: "handleHover",
    value: function handleHover(e) {
      e.preventDefault();
      var _e$changedTouches$ = e.changedTouches[0],
          clientX = _e$changedTouches$.clientX,
          clientY = _e$changedTouches$.clientY;
      var target = document.elementFromPoint(clientX, clientY);
      this.setState({
        highlight: [parseInt(target.getAttribute('data-offset-x'), 10), parseInt(target.getAttribute('data-offset-y'), 10)]
      });
    }
  }, {
    key: "handleHoverEnd",
    value: function handleHoverEnd(e) {
      var _e$changedTouches$2 = e.changedTouches[0],
          clientX = _e$changedTouches$2.clientX,
          clientY = _e$changedTouches$2.clientY;
      var target = document.elementFromPoint(clientX, clientY);

      if (target.className.includes(__WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css___default.a.intersection)) {
        target.click();
      }

      this.setState({
        highlight: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var intersections = [];

      var _loop = function _loop(i) {
        var row = [];

        var _loop2 = function _loop2(j) {
          row.push(_jsx(__WEBPACK_IMPORTED_MODULE_4__BoardIntersection__["a" /* default */], {
            highlight: j === _this2.state.highlight[1] || i === _this2.state.highlight[0],
            temporary: _this2.props.temporary && _this2.props.temporary.position[0] === i && _this2.props.temporary.position[1] === j ? _this2.props.temporary.color : null,
            color: _this2.props.board[i][j],
            row: i,
            col: j,
            handleClick: function handleClick() {
              _this2.props.handleClick(i, j);
            },
            last: i === _this2.props.board.length - 1
          }, j));
        };

        for (var j = 0; j < _this2.props.board.length; j += 1) {
          _loop2(j);
        }

        intersections.push(_jsx("div", {
          className: cx({
            boardrow: true
          })
        }, i, row));
      };

      for (var i = 0; i < this.props.board.length; i += 1) {
        _loop(i);
      }

      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Board_css___default.a.board,
        onTouchStart: this.handleHover,
        onTouchMove: this.handleHover,
        onTouchEnd: this.handleHoverEnd,
        id: "board"
      }, void 0, intersections);
    }
  }]);

  return Board;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Board, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    temporary: null
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Board_css___default.a, __WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css___default.a)(Board));

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author lookis on 26/12/2017
 */




 // eslint-disable-next-line css-modules/no-unused-class


var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css___default.a);

var BoardIntersection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BoardIntersection, _React$Component);

  function BoardIntersection(props) {
    var _this;

    _classCallCheck(this, BoardIntersection);

    _this = _possibleConstructorReturn(this, (BoardIntersection.__proto__ || Object.getPrototypeOf(BoardIntersection)).call(this, props));
    _this.state = {
      style: {}
    };
    return _this;
  }

  _createClass(BoardIntersection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        style: {
          height: this.divElement.clientHeight
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          ref: function ref(divElement) {
            _this2.divElement = divElement;
          },
          style: this.state.style,
          "data-offset-x": this.props.row,
          "data-offset-y": this.props.col,
          onClick: this.props.handleClick,
          className: cx({
            intersection: true,
            highlight: this.props.highlight,
            black: this.props.color === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK || this.props.temporary === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK,
            white: this.props.color === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE || this.props.temporary === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE,
            lastIntersection: this.props.last,
            temporary: !!this.props.temporary
          })
        })
      );
    }
  }]);

  return BoardIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(BoardIntersection, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    color: 0,
    last: false,
    temporary: null
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css___default.a)(BoardIntersection));

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(112);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._9Gs2N{-ms-flex-preferred-size:100%;flex-basis:100%}._9Gs2N:before{opacity:1;border-top:1px solid #000;content:\"\";z-index:-1;width:100%;display:block;margin-top:50%;margin-left:50%}._9Gs2N:last-child:before{border-top:1px solid transparent}._9Gs2N:after{opacity:1;border-left:1px solid #000;content:\" \";z-index:-1;height:100%;display:block;margin-left:50%}.wWD3J:after{border-left:0}.D5NoS,.runo2{background:no-repeat 50%/cover;border-radius:50%}.D5NoS:before,.runo2:before{width:50%;margin-left:100%}.D5NoS:after,.runo2:after{height:58%;margin-top:42%}.D5NoS{background-image:url(" + escape(__webpack_require__(113)) + ")}.runo2{background-image:url(" + escape(__webpack_require__(114)) + ")}._376O3.D5NoS{background-image:url(" + escape(__webpack_require__(115)) + "),url(" + escape(__webpack_require__(113)) + ")}._376O3.runo2{background-image:url(" + escape(__webpack_require__(115)) + "),url(" + escape(__webpack_require__(114)) + ")}._36EWL{background-color:rgba(0,0,0,.5)}", ""]);

// exports
exports.locals = {
	"intersection": "_9Gs2N",
	"lastIntersection": "wWD3J",
	"black": "D5NoS",
	"white": "runo2",
	"temporary": "_376O3",
	"highlight": "_36EWL"
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(141);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Board.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Board.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(112);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".C9xYF{-ms-flex-direction:column;flex-direction:column;background:no-repeat 50%/cover;position:relative;width:82vw;height:82vw;padding:3vw;background-image:url(" + escape(__webpack_require__(142)) + ")}._2gAgA,.C9xYF{display:-ms-flexbox;display:flex}._2gAgA{-ms-flex-preferred-size:100%;flex-basis:100%}.C9xYF ._3shAE{border-radius:50%;background:-webkit-radial-gradient(#000 20%,transparent 0);background:-o-radial-gradient(#000 20%,transparent 20%);background:radial-gradient(#000 20%,transparent 0);background-position:1.5px 1.5px}", ""]);

// exports
exports.locals = {
	"board": "C9xYF",
	"boardrow": "_2gAgA",
	"star": "_3shAE"
};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "/assets/0f28f248.jpg";

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css__ = __webpack_require__(109);
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
/* 144 */
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
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button_css__);
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


var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__Button_css___default.a);

var PassButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PassButton, _React$Component);

  function PassButton() {
    _classCallCheck(this, PassButton);

    return _possibleConstructorReturn(this, (PassButton.__proto__ || Object.getPrototypeOf(PassButton)).apply(this, arguments));
  }

  _createClass(PassButton, [{
    key: "render",
    value: function render() {
      return _jsx("button", {
        id: "pass-btn",
        type: "button",
        onClick: this.props.handlePass,
        className: cx({
          button: true
        })
      }, void 0, "\u505C\u4E00\u624B");
    }
  }]);

  return PassButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PassButton);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button_css__);
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


var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__Button_css___default.a);

var ResignButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResignButton, _React$Component);

  function ResignButton() {
    _classCallCheck(this, ResignButton);

    return _possibleConstructorReturn(this, (ResignButton.__proto__ || Object.getPrototypeOf(ResignButton)).apply(this, arguments));
  }

  _createClass(ResignButton, [{
    key: "render",
    value: function render() {
      return _jsx("button", {
        id: "resign-btn",
        type: "button",
        onClick: this.props.handleResign,
        className: cx({
          button: true
        })
      }, void 0, "\u8BA4\u8F93");
    }
  }]);

  return ResignButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ResignButton);

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
exports.push([module.i, ".r_vGR{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;padding:0 6%;height:100vh;background:-webkit-radial-gradient(#2e1f59,#16102b)!important;background:-o-radial-gradient(#2e1f59,#16102b)!important;background:radial-gradient(#2e1f59,#16102b)!important}._3lFG9{color:#fff}.r_vGR>div{margin-top:8%}._2bBPi{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:8%}._2bBPi>button:first-child{border-radius:8px 0 0 8px}._2bBPi>button:last-child{border-radius:0 8px 8px 0}", ""]);

// exports
exports.locals = {
	"container": "r_vGR",
	"scoreboard": "_3lFG9",
	"action": "_2bBPi"
};

/***/ }),
/* 149 */
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
    


/***/ })
]);;
//# sourceMappingURL=go.js.map