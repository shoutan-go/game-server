require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		9: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunks/" + ({"0":"go","1":"home","2":"go-creation","3":"go-creation-match","4":"about","5":"not-found","6":"login","7":"admin","8":"match"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config___default.a.databaseUrl, {
  define: {
    freezeTableName: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (sequelize);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GoInfo__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GoMove__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MatchInfo__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MatchGame__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__GoInfo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__GoMove__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__MatchInfo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__MatchGame__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});
__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});
__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync() {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync.apply(__WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */], arguments);
}

/* harmony default export */ __webpack_exports__["i"] = ({
  sync: sync
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,
  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || "http://localhost:".concat(process.env.PORT || 3000)
  },
  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',
  // Authentication
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || 'React Starter Kit!'
    }
  },
  // GNUGO
  gnugo: process.env.GNUGO || 'http://127.0.0.1:5001/score/estimate',
  // Redis
  redis: process.env.REDIS || 'redis://localhost:6379',
  sessionSecret: process.env.SESSION_SECRET || "It's a secret",
  wechat: {
    appId: 'wxc67a197c5c3f004e',
    appSecret: '60e541fff59447a7267502f974cc262d'
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);



__WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.promisifyAll(__WEBPACK_IMPORTED_MODULE_1_redis___default.a.RedisClient.prototype);
__WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.promisifyAll(__WEBPACK_IMPORTED_MODULE_1_redis___default.a.Multi.prototype);
var client = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config___default.a.redis);
var subscriber = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config___default.a.redis);
client.on('error', function (err) {
  return console.log(err);
}); // eslint-disable-line no-console

subscriber.on('error', function (err) {
  return console.log(err);
}); // eslint-disable-line no-console



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);

var GoType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Go',
  fields: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    engine: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    info: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'GoInfo',
        fields: {
          boardsize: {
            type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
          },
          black: {
            type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
          },
          white: {
            type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
          },
          goal: {
            type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
          }
        }
      })
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (GoType);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/error/ErrorPage.js";

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





var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      if (true && this.props.error) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.props.error.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, this.props.error.stack));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Error"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Sorry, a critical error occurred on this page."));
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(ErrorPage, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      stack: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    })
  }
});
Object.defineProperty(ErrorPage, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: null
  }
});

/* harmony default export */ __webpack_exports__["b"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(50);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-rules-3!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_RUNTIME_VARIABLE; });
/* eslint-disable import/prefer-default-export */
var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(51);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(52);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("game-engine");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(24);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connect_redis__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connect_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_connect_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_ws__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie_parser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_express_jwt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express_graphql__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jsonwebtoken__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pretty_error__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_compression__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_createApolloClient__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_App__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Html__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__createFetch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__connection__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__passport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__redis__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__data_schema__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__assets_json__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__store_configureStore__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__actions_runtime__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__config__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/server.js";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */































 // eslint-disable-line import/no-unresolved




var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
__WEBPACK_IMPORTED_MODULE_5_express_ws___default()(app); //
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all'; //
// Register Node.js middleware
// -----------------------------------------------------------------------------

app.use(__WEBPACK_IMPORTED_MODULE_18_compression___default()());
app.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, 'public'), {
  maxAge:  true ? 0 : '1y'
}));
app.use(__WEBPACK_IMPORTED_MODULE_6_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.urlencoded({
  extended: true
}));
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.json()); //
// Authentication
// -----------------------------------------------------------------------------

app.use(__WEBPACK_IMPORTED_MODULE_8_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_34__config___default.a.auth.jwt.secret,
  credentialsRequired: false,
  getToken: function getToken(req) {
    return req.cookies.id_token;
  }
})); // Error handler for express-jwt

app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  if (err instanceof __WEBPACK_IMPORTED_MODULE_8_express_jwt__["UnauthorizedError"]) {
    console.error('[express-jwt-error]', req.cookies.id_token); // `clearCookie`, otherwise user can't use web-app until cookie expires

    res.clearCookie('id_token');
  }

  next(err);
});
app.use(__WEBPACK_IMPORTED_MODULE_26__passport__["a" /* default */].initialize());

if (true) {
  app.enable('trust proxy');
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}

var RedisStore = __WEBPACK_IMPORTED_MODULE_4_connect_redis___default()(__WEBPACK_IMPORTED_MODULE_3_express_session___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_3_express_session___default()({
  store: new RedisStore({
    client: __WEBPACK_IMPORTED_MODULE_28__redis__["a" /* redis */]
  }),
  secret: __WEBPACK_IMPORTED_MODULE_34__config___default.a.sessionSecret,
  cookie: {
    domain: '.shoutanwq.com'
  },
  resave: false,
  saveUninitialized: true
}));
app.get('/login/wechat', function (req, res, next) {
  next();
}, __WEBPACK_IMPORTED_MODULE_26__passport__["a" /* default */].authenticate('wechat'));
app.get('/login/wechat/return', __WEBPACK_IMPORTED_MODULE_26__passport__["a" /* default */].authenticate('wechat', {
  session: false,
  failureRedirect: '/login/wechat'
}), function (req, res) {
  var expiresIn = 60 * 60 * 24 * 180; // 180 days

  var token = __WEBPACK_IMPORTED_MODULE_10_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_34__config___default.a.auth.jwt.secret, {
    expiresIn: expiresIn
  });
  res.cookie('id_token', token, {
    maxAge: 1000 * expiresIn,
    httpOnly: true
  });
  res.redirect(req.session.next || '/');
}); //
// Register API middleware
// -----------------------------------------------------------------------------

var graphqlMiddleware = __WEBPACK_IMPORTED_MODULE_9_express_graphql___default()(function (req) {
  return {
    schema: __WEBPACK_IMPORTED_MODULE_30__data_schema__["a" /* default */],
    graphiql: true,
    rootValue: {
      request: req
    },
    pretty: true
  };
});
app.use('/graphql', graphqlMiddleware);
app.use(Object(__WEBPACK_IMPORTED_MODULE_25__connection__["a" /* default */])()); //
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var css, apolloClient, fetch, initialState, store, context, route, data, rootComponent, _data$scripts, html;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            css = new Set();
            apolloClient = Object(__WEBPACK_IMPORTED_MODULE_19__core_createApolloClient__["a" /* default */])({
              schema: __WEBPACK_IMPORTED_MODULE_30__data_schema__["a" /* default */],
              rootValue: {
                request: req
              }
            }); // Universal HTTP client

            fetch = Object(__WEBPACK_IMPORTED_MODULE_24__createFetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_11_node_fetch___default.a, {
              baseUrl: __WEBPACK_IMPORTED_MODULE_34__config___default.a.api.serverUrl,
              cookie: req.headers.cookie,
              apolloClient: apolloClient
            });
            initialState = {
              user: req.user || null
            };
            store = Object(__WEBPACK_IMPORTED_MODULE_32__store_configureStore__["a" /* default */])(initialState, {
              cookie: req.headers.cookie,
              fetch: fetch,
              // I should not use `history` on server.. but how I do redirection? follow universal-router
              history: null
            });
            store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_33__actions_runtime__["a" /* setRuntimeVariable */])({
              name: 'initialNow',
              value: Date.now()
            })); // Global (context) variables that can be easily accessed from any React component
            // https://facebook.github.io/react/docs/context.html

            context = {
              // Enables critical path CSS rendering
              // https://github.com/kriasoft/isomorphic-style-loader
              insertCss: function insertCss() {
                for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
                  styles[_key] = arguments[_key];
                }

                // eslint-disable-next-line no-underscore-dangle
                styles.forEach(function (style) {
                  return css.add(style._getCss());
                });
              },
              fetch: fetch,
              // You can access redux through react-redux connect
              store: store,
              storeSubscription: null,
              // Apollo Client for use with react-apollo
              client: apolloClient
            };
            _context.next = 10;
            return __WEBPACK_IMPORTED_MODULE_27__router__["a" /* default */].resolve(_extends({}, context, {
              hostname: req.hostname,
              pathname: req.path,
              query: req.query
            }));

          case 10:
            route = _context.sent;

            if (!route.redirect) {
              _context.next = 15;
              break;
            }

            if (route.from) {
              req.session.next = route.from;
            }

            res.redirect(route.status || 302, route.redirect);
            return _context.abrupt("return");

          case 15:
            data = _extends({}, route);
            rootComponent = __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider___default.a, {
              muiTheme: __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme___default()({
                userAgent: req.headers['user-agent']
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 216
              },
              __self: this
            }, __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_App__["a" /* default */], {
              context: context,
              store: store,
              userAgent: req.headers['user-agent'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 221
              },
              __self: this
            }, route.component));
            _context.next = 19;
            return Object(__WEBPACK_IMPORTED_MODULE_14_react_apollo__["getDataFromTree"])(rootComponent);

          case 19:
            _context.next = 21;
            return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.delay(0);

          case 21:
            _context.next = 23;
            return __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToString(rootComponent);

          case 23:
            data.children = _context.sent;
            data.styles = [{
              id: 'css',
              cssText: _toConsumableArray(css).join('')
            }];
            data.scripts = [__WEBPACK_IMPORTED_MODULE_31__assets_json___default.a.vendor.js];
            data.scripts.push('//res.wx.qq.com/open/js/jweixin-1.2.0.js');

            if (route.chunks) {
              (_data$scripts = data.scripts).push.apply(_data$scripts, _toConsumableArray(route.chunks.map(function (chunk) {
                return __WEBPACK_IMPORTED_MODULE_31__assets_json___default.a[chunk].js;
              })));
            }

            data.scripts.push(__WEBPACK_IMPORTED_MODULE_31__assets_json___default.a.client.js); // Furthermore invoked actions will be ignored, client will not receive them!

            if (true) {
              // eslint-disable-next-line no-console
              console.log('Serializing store...');
            }

            data.app = {
              apiUrl: __WEBPACK_IMPORTED_MODULE_34__config___default.a.api.clientUrl,
              state: context.store.getState(),
              apolloState: context.client.extract()
            };
            data.hostname = req.hostname;
            html = __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_Html__["a" /* default */], _extends({}, data, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 255
              },
              __self: this
            })));
            res.status(route.status || 200);
            res.send("<!doctype html>".concat(html));
            _context.next = 40;
            break;

          case 37:
            _context.prev = 37;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 37]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); //
// Error handling
// -----------------------------------------------------------------------------

var pe = new __WEBPACK_IMPORTED_MODULE_15_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express'); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  console.error(pe.render(err));
  var html = __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_Html__["a" /* default */], {
    title: "Internal Server Error",
    description: err.message,
    styles: [{
      id: 'css',
      cssText: __WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css___default.a._getCss()
    }] // eslint-disable-line no-underscore-dangle
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }))));
  res.status(err.status || 500);
  res.send("<!doctype html>".concat(html));
}); //
// Launch the server
// -----------------------------------------------------------------------------

var promise = __WEBPACK_IMPORTED_MODULE_29__data_models__["i" /* default */].sync().catch(function (err) {
  return console.error(err.stack);
});

if (true) {
  promise.then(function () {
    app.listen(__WEBPACK_IMPORTED_MODULE_34__config___default.a.port, function () {
      console.info("The server is running at http://localhost:".concat(__WEBPACK_IMPORTED_MODULE_34__config___default.a.port, "/"));
    });
  });
} //
// Hot Module Replacement
// -----------------------------------------------------------------------------


if (false) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("connect-redis");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("express-ws");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApolloClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_error__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_link_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_schema__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_link_schema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createCache__ = __webpack_require__(44);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function createApolloClient(schema) {
  var link = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link__["from"])([Object(__WEBPACK_IMPORTED_MODULE_2_apollo_link_error__["onError"])(function (_ref) {
    var graphQLErrors = _ref.graphQLErrors,
        networkError = _ref.networkError;
    if (graphQLErrors) graphQLErrors.map(function (_ref2) {
      var message = _ref2.message,
          locations = _ref2.locations,
          path = _ref2.path;
      return console.warn("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
    });
    if (networkError) console.warn("[Network error]: ".concat(networkError));
  }), new __WEBPACK_IMPORTED_MODULE_3_apollo_link_schema__["SchemaLink"](_extends({}, schema))]);
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    link: link,
    cache: Object(__WEBPACK_IMPORTED_MODULE_4__createCache__["a" /* default */])(),
    ssrMode: true,
    queryDeduplication: true
  });
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCache;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory__);


function dataIdFromObject(obj) {
  switch (obj.__typename) {
    case 'NewsItem':
      return obj.link ? "NewsItem:".concat(obj.link) : Object(__WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory__["defaultDataIdFromObject"])(obj);

    default:
      return Object(__WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory__["defaultDataIdFromObject"])(obj);
  }
}

function createCache() {
  // https://www.apollographql.com/docs/react/basics/caching.html#configuration
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory__["InMemoryCache"]({
    dataIdFromObject: dataIdFromObject
  });
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/components/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"].childContextTypes, {
  // Apollo Client
  client: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
});
/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */


var App =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: "render",
    value: function render() {
      // Here, we are at universe level, sure? ;-)
      var client = this.props.context.client; // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
        client: client,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

Object.defineProperty(App, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    context: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(ContextType).isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  }
});
Object.defineProperty(App, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ContextType
});
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/components/Html.js";

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




/* eslint-disable react/no-danger */

var Html =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Html, _React$Component);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
  }

  _createClass(Html, [{
    key: "assetsMap",
    value: function assetsMap(asset) {
      if (asset.startsWith('/assets/') && this.props.hostname) {
        var domain = this.props.hostname.split('.');

        if (domain[domain.length - 2]) {
          return "//assets.".concat(domain[domain.length - 2], ".").concat(domain[domain.length - 1]).concat(asset);
        }

        return "//assets.".concat(domain[domain.length - 1]).concat(asset);
      }

      return asset;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props,
          title = _props.title,
          description = _props.description,
          styles = _props.styles,
          scripts = _props.scripts,
          app = _props.app,
          children = _props.children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        className: "no-js",
        lang: "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        httpEquiv: "x-ua-compatible",
        content: "ie=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), scripts.map(function (script) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
          key: script,
          rel: "preload",
          href: _this.assetsMap(script),
          as: "script",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        });
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "apple-touch-icon",
        href: "apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), styles.map(function (style) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
          key: style.id,
          id: style.id,
          dangerouslySetInnerHTML: {
            __html: style.cssText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: children
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "window.App=".concat(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app))
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), scripts.map(function (script) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
          key: script,
          src: _this.assetsMap(script),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        });
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics && __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + "ga('create','".concat(__WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId, "','auto');ga('send','pageview')")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics && __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://www.google-analytics.com/analytics.js",
        async: true,
        defer: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })));
    }
  }]);

  return Html;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Html, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    styles: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      cssText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    }).isRequired),
    scripts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired),
    app: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    // eslint-disable-line
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    hostname: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  }
});
Object.defineProperty(Html, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    styles: [],
    scripts: [],
    hostname: null
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,sBAAsB;MAClB,wBAAwB;EAC5B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,iBAAiB;CAClB","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, _ref) {
  var baseUrl = _ref.baseUrl,
      cookie = _ref.cookie;
  // NOTE: Tweak the default options to suite your application needs
  var defaults = {
    method: 'POST',
    // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? {
      Cookie: cookie
    } : null)
  };
  return function (url, options) {
    return url.startsWith('/graphql') || url.startsWith('/api') ? fetch("".concat(baseUrl).concat(url), _extends({}, defaults, options, {
      headers: _extends({}, defaults.headers, options && options.headers)
    })) : fetch(url, options);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redis__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }







var re = new RegExp('^(B|W)[a-z]* wins by ([\\d\\.]+) points');
var channels = {};
__WEBPACK_IMPORTED_MODULE_5__redis__["b" /* subscriber */].on('message', function (channel, message) {
  var chan = channel.split(':')[1];
  channels[chan].forEach(function (ws) {
    ws.send(message);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
  router.ws('/channel/:channel', function (ws, req) {
    ws.on('message', function (data) {
      var msg = JSON.parse(data);
      Promise.all([__WEBPACK_IMPORTED_MODULE_4__data_models__["a" /* GoInfo */].findOne({
        where: {
          id: ws.channel
        }
      }), __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* GoMove */].findOne({
        where: {
          id: ws.channel
        }
      }).then(function (move) {
        return move.move;
      })]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            info = _ref2[0],
            moves = _ref2[1];

        var rule = info.rule;
        var engine = new __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a[rule](info, moves);
        var color;

        if (info.black === req.user.id) {
          color = __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK;
        } else if (info.white === req.user.id) {
          color = __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.WHITE;
        }

        if (!color) {
          return;
        }

        var result = engine[msg.type](color, msg.position && msg.position[0], msg.position && msg.position[1]);

        if (typeof result === 'number' || typeof result === 'boolean' && result) {
          moves.push(Object.assign({
            color: color
          }, msg));
          __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* GoMove */].update({
            move: moves
          }, {
            where: {
              id: ws.channel
            }
          }).then(function () {
            return __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].publishAsync("channel:".concat(ws.channel), JSON.stringify({
              code: 'ok',
              type: 'delta',
              move: Object.assign({
                color: color
              }, msg)
            }));
          }).then(function () {
            if (engine.winner() === 'estimate') {
              __WEBPACK_IMPORTED_MODULE_2_node_fetch___default()(__WEBPACK_IMPORTED_MODULE_3__config___default.a.gnugo, {
                method: 'POST',
                body: engine.toSgf()
              }).then(function (res) {
                return res.text();
              }).then(function (text) {
                var r = text.match(re);

                if (r) {
                  info.result = "".concat(r[1], "+").concat(r[2]);
                  info.save().then(function () {
                    __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].publishAsync("channel:".concat(ws.channel), JSON.stringify({
                      code: 'ok',
                      type: 'result',
                      result: "".concat(r[1], "+").concat(r[2])
                    }));
                  });
                }
              });
            } else if (engine.winner()) {
              var winner = engine.winner();
              info.result = "".concat(winner === __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK ? 'B+R' : 'W+R');
              info.save().then(function () {
                __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].publishAsync("channel:".concat(ws.channel), JSON.stringify({
                  code: 'ok',
                  type: 'result',
                  result: "".concat(winner === __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK ? 'B+R' : 'W+R')
                }));
              });
            }
          });
        }
      });
    });
    ws.on('close', function () {
      if (ws.channel) {
        var channel = channels[ws.channel];
        channel.splice(channel.indexOf(ws), 1);

        if (channel.length === 0) {
          delete channels[ws.channel];
          __WEBPACK_IMPORTED_MODULE_5__redis__["b" /* subscriber */].unsubscribe("channel:".concat(ws.channel));
        } // eslint-disable-next-line no-param-reassign


        delete ws.channel;
      }
    });

    (function () {
      // quit prev channel
      if (!channels[req.params.channel]) {
        __WEBPACK_IMPORTED_MODULE_5__redis__["b" /* subscriber */].subscribe("channel:".concat(req.params.channel));
        channels[req.params.channel] = [];
      }

      if (ws.channel) {
        var channel = channels[ws.channel];
        channel.splice(channel.indexOf(ws), 1);
      } // subscribe to new channel


      channels[req.params.channel].push(ws); // eslint-disable-next-line no-param-reassign

      ws.channel = req.params.channel; // send new game info

      Promise.all([__WEBPACK_IMPORTED_MODULE_4__data_models__["a" /* GoInfo */].findOne({
        where: {
          id: ws.channel
        }
      }), __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* GoMove */].findOne({
        where: {
          id: ws.channel
        }
      }).then(function (move) {
        return move.move;
      })]).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            info = _ref4[0],
            moves = _ref4[1];

        var engine = info.rule;
        __WEBPACK_IMPORTED_MODULE_4__data_models__["e" /* User */].findAll({
          where: {
            id: {
              $in: [info.black, info.white]
            }
          },
          include: [{
            attributes: ['displayName', 'picture'],
            model: __WEBPACK_IMPORTED_MODULE_4__data_models__["h" /* UserProfile */],
            as: 'profile',
            required: true
          }]
        }).then(function (users) {
          var players = users.filter(function (e) {
            return e;
          }).map(function (user) {
            var u = user.get({
              plain: true
            });
            return {
              id: u.id,
              displayName: u.profile.displayName,
              picture: u.profile.picture
            };
          });
          var profile = {}; // eslint-disable-next-line no-restricted-syntax

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _player = _step.value;
              profile = Object.assign(profile, _defineProperty({}, _player.id, _player));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          ws.send(JSON.stringify({
            code: 'ok',
            type: 'init',
            game: {
              engine: engine,
              moves: moves,
              info: {
                result: info.result,
                boardsize: info.boardsize,
                black: {
                  id: info.black,
                  name: profile[info.black] ? profile[info.black].displayName : '[黑棋]',
                  avatar: profile[info.black] ? profile[info.black].picture : 'http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64'
                },
                white: {
                  id: info.white,
                  name: profile[info.white] ? profile[info.white].displayName : '[白棋]',
                  avatar: profile[info.white] ? profile[info.white].picture : 'http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64'
                },
                goal: info.goal
              }
            }
          }));
        });
      });
    })();
  });
  return router;
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },
  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: {
      isEmail: true
    }
  },
  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }
}, {
  indexes: [{
    fields: ['email']
  }]
});
/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {
  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },
  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserLogin);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {
  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },
  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserClaim);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {
  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },
  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },
  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },
  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },
  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },
  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);


