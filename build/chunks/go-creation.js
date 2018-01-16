require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "*{font:normal 14px Roboto,Hiragino Sans GB,Microsoft YaHei,STHeiti,SimHei,WenQuanYi Micro Hei,sans-serif}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}body,html{overflow-x:hidden}body{margin:0;position:relative!important}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),

/***/ 101:
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

/***/ 102:
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

/***/ 103:
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

/***/ 104:
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

/***/ 105:
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

/***/ 106:
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

/***/ 107:
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

/***/ 108:
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_SelectField__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_SelectField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_SelectField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Creation_css__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Creation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Creation_css__);
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









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: "Go",
  primaryText: "\u666E\u901A"
});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: "CaptureGo",
  primaryText: "\u5403\u5B50\u68CB"
});

var _ref3 = _jsx("br", {});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: 9,
  primaryText: "9\u8DEF"
});

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: 13,
  primaryText: "13\u8DEF"
});

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: 19,
  primaryText: "19\u8DEF"
});

var _ref7 = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: "black",
  primaryText: "\u6267\u9ED1"
});

var _ref8 = _jsx(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, {
  value: "white",
  primaryText: "\u6267\u767D"
});

var Creation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Creation, _React$Component);

  function Creation(props) {
    var _this;

    _classCallCheck(this, Creation);

    _this = _possibleConstructorReturn(this, (Creation.__proto__ || Object.getPrototypeOf(Creation)).call(this, props));
    _this.state = {
      rule: 'Go',
      boardsize: 19,
      color: 'black'
    };
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Creation, [{
    key: "handler",
    value: function handler(id) {
      var self = this; // eslint-disable-next-line func-names

      return function (event, index, value) {
        var newState = {};
        newState[id] = value;
        self.setState(newState);
      };
    }
  }, {
    key: "submit",
    value: function submit() {
      var self = this;
      this.props.create(this.state.rule, this.state.boardsize, this.state.color).then(function (r) {
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
          type: 'success',
          title: '对局创建成功！',
          text: '点击右上角分享把对局请求发给对手',
          showConfirmButton: false,
          allowOutsideClick: false,
          onOpen: function onOpen() {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.clickConfirm();
          },
          preConfirm: function preConfirm() {
            return new Promise(function (resolve) {
              // eslint-disable-next-line no-undef
              wx.onMenuShareTimeline({
                title: "\u542C\u8BF4\u4F60\u56F4\u68CB\u4E0B\u7684\u4E0D\u9519\uFF0C\u6211\u6267".concat(self.state.color === 'black' ? '黑' : '白', "\uFF0C\u6765\u4E00\u5C40\uFF1F"),
                link: "".concat(window.location.origin, "/go?id=").concat(r.data.createGo.id, "&invite=").concat(self.state.color === 'black' ? 'white' : 'black'),
                imgUrl: "http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64",
                success: resolve
              }); // eslint-disable-next-line no-undef

              wx.onMenuShareAppMessage({
                title: "\u542C\u8BF4\u4F60\u56F4\u68CB\u4E0B\u7684\u4E0D\u9519\uFF0C\u6211\u6267".concat(self.state.color === 'black' ? '黑' : '白', "\uFF0C\u6765\u4E00\u5C40\uFF1F"),
                desc: "".concat(self.state.boardsize, "\u8DEF\uFF0C\u8D346.5\u76EE\uFF0C\u8BA90\u5B50"),
                link: "".concat(window.location.origin, "/go?id=").concat(r.data.createGo.id, "&invite=").concat(self.state.color === 'black' ? 'white' : 'black'),
                imgUrl: "http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64",
                success: resolve
              });
            }).then(function () {
              window.location.href = "".concat(window.location.origin, "/go?id=").concat(r.data.createGo.id);
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_7__Creation_css___default.a.root
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_7__Creation_css___default.a.container
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_7__Creation_css___default.a.title
      }, void 0, "\u89C4\u5219\u8BBE\u5B9A"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_7__Creation_css___default.a.body
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_material_ui_SelectField___default.a, {
        id: "rule",
        floatingLabelText: "\u89C4\u5219",
        value: this.state.rule,
        onChange: this.handler('rule')
      }, void 0, _ref, _ref2), _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_2_material_ui_SelectField___default.a, {
        id: "boardsize",
        floatingLabelText: "\u68CB\u76D8",
        value: this.state.boardsize,
        onChange: this.handler('boardsize')
      }, void 0, _ref4, _ref5, _ref6), _jsx(__WEBPACK_IMPORTED_MODULE_2_material_ui_SelectField___default.a, {
        id: "color",
        floatingLabelText: "\u6211\u65B9\u989C\u8272",
        value: this.state.color,
        onChange: this.handler('color')
      }, void 0, _ref7, _ref8), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_7__Creation_css___default.a.submit
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default.a, {
        label: "\u53D1\u8D77\u6311\u6218",
        primary: true,
        fullWidth: true,
        onClick: this.submit
      })))));
    }
  }]);

  return Creation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Creation_css___default.a)(Creation));

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(128);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Creation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./Creation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "._2sT7j{margin:24px}._6rcCj{-webkit-box-shadow:rgba(0,0,0,.12) 0 1px 6px,rgba(0,0,0,.12) 0 1px 4px;box-shadow:0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.12);margin-bottom:32px}._2TLQ2{background-color:#e8e8e8;padding:0 24px;font-size:20px;font-family:Roboto,sans-serif;height:56px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;color:rgba(0,0,0,.4)}._1pJzn{padding:14px 24px 24px;margin:0}.cZGPU{padding:14px 0}", ""]);

// exports
exports.locals = {
	"root": "_2sT7j",
	"container": "_6rcCj",
	"title": "_2TLQ2",
	"body": "_1pJzn",
	"submit": "cZGPU"
};

/***/ }),

/***/ 129:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rule"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"boardsize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createGo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rule"}}},{"kind":"Argument","name":{"kind":"Name","value":"boardsize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"boardsize"}}},{"kind":"Argument","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":147}};
    doc.loc.source = {"body":"mutation createGo($rule: String!, $boardsize: Int!, $color: String) {\n  createGo(rule: $rule, boardsize: $boardsize, color: $color) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Creation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creation_graphql__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creation_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__creation_graphql__);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * @author lookis on 24/12/2017
 */





function action(_ref) {
  var client = _ref.client;

  var handleCreate = function handleCreate(rule, boardsize, color) {
    return client.mutate({
      mutation: __WEBPACK_IMPORTED_MODULE_3__creation_graphql___default.a,
      variables: {
        rule: rule,
        boardsize: boardsize,
        color: color
      }
    });
  };

  return {
    chunks: ['go-creation'],
    title: '新建对局',
    component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Creation__["a" /* default */], {
      create: handleCreate
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 96:
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

/***/ 97:
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),

/***/ 99:
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
  

/***/ })

};;
//# sourceMappingURL=go-creation.js.map