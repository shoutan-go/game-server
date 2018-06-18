require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(105).concat([
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Go__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invite_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__invite_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__go_graphql__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__go_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__go_graphql__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/index.js";

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
              component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Go__["a" /* default */], {
                id: id,
                boardsize: data.go.info.boardsize,
                user: store.getState().user && store.getState().user.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
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
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Wechat__ = __webpack_require__(122);
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(113);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAgC;UACxB,wBAAwB,CAAC,OAAO;EACxC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,0CAA0C;UAClC,kCAAkC,CAAC,OAAO;CACnD;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAA+B;UACvB,uBAAuB,CAAC,OAAO;EACvC,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(115);
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: normal;\n  font-size: 12px; /* ~16px; */\n  font-family: 'Roboto', 'Hiragino Sans GB', 'Microsoft YaHei', 'STHeiti', 'SimHei', 'WenQuanYi Micro Hei', sans-serif;\n  line-height: 1.375; /* ~22px */\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  position: relative !important;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;;;;GAIG;;AAEH;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,oBAAoB;EACpB,gBAAgB,CAAC,YAAY;EAC7B,qHAAqH;EACrH,mBAAmB,CAAC,WAAW;EAC/B,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: normal;\n  font-size: 12px; /* ~16px; */\n  font-family: 'Roboto', 'Hiragino Sans GB', 'Microsoft YaHei', 'STHeiti', 'SimHei', 'WenQuanYi Micro Hei', sans-serif;\n  line-height: 1.375; /* ~22px */\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  position: relative !important;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(117);
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(118);
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
/* 118 */
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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(120);
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(121);
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
/* 121 */
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
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_graphql__ = __webpack_require__(123);
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
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'closeWindow']
          }));
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
/* 123 */
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
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/utils.js";

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

    intersections.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: i,
      className: cx({
        boardrow: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, row));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: cx({
      layer: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, intersections);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  render: render
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(178);
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
/* 126 */
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
/* 127 */,
/* 128 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q2OERERTI2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q2OERERTM2RTU3MTFFNTk1ODVGQkQyRkFCRTM0MDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDY4RERFMDZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDY4RERFMTZFNTcxMUU1OTU4NUZCRDJGQUJFMzQwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvfq19wAAAdKSURBVHjahFc7jxxFEK7u6Xntw177sGAxZyMsgRBOjDAGI2NMABJ2iGQHiJAfQIQjhIgckCIcEQABEgFCJjCPBCzxMIiMtwhsyUYg8N7u3e7OTD/4qmd6b+58d4x21DM93V1VX31fda9YvnNIzjlSUURxt0OjyQrt6vaon3Xo1myNolhSJ0qpLMoDcZY8q609gbEPWmvvNsb0hRCEa4z2ppTyR7RX0F525K7FJCkiQVJGNCmnpARsCEnaGGrmkaL/uYSQRw25l62k542xSkpB8/mc0jT138uypCRJ+nBoPxx6BAu/iFvLKPogUdEbgsR3wdhWl9z+g+jEaXJRE31bCnfOpbGy5AhwURzHGOEoYtSUIhhvnBVNZE5prc8BtatGm4v4nm/nxG0IWGN5pWNzU70vrTvYgQFnHfoNKRhmOIEq/LAkAWeSZvhuybAT8M+in405jC+1oUrrl0QlnhFxdE4K8c2ODvCi3U5+GvBdKq2hFJZS5I0jrPCeZyk5pMBojehjTg9aBaeQV/RZjNGV5gAI8FMhK/jEztt7TVF+nWT5GXz8eEsHOIJEyuNpll+ihpSCQ8XiyDFFJianC0Qck8oTnwL+zu+MhLHMDaCgYh8Io6JAXg30qqryqJRldSlPkuN4/mpBQlaAN6jUAE+XDaJIsIiA4VgqyrLcPyeYkKkKKHDkEQwnyH8EiCufojTtkxO7qShKT9L5bIp1Y0ImSPqAFJnZnNH8BDaXi6IYMXJqsLQXkBpEYN5DjnqJ4ugEO0SdOKE8iUgBgW6nQxKSzLtZky8CGTO6dWuF+rt7GA9iVmu0t9+nOZyYTie0MtU0Xp2TiSRVRlOlJJWV7ikVvQvjZwzzql7LnUQczyWIJMagGBLLsoy6aUT9bpeSuIZ8JhT0DPcQEeecL20SKicV4J1iPGpGBlW4lPI9e0ilKwhiQpPVVSAyozWNdJDlunMa6z+JNb5Qa+MJaWcvpN3ca1sgsl6v5x1IWG5xSjMYK5FH7QwVpQas2qeFU8ck1JwGRDMtd1E1BpdiRbsdODRzcKhLmUxheExSTyhxde0AAhfSLH1cRUIe1tYcqzUdUw9Qd3AziQoECTnSbDqFQUhMM9lAWG090YTktmz0DzTWRmRgwHCxmvxDaYwKyFxCCjuDfTAa02TlXyilYiU9ZmX0EGhlz3KOmSSs87ST0xweVrpEpNA8dM/OOBjVFZJla7m6Wjq1Glj3dQcKGL6JWiOlRXpYK0VBGeSZgcCJzqnAfFbGvCzOqllVnupnPV/dWOOj8ZiViwUx0ammWLqFztkYs5f1zZpnw/zOhGIUuTYsZAj0ZCT9GIv5cywnJNKWKKqQTnx4SkVS3sfRsxwZGvYs8pM4DOsd8As6tyi12BN8cYKuvWHuY9XU5bgeWxNUMyieJ74OTGfeAe8kCB8JcQj1RnbZgIa33HLt4UXrelsXCyadq2tF8268oxw5LwxN1/uHrLeWGgnRVFdXV0itPWeoWdtZlj51FRcpdlQw8FFd3YSvbIiMc4o1a/jryPiZ2/DM/cEYt/zODoa0cGq5ZebHIKUAp3i/4coprZVKCiXQYoD1lY116JHwEfGzXkQX4A7OBDQ8f/DOz1y2A0Jhyw5IGUhEWOHT6yBT5hYwhYIBgTdgdcNo18DJ8LnFIu1ogwNhIwpzAgJttNpzjKn3BfJ2EDqgGfMEnrgZ3vDObc0LWqDAea7zWxPSKwPvq6h6QRHBEYafeRLmBhu4JzjhyJ+wwHJYMOTV71RKbXAq3G2SBRRC9Otwm0WqAlrh2SsCKcqU+FX681tr8WDcH05azyGa9h2MeMk1ewM73V4roBEUFPqsd0p8Ju5YGi7Do2tMmHZeg1GeGGBrRxzIuO2RrklJQKV9aey+KbZzrH1Iou5fx6CPmLWBB5wzvkNkbShDmnh8W3rtO6AVvq/P5ertfHXEh0+LsvxDsoSw+50PkLYr3vpRzW0gXBvKzWkJhsPYtnGyqLK4E97YqvKVaj6jaHjXfsrz/G9EtQ9RPeqPX8hZIFWIoi299nO7b/0of/sJuN6rUIyE9+QdU5VvRth7xAP3Hw6yEqPR6LfZbHaIzwKbtb65DQhsZ3AzgryfK8EnIHsTWTiI01flj5wcLV8goVtaWjqFieOQ3/ZZv53rwJfNqdp4wm6rpd628avg9CnMrYwPAAQF/NTFsYsvRH59OBwew6J/ceFo5327dOzkQJhXFz6xis4n8OmXtoOyTRxmN5D4eTAYHAHMVzjSUNdZFaE6th3ayolgvEXsHxDtESHFVb/L7vTXrNnJbkAZJ4DOefY8FJkAPY8JUmTHwu7XdqoJzEBlr0PvD8OB37dCKhoO77nN+7AwFHEFHHkbfVM4cgD3Ht6u+Y9I5Akp/N3eHZv2Bhx6C+0LeP/QO8f/KaNwyNnhv+GG/4k10f6EI6/iv+FrWPrpQpcn0X8Up5wDWGwANuOU7lYQ4XXc3yPaLxH15+ibb0Zlq+s/AQYAsROa5xHe+YAAAAAASUVORK5CYII="

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "/assets/src/routes/go/layer/stone/white.png?29f401c5";

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCQkU2MUM2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCQkU2MUQ2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJCRTYxQTZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJCRTYxQjZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtEnsyIAAAG8SURBVHja7Fe9SgNBEM5pMCr4AmK0FGKVXovERtIpRkHFw04fQiTxIbQTxVgcAUlnFQVjZWGnIKYI0ScQ/EM4v4UpwrC3f0QP4QY+JrO3M/vt3+zEC8MwFacMpGKWhEDsBNI2nccq4RDUKlAEZoEp+tQBWkATCF73vE/TmJ7pLcDg+1BlYFrT9ZFI7PaFAAYWszwCCparewlsgUjHmQAGz0JdADnHLb4HFkCi63oIjyWDPwBVYAbIEMTvCn3rlRzFsF8BzP4Aaps1n9Kyfkf4pGm7NtinQ/jsGBNAoGGod9Z8hiDrhge2BrXGmkfg/2G6BSvMvgN8i733yUcVU0mgyOxG1LLLhPo2NDGVBOaYHTjcgEATU0kgy+y2A4G2JqaSAE+lmb9+jF6YPe4Qe4LZzzYEbplddiDAr+yNDYFrZi9RkjF9uAahFjUxlQRqzM7rUiqTE/LhWfSfpOKegE3JMywy3DlQB54AUaRMAsu07HzmVxi84FoR+ZLnOE+oGj7Hm841Ib3jJSoubEX4lFS1gG1JJjsTURK5584EiMQo7fU85XaRXr+ALl0zgToGf+t7UZr8MUkI/Jb8CDAAWH6b4LwDIB4AAAAASUVORK5CYII="

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_Toolbar__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ConfirmButton__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Go_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Go_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Go_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layer_Layer__ = __webpack_require__(160);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/Go.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
          _this.engine.info.result = r;

          _this.game.update();
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
            result: _this.engine.info.result,
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
                        var controledEngine = new __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a[_this.engine.type](Object.assign({}, _this.engine.info, {
                          result: null
                        }), _this.engine.moves.slice(0, move));
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
              type: 'pass'
            }));

            _this.setState({
              temporary: null
            });
          }
        },
        resign: function resign() {
          if (_this.engine.currentColor() === _this.state.color) {
            _this.websocket.sendMessage(JSON.stringify({
              type: 'resign'
            }));

            _this.setState({
              temporary: null
            });
          }
        },
        click: function click(i, j) {
          if (_this.engine.rules(_this.state.color, i, j)) {
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_9__Go_css___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Info__["a" /* default */], {
        black: this.state.black,
        white: this.state.white,
        turn: this.state.turn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }), this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ConfirmButton__["a" /* default */], {
        handleConfirm: this.handler.confirm,
        disable: !this.state.temporary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_9__Go_css___default.a.scoreboard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, match ? "".concat(match[1] === 'W' ? '白' : '黑', "\u80DC").concat(match[2] === 'R' ? '' : "".concat(match[2], "\u76EE")) : ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__layer_Layer__["a" /* default */], {
        moves: this.state.game.boardMoves,
        board: this.state.game.board,
        marks: this.state.marks,
        handleClick: this.handler.click,
        color: this.state.color,
        showMoves: this.state.control.showMoves,
        temporary: this.state.temporary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__toolbar_Toolbar__["a" /* default */], {
        observer: !(this.props.user && (this.props.user === this.state.black.id || this.props.user === this.state.white.id) && !this.state.result),
        maxMoves: this.state.game.maxMoves,
        handlePass: this.handler.pass,
        handleResign: this.handler.resign,
        changeMoves: this.handler.changeMoves,
        toggleMoves: this.handler.toggleMoves,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }), typeof window !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_websocket___default.a, {
        onMessage: this.connection.message,
        url: "ws://".concat(window.location.host, "/channel/").concat(this.props.id),
        reconnectIntervalInMilliSeconds: 100,
        ref: function ref(Websocket) {
          _this2.websocket = Websocket;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
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
    boardsize: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
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
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_9__Go_css___default.a))(Go));

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Info_css__ = __webpack_require__(150);
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(151);
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
/* 151 */
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
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_rangeslider__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Toolbar_css__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Toolbar_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/toolbar/Toolbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a.toolbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_rangeslider___default.a, {
          min: 0,
          max: this.props.maxMoves,
          step: 1,
          value: this.state.currentMove,
          onChange: this.setMoves,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a.buttonGroup,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "button",
          onClick: this.deltaMoves(-1),
          className: cx({
            button: true
          }),
          disabled: this.state.currentMove === 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "\u524D\u4E00\u624B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "button",
          onClick: this.deltaMoves(1),
          className: cx({
            button: true
          }),
          disabled: this.state.currentMove === this.props.maxMoves,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "\u540E\u4E00\u624B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "button",
          onClick: this.props.toggleMoves,
          className: cx({
            button: true
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "\u5F00\u5173\u624B\u6570")));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a.buttonGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        onClick: this.props.handlePass,
        className: cx({
          button: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u505C\u4E00\u624B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        onClick: this.props.handleResign,
        className: cx({
          button: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "\u8BA4\u8F93"));
    }
  }]);

  return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Toolbar, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    observer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    maxMoves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    handlePass: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleResign: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    changeMoves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    toggleMoves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Toolbar_css___default.a)(Toolbar));

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(154);
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n* Rangeslider\n*/\n.rangeslider {\n  margin: 20px 0;\n  position: relative;\n  background: #e6e6e6;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.rangeslider-vertical {\n  margin: 20px auto;\n  height: 150px;\n  max-width: 10px;\n  background-color: transparent;\n}\n.rangeslider-horizontal {\n  height: 12px;\n  border-radius: 10px;\n}\n.rangeslider__labels {\n  position: relative;\n}\n.rangeslider,\n.rangeslider .rangeslider__fill {\n  display: block;\n  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n.rangeslider .rangeslider__handle {\n  background: #fff;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n}\n.rangeslider .rangeslider__handle-tooltip {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-weight: normal;\n  font-size: 14px;\n  -webkit-transition: all 100ms ease-in;\n  -o-transition: all 100ms ease-in;\n  transition: all 100ms ease-in;\n  border-radius: 4px;\n  display: inline-block;\n  color: white;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n.rangeslider .rangeslider__handle-tooltip span {\n  margin-top: 12px;\n  display: inline-block;\n  line-height: 100%;\n}\n.rangeslider-horizontal .rangeslider__handle-tooltip {\n  top: -55px;\n}\n/**\n* Rangeslider - Horizontal slider\n*/\n.rangeslider-horizontal .rangeslider__handle {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n.rangeslider-horizontal .rangeslider__fill {\n  height: 100%;\n  background-color: #7cb342;\n  border-radius: 10px;\n  top: 0;\n}\n.rangeslider-vertical .rangeslider__fill,\n.rangeslider-vertical .rangeslider__handle {\n  position: absolute;\n}\n.rangeslider-vertical .rangeslider__fill {\n  width: 100%;\n  background-color: #7cb342;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  bottom: 0;\n}\n.rangeslider-vertical .rangeslider__handle {\n  width: 30px;\n  height: 10px;\n  left: -10px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.rangeslider-vertical .rangeslider__handle-tooltip {\n  left: -100%;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n.rangeslider__labels .rangeslider__label-item {\n  position: absolute;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  top: 10px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n.rangeslider-vertical .rangeslider__labels {\n  position: relative;\n  list-style-type: none;\n  margin: 0 0 0 24px;\n  padding: 0;\n  text-align: left;\n  width: 250px;\n  height: 100%;\n  left: 10px;\n}\n.rangeslider-horizontal .rangeslider__handle::after {\n  content: ' ';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 6px;\n  left: 6px;\n  border-radius: 50%;\n  background-color: #dadada;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n}\n.rangeslider-horizontal .rangeslider__handle-tooltip::after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 8px solid rgba(0, 0, 0, 0.8);\n  left: 50%;\n  bottom: -8px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n.rangeslider-vertical .rangeslider__handle-tooltip::after {\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(0, 0, 0, 0.8);\n  left: 100%;\n  top: 12px;\n}\n.rangeslider .rangeslider__handle-tooltip::after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {\n  right: 0;\n}\n.rangeslider-reverse.rangeslider-vertical .rangeslider__fill {\n  top: 0;\n  bottom: inherit;\n}\n.rangeslider-vertical .rangeslider__labels .rangeslider__label-item {\n  position: absolute;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n.rangeslider .rangeslider__handle .rangeslider__active {\n  opacity: 1;\n}\n.rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: black;\n  position: absolute;\n  left: -14px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: -1;\n}\n.Toolbar-button-3LOut {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#b7a3f1));\n  background: -webkit-linear-gradient(#fff, #b7a3f1);\n  background: -o-linear-gradient(#fff, #b7a3f1);\n  background: linear-gradient(#fff, #b7a3f1);\n  width: 50%;\n  height: 2.5em;\n  font-size: 1.5em;\n  border-color: #000;\n}\n.Toolbar-button-3LOut:active {\n  background: -webkit-gradient(linear, left top, left bottom, from(#b7a3f1), to(#fff));\n  background: -webkit-linear-gradient(#b7a3f1, #fff);\n  background: -o-linear-gradient(#b7a3f1, #fff);\n  background: linear-gradient(#b7a3f1, #fff);\n}\n.Toolbar-confirm-1qWo3 {\n  width: 25%;\n  height: 1.5em;\n  border-radius: 8px;\n  font-size: 1.3em;\n}\n.Toolbar-toolbar-2ioNa {\n  width: 100%;\n  height: 15vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.Toolbar-buttonGroup-2L9el {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  margin-bottom: 8%;\n}\n.Toolbar-buttonGroup-2L9el > button:first-child {\n  border-radius: 8px 0 0 8px;\n}\n.Toolbar-buttonGroup-2L9el > button:last-child {\n  border-radius: 0 8px 8px 0;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/toolbar/Toolbar.css"],"names":[],"mappings":"AAAA;;EAEE;AACF;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,8BAA8B;CAC/B;AACD;EACE,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,eAAe;EACf,uDAAuD;UAC/C,+CAA+C;CACxD;AACD;EACE,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,gFAAgF;UACxE,wEAAwE;CACjF;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,qCAAqC;EACrC,oBAAoB;EACpB,gBAAgB;EAChB,sCAAsC;EACtC,iCAAiC;EACjC,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,UAAU;EACV,2CAA2C;UACnC,mCAAmC;CAC5C;AACD;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;;EAEE;AACF;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,SAAS;EACT,8CAA8C;UACtC,sCAAsC;CAC/C;AACD;EACE,aAAa;EACb,0BAA0B;EAC1B,oBAAoB;EACpB,OAAO;CACR;AACD;;EAEE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;UACjB,iBAAiB;EACzB,UAAU;CACX;AACD;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;EACE,YAAY;EACZ,SAAS;EACT,8CAA8C;UACtC,sCAAsC;CAC/C;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB;EACtB,UAAU;EACV,2CAA2C;UACnC,mCAAmC;CAC5C;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,WAAW;CACZ;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,0BAA0B;EAC1B,4FAA4F;UACpF,oFAAoF;CAC7F;AACD;EACE,mCAAmC;EACnC,oCAAoC;EACpC,yCAAyC;EACzC,UAAU;EACV,aAAa;EACb,2CAA2C;UACnC,mCAAmC;CAC5C;AACD;EACE,kCAAkC;EAClC,qCAAqC;EACrC,0CAA0C;EAC1C,WAAW;EACX,UAAU;CACX;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,UAAU;CACX;AACD;EACE,SAAS;CACV;AACD;EACE,OAAO;EACP,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,2CAA2C;UACnC,mCAAmC;CAC5C;AACD;EACE,WAAW;CACZ;AACD;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,oCAAoC;MAChC,gCAAgC;UAC5B,4BAA4B;EACpC,YAAY;CACb;AACD;EACE,qFAAqF;EACrF,mDAAmD;EACnD,8CAA8C;EAC9C,2CAA2C;EAC3C,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,qFAAqF;EACrF,mDAAmD;EACnD,8CAA8C;EAC9C,2CAA2C;CAC5C;AACD;EACE,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;CAC5B;AACD;EACE,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,wBAAwB;EAC5B,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,2BAA2B;CAC5B","file":"Toolbar.css","sourcesContent":["/**\n* Rangeslider\n*/\n:global(.rangeslider) {\n  margin: 20px 0;\n  position: relative;\n  background: #e6e6e6;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n:global(.rangeslider-vertical) {\n  margin: 20px auto;\n  height: 150px;\n  max-width: 10px;\n  background-color: transparent;\n}\n:global(.rangeslider-horizontal) {\n  height: 12px;\n  border-radius: 10px;\n}\n:global(.rangeslider__labels) {\n  position: relative;\n}\n:global(.rangeslider),\n:global(.rangeslider .rangeslider__fill) {\n  display: block;\n  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n:global(.rangeslider .rangeslider__handle) {\n  background: #fff;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n}\n:global(.rangeslider .rangeslider__handle-tooltip) {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-weight: normal;\n  font-size: 14px;\n  -webkit-transition: all 100ms ease-in;\n  -o-transition: all 100ms ease-in;\n  transition: all 100ms ease-in;\n  border-radius: 4px;\n  display: inline-block;\n  color: white;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n:global(.rangeslider .rangeslider__handle-tooltip span) {\n  margin-top: 12px;\n  display: inline-block;\n  line-height: 100%;\n}\n:global(.rangeslider-horizontal .rangeslider__handle-tooltip) {\n  top: -55px;\n}\n/**\n* Rangeslider - Horizontal slider\n*/\n:global(.rangeslider-horizontal .rangeslider__handle) {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n:global(.rangeslider-horizontal .rangeslider__fill) {\n  height: 100%;\n  background-color: #7cb342;\n  border-radius: 10px;\n  top: 0;\n}\n:global(.rangeslider-vertical .rangeslider__fill),\n:global(.rangeslider-vertical .rangeslider__handle) {\n  position: absolute;\n}\n:global(.rangeslider-vertical .rangeslider__fill) {\n  width: 100%;\n  background-color: #7cb342;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  bottom: 0;\n}\n:global(.rangeslider-vertical .rangeslider__handle) {\n  width: 30px;\n  height: 10px;\n  left: -10px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n:global(.rangeslider-vertical .rangeslider__handle-tooltip) {\n  left: -100%;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n:global(.rangeslider__labels .rangeslider__label-item) {\n  position: absolute;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  top: 10px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n:global(.rangeslider-vertical .rangeslider__labels) {\n  position: relative;\n  list-style-type: none;\n  margin: 0 0 0 24px;\n  padding: 0;\n  text-align: left;\n  width: 250px;\n  height: 100%;\n  left: 10px;\n}\n:global(.rangeslider-horizontal .rangeslider__handle::after) {\n  content: ' ';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 6px;\n  left: 6px;\n  border-radius: 50%;\n  background-color: #dadada;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n}\n:global(.rangeslider-horizontal .rangeslider__handle-tooltip::after) {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 8px solid rgba(0, 0, 0, 0.8);\n  left: 50%;\n  bottom: -8px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n:global(.rangeslider-vertical .rangeslider__handle-tooltip::after) {\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(0, 0, 0, 0.8);\n  left: 100%;\n  top: 12px;\n}\n:global(.rangeslider .rangeslider__handle-tooltip::after) {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n:global(.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill) {\n  right: 0;\n}\n:global(.rangeslider-reverse.rangeslider-vertical .rangeslider__fill) {\n  top: 0;\n  bottom: inherit;\n}\n:global(.rangeslider-vertical .rangeslider__labels .rangeslider__label-item) {\n  position: absolute;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n:global(.rangeslider .rangeslider__handle .rangeslider__active) {\n  opacity: 1;\n}\n:global(.rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before) {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: black;\n  position: absolute;\n  left: -14px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: -1;\n}\n.button {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#b7a3f1));\n  background: -webkit-linear-gradient(#fff, #b7a3f1);\n  background: -o-linear-gradient(#fff, #b7a3f1);\n  background: linear-gradient(#fff, #b7a3f1);\n  width: 50%;\n  height: 2.5em;\n  font-size: 1.5em;\n  border-color: #000;\n}\n.button:active {\n  background: -webkit-gradient(linear, left top, left bottom, from(#b7a3f1), to(#fff));\n  background: -webkit-linear-gradient(#b7a3f1, #fff);\n  background: -o-linear-gradient(#b7a3f1, #fff);\n  background: linear-gradient(#b7a3f1, #fff);\n}\n.confirm {\n  width: 25%;\n  height: 1.5em;\n  border-radius: 8px;\n  font-size: 1.3em;\n}\n.toolbar {\n  width: 100%;\n  height: 15vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.buttonGroup {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  margin-bottom: 8%;\n}\n.buttonGroup > button:first-child {\n  border-radius: 8px 0 0 8px;\n}\n.buttonGroup > button:last-child {\n  border-radius: 0 8px 8px 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"button": "Toolbar-button-3LOut",
	"confirm": "Toolbar-confirm-1qWo3",
	"toolbar": "Toolbar-toolbar-2ioNa",
	"buttonGroup": "Toolbar-buttonGroup-2L9el"
};

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css__ = __webpack_require__(156);
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(157);
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
/* 157 */
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(159);
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".Go-container-r_vGR {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 6%;\n  height: 100vh;\n  background: -webkit-radial-gradient(#2e1f59, #16102b) !important;\n  background: -o-radial-gradient(#2e1f59, #16102b) !important;\n  background: radial-gradient(#2e1f59, #16102b) !important;\n}\n\n.Go-container-r_vGR > div {\n  margin-top: 4%;\n}\n\n.Go-scoreboard-3lFG9 {\n  color: white;\n  margin-top: 0 !important;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/Go.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,sBAAsB;MAClB,kBAAkB;EACtB,qBAAqB;MACjB,4BAA4B;EAChC,uBAAuB;MACnB,oBAAoB;EACxB,cAAc;EACd,cAAc;EACd,iEAAiE;EACjE,4DAA4D;EAC5D,yDAAyD;CAC1D;;AAED;EACE,eAAe;CAChB;;AAED;EACE,aAAa;EACb,yBAAyB;CAC1B","file":"Go.css","sourcesContent":[".container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 6%;\n  height: 100vh;\n  background: -webkit-radial-gradient(#2e1f59, #16102b) !important;\n  background: -o-radial-gradient(#2e1f59, #16102b) !important;\n  background: radial-gradient(#2e1f59, #16102b) !important;\n}\n\n.container > div {\n  margin-top: 4%;\n}\n\n.scoreboard {\n  color: white;\n  margin-top: 0 !important;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "Go-container-r_vGR",
	"scoreboard": "Go-scoreboard-3lFG9"
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_BackgroundLayer__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_LineLayer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highlight_HighlightLayer__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stone_StoneLayer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__move_MoveLayer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_EventLayer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mark_MarkLayer__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Layer_css__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Layer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Layer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/Layer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * @author lookis on 17/01/2018
 */












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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_10__Layer_css___default.a.layers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__background_BackgroundLayer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__highlight_HighlightLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        listenerRegister: this.listenerRegister,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__line_LineLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__stone_StoneLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        listenerRegister: this.listenerRegister,
        board: this.props.board,
        handleClick: this.props.handleClick,
        temporary: this.props.temporary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__mark_MarkLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        marks: this.props.marks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), this.props.showMoves && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__move_MoveLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        board: this.props.board,
        moves: this.props.moves,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__event_EventLayer__["a" /* default */], {
        boardsize: this.props.board.length,
        click: this.handler('click'),
        touchStart: this.handler('touchStart'),
        touchMove: this.handler('touchMove'),
        touchEnd: this.handler('touchEnd'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }));
    }
  }]);

  return Layer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Layer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number)).isRequired,
    moves: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number)).isRequired,
    marks: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string)).isRequired,
    showMoves: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    temporary: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
      position: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number).isRequired
    })
  }
});
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
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/background/BackgroundLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: bgCx({
          layer: true,
          background: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }]);

  return BackgroundLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__BackgroundLayer_css___default.a)(BackgroundLayer));

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(163);
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(126);
exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".BackgroundLayer-layer-1rVFt {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.BackgroundLayer-boardrow-2XZLw {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BackgroundLayer-background-DEUcU {\n  background-image: url(" + escape(__webpack_require__(164)) + ");\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/background/BackgroundLayer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,8BAA8B;MAC1B,iBAAiB;EACrB,qBAAqB;EACrB,cAAc;CACf;;AAED;EACE,gDAA2C;CAC5C","file":"BackgroundLayer.css","sourcesContent":[".layer {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.boardrow {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.background {\n  background-image: url('../../goboard.jpg');\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"layer": "BackgroundLayer-layer-1rVFt",
	"boardrow": "BackgroundLayer-boardrow-2XZLw",
	"background": "BackgroundLayer-background-DEUcU"
};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "/assets/src/routes/go/goboard.jpg?0f28f248";

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LineIntersection__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LineLayer_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LineLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__LineLayer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/line/LineLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__LineIntersection__["a" /* default */], {
        key: "".concat(i, ",").concat(j),
        star: this.isItemInArray(this.stars, [i, j]),
        classNames: {
          lastLine: i === this.props.boardsize - 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return LineLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(LineLayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    boardsize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__LineLayer_css___default.a)(LineLayer));

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LineIntersection_css__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LineIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__LineIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/line/LineIntersection.js";

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
        }, this.props.classNames)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      });
    }
  }]);

  return LineIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(LineIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    star: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
    classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      lastLine: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
    }).isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__LineIntersection_css___default.a)(LineIntersection));

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(168);
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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".LineIntersection-intersection-aFWmk {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.LineIntersection-line-1QXHI::before {\n  opacity: 1;\n  border-top: 1px #000 solid;\n  content: '';\n  z-index: -1;\n  width: 100%;\n  display: block;\n  margin-top: 50%;\n  margin-left: 50%;\n}\n\n.LineIntersection-line-1QXHI:last-child::before {\n  border-top: 1px rgba(0, 0, 0, 0) solid;\n}\n\n.LineIntersection-line-1QXHI::after {\n  opacity: 1;\n  border-left: 1px #000 solid;\n  content: ' ';\n  z-index: -1;\n  height: 100%;\n  display: block;\n  margin-left: 50%;\n}\n\n.LineIntersection-star-2pqiF {\n  border-radius: 50%;\n  background: -webkit-radial-gradient(black 20%, transparent 20%);\n  background: -o-radial-gradient(black 20%, transparent 20%);\n  background: radial-gradient(black 20%, transparent 20%);\n  background-position: 1px 1px;\n}\n\n.LineIntersection-lastLine-7cXHx::after {\n  border-left: 0;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/line/LineIntersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB;;AAED;EACE,WAAW;EACX,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,uCAAuC;CACxC;;AAED;EACE,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,gEAAgE;EAChE,2DAA2D;EAC3D,wDAAwD;EACxD,6BAA6B;CAC9B;;AAED;EACE,eAAe;CAChB","file":"LineIntersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.line::before {\n  opacity: 1;\n  border-top: 1px #000 solid;\n  content: '';\n  z-index: -1;\n  width: 100%;\n  display: block;\n  margin-top: 50%;\n  margin-left: 50%;\n}\n\n.line:last-child::before {\n  border-top: 1px rgba(0, 0, 0, 0) solid;\n}\n\n.line::after {\n  opacity: 1;\n  border-left: 1px #000 solid;\n  content: ' ';\n  z-index: -1;\n  height: 100%;\n  display: block;\n  margin-left: 50%;\n}\n\n.star {\n  border-radius: 50%;\n  background: -webkit-radial-gradient(black 20%, transparent 20%);\n  background: -o-radial-gradient(black 20%, transparent 20%);\n  background: radial-gradient(black 20%, transparent 20%);\n  background-position: 1px 1px;\n}\n\n.lastLine::after {\n  border-left: 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "LineIntersection-intersection-aFWmk",
	"line": "LineIntersection-line-1QXHI",
	"star": "LineIntersection-star-2pqiF",
	"lastLine": "LineIntersection-lastLine-7cXHx"
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(170);
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".LineLayer-layer-1i_JF {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.LineLayer-boardrow-3-Giy {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/line/LineLayer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,8BAA8B;MAC1B,iBAAiB;EACrB,qBAAqB;EACrB,cAAc;CACf","file":"LineLayer.css","sourcesContent":[".layer {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.boardrow {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"layer": "LineLayer-layer-1i_JF",
	"boardrow": "LineLayer-boardrow-3-Giy"
};

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HighlightIntersection__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/highlight/HighlightLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HighlightIntersection__["a" /* default */], {
        key: "".concat(i, ",").concat(j),
        row: i,
        col: j,
        classNames: {
          highlight: j === highlight[1] || i === highlight[0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return HighlightLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(HighlightLayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    boardsize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    listenerRegister: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__HighlightLayer_css___default.a)(HighlightLayer));

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/highlight/HighlightIntersection.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx(_extends({
          intersection: true
        }, this.props.classNames)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    }
  }]);

  return HighlightIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(HighlightIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    row: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    col: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    classNames: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      highlight: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired
    }).isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__HighlightIntersection_css___default.a)(HighlightIntersection));

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(174);
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".HighlightIntersection-intersection-Omtl7 {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.HighlightIntersection-highlight-2gC7x {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/highlight/HighlightIntersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB;;AAED;EACE,qCAAqC;CACtC","file":"HighlightIntersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.highlight {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "HighlightIntersection-intersection-Omtl7",
	"highlight": "HighlightIntersection-highlight-2gC7x"
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(176);
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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".HighlightLayer-layer-3k527 {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.HighlightLayer-boardrow-n34La {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/highlight/HighlightLayer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,8BAA8B;MAC1B,iBAAiB;EACrB,qBAAqB;EACrB,cAAc;CACf","file":"HighlightLayer.css","sourcesContent":[".layer {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.boardrow {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"layer": "HighlightLayer-layer-3k527",
	"boardrow": "HighlightLayer-boardrow-n34La"
};

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StoneIntersection__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(124);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/stone/StoneLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__StoneIntersection__["a" /* default */], {
        key: "".concat(i, ",").concat(j),
        row: i,
        col: j,
        classNames: {
          black: this.props.board[i][j] === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK || temporary && !!this.props.temporary && this.props.temporary.color === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK,
          white: this.props.board[i][j] === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE || temporary && !!this.props.temporary && this.props.temporary.color === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE,
          temporary: temporary
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return StoneLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(StoneLayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    boardsize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number)).isRequired,
    listenerRegister: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    temporary: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
      position: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number).isRequired
    })
  }
});
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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".BoardLayer-layer-4qWkE {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.BoardLayer-boardrow-3__Nz {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/BoardLayer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,8BAA8B;MAC1B,iBAAiB;EACrB,qBAAqB;EACrB,cAAc;CACf","file":"BoardLayer.css","sourcesContent":[".layer {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: no-repeat center/cover;\n  position: absolute;\n  width: 100%;\n}\n\n.boardrow {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"layer": "BoardLayer-layer-4qWkE",
	"boardrow": "BoardLayer-boardrow-3__Nz"
};

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/stone/StoneIntersection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx(_extends({
          intersection: true
        }, this.props.classNames)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    }
  }]);

  return StoneIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(StoneIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    row: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    col: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    classNames: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      black: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
      white: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
      temporary: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired
    }).isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__StoneIntersection_css___default.a)(StoneIntersection));

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(181);
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(126);
exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".StoneIntersection-intersection-1EuLX {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.StoneIntersection-black-2mAoN,\n.StoneIntersection-white-2t8S_ {\n  background: no-repeat center/cover;\n  border-radius: 50%;\n}\n\n.StoneIntersection-black-2mAoN::before,\n.StoneIntersection-white-2t8S_::before {\n  width: 50%;\n  margin-left: 100%;\n}\n\n.StoneIntersection-black-2mAoN::after,\n.StoneIntersection-white-2t8S_::after {\n  height: 58%;\n  margin-top: 42%;\n}\n\n.StoneIntersection-black-2mAoN {\n  background-image: url(" + escape(__webpack_require__(128)) + ");\n}\n\n.StoneIntersection-white-2t8S_ {\n  background-image: url(" + escape(__webpack_require__(129)) + ");\n}\n\n.StoneIntersection-temporary-3U4gy.StoneIntersection-black-2mAoN {\n  background-image: url(" + escape(__webpack_require__(130)) + "), url(" + escape(__webpack_require__(128)) + ");\n}\n\n.StoneIntersection-temporary-3U4gy.StoneIntersection-white-2t8S_ {\n  background-image: url(" + escape(__webpack_require__(130)) + "), url(" + escape(__webpack_require__(129)) + ");\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/stone/StoneIntersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB;;AAED;;EAEE,mCAAmC;EACnC,mBAAmB;CACpB;;AAED;;EAEE,WAAW;EACX,kBAAkB;CACnB;;AAED;;EAEE,YAAY;EACZ,gBAAgB;CACjB;;AAED;EACE,gDAAqC;CACtC;;AAED;EACE,gDAAqC;CACtC;;AAED;EACE,+EAA0D;CAC3D;;AAED;EACE,+EAA0D;CAC3D","file":"StoneIntersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.black,\n.white {\n  background: no-repeat center/cover;\n  border-radius: 50%;\n}\n\n.black::before,\n.white::before {\n  width: 50%;\n  margin-left: 100%;\n}\n\n.black::after,\n.white::after {\n  height: 58%;\n  margin-top: 42%;\n}\n\n.black {\n  background-image: url('./black.png');\n}\n\n.white {\n  background-image: url('./white.png');\n}\n\n.temporary.black {\n  background-image: url('./choose.png'), url('./black.png');\n}\n\n.temporary.white {\n  background-image: url('./choose.png'), url('./white.png');\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "StoneIntersection-intersection-1EuLX",
	"black": "StoneIntersection-black-2mAoN",
	"white": "StoneIntersection-white-2t8S_",
	"temporary": "StoneIntersection-temporary-3U4gy"
};

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MoveIntersection__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/move/MoveLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection__["a" /* default */], {
        key: "".concat(i, ",").concat(j),
        row: i,
        col: j,
        stone: this.props.board[i][j],
        value: this.props.moves[i][j],
        boardsize: this.props.boardsize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return MoveLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(MoveLayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    boardsize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    moves: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number)).isRequired,
    board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number)).isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default.a)(MoveLayer));

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/move/MoveIntersection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          transform: "translateY(-50%) scale(calc(1.6 - ".concat(this.props.boardsize / 20, "))")
        },
        className: cx({
          number: true,
          black: this.props.stone === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.WHITE,
          white: this.props.stone === __WEBPACK_IMPORTED_MODULE_4_game_engine___default.a.Go.COLOR.BLACK
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.props.value !== 0 ? this.props.value : ''));
    }
  }]);

  return MoveIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(MoveIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    row: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    col: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    stone: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    boardsize: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__MoveIntersection_css___default.a)(MoveIntersection));

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(185);
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".MoveIntersection-intersection-3U1JR {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.MoveIntersection-white-1QWrn {\n  color: white;\n}\n\n.MoveIntersection-black-23ss0 {\n  color: black;\n}\n\n.MoveIntersection-number-3voXz {\n  text-align: center;\n  position: relative;\n  top: 50%;\n  left: -0.5vw;\n}\n\n.MoveIntersection-intersection-3U1JR {\n  overflow-x: hidden;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/move/MoveIntersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB;;AAED;EACE,aAAa;CACd;;AAED;EACE,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,aAAa;CACd;;AAED;EACE,mBAAmB;CACpB","file":"MoveIntersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.white {\n  color: white;\n}\n\n.black {\n  color: black;\n}\n\n.number {\n  text-align: center;\n  position: relative;\n  top: 50%;\n  left: -0.5vw;\n}\n\n.intersection {\n  overflow-x: hidden;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "MoveIntersection-intersection-3U1JR",
	"white": "MoveIntersection-white-1QWrn",
	"black": "MoveIntersection-black-23ss0",
	"number": "MoveIntersection-number-3voXz"
};

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventIntersection__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/event/EventLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
          row.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__EventIntersection__["a" /* default */], {
            row: i,
            col: j,
            key: "".concat(i, ",").concat(j),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }));
        }

        intersections.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: i,
          className: cx({
            boardrow: true
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, row));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.onClick,
        onTouchStart: this.handler('touchStart'),
        onTouchMove: this.handler('touchMove'),
        onTouchEnd: this.handler('touchEnd'),
        className: cx({
          layer: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, intersections);
    }
  }]);

  return EventLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(EventLayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    boardsize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    touchStart: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    touchMove: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    touchEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    click: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__BoardLayer_css___default.a)(EventLayer));

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Intersection_css__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Intersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Intersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/event/EventIntersection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx({
          intersection: true
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }]);

  return EventIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(EventIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    row: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    col: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Intersection_css___default.a)(EventIntersection));

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(189);
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
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".Intersection-intersection-34vW8 {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/Intersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB","file":"Intersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "Intersection-intersection-34vW8"
};

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkIntersection__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/mark/MarkLayer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection__["a" /* default */], {
          key: "".concat(i, ",").concat(j),
          row: i,
          col: j,
          mark: this.props.marks[i][j],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection__["a" /* default */], {
        key: "".concat(i, ",").concat(j),
        row: i,
        col: j,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].render(this.props.boardsize, cx, this.intersection);
    }
  }]);

  return MarkLayer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(MarkLayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    boardsize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    marks: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string)).isRequired
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__BoardLayer_css___default.a)(MarkLayer));

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__MarkIntersection_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/go/layer/mark/MarkIntersection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "data-offset-x": this.props.row,
        "data-offset-y": this.props.col,
        className: cx(_defineProperty({
          intersection: true,
          mark: true
        }, this.props.mark, true)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });
    }
  }]);

  return MarkIntersection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(MarkIntersection, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    row: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    col: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
    mark: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  }
});
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
/* 192 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(193);
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
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(126);
exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".MarkIntersection-intersection-1vznG {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.MarkIntersection-choose-3OWtQ {\n  background: no-repeat center/cover url(" + escape(__webpack_require__(194)) + ");\n  border-radius: 50%;\n}\n\n.MarkIntersection-mark-1UWT1::before {\n  width: 50%;\n  margin-left: 100%;\n}\n\n.MarkIntersection-mark-1UWT1::after {\n  height: 58%;\n  margin-top: 42%;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/mark/MarkIntersection.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;MAC1B,iBAAiB;CACtB;;AAED;EACE,iEAAuD;EACvD,mBAAmB;CACpB;;AAED;EACE,WAAW;EACX,kBAAkB;CACnB;;AAED;EACE,YAAY;EACZ,gBAAgB;CACjB","file":"MarkIntersection.css","sourcesContent":[".intersection {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n\n.choose {\n  background: no-repeat center/cover url('./choose.png');\n  border-radius: 50%;\n}\n\n.mark::before {\n  width: 50%;\n  margin-left: 100%;\n}\n\n.mark::after {\n  height: 58%;\n  margin-top: 42%;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"intersection": "MarkIntersection-intersection-1vznG",
	"choose": "MarkIntersection-choose-3OWtQ",
	"mark": "MarkIntersection-mark-1UWT1"
};

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCQkU2MUM2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCQkU2MUQ2RTU4MTFFNTgyNjk5NTREMEM4MURGNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJCRTYxQTZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJCRTYxQjZFNTgxMUU1ODI2OTk1NEQwQzgxREY2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtEnsyIAAAG8SURBVHja7Fe9SgNBEM5pMCr4AmK0FGKVXovERtIpRkHFw04fQiTxIbQTxVgcAUlnFQVjZWGnIKYI0ScQ/EM4v4UpwrC3f0QP4QY+JrO3M/vt3+zEC8MwFacMpGKWhEDsBNI2nccq4RDUKlAEZoEp+tQBWkATCF73vE/TmJ7pLcDg+1BlYFrT9ZFI7PaFAAYWszwCCparewlsgUjHmQAGz0JdADnHLb4HFkCi63oIjyWDPwBVYAbIEMTvCn3rlRzFsF8BzP4Aaps1n9Kyfkf4pGm7NtinQ/jsGBNAoGGod9Z8hiDrhge2BrXGmkfg/2G6BSvMvgN8i733yUcVU0mgyOxG1LLLhPo2NDGVBOaYHTjcgEATU0kgy+y2A4G2JqaSAE+lmb9+jF6YPe4Qe4LZzzYEbplddiDAr+yNDYFrZi9RkjF9uAahFjUxlQRqzM7rUiqTE/LhWfSfpOKegE3JMywy3DlQB54AUaRMAsu07HzmVxi84FoR+ZLnOE+oGj7Hm841Ib3jJSoubEX4lFS1gG1JJjsTURK5584EiMQo7fU85XaRXr+ALl0zgToGf+t7UZr8MUkI/Jb8CDAAWH6b4LwDIB4AAAAASUVORK5CYII="

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(196);
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, ".Layer-layers-16CDK {\n  position: relative;\n  width: 85vw; /* 1:1 Aspect Ratio */\n  height: 85vw;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/go/layer/Layer.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,YAAY,CAAC,sBAAsB;EACnC,aAAa;CACd","file":"Layer.css","sourcesContent":[".layers {\n  position: relative;\n  width: 85vw; /* 1:1 Aspect Ratio */\n  height: 85vw;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"layers": "Layer-layers-16CDK"
};

