require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(94).concat([
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Go__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__invite_graphql__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/index.js";

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
    component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Go__["a" /* default */], {
      id: id,
      user: store.getState().user && store.getState().user.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Wechat__ = __webpack_require__(108);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/components/Layout/Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Wechat__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Layout, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(99);
    var insertCss = __webpack_require__(19);

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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,0CAA0C;UAClC,kCAAkC,CAAC,OAAO;CACnD;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(101);
    var insertCss = __webpack_require__(19);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\n* {\n  font: normal 14px 'Roboto', 'Hiragino Sans GB', 'Microsoft YaHei', 'STHeiti', 'SimHei', 'WenQuanYi Micro Hei', sans-serif;\n}\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  position: relative !important;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;;;;GAIG;;AAEH;;gFAEgF;;AAEhF;EACE,0HAA0H;CAC3H;;AAED;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAA2D;EAC3D,mBAAmB,CAAC,WAAW;EAC/B,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\n* {\n  font: normal 14px 'Roboto', 'Hiragino Sans GB', 'Microsoft YaHei', 'STHeiti', 'SimHei', 'WenQuanYi Micro Hei', sans-serif;\n}\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  position: relative !important;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/components/Header/Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(104);
    var insertCss = __webpack_require__(19);

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header-root-O9oW9 {\n  background: #373277;\n  color: #fff;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/components/Header/Header.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,oBAAoB;EACpB,YAAY;CACb","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Header-root-O9oW9"
};

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/components/Footer/Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(107);
    var insertCss = __webpack_require__(19);

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer-root-1UUMy {\n  background: #333;\n  color: #fff;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  background: #333;\n  color: #fff;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Footer-root-1UUMy"
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_graphql__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wechat_graphql__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/components/Wechat/Wechat.js";

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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
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
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(144);
    var insertCss = __webpack_require__(19);

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
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(137);
    var insertCss = __webpack_require__(19);

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
/* 113 */
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
/* 114 */,
/* 115 */,
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
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Board__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ConfirmButton__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PassButton__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ResignButton__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Go_css__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Go_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Go_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/Go.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__Go_css___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, typeof window !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_websocket___default.a, {
        onMessage: this.connection.message,
        url: "ws://".concat(window.location.host, "/channel/").concat(this.props.id),
        reconnectIntervalInMilliSeconds: 100,
        ref: function ref(Websocket) {
          _this2.websocket = Websocket;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Info__["a" /* default */], {
        black: this.state.black,
        white: this.state.white,
        turn: this.state.turn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ConfirmButton__["a" /* default */], {
        handleConfirm: this.handler.confirm,
        disable: !this.state.temporary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__Go_css___default.a.scoreboard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, match ? "".concat(match[1] === 'W' ? '白' : '黑', "\u80DC").concat(match[2] === 'R' ? '，对方投降' : "".concat(match[2], "\u76EE")) : ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Board__["a" /* default */], {
        board: this.state.board,
        handleClick: this.handler.click,
        temporary: this.state.temporary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__Go_css___default.a.action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__PassButton__["a" /* default */], {
        handlePass: this.handler.pass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ResignButton__["a" /* default */], {
        handleResign: this.handler.resign,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }));
    }
  }]);

  return Go;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Go, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
    user: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  }
});
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info_css__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Info_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/Info.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.gameinfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.player,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "avatar_url",
        width: "64",
        height: "64",
        src: this.props.black.avatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: cx({
          name: true,
          active: this.props.turn === __WEBPACK_IMPORTED_MODULE_5_game_engine___default.a.Go.COLOR.BLACK
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.props.black.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.props.black.captured, " \u63D0\u5B50"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.player,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "avatar_url",
        width: "64",
        height: "64",
        src: this.props.white.avatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Info_css___default.a.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: cx({
          name: true,
          active: this.props.turn === __WEBPACK_IMPORTED_MODULE_5_game_engine___default.a.Go.COLOR.WHITE
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.props.white.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, this.props.white.captured, " \u63D0\u5B50"))));
    }
  }]);

  return Info;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Info, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    black: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
      name: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
      avatar: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
      captured: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
    }).isRequired,
    white: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
      name: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
      avatar: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
      captured: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
    }).isRequired,
    turn: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
  }
});
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(134);
    var insertCss = __webpack_require__(19);

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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "\n.Info-gameinfo-3C2ok {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 10px 0;\n  width: 100%;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.Info-gameinfo-3C2ok > .Info-player-u_iwJ {\n  display: inherit;\n  width: 50%;\n}\n\n.Info-gameinfo-3C2ok > .Info-player-u_iwJ:nth-child(2) {\n  direction: rtl;\n}\n\n.Info-gameinfo-3C2ok .Info-info-3r08Y {\n  margin: 0 13px;\n  color: rgba(255, 255, 255, 0.3);\n  line-height: 18px;\n}\n\n.Info-gameinfo-3C2ok > .Info-player-u_iwJ:nth-child(2) .Info-info-3r08Y {\n  text-align: right;\n}\n\n.Info-gameinfo-3C2ok .Info-info-3r08Y > .Info-active-1964- {\n  color: white;\n}\n\n.Info-gameinfo-3C2ok .Info-info-3r08Y > .Info-active-1964-::after {\n  content: '\\25CF';\n}\n\n.Info-gameinfo-3C2ok .Info-player-u_iwJ:nth-child(2) .Info-info-3r08Y > .Info-active-1964-::after {\n  content: '\\25CB';\n}\n\n.Info-gameinfo-3C2ok .Info-info-3r08Y > span {\n  display: inherit;\n}\n\n.Info-gameinfo-3C2ok .Info-name-1lidi {\n  font-size: 16px;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/Info.css"],"names":[],"mappings":";AACA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,YAAY;EACZ,sBAAsB;MAClB,kBAAkB;EACtB,uBAAuB;MACnB,+BAA+B;EACnC,uBAAuB;MACnB,oBAAoB;CACzB;;AAED;EACE,iBAAiB;EACjB,WAAW;CACZ;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;EACf,gCAAgC;EAChC,kBAAkB;CACnB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;CACd;;AAED;EACE,iBAAa;CACd;;AAED;EACE,iBAAa;CACd;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,gBAAgB;CACjB","file":"Info.css","sourcesContent":["\n.gameinfo {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 10px 0;\n  width: 100%;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.gameinfo > .player {\n  display: inherit;\n  width: 50%;\n}\n\n.gameinfo > .player:nth-child(2) {\n  direction: rtl;\n}\n\n.gameinfo .info {\n  margin: 0 13px;\n  color: rgba(255, 255, 255, 0.3);\n  line-height: 18px;\n}\n\n.gameinfo > .player:nth-child(2) .info {\n  text-align: right;\n}\n\n.gameinfo .info > .active {\n  color: white;\n}\n\n.gameinfo .info > .active::after {\n  content: '●';\n}\n\n.gameinfo .player:nth-child(2) .info > .active::after {\n  content: '○';\n}\n\n.gameinfo .info > span {\n  display: inherit;\n}\n\n.gameinfo .name {\n  font-size: 16px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"gameinfo": "Info-gameinfo-3C2ok",
	"player": "Info-player-u_iwJ",
	"info": "Info-info-3r08Y",
	"active": "Info-active-1964-",
	"name": "Info-name-1lidi"
};

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BoardIntersection__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Board_css__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Board_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Board_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BoardIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/Board.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
          row.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BoardIntersection__["a" /* default */], {
            key: j,
            highlight: j === _this2.state.highlight[1] || i === _this2.state.highlight[0],
            temporary: _this2.props.temporary && _this2.props.temporary.position[0] === i && _this2.props.temporary.position[1] === j ? _this2.props.temporary.color : null,
            color: _this2.props.board[i][j],
            row: i,
            col: j,
            handleClick: function handleClick() {
              _this2.props.handleClick(i, j);
            },
            last: i === _this2.props.board.length - 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }));
        };

        for (var j = 0; j < _this2.props.board.length; j += 1) {
          _loop2(j);
        }

        intersections.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: cx({
            boardrow: true
          }),
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, row));
      };

      for (var i = 0; i < this.props.board.length; i += 1) {
        _loop(i);
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Board_css___default.a.board,
        onTouchStart: this.handleHover,
        onTouchMove: this.handleHover,
        onTouchEnd: this.handleHoverEnd,
        id: "board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, intersections);
    }
  }]);

  return Board;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Board, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number)).isRequired,
    temporary: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
      position: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number).isRequired
    })
  }
});
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
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BoardIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/BoardIntersection.js";

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
    _this.state = {};
    return _this;
  }

  _createClass(BoardIntersection, [{
    key: "render",
    value: function render() {
      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        })
      );
    }
  }]);

  return BoardIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(BoardIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    highlight: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
    handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    temporary: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    row: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    col: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    last: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
  }
});
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(113);
exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".BoardIntersection-intersection-9Gs2N {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.BoardIntersection-intersection-9Gs2N::before {\n  border-top: 1px #000 solid;\n  content: '';\n  z-index: -1;\n  width: 100%;\n  display: block;\n  margin-top: 50%;\n  margin-left: 50%;\n}\n\n.BoardIntersection-intersection-9Gs2N:last-child::before {\n  border-top: 1px rgba(0, 0, 0, 0) solid;\n}\n\n.BoardIntersection-intersection-9Gs2N::after {\n  border-left: 1px #000 solid;\n  content: ' ';\n  z-index: -1;\n  height: 100%;\n  display: block;\n  margin-left: 50%;\n}\n\n.BoardIntersection-lastIntersection-wWD3J::after {\n  border-left: 0;\n}\n\n.BoardIntersection-black-D5NoS,\n.BoardIntersection-white-runo2 {\n  border-radius: 50%;\n}\n\n.BoardIntersection-black-D5NoS::before,\n.BoardIntersection-white-runo2::before {\n  width: 50%;\n  margin-left: 100%;\n}\n\n.BoardIntersection-black-D5NoS::after,\n.BoardIntersection-white-runo2::after {\n  height: 58%;\n  margin-top: 42%;\n}\n\n.BoardIntersection-black-D5NoS {\n  background: no-repeat center/cover;\n  background-image: url(" + escape(__webpack_require__(138)) + ");\n}\n\n.BoardIntersection-white-runo2 {\n  background: no-repeat center/cover;\n  background-image: url(" + escape(__webpack_require__(139)) + ");\n}\n\n.BoardIntersection-temporary-376O3 {\n\n}\n\n.BoardIntersection-highlight-36EWL {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/BoardIntersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB;;AAED;EACE,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,uCAAuC;CACxC;;AAED;EACE,4BAA4B;EAC5B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;CAChB;;AAED;;EAEE,mBAAmB;CACpB;;AAED;;EAEE,WAAW;EACX,kBAAkB;CACnB;;AAED;;EAEE,YAAY;EACZ,gBAAgB;CACjB;;AAED;EACE,mCAAmC;EACnC,gDAAqC;CACtC;;AAED;EACE,mCAAmC;EACnC,gDAAqC;CACtC;;AAED;;CAEC;;AAED;EACE,qCAAqC;CACtC","file":"BoardIntersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.intersection::before {\n  border-top: 1px #000 solid;\n  content: '';\n  z-index: -1;\n  width: 100%;\n  display: block;\n  margin-top: 50%;\n  margin-left: 50%;\n}\n\n.intersection:last-child::before {\n  border-top: 1px rgba(0, 0, 0, 0) solid;\n}\n\n.intersection::after {\n  border-left: 1px #000 solid;\n  content: ' ';\n  z-index: -1;\n  height: 100%;\n  display: block;\n  margin-left: 50%;\n}\n\n.lastIntersection::after {\n  border-left: 0;\n}\n\n.black,\n.white {\n  border-radius: 50%;\n}\n\n.black::before,\n.white::before {\n  width: 50%;\n  margin-left: 100%;\n}\n\n.black::after,\n.white::after {\n  height: 58%;\n  margin-top: 42%;\n}\n\n.black {\n  background: no-repeat center/cover;\n  background-image: url('./black.png');\n}\n\n.white {\n  background: no-repeat center/cover;\n  background-image: url('./white.png');\n}\n\n.temporary {\n\n}\n\n.highlight {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "BoardIntersection-intersection-9Gs2N",
	"lastIntersection": "BoardIntersection-lastIntersection-wWD3J",
	"black": "BoardIntersection-black-D5NoS",
	"white": "BoardIntersection-white-runo2",
	"temporary": "BoardIntersection-temporary-376O3",
	"highlight": "BoardIntersection-highlight-36EWL"
};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q2OERERTI2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q2OERERTM2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDY4RERFMDZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDY4RERFMTZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvfq19wAAAdKSURBVHjahFc7jxxFEK7u6Xntw177sGAxZyMsgRBOjDAGI2NMABJ2iGQHiJAfQIQjhIgckCIcEQABEgFCJjCPBCzxMIiMtwhsyUYg8N7u3e7OTD/4qmd6b+58d4x21DM93V1VX31fda9YvnNIzjlSUURxt0OjyQrt6vaon3Xo1myNolhSJ0qpLMoDcZY8q609gbEPWmvvNsb0hRCEa4z2ppTyR7RX0F525K7FJCkiQVJGNCmnpARsCEnaGGrmkaL/uYSQRw25l62k542xSkpB8/mc0jT138uypCRJ+nBoPxx6BAu/iFvLKPogUdEbgsR3wdhWl9z+g+jEaXJRE31bCnfOpbGy5AhwURzHGOEoYtSUIhhvnBVNZE5prc8BtatGm4v4nm/nxG0IWGN5pWNzU70vrTvYgQFnHfoNKRhmOIEq/LAkAWeSZvhuybAT8M+in405jC+1oUrrl0QlnhFxdE4K8c2ODvCi3U5+GvBdKq2hFJZS5I0jrPCeZyk5pMBojehjTg9aBaeQV/RZjNGV5gAI8FMhK/jEztt7TVF+nWT5GXz8eEsHOIJEyuNpll+ihpSCQ8XiyDFFJianC0Qck8oTnwL+zu+MhLHMDaCgYh8Io6JAXg30qqryqJRldSlPkuN4/mpBQlaAN6jUAE+XDaJIsIiA4VgqyrLcPyeYkKkKKHDkEQwnyH8EiCufojTtkxO7qShKT9L5bIp1Y0ImSPqAFJnZnNH8BDaXi6IYMXJqsLQXkBpEYN5DjnqJ4ugEO0SdOKE8iUgBgW6nQxKSzLtZky8CGTO6dWuF+rt7GA9iVmu0t9+nOZyYTie0MtU0Xp2TiSRVRlOlJJWV7ikVvQvjZwzzql7LnUQczyWIJMagGBLLsoy6aUT9bpeSuIZ8JhT0DPcQEeecL20SKicV4J1iPGpGBlW4lPI9e0ilKwhiQpPVVSAyozWNdJDlunMa6z+JNb5Qa+MJaWcvpN3ca1sgsl6v5x1IWG5xSjMYK5FH7QwVpQas2qeFU8ck1JwGRDMtd1E1BpdiRbsdODRzcKhLmUxheExSTyhxde0AAhfSLH1cRUIe1tYcqzUdUw9Qd3AziQoECTnSbDqFQUhMM9lAWG090YTktmz0DzTWRmRgwHCxmvxDaYwKyFxCCjuDfTAa02TlXyilYiU9ZmX0EGhlz3KOmSSs87ST0xweVrpEpNA8dM/OOBjVFZJla7m6Wjq1Glj3dQcKGL6JWiOlRXpYK0VBGeSZgcCJzqnAfFbGvCzOqllVnupnPV/dWOOj8ZiViwUx0ammWLqFztkYs5f1zZpnw/zOhGIUuTYsZAj0ZCT9GIv5cywnJNKWKKqQTnx4SkVS3sfRsxwZGvYs8pM4DOsd8As6tyi12BN8cYKuvWHuY9XU5bgeWxNUMyieJ74OTGfeAe8kCB8JcQj1RnbZgIa33HLt4UXrelsXCyadq2tF8268oxw5LwxN1/uHrLeWGgnRVFdXV0itPWeoWdtZlj51FRcpdlQw8FFd3YSvbIiMc4o1a/jryPiZ2/DM/cEYt/zODoa0cGq5ZebHIKUAp3i/4coprZVKCiXQYoD1lY116JHwEfGzXkQX4A7OBDQ8f/DOz1y2A0Jhyw5IGUhEWOHT6yBT5hYwhYIBgTdgdcNo18DJ8LnFIu1ogwNhIwpzAgJttNpzjKn3BfJ2EDqgGfMEnrgZ3vDObc0LWqDAea7zWxPSKwPvq6h6QRHBEYafeRLmBhu4JzjhyJ+wwHJYMOTV71RKbXAq3G2SBRRC9Otwm0WqAlrh2SsCKcqU+FX681tr8WDcH05azyGa9h2MeMk1ewM73V4roBEUFPqsd0p8Ju5YGi7Do2tMmHZeg1GeGGBrRxzIuO2RrklJQKV9aey+KbZzrH1Iou5fx6CPmLWBB5wzvkNkbShDmnh8W3rtO6AVvq/P5ertfHXEh0+LsvxDsoSw+50PkLYr3vpRzW0gXBvKzWkJhsPYtnGyqLK4E97YqvKVaj6jaHjXfsrz/G9EtQ9RPeqPX8hZIFWIoi299nO7b/0of/sJuN6rUIyE9+QdU5VvRth7xAP3Hw6yEqPR6LfZbHaIzwKbtb65DQhsZ3AzgryfK8EnIHsTWTiI01flj5wcLV8goVtaWjqFieOQ3/ZZv53rwJfNqdp4wm6rpd628avg9CnMrYwPAAQF/NTFsYsvRH59OBwew6J/ceFo5327dOzkQJhXFz6xis4n8OmXtoOyTRxmN5D4eTAYHAHMVzjSUNdZFaE6th3ayolgvEXsHxDtESHFVb/L7vTXrNnJbkAZJ4DOefY8FJkAPY8JUmTHwu7XdqoJzEBlr0PvD8OB37dCKhoO77nN+7AwFHEFHHkbfVM4cgD3Ht6u+Y9I5Akp/N3eHZv2Bhx6C+0LeP/QO8f/KaNwyNnhv+GG/4k10f6EI6/iv+FrWPrpQpcn0X8Up5wDWGwANuOU7lYQ4XXc3yPaLxH15+ibb0Zlq+s/AQYAsROa5xHe+YAAAAAASUVORK5CYII="

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "/assets/src/routes/go/white.png?29f401c5";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(141);
    var insertCss = __webpack_require__(19);

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