var GoInfo = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('GoInfo', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.CHAR(128),
    primaryKey: true
  },
  rule: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.CHAR,
    allowNull: false
  },
  boardsize: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
    allowNull: false
  },
  handicap: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
    defaultValue: 0
  },
  komi: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
    defaultValu: '6.5',
    allowNull: false
  },
  black: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID
  },
  white: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID
  },
  result: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },
  goal: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER
  }
});
/* harmony default export */ __webpack_exports__["a"] = (GoInfo);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);


var GoMove = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('GoMove', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.CHAR(128),
    primaryKey: true
  },
  move: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.TEXT,
    defaultValue: '[]',
    get: function get() {
      return JSON.parse(this.getDataValue('move'));
    },
    set: function set(val) {
      return this.setDataValue('move', JSON.stringify(val));
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (GoMove);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);


var MatchInfo = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('MatchInfo', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },
  rule: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.CHAR,
    allowNull: false
  },
  boardsize: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
    allowNull: false
  },
  handicap: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
    defaultValue: 0
  },
  komi: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
    defaultValu: '6.5',
    allowNull: false
  },
  expiredIn: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
    defaultValue: 10 * 60
  },
  goal: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER
  }
});
/* harmony default export */ __webpack_exports__["a"] = (MatchInfo);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(1);


var MatchGame = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('MatchGame', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },
  match: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    allowNull: false
  },
  player: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    allowNull: false
  },
  game: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.CHAR(128),
    allowNull: false
  }
});
/* harmony default export */ __webpack_exports__["a"] = (MatchGame);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_wechat__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_wechat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_wechat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */




__WEBPACK_IMPORTED_MODULE_0_passport___default.a.serializeUser(function (user, done) {
  done(null, user);
});
__WEBPACK_IMPORTED_MODULE_0_passport___default.a.deserializeUser(function (user, done) {
  done(null, user);
});
__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_wechat__["Strategy"]({
  appID: __WEBPACK_IMPORTED_MODULE_3__config___default.a.wechat.appId,
  appSecret: __WEBPACK_IMPORTED_MODULE_3__config___default.a.wechat.appSecret,
  callbackURL: 'http://shoutanwq.com/login/wechat/return',
  client: 'wechat',
  scope: 'snsapi_userinfo',
  passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, expiredIn, done) {
  /* eslint-disable no-underscore-dangle */
  var loginName = 'wechat';
  var claimType = 'urn:wechat:access_token';
  var id = profile.unionid || profile.openid;

  var fooBar =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var userLogin, user, users, _user, _user2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!req.user) {
                _context.next = 14;
                break;
              }

              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["g" /* UserLogin */].findOne({
                attributes: ['name', 'key'],
                where: {
                  name: loginName,
                  key: id
                }
              });

            case 3:
              userLogin = _context.sent;

              if (!userLogin) {
                _context.next = 8;
                break;
              }

              // There is already a Facebook account that belongs to you.
              // Sign in with that account or delete it, then link it with your current account.
              done();
              _context.next = 12;
              break;

            case 8:
              _context.next = 10;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* User */].create({
                id: req.user.id,
                email: "".concat(id, "@wechat.account.shoutanwq.com."),
                logins: [{
                  name: loginName,
                  key: id
                }],
                claims: [{
                  type: claimType,
                  value: accessToken
                }],
                profile: {
                  displayName: profile.nickname,
                  gender: profile.sex,
                  picture: profile.headimgurl
                }
              }, {
                include: [{
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["g" /* UserLogin */],
                  as: 'logins'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["f" /* UserClaim */],
                  as: 'claims'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["h" /* UserProfile */],
                  as: 'profile'
                }]
              });

            case 10:
              user = _context.sent;
              done(null, {
                id: user.id,
                email: user.email
              });

            case 12:
              _context.next = 33;
              break;

            case 14:
              _context.next = 16;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* User */].findAll({
                attributes: ['id', 'email'],
                where: {
                  '$logins.name$': loginName,
                  '$logins.key$': id
                },
                include: [{
                  attributes: ['name', 'key'],
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["g" /* UserLogin */],
                  as: 'logins',
                  required: true
                }]
              });

            case 16:
              users = _context.sent;

              if (!users.length) {
                _context.next = 22;
                break;
              }

              _user = users[0].get({
                plain: true
              });
              done(null, _user);
              _context.next = 33;
              break;

            case 22:
              _context.next = 24;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* User */].findOne({
                where: {
                  email: "".concat(id, "@wechat.account.shoutanwq.com")
                }
              });

            case 24:
              _user2 = _context.sent;

              if (!_user2) {
                _context.next = 29;
                break;
              }

              // There is already an account using this email address. Sign in to
              // that account and link it with Facebook manually from Account Settings.
              done(null);
              _context.next = 33;
              break;

            case 29:
              _context.next = 31;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* User */].create({
                email: "".concat(id, "@wechat.account.shoutanwq.com"),
                emailConfirmed: true,
                logins: [{
                  name: loginName,
                  key: id
                }],
                claims: [{
                  type: claimType,
                  value: accessToken
                }],
                profile: {
                  displayName: profile.nickname,
                  gender: profile.sex,
                  picture: profile.headimgurl
                }
              }, {
                include: [{
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["g" /* UserLogin */],
                  as: 'logins'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["f" /* UserClaim */],
                  as: 'claims'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["h" /* UserProfile */],
                  as: 'profile'
                }]
              });

            case 31:
              _user2 = _context.sent;
              done(null, {
                id: _user2.id,
                email: _user2.email
              });

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  }();

  fooBar().catch(done);
}));
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("passport-wechat");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(69);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */], {
  resolveRoute: function resolveRoute(context, params) {
    if (context.route.protected && !context.store.getState().user) {
      console.info('return to', "//".concat(context.hostname).concat(context.pathname, "?").concat(__WEBPACK_IMPORTED_MODULE_1_querystring___default.a.stringify(context.query)));
      return {
        redirect: '//shoutanwq.com/login/wechat',
        from: "//".concat(context.hostname).concat(context.pathname, "?").concat(__WEBPACK_IMPORTED_MODULE_1_querystring___default.a.stringify(context.query))
      };
    }

    if (typeof context.route.load === 'function') {
      return context.route.load().then(function (action) {
        return action.default(context, params);
      });
    }

    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }

    return undefined;
  }
}));

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */
// The top-level (parent) route
var routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [{
    path: '',
    load: function load() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 100));
    }
  }, {
    path: '/login',
    load: function load() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 101));
    }
  }, {
    path: '/about',
    load: function load() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 102));
    }
  }, {
    path: '/admin',
    load: function load() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 103));
    }
  }, {
    path: '/go',
    protected: true,
    children: [{
      path: '/creation',
      load: function load() {
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 104));
      }
    }, {
      path: '',
      load: function load() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 105));
      }
    }]
  }, {
    path: '/match',
    protected: true,
    children: [{
      path: '/creation',
      load: function load() {
        return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 108));
      }
    }, {
      path: '',
      load: function load() {
        return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 109));
      }
    }]
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: function load() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 110));
    }
  }],
  action: function () {
    var _action = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var next, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next = _ref.next;
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;
              // Provide default values for title, description etc.
              route.title = "".concat(route.title || 'Untitled Page', " - \u624B\u8C08\u56F4\u68CB");
              route.description = route.description || '';
              return _context.abrupt("return", route);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function action(_x) {
      return _action.apply(this, arguments);
    };
  }()
}; // The error page is available by permanent url for development mode

if (true) {
  routes.children.unshift({
    path: '/error',
    action: __webpack_require__(70).default
  });
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorPage__ = __webpack_require__(13);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/error/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



function action() {
  return {
    title: 'Demo Error',
    component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ErrorPage__["b" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_me__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_news__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries_go__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries_wechat__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__queries_match__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mutations_create__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mutations_createMatch__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mutations_update__ = __webpack_require__(85);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      me: __WEBPACK_IMPORTED_MODULE_1__queries_me__["a" /* default */],
      go: __WEBPACK_IMPORTED_MODULE_3__queries_go__["a" /* default */],
      news: __WEBPACK_IMPORTED_MODULE_2__queries_news__["a" /* default */],
      wechat: __WEBPACK_IMPORTED_MODULE_4__queries_wechat__["a" /* default */],
      match: __WEBPACK_IMPORTED_MODULE_5__queries_match__["a" /* default */]
    }
  }),
  mutation: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createGo: __WEBPACK_IMPORTED_MODULE_6__mutations_create__["a" /* default */],
      createGoMatch: __WEBPACK_IMPORTED_MODULE_7__mutations_createMatch__["a" /* default */],
      updateGo: __WEBPACK_IMPORTED_MODULE_8__mutations_update__["a" /* default */]
    }
  })
});
/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_UserType__ = __webpack_require__(73);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var me = {
  type: __WEBPACK_IMPORTED_MODULE_0__types_UserType__["a" /* default */],
  resolve: function resolve(_ref) {
    var request = _ref.request;
    return request.user && {
      id: request.user.id,
      email: request.user.email
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (me);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var UserType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  fields: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    email: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserType);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(75);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


 // React.js News Feed (RSS)

var url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';
var items = [];
var lastFetchTask;
var lastFetchTime = new Date(1970, 0, 1);
var news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a" /* default */]),
  resolve: function resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10
    /* 10 mins */
    ) {
        lastFetchTime = new Date();
        lastFetchTask = __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.status === 'ok') {
            items = data.items;
          }

          lastFetchTask = null;
          return items;
        }).catch(function (err) {
          lastFetchTask = null;
          throw err;
        });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

    return items;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (news);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'NewsItem',
  fields: {
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    link: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    author: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    pubDate: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    content: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (NewsItemType);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(3);
/**
 * @author lookis on 17/01/2018
 */



var Go = {
  type: __WEBPACK_IMPORTED_MODULE_1__types_GoType__["a" /* default */],
  args: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    }
  },
  resolve: function resolve(root, _ref) {
    var id = _ref.id;
    return __WEBPACK_IMPORTED_MODULE_2__models__["a" /* GoInfo */].findOne({
      where: {
        id: id
      }
    }).then(function (r) {
      return r.get({
        plain: true
      });
    }).then(function (go) {
      return {
        id: id,
        engine: go.rule,
        info: Object.keys(go).filter(function (key) {
          return ['boardsize', 'handicap', 'komi', 'black', 'white', 'goal', 'result'].includes(key);
        }).reduce(function (obj, key) {
          obj[key] = go[key];
          return obj;
        }, {})
      };
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Go);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_WechatType__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redis__ = __webpack_require__(7);








var sign = function sign(payload) {
  var algo = __WEBPACK_IMPORTED_MODULE_1_crypto___default.a.createHash('sha1');
  var ordered = {};
  Object.keys(payload).sort().forEach(function (key) {
    if (payload[key] && key !== 'signature') {
      ordered[key] = payload[key];
    }
  });
  var stringA = __WEBPACK_IMPORTED_MODULE_2_querystring___default.a.unescape(__WEBPACK_IMPORTED_MODULE_2_querystring___default.a.stringify(ordered));
  algo.update(stringA);
  return algo.digest('hex');
};

var wechat = {
  type: __WEBPACK_IMPORTED_MODULE_4__types_WechatType__["a" /* default */],
  args: {
    url: {
      type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"])
    }
  },
  resolve: function resolve(root, _ref) {
    var url = _ref.url;
    return __WEBPACK_IMPORTED_MODULE_6__redis__["a" /* redis */].getAsync('jsapi_ticket').then(function (ticket) {
      if (!ticket) {
        return __WEBPACK_IMPORTED_MODULE_6__redis__["a" /* redis */].getAsync('wechat_accessToken').then(function (accessToken) {
          if (!accessToken) {
            return __WEBPACK_IMPORTED_MODULE_0_node_fetch___default()("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".concat(__WEBPACK_IMPORTED_MODULE_5__config___default.a.wechat.appId, "&secret=").concat(__WEBPACK_IMPORTED_MODULE_5__config___default.a.wechat.appSecret)).then(function (response) {
              return response.json();
            }).then(function (json) {
              if (!('errcode' in json) || json.errcode === 0) {
                return __WEBPACK_IMPORTED_MODULE_6__redis__["a" /* redis */].setexAsync('wechat_accessToken', json.expires_in, json.access_token).then(function () {
                  return json.access_token;
                });
              }

              throw json;
            });
          }

          return accessToken;
        }).then(function (accessToken) {
          return __WEBPACK_IMPORTED_MODULE_0_node_fetch___default()("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".concat(accessToken, "&type=jsapi")).then(function (response) {
            return response.json();
          }).then(function (json) {
            if ('errcode' in json && json.errcode === 0) {
              return __WEBPACK_IMPORTED_MODULE_6__redis__["a" /* redis */].setexAsync('jsapi_ticket', json.expires_in, json.ticket).then(function () {
                return json.ticket;
              });
            }

            throw json;
          });
        });
      }

      return ticket;
    }).then(function (ticket) {
      var noncestr = Math.random().toString();
      var timestamp = Math.floor(new Date().getTime() / 1000);
      var signature = sign({
        jsapi_ticket: ticket,
        url: url,
        noncestr: noncestr,
        timestamp: timestamp
      });
      return {
        appId: __WEBPACK_IMPORTED_MODULE_5__config___default.a.wechat.appId,
        timestamp: timestamp,
        nonceStr: noncestr,
        signature: signature
      };
    }).catch(function (e) {
      console.error(e);
      var noncestr = Math.random().toString();
      var timestamp = Math.floor(new Date().getTime() / 1000);
      return {
        appId: __WEBPACK_IMPORTED_MODULE_5__config___default.a.wechat.appId,
        timestamp: timestamp,
        nonceStr: noncestr,
        signature: e.errmsg || e.errcode || 'error'
      };
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (wechat);

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);

var WechatType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Wechat',
  fields: {
    appId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    timestamp: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    nonceStr: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    signature: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (WechatType);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoMatch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(3);
/**
 * @author lookis on 17/01/2018
 */




var Go = {
  type: __WEBPACK_IMPORTED_MODULE_1__types_GoMatch__["a" /* default */],
  args: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    }
  },
  resolve: function resolve(_ref, _ref2) {
    var request = _ref.request;
    var id = _ref2.id;

    if (request.user) {
      var player = request.user.id; // find the one already join

      return __WEBPACK_IMPORTED_MODULE_3__models__["c" /* MatchGame */].findOne({
        where: {
          match: id,
          player: player
        }
      }).then(function (res) {
        return res ? res.get({
          plain: true
        }) : null;
      }).then(function (r) {
        if (r) {
          return {
            id: r.game
          };
        } // find the one not full


        return __WEBPACK_IMPORTED_MODULE_3__models__["c" /* MatchGame */].findOne({
          where: {
            match: id
          },
          group: ['game'],
          having: __WEBPACK_IMPORTED_MODULE_2__sequelize__["a" /* default */].literal('count(player) < 2')
        }).then(function (res) {
          return res ? res.get({
            plain: true
          }) : null;
        }).then(function (r1) {
          if (r1) {
            return __WEBPACK_IMPORTED_MODULE_3__models__["c" /* MatchGame */].create({
              match: r1.match,
              player: player,
              game: r1.game
            }).then(function () {
              return {
                id: r1.game,
                color: 'white'
              };
            });
          } // create new game


          return __WEBPACK_IMPORTED_MODULE_3__models__["d" /* MatchInfo */].findOne({
            where: {
              id: id
            }
          }).then(function (res) {
            return res ? res.get({
              plain: true
            }) : null;
          }).then(function (match) {
            if (!match || new Date(match.createdAt).getTime() + match.expiredIn * 1000 < new Date().getTime()) {
              return {
                id: null
              };
            } // create go game


            var goId = Math.random().toString(16).split('.')[1];
            return __WEBPACK_IMPORTED_MODULE_3__models__["a" /* GoInfo */].create(Object.assign({
              id: goId,
              rule: match.rule,
              boardsize: match.boardsize,
              handicap: match.handicap,
              komi: match.komi,
              black: player
            }, match.goal ? {
              goal: match.goal
            } : {})).then(function () {
              return __WEBPACK_IMPORTED_MODULE_3__models__["b" /* GoMove */].create({
                id: goId
              });
            }).then(function () {
              __WEBPACK_IMPORTED_MODULE_3__models__["c" /* MatchGame */].create({
                match: match.id,
                player: player,
                game: goId
              });
            }).then(function () {
              return {
                id: goId,
                color: 'black'
              };
            });
          });
        });
      });
    }

    return {
      id: null
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Go);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);

var GoMatch = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'GoMatch',
  fields: {
    id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    color: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (GoMatch);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(3);



var createGo = {
  type: __WEBPACK_IMPORTED_MODULE_1__types_GoType__["a" /* default */],
  args: {
    rule: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    boardsize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    handicap: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    komi: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"])
    },
    color: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    goal: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    }
  },
  resolve: function resolve(root, _ref) {
    var rule = _ref.rule,
        boardsize = _ref.boardsize,
        handicap = _ref.handicap,
        komi = _ref.komi,
        color = _ref.color,
        goal = _ref.goal;
    var id = Math.random().toString(16).split('.')[1];
    return __WEBPACK_IMPORTED_MODULE_2__models__["a" /* GoInfo */].create(Object.assign({
      id: id,
      rule: rule,
      boardsize: boardsize,
      handicap: handicap,
      komi: komi
    }, color === 'black' ? {
      black: root.request.user.id
    } : {
      white: root.request.user.id
    }, goal ? {
      goal: goal
    } : {})).then(function () {
      return __WEBPACK_IMPORTED_MODULE_2__models__["b" /* GoMove */].create({
        id: id
      });
    }).then(function () {
      return {
        id: id,
        engine: rule,
        info: {
          boardsize: boardsize,
          black: color === 'black' ? root.request.user.id : null,
          white: color === 'white' ? root.request.user.id : null
        }
      };
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createGo);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_MatchType__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(3);



var createMatch = {
  type: __WEBPACK_IMPORTED_MODULE_1__types_MatchType__["a" /* default */],
  args: {
    rule: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    boardsize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    handicap: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    komi: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"])
    },
    expiredIn: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    goal: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    }
  },
  resolve: function resolve(root, _ref) {
    var rule = _ref.rule,
        boardsize = _ref.boardsize,
        handicap = _ref.handicap,
        komi = _ref.komi,
        expiredIn = _ref.expiredIn,
        goal = _ref.goal;
    var id = Math.random().toString(16).split('.')[1];
    return __WEBPACK_IMPORTED_MODULE_2__models__["d" /* MatchInfo */].create(Object.assign({
      id: id,
      rule: rule,
      boardsize: boardsize,
      handicap: handicap,
      komi: komi,
      expiredIn: expiredIn
    }, goal ? {
      goal: goal
    } : {})).then(function () {
      return {
        id: id,
        engine: rule,
        info: {
          boardsize: boardsize
        }
      };
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createMatch);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);

var MatchType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Match',
  fields: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    engine: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    info: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'MatchInfo',
        fields: {
          boardsize: {
            type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
          },
          goal: {
            type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
          }
        }
      })
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (MatchType);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redis__ = __webpack_require__(7);
function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var updateGo = {
  type: __WEBPACK_IMPORTED_MODULE_1__types_GoType__["a" /* default */],
  args: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    color: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  },
  resolve: function resolve(root, _ref) {
    var id = _ref.id,
        color = _ref.color;
    return __WEBPACK_IMPORTED_MODULE_2__models__["a" /* GoInfo */].findOne({
      where: {
        id: id
      }
    }).then(function (goInfo) {
      if (goInfo[color] === null && root.request.user && goInfo.black !== root.request.user.id && goInfo.white !== root.request.user.id) {
        return __WEBPACK_IMPORTED_MODULE_2__models__["a" /* GoInfo */].update(_defineProperty({}, color, root.request.user.id), {
          where: {
            id: id
          }
        });
      }

      return Promise.resolve(true);
    }) // publish join
    .then(function () {
      return Promise.all([__WEBPACK_IMPORTED_MODULE_2__models__["a" /* GoInfo */].findOne({
        where: {
          id: id
        }
      }).then(function (r) {
        return r.get({
          plain: true
        });
      }), __WEBPACK_IMPORTED_MODULE_2__models__["b" /* GoMove */].findOne({
        where: {
          id: id
        }
      }).then(function (goMove) {
        return goMove.move;
      })]).then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            info = _ref3[0],
            moves = _ref3[1];

        return __WEBPACK_IMPORTED_MODULE_2__models__["e" /* User */].findAll({
          where: {
            id: {
              $in: [info.black, info.white]
            }
          },
          include: [{
            attributes: ['displayName', 'picture'],
            model: __WEBPACK_IMPORTED_MODULE_2__models__["h" /* UserProfile */],
            as: 'profile',
            required: true
          }]
        }).then(function (users) {
          var players = users.filter(function (e) {
            return e;
          }).map(function (user) {
            var u = user.get({
              plain: true
            });
            return {
              id: u.id,
              displayName: u.profile.displayName,
              picture: u.profile.picture
            };
          });
          var profile = {}; // eslint-disable-next-line no-restricted-syntax

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _player = _step.value;
              profile = Object.assign(profile, _defineProperty({}, _player.id, _player));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return __WEBPACK_IMPORTED_MODULE_3__redis__["a" /* redis */].publishAsync("channel:".concat(id), JSON.stringify({
            code: 'ok',
            type: 'init',
            game: {
              engine: info.rule,
              moves: moves.map(JSON.parse),
              info: {
                result: info.result,
                boardsize: info.boardsize,
                black: {
                  id: info.black,
                  name: profile[info.black] ? profile[info.black].displayName : '[黑棋]',
                  avatar: profile[info.black] ? profile[info.black].picture : 'http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64'
                },
                white: {
                  id: info.white,
                  name: profile[info.white] ? profile[info.white].displayName : '[白棋]',
                  avatar: profile[info.white] ? profile[info.white].picture : 'http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64'
                },
                goal: info.goal
              }
            }
          })).then(function () {
            return Promise.resolve([info.rule, Object.keys(info).filter(function (key) {
              return ['boardsize', 'handicap', 'komi', 'black', 'white', 'goal', 'result'].includes(key);
            }).reduce(function (obj, key) {
              obj[key] = info[key];
              return obj;
            }, {})]);
          });
        });
      });
    }) // return info
    .then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          engine = _ref5[0],
          info = _ref5[1];

      return {
        id: id,
        engine: engine,
        info: info
      };
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (updateGo);

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger__ = __webpack_require__(91);



function configureStore(initialState) {
  var middleware = [];
  var enhancer;

  if (true) {
    middleware.push(Object(__WEBPACK_IMPORTED_MODULE_2__logger__["a" /* default */])()); // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension

    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };

    if (false) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(void 0, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(void 0, middleware);
  }

  var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* default */])(); // See https://github.com/rackt/redux/releases/tag/v3.1.0

  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(rootReducer, initialState, enhancer); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  if (false) {
    module.hot.accept('../reducers', function () {
      return (// eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(90);



function createRootReducer() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
    runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */]
  });
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));

    default:
      return state;
  }
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);