/***/ }),
/* 197 */
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
/* 198 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2dvLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz80YWUyIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz81YmJhIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcz9iNmZmIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcz9iNGU3IiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9XZWNoYXQvV2VjaGF0LmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9XZWNoYXQvd2VjaGF0LmdyYXBocWwiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvdXRpbHMuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvQm9hcmRMYXllci5jc3MiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL3N0b25lL2JsYWNrLnBuZyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9zdG9uZS93aGl0ZS5wbmciLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvY2hvb3NlLnBuZyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9Hby5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9JbmZvLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0luZm8uY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vSW5mby5jc3M/MDIxNiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby90b29sYmFyL1Rvb2xiYXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vdG9vbGJhci9Ub29sYmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2dvL3Rvb2xiYXIvVG9vbGJhci5jc3M/YmU5OCIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9Db25maXJtQnV0dG9uLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9CdXR0b24uY3NzPzk3MzIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vR28uY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vR28uY3NzPzY2N2EiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvTGF5ZXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvYmFja2dyb3VuZC9CYWNrZ3JvdW5kTGF5ZXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvYmFja2dyb3VuZC9CYWNrZ3JvdW5kTGF5ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvYmFja2dyb3VuZC9CYWNrZ3JvdW5kTGF5ZXIuY3NzPzQ0ZDAiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vZ29ib2FyZC5qcGciLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbGluZS9MaW5lTGF5ZXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbGluZS9MaW5lSW50ZXJzZWN0aW9uLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL2xpbmUvTGluZUludGVyc2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9sYXllci9saW5lL0xpbmVJbnRlcnNlY3Rpb24uY3NzP2M1ZjYiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbGluZS9MaW5lTGF5ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbGluZS9MaW5lTGF5ZXIuY3NzP2NlOGEiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvaGlnaGxpZ2h0L0hpZ2hsaWdodExheWVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL2hpZ2hsaWdodC9IaWdobGlnaHRJbnRlcnNlY3Rpb24uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvaGlnaGxpZ2h0L0hpZ2hsaWdodEludGVyc2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9sYXllci9oaWdobGlnaHQvSGlnaGxpZ2h0SW50ZXJzZWN0aW9uLmNzcz85ZTk0IiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL2hpZ2hsaWdodC9IaWdobGlnaHRMYXllci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9sYXllci9oaWdobGlnaHQvSGlnaGxpZ2h0TGF5ZXIuY3NzP2E1MTYiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvU3RvbmVMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2dvL2xheWVyL0JvYXJkTGF5ZXIuY3NzPzY3MjYiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvU3RvbmVJbnRlcnNlY3Rpb24uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvU3RvbmVJbnRlcnNlY3Rpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvU3RvbmVJbnRlcnNlY3Rpb24uY3NzPzI1ZDYiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbW92ZS9Nb3ZlTGF5ZXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbW92ZS9Nb3ZlSW50ZXJzZWN0aW9uLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL21vdmUvTW92ZUludGVyc2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9sYXllci9tb3ZlL01vdmVJbnRlcnNlY3Rpb24uY3NzPzMwODgiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvZXZlbnQvRXZlbnRMYXllci5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9ldmVudC9FdmVudEludGVyc2VjdGlvbi5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9JbnRlcnNlY3Rpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvSW50ZXJzZWN0aW9uLmNzcz8zMGRmIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL21hcmsvTWFya0xheWVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL21hcmsvTWFya0ludGVyc2VjdGlvbi5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9tYXJrL01hcmtJbnRlcnNlY3Rpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbWFyay9NYXJrSW50ZXJzZWN0aW9uLmNzcz9kOTU0IiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL21hcmsvY2hvb3NlLnBuZyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9MYXllci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9nby9sYXllci9MYXllci5jc3M/ZGM3MyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9pbnZpdGUuZ3JhcGhxbCIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9nby5ncmFwaHFsIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMjQvMTIvMjAxN1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvIGZyb20gJy4vR28nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgdXBkYXRlR28gZnJvbSAnLi9pbnZpdGUuZ3JhcGhxbCc7XG5pbXBvcnQgcXVlcnlHbyBmcm9tICcuL2dvLmdyYXBocWwnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBxdWVyeTogeyBpZCwgaW52aXRlIH0sIHN0b3JlLCBjbGllbnQgfSkge1xuICBpZiAoaW52aXRlID09PSAnYmxhY2snIHx8IGludml0ZSA9PT0gJ3doaXRlJykge1xuICAgIGNsaWVudC5tdXRhdGUoe1xuICAgICAgbXV0YXRpb246IHVwZGF0ZUdvLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGlkLFxuICAgICAgICBjb2xvcjogaW52aXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogcXVlcnlHbyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2dvJ10sXG4gICAgdGl0bGU6XG4gICAgICBkYXRhLmdvLmVuZ2luZSA9PT0gJ0dvJyA/ICflr7nlsYDkuK0nIDogYOWQg+WtkOajiygke2RhdGEuZ28uaW5mby5nb2FsfeWtkClgLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEdvXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGJvYXJkc2l6ZT17ZGF0YS5nby5pbmZvLmJvYXJkc2l6ZX1cbiAgICAgICAgICB1c2VyPXtzdG9yZS5nZXRTdGF0ZSgpLnVzZXIgJiYgc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmlkfVxuICAgICAgICAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vaW5kZXguanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG4vLyBleHRlcm5hbC1nbG9iYWwgc3R5bGVzIG11c3QgYmUgaW1wb3J0ZWQgaW4geW91ciBKUy5cbmltcG9ydCBub3JtYWxpemVDc3MgZnJvbSAnbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgcyBmcm9tICcuL0xheW91dC5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xuaW1wb3J0IFdlY2hhdCBmcm9tICcuLi9XZWNoYXQnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8V2VjaGF0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobm9ybWFsaXplQ3NzLCBzKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0xIS4uL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9ub3JtYWxpemUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTEhLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMSEuLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0RUFBNEU7O0FBRTVFO2dGQUNnRjs7QUFFaEY7Ozs7R0FJRzs7QUFFSDtFQUNFLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQywrQkFBK0IsQ0FBQyxPQUFPO0NBQ3hDOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7OztFQU1FLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7T0FFTyxPQUFPO0VBQ1osZUFBZTtDQUNoQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCLENBQUMsT0FBTztFQUN4QyxVQUFVLENBQUMsT0FBTztFQUNsQixrQkFBa0IsQ0FBQyxPQUFPO0NBQzNCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHNDQUFzQyxDQUFDLE9BQU87Q0FDL0M7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usb0JBQW9CLENBQUMsT0FBTztFQUM1QiwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLDBDQUEwQztVQUNsQyxrQ0FBa0MsQ0FBQyxPQUFPO0NBQ25EOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHFCQUFxQjtDQUN0Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxvQkFBb0I7Q0FDckI7O0FBRUQ7OztHQUdHOztBQUVIOzs7RUFHRSxrQ0FBa0MsQ0FBQyxPQUFPO0VBQzFDLGVBQWUsQ0FBQyxPQUFPO0NBQ3hCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIOztFQUVFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxVQUFVO0NBQ1g7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7Ozs7O0VBS0Usd0JBQXdCLENBQUMsT0FBTztFQUNoQyxnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLGtCQUFrQixDQUFDLE9BQU87RUFDMUIsVUFBVSxDQUFDLE9BQU87Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1FBQ1EsT0FBTztFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7U0FDUyxPQUFPO0VBQ2QscUJBQXFCO0NBQ3RCOztBQUVEOzs7O0dBSUc7O0FBRUg7Ozs7RUFJRSwyQkFBMkIsQ0FBQyxPQUFPO0NBQ3BDOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLCtCQUErQjtDQUNoQzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDs7Ozs7R0FLRzs7QUFFSDtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUIsQ0FBQyxPQUFPO0VBQ3ZDLGVBQWUsQ0FBQyxPQUFPO0VBQ3ZCLGVBQWUsQ0FBQyxPQUFPO0VBQ3ZCLGdCQUFnQixDQUFDLE9BQU87RUFDeEIsV0FBVyxDQUFDLE9BQU87RUFDbkIsb0JBQW9CLENBQUMsT0FBTztDQUM3Qjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSxzQkFBc0IsQ0FBQyxPQUFPO0VBQzlCLHlCQUF5QixDQUFDLE9BQU87Q0FDbEM7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSwrQkFBK0I7VUFDdkIsdUJBQXVCLENBQUMsT0FBTztFQUN2QyxXQUFXLENBQUMsT0FBTztDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxhQUFhO0NBQ2Q7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxxQkFBcUIsQ0FBQyxPQUFPO0NBQzlCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHlCQUF5QjtDQUMxQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGNBQWMsQ0FBQyxPQUFPO0NBQ3ZCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsY0FBYztDQUNmXCIsXCJmaWxlXCI6XCJub3JtYWxpemUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wic291cmNlTWFwXCI6dHJ1ZSxcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTGF5b3V0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9MYXlvdXQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTGF5b3V0LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi8qXFxuICogbm9ybWFsaXplLmNzcyBpcyBpbXBvcnRlZCBpbiBKUyBmaWxlLlxcbiAqIElmIHlvdSBpbXBvcnQgZXh0ZXJuYWwgQ1NTIGZpbGUgZnJvbSB5b3VyIGludGVybmFsIENTU1xcbiAqIHRoZW4gaXQgd2lsbCBiZSBpbmxpbmVkIGFuZCBwcm9jZXNzZWQgd2l0aCBDU1MgbW9kdWxlcy5cXG4gKi9cXG5cXG4vKlxcbiAqIEJhc2Ugc3R5bGVzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5odG1sIHtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIaXJhZ2lubyBTYW5zIEdCJywgJ01pY3Jvc29mdCBZYUhlaScsICdTVEhlaXRpJywgJ1NpbUhlaScsICdXZW5RdWFuWWkgTWljcm8gSGVpJywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTsgLyogfjIycHggKi9cXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmJyb3dzZXJ1cGdyYWRlIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7Q0FDL007O0FBRUQ7Ozs7R0FJRzs7QUFFSDs7Z0ZBRWdGOztBQUVoRjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCLENBQUMsWUFBWTtFQUM3QixxSEFBcUg7RUFDckgsbUJBQW1CLENBQUMsV0FBVztFQUMvQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7Ozs7OztHQU1HOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDs7OztHQUlHOztBQUVIOzs7Ozs7RUFNRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7Z0ZBRWdGOztBQUVoRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDs7OztnRkFJZ0Y7O0FBRWhGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuXFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDEycHg7IC8qIH4xNnB4OyAqL1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGlyYWdpbm8gU2FucyBHQicsICdNaWNyb3NvZnQgWWFIZWknLCAnU1RIZWl0aScsICdTaW1IZWknLCAnV2VuUXVhbllpIE1pY3JvIEhlaScsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7IC8qIH4yMnB4ICovXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDc0YzI7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRleHQtc2hhZG93IGluIHNlbGVjdGlvbiBoaWdobGlnaHQ6XFxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXFxuICpcXG4gKiBUaGVzZSBzZWxlY3Rpb24gcnVsZSBzZXRzIGhhdmUgdG8gYmUgc2VwYXJhdGUuXFxuICogQ3VzdG9taXplIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHlvdXIgZGVzaWduLlxcbiAqL1xcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQSBiZXR0ZXIgbG9va2luZyBkZWZhdWx0IGhvcml6b250YWwgcnVsZVxcbiAqL1xcblxcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcXG4gKiBpbWFnZXMsIHZpZGVvcyBhbmQgdGhlIGJvdHRvbSBvZiB0aGVpciBjb250YWluZXJzOlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy80NDBcXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxuaWZyYW1lLFxcbmltZyxcXG5zdmcsXFxudmlkZW8ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgZGVmYXVsdCBmaWVsZHNldCBzdHlsZXMuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbiAqIEJyb3dzZXIgdXBncmFkZSBwcm9tcHRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpnbG9iYWwoLmJyb3dzZXJ1cGdyYWRlKSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG4vKlxcbiAqIFByaW50IHN0eWxlc1xcbiAqIElubGluZWQgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgSFRUUCByZXF1ZXN0OlxcbiAqIGh0dHA6Ly93d3cucGhwaWVkLmNvbS9kZWxheS1sb2FkaW5nLXlvdXItcHJpbnQtY3NzL1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuQG1lZGlhIHByaW50IHtcXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXI6IGh0dHA6Ly93d3cuc2FuYmVpamkuY29tL2FyY2hpdmVzLzk1MyAqL1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBhW2hyZWZdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cihocmVmKSAnKSc7XFxuICB9XFxuXFxuICBhYmJyW3RpdGxlXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICgnIGF0dHIodGl0bGUpICcpJztcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxcbiAgICogb3IgdXNlIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbFxcbiAgICovXFxuXFxuICBhW2hyZWZePScjJ106OmFmdGVyLFxcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gIH1cXG5cXG4gIHByZSxcXG4gIGJsb2NrcXVvdGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICAvKlxcbiAgICogUHJpbnRpbmcgVGFibGVzOlxcbiAgICogaHR0cDovL2Nzcy1kaXNjdXNzLmluY3V0aW8uY29tL3dpa2kvUHJpbnRpbmdfVGFibGVzXFxuICAgKi9cXG5cXG4gIHRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgfVxcblxcbiAgdHIsXFxuICBpbWcge1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIHAsXFxuICBoMixcXG4gIGgzIHtcXG4gICAgb3JwaGFuczogMztcXG4gICAgd2lkb3dzOiAzO1xcbiAgfVxcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0hlYWRlci5jc3MnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoZWFkZXIgY2xhc3NOYW1lPXtzLnJvb3R9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9IZWFkZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0hlYWRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9IZWFkZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLkhlYWRlci1yb290LU85b1c5IHtcXG4gIGJhY2tncm91bmQ6ICMzNzMyNzc7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2JcIixcImZpbGVcIjpcIkhlYWRlci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIGJhY2tncm91bmQ6ICMzNzMyNzc7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIZWFkZXItcm9vdC1POW9XOVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Gb290ZXIuY3NzJztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT17cy5yb290fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEZvb3Rlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRm9vdGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Gb290ZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRm9vdGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5Gb290ZXItcm9vdC0xVVVNeSB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFOztnRkFFOEU7O0VBRTlFOztnRkFFOEUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQyxpQ0FBaUM7Q0FDL007O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiXCIsXCJmaWxlXCI6XCJGb290ZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4ucm9vdCB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRm9vdGVyLXJvb3QtMVVVTXlcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdlY2hhdFF1ZXJ5IGZyb20gJy4vd2VjaGF0LmdyYXBocWwnO1xuXG5jbGFzcyBXZWNoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNsaWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHN0b3JlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29udGV4dC5jbGllbnRcbiAgICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogd2VjaGF0UXVlcnksXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgIHd4LmNvbmZpZyh7XG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICAuLi5yZXNwLmRhdGEud2VjaGF0LFxuICAgICAgICAgICAganNBcGlMaXN0OiBbXG4gICAgICAgICAgICAgICdvbk1lbnVTaGFyZVRpbWVsaW5lJyxcbiAgICAgICAgICAgICAgJ29uTWVudVNoYXJlQXBwTWVzc2FnZScsXG4gICAgICAgICAgICAgICdjbG9zZVdpbmRvdycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VjaGF0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1dlY2hhdC9XZWNoYXQuanMiLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiV2VjaGF0XCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJsXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRlZmF1bHRWYWx1ZVwiOm51bGx9XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3ZWNoYXRcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJsXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cmxcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYXBwSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpbWVzdGFtcFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibm9uY2VTdHJcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNpZ25hdHVyZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTA5fX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCJxdWVyeSBXZWNoYXQoJHVybDogU3RyaW5nISkge1xcbiAgd2VjaGF0KHVybDogJHVybCkge1xcbiAgICBhcHBJZFxcbiAgICB0aW1lc3RhbXBcXG4gICAgbm9uY2VTdHJcXG4gICAgc2lnbmF0dXJlXFxuICB9XFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1dlY2hhdC93ZWNoYXQuZ3JhcGhxbFxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAxNy8wMS8yMDE4XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHJlbmRlciA9IChib2FyZHNpemUsIGN4LCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkc2l6ZTsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZHNpemU7IGogKz0gMSkge1xuICAgICAgcm93LnB1c2goaW50ZXJzZWN0aW9uKGksIGopKTtcbiAgICB9XG4gICAgaW50ZXJzZWN0aW9ucy5wdXNoKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2l9XG4gICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgIGJvYXJkcm93OiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge3Jvd31cbiAgICAgIDwvZGl2PixcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgIGxheWVyOiB0cnVlLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2ludGVyc2VjdGlvbnN9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9sYXllci91dGlscy5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQm9hcmRMYXllci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQm9hcmRMYXllci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Cb2FyZExheWVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvQm9hcmRMYXllci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZRMFEyT0VSRVJUSTJSVFUzTVRGRk5UazFPRFZHUWtReVJrRkNSVE0wTURBaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlEwUTJPRVJFUlRNMlJUVTNNVEZGTlRrMU9EVkdRa1F5UmtGQ1JUTTBNREFpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRFJEWTRSRVJGTURaRk5UY3hNVVUxT1RVNE5VWkNSREpHUVVKRk16UXdNQ0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBEUkRZNFJFUkZNVFpGTlRjeE1VVTFPVFU0TlVaQ1JESkdRVUpGTXpRd01DSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QdmZxMTl3QUFBZEtTVVJCVkhqYWhGYzdqeHhGRUs3dTZYbnR3MTc3c0dBeFp5TXNnUkJPakRBR0kyTk1BQkoyaUdRSGlKQWZRSVFqaElnY2tDSWNFUUFCRWdGQ0pqQ1BCQ3p4TUlpTXR3aHN5VVlnOE43dTNlN09URC80cW1kNmIrNThkNHgyMURNOTNWMVZYMzFmZGE5WXZuTkl6amxTVVVSeHQwT2p5UXJ0NnZhb24zWG8xbXlOb2xoU0owcXBMTW9EY1pZOHE2MDlnYkVQV212dk5zYjBoUkNFYTR6MnBwVHlSN1JYMEY1MjVLN0ZKQ2tpUVZKR05DbW5wQVJzQ0VuYUdHcm1rYUwvdVlTUVJ3MjVsNjJrNTQyeFNrcEI4L21jMGpUMTM4dXlwQ1JKK25Cb1B4eDZCQXUvaUZ2TEtQb2dVZEViZ3NSM3dkaFdsOXorZytqRWFYSlJFMzFiQ25mT3BiR3k1QWh3VVJ6SEdPRW9ZdFNVSWhodm5CVk5aRTVwcmM4QnRhdEdtNHY0bm0vbnhHMElXR041cFdOelU3MHZyVHZZZ1FGbkhmb05LUmhtT0lFcS9MQWtBV2VTWnZodXliQVQ4TStpbjQwNWpDKzFvVXJybDBRbG5oRnhkRTRLOGMyT0R2Q2kzVTUrR3ZCZEtxMmhGSlpTNUkwanJQQ2VaeWs1cE1Cb2plaGpUZzlhQmFlUVYvUlpqTkdWNWdBSThGTWhLL2pFenR0N1RWRituV1Q1R1h6OGVFc0hPSUpFeXVOcGxsK2locFNDUThYaXlERkZKaWFuQzBRY2s4b1Rud0wrenUrTWhMSE1EYUNnWWg4SW82SkFYZzMwcXFyeXFKUmxkU2xQa3VONC9tcEJRbGFBTjZqVUFFK1hEYUpJc0lpQTRWZ3F5ckxjUHllWWtLa0tLSERrRVF3bnlIOEVpQ3Vmb2pUdGt4TzdxU2hLVDlMNWJJcDFZMEltU1BxQUZKblpuTkg4QkRhWGk2SVlNWEpxc0xRWGtCcEVZTjVEam5xSjR1Z0VPMFNkT0tFOGlVZ0JnVzZuUXhLU3pMdFpreThDR1RPNmRXdUYrcnQ3R0E5aVZtdTB0OStuT1p5WVRpZTBNdFUwWHAyVGlTUlZSbE9sSkpXVjdpa1Z2UXZqWnd6enFsN0xuVVFjenlXSUpNYWdHQkxMc295NmFVVDlicGVTdUlaOEpoVDBEUGNRRWVlY0wyMFNLaWNWNEoxaVBHcEdCbFc0bFBJOWUwaWxLd2hpUXBQVlZTQXlveldOZEpEbHVuTWE2eitKTmI1UWErTUphV2N2cE4zY2Exc2dzbDZ2NXgxSVdHNXhTak1ZSzVGSDdRd1ZwUWFzMnFlRlU4Y2sxSndHUkRNdGQxRTFCcGRpUmJzZE9EUnpjS2hMbVV4aGVFeFNUeWh4ZGUwQUFoZlNMSDFjUlVJZTF0WWNxelVkVXc5UWQzQXppUW9FQ1RuU2JEcUZRVWhNTTlsQVdHMDkwWVRrdG16MER6VFdSbVJnd0hDeG12eERhWXdLeUZ4Q0NqdURmVEFhMDJUbFh5aWxZaVU5Wm1YMEVHaGx6M0tPbVNTczg3U1QweHdlVnJwRXBOQThkTS9PT0JqVkZaSmxhN202V2pxMUdsajNkUWNLR0w2SldpT2xSWHBZSzBWQkdlU1pnY0NKenFuQWZGYkd2Q3pPcWxsVm51cG5QVi9kV09PajhaaVZpd1V4MGFtbVdMcUZ6dGtZczVmMXpacG53L3pPaEdJVXVUWXNaQWowWkNUOUdJdjVjeXduSk5LV0tLcVFUbng0U2tWUzNzZlJzeHdaR3ZZczhwTTRET3NkOEFzNnR5aTEyQk44Y1lLdXZXSHVZOVhVNWJnZVd4TlVNeWllSjc0T1RHZmVBZThrQ0I4SmNRajFSbmJaZ0lhMzNITHQ0VVhyZWxzWEN5YWRxMnRGODI2OG94dzVMd3hOMS91SHJMZVdHZ25SVkZkWFYwaXRQV2VvV2R0WmxqNTFGUmNwZGxRdzhGRmQzWVN2YklpTWM0bzFhL2pyeVBpWjIvRE0vY0VZdC96T0RvYTBjR3E1WmViSElLVUFwM2kvNGNvcHJaVktDaVhRWW9EMWxZMTE2Skh3RWZHelhrUVg0QTdPQkRROGYvRE96MXkyQTBKaHl3NUlHVWhFV09IVDZ5QlQ1aFl3aFlJQmdUZGdkY05vMThESjhMbkZJdTFvZ3dOaEl3cHpBZ0p0dE5wempLbjNCZkoyRURxZ0dmTUVucmdaM3ZET2JjMExXcURBZWE3eld4UFNLd1B2cTZoNlFSSEJFWWFmZVJMbUJodTRKempoeUord3dISllNT1RWNzFSS2JYQXEzRzJTQlJSQzlPdHdtMFdxQWxyaDJTc0NLY3FVK0ZYNjgxdHI4V0RjSDA1YXp5R2E5aDJNZU1rMWV3TTczVjRyb0JFVUZQcXNkMHA4SnU1WUdpN0RvMnRNbUhaZWcxR2VHR0JyUnh6SXVPMlJya2xKUUtWOWFleStLYlp6ckgxSW91NWZ4NkNQbUxXQkI1d3p2a05rYlNoRG1uaDhXM3J0TzZBVnZxL1A1ZXJ0ZkhYRWgwK0xzdnhEc29Tdys1MFBrTFlyM3ZwUnpXMGdYQnZLeldrSmhzUFl0bkd5cUxLNEU5N1lxdktWYWo2amFIalhmc3J6L0c5RXRROVJQZXFQWDhoWklGV0lvaTI5OW5PN2IvMG9mL3NKdU42clVJeUU5K1FkVTVWdlJ0aDd4QVAzSHc2eUVxUFI2TGZaYkhhSXp3S2J0YjY1RFFoc1ozQXpncnlmSzhFbklIc1RXVGlJMDFmbGo1d2NMVjhnb1Z0YVdqcUZpZU9RMy9aWnY1M3J3SmZOcWRwNHdtNnJwZDYyOGF2ZzlDbk1yWXdQQUFRRi9OVEZzWXN2Ukg1OU9Cd2V3NkovY2VGbzUzMjdkT3prUUpoWEZ6NnhpczRuOE9tWHRvT3lUUnhtTjVENGVUQVlIQUhNVnpqU1VOZFpGYUU2dGgzYXlvbGd2RVhzSHhEdEVTSEZWYi9MN3ZUWHJObkpia0FaSjRET2VmWThGSmtBUFk4SlVtVEh3dTdYZHFvSnpFQmxyMFB2RDhPQjM3ZENLaG9PNzduTis3QXdGSEVGSEhrYmZWTTRjZ0QzSHQ2dStZOUk1QWtwL04zZUhadjJCaHg2QyswTGVQL1FPOGYvS2FOd3lObmh2K0dHLzRrMTBmNkVJNi9pditGcldQcnBRcGNuMFg4VXA1d0RXR3dBTnVPVTdsWVE0WFhjM3lQYUx4SDE1K2liYjBabHErcy9BUVlBc1JPYTV4SGUrWUFBQUFBQVNVVk9SSzVDWUlJPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL3N0b25lL2JsYWNrLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvd2hpdGUucG5nPzI5ZjQwMWM1XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL3N0b25lL3doaXRlLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZPVUpDUWtVMk1VTTJSVFU0TVRGRk5UZ3lOams1TlRSRU1FTTRNVVJHTmpFaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9VSkNRa1UyTVVRMlJUVTRNVEZGTlRneU5qazVOVFJFTUVNNE1VUkdOakVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvNVFrSkNSVFl4UVRaRk5UZ3hNVVUxT0RJMk9UazFORVF3UXpneFJFWTJNU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG81UWtKQ1JUWXhRalpGTlRneE1VVTFPREkyT1RrMU5FUXdRemd4UkVZMk1TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QdEVuc3lJQUFBRzhTVVJCVkhqYTdGZTlTZ05CRU01cE1DcjRBbUswRkdLVlhvdkVSdElwUmtIRncwNGZRaVR4SWJRVHhWZ2NBVWxuRlFWalpXR25JS1lJMFNjUS9FTTR2NFVwd3JDM2YwUVA0UVkrSnJPM00vdnQzK3pFQzhNd0ZhY01wR0tXaEVEc0JOSTJuY2NxNFJEVUtsQUVab0VwK3RRQldrQVRDRjczdkUvVG1KN3BMY0RnKzFCbFlGclQ5WkZJN1BhRkFBWVdzendDQ3BhcmV3bHNnVWpIbVFBR3owSmRBRG5ITGI0SEZrQ2k2M29JanlXRFB3QlZZQWJJRU1UdkNuM3JsUnpGc0Y4QnpQNEFhcHMxbjlLeWZrZjRwR203TnRpblEvanNHQk5Bb0dHb2Q5WjhoaURyaGdlMkJyWEdta2ZnLzJHNkJTdk12Z044aTczM3lVY1ZVMG1neU94RzFMTExoUG8yTkRHVkJPYVlIVGpjZ0VBVFUwa2d5K3kyQTRHMkpxYVNBRStsbWI5K2pGNllQZTRRZTRMWnp6WUVicGxkZGlEQXIreU5EWUZyWmk5UmtqRjl1QWFoRmpVeGxRUnF6TTdyVWlxVEUvTGhXZlNmcE9LZWdFM0pNeXd5M0RsUUI1NEFVYVJNQXN1MDdIem1WeGk4NEZvUitaTG5PRStvR2o3SG04NDFJYjNqSlNvdWJFWDRsRlMxZ0cxSkpqc1RVUks1NTg0RWlNUW83ZlU4NVhhUlhyK0FMbDB6Z1RvR2YrdDdVWnI4TVVrSS9KYjhDREFBV0g2YjRMd0RJQjRBQUFBQVNVVk9SSzVDWUlJPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL3N0b25lL2Nob29zZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDI0LzEyLzIwMTdcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHYW1lRW5naW5lIGZyb20gJ2dhbWUtZW5naW5lJztcbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAncmVhY3Qtd2Vic29ja2V0JztcblxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vdG9vbGJhci9Ub29sYmFyJztcbmltcG9ydCBDb25maXJtQnV0dG9uIGZyb20gJy4vQ29uZmlybUJ1dHRvbic7XG5pbXBvcnQgcyBmcm9tICcuL0dvLmNzcyc7XG5cbmltcG9ydCBMYXllciBmcm9tICcuL2xheWVyL0xheWVyJztcblxuY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKFtCfFddKVxcXFwrKFtcXFxcZHxSfFxcXFwuXSspJyk7XG5cbmNsYXNzIEdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJvYXJkc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHVzZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB1c2VyOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBibGFjazoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICdbQkxBQ0tdJyxcbiAgICAgICAgYXZhdGFyOiBudWxsLFxuICAgICAgICBjYXB0dXJlZDogMCxcbiAgICAgIH0sXG4gICAgICB3aGl0ZToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICdbV0hJVEVdJyxcbiAgICAgICAgYXZhdGFyOiBudWxsLFxuICAgICAgICBjYXB0dXJlZDogMCxcbiAgICAgIH0sXG4gICAgICB0dXJuOiBHYW1lRW5naW5lLkdvLkNPTE9SLkVNUFRZLFxuICAgICAgY29sb3I6IEdhbWVFbmdpbmUuR28uQ09MT1IuRU1QVFksXG4gICAgICB0ZW1wb3Jhcnk6IG51bGwsXG4gICAgICByZXN1bHQ6IG51bGwsXG4gICAgICBnYW1lOiB7XG4gICAgICAgIG1heE1vdmVzOiAwLFxuICAgICAgICBib2FyZE1vdmVzOiBKU09OLnBhcnNlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgQXJyYXkodGhpcy5wcm9wcy5ib2FyZHNpemUpLmZpbGwoXG4gICAgICAgICAgICAgIEFycmF5KHRoaXMucHJvcHMuYm9hcmRzaXplKS5maWxsKG51bGwpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgICBib2FyZDogSlNPTi5wYXJzZShcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIEFycmF5KHRoaXMucHJvcHMuYm9hcmRzaXplKS5maWxsKFxuICAgICAgICAgICAgICBBcnJheSh0aGlzLnByb3BzLmJvYXJkc2l6ZSkuZmlsbChudWxsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBtYXJrczogSlNPTi5wYXJzZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgQXJyYXkodGhpcy5wcm9wcy5ib2FyZHNpemUpLmZpbGwoXG4gICAgICAgICAgICBBcnJheSh0aGlzLnByb3BzLmJvYXJkc2l6ZSkuZmlsbChudWxsKSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgc2hvd01vdmVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmVuZ2luZSA9IG51bGw7XG4gICAgdGhpcy5nYW1lLmluaXQgPSB0aGlzLmdhbWUuaW5pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5hcHBlbmQgPSB0aGlzLmdhbWUuYXBwZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nYW1lLnJlc3VsdCA9IHRoaXMuZ2FtZS5yZXN1bHQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlci5jaGFuZ2VNb3ZlcyA9IHRoaXMuaGFuZGxlci5jaGFuZ2VNb3Zlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlci50b2dnbGVNb3ZlcyA9IHRoaXMuaGFuZGxlci50b2dnbGVNb3Zlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlci5yZXNpZ24gPSB0aGlzLmhhbmRsZXIucmVzaWduLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVyLmNsaWNrID0gdGhpcy5oYW5kbGVyLmNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVyLmNvbmZpcm0gPSB0aGlzLmhhbmRsZXIuY29uZmlybS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jb25uZWN0aW9uLm1lc3NhZ2UgPSB0aGlzLmNvbm5lY3Rpb24ubWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29udHJvbGVkRW5naW5lID0gdGhpcy5jb250cm9sZWRFbmdpbmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnRyb2xlZEVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmdpbmU7XG4gIH1cblxuICBnYW1lID0ge1xuICAgIGluaXQ6IHRoZUdhbWUgPT4ge1xuICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgR2FtZUVuZ2luZVt0aGVHYW1lLmVuZ2luZV0odGhlR2FtZS5pbmZvLCB0aGVHYW1lLm1vdmVzKTtcbiAgICAgIHRoaXMuZW5naW5lLnR5cGUgPSB0aGVHYW1lLmVuZ2luZTtcbiAgICAgIHRoaXMuZ2FtZS51cGRhdGUoKTtcbiAgICB9LFxuICAgIGFwcGVuZDogbW92ZSA9PiB7XG4gICAgICB0aGlzLmVuZ2luZVttb3ZlLnR5cGVdKFxuICAgICAgICBtb3ZlLmNvbG9yLFxuICAgICAgICBtb3ZlLnBvc2l0aW9uICYmIG1vdmUucG9zaXRpb25bMF0sXG4gICAgICAgIG1vdmUucG9zaXRpb24gJiYgbW92ZS5wb3NpdGlvblsxXSxcbiAgICAgICk7XG4gICAgICBpZiAobW92ZS50eXBlID09PSAncGxheScpIHtcbiAgICAgICAgY29uc3QgbWFya3MgPSBKU09OLnBhcnNlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgQXJyYXkodGhpcy5wcm9wcy5ib2FyZHNpemUpLmZpbGwoXG4gICAgICAgICAgICAgIEFycmF5KHRoaXMucHJvcHMuYm9hcmRzaXplKS5maWxsKG51bGwpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBtYXJrc1ttb3ZlLnBvc2l0aW9uWzBdXVttb3ZlLnBvc2l0aW9uWzFdXSA9ICdjaG9vc2UnO1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKHtcbiAgICAgICAgICBtYXJrcyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXN1bHQ6IHIgPT4ge1xuICAgICAgdGhpcy5lbmdpbmUuaW5mby5yZXN1bHQgPSByO1xuICAgICAgdGhpcy5nYW1lLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBpbmhlcml0U3RhdGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbmhlcml0U3RhdGUgfHwge30sIHtcbiAgICAgICAgICBibGFjazoge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZW5naW5lLmluZm8uYmxhY2suaWQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmVuZ2luZS5pbmZvLmJsYWNrLm5hbWUsXG4gICAgICAgICAgICBhdmF0YXI6IHRoaXMuZW5naW5lLmluZm8uYmxhY2suYXZhdGFyLFxuICAgICAgICAgICAgY2FwdHVyZWQ6IHRoaXMuY29udHJvbGVkRW5naW5lKCkuY2FwdHVyZWRbXG4gICAgICAgICAgICAgIEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0tcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aGl0ZToge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZW5naW5lLmluZm8ud2hpdGUuaWQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmVuZ2luZS5pbmZvLndoaXRlLm5hbWUsXG4gICAgICAgICAgICBhdmF0YXI6IHRoaXMuZW5naW5lLmluZm8ud2hpdGUuYXZhdGFyLFxuICAgICAgICAgICAgY2FwdHVyZWQ6IHRoaXMuY29udHJvbGVkRW5naW5lKCkuY2FwdHVyZWRbXG4gICAgICAgICAgICAgIEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0dXJuOiB0aGlzLmNvbnRyb2xlZEVuZ2luZSgpLmN1cnJlbnRDb2xvcigpLFxuICAgICAgICAgIHJlc3VsdDogdGhpcy5lbmdpbmUuaW5mby5yZXN1bHQsXG4gICAgICAgICAgZ2FtZToge1xuICAgICAgICAgICAgYm9hcmRNb3ZlczogdGhpcy5jb250cm9sZWRFbmdpbmUoKS5ib2FyZE1vdmVzLFxuICAgICAgICAgICAgYm9hcmQ6IHRoaXMuY29udHJvbGVkRW5naW5lKCkuYm9hcmQsXG4gICAgICAgICAgICBtYXhNb3ZlczogdGhpcy5lbmdpbmUubW92ZXMubGVuZ3RoLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlciA9PT0gdGhpcy5lbmdpbmUuaW5mby5ibGFjay5pZFxuICAgICAgICAgICAgICA/IEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0tcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnVzZXIgPT09IHRoaXMuZW5naW5lLmluZm8ud2hpdGUuaWRcbiAgICAgICAgICAgICAgICA/IEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEVcbiAgICAgICAgICAgICAgICA6IEdhbWVFbmdpbmUuR28uQ09MT1IuRU1QVFksXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xuXG4gIGhhbmRsZXIgPSB7XG4gICAgY2hhbmdlTW92ZXM6IGFzeW5jIG1vdmUgPT4ge1xuICAgICAgaWYgKG1vdmUgPT09IHRoaXMuZW5naW5lLm1vdmVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xlZEVuZ2luZSA9ICgpID0+IHRoaXMuZW5naW5lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250cm9sZWRFbmdpbmUgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udHJvbGVkRW5naW5lID0gbmV3IEdhbWVFbmdpbmVbdGhpcy5lbmdpbmUudHlwZV0oXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmVuZ2luZS5pbmZvLCB7IHJlc3VsdDogbnVsbCB9KSxcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm1vdmVzLnNsaWNlKDAsIG1vdmUpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRyb2xlZEVuZ2luZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udHJvbGVkRW5naW5lID0gdGhpcy5jb250cm9sZWRFbmdpbmUuYmluZCh0aGlzKTtcbiAgICAgIGNvbnN0IG1hcmtzID0gSlNPTi5wYXJzZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgQXJyYXkodGhpcy5wcm9wcy5ib2FyZHNpemUpLmZpbGwoXG4gICAgICAgICAgICBBcnJheSh0aGlzLnByb3BzLmJvYXJkc2l6ZSkuZmlsbChudWxsKSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2FtZS51cGRhdGUoe1xuICAgICAgICBtYXJrcyxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG9nZ2xlTW92ZXM6ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250cm9sOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmNvbnRyb2wsIHtcbiAgICAgICAgICBzaG93TW92ZXM6ICF0aGlzLnN0YXRlLmNvbnRyb2wuc2hvd01vdmVzLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcGFzczogKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZW5naW5lLmN1cnJlbnRDb2xvcigpID09PSB0aGlzLnN0YXRlLmNvbG9yKSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmRNZXNzYWdlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGVtcG9yYXJ5OiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc2lnbjogKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZW5naW5lLmN1cnJlbnRDb2xvcigpID09PSB0aGlzLnN0YXRlLmNvbG9yKSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmRNZXNzYWdlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdyZXNpZ24nLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0ZW1wb3Jhcnk6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xpY2s6IChpLCBqKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbmdpbmUucnVsZXModGhpcy5zdGF0ZS5jb2xvciwgaSwgaikpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGVtcG9yYXJ5OiB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbaSwgal0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb25maXJtOiAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS50ZW1wb3JhcnkpIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhdGUudGVtcG9yYXJ5LnBvc2l0aW9uLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0ZW1wb3Jhcnk6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgY29ubmVjdGlvbiA9IHtcbiAgICBtZXNzYWdlOiBtc2cgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobXNnKTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuY29kZSA9PT0gJ29rJykge1xuICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgdGhpcy5nYW1lLmluaXQoZGF0YS5nYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RlbHRhJzpcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hcHBlbmQoZGF0YS5tb3ZlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgICAgICB0aGlzLmdhbWUucmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5zdGF0ZS5yZXN1bHQgPyB0aGlzLnN0YXRlLnJlc3VsdC5tYXRjaChyZWdleCkgOiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICA8SW5mb1xuICAgICAgICAgIGJsYWNrPXt0aGlzLnN0YXRlLmJsYWNrfVxuICAgICAgICAgIHdoaXRlPXt0aGlzLnN0YXRlLndoaXRlfVxuICAgICAgICAgIHR1cm49e3RoaXMuc3RhdGUudHVybn1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMudXNlciAmJlxuICAgICAgICAodGhpcy5wcm9wcy51c2VyID09PSB0aGlzLnN0YXRlLmJsYWNrLmlkIHx8XG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VyID09PSB0aGlzLnN0YXRlLndoaXRlLmlkKSAmJlxuICAgICAgICAhdGhpcy5zdGF0ZS5yZXN1bHQgPyAoXG4gICAgICAgICAgPENvbmZpcm1CdXR0b25cbiAgICAgICAgICAgIGhhbmRsZUNvbmZpcm09e3RoaXMuaGFuZGxlci5jb25maXJtfVxuICAgICAgICAgICAgZGlzYWJsZT17IXRoaXMuc3RhdGUudGVtcG9yYXJ5fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2NvcmVib2FyZH0+XG4gICAgICAgICAgICB7bWF0Y2hcbiAgICAgICAgICAgICAgPyBgJHttYXRjaFsxXSA9PT0gJ1cnID8gJ+eZvScgOiAn6buRJ33og5wke1xuICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0gPT09ICdSJyA/ICcnIDogYCR7bWF0Y2hbMl1955uuYFxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxMYXllclxuICAgICAgICAgIG1vdmVzPXt0aGlzLnN0YXRlLmdhbWUuYm9hcmRNb3Zlc31cbiAgICAgICAgICBib2FyZD17dGhpcy5zdGF0ZS5nYW1lLmJvYXJkfVxuICAgICAgICAgIG1hcmtzPXt0aGlzLnN0YXRlLm1hcmtzfVxuICAgICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZXIuY2xpY2t9XG4gICAgICAgICAgY29sb3I9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgc2hvd01vdmVzPXt0aGlzLnN0YXRlLmNvbnRyb2wuc2hvd01vdmVzfVxuICAgICAgICAgIHRlbXBvcmFyeT17dGhpcy5zdGF0ZS50ZW1wb3Jhcnl9XG4gICAgICAgIC8+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgb2JzZXJ2ZXI9e1xuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyICYmXG4gICAgICAgICAgICAgICh0aGlzLnByb3BzLnVzZXIgPT09IHRoaXMuc3RhdGUuYmxhY2suaWQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXIgPT09IHRoaXMuc3RhdGUud2hpdGUuaWQpICYmXG4gICAgICAgICAgICAgICF0aGlzLnN0YXRlLnJlc3VsdFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtYXhNb3Zlcz17dGhpcy5zdGF0ZS5nYW1lLm1heE1vdmVzfVxuICAgICAgICAgIGhhbmRsZVBhc3M9e3RoaXMuaGFuZGxlci5wYXNzfVxuICAgICAgICAgIGhhbmRsZVJlc2lnbj17dGhpcy5oYW5kbGVyLnJlc2lnbn1cbiAgICAgICAgICBjaGFuZ2VNb3Zlcz17dGhpcy5oYW5kbGVyLmNoYW5nZU1vdmVzfVxuICAgICAgICAgIHRvZ2dsZU1vdmVzPXt0aGlzLmhhbmRsZXIudG9nZ2xlTW92ZXN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IChcbiAgICAgICAgICA8V2ViU29ja2V0XG4gICAgICAgICAgICBvbk1lc3NhZ2U9e3RoaXMuY29ubmVjdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgdXJsPXtgd3M6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9jaGFubmVsLyR7dGhpcy5wcm9wcy5pZH1gfVxuICAgICAgICAgICAgcmVjb25uZWN0SW50ZXJ2YWxJbk1pbGxpU2Vjb25kcz17MTAwfVxuICAgICAgICAgICAgcmVmPXtXZWJzb2NrZXQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLndlYnNvY2tldCA9IFdlYnNvY2tldDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aFN0eWxlcyhzKSkoR28pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vR28uanMiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDI0LzEyLzIwMTdcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR2FtZUVuZ2luZSBmcm9tICdnYW1lLWVuZ2luZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBzIGZyb20gJy4vSW5mby5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmxhY2s6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgY2FwdHVyZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICB3aGl0ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjYXB0dXJlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHR1cm46IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0dXJuOiBHYW1lRW5naW5lLkdvLkNPTE9SLkVNUFRZLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZ2FtZWluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wbGF5ZXJ9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cImF2YXRhcl91cmxcIlxuICAgICAgICAgICAgd2lkdGg9XCI2NFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI2NFwiXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuYmxhY2suYXZhdGFyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW5mb30+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy50dXJuID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLkJMQUNLLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmxhY2submFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmJsYWNrLmNhcHR1cmVkfSDmj5DlrZA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wbGF5ZXJ9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cImF2YXRhcl91cmxcIlxuICAgICAgICAgICAgd2lkdGg9XCI2NFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI2NFwiXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMud2hpdGUuYXZhdGFyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW5mb30+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy50dXJuID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLldISVRFLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hpdGUubmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLndoaXRlLmNhcHR1cmVkfSDmj5DlrZA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKHdpdGhTdHlsZXMocykpKEluZm8pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vSW5mby5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSW5mby5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSW5mby5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9JbmZvLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vSW5mby5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayA+IC5JbmZvLXBsYXllci11X2l3SiB7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sgPiAuSW5mby1wbGF5ZXItdV9pd0o6bnRoLWNoaWxkKDIpIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayAuSW5mby1pbmZvLTNyMDhZIHtcXG4gIG1hcmdpbjogMCAxM3B4O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uSW5mby1nYW1laW5mby0zQzJvayA+IC5JbmZvLXBsYXllci11X2l3SjpudGgtY2hpbGQoMikgLkluZm8taW5mby0zcjA4WSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sgLkluZm8taW5mby0zcjA4WSA+IC5JbmZvLWFjdGl2ZS0xOTY0LSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5JbmZvLWdhbWVpbmZvLTNDMm9rIC5JbmZvLWluZm8tM3IwOFkgPiAuSW5mby1hY3RpdmUtMTk2NC06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjVDRic7XFxufVxcblxcbi5JbmZvLWdhbWVpbmZvLTNDMm9rIC5JbmZvLXBsYXllci11X2l3SjpudGgtY2hpbGQoMikgLkluZm8taW5mby0zcjA4WSA+IC5JbmZvLWFjdGl2ZS0xOTY0LTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwyNUNCJztcXG59XFxuXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sgLkluZm8taW5mby0zcjA4WSA+IHNwYW4ge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLkluZm8tZ2FtZWluZm8tM0Myb2sgLkluZm8tbmFtZS0xbGlkaSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vSW5mby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtNQUNsQixrQkFBa0I7RUFDdEIsdUJBQXVCO01BQ25CLCtCQUErQjtFQUNuQyx1QkFBdUI7TUFDbkIsb0JBQW9CO0NBQ3pCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGlCQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBYTtDQUNkOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCXCIsXCJmaWxlXCI6XCJJbmZvLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZ2FtZWluZm8ge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWluZm8gPiAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZ2FtZWluZm8gPiAucGxheWVyOm50aC1jaGlsZCgyKSB7XFxuICBkaXJlY3Rpb246IHJ0bDtcXG59XFxuXFxuLmdhbWVpbmZvIC5pbmZvIHtcXG4gIG1hcmdpbjogMCAxM3B4O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uZ2FtZWluZm8gPiAucGxheWVyOm50aC1jaGlsZCgyKSAuaW5mbyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmdhbWVpbmZvIC5pbmZvID4gLmFjdGl2ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYW1laW5mbyAuaW5mbyA+IC5hY3RpdmU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICfil48nO1xcbn1cXG5cXG4uZ2FtZWluZm8gLnBsYXllcjpudGgtY2hpbGQoMikgLmluZm8gPiAuYWN0aXZlOjphZnRlciB7XFxuICBjb250ZW50OiAn4peLJztcXG59XFxuXFxuLmdhbWVpbmZvIC5pbmZvID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uZ2FtZWluZm8gLm5hbWUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZ2FtZWluZm9cIjogXCJJbmZvLWdhbWVpbmZvLTNDMm9rXCIsXG5cdFwicGxheWVyXCI6IFwiSW5mby1wbGF5ZXItdV9pd0pcIixcblx0XCJpbmZvXCI6IFwiSW5mby1pbmZvLTNyMDhZXCIsXG5cdFwiYWN0aXZlXCI6IFwiSW5mby1hY3RpdmUtMTk2NC1cIixcblx0XCJuYW1lXCI6IFwiSW5mby1uYW1lLTFsaWRpXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vSW5mby5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDIwLzAxLzIwMThcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBzIGZyb20gJy4vVG9vbGJhci5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgVG9vbGJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb2JzZXJ2ZXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgbWF4TW92ZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBoYW5kbGVQYXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGhhbmRsZVJlc2lnbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGFuZ2VNb3ZlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0b2dnbGVNb3ZlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudE1vdmU6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0TW92ZXMgPSB0aGlzLnNldE1vdmVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRNb3Zlcyhtb3Zlcykge1xuICAgIHRoaXMucHJvcHMuY2hhbmdlTW92ZXMobW92ZXMpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudE1vdmU6IG1vdmVzLFxuICAgIH0pO1xuICB9XG5cbiAgZGVsdGFNb3Zlcyhtb3Zlcykge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmNoYW5nZU1vdmVzKHRoaXMuc3RhdGUuY3VycmVudE1vdmUgKyBtb3Zlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudE1vdmU6IHRoaXMuc3RhdGUuY3VycmVudE1vdmUgKyBtb3ZlcyxcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRvb2xiYXJ9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm1heE1vdmVzfVxuICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW92ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0TW92ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsdGFNb3ZlcygtMSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZlID09PSAwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDliY3kuIDmiYtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWx0YU1vdmVzKDEpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICBidXR0b246IHRydWUsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXJyZW50TW92ZSA9PT0gdGhpcy5wcm9wcy5tYXhNb3Zlc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg5ZCO5LiA5omLXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlTW92ZXN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOW8gOWFs+aJi+aVsFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUGFzc31cbiAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIOWBnOS4gOaJi1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUmVzaWdufVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAg6K6k6L6TXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFRvb2xiYXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vdG9vbGJhci9Ub29sYmFyLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Ub29sYmFyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Ub29sYmFyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL1Rvb2xiYXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby90b29sYmFyL1Rvb2xiYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiogUmFuZ2VzbGlkZXJcXG4qL1xcbi5yYW5nZXNsaWRlciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LXdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5yYW5nZXNsaWRlci1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5yYW5nZXNsaWRlcl9fbGFiZWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJhbmdlc2xpZGVyLFxcbi5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX2ZpbGwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbi5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX2hhbmRsZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4ucmFuZ2VzbGlkZXIgLnJhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcCB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG59XFxuLnJhbmdlc2xpZGVyIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXAgc3BhbiB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcbi5yYW5nZXNsaWRlci1ob3Jpem9udGFsIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXAge1xcbiAgdG9wOiAtNTVweDtcXG59XFxuLyoqXFxuKiBSYW5nZXNsaWRlciAtIEhvcml6b250YWwgc2xpZGVyXFxuKi9cXG4ucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG59XFxuLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX19maWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2IzNDI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdG9wOiAwO1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19maWxsLFxcbi5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2ZpbGwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NiMzQyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19oYW5kbGUge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiAtMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXAge1xcbiAgbGVmdDogLTEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG59XFxuLnJhbmdlc2xpZGVyX19sYWJlbHMgLnJhbmdlc2xpZGVyX19sYWJlbC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRvcDogMTBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG59XFxuLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9fbGFiZWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMCAwIDAgMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMTBweDtcXG59XFxuLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX19oYW5kbGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpIGluc2V0LCAwIC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSBpbnNldDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSBpbnNldCwgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCkgaW5zZXQ7XFxufVxcbi5yYW5nZXNsaWRlci1ob3Jpem9udGFsIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXA6OmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IC04cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxufVxcbi5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZS10b29sdGlwOjphZnRlciB7XFxuICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGxlZnQ6IDEwMCU7XFxuICB0b3A6IDEycHg7XFxufVxcbi5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX2hhbmRsZS10b29sdGlwOjphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLnJhbmdlc2xpZGVyLXJldmVyc2UucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX2ZpbGwge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5yYW5nZXNsaWRlci1yZXZlcnNlLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9fZmlsbCB7XFxuICB0b3A6IDA7XFxuICBib3R0b206IGluaGVyaXQ7XFxufVxcbi5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2xhYmVscyAucmFuZ2VzbGlkZXJfX2xhYmVsLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xcbn1cXG4ucmFuZ2VzbGlkZXIgLnJhbmdlc2xpZGVyX19oYW5kbGUgLnJhbmdlc2xpZGVyX19hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9fbGFiZWxzIC5yYW5nZXNsaWRlcl9fbGFiZWwtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTE0cHg7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uVG9vbGJhci1idXR0b24tM0xPdXQge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZmZmKSwgdG8oI2I3YTNmMSkpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2I3YTNmMSk7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2I3YTNmMSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2I3YTNmMSk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxufVxcbi5Ub29sYmFyLWJ1dHRvbi0zTE91dDphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjYjdhM2YxKSwgdG8oI2ZmZikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxufVxcbi5Ub29sYmFyLWNvbmZpcm0tMXFXbzMge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG4uVG9vbGJhci10b29sYmFyLTJpb05hIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNXZ3O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLlRvb2xiYXItYnV0dG9uR3JvdXAtMkw5ZWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA4JTtcXG59XFxuLlRvb2xiYXItYnV0dG9uR3JvdXAtMkw5ZWwgPiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxufVxcbi5Ub29sYmFyLWJ1dHRvbkdyb3VwLTJMOWVsID4gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vdG9vbGJhci9Ub29sYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTtBQUNGO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDs7RUFFRSxlQUFlO0VBQ2YsdURBQXVEO1VBQy9DLCtDQUErQztDQUN4RDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnRkFBZ0Y7VUFDeEUsd0VBQXdFO0NBQ2pGO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsVUFBVTtFQUNWLDJDQUEyQztVQUNuQyxtQ0FBbUM7Q0FDNUM7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDs7RUFFRTtBQUNGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUztFQUNULDhDQUE4QztVQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLE9BQU87Q0FDUjtBQUNEOztFQUVFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQix5QkFBeUI7VUFDakIsaUJBQWlCO0VBQ3pCLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO1VBQ2pCLGlCQUFpQjtDQUMxQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCw4Q0FBOEM7VUFDdEMsc0NBQXNDO0NBQy9DO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDJDQUEyQztVQUNuQyxtQ0FBbUM7Q0FDNUM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0NBQ1o7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsNEZBQTRGO1VBQ3BGLG9GQUFvRjtDQUM3RjtBQUNEO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGFBQWE7RUFDYiwyQ0FBMkM7VUFDbkMsbUNBQW1DO0NBQzVDO0FBQ0Q7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0NBQ1g7QUFDRDtFQUNFLFNBQVM7Q0FDVjtBQUNEO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztVQUNuQyxtQ0FBbUM7Q0FDNUM7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztFQUNULG9DQUFvQztNQUNoQyxnQ0FBZ0M7VUFDNUIsNEJBQTRCO0VBQ3BDLFlBQVk7Q0FDYjtBQUNEO0VBQ0UscUZBQXFGO0VBQ3JGLG1EQUFtRDtFQUNuRCw4Q0FBOEM7RUFDOUMsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UscUZBQXFGO0VBQ3JGLG1EQUFtRDtFQUNuRCw4Q0FBOEM7RUFDOUMsMkNBQTJDO0NBQzVDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7TUFDdkIsdUJBQXVCO0NBQzVCO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHNCQUFzQjtNQUNsQix3QkFBd0I7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUJcIixcImZpbGVcIjpcIlRvb2xiYXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiogUmFuZ2VzbGlkZXJcXG4qL1xcbjpnbG9iYWwoLnJhbmdlc2xpZGVyKSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG46Z2xvYmFsKC5yYW5nZXNsaWRlci12ZXJ0aWNhbCkge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LXdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLWhvcml6b250YWwpIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyX19sYWJlbHMpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXIpLFxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyIC5yYW5nZXNsaWRlcl9fZmlsbCkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyIC5yYW5nZXNsaWRlcl9faGFuZGxlKSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG46Z2xvYmFsKC5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX2hhbmRsZS10b29sdGlwKSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXIgLnJhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcCBzcGFuKSB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcCkge1xcbiAgdG9wOiAtNTVweDtcXG59XFxuLyoqXFxuKiBSYW5nZXNsaWRlciAtIEhvcml6b250YWwgc2xpZGVyXFxuKi9cXG46Z2xvYmFsKC5yYW5nZXNsaWRlci1ob3Jpem9udGFsIC5yYW5nZXNsaWRlcl9faGFuZGxlKSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX2ZpbGwpIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2IzNDI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdG9wOiAwO1xcbn1cXG46Z2xvYmFsKC5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2ZpbGwpLFxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9faGFuZGxlKSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9fZmlsbCkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NiMzQyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm90dG9tOiAwO1xcbn1cXG46Z2xvYmFsKC5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZSkge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiAtMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcCkge1xcbiAgbGVmdDogLTEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXJfX2xhYmVscyAucmFuZ2VzbGlkZXJfX2xhYmVsLWl0ZW0pIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRvcDogMTBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19sYWJlbHMpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMCAwIDAgMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMTBweDtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZTo6YWZ0ZXIpIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpIGluc2V0LCAwIC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSBpbnNldDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSBpbnNldCwgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCkgaW5zZXQ7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcDo6YWZ0ZXIpIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IC04cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXA6OmFmdGVyKSB7XFxuICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGxlZnQ6IDEwMCU7XFxuICB0b3A6IDEycHg7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXA6OmFmdGVyKSB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXItcmV2ZXJzZS5yYW5nZXNsaWRlci1ob3Jpem9udGFsIC5yYW5nZXNsaWRlcl9fZmlsbCkge1xcbiAgcmlnaHQ6IDA7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLXJldmVyc2UucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19maWxsKSB7XFxuICB0b3A6IDA7XFxuICBib3R0b206IGluaGVyaXQ7XFxufVxcbjpnbG9iYWwoLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9fbGFiZWxzIC5yYW5nZXNsaWRlcl9fbGFiZWwtaXRlbSkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xcbn1cXG46Z2xvYmFsKC5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX2hhbmRsZSAucmFuZ2VzbGlkZXJfX2FjdGl2ZSkge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuOmdsb2JhbCgucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19sYWJlbHMgLnJhbmdlc2xpZGVyX19sYWJlbC1pdGVtOjpiZWZvcmUpIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTE0cHg7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmZiksIHRvKCNiN2EzZjEpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmYsICNiN2EzZjEpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCNmZmYsICNiN2EzZjEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICNiN2EzZjEpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMi41ZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNiN2EzZjEpLCB0bygjZmZmKSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjYjdhM2YxLCAjZmZmKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjYjdhM2YxLCAjZmZmKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjdhM2YxLCAjZmZmKTtcXG59XFxuLmNvbmZpcm0ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG4udG9vbGJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTV2dztcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5idXR0b25Hcm91cCB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDglO1xcbn1cXG4uYnV0dG9uR3JvdXAgPiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxufVxcbi5idXR0b25Hcm91cCA+IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiVG9vbGJhci1idXR0b24tM0xPdXRcIixcblx0XCJjb25maXJtXCI6IFwiVG9vbGJhci1jb25maXJtLTFxV28zXCIsXG5cdFwidG9vbGJhclwiOiBcIlRvb2xiYXItdG9vbGJhci0yaW9OYVwiLFxuXHRcImJ1dHRvbkdyb3VwXCI6IFwiVG9vbGJhci1idXR0b25Hcm91cC0yTDllbFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2dvL3Rvb2xiYXIvVG9vbGJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDI2LzEyLzIwMTdcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzcy1tb2R1bGVzL25vLXVudXNlZC1jbGFzc1xuaW1wb3J0IHMgZnJvbSAnLi9CdXR0b24uY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQocyk7XG5cbmNsYXNzIENvbmZpcm1CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGFuZGxlQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJjb25maXJtLWJ0blwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBjb25maXJtOiB0cnVlLFxuICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ29uZmlybX1cbiAgICAgID5cbiAgICAgICAg56Gu6K6kXG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQ29uZmlybUJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9Db25maXJtQnV0dG9uLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9CdXR0b24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0J1dHRvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9CdXR0b24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby9CdXR0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5CdXR0b24tYnV0dG9uLTNIaFEzIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmZiksIHRvKCNiN2EzZjEpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmYsICNiN2EzZjEpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCNmZmYsICNiN2EzZjEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICNiN2EzZjEpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMi41ZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uQnV0dG9uLWJ1dHRvbi0zSGhRMzphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjYjdhM2YxKSwgdG8oI2ZmZikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxufVxcblxcbi5CdXR0b24tY29uZmlybS0zTkdBQyB7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vQnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFGQUFxRjtFQUNyRixtREFBbUQ7RUFDbkQsOENBQThDO0VBQzlDLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxxRkFBcUY7RUFDckYsbURBQW1EO0VBQ25ELDhDQUE4QztFQUM5QywyQ0FBMkM7Q0FDNUM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEJcIixcImZpbGVcIjpcIkJ1dHRvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmYpLCB0bygjYjdhM2YxKSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmZmLCAjYjdhM2YxKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjZmZmLCAjYjdhM2YxKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjYjdhM2YxKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjYjdhM2YxKSwgdG8oI2ZmZikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YTNmMSwgI2ZmZik7XFxufVxcblxcbi5jb25maXJtIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbi1idXR0b24tM0hoUTNcIixcblx0XCJjb25maXJtXCI6IFwiQnV0dG9uLWNvbmZpcm0tM05HQUNcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9CdXR0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Hby5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vR28uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vR28uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby9Hby5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkdvLWNvbnRhaW5lci1yX3ZHUiB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA2JTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMmUxZjU5LCAjMTYxMDJiKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KCMyZTFmNTksICMxNjEwMmIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzJlMWY1OSwgIzE2MTAyYikgIWltcG9ydGFudDtcXG59XFxuXFxuLkdvLWNvbnRhaW5lci1yX3ZHUiA+IGRpdiB7XFxuICBtYXJnaW4tdG9wOiA0JTtcXG59XFxuXFxuLkdvLXNjb3JlYm9hcmQtM2xGRzkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL0dvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO01BQ3ZCLHVCQUF1QjtFQUMzQixzQkFBc0I7TUFDbEIsa0JBQWtCO0VBQ3RCLHFCQUFxQjtNQUNqQiw0QkFBNEI7RUFDaEMsdUJBQXVCO01BQ25CLG9CQUFvQjtFQUN4QixjQUFjO0VBQ2QsY0FBYztFQUNkLGlFQUFpRTtFQUNqRSw0REFBNEQ7RUFDNUQseURBQXlEO0NBQzFEOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7Q0FDMUJcIixcImZpbGVcIjpcIkdvLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMyZTFmNTksICMxNjEwMmIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoIzJlMWY1OSwgIzE2MTAyYikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMmUxZjU5LCAjMTYxMDJiKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyID4gZGl2IHtcXG4gIG1hcmdpbi10b3A6IDQlO1xcbn1cXG5cXG4uc2NvcmVib2FyZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHby1jb250YWluZXItcl92R1JcIixcblx0XCJzY29yZWJvYXJkXCI6IFwiR28tc2NvcmVib2FyZC0zbEZHOVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2dvL0dvLmNzc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTcvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJhY2tncm91bmRMYXllciBmcm9tICcuL2JhY2tncm91bmQvQmFja2dyb3VuZExheWVyJztcbmltcG9ydCBMaW5lTGF5ZXIgZnJvbSAnLi9saW5lL0xpbmVMYXllcic7XG5pbXBvcnQgSGlnaGxpZ2h0TGF5ZXIgZnJvbSAnLi9oaWdobGlnaHQvSGlnaGxpZ2h0TGF5ZXInO1xuaW1wb3J0IFN0b25lTGF5ZXIgZnJvbSAnLi9zdG9uZS9TdG9uZUxheWVyJztcbmltcG9ydCBNb3ZlTGF5ZXIgZnJvbSAnLi9tb3ZlL01vdmVMYXllcic7XG5pbXBvcnQgRXZlbnRMYXllciBmcm9tICcuL2V2ZW50L0V2ZW50TGF5ZXInO1xuaW1wb3J0IE1hcmtMYXllciBmcm9tICcuL21hcmsvTWFya0xheWVyJztcbmltcG9ydCBjc3MgZnJvbSAnLi9MYXllci5jc3MnO1xuXG5jbGFzcyBMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYm9hcmQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpKS5pc1JlcXVpcmVkLFxuICAgIG1vdmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSkuaXNSZXF1aXJlZCxcbiAgICBtYXJrczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykpLmlzUmVxdWlyZWQsXG4gICAgc2hvd01vdmVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0ZW1wb3Jhcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb2xvcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcG9zaXRpb246IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZW1wb3Jhcnk6IG51bGwsXG4gICAgc2hvd01vdmVzOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxpc3RlbmVyID0ge307XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVyUmVnaXN0ZXIgPSB0aGlzLmxpc3RlbmVyUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZXIgPSB0aGlzLmhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gKGksIGopID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIXNlbGYuZXZlbnRzW2V2ZW50XSB8fFxuICAgICAgICBzZWxmLmV2ZW50c1tldmVudF1bMF0gIT09IGkgfHxcbiAgICAgICAgc2VsZi5ldmVudHNbZXZlbnRdWzFdICE9PSBqXG4gICAgICApIHtcbiAgICAgICAgc2VsZi5ldmVudHNbZXZlbnRdID0gW2ksIGpdO1xuICAgICAgICBpZiAoc2VsZi5saXN0ZW5lcltldmVudF0gJiYgc2VsZi5saXN0ZW5lcltldmVudF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlbGYubGlzdGVuZXJbZXZlbnRdLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIoaSwgaik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbGlzdGVuZXJSZWdpc3RlcihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVyW2V2ZW50XSA9IHRoaXMubGlzdGVuZXJbZXZlbnRdIHx8IFtdO1xuICAgIHRoaXMubGlzdGVuZXJbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxheWVyc30+XG4gICAgICAgIDxCYWNrZ3JvdW5kTGF5ZXIgLz5cbiAgICAgICAgPEhpZ2hsaWdodExheWVyXG4gICAgICAgICAgYm9hcmRzaXplPXt0aGlzLnByb3BzLmJvYXJkLmxlbmd0aH1cbiAgICAgICAgICBsaXN0ZW5lclJlZ2lzdGVyPXt0aGlzLmxpc3RlbmVyUmVnaXN0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5lTGF5ZXIgYm9hcmRzaXplPXt0aGlzLnByb3BzLmJvYXJkLmxlbmd0aH0gLz5cbiAgICAgICAgPFN0b25lTGF5ZXJcbiAgICAgICAgICBib2FyZHNpemU9e3RoaXMucHJvcHMuYm9hcmQubGVuZ3RofVxuICAgICAgICAgIGxpc3RlbmVyUmVnaXN0ZXI9e3RoaXMubGlzdGVuZXJSZWdpc3Rlcn1cbiAgICAgICAgICBib2FyZD17dGhpcy5wcm9wcy5ib2FyZH1cbiAgICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja31cbiAgICAgICAgICB0ZW1wb3Jhcnk9e3RoaXMucHJvcHMudGVtcG9yYXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8TWFya0xheWVyXG4gICAgICAgICAgYm9hcmRzaXplPXt0aGlzLnByb3BzLmJvYXJkLmxlbmd0aH1cbiAgICAgICAgICBtYXJrcz17dGhpcy5wcm9wcy5tYXJrc31cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd01vdmVzICYmIChcbiAgICAgICAgICA8TW92ZUxheWVyXG4gICAgICAgICAgICBib2FyZHNpemU9e3RoaXMucHJvcHMuYm9hcmQubGVuZ3RofVxuICAgICAgICAgICAgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9XG4gICAgICAgICAgICBtb3Zlcz17dGhpcy5wcm9wcy5tb3Zlc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8RXZlbnRMYXllclxuICAgICAgICAgIGJvYXJkc2l6ZT17dGhpcy5wcm9wcy5ib2FyZC5sZW5ndGh9XG4gICAgICAgICAgY2xpY2s9e3RoaXMuaGFuZGxlcignY2xpY2snKX1cbiAgICAgICAgICB0b3VjaFN0YXJ0PXt0aGlzLmhhbmRsZXIoJ3RvdWNoU3RhcnQnKX1cbiAgICAgICAgICB0b3VjaE1vdmU9e3RoaXMuaGFuZGxlcigndG91Y2hNb3ZlJyl9XG4gICAgICAgICAgdG91Y2hFbmQ9e3RoaXMuaGFuZGxlcigndG91Y2hFbmQnKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhjc3MpKExheWVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2dvL2xheWVyL0xheWVyLmpzIiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAxNy8wMS8yMDE4XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgYmdDc3MgZnJvbSAnLi9CYWNrZ3JvdW5kTGF5ZXIuY3NzJztcblxuY29uc3QgYmdDeCA9IGNsYXNzTmFtZXMuYmluZChiZ0Nzcyk7XG5cbmNsYXNzIEJhY2tncm91bmRMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2JnQ3goe1xuICAgICAgICAgIGxheWVyOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoYmdDc3MpKEJhY2tncm91bmRMYXllcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9sYXllci9iYWNrZ3JvdW5kL0JhY2tncm91bmRMYXllci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQmFja2dyb3VuZExheWVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9CYWNrZ3JvdW5kTGF5ZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vQmFja2dyb3VuZExheWVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvYmFja2dyb3VuZC9CYWNrZ3JvdW5kTGF5ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQmFja2dyb3VuZExheWVyLWxheWVyLTFyVkZ0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5CYWNrZ3JvdW5kTGF5ZXItYm9hcmRyb3ctMlhaTHcge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLkJhY2tncm91bmRMYXllci1iYWNrZ3JvdW5kLURFVWNVIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vLi4vZ29ib2FyZC5qcGdcIikpICsgXCIpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL2JhY2tncm91bmQvQmFja2dyb3VuZExheWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtNQUN2Qix1QkFBdUI7RUFDM0IsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSw4QkFBOEI7TUFDMUIsaUJBQWlCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxnREFBMkM7Q0FDNUNcIixcImZpbGVcIjpcIkJhY2tncm91bmRMYXllci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxheWVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ib2FyZHJvdyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2dvYm9hcmQuanBnJyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJsYXllclwiOiBcIkJhY2tncm91bmRMYXllci1sYXllci0xclZGdFwiLFxuXHRcImJvYXJkcm93XCI6IFwiQmFja2dyb3VuZExheWVyLWJvYXJkcm93LTJYWkx3XCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcIkJhY2tncm91bmRMYXllci1iYWNrZ3JvdW5kLURFVWNVXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvYmFja2dyb3VuZC9CYWNrZ3JvdW5kTGF5ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvc3JjL3JvdXRlcy9nby9nb2JvYXJkLmpwZz8wZjI4ZjI0OFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby9nb2JvYXJkLmpwZ1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTcvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgTGluZUludGVyc2VjdGlvbiBmcm9tICcuL0xpbmVJbnRlcnNlY3Rpb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzcy1tb2R1bGVzL25vLXVudXNlZC1jbGFzc1xuaW1wb3J0IHMgZnJvbSAnLi9MaW5lTGF5ZXIuY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQocyk7XG5cbmNsYXNzIExpbmVMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYm9hcmRzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb24gPSB0aGlzLmludGVyc2VjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnMgPSBbXTtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuYm9hcmRzaXplKSB7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHRoaXMuc3RhcnMgPSBbWzIsIDJdLCBbMiwgNl0sIFs0LCA0XSwgWzYsIDJdLCBbNiwgNl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHRoaXMuc3RhcnMgPSBbWzMsIDNdLCBbMywgOV0sIFs2LCA2XSwgWzksIDNdLCBbOSwgOV1dO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIHRoaXMuc3RhcnMgPSBbXG4gICAgICAgICAgWzMsIDNdLFxuICAgICAgICAgIFszLCA5XSxcbiAgICAgICAgICBbMywgMTVdLFxuICAgICAgICAgIFs5LCAzXSxcbiAgICAgICAgICBbOSwgOV0sXG4gICAgICAgICAgWzksIDE1XSxcbiAgICAgICAgICBbMTUsIDNdLFxuICAgICAgICAgIFsxNSwgOV0sXG4gICAgICAgICAgWzE1LCAxNV0sXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaXNJdGVtSW5BcnJheShhcnJheSwgaXRlbSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXVswXSA9PT0gaXRlbVswXSAmJiBhcnJheVtpXVsxXSA9PT0gaXRlbVsxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW50ZXJzZWN0aW9uKGksIGopIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmVJbnRlcnNlY3Rpb25cbiAgICAgICAga2V5PXtgJHtpfSwke2p9YH1cbiAgICAgICAgc3Rhcj17dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMuc3RhcnMsIFtpLCBqXSl9XG4gICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICBsYXN0TGluZTogaSA9PT0gdGhpcy5wcm9wcy5ib2FyZHNpemUgLSAxLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB1dGlscy5yZW5kZXIodGhpcy5wcm9wcy5ib2FyZHNpemUsIGN4LCB0aGlzLmludGVyc2VjdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShMaW5lTGF5ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvbGluZS9MaW5lTGF5ZXIuanMiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDE3LzAxLzIwMThcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzcy1tb2R1bGVzL25vLXVudXNlZC1jbGFzc1xuaW1wb3J0IGNzcyBmcm9tICcuL0xpbmVJbnRlcnNlY3Rpb24uY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoY3NzKTtcblxuY2xhc3MgTGluZUludGVyc2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RhcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFzdExpbmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHt9LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2VsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBzdGFyOiB0aGlzLnByb3BzLnN0YXIsXG4gICAgICAgICAgaW50ZXJzZWN0aW9uOiB0cnVlLFxuICAgICAgICAgIGxpbmU6IHRydWUsXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNzcykoTGluZUludGVyc2VjdGlvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9sYXllci9saW5lL0xpbmVJbnRlcnNlY3Rpb24uanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xpbmVJbnRlcnNlY3Rpb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xpbmVJbnRlcnNlY3Rpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTGluZUludGVyc2VjdGlvbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL2xpbmUvTGluZUludGVyc2VjdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkxpbmVJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLWFGV21rIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5MaW5lSW50ZXJzZWN0aW9uLWxpbmUtMVFYSEk6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXRvcDogMXB4ICMwMDAgc29saWQ7XFxuICBjb250ZW50OiAnJztcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5MaW5lSW50ZXJzZWN0aW9uLWxpbmUtMVFYSEk6bGFzdC1jaGlsZDo6YmVmb3JlIHtcXG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDApIHNvbGlkO1xcbn1cXG5cXG4uTGluZUludGVyc2VjdGlvbi1saW5lLTFRWEhJOjphZnRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCAjMDAwIHNvbGlkO1xcbiAgY29udGVudDogJyAnO1xcbiAgei1pbmRleDogLTE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5MaW5lSW50ZXJzZWN0aW9uLXN0YXItMnBxaUYge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoYmxhY2sgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGJsYWNrIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChibGFjayAyMCUsIHRyYW5zcGFyZW50IDIwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcHggMXB4O1xcbn1cXG5cXG4uTGluZUludGVyc2VjdGlvbi1sYXN0TGluZS03Y1hIeDo6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbGluZS9MaW5lSW50ZXJzZWN0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtNQUMxQixpQkFBaUI7Q0FDdEI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsdUNBQXVDO0NBQ3hDOztBQUVEO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdFQUFnRTtFQUNoRSwyREFBMkQ7RUFDM0Qsd0RBQXdEO0VBQ3hELDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEJcIixcImZpbGVcIjpcIkxpbmVJbnRlcnNlY3Rpb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbnRlcnNlY3Rpb24ge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLmxpbmU6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXRvcDogMXB4ICMwMDAgc29saWQ7XFxuICBjb250ZW50OiAnJztcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5saW5lOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwKSBzb2xpZDtcXG59XFxuXFxuLmxpbmU6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItbGVmdDogMXB4ICMwMDAgc29saWQ7XFxuICBjb250ZW50OiAnICc7XFxuICB6LWluZGV4OiAtMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuXFxuLnN0YXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoYmxhY2sgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGJsYWNrIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChibGFjayAyMCUsIHRyYW5zcGFyZW50IDIwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcHggMXB4O1xcbn1cXG5cXG4ubGFzdExpbmU6OmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW50ZXJzZWN0aW9uXCI6IFwiTGluZUludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tYUZXbWtcIixcblx0XCJsaW5lXCI6IFwiTGluZUludGVyc2VjdGlvbi1saW5lLTFRWEhJXCIsXG5cdFwic3RhclwiOiBcIkxpbmVJbnRlcnNlY3Rpb24tc3Rhci0ycHFpRlwiLFxuXHRcImxhc3RMaW5lXCI6IFwiTGluZUludGVyc2VjdGlvbi1sYXN0TGluZS03Y1hIeFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2dvL2xheWVyL2xpbmUvTGluZUludGVyc2VjdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xpbmVMYXllci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTGluZUxheWVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xpbmVMYXllci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL2xpbmUvTGluZUxheWVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTGluZUxheWVyLWxheWVyLTFpX0pGIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5MaW5lTGF5ZXItYm9hcmRyb3ctMy1HaXkge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9saW5lL0xpbmVMYXllci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7TUFDdkIsdUJBQXVCO0VBQzNCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsOEJBQThCO01BQzFCLGlCQUFpQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztDQUNmXCIsXCJmaWxlXCI6XCJMaW5lTGF5ZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYXllciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRyb3cge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImxheWVyXCI6IFwiTGluZUxheWVyLWxheWVyLTFpX0pGXCIsXG5cdFwiYm9hcmRyb3dcIjogXCJMaW5lTGF5ZXItYm9hcmRyb3ctMy1HaXlcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9sYXllci9saW5lL0xpbmVMYXllci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDE3LzAxLzIwMThcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEhpZ2hsaWdodEludGVyc2VjdGlvbiBmcm9tICcuL0hpZ2hsaWdodEludGVyc2VjdGlvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuL0hpZ2hsaWdodExheWVyLmNzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHMpO1xuXG5jbGFzcyBIaWdobGlnaHRMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYm9hcmRzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbGlzdGVuZXJSZWdpc3RlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBbJ3RvdWNoU3RhcnQnLCAndG91Y2hNb3ZlJywgJ3RvdWNoRW5kJywgJ2NsaWNrJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxpc3RlbmVyUmVnaXN0ZXIoZXZlbnQsIHRoaXMuZXZlbnRIYW5kbGVyKGV2ZW50KSk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb24gPSB0aGlzLmludGVyc2VjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBldmVudHM6IHt9LFxuICAgIH07XG4gIH1cblxuICBldmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICByZXR1cm4gKGksIGopID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBbZXZlbnRdOiBbaSwgal0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaW50ZXJzZWN0aW9uKGksIGopIHtcbiAgICBjb25zdCBoaWdobGlnaHQgPVxuICAgICAgdGhpcy5zdGF0ZS5ldmVudHMudG91Y2hTdGFydCB8fCB0aGlzLnN0YXRlLmV2ZW50cy50b3VjaE1vdmUgfHwgW107XG4gICAgcmV0dXJuIChcbiAgICAgIDxIaWdobGlnaHRJbnRlcnNlY3Rpb25cbiAgICAgICAga2V5PXtgJHtpfSwke2p9YH1cbiAgICAgICAgcm93PXtpfVxuICAgICAgICBjb2w9e2p9XG4gICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICBoaWdobGlnaHQ6IGogPT09IGhpZ2hsaWdodFsxXSB8fCBpID09PSBoaWdobGlnaHRbMF0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnJlbmRlcih0aGlzLnByb3BzLmJvYXJkc2l6ZSwgY3gsIHRoaXMuaW50ZXJzZWN0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhpZ2hsaWdodExheWVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2dvL2xheWVyL2hpZ2hsaWdodC9IaWdobGlnaHRMYXllci5qcyIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTcvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuL0hpZ2hsaWdodEludGVyc2VjdGlvbi5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgSGlnaGxpZ2h0SW50ZXJzZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByb3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2w6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaGlnaGxpZ2h0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtb2Zmc2V0LXg9e3RoaXMucHJvcHMucm93fVxuICAgICAgICBkYXRhLW9mZnNldC15PXt0aGlzLnByb3BzLmNvbH1cbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgaW50ZXJzZWN0aW9uOiB0cnVlLFxuICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2xhc3NOYW1lcyxcbiAgICAgICAgfSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShIaWdobGlnaHRJbnRlcnNlY3Rpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvaGlnaGxpZ2h0L0hpZ2hsaWdodEludGVyc2VjdGlvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSGlnaGxpZ2h0SW50ZXJzZWN0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9IaWdobGlnaHRJbnRlcnNlY3Rpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSGlnaGxpZ2h0SW50ZXJzZWN0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvaGlnaGxpZ2h0L0hpZ2hsaWdodEludGVyc2VjdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkhpZ2hsaWdodEludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tT210bDcge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLkhpZ2hsaWdodEludGVyc2VjdGlvbi1oaWdobGlnaHQtMmdDN3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL2hpZ2hsaWdodC9IaWdobGlnaHRJbnRlcnNlY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO01BQzFCLGlCQUFpQjtDQUN0Qjs7QUFFRDtFQUNFLHFDQUFxQztDQUN0Q1wiLFwiZmlsZVwiOlwiSGlnaGxpZ2h0SW50ZXJzZWN0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW50ZXJzZWN0aW9uIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW50ZXJzZWN0aW9uXCI6IFwiSGlnaGxpZ2h0SW50ZXJzZWN0aW9uLWludGVyc2VjdGlvbi1PbXRsN1wiLFxuXHRcImhpZ2hsaWdodFwiOiBcIkhpZ2hsaWdodEludGVyc2VjdGlvbi1oaWdobGlnaHQtMmdDN3hcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9sYXllci9oaWdobGlnaHQvSGlnaGxpZ2h0SW50ZXJzZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSGlnaGxpZ2h0TGF5ZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0hpZ2hsaWdodExheWVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0hpZ2hsaWdodExheWVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvaGlnaGxpZ2h0L0hpZ2hsaWdodExheWVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGlnaGxpZ2h0TGF5ZXItbGF5ZXItM2s1Mjcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhpZ2hsaWdodExheWVyLWJvYXJkcm93LW4zNExhIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvaGlnaGxpZ2h0L0hpZ2hsaWdodExheWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtNQUN2Qix1QkFBdUI7RUFDM0IsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSw4QkFBOEI7TUFDMUIsaUJBQWlCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0NBQ2ZcIixcImZpbGVcIjpcIkhpZ2hsaWdodExheWVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGF5ZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJvYXJkcm93IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJsYXllclwiOiBcIkhpZ2hsaWdodExheWVyLWxheWVyLTNrNTI3XCIsXG5cdFwiYm9hcmRyb3dcIjogXCJIaWdobGlnaHRMYXllci1ib2FyZHJvdy1uMzRMYVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2dvL2xheWVyL2hpZ2hsaWdodC9IaWdobGlnaHRMYXllci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5pbXBvcnQgR2FtZUVuZ2luZSBmcm9tICdnYW1lLWVuZ2luZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBzIGZyb20gJy4uL0JvYXJkTGF5ZXIuY3NzJztcbmltcG9ydCBJbnRlcnNlY3Rpb24gZnJvbSAnLi9TdG9uZUludGVyc2VjdGlvbic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgU3RvbmVMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYm9hcmRzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgYm9hcmQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpKS5pc1JlcXVpcmVkLFxuICAgIGxpc3RlbmVyUmVnaXN0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdGVtcG9yYXJ5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29sb3I6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGVtcG9yYXJ5OiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFsndG91Y2hFbmQnLCAnY2xpY2snXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGlzdGVuZXJSZWdpc3RlcihldmVudCwgdGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpKTtcbiAgICB9KTtcbiAgICB0aGlzLmludGVyc2VjdGlvbiA9IHRoaXMuaW50ZXJzZWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBldmVudEhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaGFuZGxlQ2xpY2s7XG4gIH1cblxuICBpbnRlcnNlY3Rpb24oaSwgaikge1xuICAgIGNvbnN0IHRlbXBvcmFyeSA9XG4gICAgICAhIXRoaXMucHJvcHMudGVtcG9yYXJ5ICYmXG4gICAgICAodGhpcy5wcm9wcy50ZW1wb3JhcnkucG9zaXRpb25bMF0gPT09IGkgJiZcbiAgICAgICAgdGhpcy5wcm9wcy50ZW1wb3JhcnkucG9zaXRpb25bMV0gPT09IGopO1xuICAgIHJldHVybiAoXG4gICAgICA8SW50ZXJzZWN0aW9uXG4gICAgICAgIGtleT17YCR7aX0sJHtqfWB9XG4gICAgICAgIHJvdz17aX1cbiAgICAgICAgY29sPXtqfVxuICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgYmxhY2s6XG4gICAgICAgICAgICB0aGlzLnByb3BzLmJvYXJkW2ldW2pdID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLkJMQUNLIHx8XG4gICAgICAgICAgICAodGVtcG9yYXJ5ICYmXG4gICAgICAgICAgICAgICEhdGhpcy5wcm9wcy50ZW1wb3JhcnkgJiZcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZW1wb3JhcnkuY29sb3IgPT09IEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0spLFxuICAgICAgICAgIHdoaXRlOlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ib2FyZFtpXVtqXSA9PT0gR2FtZUVuZ2luZS5Hby5DT0xPUi5XSElURSB8fFxuICAgICAgICAgICAgKHRlbXBvcmFyeSAmJlxuICAgICAgICAgICAgICAhIXRoaXMucHJvcHMudGVtcG9yYXJ5ICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudGVtcG9yYXJ5LmNvbG9yID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLldISVRFKSxcbiAgICAgICAgICB0ZW1wb3JhcnksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnJlbmRlcih0aGlzLnByb3BzLmJvYXJkc2l6ZSwgY3gsIHRoaXMuaW50ZXJzZWN0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFN0b25lTGF5ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvU3RvbmVMYXllci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQm9hcmRMYXllci1sYXllci00cVdrRSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uQm9hcmRMYXllci1ib2FyZHJvdy0zX19OeiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2dvL2xheWVyL0JvYXJkTGF5ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO01BQ3ZCLHVCQUF1QjtFQUMzQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLDhCQUE4QjtNQUMxQixpQkFBaUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7Q0FDZlwiLFwiZmlsZVwiOlwiQm9hcmRMYXllci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxheWVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ib2FyZHJvdyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibGF5ZXJcIjogXCJCb2FyZExheWVyLWxheWVyLTRxV2tFXCIsXG5cdFwiYm9hcmRyb3dcIjogXCJCb2FyZExheWVyLWJvYXJkcm93LTNfX056XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvQm9hcmRMYXllci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDE4LzAxLzIwMThcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzcy1tb2R1bGVzL25vLXVudXNlZC1jbGFzc1xuaW1wb3J0IHMgZnJvbSAnLi9TdG9uZUludGVyc2VjdGlvbi5jc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzKTtcblxuY2xhc3MgU3RvbmVJbnRlcnNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBibGFjazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIHdoaXRlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgdGVtcG9yYXJ5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtb2Zmc2V0LXg9e3RoaXMucHJvcHMucm93fVxuICAgICAgICBkYXRhLW9mZnNldC15PXt0aGlzLnByb3BzLmNvbH1cbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgaW50ZXJzZWN0aW9uOiB0cnVlLFxuICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2xhc3NOYW1lcyxcbiAgICAgICAgfSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShTdG9uZUludGVyc2VjdGlvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9sYXllci9zdG9uZS9TdG9uZUludGVyc2VjdGlvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vU3RvbmVJbnRlcnNlY3Rpb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL1N0b25lSW50ZXJzZWN0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL1N0b25lSW50ZXJzZWN0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvc3RvbmUvU3RvbmVJbnRlcnNlY3Rpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuU3RvbmVJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLTFFdUxYIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5TdG9uZUludGVyc2VjdGlvbi1ibGFjay0ybUFvTixcXG4uU3RvbmVJbnRlcnNlY3Rpb24td2hpdGUtMnQ4U18ge1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLlN0b25lSW50ZXJzZWN0aW9uLWJsYWNrLTJtQW9OOjpiZWZvcmUsXFxuLlN0b25lSW50ZXJzZWN0aW9uLXdoaXRlLTJ0OFNfOjpiZWZvcmUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG5cXG4uU3RvbmVJbnRlcnNlY3Rpb24tYmxhY2stMm1Bb046OmFmdGVyLFxcbi5TdG9uZUludGVyc2VjdGlvbi13aGl0ZS0ydDhTXzo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA1OCU7XFxuICBtYXJnaW4tdG9wOiA0MiU7XFxufVxcblxcbi5TdG9uZUludGVyc2VjdGlvbi1ibGFjay0ybUFvTiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYmxhY2sucG5nXCIpKSArIFwiKTtcXG59XFxuXFxuLlN0b25lSW50ZXJzZWN0aW9uLXdoaXRlLTJ0OFNfIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi93aGl0ZS5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG4uU3RvbmVJbnRlcnNlY3Rpb24tdGVtcG9yYXJ5LTNVNGd5LlN0b25lSW50ZXJzZWN0aW9uLWJsYWNrLTJtQW9OIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9jaG9vc2UucG5nXCIpKSArIFwiKSwgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2JsYWNrLnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbi5TdG9uZUludGVyc2VjdGlvbi10ZW1wb3JhcnktM1U0Z3kuU3RvbmVJbnRlcnNlY3Rpb24td2hpdGUtMnQ4U18ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Nob29zZS5wbmdcIikpICsgXCIpLCB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vd2hpdGUucG5nXCIpKSArIFwiKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9zdG9uZS9TdG9uZUludGVyc2VjdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7TUFDMUIsaUJBQWlCO0NBQ3RCOztBQUVEOztFQUVFLG1DQUFtQztFQUNuQyxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjs7QUFFRDs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0RBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsZ0RBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsK0VBQTBEO0NBQzNEOztBQUVEO0VBQ0UsK0VBQTBEO0NBQzNEXCIsXCJmaWxlXCI6XCJTdG9uZUludGVyc2VjdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmludGVyc2VjdGlvbiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4uYmxhY2ssXFxuLndoaXRlIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5ibGFjazo6YmVmb3JlLFxcbi53aGl0ZTo6YmVmb3JlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuXFxuLmJsYWNrOjphZnRlcixcXG4ud2hpdGU6OmFmdGVyIHtcXG4gIGhlaWdodDogNTglO1xcbiAgbWFyZ2luLXRvcDogNDIlO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JsYWNrLnBuZycpO1xcbn1cXG5cXG4ud2hpdGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3doaXRlLnBuZycpO1xcbn1cXG5cXG4udGVtcG9yYXJ5LmJsYWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9jaG9vc2UucG5nJyksIHVybCgnLi9ibGFjay5wbmcnKTtcXG59XFxuXFxuLnRlbXBvcmFyeS53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vY2hvb3NlLnBuZycpLCB1cmwoJy4vd2hpdGUucG5nJyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbnRlcnNlY3Rpb25cIjogXCJTdG9uZUludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tMUV1TFhcIixcblx0XCJibGFja1wiOiBcIlN0b25lSW50ZXJzZWN0aW9uLWJsYWNrLTJtQW9OXCIsXG5cdFwid2hpdGVcIjogXCJTdG9uZUludGVyc2VjdGlvbi13aGl0ZS0ydDhTX1wiLFxuXHRcInRlbXBvcmFyeVwiOiBcIlN0b25lSW50ZXJzZWN0aW9uLXRlbXBvcmFyeS0zVTRneVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2dvL2xheWVyL3N0b25lL1N0b25lSW50ZXJzZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTgvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgSW50ZXJzZWN0aW9uIGZyb20gJy4vTW92ZUludGVyc2VjdGlvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuLi9Cb2FyZExheWVyLmNzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHMpO1xuXG5jbGFzcyBNb3ZlTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJvYXJkc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG1vdmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSkuaXNSZXF1aXJlZCxcbiAgICBib2FyZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikpLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb24gPSB0aGlzLmludGVyc2VjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaW50ZXJzZWN0aW9uKGksIGopIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEludGVyc2VjdGlvblxuICAgICAgICBrZXk9e2Ake2l9LCR7an1gfVxuICAgICAgICByb3c9e2l9XG4gICAgICAgIGNvbD17an1cbiAgICAgICAgc3RvbmU9e3RoaXMucHJvcHMuYm9hcmRbaV1bal19XG4gICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLm1vdmVzW2ldW2pdfVxuICAgICAgICBib2FyZHNpemU9e3RoaXMucHJvcHMuYm9hcmRzaXplfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB1dGlscy5yZW5kZXIodGhpcy5wcm9wcy5ib2FyZHNpemUsIGN4LCB0aGlzLmludGVyc2VjdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShNb3ZlTGF5ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvbW92ZS9Nb3ZlTGF5ZXIuanMiLCIvKipcbiAqIEBhdXRob3IgbG9va2lzIG9uIDE3LzAxLzIwMThcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdhbWVFbmdpbmUgZnJvbSAnZ2FtZS1lbmdpbmUnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzcy1tb2R1bGVzL25vLXVudXNlZC1jbGFzc1xuaW1wb3J0IHMgZnJvbSAnLi9Nb3ZlSW50ZXJzZWN0aW9uLmNzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHMpO1xuXG5jbGFzcyBNb3ZlSW50ZXJzZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByb3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2w6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHN0b25lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgYm9hcmRzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtlbGVtZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX1cbiAgICAgICAgZGF0YS1vZmZzZXQteD17dGhpcy5wcm9wcy5yb3d9XG4gICAgICAgIGRhdGEtb2Zmc2V0LXk9e3RoaXMucHJvcHMuY29sfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBpbnRlcnNlY3Rpb246IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoY2FsYygxLjYgLSAke3RoaXMucHJvcHNcbiAgICAgICAgICAgICAgLmJvYXJkc2l6ZSAvIDIwfSkpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgbnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgYmxhY2s6IHRoaXMucHJvcHMuc3RvbmUgPT09IEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEUsXG4gICAgICAgICAgICB3aGl0ZTogdGhpcy5wcm9wcy5zdG9uZSA9PT0gR2FtZUVuZ2luZS5Hby5DT0xPUi5CTEFDSyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnZhbHVlICE9PSAwID8gdGhpcy5wcm9wcy52YWx1ZSA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShNb3ZlSW50ZXJzZWN0aW9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2dvL2xheWVyL21vdmUvTW92ZUludGVyc2VjdGlvbi5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTW92ZUludGVyc2VjdGlvbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTW92ZUludGVyc2VjdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9Nb3ZlSW50ZXJzZWN0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbW92ZS9Nb3ZlSW50ZXJzZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTW92ZUludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tM1UxSlIge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLk1vdmVJbnRlcnNlY3Rpb24td2hpdGUtMVFXcm4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uTW92ZUludGVyc2VjdGlvbi1ibGFjay0yM3NzMCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5Nb3ZlSW50ZXJzZWN0aW9uLW51bWJlci0zdm9YeiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IC0wLjV2dztcXG59XFxuXFxuLk1vdmVJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLTNVMUpSIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9tb3ZlL01vdmVJbnRlcnNlY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO01BQzFCLGlCQUFpQjtDQUN0Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiTW92ZUludGVyc2VjdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmludGVyc2VjdGlvbiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4ud2hpdGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogLTAuNXZ3O1xcbn1cXG5cXG4uaW50ZXJzZWN0aW9uIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImludGVyc2VjdGlvblwiOiBcIk1vdmVJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLTNVMUpSXCIsXG5cdFwid2hpdGVcIjogXCJNb3ZlSW50ZXJzZWN0aW9uLXdoaXRlLTFRV3JuXCIsXG5cdFwiYmxhY2tcIjogXCJNb3ZlSW50ZXJzZWN0aW9uLWJsYWNrLTIzc3MwXCIsXG5cdFwibnVtYmVyXCI6IFwiTW92ZUludGVyc2VjdGlvbi1udW1iZXItM3ZvWHpcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9sYXllci9tb3ZlL01vdmVJbnRlcnNlY3Rpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTcvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5cbmltcG9ydCBFdmVudEludGVyc2VjdGlvbiBmcm9tICcuL0V2ZW50SW50ZXJzZWN0aW9uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBzIGZyb20gJy4uL0JvYXJkTGF5ZXIuY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQocyk7XG5cbmNsYXNzIEV2ZW50TGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJvYXJkc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdG91Y2hNb3ZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRvdWNoRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgdGhpcy5wcm9wcy5jbGljayhcbiAgICAgIHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0LXgnKSwgMTApLFxuICAgICAgcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vZmZzZXQteScpLCAxMCksXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZXIoZXZlbnQpIHtcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgdGhpcy5wcm9wc1tldmVudF0oXG4gICAgICAgIHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0LXgnKSwgMTApLFxuICAgICAgICBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldC15JyksIDEwKSxcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmJvYXJkc2l6ZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5ib2FyZHNpemU7IGogKz0gMSkge1xuICAgICAgICByb3cucHVzaCg8RXZlbnRJbnRlcnNlY3Rpb24gcm93PXtpfSBjb2w9e2p9IGtleT17YCR7aX0sJHtqfWB9IC8+KTtcbiAgICAgIH1cbiAgICAgIGludGVyc2VjdGlvbnMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgIGJvYXJkcm93OiB0cnVlLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAge3Jvd31cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlcigndG91Y2hTdGFydCcpfVxuICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVyKCd0b3VjaE1vdmUnKX1cbiAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVyKCd0b3VjaEVuZCcpfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBsYXllcjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtpbnRlcnNlY3Rpb25zfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEV2ZW50TGF5ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvZXZlbnQvRXZlbnRMYXllci5qcyIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTcvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuLi9JbnRlcnNlY3Rpb24uY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQocyk7XG5cbmNsYXNzIEV2ZW50SW50ZXJzZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByb3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2w6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgZGF0YS1vZmZzZXQteD17dGhpcy5wcm9wcy5yb3d9XG4gICAgICAgIGRhdGEtb2Zmc2V0LXk9e3RoaXMucHJvcHMuY29sfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBpbnRlcnNlY3Rpb246IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRXZlbnRJbnRlcnNlY3Rpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvZXZlbnQvRXZlbnRJbnRlcnNlY3Rpb24uanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0ludGVyc2VjdGlvbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vSW50ZXJzZWN0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0ludGVyc2VjdGlvbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL0ludGVyc2VjdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tMzR2Vzgge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9JbnRlcnNlY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO01BQzFCLGlCQUFpQjtDQUN0QlwiLFwiZmlsZVwiOlwiSW50ZXJzZWN0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW50ZXJzZWN0aW9uIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbnRlcnNlY3Rpb25cIjogXCJJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLTM0dlc4XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvSW50ZXJzZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTgvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgSW50ZXJzZWN0aW9uIGZyb20gJy4vTWFya0ludGVyc2VjdGlvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuLi9Cb2FyZExheWVyLmNzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHMpO1xuXG5jbGFzcyBNYXJrTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJvYXJkc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG1hcmtzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmludGVyc2VjdGlvbiA9IHRoaXMuaW50ZXJzZWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBpbnRlcnNlY3Rpb24oaSwgaikge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcmtzW2ldW2pdKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW50ZXJzZWN0aW9uXG4gICAgICAgICAga2V5PXtgJHtpfSwke2p9YH1cbiAgICAgICAgICByb3c9e2l9XG4gICAgICAgICAgY29sPXtqfVxuICAgICAgICAgIG1hcms9e3RoaXMucHJvcHMubWFya3NbaV1bal19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPEludGVyc2VjdGlvbiBrZXk9e2Ake2l9LCR7an1gfSByb3c9e2l9IGNvbD17an0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnJlbmRlcih0aGlzLnByb3BzLmJvYXJkc2l6ZSwgY3gsIHRoaXMuaW50ZXJzZWN0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE1hcmtMYXllcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9nby9sYXllci9tYXJrL01hcmtMYXllci5qcyIsIi8qKlxuICogQGF1dGhvciBsb29raXMgb24gMTcvMDEvMjAxOFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR2FtZUVuZ2luZSBmcm9tICdnYW1lLWVuZ2luZSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgcyBmcm9tICcuL01hcmtJbnRlcnNlY3Rpb24uY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQocyk7XG5cbmNsYXNzIE1hcmtJbnRlcnNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG1hcms6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXJrOiAnZW1wdHknLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLW9mZnNldC14PXt0aGlzLnByb3BzLnJvd31cbiAgICAgICAgZGF0YS1vZmZzZXQteT17dGhpcy5wcm9wcy5jb2x9XG4gICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgIGludGVyc2VjdGlvbjogdHJ1ZSxcbiAgICAgICAgICBtYXJrOiB0cnVlLFxuICAgICAgICAgIFt0aGlzLnByb3BzLm1hcmtdOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE1hcmtJbnRlcnNlY3Rpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvZ28vbGF5ZXIvbWFyay9NYXJrSW50ZXJzZWN0aW9uLmpzIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9NYXJrSW50ZXJzZWN0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9NYXJrSW50ZXJzZWN0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL01hcmtJbnRlcnNlY3Rpb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9nby9sYXllci9tYXJrL01hcmtJbnRlcnNlY3Rpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTWFya0ludGVyc2VjdGlvbi1pbnRlcnNlY3Rpb24tMXZ6bkcge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLk1hcmtJbnRlcnNlY3Rpb24tY2hvb3NlLTNPV3RRIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Nob29zZS5wbmdcIikpICsgXCIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uTWFya0ludGVyc2VjdGlvbi1tYXJrLTFVV1QxOjpiZWZvcmUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG5cXG4uTWFya0ludGVyc2VjdGlvbi1tYXJrLTFVV1QxOjphZnRlciB7XFxuICBoZWlnaHQ6IDU4JTtcXG4gIG1hcmdpbi10b3A6IDQyJTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9tYXJrL01hcmtJbnRlcnNlY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO01BQzFCLGlCQUFpQjtDQUN0Qjs7QUFFRDtFQUNFLGlFQUF1RDtFQUN2RCxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQlwiLFwiZmlsZVwiOlwiTWFya0ludGVyc2VjdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmludGVyc2VjdGlvbiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4uY2hvb3NlIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKCcuL2Nob29zZS5wbmcnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1hcms6OmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcblxcbi5tYXJrOjphZnRlciB7XFxuICBoZWlnaHQ6IDU4JTtcXG4gIG1hcmdpbi10b3A6IDQyJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImludGVyc2VjdGlvblwiOiBcIk1hcmtJbnRlcnNlY3Rpb24taW50ZXJzZWN0aW9uLTF2em5HXCIsXG5cdFwiY2hvb3NlXCI6IFwiTWFya0ludGVyc2VjdGlvbi1jaG9vc2UtM09XdFFcIixcblx0XCJtYXJrXCI6IFwiTWFya0ludGVyc2VjdGlvbi1tYXJrLTFVV1QxXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvbWFyay9NYXJrSW50ZXJzZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZPVUpDUWtVMk1VTTJSVFU0TVRGRk5UZ3lOams1TlRSRU1FTTRNVVJHTmpFaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9VSkNRa1UyTVVRMlJUVTRNVEZGTlRneU5qazVOVFJFTUVNNE1VUkdOakVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvNVFrSkNSVFl4UVRaRk5UZ3hNVVUxT0RJMk9UazFORVF3UXpneFJFWTJNU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG81UWtKQ1JUWXhRalpGTlRneE1VVTFPREkyT1RrMU5FUXdRemd4UkVZMk1TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QdEVuc3lJQUFBRzhTVVJCVkhqYTdGZTlTZ05CRU01cE1DcjRBbUswRkdLVlhvdkVSdElwUmtIRncwNGZRaVR4SWJRVHhWZ2NBVWxuRlFWalpXR25JS1lJMFNjUS9FTTR2NFVwd3JDM2YwUVA0UVkrSnJPM00vdnQzK3pFQzhNd0ZhY01wR0tXaEVEc0JOSTJuY2NxNFJEVUtsQUVab0VwK3RRQldrQVRDRjczdkUvVG1KN3BMY0RnKzFCbFlGclQ5WkZJN1BhRkFBWVdzendDQ3BhcmV3bHNnVWpIbVFBR3owSmRBRG5ITGI0SEZrQ2k2M29JanlXRFB3QlZZQWJJRU1UdkNuM3JsUnpGc0Y4QnpQNEFhcHMxbjlLeWZrZjRwR203TnRpblEvanNHQk5Bb0dHb2Q5WjhoaURyaGdlMkJyWEdta2ZnLzJHNkJTdk12Z044aTczM3lVY1ZVMG1neU94RzFMTExoUG8yTkRHVkJPYVlIVGpjZ0VBVFUwa2d5K3kyQTRHMkpxYVNBRStsbWI5K2pGNllQZTRRZTRMWnp6WUVicGxkZGlEQXIreU5EWUZyWmk5UmtqRjl1QWFoRmpVeGxRUnF6TTdyVWlxVEUvTGhXZlNmcE9LZWdFM0pNeXd5M0RsUUI1NEFVYVJNQXN1MDdIem1WeGk4NEZvUitaTG5PRStvR2o3SG04NDFJYjNqSlNvdWJFWDRsRlMxZ0cxSkpqc1RVUks1NTg0RWlNUW83ZlU4NVhhUlhyK0FMbDB6Z1RvR2YrdDdVWnI4TVVrSS9KYjhDREFBV0g2YjRMd0RJQjRBQUFBQVNVVk9SSzVDWUlJPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2xheWVyL21hcmsvY2hvb3NlLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vTGF5ZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xheWVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItcnVsZXMtMyEuL0xheWVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vbGF5ZXIvTGF5ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5MYXllci1sYXllcnMtMTZDREsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDg1dnc7IC8qIDE6MSBBc3BlY3QgUmF0aW8gKi9cXG4gIGhlaWdodDogODV2dztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9nby9sYXllci9MYXllci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWSxDQUFDLHNCQUFzQjtFQUNuQyxhQUFhO0NBQ2RcIixcImZpbGVcIjpcIkxheWVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4NXZ3OyAvKiAxOjEgQXNwZWN0IFJhdGlvICovXFxuICBoZWlnaHQ6IDg1dnc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJsYXllcnNcIjogXCJMYXllci1sYXllcnMtMTZDREtcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9nby9sYXllci9MYXllci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwibXV0YXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlR29cIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkZWZhdWx0VmFsdWVcIjpudWxsfSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29sb3JcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGVmYXVsdFZhbHVlXCI6bnVsbH1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZUdvXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbG9yXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb2xvclwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTAxfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCJtdXRhdGlvbiB1cGRhdGVHbygkaWQ6IFN0cmluZyEsICRjb2xvcjogU3RyaW5nISkge1xcbiAgdXBkYXRlR28oaWQ6ICRpZCwgY29sb3I6ICRjb2xvcikge1xcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVzL2dvL2ludml0ZS5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkdvXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGVmYXVsdFZhbHVlXCI6bnVsbH1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdvXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZW5naW5lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbmZvXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYm9hcmRzaXplXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJibGFja1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdvYWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9XX19XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEzM319O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwicXVlcnkgR28oJGlkOiBTdHJpbmchKSB7XFxuICBnbyhpZDogJGlkKSB7XFxuICAgIGlkXFxuICAgIGVuZ2luZVxcbiAgICBpbmZvIHtcXG4gICAgICBib2FyZHNpemVcXG4gICAgICBibGFja1xcbiAgICAgIHdoaXRlXFxuICAgICAgZ29hbFxcbiAgICB9XFxuICB9XFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZ28vZ28uZ3JhcGhxbFxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQVZBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFaQTtBQUFBO0FBV0E7QUFYQTtBQW1CQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBa0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQWRBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFEQTs7QUFnQkE7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUEzQkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBNkJBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUExQkE7QUFpQ0E7QUFuRUE7QUFsRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQTlFQTtBQXhJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwTkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFsQkE7QUF6TkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFUQTtBQWlCQTtBQU9BO0FBQ0E7QUFEQTtBQXpDQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBM0RBO0FBNERBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBOEtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBelRBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBREE7Ozs7QUFPQTtBQUNBO0FBREE7O0FBcVRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9VQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUE5REE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWEE7O0FBREE7Ozs7QUFlQTtBQUNBO0FBREE7O0FBa0RBOzs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7Ozs7QUF4R0E7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7QUEwR0E7Ozs7OztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7Ozs7QUFyQkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBdUJBOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBOzs7O0FBckZBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7O0FBREE7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFGQTs7QUEyRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7QUFWQTtBQUNBO0FBWUE7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFyQkE7QUFDQTtBQUxBO0FBMkJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBekRBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFEQTs7QUEyREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTs7OztBQXZDQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7O0FBeUNBOzs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQTVDQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7OztBQXBCQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTs7QUFzQkE7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFnQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7QUFYQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBekRBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBOztBQURBOzs7O0FBWUE7QUFDQTtBQURBOztBQWdEQTs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7Ozs7QUF0QkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBOztBQXdCQTs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUEzQkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUE2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBU0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTs7OztBQXJEQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUF1REE7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTs7OztBQWxFQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7QUFoQkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBa0JBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBM0JBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBOzs7O0FBdkJBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBREE7Ozs7QUFPQTtBQUNBO0FBREE7O0FBbUJBOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==