var escape = __webpack_require__(113);
exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".Board-board-C9xYF {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: relative;\n  width: 82vw; /* 1:1 Aspect Ratio */\n  height: 82vw;\n  padding: 3vw;\n  background-image: url(" + escape(__webpack_require__(142)) + ");\n}\n\n.Board-boardrow-2gAgA {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Board-board-C9xYF .Board-star-3shAE {\n  border-radius: 50%;\n  background: -webkit-radial-gradient(black 20%, transparent 20%);\n  background: -o-radial-gradient(black 20%, transparent 20%);\n  background: radial-gradient(black 20%, transparent 20%);\n  background-position: 1.5px 1.5px;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/Board.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,mCAAmC;EACnC,mBAAmB;EACnB,YAAY,CAAC,sBAAsB;EACnC,aAAa;EACb,aAAa;EACb,gDAAuC;CACxC;;AAED;EACE,8BAA8B;MAC1B,iBAAiB;EACrB,qBAAqB;EACrB,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,gEAAgE;EAChE,2DAA2D;EAC3D,wDAAwD;EACxD,iCAAiC;CAClC","file":"Board.css","sourcesContent":[".board {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: relative;\n  width: 82vw; /* 1:1 Aspect Ratio */\n  height: 82vw;\n  padding: 3vw;\n  background-image: url('./goboard.jpg');\n}\n\n.boardrow {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.board .star {\n  border-radius: 50%;\n  background: -webkit-radial-gradient(black 20%, transparent 20%);\n  background: -o-radial-gradient(black 20%, transparent 20%);\n  background: radial-gradient(black 20%, transparent 20%);\n  background-position: 1.5px 1.5px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"board": "Board-board-C9xYF",
	"boardrow": "Board-boardrow-2gAgA",
	"star": "Board-star-3shAE"
};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "/assets/src/routes/go/goboard.jpg?0f28f248";

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Button_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/ConfirmButton.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        id: "confirm-btn",
        type: "button",
        className: cx({
          confirm: true,
          button: true
        }),
        disabled: this.props.disable,
        onClick: this.props.handleConfirm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u786E\u8BA4");
    }
  }]);

  return ConfirmButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(ConfirmButton, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    handleConfirm: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Button_css___default.a)(ConfirmButton));

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".Button-button-3HhQ3 {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#b7a3f1));\n  background: -webkit-linear-gradient(#fff, #b7a3f1);\n  background: -o-linear-gradient(#fff, #b7a3f1);\n  background: linear-gradient(#fff, #b7a3f1);\n  width: 50%;\n  height: 2.5em;\n  font-size: 1.5em;\n  border-color: #000;\n}\n\n.Button-button-3HhQ3:active {\n  background: -webkit-gradient(linear, left top, left bottom, from(#b7a3f1), to(#fff));\n  background: -webkit-linear-gradient(#b7a3f1, #fff);\n  background: -o-linear-gradient(#b7a3f1, #fff);\n  background: linear-gradient(#b7a3f1, #fff);\n}\n\n.Button-confirm-3NGAC {\n  width: 25%;\n  height: 1.5em;\n  border-radius: 8px;\n  font-size: 1.3em;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/Button.css"],"names":[],"mappings":"AAAA;EACE,qFAAqF;EACrF,mDAAmD;EACnD,8CAA8C;EAC9C,2CAA2C;EAC3C,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,qFAAqF;EACrF,mDAAmD;EACnD,8CAA8C;EAC9C,2CAA2C;CAC5C;;AAED;EACE,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,iBAAiB;CAClB","file":"Button.css","sourcesContent":[".button {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#b7a3f1));\n  background: -webkit-linear-gradient(#fff, #b7a3f1);\n  background: -o-linear-gradient(#fff, #b7a3f1);\n  background: linear-gradient(#fff, #b7a3f1);\n  width: 50%;\n  height: 2.5em;\n  font-size: 1.5em;\n  border-color: #000;\n}\n\n.button:active {\n  background: -webkit-gradient(linear, left top, left bottom, from(#b7a3f1), to(#fff));\n  background: -webkit-linear-gradient(#b7a3f1, #fff);\n  background: -o-linear-gradient(#b7a3f1, #fff);\n  background: linear-gradient(#b7a3f1, #fff);\n}\n\n.confirm {\n  width: 25%;\n  height: 1.5em;\n  border-radius: 8px;\n  font-size: 1.3em;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"button": "Button-button-3HhQ3",
	"confirm": "Button-confirm-3NGAC"
};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/PassButton.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        id: "pass-btn",
        type: "button",
        onClick: this.props.handlePass,
        className: cx({
          button: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u505C\u4E00\u624B");
    }
  }]);

  return PassButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(PassButton, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    handlePass: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (PassButton);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/ResignButton.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        id: "resign-btn",
        type: "button",
        onClick: this.props.handleResign,
        className: cx({
          button: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u8BA4\u8F93");
    }
  }]);

  return ResignButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(ResignButton, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    handleResign: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (ResignButton);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(148);
    var insertCss = __webpack_require__(19);

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

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".Go-container-r_vGR {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 6%;\n  height: 100vh;\n  background: -webkit-radial-gradient(#2e1f59, #16102b) !important;\n  background: -o-radial-gradient(#2e1f59, #16102b) !important;\n  background: radial-gradient(#2e1f59, #16102b) !important;\n}\n\n.Go-scoreboard-3lFG9 {\n  color: white;\n}\n\n.Go-container-r_vGR > div {\n  margin-top: 8%;\n}\n\n.Go-action-2bBPi {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  margin-bottom: 8%;\n}\n\n.Go-action-2bBPi > button:first-child {\n  border-radius: 8px 0 0 8px;\n}\n\n.Go-action-2bBPi > button:last-child {\n  border-radius: 0 8px 8px 0;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/Go.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,sBAAsB;MAClB,kBAAkB;EACtB,qBAAqB;MACjB,4BAA4B;EAChC,uBAAuB;MACnB,oBAAoB;EACxB,cAAc;EACd,cAAc;EACd,iEAAiE;EACjE,4DAA4D;EAC5D,yDAAyD;CAC1D;;AAED;EACE,aAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,wBAAwB;EAC5B,YAAY;EACZ,kBAAkB;CACnB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,2BAA2B;CAC5B","file":"Go.css","sourcesContent":[".container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 6%;\n  height: 100vh;\n  background: -webkit-radial-gradient(#2e1f59, #16102b) !important;\n  background: -o-radial-gradient(#2e1f59, #16102b) !important;\n  background: radial-gradient(#2e1f59, #16102b) !important;\n}\n\n.scoreboard {\n  color: white;\n}\n\n.container > div {\n  margin-top: 8%;\n}\n\n.action {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  margin-bottom: 8%;\n}\n\n.action > button:first-child {\n  border-radius: 8px 0 0 8px;\n}\n\n.action > button:last-child {\n  border-radius: 0 8px 8px 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "Go-container-r_vGR",
	"scoreboard": "Go-scoreboard-3lFG9",
	"action": "Go-action-2bBPi"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2dvLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz80YWUyIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz81YmJhIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcz9iNmZmIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcz9iNGU3IiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9XZWNoYXQvV2VjaGF0LmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9XZWNoYXQvd2VjaGF0LmdyYXBocWwiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vQnV0dG9uLmNzcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9Cb2FyZEludGVyc2VjdGlvbi5jc3MiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0dvLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0luZm8uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vSW5mby5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9JbmZvLmNzcz8wMjE2IiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0JvYXJkLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0JvYXJkSW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vQm9hcmRJbnRlcnNlY3Rpb24uY3NzP2M0YWYiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vYmxhY2sucG5nIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL3doaXRlLnBuZyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9Cb2FyZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9Cb2FyZC5jc3M/NGNkOSIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9nb2JvYXJkLmpwZyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9Db25maXJtQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vQnV0dG9uLmNzcz85NzMyIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL1Bhc3NCdXR0b24uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vUmVzaWduQnV0dG9uLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0dvLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2dvL0dvLmNzcz82NjdhIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2ludml0ZS5ncmFwaHFsIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMjQvMTIvMjAxN1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvIGZyb20gJy4vR28nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgdXBkYXRlR28gZnJvbSAnLi9pbnZpdGUuZ3JhcGhxbCc7XG5cbmZ1bmN0aW9uIGFjdGlvbih7IHF1ZXJ5OiB7IGlkLCBpbnZpdGUgfSwgc3RvcmUsIGNsaWVudCB9KSB7XG4gIGlmIChpbnZpdGUgPT09ICdibGFjaycgfHwgaW52aXRlID09PSAnd2hpdGUnKSB7XG4gICAgY2xpZW50Lm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogdXBkYXRlR28sXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbG9yOiBpbnZpdGUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2dvJ10sXG4gICAgdGl0bGU6ICflr7nlsYDkuK0nLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEdvIGlkPXtpZH0gdXNlcj17c3RvcmUuZ2V0U3RhdGUoKS51c2VyICYmIHN0b3JlLmdldFN0YXRlKCkudXNlci5pZH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2dvL2luZGV4LmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcblxuLy8gZXh0ZXJuYWwtZ2xvYmFsIHN0eWxlcyBtdXN0IGJlIGltcG9ydGVkIGluIHlvdXIgSlMuXG5pbXBvcnQgbm9ybWFsaXplQ3NzIGZyb20gJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0IHMgZnJvbSAnLi9MYXlvdXQuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcbmltcG9ydCBXZWNoYXQgZnJvbSAnLi4vV2VjaGF0JztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPFdlY2hhdCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKG5vcm1hbGl6ZUNzcywgcykoTGF5b3V0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMSEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vbm9ybWFsaXplLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0xIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9ub3JtYWxpemUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTEhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL25vcm1hbGl6ZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEVBQTRFOztBQUU1RTtnRkFDZ0Y7O0FBRWhGOzs7O0dBSUc7O0FBRUg7RUFDRSxrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsK0JBQStCLENBQUMsT0FBTztDQUN4Qzs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIOzs7Ozs7RUFNRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7O09BRU8sT0FBTztFQUNaLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZ0NBQWdDO1VBQ3hCLHdCQUF3QixDQUFDLE9BQU87RUFDeEMsVUFBVSxDQUFDLE9BQU87RUFDbEIsa0JBQWtCLENBQUMsT0FBTztDQUMzQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxrQ0FBa0MsQ0FBQyxPQUFPO0VBQzFDLGVBQWUsQ0FBQyxPQUFPO0NBQ3hCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxzQ0FBc0MsQ0FBQyxPQUFPO0NBQy9DOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLG9CQUFvQixDQUFDLE9BQU87RUFDNUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywwQ0FBMEM7VUFDbEMsa0NBQWtDLENBQUMsT0FBTztDQUNuRDs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUsb0JBQW9CO0NBQ3JCOztBQUVEOzs7R0FHRzs7QUFFSDs7O0VBR0Usa0NBQWtDLENBQUMsT0FBTztFQUMxQyxlQUFlLENBQUMsT0FBTztDQUN4Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDs7RUFFRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOzs7OztFQUtFLHdCQUF3QixDQUFDLE9BQU87RUFDaEMsZ0JBQWdCLENBQUMsT0FBTztFQUN4QixrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLFVBQVUsQ0FBQyxPQUFPO0NBQ25COztBQUVEOzs7R0FHRzs7QUFFSDtRQUNRLE9BQU87RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1NBQ1MsT0FBTztFQUNkLHFCQUFxQjtDQUN0Qjs7QUFFRDs7OztHQUlHOztBQUVIOzs7O0VBSUUsMkJBQTJCLENBQUMsT0FBTztDQUNwQzs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7Ozs7O0dBS0c7O0FBRUg7RUFDRSwrQkFBK0I7VUFDdkIsdUJBQXVCLENBQUMsT0FBTztFQUN2QyxlQUFlLENBQUMsT0FBTztFQUN2QixlQUFlLENBQUMsT0FBTztFQUN2QixnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLFdBQVcsQ0FBQyxPQUFPO0VBQ25CLG9CQUFvQixDQUFDLE9BQU87Q0FDN0I7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usc0JBQXNCLENBQUMsT0FBTztFQUM5Qix5QkFBeUIsQ0FBQyxPQUFPO0NBQ2xDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsK0JBQStCO1VBQ3ZCLHVCQUF1QixDQUFDLE9BQU87RUFDdkMsV0FBVyxDQUFDLE9BQU87Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUsYUFBYTtDQUNkOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLDhCQUE4QixDQUFDLE9BQU87RUFDdEMscUJBQXFCLENBQUMsT0FBTztDQUM5Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsMkJBQTJCLENBQUMsT0FBTztFQUNuQyxjQUFjLENBQUMsT0FBTztDQUN2Qjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0NBQ2hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZlwiLFwiZmlsZVwiOlwibm9ybWFsaXplLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWUsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xheW91dC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTGF5b3V0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xheW91dC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLypcXG4gKiBub3JtYWxpemUuY3NzIGlzIGltcG9ydGVkIGluIEpTIGZpbGUuXFxuICogSWYgeW91IGltcG9ydCBleHRlcm5hbCBDU1MgZmlsZSBmcm9tIHlvdXIgaW50ZXJuYWwgQ1NTXFxuICogdGhlbiBpdCB3aWxsIGJlIGlubGluZWQgYW5kIHByb2Nlc3NlZCB3aXRoIENTUyBtb2R1bGVzLlxcbiAqL1xcblxcbi8qXFxuICogQmFzZSBzdHlsZXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbioge1xcbiAgZm9udDogbm9ybWFsIDE0cHggJ1JvYm90bycsICdIaXJhZ2lubyBTYW5zIEdCJywgJ01pY3Jvc29mdCBZYUhlaScsICdTVEhlaXRpJywgJ1NpbUhlaScsICdXZW5RdWFuWWkgTWljcm8gSGVpJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFlbTsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1OyAvKiB+MjJweCAqL1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMDA3NGMyO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OlxcbiAqIGh0dHBzOi8vdHdpdHRlci5jb20vbWlrZXRheWxyL3N0YXR1cy8xMjIyODgwNTMwMVxcbiAqXFxuICogVGhlc2Ugc2VsZWN0aW9uIHJ1bGUgc2V0cyBoYXZlIHRvIGJlIHNlcGFyYXRlLlxcbiAqIEN1c3RvbWl6ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB5b3VyIGRlc2lnbi5cXG4gKi9cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEEgYmV0dGVyIGxvb2tpbmcgZGVmYXVsdCBob3Jpem9udGFsIHJ1bGVcXG4gKi9cXG5cXG5ociB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGhlIGdhcCBiZXR3ZWVuIGF1ZGlvLCBjYW52YXMsIGlmcmFtZXMsXFxuICogaW1hZ2VzLCB2aWRlb3MgYW5kIHRoZSBib3R0b20gb2YgdGhlaXIgY29udGFpbmVyczpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvNDQwXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbmlmcmFtZSxcXG5pbWcsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIGRlZmF1bHQgZmllbGRzZXQgc3R5bGVzLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogQWxsb3cgb25seSB2ZXJ0aWNhbCByZXNpemluZyBvZiB0ZXh0YXJlYXMuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4gKiBCcm93c2VyIHVwZ3JhZGUgcHJvbXB0XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uYnJvd3NlcnVwZ3JhZGUge1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuXFxuLypcXG4gKiBQcmludCBzdHlsZXNcXG4gKiBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDpcXG4gKiBodHRwOi8vd3d3LnBocGllZC5jb20vZGVsYXktbG9hZGluZy15b3VyLXByaW50LWNzcy9cXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbkBtZWRpYSBwcmludCB7XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvKiBCbGFjayBwcmludHMgZmFzdGVyOiBodHRwOi8vd3d3LnNhbmJlaWppLmNvbS9hcmNoaXZlcy85NTMgKi9cXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgYSxcXG4gIGE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcblxcbiAgYVtocmVmXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIoaHJlZikgJyknO1xcbiAgfVxcblxcbiAgYWJiclt0aXRsZV06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKHRpdGxlKSAnKSc7XFxuICB9XFxuXFxuICAvKlxcbiAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcXG4gICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcXG4gICAqL1xcblxcbiAgYVtocmVmXj0nIyddOjphZnRlcixcXG4gIGFbaHJlZl49J2phdmFzY3JpcHQ6J106OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICB9XFxuXFxuICBwcmUsXFxuICBibG9ja3F1b3RlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIFByaW50aW5nIFRhYmxlczpcXG4gICAqIGh0dHA6Ly9jc3MtZGlzY3Vzcy5pbmN1dGlvLmNvbS93aWtpL1ByaW50aW5nX1RhYmxlc1xcbiAgICovXFxuXFxuICB0aGVhZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcXG4gIH1cXG5cXG4gIHRyLFxcbiAgaW1nIHtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBwLFxcbiAgaDIsXFxuICBoMyB7XFxuICAgIG9ycGhhbnM6IDM7XFxuICAgIHdpZG93czogMztcXG4gIH1cXG5cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcXG4gIH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTs7QUFFRDs7OztHQUlHOztBQUVIOztnRkFFZ0Y7O0FBRWhGO0VBQ0UsMEhBQTBIO0NBQzNIOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLENBQUMsWUFBWTtFQUM1QiwyREFBMkQ7RUFDM0QsbUJBQW1CLENBQUMsV0FBVztFQUMvQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7Ozs7OztHQU1HOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDs7OztHQUlHOztBQUVIOzs7Ozs7RUFNRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7Z0ZBRWdGOztBQUVoRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDs7OztnRkFJZ0Y7O0FBRWhGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuXFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKiB7XFxuICBmb250OiBub3JtYWwgMTRweCAnUm9ib3RvJywgJ0hpcmFnaW5vIFNhbnMgR0InLCAnTWljcm9zb2Z0IFlhSGVpJywgJ1NUSGVpdGknLCAnU2ltSGVpJywgJ1dlblF1YW5ZaSBNaWNybyBIZWknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiB+MTZweDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDc0YzI7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRleHQtc2hhZG93IGluIHNlbGVjdGlvbiBoaWdobGlnaHQ6XFxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXFxuICpcXG4gKiBUaGVzZSBzZWxlY3Rpb24gcnVsZSBzZXRzIGhhdmUgdG8gYmUgc2VwYXJhdGUuXFxuICogQ3VzdG9taXplIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHlvdXIgZGVzaWduLlxcbiAqL1xcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQSBiZXR0ZXIgbG9va2luZyBkZWZhdWx0IGhvcml6b250YWwgcnVsZVxcbiAqL1xcblxcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcXG4gKiBpbWFnZXMsIHZpZGVvcyBhbmQgdGhlIGJvdHRvbSBvZiB0aGVpciBjb250YWluZXJzOlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy80NDBcXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxuaWZyYW1lLFxcbmltZyxcXG5zdmcsXFxudmlkZW8ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgZGVmYXVsdCBmaWVsZHNldCBzdHlsZXMuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbiAqIEJyb3dzZXIgdXBncmFkZSBwcm9tcHRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpnbG9iYWwoLmJyb3dzZXJ1cGdyYWRlKSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG4vKlxcbiAqIFByaW50IHN0eWxlc1xcbiAqIElubGluZWQgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgSFRUUCByZXF1ZXN0OlxcbiAqIGh0dHA6Ly93d3cucGhwaWVkLmNvbS9kZWxheS1sb2FkaW5nLXlvdXItcHJpbnQtY3NzL1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuQG1lZGlhIHByaW50IHtcXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cihocmVmKSAnKSc7XFxuICB9XFxuXFxuICBhYmJyW3RpdGxlXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIodGl0bGUpICcpJztcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxcbiAgICogb3IgdXNlIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbFxcbiAgICovXFxuXFxuICBhW2hyZWZePScjJ106OmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gIH1cXG5cXG4gIHByZSxcXG4gIGJsb2NrcXVvdGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICAvKlxcbiAgICogUHJpbnRpbmcgVGFibGVzOlxcbiAgICogaHR0cDovL2Nzcy1kaXNjdXNzLmluY3V0aW8uY29tL3dpa2kvUHJpbnRpbmdfVGFibGVzXFxuICAgKi9cXG5cXG4gIHRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgfVxcblxcbiAgdHIsXFxuICBpbWcge1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIHAsXFxuICBoMixcXG4gIGgzIHtcXG4gICAgb3JwaGFuczogMztcXG4gICAgd2lkb3dzOiAzO1xcbiAgfVxcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9IZWFkZXIuY3NzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aGVhZGVyIGNsYXNzTmFtZT17cy5yb290fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSGVhZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSGVhZGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uSGVhZGVyLXJvb3QtTzlvVzkge1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7Q0FDYlwiLFwiZmlsZVwiOlwiSGVhZGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkhlYWRlci1yb290LU85b1c5XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Gb290ZXIuY3NzJztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT17cy5yb290fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEZvb3Rlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRm9vdGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Gb290ZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRm9vdGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uRm9vdGVyLXJvb3QtMVVVTXkge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYlwiLFwiZmlsZVwiOlwiRm9vdGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkZvb3Rlci1yb290LTFVVU15XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2VjaGF0UXVlcnkgZnJvbSAnLi93ZWNoYXQuZ3JhcGhxbCc7XG5cbmNsYXNzIFdlY2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgY2xpZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgc3RvcmU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb250ZXh0LmNsaWVudFxuICAgICAgICAucXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiB3ZWNoYXRRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgd3guY29uZmlnKHtcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLnJlc3AuZGF0YS53ZWNoYXQsXG4gICAgICAgICAgICBqc0FwaUxpc3Q6IFsnb25NZW51U2hhcmVUaW1lbGluZScsICdvbk1lbnVTaGFyZUFwcE1lc3NhZ2UnXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlY2hhdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9XZWNoYXQvV2VjaGF0LmpzIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIldlY2hhdFwifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVybFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkZWZhdWx0VmFsdWVcIjpudWxsfV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwid2VjaGF0XCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVybFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJsXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFwcElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aW1lc3RhbXBcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm5vbmNlU3RyXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzaWduYXR1cmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEwOX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwicXVlcnkgV2VjaGF0KCR1cmw6IFN0cmluZyEpIHtcXG4gIHdlY2hhdCh1cmw6ICR1cmwpIHtcXG4gICAgYXBwSWRcXG4gICAgdGltZXN0YW1wXFxuICAgIG5vbmNlU3RyXFxuICAgIHNpZ25hdHVyZVxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9XZWNoYXQvd2VjaGF0LmdyYXBocWxcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0J1dHRvbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQnV0dG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0J1dHRvbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL0J1dHRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0JvYXJkSW50ZXJzZWN0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Cb2FyZEludGVyc2VjdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Cb2FyZEludGVyc2VjdGlvbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL0JvYXJkSW50ZXJzZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAyNC8xMi8yMDE3XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR2FtZUVuZ2luZSBmcm9tICdnYW1lLWVuZ2luZSc7XG5pbXBvcnQgV2ViU29ja2V0IGZyb20gJ3JlYWN0LXdlYnNvY2tldCc7XG5cbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mbyc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZCc7XG5pbXBvcnQgQ29uZmlybUJ1dHRvbiBmcm9tICcuL0NvbmZpcm1CdXR0b24nO1xuaW1wb3J0IFBhc3NCdXR0b24gZnJvbSAnLi9QYXNzQnV0dG9uJztcbmltcG9ydCBSZXNpZ25CdXR0b24gZnJvbSAnLi9SZXNpZ25CdXR0b24nO1xuaW1wb3J0IHMgZnJvbSAnLi9Hby5jc3MnO1xuXG5jb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oW0J8V10pXFxcXCsoW1xcXFxkfFJ8XFxcXC5dKyknKTtcblxuY2xhc3MgR28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHVzZXI6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBBcnJheSgxOSkuZmlsbChBcnJheSgxOSkuZmlsbCgwKSksXG4gICAgICBibGFjazoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICdbQkxBQ0tdJyxcbiAgICAgICAgYXZhdGFyOiBudWxsLFxuICAgICAgICBjYXB0dXJlZDogMCxcbiAgICAgIH0sXG4gICAgICB3aGl0ZToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICdbV0hJVEVdJyxcbiAgICAgICAgYXZhdGFyOiBudWxsLFxuICAgICAgICBjYXB0dXJlZDogMCxcbiAgICAgIH0sXG4gICAgICB0dXJuOiBHYW1lRW5naW5lLkdvLkNPTE9SLkVNUFRZLFxuICAgICAgY29sb3I6IEdhbWVFbmdpbmUuR28uQ09MT1IuRU1QVFksXG4gICAgICB0ZW1wb3Jhcnk6IG51bGwsXG4gICAgICByZXN1bHQ6IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLmVuZ2luZSA9IG51bGw7XG4gICAgdGhpcy5nYW1lLmluaXQgPSB0aGlzLmdhbWUuaW5pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5hcHBlbmQgPSB0aGlzLmdhbWUuYXBwZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nYW1lLnJlc3VsdCA9IHRoaXMuZ2FtZS5yZXN1bHQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlci5wYXNzID0gdGhpcy5oYW5kbGVyLnBhc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZXIucmVzaWduID0gdGhpcy5oYW5kbGVyLnJlc2lnbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlci5jbGljayA9IHRoaXMuaGFuZGxlci5jbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlci5jb25maXJtID0gdGhpcy5oYW5kbGVyLmNvbmZpcm0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY29ubmVjdGlvbi5tZXNzYWdlID0gdGhpcy5jb25uZWN0aW9uLm1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdhbWUgPSB7XG4gICAgaW5pdDogdGhlR2FtZSA9PiB7XG4gICAgICB0aGlzLmVuZ2luZSA9IG5ldyBHYW1lRW5naW5lW3RoZUdhbWUuZW5naW5lXSh0aGVHYW1lLmluZm8sIHRoZUdhbWUubW92ZXMpO1xuICAgICAgdGhpcy5nYW1lLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgYXBwZW5kOiBtb3ZlID0+IHtcbiAgICAgIHRoaXMuZW5naW5lW21vdmUudHlwZV0oXG4gICAgICAgIG1vdmUuY29sb3IsXG4gICAgICAgIG1vdmUucG9zaXRpb24gJiYgbW92ZS5wb3NpdGlvblswXSxcbiAgICAgICAgbW92ZS5wb3NpdGlvbiAmJiBtb3ZlLnBvc2l0aW9uWzFdLFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2FtZS51cGRhdGUoKTtcbiAgICB9LFxuICAgIHJlc3VsdDogciA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVzdWx0OiByLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGU6ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBib2FyZDogdGhpcy5lbmdpbmUuYm9hcmQsXG4gICAgICAgIGJsYWNrOiB7XG4gICAgICAgICAgaWQ6IHRoaXMuZW5naW5lLmluZm8uYmxhY2suaWQsXG4gICAgICAgICAgbmFtZTogdGhpcy5lbmdpbmUuaW5mby5ibGFjay5uYW1lLFxuICAgICAgICAgIGF2YXRhcjogdGhpcy5lbmdpbmUuaW5mby5ibGFjay5hdmF0YXIsXG4gICAgICAgICAgY2FwdHVyZWQ6IHRoaXMuZW5naW5lLmNhcHR1cmVkW0dhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0tdLFxuICAgICAgICB9LFxuICAgICAgICB3aGl0ZToge1xuICAgICAgICAgIGlkOiB0aGlzLmVuZ2luZS5pbmZvLndoaXRlLmlkLFxuICAgICAgICAgIG5hbWU6IHRoaXMuZW5naW5lLmluZm8ud2hpdGUubmFtZSxcbiAgICAgICAgICBhdmF0YXI6IHRoaXMuZW5naW5lLmluZm8ud2hpdGUuYXZhdGFyLFxuICAgICAgICAgIGNhcHR1cmVkOiB0aGlzLmVuZ2luZS5jYXB0dXJlZFtHYW1lRW5naW5lLkdvLkNPTE9SLldISVRFXSxcbiAgICAgICAgfSxcbiAgICAgICAgdHVybjogdGhpcy5lbmdpbmUuY3VycmVudENvbG9yKCksXG4gICAgICAgIHJlc3VsdDogdGhpcy5lbmdpbmUuaW5mby5yZXN1bHQsXG4gICAgICAgIGNvbG9yOlxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgIHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5lbmdpbmUuaW5mby5ibGFjay5pZFxuICAgICAgICAgICAgPyBHYW1lRW5naW5lLkdvLkNPTE9SLkJMQUNLXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5lbmdpbmUuaW5mby53aGl0ZS5pZFxuICAgICAgICAgICAgICA/IEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEVcbiAgICAgICAgICAgICAgOiBHYW1lRW5naW5lLkdvLkNPTE9SLkVNUFRZLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcblxuICBoYW5kbGVyID0ge1xuICAgIHBhc3M6ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS5jdXJyZW50Q29sb3IoKSA9PT0gdGhpcy5zdGF0ZS5jb2xvcikge1xuICAgICAgICAvLyB0aGlzLmVuZ2luZS5wYXNzKHRoaXMuc3RhdGUuY29sb3IpO1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kTWVzc2FnZShcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc2lnbjogKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZW5naW5lLmN1cnJlbnRDb2xvcigpID09PSB0aGlzLnN0YXRlLmNvbG9yKSB7XG4gICAgICAgIC8vIHRoaXMuZW5naW5lLnJlc2lnbih0aGlzLnN0YXRlLmNvbG9yKTtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICAgICAgICB0eXBlOiAncmVzaWduJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsaWNrOiAoaSwgaikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmVuZ2luZS5jdXJyZW50Q29sb3IoKSA9PT0gdGhpcy5zdGF0ZS5jb2xvciAmJlxuICAgICAgICB0aGlzLmVuZ2luZS5ydWxlcyh0aGlzLnN0YXRlLmNvbG9yLCBpLCBqKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRlbXBvcmFyeToge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICAgICAgICBwb3NpdGlvbjogW2ksIGpdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlybTogKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUudGVtcG9yYXJ5KSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmRNZXNzYWdlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0YXRlLnRlbXBvcmFyeS5jb2xvcixcbiAgICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXRlLnRlbXBvcmFyeS5wb3NpdGlvbixcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGVtcG9yYXJ5OiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIGNvbm5lY3Rpb24gPSB7XG4gICAgbWVzc2FnZTogbXNnID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKG1zZyk7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT09ICdvaycpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5pdChkYXRhLmdhbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGVsdGEnOlxuICAgICAgICAgICAgdGhpcy5nYW1lLmFwcGVuZChkYXRhLm1vdmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVzdWx0JzpcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLnN0YXRlLnJlc3VsdCA/IHRoaXMuc3RhdGUucmVzdWx0Lm1hdGNoKHJlZ2V4KSA6IG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IChcbiAgICAgICAgICA8V2ViU29ja2V0XG4gICAgICAgICAgICBvbk1lc3NhZ2U9e3RoaXMuY29ubmVjdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgdXJsPXtgd3M6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9jaGFubmVsLyR7dGhpcy5wcm9wcy5pZH1gfVxuICAgICAgICAgICAgcmVjb25uZWN0SW50ZXJ2YWxJbk1pbGxpU2Vjb25kcz17MTAwfVxuICAgICAgICAgICAgcmVmPXtXZWJzb2NrZXQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLndlYnNvY2tldCA9IFdlYnNvY2tldDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEluZm9cbiAgICAgICAgICBibGFjaz17dGhpcy5zdGF0ZS5ibGFja31cbiAgICAgICAgICB3aGl0ZT17dGhpcy5zdGF0ZS53aGl0ZX1cbiAgICAgICAgICB0dXJuPXt0aGlzLnN0YXRlLnR1cm59XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXIgJiZcbiAgICAgICAgKHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5zdGF0ZS5ibGFjay5pZCB8fFxuICAgICAgICAgIHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5zdGF0ZS53aGl0ZS5pZCkgJiZcbiAgICAgICAgIXRoaXMuc3RhdGUucmVzdWx0ID8gKFxuICAgICAgICAgIDxDb25maXJtQnV0dG9uXG4gICAgICAgICAgICBoYW5kbGVDb25maXJtPXt0aGlzLmhhbmRsZXIuY29uZmlybX1cbiAgICAgICAgICAgIGRpc2FibGU9eyF0aGlzLnN0YXRlLnRlbXBvcmFyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNjb3JlYm9hcmR9PlxuICAgICAgICAgICAge21hdGNoXG4gICAgICAgICAgICAgID8gYCR7bWF0Y2hbMV0gPT09ICdXJyA/ICfnmb0nIDogJ+m7kSd96IOcJHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoWzJdID09PSAnUicgPyAn77yM5a+55pa55oqV6ZmNJyA6IGAke21hdGNoWzJdfeebrmBcbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Qm9hcmRcbiAgICAgICAgICBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH1cbiAgICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVyLmNsaWNrfVxuICAgICAgICAgIHRlbXBvcmFyeT17dGhpcy5zdGF0ZS50ZW1wb3Jhcnl9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXIgJiZcbiAgICAgICAgKHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5zdGF0ZS5ibGFjay5pZCB8fFxuICAgICAgICAgIHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5zdGF0ZS53aGl0ZS5pZCkgJiZcbiAgICAgICAgIXRoaXMuc3RhdGUucmVzdWx0ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFjdGlvbn0+XG4gICAgICAgICAgICA8UGFzc0J1dHRvbiBoYW5kbGVQYXNzPXt0aGlzLmhhbmRsZXIucGFzc30gLz5cbiAgICAgICAgICAgIDxSZXNpZ25CdXR0b24gaGFuZGxlUmVzaWduPXt0aGlzLmhhbmRsZXIucmVzaWdufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoU3R5bGVzKHMpKShHbyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9Hby5qcyIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMjQvMTIvMjAxN1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHYW1lRW5naW5lIGZyb20gJ2dhbWUtZW5naW5lJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzcy1tb2R1bGVzL25vLXVudXNlZC1jbGFzc1xuaW1wb3J0IHMgZnJvbSAnLi9JbmZvLmNzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHMpO1xuXG5jbGFzcyBJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibGFjazogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjYXB0dXJlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHdoaXRlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNhcHR1cmVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgdHVybjogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR1cm46IEdhbWVFbmdpbmUuR28uQ09MT1IuRU1QVFksXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5nYW1laW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBsYXllcn0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiYXZhdGFyX3VybFwiXG4gICAgICAgICAgICB3aWR0aD1cIjY0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjY0XCJcbiAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5ibGFjay5hdmF0YXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbmZvfT5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLnR1cm4gPT09IEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0ssXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ibGFjay5uYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuYmxhY2suY2FwdHVyZWR9IOaPkOWtkDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBsYXllcn0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiYXZhdGFyX3VybFwiXG4gICAgICAgICAgICB3aWR0aD1cIjY0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjY0XCJcbiAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy53aGl0ZS5hdmF0YXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbmZvfT5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLnR1cm4gPT09IEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEUsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aGl0ZS5uYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMud2hpdGUuY2FwdHVyZWR9IOaPkOWtkDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aFN0eWxlcyhzKSkoSW5mbyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9JbmZvLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9JbmZvLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9JbmZvLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0luZm8uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby9JbmZvLmNzc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uSW5mby1nYW1laW5mby0zQzJvayB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5JbmZvLWdhbWVpbmZvLTNDMm9rID4gLkluZm8tcGxheWVyLXVfaXdKIHtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayA+IC5JbmZvLXBsYXllci11X2l3SjpudGgtY2hpbGQoMikge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxufVxcblxcbi5JbmZvLWdhbWVpbmZvLTNDMm9rIC5JbmZvLWluZm8tM3IwOFkge1xcbiAgbWFyZ2luOiAwIDEzcHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5JbmZvLWdhbWVpbmZvLTNDMm9rID4gLkluZm8tcGxheWVyLXVfaXdKOm50aC1jaGlsZCgyKSAuSW5mby1pbmZvLTNyMDhZIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayAuSW5mby1pbmZvLTNyMDhZID4gLkluZm8tYWN0aXZlLTE5NjQtIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sgLkluZm8taW5mby0zcjA4WSA+IC5JbmZvLWFjdGl2ZS0xOTY0LTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwyNUNGJztcXG59XFxuXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sgLkluZm8tcGxheWVyLXVfaXdKOm50aC1jaGlsZCgyKSAuSW5mby1pbmZvLTNyMDhZID4gLkluZm8tYWN0aXZlLTE5NjQtOjphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDI1Q0InO1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayAuSW5mby1pbmZvLTNyMDhZID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayAuSW5mby1uYW1lLTFsaWRpIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9JbmZvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO01BQ2xCLGtCQUFrQjtFQUN0Qix1QkFBdUI7TUFDbkIsK0JBQStCO0VBQ25DLHVCQUF1QjtNQUNuQixvQkFBb0I7Q0FDekI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztDQUNaOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsaUJBQWE7Q0FDZDs7QUFFRDtFQUNFLGlCQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakJcIixcImZpbGVcIjpcIkluZm8uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5nYW1laW5mbyB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1laW5mbyA+IC5wbGF5ZXIge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5nYW1laW5mbyA+IC5wbGF5ZXI6bnRoLWNoaWxkKDIpIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbn1cXG5cXG4uZ2FtZWluZm8gLmluZm8ge1xcbiAgbWFyZ2luOiAwIDEzcHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5nYW1laW5mbyA+IC5wbGF5ZXI6bnRoLWNoaWxkKDIpIC5pbmZvIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZ2FtZWluZm8gLmluZm8gPiAuYWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdhbWVpbmZvIC5pbmZvID4gLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ+KXjyc7XFxufVxcblxcbi5nYW1laW5mbyAucGxheWVyOm50aC1jaGlsZCgyKSAuaW5mbyA+IC5hY3RpdmU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICfil4snO1xcbn1cXG5cXG4uZ2FtZWluZm8gLmluZm8gPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5nYW1laW5mbyAubmFtZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJnYW1laW5mb1wiOiBcIkluZm8tZ2FtZWluZm8tM0Myb2tcIixcblx0XCJwbGF5ZXJcIjogXCJJbmZvLXBsYXllci11X2l3SlwiLFxuXHRcImluZm9cIjogXCJJbmZvLWluZm8tM3IwOFlcIixcblx0XCJhY3RpdmVcIjogXCJJbmZvLWFjdGl2ZS0xOTY0LVwiLFxuXHRcIm5hbWVcIjogXCJJbmZvLW5hbWUtMWxpZGlcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9JbmZvLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMjYvMTIvMjAxN1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5pbXBvcnQgQm9hcmRJbnRlcnNlY3Rpb24gZnJvbSAnLi9Cb2FyZEludGVyc2VjdGlvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuL0JvYXJkLmNzcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgaW50ZXIgZnJvbSAnLi9Cb2FyZEludGVyc2VjdGlvbi5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGJvYXJkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSkuaXNSZXF1aXJlZCxcbiAgICB0ZW1wb3Jhcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb2xvcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcG9zaXRpb246IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZW1wb3Jhcnk6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGlnaGxpZ2h0OiBbXSB9O1xuICAgIHRoaXMuaGFuZGxlSG92ZXIgPSB0aGlzLmhhbmRsZUhvdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVIb3ZlckVuZCA9IHRoaXMuaGFuZGxlSG92ZXJFbmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUhvdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWdobGlnaHQ6IFtcbiAgICAgICAgcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vZmZzZXQteCcpLCAxMCksXG4gICAgICAgIHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0LXknKSwgMTApLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUhvdmVyRW5kKGUpIHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKTtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhpbnRlci5pbnRlcnNlY3Rpb24pKSB7XG4gICAgICB0YXJnZXQuY2xpY2soKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWdobGlnaHQ6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLmJvYXJkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHJvdy5wdXNoKFxuICAgICAgICAgIDxCb2FyZEludGVyc2VjdGlvblxuICAgICAgICAgICAga2V5PXtqfVxuICAgICAgICAgICAgaGlnaGxpZ2h0PXtcbiAgICAgICAgICAgICAgaiA9PT0gdGhpcy5zdGF0ZS5oaWdobGlnaHRbMV0gfHwgaSA9PT0gdGhpcy5zdGF0ZS5oaWdobGlnaHRbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBvcmFyeT17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudGVtcG9yYXJ5ICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudGVtcG9yYXJ5LnBvc2l0aW9uWzBdID09PSBpICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudGVtcG9yYXJ5LnBvc2l0aW9uWzFdID09PSBqXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnRlbXBvcmFyeS5jb2xvclxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3I9e3RoaXMucHJvcHMuYm9hcmRbaV1bal19XG4gICAgICAgICAgICByb3c9e2l9XG4gICAgICAgICAgICBjb2w9e2p9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsaWNrKGksIGopO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhc3Q9e2kgPT09IHRoaXMucHJvcHMuYm9hcmQubGVuZ3RoIC0gMX1cbiAgICAgICAgICAvPixcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGludGVyc2VjdGlvbnMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgYm9hcmRyb3c6IHRydWUsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICA+XG4gICAgICAgICAge3Jvd31cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzLmJvYXJkfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlSG92ZXJ9XG4gICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZUhvdmVyfVxuICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZUhvdmVyRW5kfVxuICAgICAgICBpZD1cImJvYXJkXCJcbiAgICAgID5cbiAgICAgICAge2ludGVyc2VjdGlvbnN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocywgaW50ZXIpKEJvYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2dvL0JvYXJkLmpzIiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAyNi8xMi8yMDE3XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCBHYW1lRW5naW5lIGZyb20gJ2dhbWUtZW5naW5lJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBzIGZyb20gJy4vQm9hcmRJbnRlcnNlY3Rpb24uY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQocyk7XG5cbmNsYXNzIEJvYXJkSW50ZXJzZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoaWdobGlnaHQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdGVtcG9yYXJ5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxhc3Q6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6IDAsXG4gICAgbGFzdDogZmFsc2UsXG4gICAgdGVtcG9yYXJ5OiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMsanN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zXG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtb2Zmc2V0LXg9e3RoaXMucHJvcHMucm93fVxuICAgICAgICBkYXRhLW9mZnNldC15PXt0aGlzLnByb3BzLmNvbH1cbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgaW50ZXJzZWN0aW9uOiB0cnVlLFxuICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy5wcm9wcy5oaWdobGlnaHQsXG4gICAgICAgICAgYmxhY2s6XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbG9yID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLkJMQUNLIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRlbXBvcmFyeSA9PT0gR2FtZUVuZ2luZS5Hby5DT0xPUi5CTEFDSyxcbiAgICAgICAgICB3aGl0ZTpcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29sb3IgPT09IEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEUgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMudGVtcG9yYXJ5ID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLldISVRFLFxuICAgICAgICAgIGxhc3RJbnRlcnNlY3Rpb246IHRoaXMucHJvcHMubGFzdCxcbiAgICAgICAgICB0ZW1wb3Jhcnk6ICEhdGhpcy5wcm9wcy50ZW1wb3JhcnksXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQm9hcmRJbnRlcnNlY3Rpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vQm9hcmRJbnRlcnNlY3Rpb24uanMiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Cb2FyZEludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tOUdzMk4ge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLkJvYXJkSW50ZXJzZWN0aW9uLWludGVyc2VjdGlvbi05R3MyTjo6YmVmb3JlIHtcXG4gIGJvcmRlci10b3A6IDFweCAjMDAwIHNvbGlkO1xcbiAgY29udGVudDogJyc7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG5cXG4uQm9hcmRJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLTlHczJOOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwKSBzb2xpZDtcXG59XFxuXFxuLkJvYXJkSW50ZXJzZWN0aW9uLWludGVyc2VjdGlvbi05R3MyTjo6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCAjMDAwIHNvbGlkO1xcbiAgY29udGVudDogJyAnO1xcbiAgei1pbmRleDogLTE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5Cb2FyZEludGVyc2VjdGlvbi1sYXN0SW50ZXJzZWN0aW9uLXdXRDNKOjphZnRlciB7XFxuICBib3JkZXItbGVmdDogMDtcXG59XFxuXFxuLkJvYXJkSW50ZXJzZWN0aW9uLWJsYWNrLUQ1Tm9TLFxcbi5Cb2FyZEludGVyc2VjdGlvbi13aGl0ZS1ydW5vMiB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5Cb2FyZEludGVyc2VjdGlvbi1ibGFjay1ENU5vUzo6YmVmb3JlLFxcbi5Cb2FyZEludGVyc2VjdGlvbi13aGl0ZS1ydW5vMjo6YmVmb3JlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuXFxuLkJvYXJkSW50ZXJzZWN0aW9uLWJsYWNrLUQ1Tm9TOjphZnRlcixcXG4uQm9hcmRJbnRlcnNlY3Rpb24td2hpdGUtcnVubzI6OmFmdGVyIHtcXG4gIGhlaWdodDogNTglO1xcbiAgbWFyZ2luLXRvcDogNDIlO1xcbn1cXG5cXG4uQm9hcmRJbnRlcnNlY3Rpb24tYmxhY2stRDVOb1Mge1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9ibGFjay5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG4uQm9hcmRJbnRlcnNlY3Rpb24td2hpdGUtcnVubzIge1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi93aGl0ZS5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG4uQm9hcmRJbnRlcnNlY3Rpb24tdGVtcG9yYXJ5LTM3Nk8zIHtcXG5cXG59XFxuXFxuLkJvYXJkSW50ZXJzZWN0aW9uLWhpZ2hsaWdodC0zNkVXTCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vQm9hcmRJbnRlcnNlY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO01BQzFCLGlCQUFpQjtDQUN0Qjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLHVDQUF1QztDQUN4Qzs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7RUFFRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjs7QUFFRDs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUNBQW1DO0VBQ25DLGdEQUFxQztDQUN0Qzs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxnREFBcUM7Q0FDdEM7O0FBRUQ7O0NBRUM7O0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdENcIixcImZpbGVcIjpcIkJvYXJkSW50ZXJzZWN0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW50ZXJzZWN0aW9uIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5pbnRlcnNlY3Rpb246OmJlZm9yZSB7XFxuICBib3JkZXItdG9wOiAxcHggIzAwMCBzb2xpZDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuXFxuLmludGVyc2VjdGlvbjpsYXN0LWNoaWxkOjpiZWZvcmUge1xcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMCkgc29saWQ7XFxufVxcblxcbi5pbnRlcnNlY3Rpb246OmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggIzAwMCBzb2xpZDtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHotaW5kZXg6IC0xO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG5cXG4ubGFzdEludGVyc2VjdGlvbjo6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcblxcbi5ibGFjayxcXG4ud2hpdGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYmxhY2s6OmJlZm9yZSxcXG4ud2hpdGU6OmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcblxcbi5ibGFjazo6YWZ0ZXIsXFxuLndoaXRlOjphZnRlciB7XFxuICBoZWlnaHQ6IDU4JTtcXG4gIG1hcmdpbi10b3A6IDQyJTtcXG59XFxuXFxuLmJsYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmxhY2sucG5nJyk7XFxufVxcblxcbi53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3doaXRlLnBuZycpO1xcbn1cXG5cXG4udGVtcG9yYXJ5IHtcXG5cXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbnRlcnNlY3Rpb25cIjogXCJCb2FyZEludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tOUdzMk5cIixcblx0XCJsYXN0SW50ZXJzZWN0aW9uXCI6IFwiQm9hcmRJbnRlcnNlY3Rpb24tbGFzdEludGVyc2VjdGlvbi13V0QzSlwiLFxuXHRcImJsYWNrXCI6IFwiQm9hcmRJbnRlcnNlY3Rpb24tYmxhY2stRDVOb1NcIixcblx0XCJ3aGl0ZVwiOiBcIkJvYXJkSW50ZXJzZWN0aW9uLXdoaXRlLXJ1bm8yXCIsXG5cdFwidGVtcG9yYXJ5XCI6IFwiQm9hcmRJbnRlcnNlY3Rpb24tdGVtcG9yYXJ5LTM3Nk8zXCIsXG5cdFwiaGlnaGxpZ2h0XCI6IFwiQm9hcmRJbnRlcnNlY3Rpb24taGlnaGxpZ2h0LTM2RVdMXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vQm9hcmRJbnRlcnNlY3Rpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNeTFqTURFeElEWTJMakUwTlRZMk1Td2dNakF4TWk4d01pOHdOaTB4TkRvMU5qb3lOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTmlBb1YybHVaRzkzY3lraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlEwUTJPRVJFUlRJMlJUVTNNVEZGTlRrMU9EVkdRa1F5UmtGQ1JUTTBNREFpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UTBRMk9FUkVSVE0yUlRVM01URkZOVGsxT0RWR1FrUXlSa0ZDUlRNME1EQWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBEUkRZNFJFUkZNRFpGTlRjeE1VVTFPVFU0TlVaQ1JESkdRVUpGTXpRd01DSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERSRFk0UkVSRk1UWkZOVGN4TVVVMU9UVTROVVpDUkRKR1FVSkZNelF3TUNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1B2ZnExOXdBQUFkS1NVUkJWSGphaEZjN2p4eEZFSzd1NlhudHcxNzdzR0F4WnlNc2dSQk9qREFHSTJOTUFCSjJpR1FIaUpBZlFJUWpoSWdja0NJY0VRQUJFZ0ZDSmpDUEJDenhNSWlNdHdoc3lVWWc4Tjd1M2U3T1RELzRxbWQ2Yis1OGQ0eDIxRE05M1YxVlgzMWZkYTlZdm5OSXpqbFNVVVJ4dDBPanlRcnQ2dmFvbjNYbzFteU5vbGhTSjBxcExNb0RjWlk4cTYwOWdiRVBXbXZ2TnNiMGhSQ0VhNHoycHBUeVI3UlgwRjUyNUs3RkpDa2lRVkpHTkNtbnBBUnNDRW5hR0dybWthTC91WVNRUncyNWw2Mms1NDJ4U2twQjgvbWMwalQxMzh1eXBDUkorbkJvUHh4NkJBdS9pRnZMS1BvZ1VkRWJnc1Izd2RoV2w5eitnK2pFYVhKUkUzMWJDbmZPcGJHeTVBaHdVUnpIR09Fb1l0U1VJaGh2bkJWTlpFNXByYzhCdGF0R200djRubS9ueEcwSVdHTjVwV056VTcwdnJUdllnUUZuSGZvTktSaG1PSUVxL0xBa0FXZVNadmh1eWJBVDhNK2luNDA1akMrMW9VcnJsMFFsbmhGeGRFNEs4YzJPRHZDaTNVNStHdkJkS3EyaEZKWlM1STBqclBDZVp5azVwTUJvamVoalRnOWFCYWVRVi9SWmpOR1Y1Z0FJOEZNaEsvakV6dHQ3VFZGK25XVDVHWHo4ZUVzSE9JSkV5dU5wbGwraWhwU0NROFhpeURGRkppYW5DMFFjazhvVG53TCt6dStNaExITURhQ2dZaDhJbzZKQVhnMzBxcXJ5cUpSbGRTbFBrdU40L21wQlFsYUFONmpVQUUrWERhSklzSWlBNFZncXlyTGNQeWVZa0trS0tIRGtFUXdueUg4RWlDdWZvalR0a3hPN3FTaEtUOUw1YklwMVkwSW1TUHFBRkpuWm5OSDhCRGFYaTZJWU1YSnFzTFFYa0JwRVlONURqbnFKNHVnRU8wU2RPS0U4aVVnQmdXNm5ReEtTekx0Wmt5OENHVE82ZFd1RitydDdHQTlpVm11MHQ5K25PWnlZVGllME10VTBYcDJUaVNSVlJsT2xKSldWN2lrVnZRdmpad3p6cWw3TG5VUWN6eVdJSk1hZ0dCTExzb3k2YVVUOWJwZVN1SVo4SmhUMERQY1FFZWVjTDIwU0tpY1Y0SjFpUEdwR0JsVzRsUEk5ZTBpbEt3aGlRcFBWVlNBeW96V05kSkRsdW5NYTZ6K0pOYjVRYStNSmFXY3ZwTjNjYTFzZ3NsNnY1eDFJV0c1eFNqTVlLNUZIN1F3VnBRYXMycWVGVThjazFKd0dSRE10ZDFFMUJwZGlSYnNkT0RSemNLaExtVXhoZUV4U1R5aHhkZTBBQWhmU0xIMWNSVUllMXRZY3F6VWRVdzlRZDNBemlRb0VDVG5TYkRxRlFVaE1NOWxBV0cwOTBZVGt0bXowRHpUV1JtUmd3SEN4bXZ4RGFZd0t5RnhDQ2p1RGZUQWEwMlRsWHlpbFlpVTlabVgwRUdobHozS09tU1NzODdTVDB4d2VWcnBFcE5BOGRNL09PQmpWRlpKbGE3bTZXanExR2xqM2RRY0tHTDZKV2lPbFJYcFlLMFZCR2VTWmdjQ0p6cW5BZkZiR3ZDek9xbGxWbnVwblBWL2RXT09qOFppVml3VXgwYW1tV0xxRnp0a1lzNWYxelpwbncvek9oR0lVdVRZc1pBajBaQ1Q5R0l2NWN5d25KTktXS0txUVRueDRTa1ZTM3NmUnN4d1pHdllzOHBNNERPc2Q4QXM2dHlpMTJCTjhjWUt1dldIdVk5WFU1YmdlV3hOVU15aWVKNzRPVEdmZUFlOGtDQjhKY1FqMVJuYlpnSWEzM0hMdDRVWHJlbHNYQ3lhZHEydEY4MjY4b3h3NUx3eE4xL3VIckxlV0dnblJWRmRYVjBpdFBXZW9XZHRabGo1MUZSY3BkbFF3OEZGZDNZU3ZiSWlNYzRvMWEvanJ5UGlaMi9ETS9jRVl0L3pPRG9hMGNHcTVaZWJISUtVQXAzaS80Y29wclpWS0NpWFFZb0QxbFkxMTZKSHdFZkd6WGtRWDRBN09CRFE4Zi9ET3oxeTJBMEpoeXc1SUdVaEVXT0hUNnlCVDVoWXdoWUlCZ1RkZ2RjTm8xOERKOExuRkl1MW9nd05oSXdwekFnSnR0TnB6aktuM0JmSjJFRHFnR2ZNRW5yZ1ozdkRPYmMwTFdxREFlYTd6V3hQU0t3UHZxNmg2UVJIQkVZYWZlUkxtQmh1NEp6amh5Sit3d0hKWU1PVFY3MVJLYlhBcTNHMlNCUlJDOU90d20wV3FBbHJoMlNzQ0tjcVUrRlg2ODF0cjhXRGNIMDVhenlHYTloMk1lTWsxZXdNNzNWNHJvQkVVRlBxc2QwcDhKdTVZR2k3RG8ydE1tSFplZzFHZUdHQnJSeHpJdU8yUnJrbEpRS1Y5YWV5K0tiWnpySDFJb3U1Zng2Q1BtTFdCQjV3enZrTmtiU2hEbW5oOFczcnRPNkFWdnEvUDVlcnRmSFhFaDArTHN2eERzb1N3KzUwUGtMWXIzdnBSelcwZ1hCdkt6V2tKaHNQWXRuR3lxTEs0RTk3WXF2S1ZhajZqYUhqWGZzcnovRzlFdFE5UlBlcVBYOGhaSUZXSW9pMjk5bk83Yi8wb2Yvc0p1TjZyVUl5RTkrUWRVNVZ2UnRoN3hBUDNIdzZ5RXFQUjZMZlpiSGFJendLYnRiNjVEUWhzWjNBemdyeWZLOEVuSUhzVFdUaUkwMWZsajV3Y0xWOGdvVnRhV2pxRmllT1EzL1padjUzcndKZk5xZHA0d202cnBkNjI4YXZnOUNuTXJZd1BBQVFGL05URnNZc3ZSSDU5T0J3ZXc2Si9jZUZvNTMyN2RPemtRSmhYRno2eGlzNG44T21YdG9PeVRSeG1ONUQ0ZVRBWUhBSE1WempTVU5kWkZhRTZ0aDNheW9sZ3ZFWHNIeER0RVNIRlZiL0w3dlRYck5uSmJrQVpKNERPZWZZOEZKa0FQWThKVW1USHd1N1hkcW9KekVCbHIwUHZEOE9CMzdkQ0tob083N25OKzdBd0ZIRUZISGtiZlZNNGNnRDNIdDZ1K1k5STVBa3AvTjNlSFp2MkJoeDZDKzBMZVAvUU84Zi9LYU53eU5uaHYrR0cvNGsxMGY2RUk2L2l2K0ZyV1BycFFwY24wWDhVcDV3RFdHd0FOdU9VN2xZUTRYWGMzeVBhTHhIMTUraWJiMFpscStzL0FRWUFzUk9hNXhIZStZQUFBQUFBU1VWT1JLNUNZSUk9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vYmxhY2sucG5nXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvc3JjL3JvdXRlcy9nby93aGl0ZS5wbmc/MjlmNDAxYzVcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vd2hpdGUucG5nXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Cb2FyZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQm9hcmQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQm9hcmQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby9Cb2FyZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Cb2FyZC1ib2FyZC1DOXhZRiB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MnZ3OyAvKiAxOjEgQXNwZWN0IFJhdGlvICovXFxuICBoZWlnaHQ6IDgydnc7XFxuICBwYWRkaW5nOiAzdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vZ29ib2FyZC5qcGdcIikpICsgXCIpO1xcbn1cXG5cXG4uQm9hcmQtYm9hcmRyb3ctMmdBZ0Ege1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLkJvYXJkLWJvYXJkLUM5eFlGIC5Cb2FyZC1zdGFyLTNzaEFFIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGJsYWNrIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcXG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChibGFjayAyMCUsIHRyYW5zcGFyZW50IDIwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMS41cHggMS41cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vQm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7TUFDdkIsdUJBQXVCO0VBQzNCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsWUFBWSxDQUFDLHNCQUFzQjtFQUNuQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdEQUF1QztDQUN4Qzs7QUFFRDtFQUNFLDhCQUE4QjtNQUMxQixpQkFBaUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnRUFBZ0U7RUFDaEUsMkRBQTJEO0VBQzNELHdEQUF3RDtFQUN4RCxpQ0FBaUM7Q0FDbENcIixcImZpbGVcIjpcIkJvYXJkLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmQge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODJ2dzsgLyogMToxIEFzcGVjdCBSYXRpbyAqL1xcbiAgaGVpZ2h0OiA4MnZ3O1xcbiAgcGFkZGluZzogM3Z3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2dvYm9hcmQuanBnJyk7XFxufVxcblxcbi5ib2FyZHJvdyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQgLnN0YXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoYmxhY2sgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGJsYWNrIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChibGFjayAyMCUsIHRyYW5zcGFyZW50IDIwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxLjVweCAxLjVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvYXJkXCI6IFwiQm9hcmQtYm9hcmQtQzl4WUZcIixcblx0XCJib2FyZHJvd1wiOiBcIkJvYXJkLWJvYXJkcm93LTJnQWdBXCIsXG5cdFwic3RhclwiOiBcIkJvYXJkLXN0YXItM3NoQUVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9Cb2FyZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9zcmMvcm91dGVzL2dvL2dvYm9hcmQuanBnPzBmMjhmMjQ4XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2dvYm9hcmQuanBnXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAyNi8xMi8yMDE3XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBzIGZyb20gJy4vQnV0dG9uLmNzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHMpO1xuXG5jbGFzcyBDb25maXJtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGhhbmRsZUNvbmZpcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiY29uZmlybS1idG5cIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgY29uZmlybTogdHJ1ZSxcbiAgICAgICAgICBidXR0b246IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNvbmZpcm19XG4gICAgICA+XG4gICAgICAgIOehruiupFxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKENvbmZpcm1CdXR0b24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vQ29uZmlybUJ1dHRvbi5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQnV0dG9uLWJ1dHRvbi0zSGhRMyB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmYpLCB0bygjYjdhM2YxKSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmZmLCAjYjdhM2YxKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjZmZmLCAjYjdhM2YxKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjYjdhM2YxKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG59XFxuXFxuLkJ1dHRvbi1idXR0b24tM0hoUTM6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2I3YTNmMSksIHRvKCNmZmYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNiN2EzZjEsICNmZmYpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCNiN2EzZjEsICNmZmYpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNiN2EzZjEsICNmZmYpO1xcbn1cXG5cXG4uQnV0dG9uLWNvbmZpcm0tM05HQUMge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxRkFBcUY7RUFDckYsbURBQW1EO0VBQ25ELDhDQUE4QztFQUM5QywyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UscUZBQXFGO0VBQ3JGLG1EQUFtRDtFQUNuRCw4Q0FBOEM7RUFDOUMsMkNBQTJDO0NBQzVDOztBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCXCIsXCJmaWxlXCI6XCJCdXR0b24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZmZmKSwgdG8oI2I3YTNmMSkpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2I3YTNmMSk7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2I3YTNmMSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2I3YTNmMSk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxufVxcblxcbi5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2I3YTNmMSksIHRvKCNmZmYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNiN2EzZjEsICNmZmYpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCNiN2EzZjEsICNmZmYpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNiN2EzZjEsICNmZmYpO1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b24tYnV0dG9uLTNIaFEzXCIsXG5cdFwiY29uZmlybVwiOiBcIkJ1dHRvbi1jb25maXJtLTNOR0FDXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vQnV0dG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMjYvMTIvMjAxN1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuL0J1dHRvbi5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgUGFzc0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlUGFzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJwYXNzLWJ0blwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVBhc3N9XG4gICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIOWBnOS4gOaJi1xuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vUGFzc0J1dHRvbi5qcyIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMjYvMTIvMjAxN1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuL0J1dHRvbi5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgUmVzaWduQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoYW5kbGVSZXNpZ246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwicmVzaWduLWJ0blwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVJlc2lnbn1cbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAg6K6k6L6TXG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2lnbkJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2dvL1Jlc2lnbkJ1dHRvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vR28uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0dvLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0dvLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vR28uY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Hby1jb250YWluZXItcl92R1Ige1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNiU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzJlMWY1OSwgIzE2MTAyYikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudCgjMmUxZjU5LCAjMTYxMDJiKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMyZTFmNTksICMxNjEwMmIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5Hby1zY29yZWJvYXJkLTNsRkc5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLkdvLWNvbnRhaW5lci1yX3ZHUiA+IGRpdiB7XFxuICBtYXJnaW4tdG9wOiA4JTtcXG59XFxuXFxuLkdvLWFjdGlvbi0yYkJQaSB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDglO1xcbn1cXG5cXG4uR28tYWN0aW9uLTJiQlBpID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xcbn1cXG5cXG4uR28tYWN0aW9uLTJiQlBpID4gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vR28uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7TUFDdkIsdUJBQXVCO0VBQzNCLHNCQUFzQjtNQUNsQixrQkFBa0I7RUFDdEIscUJBQXFCO01BQ2pCLDRCQUE0QjtFQUNoQyx1QkFBdUI7TUFDbkIsb0JBQW9CO0VBQ3hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUVBQWlFO0VBQ2pFLDREQUE0RDtFQUM1RCx5REFBeUQ7Q0FDMUQ7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxzQkFBc0I7TUFDbEIsd0JBQXdCO0VBQzVCLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUJcIixcImZpbGVcIjpcIkdvLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMyZTFmNTksICMxNjEwMmIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoIzJlMWY1OSwgIzE2MTAyYikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMmUxZjU5LCAjMTYxMDJiKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2NvcmVib2FyZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXIgPiBkaXYge1xcbiAgbWFyZ2luLXRvcDogOCU7XFxufVxcblxcbi5hY3Rpb24ge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA4JTtcXG59XFxuXFxuLmFjdGlvbiA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcXG59XFxuXFxuLmFjdGlvbiA+IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR28tY29udGFpbmVyLXJfdkdSXCIsXG5cdFwic2NvcmVib2FyZFwiOiBcIkdvLXNjb3JlYm9hcmQtM2xGRzlcIixcblx0XCJhY3Rpb25cIjogXCJHby1hY3Rpb24tMmJCUGlcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9Hby5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwibXV0YXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlR29cIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkZWZhdWx0VmFsdWVcIjpudWxsfSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29sb3JcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGVmYXVsdFZhbHVlXCI6bnVsbH1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZUdvXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbG9yXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb2xvclwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTAxfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCJtdXRhdGlvbiB1cGRhdGVHbygkaWQ6IFN0cmluZyEsICRjb2xvcjogU3RyaW5nISkge1xcbiAgdXBkYXRlR28oaWQ6ICRpZCwgY29sb3I6ICRjb2xvcikge1xcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2ludml0ZS5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBZEE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQURBOztBQWdCQTs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUtBOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUtBOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQXZCQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUF5QkE7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFsQkE7QUF3QkE7QUEzQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFqREE7QUFoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQW5CQTtBQXBJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUEvQkE7QUFnQ0E7QUFDQTs7O0FBeUhBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBN05BO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQURBOzs7O0FBTUE7QUFDQTtBQURBOztBQTBOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUEE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7O0FBOURBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVhBOztBQURBOzs7O0FBZUE7QUFDQTtBQURBOztBQWtEQTs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFjQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFNQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUpBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUNBO0FBR0E7QUFBQTtBQXVCQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTdCQTtBQUNBO0FBQ0E7QUFBQTtBQW9DQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7QUE5RkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTs7QUFEQTs7OztBQVVBO0FBQ0E7QUFEQTs7QUF1RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBaUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQVZBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFvQkE7Ozs7QUEzQ0E7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOztBQURBOzs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFtQ0E7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBOzs7O0FBckJBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQXVCQTs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7OztBQWxCQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBREE7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7OztBQWxCQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBREE7O0FBb0JBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9