function inspectObject(object) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

var actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: function APOLLO_QUERY_INIT(a) {
    return "queryId:".concat(a.queryId, " variables:").concat(inspectObject(a.variables), "\n   ").concat(singleLine(a.queryString));
  },
  APOLLO_QUERY_RESULT: function APOLLO_QUERY_RESULT(a) {
    return "queryId:".concat(a.queryId, "\n   ").concat(singleLine(inspectObject(a.result)));
  },
  APOLLO_QUERY_STOP: function APOLLO_QUERY_STOP(a) {
    return "queryId:".concat(a.queryId);
  }
}; // Server side redux action logger

function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return function (store) {
    return function (next) {
      return function (action) {
        var formattedPayload = '';
        var actionFormatter = actionFormatters[action.type];

        if (typeof actionFormatter === 'function') {
          formattedPayload = actionFormatter(action);
        } else if (action.toString !== Object.prototype.toString) {
          formattedPayload = action.toString();
        } else if (typeof action.payload !== 'undefined') {
          formattedPayload = inspectObject(action.payload);
        } else {
          formattedPayload = inspectObject(action);
        }

        console.log(" * ".concat(action.type, ": ").concat(formattedPayload)); // eslint-disable-line no-console

        return next(action);
      };
    };
  };
}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
/* eslint-disable import/prefer-default-export */

function setRuntimeVariable(_ref) {
  var name = _ref.name,
      value = _ref.value;
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name: name,
      value: value
    }
  };
}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("material-ui/SelectField");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports) {

module.exports = require("react-websocket");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3dlYnBhY2svYm9vdHN0cmFwIDU5MWMyNGEwY2ZjOTU3M2FhNjVjIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImdyYXBocWxcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvc2VxdWVsaXplLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tb2RlbHMvaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb25maWcuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicmVhY3RcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yZWRpcy5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3R5cGVzL0dvVHlwZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJibHVlYmlyZFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImV4cHJlc3NcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInJlZHV4XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJnYW1lLWVuZ2luZVwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvc2VydmVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInBhdGhcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJjb25uZWN0LXJlZGlzXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiZXhwcmVzcy13c1wiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImV4cHJlc3Mtand0XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiZXhwcmVzcy1ncmFwaHFsXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInByZXR0eS1lcnJvclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIm1hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwibWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvcmUvY3JlYXRlQXBvbGxvQ2xpZW50L2NyZWF0ZUFwb2xsb0NsaWVudC5zZXJ2ZXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImFwb2xsby1saW5rXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstZXJyb3JcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1zY2hlbWFcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvcmUvY3JlYXRlQXBvbGxvQ2xpZW50L2NyZWF0ZUNhY2hlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvbXBvbmVudHMvSHRtbC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcz85ZWZlIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jcmVhdGVGZXRjaC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2Nvbm5lY3Rpb24uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL21vZGVscy9Vc2VyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tb2RlbHMvVXNlckxvZ2luLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tb2RlbHMvVXNlckNsYWltLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tb2RlbHMvVXNlclByb2ZpbGUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL21vZGVscy9Hb0luZm8uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL21vZGVscy9Hb01vdmUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL21vZGVscy9NYXRjaEluZm8uanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL21vZGVscy9NYXRjaEdhbWUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicmVkaXNcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3Bhc3Nwb3J0LmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicGFzc3BvcnQtd2VjaGF0XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXIuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwidW5pdmVyc2FsLXJvdXRlclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2Vycm9yL2luZGV4LmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9zY2hlbWEuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3F1ZXJpZXMvbWUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3R5cGVzL1VzZXJUeXBlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9xdWVyaWVzL25ld3MuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3R5cGVzL05ld3NJdGVtVHlwZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvcXVlcmllcy9nby5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvcXVlcmllcy93ZWNoYXQuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiY3J5cHRvXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3R5cGVzL1dlY2hhdFR5cGUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3F1ZXJpZXMvbWF0Y2guanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3R5cGVzL0dvTWF0Y2guanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL211dGF0aW9ucy9jcmVhdGUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL211dGF0aW9ucy9jcmVhdGVNYXRjaC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvdHlwZXMvTWF0Y2hUeXBlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tdXRhdGlvbnMvdXBkYXRlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIi4vYXNzZXRzLmpzb25cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yZWR1Y2Vycy91c2VyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcmVkdWNlcnMvcnVudGltZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3N0b3JlL2xvZ2dlci9sb2dnZXIuc2VydmVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInV0aWxcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2FjdGlvbnMvcnVudGltZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJjbGFzc25hbWVzL2JpbmRcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIm1hdGVyaWFsLXVpL1NlbGVjdEZpZWxkXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJyZWFjdC13ZWJzb2NrZXRcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJyZWFjdC1yYW5nZXNsaWRlclwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDk6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL2NodW5rcy9cIiArICh7XCIwXCI6XCJnb1wiLFwiMVwiOlwiaG9tZVwiLFwiMlwiOlwiZ28tY3JlYXRpb25cIixcIjNcIjpcImdvLWNyZWF0aW9uLW1hdGNoXCIsXCI0XCI6XCJhYm91dFwiLFwiNVwiOlwibm90LWZvdW5kXCIsXCI2XCI6XCJsb2dpblwiLFwiN1wiOlwiYWRtaW5cIixcIjhcIjpcIm1hdGNoXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cbiBcdC8vIHVuY2F0Y2hlZCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgU3lzdGVtLmltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1OTFjMjRhMGNmYzk1NzNhYTY1YyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJncmFwaHFsXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlVXJsLCB7XG4gIGRlZmluZToge1xuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZXF1ZWxpemU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvc2VxdWVsaXplLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VxdWVsaXplXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgc2VxdWVsaXplIGZyb20gJy4uL3NlcXVlbGl6ZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICcuL1VzZXJMb2dpbic7XG5pbXBvcnQgVXNlckNsYWltIGZyb20gJy4vVXNlckNsYWltJztcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcbmltcG9ydCBHb0luZm8gZnJvbSAnLi9Hb0luZm8nO1xuaW1wb3J0IEdvTW92ZSBmcm9tICcuL0dvTW92ZSc7XG5pbXBvcnQgTWF0Y2hJbmZvIGZyb20gJy4vTWF0Y2hJbmZvJztcbmltcG9ydCBNYXRjaEdhbWUgZnJvbSAnLi9NYXRjaEdhbWUnO1xuXG5Vc2VyLmhhc01hbnkoVXNlckxvZ2luLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ2xvZ2lucycsXG4gIG9uVXBkYXRlOiAnY2FzY2FkZScsXG4gIG9uRGVsZXRlOiAnY2FzY2FkZScsXG59KTtcblxuVXNlci5oYXNNYW55KFVzZXJDbGFpbSwge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICdjbGFpbXMnLFxuICBvblVwZGF0ZTogJ2Nhc2NhZGUnLFxuICBvbkRlbGV0ZTogJ2Nhc2NhZGUnLFxufSk7XG5cblVzZXIuaGFzT25lKFVzZXJQcm9maWxlLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3Byb2ZpbGUnLFxuICBvblVwZGF0ZTogJ2Nhc2NhZGUnLFxuICBvbkRlbGV0ZTogJ2Nhc2NhZGUnLFxufSk7XG5cbmZ1bmN0aW9uIHN5bmMoLi4uYXJncykge1xuICByZXR1cm4gc2VxdWVsaXplLnN5bmMoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgc3luYyB9O1xuZXhwb3J0IHtcbiAgVXNlcixcbiAgVXNlckxvZ2luLFxuICBVc2VyQ2xhaW0sXG4gIFVzZXJQcm9maWxlLFxuICBHb0luZm8sXG4gIEdvTW92ZSxcbiAgTWF0Y2hJbmZvLFxuICBNYXRjaEdhbWUsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL21vZGVscy9pbmRleC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ0RvIG5vdCBpbXBvcnQgYGNvbmZpZy5qc2AgZnJvbSBpbnNpZGUgdGhlIGNsaWVudC1zaWRlIGNvZGUuJyxcbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIE5vZGUuanMgYXBwXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcblxuICAvLyBBUEkgR2F0ZXdheVxuICBhcGk6IHtcbiAgICAvLyBBUEkgVVJMIHRvIGJlIHVzZWQgaW4gdGhlIGNsaWVudC1zaWRlIGNvZGVcbiAgICBjbGllbnRVcmw6IHByb2Nlc3MuZW52LkFQSV9DTElFTlRfVVJMIHx8ICcnLFxuICAgIC8vIEFQSSBVUkwgdG8gYmUgdXNlZCBpbiB0aGUgc2VydmVyLXNpZGUgY29kZVxuICAgIHNlcnZlclVybDpcbiAgICAgIHByb2Nlc3MuZW52LkFQSV9TRVJWRVJfVVJMIHx8XG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlQgfHwgMzAwMH1gLFxuICB9LFxuXG4gIC8vIERhdGFiYXNlXG4gIGRhdGFiYXNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHwgJ3NxbGl0ZTpkYXRhYmFzZS5zcWxpdGUnLFxuXG4gIC8vIEF1dGhlbnRpY2F0aW9uXG4gIGF1dGg6IHtcbiAgICBqd3Q6IHsgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICdSZWFjdCBTdGFydGVyIEtpdCEnIH0sXG4gIH0sXG4gIC8vIEdOVUdPXG4gIGdudWdvOiBwcm9jZXNzLmVudi5HTlVHTyB8fCAnaHR0cDovLzEyNy4wLjAuMTo1MDAxL3Njb3JlL2VzdGltYXRlJyxcblxuICAvLyBSZWRpc1xuICByZWRpczogcHJvY2Vzcy5lbnYuUkVESVMgfHwgJ3JlZGlzOi8vbG9jYWxob3N0OjYzNzknLFxuXG4gIHNlc3Npb25TZWNyZXQ6IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUIHx8IFwiSXQncyBhIHNlY3JldFwiLFxuXG4gIHdlY2hhdDoge1xuICAgIGFwcElkOiAnd3hjNjdhMTk3YzVjM2YwMDRlJyxcbiAgICBhcHBTZWNyZXQ6ICc2MGU1NDFmZmY1OTQ0N2E3MjY3NTAyZjk3NGNjMjYyZCcsXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJpbXBvcnQgYmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmJsdWViaXJkLnByb21pc2lmeUFsbChyZWRpcy5SZWRpc0NsaWVudC5wcm90b3R5cGUpO1xuYmx1ZWJpcmQucHJvbWlzaWZ5QWxsKHJlZGlzLk11bHRpLnByb3RvdHlwZSk7XG5cbmNvbnN0IGNsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudChjb25maWcucmVkaXMpO1xuY29uc3Qgc3Vic2NyaWJlciA9IHJlZGlzLmNyZWF0ZUNsaWVudChjb25maWcucmVkaXMpO1xuXG5jbGllbnQub24oJ2Vycm9yJywgZXJyID0+IGNvbnNvbGUubG9nKGVycikpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbnN1YnNjcmliZXIub24oJ2Vycm9yJywgZXJyID0+IGNvbnNvbGUubG9nKGVycikpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuZXhwb3J0IHsgY2xpZW50IGFzIHJlZGlzLCBzdWJzY3JpYmVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZGlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJpbXBvcnQge1xuICBHcmFwaFFMSW50LFxuICBHcmFwaFFMTm9uTnVsbCxcbiAgR3JhcGhRTE9iamVjdFR5cGUsXG4gIEdyYXBoUUxTdHJpbmcsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBHb1R5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnR28nLFxuICBmaWVsZHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgIH0sXG4gICAgZW5naW5lOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICBuYW1lOiAnR29JbmZvJyxcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgYm9hcmRzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEludCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibGFjazoge1xuICAgICAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdoaXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ29hbDoge1xuICAgICAgICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBHb1R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvdHlwZXMvR29UeXBlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtYXBvbGxvXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsdWViaXJkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmx1ZWJpcmRcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRXJyb3JQYWdlLmNzcyc7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZXJyb3I6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzdGFjazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXJyb3I6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChfX0RFVl9fICYmIHRoaXMucHJvcHMuZXJyb3IpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmVycm9yLm5hbWV9PC9oMT5cbiAgICAgICAgICA8cHJlPnt0aGlzLnByb3BzLmVycm9yLnN0YWNrfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FcnJvcjwvaDE+XG4gICAgICAgIDxwPlNvcnJ5LCBhIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIG9uIHRoaXMgcGFnZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEVycm9yUGFnZSBhcyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRXJyb3JQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZXhwb3J0IGNvbnN0IFNFVF9SVU5USU1FX1ZBUklBQkxFID0gJ1NFVF9SVU5USU1FX1ZBUklBQkxFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uc3RhbnRzL2luZGV4LmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknKTtcblxudmFyIF9zdHJpbmdpZnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jyk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGljZWRUb0FycmF5Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogSXNvbW9ycGhpYyBDU1Mgc3R5bGUgbG9hZGVyIGZvciBXZWJwYWNrXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTUtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcHJlZml4ID0gJ3MnO1xudmFyIGluc2VydGVkID0ge307XG5cbi8vIEJhc2U2NCBlbmNvZGluZyBhbmQgZGVjb2RpbmcgLSBUaGUgXCJVbmljb2RlIFByb2JsZW1cIlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cbmZ1bmN0aW9uIGI2NEVuY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICB9KSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHN0eWxlL2xpbmsgZWxlbWVudHMgZm9yIHNwZWNpZmllZCBub2RlIElEc1xuICogaWYgdGhleSBhcmUgbm8gbG9uZ2VyIHJlZmVyZW5jZWQgYnkgVUkgY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ3NzKGlkcykge1xuICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAoLS1pbnNlcnRlZFtpZF0gPD0gMCkge1xuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyBpZCk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBFeGFtcGxlOlxuICogICAvLyBJbnNlcnQgQ1NTIHN0eWxlcyBvYmplY3QgZ2VuZXJhdGVkIGJ5IGBjc3MtbG9hZGVyYCBpbnRvIERPTVxuICogICB2YXIgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKFtbMSwgJ2JvZHkgeyBjb2xvcjogcmVkOyB9J11dKTtcbiAqXG4gKiAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBET01cbiAqICAgcmVtb3ZlQ3NzKCk7XG4gKi9cbmZ1bmN0aW9uIGluc2VydENzcyhzdHlsZXMpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgX3JlZiRyZXBsYWNlID0gX3JlZi5yZXBsYWNlLFxuICAgICAgcmVwbGFjZSA9IF9yZWYkcmVwbGFjZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHJlcGxhY2UsXG4gICAgICBfcmVmJHByZXBlbmQgPSBfcmVmLnByZXBlbmQsXG4gICAgICBwcmVwZW5kID0gX3JlZiRwcmVwZW5kID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkcHJlcGVuZDtcblxuICB2YXIgaWRzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9zdHlsZXMkaSA9ICgwLCBfc2xpY2VkVG9BcnJheTMuZGVmYXVsdCkoc3R5bGVzW2ldLCA0KSxcbiAgICAgICAgbW9kdWxlSWQgPSBfc3R5bGVzJGlbMF0sXG4gICAgICAgIGNzcyA9IF9zdHlsZXMkaVsxXSxcbiAgICAgICAgbWVkaWEgPSBfc3R5bGVzJGlbMl0sXG4gICAgICAgIHNvdXJjZU1hcCA9IF9zdHlsZXMkaVszXTtcblxuICAgIHZhciBpZCA9IG1vZHVsZUlkICsgJy0nICsgaTtcblxuICAgIGlkcy5wdXNoKGlkKTtcblxuICAgIGlmIChpbnNlcnRlZFtpZF0pIHtcbiAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICBpbnNlcnRlZFtpZF0rKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0ZWRbaWRdID0gMTtcblxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4ICsgaWQpO1xuICAgIHZhciBjcmVhdGUgPSBmYWxzZTtcblxuICAgIGlmICghZWxlbSkge1xuICAgICAgY3JlYXRlID0gdHJ1ZTtcblxuICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgZWxlbS5pZCA9IHByZWZpeCArIGlkO1xuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjc3NUZXh0ID0gY3NzO1xuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHNraXAgSUU5IGFuZCBiZWxvdywgc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9hdG9iLWJ0b2FcbiAgICAgIGNzc1RleHQgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGI2NEVuY29kZVVuaWNvZGUoKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKHNvdXJjZU1hcCkpICsgJyovJztcbiAgICAgIGNzc1RleHQgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5maWxlICsgJz8nICsgaWQgKyAnKi8nO1xuICAgIH1cblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUNzcy5iaW5kKG51bGwsIGlkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2FtZS1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJnYW1lLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJztcbmltcG9ydCBjb25uZWN0UmVkaXMgZnJvbSAnY29ubmVjdC1yZWRpcyc7XG5pbXBvcnQgZXhwcmVzc1dzIGZyb20gJ2V4cHJlc3Mtd3MnO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBleHByZXNzSnd0LCB7IFVuYXV0aG9yaXplZEVycm9yIGFzIEp3dDQwMUVycm9yIH0gZnJvbSAnZXhwcmVzcy1qd3QnO1xuaW1wb3J0IGV4cHJlc3NHcmFwaFFMIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgbm9kZUZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgUHJldHR5RXJyb3IgZnJvbSAncHJldHR5LWVycm9yJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBjcmVhdGVBcG9sbG9DbGllbnQgZnJvbSAnLi9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEh0bWwgZnJvbSAnLi9jb21wb25lbnRzL0h0bWwnO1xuaW1wb3J0IHsgRXJyb3JQYWdlV2l0aG91dFN0eWxlIH0gZnJvbSAnLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlJztcbmltcG9ydCBlcnJvclBhZ2VTdHlsZSBmcm9tICcuL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzJztcbmltcG9ydCBjcmVhdGVGZXRjaCBmcm9tICcuL2NyZWF0ZUZldGNoJztcbmltcG9ydCBjb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAnLi9wYXNzcG9ydCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJztcbmltcG9ydCB7IHJlZGlzIH0gZnJvbSAnLi9yZWRpcyc7XG5pbXBvcnQgbW9kZWxzIGZyb20gJy4vZGF0YS9tb2RlbHMnO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL2RhdGEvc2NoZW1hJztcbmltcG9ydCBhc3NldHMgZnJvbSAnLi9hc3NldHMuanNvbic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcbmltcG9ydCB7IHNldFJ1bnRpbWVWYXJpYWJsZSB9IGZyb20gJy4vYWN0aW9ucy9ydW50aW1lJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5leHByZXNzV3MoYXBwKTtcbi8vXG4vLyBUZWxsIGFueSBDU1MgdG9vbGluZyAoc3VjaCBhcyBNYXRlcmlhbCBVSSkgdG8gdXNlIGFsbCB2ZW5kb3IgcHJlZml4ZXMgaWYgdGhlXG4vLyB1c2VyIGFnZW50IGlzIG5vdCBrbm93bi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nbG9iYWwubmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvciB8fCB7fTtcbmdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50ID0gZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJ2FsbCc7XG5cbi8vXG4vLyBSZWdpc3RlciBOb2RlLmpzIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShcbiAgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpLCB7XG4gICAgbWF4QWdlOiBfX0RFVl9fID8gMCA6ICcxeScsXG4gIH0pLFxuKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbi8vXG4vLyBBdXRoZW50aWNhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcC51c2UoXG4gIGV4cHJlc3NKd3Qoe1xuICAgIHNlY3JldDogY29uZmlnLmF1dGguand0LnNlY3JldCxcbiAgICBjcmVkZW50aWFsc1JlcXVpcmVkOiBmYWxzZSxcbiAgICBnZXRUb2tlbjogcmVxID0+IHJlcS5jb29raWVzLmlkX3Rva2VuLFxuICB9KSxcbik7XG4vLyBFcnJvciBoYW5kbGVyIGZvciBleHByZXNzLWp3dFxuYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIGlmIChlcnIgaW5zdGFuY2VvZiBKd3Q0MDFFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tleHByZXNzLWp3dC1lcnJvcl0nLCByZXEuY29va2llcy5pZF90b2tlbik7XG4gICAgLy8gYGNsZWFyQ29va2llYCwgb3RoZXJ3aXNlIHVzZXIgY2FuJ3QgdXNlIHdlYi1hcHAgdW50aWwgY29va2llIGV4cGlyZXNcbiAgICByZXMuY2xlYXJDb29raWUoJ2lkX3Rva2VuJyk7XG4gIH1cbiAgbmV4dChlcnIpO1xufSk7XG5cbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcblxuaWYgKF9fREVWX18pIHtcbiAgYXBwLmVuYWJsZSgndHJ1c3QgcHJveHknKTtcbn1cbmlmIChhcHAuZ2V0KCdlbnYnKSA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGFwcC5zZXQoJ3RydXN0IHByb3h5JywgMSk7IC8vIHRydXN0IGZpcnN0IHByb3h5XG59XG5jb25zdCBSZWRpc1N0b3JlID0gY29ubmVjdFJlZGlzKHNlc3Npb24pO1xuYXBwLnVzZShcbiAgc2Vzc2lvbih7XG4gICAgc3RvcmU6IG5ldyBSZWRpc1N0b3JlKHtcbiAgICAgIGNsaWVudDogcmVkaXMsXG4gICAgfSksXG4gICAgc2VjcmV0OiBjb25maWcuc2Vzc2lvblNlY3JldCxcbiAgICBjb29raWU6IHtcbiAgICAgIGRvbWFpbjogJy5zaG91dGFud3EuY29tJyxcbiAgICB9LFxuICAgIHJlc2F2ZTogZmFsc2UsXG4gICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWUsXG4gIH0pLFxuKTtcblxuYXBwLmdldChcbiAgJy9sb2dpbi93ZWNoYXQnLFxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBuZXh0KCk7XG4gIH0sXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnd2VjaGF0JyksXG4pO1xuXG5hcHAuZ2V0KFxuICAnL2xvZ2luL3dlY2hhdC9yZXR1cm4nLFxuICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ3dlY2hhdCcsIHtcbiAgICBzZXNzaW9uOiBmYWxzZSxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4vd2VjaGF0JyxcbiAgfSksXG4gIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGV4cGlyZXNJbiA9IDYwICogNjAgKiAyNCAqIDE4MDsgLy8gMTgwIGRheXNcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHJlcS51c2VyLCBjb25maWcuYXV0aC5qd3Quc2VjcmV0LCB7IGV4cGlyZXNJbiB9KTtcbiAgICByZXMuY29va2llKCdpZF90b2tlbicsIHRva2VuLCB7IG1heEFnZTogMTAwMCAqIGV4cGlyZXNJbiwgaHR0cE9ubHk6IHRydWUgfSk7XG4gICAgcmVzLnJlZGlyZWN0KHJlcS5zZXNzaW9uLm5leHQgfHwgJy8nKTtcbiAgfSxcbik7XG5cbi8vXG4vLyBSZWdpc3RlciBBUEkgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGdyYXBocWxNaWRkbGV3YXJlID0gZXhwcmVzc0dyYXBoUUwocmVxID0+ICh7XG4gIHNjaGVtYSxcbiAgZ3JhcGhpcWw6IF9fREVWX18sXG4gIHJvb3RWYWx1ZTogeyByZXF1ZXN0OiByZXEgfSxcbiAgcHJldHR5OiBfX0RFVl9fLFxufSkpO1xuXG5hcHAudXNlKCcvZ3JhcGhxbCcsIGdyYXBocWxNaWRkbGV3YXJlKTtcbmFwcC51c2UoY29ubmVjdGlvbigpKTtcblxuLy9cbi8vIFJlZ2lzdGVyIHNlcnZlci1zaWRlIHJlbmRlcmluZyBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLmdldCgnKicsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNzcyA9IG5ldyBTZXQoKTtcblxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IGNyZWF0ZUFwb2xsb0NsaWVudCh7XG4gICAgICBzY2hlbWEsXG4gICAgICByb290VmFsdWU6IHsgcmVxdWVzdDogcmVxIH0sXG4gICAgfSk7XG5cbiAgICAvLyBVbml2ZXJzYWwgSFRUUCBjbGllbnRcbiAgICBjb25zdCBmZXRjaCA9IGNyZWF0ZUZldGNoKG5vZGVGZXRjaCwge1xuICAgICAgYmFzZVVybDogY29uZmlnLmFwaS5zZXJ2ZXJVcmwsXG4gICAgICBjb29raWU6IHJlcS5oZWFkZXJzLmNvb2tpZSxcbiAgICAgIGFwb2xsb0NsaWVudCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgIHVzZXI6IHJlcS51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCB7XG4gICAgICBjb29raWU6IHJlcS5oZWFkZXJzLmNvb2tpZSxcbiAgICAgIGZldGNoLFxuICAgICAgLy8gSSBzaG91bGQgbm90IHVzZSBgaGlzdG9yeWAgb24gc2VydmVyLi4gYnV0IGhvdyBJIGRvIHJlZGlyZWN0aW9uPyBmb2xsb3cgdW5pdmVyc2FsLXJvdXRlclxuICAgICAgaGlzdG9yeTogbnVsbCxcbiAgICB9KTtcblxuICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgc2V0UnVudGltZVZhcmlhYmxlKHtcbiAgICAgICAgbmFtZTogJ2luaXRpYWxOb3cnLFxuICAgICAgICB2YWx1ZTogRGF0ZS5ub3coKSxcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICAvLyBHbG9iYWwgKGNvbnRleHQpIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBlYXNpbHkgYWNjZXNzZWQgZnJvbSBhbnkgUmVhY3QgY29tcG9uZW50XG4gICAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9jb250ZXh0Lmh0bWxcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlclxuICAgICAgaW5zZXJ0Q3NzOiAoLi4uc3R5bGVzKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiBjc3MuYWRkKHN0eWxlLl9nZXRDc3MoKSkpO1xuICAgICAgfSxcbiAgICAgIGZldGNoLFxuICAgICAgLy8gWW91IGNhbiBhY2Nlc3MgcmVkdXggdGhyb3VnaCByZWFjdC1yZWR1eCBjb25uZWN0XG4gICAgICBzdG9yZSxcbiAgICAgIHN0b3JlU3Vic2NyaXB0aW9uOiBudWxsLFxuICAgICAgLy8gQXBvbGxvIENsaWVudCBmb3IgdXNlIHdpdGggcmVhY3QtYXBvbGxvXG4gICAgICBjbGllbnQ6IGFwb2xsb0NsaWVudCxcbiAgICB9O1xuICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgcm91dGVyLnJlc29sdmUoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIGhvc3RuYW1lOiByZXEuaG9zdG5hbWUsXG4gICAgICBwYXRobmFtZTogcmVxLnBhdGgsXG4gICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxuICAgIH0pO1xuXG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XG4gICAgICBpZiAocm91dGUuZnJvbSkge1xuICAgICAgICByZXEuc2Vzc2lvbi5uZXh0ID0gcm91dGUuZnJvbTtcbiAgICAgIH1cbiAgICAgIHJlcy5yZWRpcmVjdChyb3V0ZS5zdGF0dXMgfHwgMzAyLCByb3V0ZS5yZWRpcmVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHsgLi4ucm91dGUgfTtcbiAgICBjb25zdCByb290Q29tcG9uZW50ID0gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXJcbiAgICAgICAgbXVpVGhlbWU9e2dldE11aVRoZW1lKHtcbiAgICAgICAgICB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10sXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8QXBwXG4gICAgICAgICAgY29udGV4dD17Y29udGV4dH1cbiAgICAgICAgICBzdG9yZT17c3RvcmV9XG4gICAgICAgICAgdXNlckFnZW50PXtyZXEuaGVhZGVyc1sndXNlci1hZ2VudCddfVxuICAgICAgICA+XG4gICAgICAgICAge3JvdXRlLmNvbXBvbmVudH1cbiAgICAgICAgPC9BcHA+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUocm9vdENvbXBvbmVudCk7XG4gICAgLy8gdGhpcyBpcyBoZXJlIGJlY2F1c2Ugb2YgQXBvbGxvIHJlZHV4IEFQT0xMT19RVUVSWV9TVE9QIGFjdGlvblxuICAgIGF3YWl0IFByb21pc2UuZGVsYXkoMCk7XG4gICAgZGF0YS5jaGlsZHJlbiA9IGF3YWl0IFJlYWN0RE9NLnJlbmRlclRvU3RyaW5nKHJvb3RDb21wb25lbnQpO1xuICAgIGRhdGEuc3R5bGVzID0gW3sgaWQ6ICdjc3MnLCBjc3NUZXh0OiBbLi4uY3NzXS5qb2luKCcnKSB9XTtcblxuICAgIGRhdGEuc2NyaXB0cyA9IFthc3NldHMudmVuZG9yLmpzXTtcbiAgICBkYXRhLnNjcmlwdHMucHVzaCgnLy9yZXMud3gucXEuY29tL29wZW4vanMvandlaXhpbi0xLjIuMC5qcycpO1xuICAgIGlmIChyb3V0ZS5jaHVua3MpIHtcbiAgICAgIGRhdGEuc2NyaXB0cy5wdXNoKC4uLnJvdXRlLmNodW5rcy5tYXAoY2h1bmsgPT4gYXNzZXRzW2NodW5rXS5qcykpO1xuICAgIH1cbiAgICBkYXRhLnNjcmlwdHMucHVzaChhc3NldHMuY2xpZW50LmpzKTtcblxuICAgIC8vIEZ1cnRoZXJtb3JlIGludm9rZWQgYWN0aW9ucyB3aWxsIGJlIGlnbm9yZWQsIGNsaWVudCB3aWxsIG5vdCByZWNlaXZlIHRoZW0hXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZygnU2VyaWFsaXppbmcgc3RvcmUuLi4nKTtcbiAgICB9XG4gICAgZGF0YS5hcHAgPSB7XG4gICAgICBhcGlVcmw6IGNvbmZpZy5hcGkuY2xpZW50VXJsLFxuICAgICAgc3RhdGU6IGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIGFwb2xsb1N0YXRlOiBjb250ZXh0LmNsaWVudC5leHRyYWN0KCksXG4gICAgfTtcbiAgICBkYXRhLmhvc3RuYW1lID0gcmVxLmhvc3RuYW1lO1xuXG4gICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKDxIdG1sIHsuLi5kYXRhfSAvPik7XG4gICAgcmVzLnN0YXR1cyhyb3V0ZS5zdGF0dXMgfHwgMjAwKTtcbiAgICByZXMuc2VuZChgPCFkb2N0eXBlIGh0bWw+JHtodG1sfWApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn0pO1xuXG4vL1xuLy8gRXJyb3IgaGFuZGxpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBwZSA9IG5ldyBQcmV0dHlFcnJvcigpO1xucGUuc2tpcE5vZGVGaWxlcygpO1xucGUuc2tpcFBhY2thZ2UoJ2V4cHJlc3MnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IocGUucmVuZGVyKGVycikpO1xuICBjb25zdCBodG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgPEh0bWxcbiAgICAgIHRpdGxlPVwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCJcbiAgICAgIGRlc2NyaXB0aW9uPXtlcnIubWVzc2FnZX1cbiAgICAgIHN0eWxlcz17W3sgaWQ6ICdjc3MnLCBjc3NUZXh0OiBlcnJvclBhZ2VTdHlsZS5fZ2V0Q3NzKCkgfV19IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICA+XG4gICAgICB7UmVhY3RET00ucmVuZGVyVG9TdHJpbmcoPEVycm9yUGFnZVdpdGhvdXRTdHlsZSBlcnJvcj17ZXJyfSAvPil9XG4gICAgPC9IdG1sPixcbiAgKTtcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XG59KTtcblxuLy9cbi8vIExhdW5jaCB0aGUgc2VydmVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgcHJvbWlzZSA9IG1vZGVscy5zeW5jKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKSk7XG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICBhcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmluZm8oYFRoZSBzZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9L2ApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy9cbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAobW9kdWxlLmhvdCkge1xuICBhcHAuaG90ID0gbW9kdWxlLmhvdDtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcm91dGVyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtcmVkaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb25uZWN0LXJlZGlzXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtd3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLXdzXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLWp3dFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWdyYXBocWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLWdyYXBocWxcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianNvbndlYnRva2VuXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZXR0eS1lcnJvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByZXR0eS1lcnJvclwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyXCJcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZVwiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIEBmbG93XG5cbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcic7XG5pbXBvcnQgeyBTY2hlbWFMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstc2NoZW1hJztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICcuL2NyZWF0ZUNhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KHNjaGVtYSkge1xuICBjb25zdCBsaW5rID0gZnJvbShbXG4gICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICAgIGdyYXBoUUxFcnJvcnMubWFwKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLndhcm4oYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9YCk7XG4gICAgfSksXG4gICAgbmV3IFNjaGVtYUxpbmsoeyAuLi5zY2hlbWEgfSksXG4gIF0pO1xuXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rLFxuICAgIGNhY2hlOiBjcmVhdGVDYWNoZSgpLFxuICAgIHNzck1vZGU6IHRydWUsXG4gICAgcXVlcnlEZWR1cGxpY2F0aW9uOiB0cnVlLFxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29yZS9jcmVhdGVBcG9sbG9DbGllbnQvY3JlYXRlQXBvbGxvQ2xpZW50LnNlcnZlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCJcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXBvbGxvLWxpbmtcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstZXJyb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1zY2hlbWFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1zY2hlbWFcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuXG5mdW5jdGlvbiBkYXRhSWRGcm9tT2JqZWN0KG9iaikge1xuICBzd2l0Y2ggKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgY2FzZSAnTmV3c0l0ZW0nOlxuICAgICAgcmV0dXJuIG9iai5saW5rID8gYE5ld3NJdGVtOiR7b2JqLmxpbmt9YCA6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KG9iaik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChvYmopO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2Jhc2ljcy9jYWNoaW5nLmh0bWwjY29uZmlndXJhdGlvblxuICByZXR1cm4gbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgIGRhdGFJZEZyb21PYmplY3QsXG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVDYWNoZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuY29uc3QgQ29udGV4dFR5cGUgPSB7XG4gIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlclxuICBpbnNlcnRDc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIFVuaXZlcnNhbCBIVFRQIGNsaWVudFxuICBmZXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gSW50ZWdyYXRlIFJlZHV4XG4gIC8vIGh0dHA6Ly9yZWR1eC5qcy5vcmcvZG9jcy9iYXNpY3MvVXNhZ2VXaXRoUmVhY3QuaHRtbFxuICAuLi5SZWR1eFByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzLFxuICAvLyBBcG9sbG8gQ2xpZW50XG4gIGNsaWVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuLyoqXG4gKiBUaGUgdG9wLWxldmVsIFJlYWN0IGNvbXBvbmVudCBzZXR0aW5nIGNvbnRleHQgKGdsb2JhbCkgdmFyaWFibGVzXG4gKiB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuICpcbiAqIFVzYWdlIGV4YW1wbGU6XG4gKlxuICogICBjb25zdCBjb250ZXh0ID0ge1xuICogICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksXG4gKiAgICAgc3RvcmU6IGNyZWF0ZVN0b3JlKCksXG4gKiAgIH07XG4gKlxuICogICBSZWFjdERPTS5yZW5kZXIoXG4gKiAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fT5cbiAqICAgICAgIDxMYXlvdXQ+XG4gKiAgICAgICAgIDxMYW5kaW5nUGFnZSAvPlxuICogICAgICAgPC9MYXlvdXQ+XG4gKiAgICAgPC9BcHA+LFxuICogICAgIGNvbnRhaW5lcixcbiAqICAgKTtcbiAqL1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGV4dDogUHJvcFR5cGVzLnNoYXBlKENvbnRleHRUeXBlKS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IENvbnRleHRUeXBlO1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIEhlcmUsIHdlIGFyZSBhdCB1bml2ZXJzZSBsZXZlbCwgc3VyZT8gOy0pXG4gICAgY29uc3QgeyBjbGllbnQgfSA9IHRoaXMucHJvcHMuY29udGV4dDtcbiAgICAvLyBOT1RFOiBJZiB5b3UgbmVlZCB0byBhZGQgb3IgbW9kaWZ5IGhlYWRlciwgZm9vdGVyIGV0Yy4gb2YgdGhlIGFwcCxcbiAgICAvLyBwbGVhc2UgZG8gdGhhdCBpbnNpZGUgdGhlIExheW91dCBjb21wb25lbnQuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9BcG9sbG9Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5cbmNsYXNzIEh0bWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY3NzVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSkuaXNSZXF1aXJlZCxcbiAgICApLFxuICAgIHNjcmlwdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCksXG4gICAgYXBwOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBob3N0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczogW10sXG4gICAgc2NyaXB0czogW10sXG4gICAgaG9zdG5hbWU6IG51bGwsXG4gIH07XG5cbiAgYXNzZXRzTWFwKGFzc2V0KSB7XG4gICAgaWYgKGFzc2V0LnN0YXJ0c1dpdGgoJy9hc3NldHMvJykgJiYgdGhpcy5wcm9wcy5ob3N0bmFtZSkge1xuICAgICAgY29uc3QgZG9tYWluID0gdGhpcy5wcm9wcy5ob3N0bmFtZS5zcGxpdCgnLicpO1xuICAgICAgaWYgKGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMl0pIHtcbiAgICAgICAgcmV0dXJuIGAvL2Fzc2V0cy4ke2RvbWFpbltkb21haW4ubGVuZ3RoIC0gMl19LiR7XG4gICAgICAgICAgZG9tYWluW2RvbWFpbi5sZW5ndGggLSAxXVxuICAgICAgICB9JHthc3NldH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAvL2Fzc2V0cy4ke2RvbWFpbltkb21haW4ubGVuZ3RoIC0gMV19JHthc3NldH1gO1xuICAgIH1cbiAgICByZXR1cm4gYXNzZXQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHN0eWxlcywgc2NyaXB0cywgYXBwLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgY2xhc3NOYW1lPVwibm8tanNcIiBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZSA9IDEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICB7c2NyaXB0cy5tYXAoc2NyaXB0ID0+IChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIGtleT17c2NyaXB0fVxuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgaHJlZj17dGhpcy5hc3NldHNNYXAoc2NyaXB0KX1cbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cImFwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgICAgICB7c3R5bGVzLm1hcChzdHlsZSA9PiAoXG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAga2V5PXtzdHlsZS5pZH1cbiAgICAgICAgICAgICAgaWQ9e3N0eWxlLmlkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzc1RleHQgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBpZD1cImFwcFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hpbGRyZW4gfX0gLz5cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGB3aW5kb3cuQXBwPSR7c2VyaWFsaXplKGFwcCl9YCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3NjcmlwdHMubWFwKHNjcmlwdCA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0IGtleT17c2NyaXB0fSBzcmM9e3RoaXMuYXNzZXRzTWFwKHNjcmlwdCl9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge2NvbmZpZy5hbmFseXRpY3MgJiZcbiAgICAgICAgICAgIGNvbmZpZy5hbmFseXRpY3MuZ29vZ2xlVHJhY2tpbmdJZCAmJiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOlxuICAgICAgICAgICAgICAgICAgICAnd2luZG93LmdhPWZ1bmN0aW9uKCl7Z2EucS5wdXNoKGFyZ3VtZW50cyl9O2dhLnE9W107Z2EubD0rbmV3IERhdGU7JyArXG4gICAgICAgICAgICAgICAgICAgIGBnYSgnY3JlYXRlJywnJHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWRcbiAgICAgICAgICAgICAgICAgICAgfScsJ2F1dG8nKTtnYSgnc2VuZCcsJ3BhZ2V2aWV3JylgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIHtjb25maWcuYW5hbHl0aWNzICYmXG4gICAgICAgICAgICBjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWQgJiYgKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzXCJcbiAgICAgICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgICAgIGRlZmVyXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdG1sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0h0bWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx1QkFBdUI7TUFDbkIsb0JBQW9CO0VBQ3hCLHNCQUFzQjtNQUNsQix3QkFBd0I7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQlwiLFwiZmlsZVwiOlwiRXJyb3JQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIEBmbG93ICovXG5cbnR5cGUgRmV0Y2ggPSAodXJsOiBzdHJpbmcsIG9wdGlvbnM6ID9hbnkpID0+IFByb21pc2U8YW55PjtcblxudHlwZSBPcHRpb25zID0ge1xuICBiYXNlVXJsOiBzdHJpbmcsXG4gIGNvb2tpZT86IHN0cmluZyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gYXJvdW5kIHRoZSBIVE1MNSBGZXRjaCBBUEkgdGhhdCBwcm92aWRlc1xuICogZGVmYXVsdCBhcmd1bWVudHMgdG8gZmV0Y2goLi4uKSBhbmQgaXMgaW50ZW5kZWQgdG8gcmVkdWNlIHRoZSBhbW91bnRcbiAqIG9mIGJvaWxlcnBsYXRlIGNvZGUgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICovXG5mdW5jdGlvbiBjcmVhdGVGZXRjaChmZXRjaDogRmV0Y2gsIHsgYmFzZVVybCwgY29va2llIH06IE9wdGlvbnMpIHtcbiAgLy8gTk9URTogVHdlYWsgdGhlIGRlZmF1bHQgb3B0aW9ucyB0byBzdWl0ZSB5b3VyIGFwcGxpY2F0aW9uIG5lZWRzXG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBoYW5keSB3aXRoIEdyYXBoUUwgYmFja2VuZHNcbiAgICBtb2RlOiBiYXNlVXJsID8gJ2NvcnMnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBjcmVkZW50aWFsczogYmFzZVVybCA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKGNvb2tpZSA/IHsgQ29va2llOiBjb29raWUgfSA6IG51bGwpLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuICh1cmw6IHN0cmluZywgb3B0aW9uczogYW55KSA9PlxuICAgIHVybC5zdGFydHNXaXRoKCcvZ3JhcGhxbCcpIHx8IHVybC5zdGFydHNXaXRoKCcvYXBpJylcbiAgICAgID8gZmV0Y2goYCR7YmFzZVVybH0ke3VybH1gLCB7XG4gICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cy5oZWFkZXJzLFxuICAgICAgICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgOiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY3JlYXRlRmV0Y2guanMiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBHYW1lRW5naW5lIGZyb20gJ2dhbWUtZW5naW5lJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgVXNlciwgVXNlclByb2ZpbGUsIEdvSW5mbywgR29Nb3ZlIH0gZnJvbSAnLi9kYXRhL21vZGVscyc7XG5cbmltcG9ydCB7IHJlZGlzLCBzdWJzY3JpYmVyIH0gZnJvbSAnLi9yZWRpcyc7XG5cbmNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnXihCfFcpW2Etel0qIHdpbnMgYnkgKFtcXFxcZFxcXFwuXSspIHBvaW50cycpO1xuXG5jb25zdCBjaGFubmVscyA9IHt9O1xuXG5zdWJzY3JpYmVyLm9uKCdtZXNzYWdlJywgKGNoYW5uZWwsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgY2hhbiA9IGNoYW5uZWwuc3BsaXQoJzonKVsxXTtcbiAgY2hhbm5lbHNbY2hhbl0uZm9yRWFjaCh3cyA9PiB7XG4gICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gIHJvdXRlci53cygnL2NoYW5uZWwvOmNoYW5uZWwnLCAod3MsIHJlcSkgPT4ge1xuICAgIHdzLm9uKCdtZXNzYWdlJywgZGF0YSA9PiB7XG4gICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBHb0luZm8uZmluZE9uZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB3cy5jaGFubmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBHb01vdmUuZmluZE9uZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB3cy5jaGFubmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4obW92ZSA9PiBtb3ZlLm1vdmUpLFxuICAgICAgXSkudGhlbigoW2luZm8sIG1vdmVzXSkgPT4ge1xuICAgICAgICBjb25zdCB7IHJ1bGUgfSA9IGluZm87XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBHYW1lRW5naW5lW3J1bGVdKGluZm8sIG1vdmVzKTtcbiAgICAgICAgbGV0IGNvbG9yO1xuICAgICAgICBpZiAoaW5mby5ibGFjayA9PT0gcmVxLnVzZXIuaWQpIHtcbiAgICAgICAgICBjb2xvciA9IEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0s7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5mby53aGl0ZSA9PT0gcmVxLnVzZXIuaWQpIHtcbiAgICAgICAgICBjb2xvciA9IEdhbWVFbmdpbmUuR28uQ09MT1IuV0hJVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBlbmdpbmVbbXNnLnR5cGVdKFxuICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgIG1zZy5wb3NpdGlvbiAmJiBtc2cucG9zaXRpb25bMF0sXG4gICAgICAgICAgbXNnLnBvc2l0aW9uICYmIG1zZy5wb3NpdGlvblsxXSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInIHx8XG4gICAgICAgICAgKHR5cGVvZiByZXN1bHQgPT09ICdib29sZWFuJyAmJiByZXN1bHQpXG4gICAgICAgICkge1xuICAgICAgICAgIG1vdmVzLnB1c2goT2JqZWN0LmFzc2lnbih7IGNvbG9yIH0sIG1zZykpO1xuICAgICAgICAgIEdvTW92ZS51cGRhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vdmU6IG1vdmVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBpZDogd3MuY2hhbm5lbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVkaXMucHVibGlzaEFzeW5jKFxuICAgICAgICAgICAgICAgIGBjaGFubmVsOiR7d3MuY2hhbm5lbH1gLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6ICdvaycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZGVsdGEnLFxuICAgICAgICAgICAgICAgICAgbW92ZTogT2JqZWN0LmFzc2lnbih7IGNvbG9yIH0sIG1zZyksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlbmdpbmUud2lubmVyKCkgPT09ICdlc3RpbWF0ZScpIHtcbiAgICAgICAgICAgICAgICBmZXRjaChjb25maWcuZ251Z28sIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgYm9keTogZW5naW5lLnRvU2dmKCksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuICAgICAgICAgICAgICAgICAgLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSB0ZXh0Lm1hdGNoKHJlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmZvLnJlc3VsdCA9IGAke3JbMV19KyR7clsyXX1gO1xuICAgICAgICAgICAgICAgICAgICAgIGluZm8uc2F2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXMucHVibGlzaEFzeW5jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgY2hhbm5lbDoke3dzLmNoYW5uZWx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6ICdvaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc3VsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBgJHtyWzFdfSske3JbMl19YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbmdpbmUud2lubmVyKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5uZXIgPSBlbmdpbmUud2lubmVyKCk7XG4gICAgICAgICAgICAgICAgaW5mby5yZXN1bHQgPSBgJHtcbiAgICAgICAgICAgICAgICAgIHdpbm5lciA9PT0gR2FtZUVuZ2luZS5Hby5DT0xPUi5CTEFDSyA/ICdCK1InIDogJ1crUidcbiAgICAgICAgICAgICAgICB9YDtcbiAgICAgICAgICAgICAgICBpbmZvLnNhdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJlZGlzLnB1Ymxpc2hBc3luYyhcbiAgICAgICAgICAgICAgICAgICAgYGNoYW5uZWw6JHt3cy5jaGFubmVsfWAsXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAnb2snLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPT09IEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0sgPyAnQitSJyA6ICdXK1InXG4gICAgICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgd3Mub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgaWYgKHdzLmNoYW5uZWwpIHtcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IGNoYW5uZWxzW3dzLmNoYW5uZWxdO1xuICAgICAgICBjaGFubmVsLnNwbGljZShjaGFubmVsLmluZGV4T2Yod3MpLCAxKTtcbiAgICAgICAgaWYgKGNoYW5uZWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIGNoYW5uZWxzW3dzLmNoYW5uZWxdO1xuICAgICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoYGNoYW5uZWw6JHt3cy5jaGFubmVsfWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBkZWxldGUgd3MuY2hhbm5lbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICgoKSA9PiB7XG4gICAgICAvLyBxdWl0IHByZXYgY2hhbm5lbFxuICAgICAgaWYgKCFjaGFubmVsc1tyZXEucGFyYW1zLmNoYW5uZWxdKSB7XG4gICAgICAgIHN1YnNjcmliZXIuc3Vic2NyaWJlKGBjaGFubmVsOiR7cmVxLnBhcmFtcy5jaGFubmVsfWApO1xuICAgICAgICBjaGFubmVsc1tyZXEucGFyYW1zLmNoYW5uZWxdID0gW107XG4gICAgICB9XG4gICAgICBpZiAod3MuY2hhbm5lbCkge1xuICAgICAgICBjb25zdCBjaGFubmVsID0gY2hhbm5lbHNbd3MuY2hhbm5lbF07XG4gICAgICAgIGNoYW5uZWwuc3BsaWNlKGNoYW5uZWwuaW5kZXhPZih3cyksIDEpO1xuICAgICAgfVxuICAgICAgLy8gc3Vic2NyaWJlIHRvIG5ldyBjaGFubmVsXG4gICAgICBjaGFubmVsc1tyZXEucGFyYW1zLmNoYW5uZWxdLnB1c2god3MpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB3cy5jaGFubmVsID0gcmVxLnBhcmFtcy5jaGFubmVsO1xuICAgICAgLy8gc2VuZCBuZXcgZ2FtZSBpbmZvXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIEdvSW5mby5maW5kT25lKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IHdzLmNoYW5uZWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIEdvTW92ZS5maW5kT25lKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IHdzLmNoYW5uZWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihtb3ZlID0+IG1vdmUubW92ZSksXG4gICAgICBdKS50aGVuKChbaW5mbywgbW92ZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGluZm8ucnVsZTtcbiAgICAgICAgVXNlci5maW5kQWxsKHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogeyAkaW46IFtpbmZvLmJsYWNrLCBpbmZvLndoaXRlXSB9IH0sXG4gICAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2Rpc3BsYXlOYW1lJywgJ3BpY3R1cmUnXSxcbiAgICAgICAgICAgICAgbW9kZWw6IFVzZXJQcm9maWxlLFxuICAgICAgICAgICAgICBhczogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSkudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgY29uc3QgcGxheWVycyA9IHVzZXJzLmZpbHRlcihlID0+IGUpLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHUgPSB1c2VyLmdldCh7IHBsYWluOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IHUuaWQsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB1LnByb2ZpbGUuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgIHBpY3R1cmU6IHUucHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcHJvZmlsZSA9IHt9O1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHByb2ZpbGUsIHtcbiAgICAgICAgICAgICAgW3BsYXllci5pZF06IHBsYXllcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3cy5zZW5kKFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBjb2RlOiAnb2snLFxuICAgICAgICAgICAgICB0eXBlOiAnaW5pdCcsXG4gICAgICAgICAgICAgIGdhbWU6IHtcbiAgICAgICAgICAgICAgICBlbmdpbmUsXG4gICAgICAgICAgICAgICAgbW92ZXMsXG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0OiBpbmZvLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgIGJvYXJkc2l6ZTogaW5mby5ib2FyZHNpemUsXG4gICAgICAgICAgICAgICAgICBibGFjazoge1xuICAgICAgICAgICAgICAgICAgICBpZDogaW5mby5ibGFjayxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZVtpbmZvLmJsYWNrXVxuICAgICAgICAgICAgICAgICAgICAgID8gcHJvZmlsZVtpbmZvLmJsYWNrXS5kaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgIDogJ1vpu5Hmo4tdJyxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBwcm9maWxlW2luZm8uYmxhY2tdXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8uYmxhY2tdLnBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwOi8vd3gucWxvZ28uY24vbW1vcGVuL2pqNGU2NXgwUHgyaWJ4SThjQnNMZHh1ZU9pYkNMcnFIdmc5VTkxRHZrMG9oalFIZ08yZGlhczNMaWFIYXpzem1oMENKWDR4aGtubmZ3aWJxd0R3V2ZDQmFWUHNsZ0ljeUJHODFBLzY0JyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB3aGl0ZToge1xuICAgICAgICAgICAgICAgICAgICBpZDogaW5mby53aGl0ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZVtpbmZvLndoaXRlXVxuICAgICAgICAgICAgICAgICAgICAgID8gcHJvZmlsZVtpbmZvLndoaXRlXS5kaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgIDogJ1vnmb3mo4tdJyxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBwcm9maWxlW2luZm8ud2hpdGVdXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8ud2hpdGVdLnBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwOi8vd3gucWxvZ28uY24vbW1vcGVuL2pqNGU2NXgwUHgyaWJ4SThjQnNMZHh1ZU9pYkNMcnFIdmc5VTkxRHZrMG9oalFIZ08yZGlhczNMaWFIYXpzem1oMENKWDR4aGtubmZ3aWJxd0R3V2ZDQmFWUHNsZ0ljeUJHODFBLzY0JyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBnb2FsOiBpbmZvLmdvYWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Nvbm5lY3Rpb24uanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBEYXRhVHlwZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3NlcXVlbGl6ZSc7XG5cbmNvbnN0IFVzZXIgPSBNb2RlbC5kZWZpbmUoXG4gICdVc2VyJyxcbiAge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZS5VVUlELFxuICAgICAgZGVmYXVsdFZhbHVlOiBEYXRhVHlwZS5VVUlEVjEsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgIH0sXG5cbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HKDI1NSksXG4gICAgICB2YWxpZGF0ZTogeyBpc0VtYWlsOiB0cnVlIH0sXG4gICAgfSxcblxuICAgIGVtYWlsQ29uZmlybWVkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZS5CT09MRUFOLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaW5kZXhlczogW3sgZmllbGRzOiBbJ2VtYWlsJ10gfV0sXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL21vZGVscy9Vc2VyLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgRGF0YVR5cGUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9zZXF1ZWxpemUnO1xuXG5jb25zdCBVc2VyTG9naW4gPSBNb2RlbC5kZWZpbmUoJ1VzZXJMb2dpbicsIHtcbiAgbmFtZToge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORyg1MCksXG4gICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgfSxcblxuICBrZXk6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcoMTAwKSxcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tb2RlbHMvVXNlckxvZ2luLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgRGF0YVR5cGUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9zZXF1ZWxpemUnO1xuXG5jb25zdCBVc2VyQ2xhaW0gPSBNb2RlbC5kZWZpbmUoJ1VzZXJDbGFpbScsIHtcbiAgdHlwZToge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORyxcbiAgfSxcblxuICB2YWx1ZToge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2xhaW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvbW9kZWxzL1VzZXJDbGFpbS5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IERhdGFUeXBlIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vc2VxdWVsaXplJztcblxuY29uc3QgVXNlclByb2ZpbGUgPSBNb2RlbC5kZWZpbmUoJ1VzZXJQcm9maWxlJywge1xuICB1c2VySWQ6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5VVUlELFxuICAgIHByaW1hcnlLZXk6IHRydWUsXG4gIH0sXG5cbiAgZGlzcGxheU5hbWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcoMTAwKSxcbiAgfSxcblxuICBwaWN0dXJlOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HKDI1NSksXG4gIH0sXG5cbiAgZ2VuZGVyOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HKDUwKSxcbiAgfSxcblxuICBsb2NhdGlvbjoge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORygxMDApLFxuICB9LFxuXG4gIHdlYnNpdGU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcoMjU1KSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tb2RlbHMvVXNlclByb2ZpbGUuanMiLCJpbXBvcnQgRGF0YVR5cGUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9zZXF1ZWxpemUnO1xuXG5jb25zdCBHb0luZm8gPSBNb2RlbC5kZWZpbmUoJ0dvSW5mbycsIHtcbiAgaWQ6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5DSEFSKDEyOCksXG4gICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgfSxcbiAgcnVsZToge1xuICAgIHR5cGU6IERhdGFUeXBlLkNIQVIsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgYm9hcmRzaXplOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBoYW5kaWNhcDoge1xuICAgIHR5cGU6IERhdGFUeXBlLklOVEVHRVIsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9LFxuICBrb21pOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HLFxuICAgIGRlZmF1bHRWYWx1OiAnNi41JyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBibGFjazoge1xuICAgIHR5cGU6IERhdGFUeXBlLlVVSUQsXG4gIH0sXG4gIHdoaXRlOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuVVVJRCxcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HLFxuICB9LFxuICBnb2FsOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBHb0luZm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvbW9kZWxzL0dvSW5mby5qcyIsImltcG9ydCBEYXRhVHlwZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3NlcXVlbGl6ZSc7XG5cbmNvbnN0IEdvTW92ZSA9IE1vZGVsLmRlZmluZSgnR29Nb3ZlJywge1xuICBpZDoge1xuICAgIHR5cGU6IERhdGFUeXBlLkNIQVIoMTI4KSxcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICB9LFxuICBtb3ZlOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBkZWZhdWx0VmFsdWU6ICdbXScsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXREYXRhVmFsdWUoJ21vdmUnKSk7XG4gICAgfSxcbiAgICBzZXQodmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXREYXRhVmFsdWUoJ21vdmUnLCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdvTW92ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tb2RlbHMvR29Nb3ZlLmpzIiwiaW1wb3J0IERhdGFUeXBlIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vc2VxdWVsaXplJztcblxuY29uc3QgTWF0Y2hJbmZvID0gTW9kZWwuZGVmaW5lKCdNYXRjaEluZm8nLCB7XG4gIGlkOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuVVVJRCxcbiAgICBkZWZhdWx0VmFsdWU6IERhdGFUeXBlLlVVSURWMSxcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICB9LFxuICBydWxlOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuQ0hBUixcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBib2FyZHNpemU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGhhbmRpY2FwOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0sXG4gIGtvbWk6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcsXG4gICAgZGVmYXVsdFZhbHU6ICc2LjUnLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGV4cGlyZWRJbjoge1xuICAgIHR5cGU6IERhdGFUeXBlLklOVEVHRVIsXG4gICAgZGVmYXVsdFZhbHVlOiAxMCAqIDYwLFxuICB9LFxuICBnb2FsOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYXRjaEluZm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvbW9kZWxzL01hdGNoSW5mby5qcyIsImltcG9ydCBEYXRhVHlwZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3NlcXVlbGl6ZSc7XG5cbmNvbnN0IE1hdGNoR2FtZSA9IE1vZGVsLmRlZmluZSgnTWF0Y2hHYW1lJywge1xuICBpZDoge1xuICAgIHR5cGU6IERhdGFUeXBlLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBEYXRhVHlwZS5VVUlEVjEsXG4gICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgfSxcbiAgbWF0Y2g6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5VVUlELFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIHBsYXllcjoge1xuICAgIHR5cGU6IERhdGFUeXBlLlVVSUQsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgZ2FtZToge1xuICAgIHR5cGU6IERhdGFUeXBlLkNIQVIoMTI4KSxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGNoR2FtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tb2RlbHMvTWF0Y2hHYW1lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWRpc1wiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qKlxuICogUGFzc3BvcnQuanMgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uLlxuICogVGhlIGRhdGFiYXNlIHNjaGVtYSB1c2VkIGluIHRoaXMgc2FtcGxlIGlzIGF2YWlsYWJsZSBhdFxuICogaHR0cHM6Ly9naXRodWIuY29tL21lbWJlcnNoaXAvbWVtYmVyc2hpcC5kYi90cmVlL21hc3Rlci9wb3N0Z3Jlc1xuICovXG5cbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgeyBTdHJhdGVneSBhcyBXZWNoYXRTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LXdlY2hhdCc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyTG9naW4sIFVzZXJDbGFpbSwgVXNlclByb2ZpbGUgfSBmcm9tICcuL2RhdGEvbW9kZWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XG4gIGRvbmUobnVsbCwgdXNlcik7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XG4gIGRvbmUobnVsbCwgdXNlcik7XG59KTtcblxucGFzc3BvcnQudXNlKFxuICBuZXcgV2VjaGF0U3RyYXRlZ3koXG4gICAge1xuICAgICAgYXBwSUQ6IGNvbmZpZy53ZWNoYXQuYXBwSWQsXG4gICAgICBhcHBTZWNyZXQ6IGNvbmZpZy53ZWNoYXQuYXBwU2VjcmV0LFxuICAgICAgY2FsbGJhY2tVUkw6ICdodHRwOi8vc2hvdXRhbndxLmNvbS9sb2dpbi93ZWNoYXQvcmV0dXJuJyxcbiAgICAgIGNsaWVudDogJ3dlY2hhdCcsXG4gICAgICBzY29wZTogJ3Nuc2FwaV91c2VyaW5mbycsXG4gICAgICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSxcbiAgICB9LFxuICAgIChyZXEsIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGV4cGlyZWRJbiwgZG9uZSkgPT4ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgICAgIGNvbnN0IGxvZ2luTmFtZSA9ICd3ZWNoYXQnO1xuICAgICAgY29uc3QgY2xhaW1UeXBlID0gJ3Vybjp3ZWNoYXQ6YWNjZXNzX3Rva2VuJztcbiAgICAgIGNvbnN0IGlkID0gcHJvZmlsZS51bmlvbmlkIHx8IHByb2ZpbGUub3BlbmlkO1xuICAgICAgY29uc3QgZm9vQmFyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAocmVxLnVzZXIpIHtcbiAgICAgICAgICBjb25zdCB1c2VyTG9naW4gPSBhd2FpdCBVc2VyTG9naW4uZmluZE9uZSh7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ25hbWUnLCAna2V5J10sXG4gICAgICAgICAgICB3aGVyZTogeyBuYW1lOiBsb2dpbk5hbWUsIGtleTogaWQgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodXNlckxvZ2luKSB7XG4gICAgICAgICAgICAvLyBUaGVyZSBpcyBhbHJlYWR5IGEgRmFjZWJvb2sgYWNjb3VudCB0aGF0IGJlbG9uZ3MgdG8geW91LlxuICAgICAgICAgICAgLy8gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LlxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogcmVxLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgZW1haWw6IGAke2lkfUB3ZWNoYXQuYWNjb3VudC5zaG91dGFud3EuY29tLmAsXG4gICAgICAgICAgICAgICAgbG9naW5zOiBbeyBuYW1lOiBsb2dpbk5hbWUsIGtleTogaWQgfV0sXG4gICAgICAgICAgICAgICAgY2xhaW1zOiBbeyB0eXBlOiBjbGFpbVR5cGUsIHZhbHVlOiBhY2Nlc3NUb2tlbiB9XSxcbiAgICAgICAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZS5uaWNrbmFtZSxcbiAgICAgICAgICAgICAgICAgIGdlbmRlcjogcHJvZmlsZS5zZXgsXG4gICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwcm9maWxlLmhlYWRpbWd1cmwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgICAgICAgIHsgbW9kZWw6IFVzZXJMb2dpbiwgYXM6ICdsb2dpbnMnIH0sXG4gICAgICAgICAgICAgICAgICB7IG1vZGVsOiBVc2VyQ2xhaW0sIGFzOiAnY2xhaW1zJyB9LFxuICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlclByb2ZpbGUsIGFzOiAncHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvbmUobnVsbCwge1xuICAgICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmRBbGwoe1xuICAgICAgICAgICAgYXR0cmlidXRlczogWydpZCcsICdlbWFpbCddLFxuICAgICAgICAgICAgd2hlcmU6IHsgJyRsb2dpbnMubmFtZSQnOiBsb2dpbk5hbWUsICckbG9naW5zLmtleSQnOiBpZCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogWyduYW1lJywgJ2tleSddLFxuICAgICAgICAgICAgICAgIG1vZGVsOiBVc2VyTG9naW4sXG4gICAgICAgICAgICAgICAgYXM6ICdsb2dpbnMnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdXNlcnNbMF0uZ2V0KHsgcGxhaW46IHRydWUgfSk7XG4gICAgICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBgJHtpZH1Ad2VjaGF0LmFjY291bnQuc2hvdXRhbndxLmNvbWAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IHVzaW5nIHRoaXMgZW1haWwgYWRkcmVzcy4gU2lnbiBpbiB0b1xuICAgICAgICAgICAgICAvLyB0aGF0IGFjY291bnQgYW5kIGxpbmsgaXQgd2l0aCBGYWNlYm9vayBtYW51YWxseSBmcm9tIEFjY291bnQgU2V0dGluZ3MuXG4gICAgICAgICAgICAgIGRvbmUobnVsbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW1haWw6IGAke2lkfUB3ZWNoYXQuYWNjb3VudC5zaG91dGFud3EuY29tYCxcbiAgICAgICAgICAgICAgICAgIGVtYWlsQ29uZmlybWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbG9naW5zOiBbeyBuYW1lOiBsb2dpbk5hbWUsIGtleTogaWQgfV0sXG4gICAgICAgICAgICAgICAgICBjbGFpbXM6IFt7IHR5cGU6IGNsYWltVHlwZSwgdmFsdWU6IGFjY2Vzc1Rva2VuIH1dLFxuICAgICAgICAgICAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZS5uaWNrbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOiBwcm9maWxlLnNleCxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogcHJvZmlsZS5oZWFkaW1ndXJsLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlckxvZ2luLCBhczogJ2xvZ2lucycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlckNsYWltLCBhczogJ2NsYWltcycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlclByb2ZpbGUsIGFzOiAncHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZG9uZShudWxsLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvb0JhcigpLmNhdGNoKGRvbmUpO1xuICAgIH0sXG4gICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwYXNzcG9ydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGFzc3BvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0XCJcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LXdlY2hhdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0LXdlY2hhdFwiXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBVbml2ZXJzYWxSb3V0ZXIgZnJvbSAndW5pdmVyc2FsLXJvdXRlcic7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbml2ZXJzYWxSb3V0ZXIocm91dGVzLCB7XG4gIHJlc29sdmVSb3V0ZShjb250ZXh0LCBwYXJhbXMpIHtcbiAgICBpZiAoY29udGV4dC5yb3V0ZS5wcm90ZWN0ZWQgJiYgIWNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS51c2VyKSB7XG4gICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICdyZXR1cm4gdG8nLFxuICAgICAgICBgLy8ke2NvbnRleHQuaG9zdG5hbWV9JHtjb250ZXh0LnBhdGhuYW1lfT8ke3F1ZXJ5c3RyaW5nLnN0cmluZ2lmeShcbiAgICAgICAgICBjb250ZXh0LnF1ZXJ5LFxuICAgICAgICApfWAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVkaXJlY3Q6ICcvL3Nob3V0YW53cS5jb20vbG9naW4vd2VjaGF0JyxcbiAgICAgICAgZnJvbTogYC8vJHtjb250ZXh0Lmhvc3RuYW1lfSR7Y29udGV4dC5wYXRobmFtZX0/JHtxdWVyeXN0cmluZy5zdHJpbmdpZnkoXG4gICAgICAgICAgY29udGV4dC5xdWVyeSxcbiAgICAgICAgKX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LnJvdXRlXG4gICAgICAgIC5sb2FkKClcbiAgICAgICAgLnRoZW4oYWN0aW9uID0+IGFjdGlvbi5kZWZhdWx0KGNvbnRleHQsIHBhcmFtcykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5yb3V0ZS5hY3Rpb24oY29udGV4dCwgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidW5pdmVyc2FsLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbi8vIFRoZSB0b3AtbGV2ZWwgKHBhcmVudCkgcm91dGVcbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJycsXG5cbiAgLy8gS2VlcCBpbiBtaW5kLCByb3V0ZXMgYXJlIGV2YWx1YXRlZCBpbiBvcmRlclxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdob21lJyAqLyAnLi9ob21lJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbG9naW4nICovICcuL2xvZ2luJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWJvdXQnICovICcuL2Fib3V0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2FkbWluJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWRtaW4nICovICcuL2FkbWluJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2dvJyxcbiAgICAgIHByb3RlY3RlZDogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnL2NyZWF0aW9uJyxcbiAgICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdnby1jcmVhdGlvbicgKi8gJy4vZ28tY3JlYXRpb24nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnZ28nICovICcuL2dvJyksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9tYXRjaCcsXG4gICAgICBwcm90ZWN0ZWQ6IHRydWUsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9jcmVhdGlvbicsXG4gICAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnZ28tY3JlYXRpb24tbWF0Y2gnICovICcuL2dvLWNyZWF0aW9uLW1hdGNoJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21hdGNoJyAqLyAnLi9tYXRjaCcpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIC8vIFdpbGRjYXJkIHJvdXRlcywgZS5nLiB7IHBhdGg6ICcoLiopJywgLi4uIH0gKG11c3QgZ28gbGFzdClcbiAgICB7XG4gICAgICBwYXRoOiAnKC4qKScsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ25vdC1mb3VuZCcgKi8gJy4vbm90LWZvdW5kJyksXG4gICAgfSxcbiAgXSxcblxuICBhc3luYyBhY3Rpb24oeyBuZXh0IH0pIHtcbiAgICAvLyBFeGVjdXRlIGVhY2ggY2hpbGQgcm91dGUgdW50aWwgb25lIG9mIHRoZW0gcmV0dXJuIHRoZSByZXN1bHRcbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IG5leHQoKTtcblxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRpdGxlLCBkZXNjcmlwdGlvbiBldGMuXG4gICAgcm91dGUudGl0bGUgPSBgJHtyb3V0ZS50aXRsZSB8fCAnVW50aXRsZWQgUGFnZSd9IC0g5omL6LCI5Zu05qOLYDtcbiAgICByb3V0ZS5kZXNjcmlwdGlvbiA9IHJvdXRlLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgcmV0dXJuIHJvdXRlO1xuICB9LFxufTtcblxuLy8gVGhlIGVycm9yIHBhZ2UgaXMgYXZhaWxhYmxlIGJ5IHBlcm1hbmVudCB1cmwgZm9yIGRldmVsb3BtZW50IG1vZGVcbmlmIChfX0RFVl9fKSB7XG4gIHJvdXRlcy5jaGlsZHJlbi51bnNoaWZ0KHtcbiAgICBwYXRoOiAnL2Vycm9yJyxcbiAgICBhY3Rpb246IHJlcXVpcmUoJy4vZXJyb3InKS5kZWZhdWx0LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvaW5kZXguanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vRXJyb3JQYWdlJztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnRGVtbyBFcnJvcicsXG4gICAgY29tcG9uZW50OiA8RXJyb3JQYWdlIC8+LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9lcnJvci9pbmRleC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTFNjaGVtYSBhcyBTY2hlbWEsXG4gIEdyYXBoUUxPYmplY3RUeXBlIGFzIE9iamVjdFR5cGUsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgbWUgZnJvbSAnLi9xdWVyaWVzL21lJztcbmltcG9ydCBuZXdzIGZyb20gJy4vcXVlcmllcy9uZXdzJztcbmltcG9ydCBnbyBmcm9tICcuL3F1ZXJpZXMvZ28nO1xuaW1wb3J0IHdlY2hhdCBmcm9tICcuL3F1ZXJpZXMvd2VjaGF0JztcbmltcG9ydCBtYXRjaCBmcm9tICcuL3F1ZXJpZXMvbWF0Y2gnO1xuXG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vbXV0YXRpb25zL2NyZWF0ZSc7XG5pbXBvcnQgY3JlYXRlTWF0Y2ggZnJvbSAnLi9tdXRhdGlvbnMvY3JlYXRlTWF0Y2gnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL211dGF0aW9ucy91cGRhdGUnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgcXVlcnk6IG5ldyBPYmplY3RUeXBlKHtcbiAgICBuYW1lOiAnUXVlcnknLFxuICAgIGZpZWxkczoge1xuICAgICAgbWUsXG4gICAgICBnbyxcbiAgICAgIG5ld3MsXG4gICAgICB3ZWNoYXQsXG4gICAgICBtYXRjaCxcbiAgICB9LFxuICB9KSxcbiAgbXV0YXRpb246IG5ldyBPYmplY3RUeXBlKHtcbiAgICBuYW1lOiAnTXV0YXRpb24nLFxuICAgIGZpZWxkczoge1xuICAgICAgY3JlYXRlR286IGNyZWF0ZSxcbiAgICAgIGNyZWF0ZUdvTWF0Y2g6IGNyZWF0ZU1hdGNoLFxuICAgICAgdXBkYXRlR286IHVwZGF0ZSxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvc2NoZW1hLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgVXNlclR5cGUgZnJvbSAnLi4vdHlwZXMvVXNlclR5cGUnO1xuXG5jb25zdCBtZSA9IHtcbiAgdHlwZTogVXNlclR5cGUsXG4gIHJlc29sdmUoeyByZXF1ZXN0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmVxdWVzdC51c2VyICYmIHtcbiAgICAgICAgaWQ6IHJlcXVlc3QudXNlci5pZCxcbiAgICAgICAgZW1haWw6IHJlcXVlc3QudXNlci5lbWFpbCxcbiAgICAgIH1cbiAgICApO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvcXVlcmllcy9tZS5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTE9iamVjdFR5cGUgYXMgT2JqZWN0VHlwZSxcbiAgR3JhcGhRTElEIGFzIElELFxuICBHcmFwaFFMU3RyaW5nIGFzIFN0cmluZ1R5cGUsXG4gIEdyYXBoUUxOb25OdWxsIGFzIE5vbk51bGwsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBVc2VyVHlwZSA9IG5ldyBPYmplY3RUeXBlKHtcbiAgbmFtZTogJ1VzZXInLFxuICBmaWVsZHM6IHtcbiAgICBpZDogeyB0eXBlOiBuZXcgTm9uTnVsbChJRCkgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmdUeXBlIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvdHlwZXMvVXNlclR5cGUuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IEdyYXBoUUxMaXN0IGFzIExpc3QgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBOZXdzSXRlbVR5cGUgZnJvbSAnLi4vdHlwZXMvTmV3c0l0ZW1UeXBlJztcblxuLy8gUmVhY3QuanMgTmV3cyBGZWVkIChSU1MpXG5jb25zdCB1cmwgPVxuICAnaHR0cHM6Ly9hcGkucnNzMmpzb24uY29tL3YxL2FwaS5qc29uJyArXG4gICc/cnNzX3VybD1odHRwcyUzQSUyRiUyRnJlYWN0anNuZXdzLmNvbSUyRmZlZWQueG1sJztcblxubGV0IGl0ZW1zID0gW107XG5sZXQgbGFzdEZldGNoVGFzaztcbmxldCBsYXN0RmV0Y2hUaW1lID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XG5cbmNvbnN0IG5ld3MgPSB7XG4gIHR5cGU6IG5ldyBMaXN0KE5ld3NJdGVtVHlwZSksXG4gIHJlc29sdmUoKSB7XG4gICAgaWYgKGxhc3RGZXRjaFRhc2spIHtcbiAgICAgIHJldHVybiBsYXN0RmV0Y2hUYXNrO1xuICAgIH1cblxuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEZldGNoVGltZSA+IDEwMDAgKiA2MCAqIDEwIC8qIDEwIG1pbnMgKi8pIHtcbiAgICAgIGxhc3RGZXRjaFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGFzdEZldGNoVGFzayA9IGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdvaycpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gZGF0YS5pdGVtcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsYXN0RmV0Y2hUYXNrID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGxhc3RGZXRjaFRhc2sgPSBudWxsO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGFzdEZldGNoVGFzaztcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL3F1ZXJpZXMvbmV3cy5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTE9iamVjdFR5cGUgYXMgT2JqZWN0VHlwZSxcbiAgR3JhcGhRTFN0cmluZyBhcyBTdHJpbmdUeXBlLFxuICBHcmFwaFFMTm9uTnVsbCBhcyBOb25OdWxsLFxufSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgTmV3c0l0ZW1UeXBlID0gbmV3IE9iamVjdFR5cGUoe1xuICBuYW1lOiAnTmV3c0l0ZW0nLFxuICBmaWVsZHM6IHtcbiAgICB0aXRsZTogeyB0eXBlOiBuZXcgTm9uTnVsbChTdHJpbmdUeXBlKSB9LFxuICAgIGxpbms6IHsgdHlwZTogbmV3IE5vbk51bGwoU3RyaW5nVHlwZSkgfSxcbiAgICBhdXRob3I6IHsgdHlwZTogU3RyaW5nVHlwZSB9LFxuICAgIHB1YkRhdGU6IHsgdHlwZTogbmV3IE5vbk51bGwoU3RyaW5nVHlwZSkgfSxcbiAgICBjb250ZW50OiB7IHR5cGU6IFN0cmluZ1R5cGUgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzSXRlbVR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvdHlwZXMvTmV3c0l0ZW1UeXBlLmpzIiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAxNy8wMS8yMDE4XG4gKi9cblxuaW1wb3J0IHsgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxTdHJpbmcgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBHb1R5cGUgZnJvbSAnLi4vdHlwZXMvR29UeXBlJztcbmltcG9ydCB7IEdvSW5mbyB9IGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IEdvID0ge1xuICB0eXBlOiBHb1R5cGUsXG4gIGFyZ3M6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmUocm9vdCwgeyBpZCB9KSB7XG4gICAgcmV0dXJuIEdvSW5mby5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4ociA9PiByLmdldCh7IHBsYWluOiB0cnVlIH0pKVxuICAgICAgLnRoZW4oZ28gPT4gKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGVuZ2luZTogZ28ucnVsZSxcbiAgICAgICAgaW5mbzogT2JqZWN0LmtleXMoZ28pXG4gICAgICAgICAgLmZpbHRlcihrZXkgPT5cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgJ2JvYXJkc2l6ZScsXG4gICAgICAgICAgICAgICdoYW5kaWNhcCcsXG4gICAgICAgICAgICAgICdrb21pJyxcbiAgICAgICAgICAgICAgJ2JsYWNrJyxcbiAgICAgICAgICAgICAgJ3doaXRlJyxcbiAgICAgICAgICAgICAgJ2dvYWwnLFxuICAgICAgICAgICAgICAncmVzdWx0JyxcbiAgICAgICAgICAgIF0uaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgICAgIG9ialtrZXldID0gZ29ba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgfSwge30pLFxuICAgICAgfSkpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvcXVlcmllcy9nby5qcyIsImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxdWVyeXN0cmluZyc7XG5pbXBvcnQgeyBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IFdlY2hhdFR5cGUgZnJvbSAnLi4vdHlwZXMvV2VjaGF0VHlwZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyByZWRpcyB9IGZyb20gJy4uLy4uL3JlZGlzJztcblxuY29uc3Qgc2lnbiA9IGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAgY29uc3QgYWxnbyA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGExJyk7XG4gIGNvbnN0IG9yZGVyZWQgPSB7fTtcbiAgT2JqZWN0LmtleXMocGF5bG9hZClcbiAgICAuc29ydCgpXG4gICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChwYXlsb2FkW2tleV0gJiYga2V5ICE9PSAnc2lnbmF0dXJlJykge1xuICAgICAgICBvcmRlcmVkW2tleV0gPSBwYXlsb2FkW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIGNvbnN0IHN0cmluZ0EgPSBxdWVyeXN0cmluZy51bmVzY2FwZShxdWVyeXN0cmluZy5zdHJpbmdpZnkob3JkZXJlZCkpO1xuICBhbGdvLnVwZGF0ZShzdHJpbmdBKTtcbiAgcmV0dXJuIGFsZ28uZGlnZXN0KCdoZXgnKTtcbn07XG5cbmNvbnN0IHdlY2hhdCA9IHtcbiAgdHlwZTogV2VjaGF0VHlwZSxcbiAgYXJnczoge1xuICAgIHVybDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAgfSxcbiAgcmVzb2x2ZShyb290LCB7IHVybCB9KSB7XG4gICAgcmV0dXJuIHJlZGlzXG4gICAgICAuZ2V0QXN5bmMoJ2pzYXBpX3RpY2tldCcpXG4gICAgICAudGhlbih0aWNrZXQgPT4ge1xuICAgICAgICBpZiAoIXRpY2tldCkge1xuICAgICAgICAgIHJldHVybiByZWRpc1xuICAgICAgICAgICAgLmdldEFzeW5jKCd3ZWNoYXRfYWNjZXNzVG9rZW4nKVxuICAgICAgICAgICAgLnRoZW4oYWNjZXNzVG9rZW4gPT4ge1xuICAgICAgICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vY2dpLWJpbi90b2tlbj9ncmFudF90eXBlPWNsaWVudF9jcmVkZW50aWFsJmFwcGlkPSR7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy53ZWNoYXQuYXBwSWRcbiAgICAgICAgICAgICAgICAgIH0mc2VjcmV0PSR7Y29uZmlnLndlY2hhdC5hcHBTZWNyZXR9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoJ2VycmNvZGUnIGluIGpzb24pIHx8IGpzb24uZXJyY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWRpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNldGV4QXN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd3ZWNoYXRfYWNjZXNzVG9rZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLmV4cGlyZXNfaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ganNvbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGpzb247XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYWNjZXNzVG9rZW4gPT5cbiAgICAgICAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vY2dpLWJpbi90aWNrZXQvZ2V0dGlja2V0P2FjY2Vzc190b2tlbj0ke2FjY2Vzc1Rva2VufSZ0eXBlPWpzYXBpYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICgnZXJyY29kZScgaW4ganNvbiAmJiBqc29uLmVycmNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZGlzXG4gICAgICAgICAgICAgICAgICAgICAgLnNldGV4QXN5bmMoJ2pzYXBpX3RpY2tldCcsIGpzb24uZXhwaXJlc19pbiwganNvbi50aWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ganNvbi50aWNrZXQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhyb3cganNvbjtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpY2tldDtcbiAgICAgIH0pXG4gICAgICAudGhlbih0aWNrZXQgPT4ge1xuICAgICAgICBjb25zdCBub25jZXN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBzaWduKHtcbiAgICAgICAgICBqc2FwaV90aWNrZXQ6IHRpY2tldCxcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgbm9uY2VzdHIsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhcHBJZDogY29uZmlnLndlY2hhdC5hcHBJZCxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgbm9uY2VTdHI6IG5vbmNlc3RyLFxuICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGNvbnN0IG5vbmNlc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYXBwSWQ6IGNvbmZpZy53ZWNoYXQuYXBwSWQsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgIG5vbmNlU3RyOiBub25jZXN0cixcbiAgICAgICAgICBzaWduYXR1cmU6IGUuZXJybXNnIHx8IGUuZXJyY29kZSB8fCAnZXJyb3InLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWNoYXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvcXVlcmllcy93ZWNoYXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjcnlwdG9cIlxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgV2VjaGF0VHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdXZWNoYXQnLFxuICBmaWVsZHM6IHtcbiAgICBhcHBJZDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICB9LFxuICAgIHRpbWVzdGFtcDoge1xuICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICB9LFxuICAgIG5vbmNlU3RyOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgIH0sXG4gICAgc2lnbmF0dXJlOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgV2VjaGF0VHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS90eXBlcy9XZWNoYXRUeXBlLmpzIiwiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAxNy8wMS8yMDE4XG4gKi9cblxuaW1wb3J0IHsgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxTdHJpbmcgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBHb01hdGNoIGZyb20gJy4uL3R5cGVzL0dvTWF0Y2gnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICcuLi9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgTWF0Y2hJbmZvLCBNYXRjaEdhbWUsIEdvSW5mbywgR29Nb3ZlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuY29uc3QgR28gPSB7XG4gIHR5cGU6IEdvTWF0Y2gsXG4gIGFyZ3M6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmUoeyByZXF1ZXN0IH0sIHsgaWQgfSkge1xuICAgIGlmIChyZXF1ZXN0LnVzZXIpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHJlcXVlc3QudXNlci5pZDtcbiAgICAgIC8vIGZpbmQgdGhlIG9uZSBhbHJlYWR5IGpvaW5cbiAgICAgIHJldHVybiBNYXRjaEdhbWUuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgbWF0Y2g6IGlkLFxuICAgICAgICAgIHBsYXllcixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiAocmVzID8gcmVzLmdldCh7IHBsYWluOiB0cnVlIH0pIDogbnVsbCkpXG4gICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogci5nYW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZmluZCB0aGUgb25lIG5vdCBmdWxsXG4gICAgICAgICAgcmV0dXJuIE1hdGNoR2FtZS5maW5kT25lKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIG1hdGNoOiBpZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDogWydnYW1lJ10sXG4gICAgICAgICAgICBoYXZpbmc6IHNlcXVlbGl6ZS5saXRlcmFsKCdjb3VudChwbGF5ZXIpIDwgMicpLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gKHJlcyA/IHJlcy5nZXQoeyBwbGFpbjogdHJ1ZSB9KSA6IG51bGwpKVxuICAgICAgICAgICAgLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICBpZiAocjEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0Y2hHYW1lLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICBtYXRjaDogcjEubWF0Y2gsXG4gICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICBnYW1lOiByMS5nYW1lLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGlkOiByMS5nYW1lLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgZ2FtZVxuICAgICAgICAgICAgICByZXR1cm4gTWF0Y2hJbmZvLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiAocmVzID8gcmVzLmdldCh7IHBsYWluOiB0cnVlIH0pIDogbnVsbCkpXG4gICAgICAgICAgICAgICAgLnRoZW4obWF0Y2ggPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhbWF0Y2ggfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUobWF0Y2guY3JlYXRlZEF0KS5nZXRUaW1lKCkgK1xuICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLmV4cGlyZWRJbiAqIDEwMDAgPFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBnbyBnYW1lXG4gICAgICAgICAgICAgICAgICBjb25zdCBnb0lkID0gTWF0aC5yYW5kb20oKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEdvSW5mby5jcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGdvSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlOiBtYXRjaC5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRzaXplOiBtYXRjaC5ib2FyZHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kaWNhcDogbWF0Y2guaGFuZGljYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBrb21pOiBtYXRjaC5rb21pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2s6IHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLmdvYWwgPyB7IGdvYWw6IG1hdGNoLmdvYWwgfSA6IHt9LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIEdvTW92ZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGdvSWQsXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIE1hdGNoR2FtZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZTogZ29JZCxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogZ29JZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IG51bGwsXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL3F1ZXJpZXMvbWF0Y2guanMiLCJpbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBHb01hdGNoID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0dvTWF0Y2gnLFxuICBmaWVsZHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgR29NYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS90eXBlcy9Hb01hdGNoLmpzIiwiaW1wb3J0IHtcbiAgR3JhcGhRTFN0cmluZyxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxGbG9hdCxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgR29UeXBlIGZyb20gJy4uL3R5cGVzL0dvVHlwZSc7XG5pbXBvcnQgeyBHb0luZm8sIEdvTW92ZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IGNyZWF0ZUdvID0ge1xuICB0eXBlOiBHb1R5cGUsXG4gIGFyZ3M6IHtcbiAgICBydWxlOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxuICAgIGJvYXJkc2l6ZToge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxJbnQpLFxuICAgIH0sXG4gICAgaGFuZGljYXA6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSxcbiAgICB9LFxuICAgIGtvbWk6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMRmxvYXQpLFxuICAgIH0sXG4gICAgY29sb3I6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGdvYWw6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZTogKHJvb3QsIHsgcnVsZSwgYm9hcmRzaXplLCBoYW5kaWNhcCwga29taSwgY29sb3IsIGdvYWwgfSkgPT4ge1xuICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnNwbGl0KCcuJylbMV07XG4gICAgcmV0dXJuIEdvSW5mby5jcmVhdGUoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgcnVsZSxcbiAgICAgICAgICBib2FyZHNpemUsXG4gICAgICAgICAgaGFuZGljYXAsXG4gICAgICAgICAga29taSxcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3IgPT09ICdibGFjaydcbiAgICAgICAgICA/IHsgYmxhY2s6IHJvb3QucmVxdWVzdC51c2VyLmlkIH1cbiAgICAgICAgICA6IHsgd2hpdGU6IHJvb3QucmVxdWVzdC51c2VyLmlkIH0sXG4gICAgICAgIGdvYWwgPyB7IGdvYWwgfSA6IHt9LFxuICAgICAgKSxcbiAgICApXG4gICAgICAudGhlbigoKSA9PlxuICAgICAgICBHb01vdmUuY3JlYXRlKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICAudGhlbigoKSA9PiAoe1xuICAgICAgICBpZCxcbiAgICAgICAgZW5naW5lOiBydWxlLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYm9hcmRzaXplLFxuICAgICAgICAgIGJsYWNrOiBjb2xvciA9PT0gJ2JsYWNrJyA/IHJvb3QucmVxdWVzdC51c2VyLmlkIDogbnVsbCxcbiAgICAgICAgICB3aGl0ZTogY29sb3IgPT09ICd3aGl0ZScgPyByb290LnJlcXVlc3QudXNlci5pZCA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tdXRhdGlvbnMvY3JlYXRlLmpzIiwiaW1wb3J0IHtcbiAgR3JhcGhRTFN0cmluZyxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxGbG9hdCxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgTWF0Y2hUeXBlIGZyb20gJy4uL3R5cGVzL01hdGNoVHlwZSc7XG5pbXBvcnQgeyBNYXRjaEluZm8gfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5jb25zdCBjcmVhdGVNYXRjaCA9IHtcbiAgdHlwZTogTWF0Y2hUeXBlLFxuICBhcmdzOiB7XG4gICAgcnVsZTogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAgICBib2FyZHNpemU6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSxcbiAgICB9LFxuICAgIGhhbmRpY2FwOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEludCksXG4gICAgfSxcbiAgICBrb21pOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEZsb2F0KSxcbiAgICB9LFxuICAgIGV4cGlyZWRJbjoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxJbnQpLFxuICAgIH0sXG4gICAgZ29hbDoge1xuICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiAocm9vdCwgeyBydWxlLCBib2FyZHNpemUsIGhhbmRpY2FwLCBrb21pLCBleHBpcmVkSW4sIGdvYWwgfSkgPT4ge1xuICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnNwbGl0KCcuJylbMV07XG4gICAgcmV0dXJuIE1hdGNoSW5mby5jcmVhdGUoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgcnVsZSxcbiAgICAgICAgICBib2FyZHNpemUsXG4gICAgICAgICAgaGFuZGljYXAsXG4gICAgICAgICAga29taSxcbiAgICAgICAgICBleHBpcmVkSW4sXG4gICAgICAgIH0sXG4gICAgICAgIGdvYWwgPyB7IGdvYWwgfSA6IHt9LFxuICAgICAgKSxcbiAgICApLnRoZW4oKCkgPT4gKHtcbiAgICAgIGlkLFxuICAgICAgZW5naW5lOiBydWxlLFxuICAgICAgaW5mbzoge1xuICAgICAgICBib2FyZHNpemUsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1hdGNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL211dGF0aW9ucy9jcmVhdGVNYXRjaC5qcyIsImltcG9ydCB7XG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxOb25OdWxsLFxuICBHcmFwaFFMT2JqZWN0VHlwZSxcbiAgR3JhcGhRTFN0cmluZyxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5cbmNvbnN0IE1hdGNoVHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdNYXRjaCcsXG4gIGZpZWxkczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgfSxcbiAgICBlbmdpbmU6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgIG5hbWU6ICdNYXRjaEluZm8nLFxuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBib2FyZHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdvYWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hUeXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL3R5cGVzL01hdGNoVHlwZS5qcyIsImltcG9ydCB7IEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxOb25OdWxsIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgR29UeXBlIGZyb20gJy4uL3R5cGVzL0dvVHlwZSc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyUHJvZmlsZSwgR29JbmZvLCBHb01vdmUgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgcmVkaXMgfSBmcm9tICcuLi8uLi9yZWRpcyc7XG5cbmNvbnN0IHVwZGF0ZUdvID0ge1xuICB0eXBlOiBHb1R5cGUsXG4gIGFyZ3M6IHtcbiAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAgICBjb2xvcjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gIH0sXG4gIHJlc29sdmU6IChyb290LCB7IGlkLCBjb2xvciB9KSA9PlxuICAgIEdvSW5mby5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oZ29JbmZvID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdvSW5mb1tjb2xvcl0gPT09IG51bGwgJiZcbiAgICAgICAgICByb290LnJlcXVlc3QudXNlciAmJlxuICAgICAgICAgIGdvSW5mby5ibGFjayAhPT0gcm9vdC5yZXF1ZXN0LnVzZXIuaWQgJiZcbiAgICAgICAgICBnb0luZm8ud2hpdGUgIT09IHJvb3QucmVxdWVzdC51c2VyLmlkXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBHb0luZm8udXBkYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbY29sb3JdOiByb290LnJlcXVlc3QudXNlci5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pXG4gICAgICAvLyBwdWJsaXNoIGpvaW5cbiAgICAgIC50aGVuKCgpID0+XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBHb0luZm8uZmluZE9uZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkudGhlbihyID0+IHIuZ2V0KHsgcGxhaW46IHRydWUgfSkpLFxuICAgICAgICAgIEdvTW92ZS5maW5kT25lKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KS50aGVuKGdvTW92ZSA9PiBnb01vdmUubW92ZSksXG4gICAgICAgIF0pLnRoZW4oKFtpbmZvLCBtb3Zlc10pID0+XG4gICAgICAgICAgVXNlci5maW5kQWxsKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB7ICRpbjogW2luZm8uYmxhY2ssIGluZm8ud2hpdGVdIH0gfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnZGlzcGxheU5hbWUnLCAncGljdHVyZSddLFxuICAgICAgICAgICAgICAgIG1vZGVsOiBVc2VyUHJvZmlsZSxcbiAgICAgICAgICAgICAgICBhczogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KS50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSB1c2Vycy5maWx0ZXIoZSA9PiBlKS5tYXAodXNlciA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHUgPSB1c2VyLmdldCh7IHBsYWluOiB0cnVlIH0pO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiB1LmlkLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB1LnByb2ZpbGUuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogdS5wcm9maWxlLnBpY3R1cmUsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBwcm9maWxlID0ge307XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICAgICAgICAgICAgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24ocHJvZmlsZSwge1xuICAgICAgICAgICAgICAgIFtwbGF5ZXIuaWRdOiBwbGF5ZXIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlZGlzXG4gICAgICAgICAgICAgIC5wdWJsaXNoQXN5bmMoXG4gICAgICAgICAgICAgICAgYGNoYW5uZWw6JHtpZH1gLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6ICdvaycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnaW5pdCcsXG4gICAgICAgICAgICAgICAgICBnYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZTogaW5mby5ydWxlLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlczogbW92ZXMubWFwKEpTT04ucGFyc2UpLFxuICAgICAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBpbmZvLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICBib2FyZHNpemU6IGluZm8uYm9hcmRzaXplLFxuICAgICAgICAgICAgICAgICAgICAgIGJsYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaW5mby5ibGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGVbaW5mby5ibGFja11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8uYmxhY2tdLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1vpu5Hmo4tdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogcHJvZmlsZVtpbmZvLmJsYWNrXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2ZpbGVbaW5mby5ibGFja10ucGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwOi8vd3gucWxvZ28uY24vbW1vcGVuL2pqNGU2NXgwUHgyaWJ4SThjQnNMZHh1ZU9pYkNMcnFIdmc5VTkxRHZrMG9oalFIZ08yZGlhczNMaWFIYXpzem1oMENKWDR4aGtubmZ3aWJxd0R3V2ZDQmFWUHNsZ0ljeUJHODFBLzY0JyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaW5mby53aGl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGVbaW5mby53aGl0ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8ud2hpdGVdLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1vnmb3mo4tdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogcHJvZmlsZVtpbmZvLndoaXRlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2ZpbGVbaW5mby53aGl0ZV0ucGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwOi8vd3gucWxvZ28uY24vbW1vcGVuL2pqNGU2NXgwUHgyaWJ4SThjQnNMZHh1ZU9pYkNMcnFIdmc5VTkxRHZrMG9oalFIZ08yZGlhczNMaWFIYXpzem1oMENKWDR4aGtubmZ3aWJxd0R3V2ZDQmFWUHNsZ0ljeUJHODFBLzY0JyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGdvYWw6IGluZm8uZ29hbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoW1xuICAgICAgICAgICAgICAgICAgaW5mby5ydWxlLFxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5mbylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrZXkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnYm9hcmRzaXplJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoYW5kaWNhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAna29taScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdnb2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gaW5mb1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC8vIHJldHVybiBpbmZvXG4gICAgICAudGhlbigoW2VuZ2luZSwgaW5mb10pID0+ICh7XG4gICAgICAgIGlkLFxuICAgICAgICBlbmdpbmUsXG4gICAgICAgIGluZm8sXG4gICAgICB9KSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tdXRhdGlvbnMvdXBkYXRlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hc3NldHMuanNvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vYXNzZXRzLmpzb25cIlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcblxuICBsZXQgZW5oYW5jZXI7XG5cbiAgaWYgKF9fREVWX18pIHtcbiAgICBtaWRkbGV3YXJlLnB1c2goY3JlYXRlTG9nZ2VyKCkpO1xuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3phbG1veGlzdXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uI3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvblxuICAgIGxldCBkZXZUb29sc0V4dGVuc2lvbiA9IGYgPT4gZjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUiAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24pIHtcbiAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCk7XG4gICAgfVxuXG4gICAgZW5oYW5jZXIgPSBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSwgZGV2VG9vbHNFeHRlbnNpb24pO1xuICB9IGVsc2Uge1xuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xuICB9XG5cbiAgY29uc3Qgcm9vdFJlZHVjZXIgPSBjcmVhdGVSb290UmVkdWNlcigpO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvcmVsZWFzZXMvdGFnL3YzLjEuMFxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuICAvLyBIb3QgcmVsb2FkIHJlZHVjZXJzIChyZXF1aXJlcyBXZWJwYWNrIG9yIEJyb3dzZXJpZnkgSE1SIHRvIGJlIGVuYWJsZWQpXG4gIGlmIChfX0RFVl9fICYmIG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihyZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHQpLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gc3RvcmU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBydW50aW1lIGZyb20gJy4vcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJvb3RSZWR1Y2VyKCkge1xuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcbiAgICB1c2VyLFxuICAgIHJ1bnRpbWUsXG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXIoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHVjZXJzL3VzZXIuanMiLCJpbXBvcnQgeyBTRVRfUlVOVElNRV9WQVJJQUJMRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bnRpbWUoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9SVU5USU1FX1ZBUklBQkxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5uYW1lXTogYWN0aW9uLnBheWxvYWQudmFsdWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkdWNlcnMvcnVudGltZS5qcyIsImltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJztcblxuZnVuY3Rpb24gaW5zcGVjdE9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIGluc3BlY3Qob2JqZWN0LCB7XG4gICAgY29sb3JzOiB0cnVlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlTGluZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG59XG5cbmNvbnN0IGFjdGlvbkZvcm1hdHRlcnMgPSB7XG4gIC8vIFRoaXMgaXMgdXNlZCBhdCBmZWF0dXJlL2Fwb2xsbyBicmFuY2gsIGJ1dCBpdCBjYW4gaGVscCB5b3Ugd2hlbiBpbXBsZW1lbnRpbmcgQXBvbGxvXG4gIEFQT0xMT19RVUVSWV9JTklUOiBhID0+XG4gICAgYHF1ZXJ5SWQ6JHthLnF1ZXJ5SWR9IHZhcmlhYmxlczoke2luc3BlY3RPYmplY3QoXG4gICAgICBhLnZhcmlhYmxlcyxcbiAgICApfVxcbiAgICR7c2luZ2xlTGluZShhLnF1ZXJ5U3RyaW5nKX1gLFxuXG4gIEFQT0xMT19RVUVSWV9SRVNVTFQ6IGEgPT5cbiAgICBgcXVlcnlJZDoke2EucXVlcnlJZH1cXG4gICAke3NpbmdsZUxpbmUoaW5zcGVjdE9iamVjdChhLnJlc3VsdCkpfWAsXG5cbiAgQVBPTExPX1FVRVJZX1NUT1A6IGEgPT4gYHF1ZXJ5SWQ6JHthLnF1ZXJ5SWR9YCxcbn07XG5cbi8vIFNlcnZlciBzaWRlIHJlZHV4IGFjdGlvbiBsb2dnZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcigpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgbGV0IGZvcm1hdHRlZFBheWxvYWQgPSAnJztcbiAgICBjb25zdCBhY3Rpb25Gb3JtYXR0ZXIgPSBhY3Rpb25Gb3JtYXR0ZXJzW2FjdGlvbi50eXBlXTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9ybWF0dGVkUGF5bG9hZCA9IGFjdGlvbkZvcm1hdHRlcihhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICBmb3JtYXR0ZWRQYXlsb2FkID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uLnBheWxvYWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3JtYXR0ZWRQYXlsb2FkID0gaW5zcGVjdE9iamVjdChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZFBheWxvYWQgPSBpbnNwZWN0T2JqZWN0KGFjdGlvbik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYCAqICR7YWN0aW9uLnR5cGV9OiAke2Zvcm1hdHRlZFBheWxvYWR9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2xvZ2dlci9sb2dnZXIuc2VydmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyBTRVRfUlVOVElNRV9WQVJJQUJMRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSdW50aW1lVmFyaWFibGUoeyBuYW1lLCB2YWx1ZSB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1JVTlRJTUVfVkFSSUFCTEUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FjdGlvbnMvcnVudGltZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXMvYmluZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXMvYmluZFwiXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN3ZWV0YWxlcnQyXCJcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hdGVyaWFsLXVpL1NlbGVjdEZpZWxkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIlxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS9NZW51SXRlbVwiXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIlxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCJcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdlYnNvY2tldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXdlYnNvY2tldFwiXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmFuZ2VzbGlkZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yYW5nZXNsaWRlclwiXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6RkE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7Ozs7OztBQ2xCQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDNUNBOzs7Ozs7Ozs7QUFTQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBN0JBOzs7Ozs7QUNqQkE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7OztBQ2JBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUZBO0FBREE7QUFQQTtBQUZBO0FBK0JBOzs7Ozs7QUN0Q0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE3QkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7O0FBREE7Ozs7QUFTQTtBQUNBO0FBREE7O0FBdUJBO0FBQ0E7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUFBO0FBRUE7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0hBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFUQTtBQWFBO0FBR0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBcENBO0FBQUE7QUFvREE7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQW5EQTtBQWtEQTtBQUNBO0FBbkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQTdEQTtBQUNBO0FBREE7QUFpRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFvRkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQThHQTtBQUNBO0FBL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQW1IQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pUQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7OztBQzVCQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQVZBO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQXBCQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFEQTs7OztBQU1BOztBQWlCQTs7Ozs7O0FDeEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7OztBQWpHQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFaQTs7QUFEQTs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQW9GQTs7Ozs7O0FDcEhBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7O0FBa0JBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFQQTtBQVdBO0FBQUE7QUFLQTtBQUhBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUFBQTtBQUNBO0FBR0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQVNBO0FBckJBO0FBSEE7QUFIQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwT0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBWkE7QUFrQkE7QUFBQTtBQUFBO0FBREE7QUFLQTs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFZQTs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFMQTtBQVVBOzs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBdEJBO0FBMkJBOzs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQS9CQTtBQW9DQTs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBTEE7QUFpQkE7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQTNCQTtBQWdDQTs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFvQkE7Ozs7OztBQ3ZCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUFTQTs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUhBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQXhCQTtBQVdBO0FBb0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFoQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFzQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBQ0E7QUF0Q0E7QUFxQ0E7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaURBO0FBQUE7QUFBQTtBQUNBO0FBbkRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXNEQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBdERBO0FBcURBO0FBQ0E7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdEQTtBQUNBO0FBQ0E7QUEzREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBMUVBO0FBNkRBO0FBb0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3RkE7QUFDQTtBQUlBOzs7Ozs7QUN6SUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBekJBOzs7Ozs7QUNiQTs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUEsK0ZBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQSwrRkFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUExREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBEQTtBQTFEQTtBQUFBO0FBQ0E7QUFEQTtBQTREQTtBQUVBO0FBQ0E7QUFDQTtBQWhFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUZBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVhBO0FBcUJBOzs7Ozs7O0FDN0NBO0FBQUE7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFUQTtBQVlBOzs7Ozs7O0FDdkJBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBRkE7QUFRQTs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBbUNBOzs7Ozs7O0FDekRBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBRkE7QUFXQTs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQW9CQTtBQWxDQTtBQXFDQTs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQS9FQTtBQWtGQTs7Ozs7O0FDekdBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBVkE7QUFGQTtBQWtCQTs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUdBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQXRHQTtBQXlHQTs7Ozs7OztBQ2xIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQUZBO0FBWUE7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQVpBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBQUE7QUFTQTtBQW5EQTtBQXNEQTs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQWRBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFPQTtBQTNDQTtBQThDQTs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUpBO0FBRkE7QUFEQTtBQVBBO0FBRkE7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBTUE7QUFLQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBeEJBO0FBMEJBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVdBO0FBQUE7QUFDQTtBQUdBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFTQTtBQXJCQTtBQUhBO0FBSEE7QUFnQ0E7QUFJQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBbEJBO0FBcUJBO0FBbkZBO0FBWkE7QUExQkE7QUE2SEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUE5SEE7QUFOQTtBQTJJQTs7Ozs7O0FDaEpBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFQQTtBQVNBOzs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWZBO0FBQUE7QUFnQkE7Ozs7OztBQzVDQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTs7Ozs7O0FDWkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==