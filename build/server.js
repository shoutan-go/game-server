require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
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
/******/ 			var chunk = require("./chunks/" + ({"0":"go","1":"home","2":"go-creation","3":"about","4":"not-found","5":"login","6":"admin"}[chunkId]||chunkId) + ".js");
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
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

/* harmony default export */ __webpack_exports__["e"] = ({
  sync: sync
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(13);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(49);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 15 */
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
          }
        }
      })
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (GoType);

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


var _stringify = __webpack_require__(50);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(51);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(11);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pretty_error__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_createApolloClient__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_App__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_Html__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__routes_error_ErrorPage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__createFetch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__connection__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__passport__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__redis__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__data_models__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_schema__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__assets_json__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__store_configureStore__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__actions_runtime__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__config__);
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

app.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_6_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.urlencoded({
  extended: true
}));
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.json()); //
// Authentication
// -----------------------------------------------------------------------------

app.use(__WEBPACK_IMPORTED_MODULE_8_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_33__config___default.a.auth.jwt.secret,
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
app.use(__WEBPACK_IMPORTED_MODULE_25__passport__["a" /* default */].initialize());

if (true) {
  app.enable('trust proxy');
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}

var RedisStore = __WEBPACK_IMPORTED_MODULE_4_connect_redis___default()(__WEBPACK_IMPORTED_MODULE_3_express_session___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_3_express_session___default()({
  store: new RedisStore({
    client: __WEBPACK_IMPORTED_MODULE_27__redis__["a" /* redis */]
  }),
  secret: __WEBPACK_IMPORTED_MODULE_33__config___default.a.sessionSecret,
  resave: false,
  saveUninitialized: true
}));
app.get('/login/wechat', function (req, res, next) {
  next();
}, __WEBPACK_IMPORTED_MODULE_25__passport__["a" /* default */].authenticate('wechat'));
app.get('/login/wechat/return', __WEBPACK_IMPORTED_MODULE_25__passport__["a" /* default */].authenticate('wechat', {
  session: false,
  failureRedirect: '/login/wechat'
}), function (req, res) {
  var expiresIn = 60 * 60 * 24 * 180; // 180 days

  var token = __WEBPACK_IMPORTED_MODULE_10_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_33__config___default.a.auth.jwt.secret, {
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
    schema: __WEBPACK_IMPORTED_MODULE_29__data_schema__["a" /* default */],
    graphiql: true,
    rootValue: {
      request: req
    },
    pretty: true
  };
});
app.use('/graphql', graphqlMiddleware);
app.use(Object(__WEBPACK_IMPORTED_MODULE_24__connection__["a" /* default */])()); //
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
            apolloClient = Object(__WEBPACK_IMPORTED_MODULE_18__core_createApolloClient__["a" /* default */])({
              schema: __WEBPACK_IMPORTED_MODULE_29__data_schema__["a" /* default */],
              rootValue: {
                request: req
              }
            }); // Universal HTTP client

            fetch = Object(__WEBPACK_IMPORTED_MODULE_23__createFetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_11_node_fetch___default.a, {
              baseUrl: __WEBPACK_IMPORTED_MODULE_33__config___default.a.api.serverUrl,
              cookie: req.headers.cookie,
              apolloClient: apolloClient
            });
            initialState = {
              user: req.user || null
            };
            store = Object(__WEBPACK_IMPORTED_MODULE_31__store_configureStore__["a" /* default */])(initialState, {
              cookie: req.headers.cookie,
              fetch: fetch,
              // I should not use `history` on server.. but how I do redirection? follow universal-router
              history: null
            });
            store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_32__actions_runtime__["a" /* setRuntimeVariable */])({
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
            return __WEBPACK_IMPORTED_MODULE_26__router__["a" /* default */].resolve(_extends({}, context, {
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
                lineNumber: 206
              },
              __self: this
            }, __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_App__["a" /* default */], {
              context: context,
              store: store,
              userAgent: req.headers['user-agent'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
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
            data.scripts = [__WEBPACK_IMPORTED_MODULE_30__assets_json___default.a.vendor.js];
            data.scripts.push('//res.wx.qq.com/open/js/jweixin-1.2.0.js');

            if (route.chunks) {
              (_data$scripts = data.scripts).push.apply(_data$scripts, _toConsumableArray(route.chunks.map(function (chunk) {
                return __WEBPACK_IMPORTED_MODULE_30__assets_json___default.a[chunk].js;
              })));
            }

            data.scripts.push(__WEBPACK_IMPORTED_MODULE_30__assets_json___default.a.client.js); // Furthermore invoked actions will be ignored, client will not receive them!

            if (true) {
              // eslint-disable-next-line no-console
              console.log('Serializing store...');
            }

            data.app = {
              apiUrl: __WEBPACK_IMPORTED_MODULE_33__config___default.a.api.clientUrl,
              state: context.store.getState(),
              apolloState: context.client.extract()
            };
            html = __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_Html__["a" /* default */], _extends({}, data, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 244
              },
              __self: this
            })));
            res.status(route.status || 200);
            res.send("<!doctype html>".concat(html));
            _context.next = 39;
            break;

          case 36:
            _context.prev = 36;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 36]]);
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
  var html = __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_Html__["a" /* default */], {
    title: "Internal Server Error",
    description: err.message,
    styles: [{
      id: 'css',
      cssText: __WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage_css___default.a._getCss()
    }] // eslint-disable-line no-underscore-dangle
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }))));
  res.status(err.status || 500);
  res.send("<!doctype html>".concat(html));
}); //
// Launch the server
// -----------------------------------------------------------------------------

var promise = __WEBPACK_IMPORTED_MODULE_28__data_models__["e" /* default */].sync().catch(function (err) {
  return console.error(err.stack);
});

if (true) {
  promise.then(function () {
    app.listen(__WEBPACK_IMPORTED_MODULE_33__config___default.a.port, function () {
      console.info("The server is running at http://localhost:".concat(__WEBPACK_IMPORTED_MODULE_33__config___default.a.port, "/"));
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApolloClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_error__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_link_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_schema__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_link_schema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createCache__ = __webpack_require__(43);
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
/* 39 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCache;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_cache_inmemory__ = __webpack_require__(44);
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
/* 44 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(9);
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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
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
    key: "render",
    value: function render() {
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
          lineNumber: 40
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        httpEquiv: "x-ua-compatible",
        content: "ie=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), scripts.map(function (script) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
          key: script,
          rel: "preload",
          href: script,
          as: "script",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "apple-touch-icon",
        href: "apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
            lineNumber: 56
          },
          __self: this
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: children
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "window.App=".concat(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app))
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), scripts.map(function (script) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
          key: script,
          src: script,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        });
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics && __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + "ga('create','".concat(__WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId, "','auto');ga('send','pageview')")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics && __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://www.google-analytics.com/analytics.js",
        async: true,
        defer: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
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
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }
});
Object.defineProperty(Html, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    styles: [],
    scripts: []
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/Users/lookis/Projects/game-server/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,sBAAsB;MAClB,wBAAwB;EAC5B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,iBAAiB;CAClB","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_game_engine__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_models__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redis__ = __webpack_require__(5);
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
      Promise.all([__WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].getAsync("engine:".concat(ws.channel)), __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].hgetallAsync("info:".concat(ws.channel)), __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].lrangeAsync("moves:".concat(ws.channel), 0, -1)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            rule = _ref2[0],
            info = _ref2[1],
            moves = _ref2[2];

        var engine = new __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a[rule](info, moves.map(JSON.parse));
        var result = engine[msg.type](msg.color, msg.position && msg.position[0], msg.position && msg.position[1]);

        if (typeof result === 'number' || typeof result === 'boolean' && result) {
          __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].rpushAsync("moves:".concat(ws.channel), JSON.stringify(msg)).then(function () {
            return __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].publishAsync("channel:".concat(ws.channel), JSON.stringify({
              code: 'ok',
              type: 'delta',
              move: msg
            }));
          }).then(function () {
            switch (msg.type) {
              case 'pass':
                if (engine.currentColor() !== __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK && engine.currentColor() !== __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.WHITE) {
                  __WEBPACK_IMPORTED_MODULE_2_node_fetch___default()(__WEBPACK_IMPORTED_MODULE_3__config___default.a.gnugo, {
                    method: 'POST',
                    body: engine.toSgf()
                  }).then(function (res) {
                    return res.text();
                  }).then(function (text) {
                    var r = text.match(re);

                    if (r) {
                      __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].hsetAsync("info:".concat(ws.channel), 'result', "".concat(r[1], "+").concat(r[2])).then(function () {
                        __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].publishAsync("channel:".concat(ws.channel), JSON.stringify({
                          code: 'ok',
                          type: 'result',
                          result: "".concat(r[1], "+").concat(r[2])
                        }));
                      });
                    }
                  });
                }

                break;

              case 'resign':
                __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].hsetAsync("info:".concat(ws.channel), 'result', "".concat(msg.color === __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK ? 'W+R' : 'B+R')).then(function () {
                  __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].publishAsync("channel:".concat(ws.channel), JSON.stringify({
                    code: 'ok',
                    type: 'result',
                    result: "".concat(msg.color === __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK ? 'W+R' : 'B+R')
                  }));
                });
                break;

              default:
                break;
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

      Promise.all([__WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].getAsync("engine:".concat(ws.channel)), __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].hgetallAsync("info:".concat(ws.channel)), __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].lrangeAsync("moves:".concat(ws.channel), 0, -1)]).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3),
            engine = _ref4[0],
            info = _ref4[1],
            moves = _ref4[2];

        __WEBPACK_IMPORTED_MODULE_4__data_models__["a" /* User */].findAll({
          where: {
            id: {
              $in: [info.black, info.white]
            }
          },
          include: [{
            attributes: ['displayName', 'picture'],
            model: __WEBPACK_IMPORTED_MODULE_4__data_models__["d" /* UserProfile */],
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
                }
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(3);
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(3);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(3);
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(3);
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
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_wechat__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_wechat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_wechat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
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
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */].findOne({
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
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].create({
                id: req.user.id,
                email: "".concat(id, "@wechat.account.shoutanwq.com."),
                logins: [{
                  name: loginName,
                  key: id
                }],
                claims: [{
                  type: claimType,
                  value: id
                }],
                profile: {
                  displayName: profile.nickname,
                  gender: profile.sex,
                  picture: profile.headimgurl
                }
              }, {
                include: [{
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */],
                  as: 'logins'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserClaim */],
                  as: 'claims'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserProfile */],
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
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].findAll({
                attributes: ['id', 'email'],
                where: {
                  '$logins.name$': loginName,
                  '$logins.key$': id
                },
                include: [{
                  attributes: ['name', 'key'],
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */],
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
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].findOne({
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
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].create({
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
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */],
                  as: 'logins'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserClaim */],
                  as: 'claims'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserProfile */],
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
/* 60 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("passport-wechat");

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(64);
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
      return {
        redirect: '/login/wechat',
        from: "".concat(context.pathname, "?").concat(__WEBPACK_IMPORTED_MODULE_1_querystring___default.a.stringify(context.query))
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
/* 63 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 64 */
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
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 85));
    }
  }, {
    path: '/login',
    load: function load() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 86));
    }
  }, {
    path: '/about',
    load: function load() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 87));
    }
  }, {
    path: '/admin',
    load: function load() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 88));
    }
  }, {
    path: '/go',
    protected: true,
    children: [{
      path: '/creation',
      load: function load() {
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 89));
      }
    }, {
      path: '',
      load: function load() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 94));
      }
    }]
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: function load() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 96));
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
    action: __webpack_require__(65).default
  });
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorPage__ = __webpack_require__(12);
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_me__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_news__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries_wechat__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations_create__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations_update__ = __webpack_require__(75);
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
      news: __WEBPACK_IMPORTED_MODULE_2__queries_news__["a" /* default */],
      wechat: __WEBPACK_IMPORTED_MODULE_3__queries_wechat__["a" /* default */]
    }
  }),
  mutation: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createGo: __WEBPACK_IMPORTED_MODULE_4__mutations_create__["a" /* default */],
      updateGo: __WEBPACK_IMPORTED_MODULE_5__mutations_update__["a" /* default */]
    }
  })
});
/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_UserType__ = __webpack_require__(68);
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
/* 68 */
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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(70);
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
/* 70 */
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_WechatType__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redis__ = __webpack_require__(5);








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
              return __WEBPACK_IMPORTED_MODULE_6__redis__["a" /* redis */].setexAsync('wechat_accessToken', json.expires_in, json.access_token).then(function () {
                return json.access_token;
              });
            });
          }

          return accessToken;
        }).then(function (accessToken) {
          return __WEBPACK_IMPORTED_MODULE_0_node_fetch___default()("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".concat(accessToken, "&type=jsapi")).then(function (response) {
            return response.json();
          }).then(function (json) {
            return __WEBPACK_IMPORTED_MODULE_6__redis__["a" /* redis */].setexAsync('jsapi_ticket', json.expires_in, json.ticket).then(function () {
              return json.ticket;
            });
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
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (wechat);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 73 */
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
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redis__ = __webpack_require__(5);



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
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    komi: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"]
    },
    color: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  },
  resolve: function resolve(root, _ref) {
    var rule = _ref.rule,
        boardsize = _ref.boardsize,
        handicap = _ref.handicap,
        komi = _ref.komi,
        color = _ref.color;
    var id = Math.random().toString(16).split('.')[1];
    return Promise.all([__WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].setAsync("engine:".concat(id), rule), __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].hmsetAsync("info:".concat(id), Object.assign({
      boardsize: boardsize,
      handicap: handicap || 0,
      komi: komi || 6.5
    }, color === 'black' ? {
      black: root.request.user.id
    } : {
      white: root.request.user.id
    }))]).then(function () {
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redis__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }





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
    return __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].hmgetAsync("info:".concat(id), color, 'black', 'white').then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 3),
          r = _ref3[0],
          black = _ref3[1],
          white = _ref3[2];

      if (!r && root.request.user && black !== root.request.user.id && white !== root.request.user.id) {
        return __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].hsetAsync("info:".concat(id), color, root.request.user.id);
      }

      return Promise.resolve(true);
    }) // publish join
    .then(function () {
      return Promise.all([__WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].getAsync("engine:".concat(id)), __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].hgetallAsync("info:".concat(id)), __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].lrangeAsync("moves:".concat(id), 0, -1)]).then(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 3),
            engine = _ref5[0],
            info = _ref5[1],
            moves = _ref5[2];

        return __WEBPACK_IMPORTED_MODULE_3__models__["a" /* User */].findAll({
          where: {
            id: {
              $in: [info.black, info.white]
            }
          },
          include: [{
            attributes: ['displayName', 'picture'],
            model: __WEBPACK_IMPORTED_MODULE_3__models__["d" /* UserProfile */],
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

          return __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].publishAsync("channel:".concat(id), JSON.stringify({
            code: 'ok',
            type: 'init',
            game: {
              engine: engine,
              moves: moves.map(JSON.parse),
              info: {
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
                }
              }
            }
          })).then(function () {
            return Promise.resolve([engine, info]);
          });
        });
      });
    }) // return info
    .then(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          engine = _ref7[0],
          info = _ref7[1];

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
/* 76 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger__ = __webpack_require__(81);



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
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(80);



function createRootReducer() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
    runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */]
  });
}

/***/ }),
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(82);
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
/* 82 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports) {

module.exports = require("material-ui/SelectField");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

module.exports = require("react-websocket");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3dlYnBhY2svYm9vdHN0cmFwIGE3MjUwNTdjZGI1OGUzYmRmNGNkIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImdyYXBocWxcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvbmZpZy5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9zZXF1ZWxpemUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwic2VxdWVsaXplXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yZWRpcy5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL21vZGVscy9pbmRleC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiYmx1ZWJpcmRcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvdHlwZXMvR29UeXBlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInJlZHV4XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJnYW1lLWVuZ2luZVwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvc2VydmVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInBhdGhcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJjb25uZWN0LXJlZGlzXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiZXhwcmVzcy13c1wiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImV4cHJlc3Mtand0XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiZXhwcmVzcy1ncmFwaHFsXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInByZXR0eS1lcnJvclwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIm1hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwibWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVBcG9sbG9DbGllbnQuc2VydmVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImFwb2xsby1jbGllbnRcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJhcG9sbG8tbGlua1wiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImFwb2xsby1saW5rLWVycm9yXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstc2NoZW1hXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVDYWNoZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb21wb25lbnRzL0h0bWwuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3M/OWVmZSIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvY3JlYXRlRmV0Y2guanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9jb25uZWN0aW9uLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tb2RlbHMvVXNlci5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvbW9kZWxzL1VzZXJMb2dpbi5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvbW9kZWxzL1VzZXJDbGFpbS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvbW9kZWxzL1VzZXJQcm9maWxlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInJlZGlzXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9wYXNzcG9ydC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInBhc3Nwb3J0LXdlY2hhdFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInVuaXZlcnNhbC1yb3V0ZXJcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9lcnJvci9pbmRleC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvc2NoZW1hLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9xdWVyaWVzL21lLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS90eXBlcy9Vc2VyVHlwZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2RhdGEvcXVlcmllcy9uZXdzLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS90eXBlcy9OZXdzSXRlbVR5cGUuanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9kYXRhL3F1ZXJpZXMvd2VjaGF0LmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcImNyeXB0b1wiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS90eXBlcy9XZWNoYXRUeXBlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tdXRhdGlvbnMvY3JlYXRlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvZGF0YS9tdXRhdGlvbnMvdXBkYXRlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIi4vYXNzZXRzLmpzb25cIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yZWR1Y2Vycy91c2VyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcmVkdWNlcnMvcnVudGltZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3N0b3JlL2xvZ2dlci9sb2dnZXIuc2VydmVyLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcInV0aWxcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL2FjdGlvbnMvcnVudGltZS5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJjbGFzc25hbWVzL2JpbmRcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS9TZWxlY3RGaWVsZFwiIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9leHRlcm5hbCBcIm1hdGVyaWFsLXVpL01lbnVJdGVtXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCIiLCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL2V4dGVybmFsIFwic3dlZXRhbGVydDJcIiIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvZXh0ZXJuYWwgXCJyZWFjdC13ZWJzb2NrZXRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQ3OiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9jaHVua3MvXCIgKyAoe1wiMFwiOlwiZ29cIixcIjFcIjpcImhvbWVcIixcIjJcIjpcImdvLWNyZWF0aW9uXCIsXCIzXCI6XCJhYm91dFwiLFwiNFwiOlwibm90LWZvdW5kXCIsXCI1XCI6XCJsb2dpblwiLFwiNlwiOlwiYWRtaW5cIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gdW5jYXRjaGVkIGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBTeXN0ZW0uaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE3MjUwNTdjZGI1OGUzYmRmNGNkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImdyYXBocWxcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdEbyBub3QgaW1wb3J0IGBjb25maWcuanNgIGZyb20gaW5zaWRlIHRoZSBjbGllbnQtc2lkZSBjb2RlLicsXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBOb2RlLmpzIGFwcFxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDAsXG5cbiAgLy8gQVBJIEdhdGV3YXlcbiAgYXBpOiB7XG4gICAgLy8gQVBJIFVSTCB0byBiZSB1c2VkIGluIHRoZSBjbGllbnQtc2lkZSBjb2RlXG4gICAgY2xpZW50VXJsOiBwcm9jZXNzLmVudi5BUElfQ0xJRU5UX1VSTCB8fCAnJyxcbiAgICAvLyBBUEkgVVJMIHRvIGJlIHVzZWQgaW4gdGhlIHNlcnZlci1zaWRlIGNvZGVcbiAgICBzZXJ2ZXJVcmw6XG4gICAgICBwcm9jZXNzLmVudi5BUElfU0VSVkVSX1VSTCB8fFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDB9YCxcbiAgfSxcblxuICAvLyBEYXRhYmFzZVxuICBkYXRhYmFzZVVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIHx8ICdzcWxpdGU6ZGF0YWJhc2Uuc3FsaXRlJyxcblxuICAvLyBBdXRoZW50aWNhdGlvblxuICBhdXRoOiB7XG4gICAgand0OiB7IHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnUmVhY3QgU3RhcnRlciBLaXQhJyB9LFxuICB9LFxuICAvLyBHTlVHT1xuICBnbnVnbzogcHJvY2Vzcy5lbnYuR05VR08gfHwgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMS9zY29yZS9lc3RpbWF0ZScsXG5cbiAgLy8gUmVkaXNcbiAgcmVkaXM6IHByb2Nlc3MuZW52LlJFRElTIHx8ICdyZWRpczovL2xvY2FsaG9zdDo2Mzc5JyxcblxuICBzZXNzaW9uU2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCB8fCBcIkl0J3MgYSBzZWNyZXRcIixcblxuICB3ZWNoYXQ6IHtcbiAgICBhcHBJZDogJ3d4YzY3YTE5N2M1YzNmMDA0ZScsXG4gICAgYXBwU2VjcmV0OiAnNjBlNTQxZmZmNTk0NDdhNzI2NzUwMmY5NzRjYzI2MmQnLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGNvbmZpZy5kYXRhYmFzZVVybCwge1xuICBkZWZpbmU6IHtcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2VxdWVsaXplO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL3NlcXVlbGl6ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcXVlbGl6ZVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImltcG9ydCBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgcmVkaXMgZnJvbSAncmVkaXMnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuYmx1ZWJpcmQucHJvbWlzaWZ5QWxsKHJlZGlzLlJlZGlzQ2xpZW50LnByb3RvdHlwZSk7XG5ibHVlYmlyZC5wcm9taXNpZnlBbGwocmVkaXMuTXVsdGkucHJvdG90eXBlKTtcblxuY29uc3QgY2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KGNvbmZpZy5yZWRpcyk7XG5jb25zdCBzdWJzY3JpYmVyID0gcmVkaXMuY3JlYXRlQ2xpZW50KGNvbmZpZy5yZWRpcyk7XG5cbmNsaWVudC5vbignZXJyb3InLCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuc3Vic2NyaWJlci5vbignZXJyb3InLCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG5leHBvcnQgeyBjbGllbnQgYXMgcmVkaXMsIHN1YnNjcmliZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkaXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICcuLi9zZXF1ZWxpemUnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnLi9Vc2VyTG9naW4nO1xuaW1wb3J0IFVzZXJDbGFpbSBmcm9tICcuL1VzZXJDbGFpbSc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XG5cblVzZXIuaGFzTWFueShVc2VyTG9naW4sIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAnbG9naW5zJyxcbiAgb25VcGRhdGU6ICdjYXNjYWRlJyxcbiAgb25EZWxldGU6ICdjYXNjYWRlJyxcbn0pO1xuXG5Vc2VyLmhhc01hbnkoVXNlckNsYWltLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ2NsYWltcycsXG4gIG9uVXBkYXRlOiAnY2FzY2FkZScsXG4gIG9uRGVsZXRlOiAnY2FzY2FkZScsXG59KTtcblxuVXNlci5oYXNPbmUoVXNlclByb2ZpbGUsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAncHJvZmlsZScsXG4gIG9uVXBkYXRlOiAnY2FzY2FkZScsXG4gIG9uRGVsZXRlOiAnY2FzY2FkZScsXG59KTtcblxuZnVuY3Rpb24gc3luYyguLi5hcmdzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuc3luYyguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBzeW5jIH07XG5leHBvcnQgeyBVc2VyLCBVc2VyTG9naW4sIFVzZXJDbGFpbSwgVXNlclByb2ZpbGUgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tb2RlbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsdWViaXJkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmx1ZWJpcmRcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRXJyb3JQYWdlLmNzcyc7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZXJyb3I6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzdGFjazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXJyb3I6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChfX0RFVl9fICYmIHRoaXMucHJvcHMuZXJyb3IpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmVycm9yLm5hbWV9PC9oMT5cbiAgICAgICAgICA8cHJlPnt0aGlzLnByb3BzLmVycm9yLnN0YWNrfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FcnJvcjwvaDE+XG4gICAgICAgIDxwPlNvcnJ5LCBhIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIG9uIHRoaXMgcGFnZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEVycm9yUGFnZSBhcyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRXJyb3JQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJpbXBvcnQge1xuICBHcmFwaFFMSW50LFxuICBHcmFwaFFMTm9uTnVsbCxcbiAgR3JhcGhRTE9iamVjdFR5cGUsXG4gIEdyYXBoUUxTdHJpbmcsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBHb1R5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnR28nLFxuICBmaWVsZHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgIH0sXG4gICAgZW5naW5lOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICBuYW1lOiAnR29JbmZvJyxcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgYm9hcmRzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEludCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibGFjazoge1xuICAgICAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdoaXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdvVHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS90eXBlcy9Hb1R5cGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZXhwb3J0IGNvbnN0IFNFVF9SVU5USU1FX1ZBUklBQkxFID0gJ1NFVF9SVU5USU1FX1ZBUklBQkxFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uc3RhbnRzL2luZGV4LmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknKTtcblxudmFyIF9zdHJpbmdpZnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jyk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGljZWRUb0FycmF5Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogSXNvbW9ycGhpYyBDU1Mgc3R5bGUgbG9hZGVyIGZvciBXZWJwYWNrXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTUtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcHJlZml4ID0gJ3MnO1xudmFyIGluc2VydGVkID0ge307XG5cbi8vIEJhc2U2NCBlbmNvZGluZyBhbmQgZGVjb2RpbmcgLSBUaGUgXCJVbmljb2RlIFByb2JsZW1cIlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cbmZ1bmN0aW9uIGI2NEVuY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICB9KSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHN0eWxlL2xpbmsgZWxlbWVudHMgZm9yIHNwZWNpZmllZCBub2RlIElEc1xuICogaWYgdGhleSBhcmUgbm8gbG9uZ2VyIHJlZmVyZW5jZWQgYnkgVUkgY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ3NzKGlkcykge1xuICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAoLS1pbnNlcnRlZFtpZF0gPD0gMCkge1xuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyBpZCk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBFeGFtcGxlOlxuICogICAvLyBJbnNlcnQgQ1NTIHN0eWxlcyBvYmplY3QgZ2VuZXJhdGVkIGJ5IGBjc3MtbG9hZGVyYCBpbnRvIERPTVxuICogICB2YXIgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKFtbMSwgJ2JvZHkgeyBjb2xvcjogcmVkOyB9J11dKTtcbiAqXG4gKiAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBET01cbiAqICAgcmVtb3ZlQ3NzKCk7XG4gKi9cbmZ1bmN0aW9uIGluc2VydENzcyhzdHlsZXMpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgX3JlZiRyZXBsYWNlID0gX3JlZi5yZXBsYWNlLFxuICAgICAgcmVwbGFjZSA9IF9yZWYkcmVwbGFjZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHJlcGxhY2UsXG4gICAgICBfcmVmJHByZXBlbmQgPSBfcmVmLnByZXBlbmQsXG4gICAgICBwcmVwZW5kID0gX3JlZiRwcmVwZW5kID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkcHJlcGVuZDtcblxuICB2YXIgaWRzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9zdHlsZXMkaSA9ICgwLCBfc2xpY2VkVG9BcnJheTMuZGVmYXVsdCkoc3R5bGVzW2ldLCA0KSxcbiAgICAgICAgbW9kdWxlSWQgPSBfc3R5bGVzJGlbMF0sXG4gICAgICAgIGNzcyA9IF9zdHlsZXMkaVsxXSxcbiAgICAgICAgbWVkaWEgPSBfc3R5bGVzJGlbMl0sXG4gICAgICAgIHNvdXJjZU1hcCA9IF9zdHlsZXMkaVszXTtcblxuICAgIHZhciBpZCA9IG1vZHVsZUlkICsgJy0nICsgaTtcblxuICAgIGlkcy5wdXNoKGlkKTtcblxuICAgIGlmIChpbnNlcnRlZFtpZF0pIHtcbiAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICBpbnNlcnRlZFtpZF0rKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0ZWRbaWRdID0gMTtcblxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4ICsgaWQpO1xuICAgIHZhciBjcmVhdGUgPSBmYWxzZTtcblxuICAgIGlmICghZWxlbSkge1xuICAgICAgY3JlYXRlID0gdHJ1ZTtcblxuICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgZWxlbS5pZCA9IHByZWZpeCArIGlkO1xuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjc3NUZXh0ID0gY3NzO1xuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHNraXAgSUU5IGFuZCBiZWxvdywgc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9hdG9iLWJ0b2FcbiAgICAgIGNzc1RleHQgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGI2NEVuY29kZVVuaWNvZGUoKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKHNvdXJjZU1hcCkpICsgJyovJztcbiAgICAgIGNzc1RleHQgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5maWxlICsgJz8nICsgaWQgKyAnKi8nO1xuICAgIH1cblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUNzcy5iaW5kKG51bGwsIGlkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2FtZS1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJnYW1lLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJztcbmltcG9ydCBjb25uZWN0UmVkaXMgZnJvbSAnY29ubmVjdC1yZWRpcyc7XG5pbXBvcnQgZXhwcmVzc1dzIGZyb20gJ2V4cHJlc3Mtd3MnO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBleHByZXNzSnd0LCB7IFVuYXV0aG9yaXplZEVycm9yIGFzIEp3dDQwMUVycm9yIH0gZnJvbSAnZXhwcmVzcy1qd3QnO1xuaW1wb3J0IGV4cHJlc3NHcmFwaFFMIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgbm9kZUZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgUHJldHR5RXJyb3IgZnJvbSAncHJldHR5LWVycm9yJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuL2NvcmUvY3JlYXRlQXBvbGxvQ2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgSHRtbCBmcm9tICcuL2NvbXBvbmVudHMvSHRtbCc7XG5pbXBvcnQgeyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfSBmcm9tICcuL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UnO1xuaW1wb3J0IGVycm9yUGFnZVN0eWxlIGZyb20gJy4vcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUZldGNoIGZyb20gJy4vY3JlYXRlRmV0Y2gnO1xuaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHsgcmVkaXMgfSBmcm9tICcuL3JlZGlzJztcbmltcG9ydCBtb2RlbHMgZnJvbSAnLi9kYXRhL21vZGVscyc7XG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vZGF0YS9zY2hlbWEnO1xuaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cy5qc29uJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IHsgc2V0UnVudGltZVZhcmlhYmxlIH0gZnJvbSAnLi9hY3Rpb25zL3J1bnRpbWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmV4cHJlc3NXcyhhcHApO1xuLy9cbi8vIFRlbGwgYW55IENTUyB0b29saW5nIChzdWNoIGFzIE1hdGVyaWFsIFVJKSB0byB1c2UgYWxsIHZlbmRvciBwcmVmaXhlcyBpZiB0aGVcbi8vIHVzZXIgYWdlbnQgaXMgbm90IGtub3duLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmdsb2JhbC5uYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yIHx8IHt9O1xuZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQgPSBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnYWxsJztcblxuLy9cbi8vIFJlZ2lzdGVyIE5vZGUuanMgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4vL1xuLy8gQXV0aGVudGljYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAudXNlKFxuICBleHByZXNzSnd0KHtcbiAgICBzZWNyZXQ6IGNvbmZpZy5hdXRoLmp3dC5zZWNyZXQsXG4gICAgY3JlZGVudGlhbHNSZXF1aXJlZDogZmFsc2UsXG4gICAgZ2V0VG9rZW46IHJlcSA9PiByZXEuY29va2llcy5pZF90b2tlbixcbiAgfSksXG4pO1xuLy8gRXJyb3IgaGFuZGxlciBmb3IgZXhwcmVzcy1qd3RcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICBpZiAoZXJyIGluc3RhbmNlb2YgSnd0NDAxRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbZXhwcmVzcy1qd3QtZXJyb3JdJywgcmVxLmNvb2tpZXMuaWRfdG9rZW4pO1xuICAgIC8vIGBjbGVhckNvb2tpZWAsIG90aGVyd2lzZSB1c2VyIGNhbid0IHVzZSB3ZWItYXBwIHVudGlsIGNvb2tpZSBleHBpcmVzXG4gICAgcmVzLmNsZWFyQ29va2llKCdpZF90b2tlbicpO1xuICB9XG4gIG5leHQoZXJyKTtcbn0pO1xuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIGFwcC5lbmFibGUoJ3RydXN0IHByb3h5Jyk7XG59XG5pZiAoYXBwLmdldCgnZW52JykgPT09ICdwcm9kdWN0aW9uJykge1xuICBhcHAuc2V0KCd0cnVzdCBwcm94eScsIDEpOyAvLyB0cnVzdCBmaXJzdCBwcm94eVxufVxuY29uc3QgUmVkaXNTdG9yZSA9IGNvbm5lY3RSZWRpcyhzZXNzaW9uKTtcbmFwcC51c2UoXG4gIHNlc3Npb24oe1xuICAgIHN0b3JlOiBuZXcgUmVkaXNTdG9yZSh7XG4gICAgICBjbGllbnQ6IHJlZGlzLFxuICAgIH0pLFxuICAgIHNlY3JldDogY29uZmlnLnNlc3Npb25TZWNyZXQsXG4gICAgcmVzYXZlOiBmYWxzZSxcbiAgICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgfSksXG4pO1xuXG5hcHAuZ2V0KFxuICAnL2xvZ2luL3dlY2hhdCcsXG4gIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIG5leHQoKTtcbiAgfSxcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCd3ZWNoYXQnKSxcbik7XG5cbmFwcC5nZXQoXG4gICcvbG9naW4vd2VjaGF0L3JldHVybicsXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnd2VjaGF0Jywge1xuICAgIHNlc3Npb246IGZhbHNlLFxuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbi93ZWNoYXQnLFxuICB9KSxcbiAgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZXhwaXJlc0luID0gNjAgKiA2MCAqIDI0ICogMTgwOyAvLyAxODAgZGF5c1xuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24ocmVxLnVzZXIsIGNvbmZpZy5hdXRoLmp3dC5zZWNyZXQsIHsgZXhwaXJlc0luIH0pO1xuICAgIHJlcy5jb29raWUoJ2lkX3Rva2VuJywgdG9rZW4sIHsgbWF4QWdlOiAxMDAwICogZXhwaXJlc0luLCBodHRwT25seTogdHJ1ZSB9KTtcbiAgICByZXMucmVkaXJlY3QocmVxLnNlc3Npb24ubmV4dCB8fCAnLycpO1xuICB9LFxuKTtcblxuLy9cbi8vIFJlZ2lzdGVyIEFQSSBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgZ3JhcGhxbE1pZGRsZXdhcmUgPSBleHByZXNzR3JhcGhRTChyZXEgPT4gKHtcbiAgc2NoZW1hLFxuICBncmFwaGlxbDogX19ERVZfXyxcbiAgcm9vdFZhbHVlOiB7IHJlcXVlc3Q6IHJlcSB9LFxuICBwcmV0dHk6IF9fREVWX18sXG59KSk7XG5cbmFwcC51c2UoJy9ncmFwaHFsJywgZ3JhcGhxbE1pZGRsZXdhcmUpO1xuYXBwLnVzZShjb25uZWN0aW9uKCkpO1xuXG4vL1xuLy8gUmVnaXN0ZXIgc2VydmVyLXNpZGUgcmVuZGVyaW5nIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAuZ2V0KCcqJywgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY3NzID0gbmV3IFNldCgpO1xuXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gY3JlYXRlQXBvbGxvQ2xpZW50KHtcbiAgICAgIHNjaGVtYSxcbiAgICAgIHJvb3RWYWx1ZTogeyByZXF1ZXN0OiByZXEgfSxcbiAgICB9KTtcblxuICAgIC8vIFVuaXZlcnNhbCBIVFRQIGNsaWVudFxuICAgIGNvbnN0IGZldGNoID0gY3JlYXRlRmV0Y2gobm9kZUZldGNoLCB7XG4gICAgICBiYXNlVXJsOiBjb25maWcuYXBpLnNlcnZlclVybCxcbiAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llLFxuICAgICAgYXBvbGxvQ2xpZW50LFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgdXNlcjogcmVxLnVzZXIgfHwgbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUsIHtcbiAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llLFxuICAgICAgZmV0Y2gsXG4gICAgICAvLyBJIHNob3VsZCBub3QgdXNlIGBoaXN0b3J5YCBvbiBzZXJ2ZXIuLiBidXQgaG93IEkgZG8gcmVkaXJlY3Rpb24/IGZvbGxvdyB1bml2ZXJzYWwtcm91dGVyXG4gICAgICBoaXN0b3J5OiBudWxsLFxuICAgIH0pO1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICBzZXRSdW50aW1lVmFyaWFibGUoe1xuICAgICAgICBuYW1lOiAnaW5pdGlhbE5vdycsXG4gICAgICAgIHZhbHVlOiBEYXRlLm5vdygpLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIC8vIEdsb2JhbCAoY29udGV4dCkgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGVhc2lseSBhY2Nlc3NlZCBmcm9tIGFueSBSZWFjdCBjb21wb25lbnRcbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAvLyBFbmFibGVzIGNyaXRpY2FsIHBhdGggQ1NTIHJlbmRlcmluZ1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXG4gICAgICBpbnNlcnRDc3M6ICguLi5zdHlsZXMpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IGNzcy5hZGQoc3R5bGUuX2dldENzcygpKSk7XG4gICAgICB9LFxuICAgICAgZmV0Y2gsXG4gICAgICAvLyBZb3UgY2FuIGFjY2VzcyByZWR1eCB0aHJvdWdoIHJlYWN0LXJlZHV4IGNvbm5lY3RcbiAgICAgIHN0b3JlLFxuICAgICAgc3RvcmVTdWJzY3JpcHRpb246IG51bGwsXG4gICAgICAvLyBBcG9sbG8gQ2xpZW50IGZvciB1c2Ugd2l0aCByZWFjdC1hcG9sbG9cbiAgICAgIGNsaWVudDogYXBvbGxvQ2xpZW50LFxuICAgIH07XG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCByb3V0ZXIucmVzb2x2ZSh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgcGF0aG5hbWU6IHJlcS5wYXRoLFxuICAgICAgcXVlcnk6IHJlcS5xdWVyeSxcbiAgICB9KTtcblxuICAgIGlmIChyb3V0ZS5yZWRpcmVjdCkge1xuICAgICAgaWYgKHJvdXRlLmZyb20pIHtcbiAgICAgICAgcmVxLnNlc3Npb24ubmV4dCA9IHJvdXRlLmZyb207XG4gICAgICB9XG4gICAgICByZXMucmVkaXJlY3Qocm91dGUuc3RhdHVzIHx8IDMwMiwgcm91dGUucmVkaXJlY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJvdXRlIH07XG4gICAgY29uc3Qgcm9vdENvbXBvbmVudCA9IChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyXG4gICAgICAgIG11aVRoZW1lPXtnZXRNdWlUaGVtZSh7XG4gICAgICAgICAgdXNlckFnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPEFwcFxuICAgICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XG4gICAgICAgICAgc3RvcmU9e3N0b3JlfVxuICAgICAgICAgIHVzZXJBZ2VudD17cmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyb3V0ZS5jb21wb25lbnR9XG4gICAgICAgIDwvQXBwPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKHJvb3RDb21wb25lbnQpO1xuICAgIC8vIHRoaXMgaXMgaGVyZSBiZWNhdXNlIG9mIEFwb2xsbyByZWR1eCBBUE9MTE9fUVVFUllfU1RPUCBhY3Rpb25cbiAgICBhd2FpdCBQcm9taXNlLmRlbGF5KDApO1xuICAgIGRhdGEuY2hpbGRyZW4gPSBhd2FpdCBSZWFjdERPTS5yZW5kZXJUb1N0cmluZyhyb290Q29tcG9uZW50KTtcbiAgICBkYXRhLnN0eWxlcyA9IFt7IGlkOiAnY3NzJywgY3NzVGV4dDogWy4uLmNzc10uam9pbignJykgfV07XG5cbiAgICBkYXRhLnNjcmlwdHMgPSBbYXNzZXRzLnZlbmRvci5qc107XG4gICAgZGF0YS5zY3JpcHRzLnB1c2goJy8vcmVzLnd4LnFxLmNvbS9vcGVuL2pzL2p3ZWl4aW4tMS4yLjAuanMnKTtcbiAgICBpZiAocm91dGUuY2h1bmtzKSB7XG4gICAgICBkYXRhLnNjcmlwdHMucHVzaCguLi5yb3V0ZS5jaHVua3MubWFwKGNodW5rID0+IGFzc2V0c1tjaHVua10uanMpKTtcbiAgICB9XG4gICAgZGF0YS5zY3JpcHRzLnB1c2goYXNzZXRzLmNsaWVudC5qcyk7XG5cbiAgICAvLyBGdXJ0aGVybW9yZSBpbnZva2VkIGFjdGlvbnMgd2lsbCBiZSBpZ25vcmVkLCBjbGllbnQgd2lsbCBub3QgcmVjZWl2ZSB0aGVtIVxuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coJ1NlcmlhbGl6aW5nIHN0b3JlLi4uJyk7XG4gICAgfVxuICAgIGRhdGEuYXBwID0ge1xuICAgICAgYXBpVXJsOiBjb25maWcuYXBpLmNsaWVudFVybCxcbiAgICAgIHN0YXRlOiBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCksXG4gICAgICBhcG9sbG9TdGF0ZTogY29udGV4dC5jbGllbnQuZXh0cmFjdCgpLFxuICAgIH07XG5cbiAgICBjb25zdCBodG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoPEh0bWwgey4uLmRhdGF9IC8+KTtcbiAgICByZXMuc3RhdHVzKHJvdXRlLnN0YXR1cyB8fCAyMDApO1xuICAgIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufSk7XG5cbi8vXG4vLyBFcnJvciBoYW5kbGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHBlID0gbmV3IFByZXR0eUVycm9yKCk7XG5wZS5za2lwTm9kZUZpbGVzKCk7XG5wZS5za2lwUGFja2FnZSgnZXhwcmVzcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc29sZS5lcnJvcihwZS5yZW5kZXIoZXJyKSk7XG4gIGNvbnN0IGh0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICA8SHRtbFxuICAgICAgdGl0bGU9XCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIlxuICAgICAgZGVzY3JpcHRpb249e2Vyci5tZXNzYWdlfVxuICAgICAgc3R5bGVzPXtbeyBpZDogJ2NzcycsIGNzc1RleHQ6IGVycm9yUGFnZVN0eWxlLl9nZXRDc3MoKSB9XX0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgID5cbiAgICAgIHtSZWFjdERPTS5yZW5kZXJUb1N0cmluZyg8RXJyb3JQYWdlV2l0aG91dFN0eWxlIGVycm9yPXtlcnJ9IC8+KX1cbiAgICA8L0h0bWw+LFxuICApO1xuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcbiAgcmVzLnNlbmQoYDwhZG9jdHlwZSBodG1sPiR7aHRtbH1gKTtcbn0pO1xuXG4vL1xuLy8gTGF1bmNoIHRoZSBzZXJ2ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBwcm9taXNlID0gbW9kZWxzLnN5bmMoKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIuc3RhY2spKTtcbmlmICghbW9kdWxlLmhvdCkge1xuICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgIGFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgVGhlIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtjb25maWcucG9ydH0vYCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vL1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChtb2R1bGUuaG90KSB7XG4gIGFwcC5ob3QgPSBtb2R1bGUuaG90O1xuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yb3V0ZXInKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zZXJ2ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1yZWRpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbm5lY3QtcmVkaXNcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy13c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3Mtd3NcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWp3dFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3Mtand0XCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtZ3JhcGhxbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtZ3JhcGhxbFwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJldHR5LWVycm9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJldHR5LWVycm9yXCJcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXJcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lXCJcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIEBmbG93XG5cbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcic7XG5pbXBvcnQgeyBTY2hlbWFMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstc2NoZW1hJztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICcuL2NyZWF0ZUNhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KHNjaGVtYSkge1xuICBjb25zdCBsaW5rID0gZnJvbShbXG4gICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICAgIGdyYXBoUUxFcnJvcnMubWFwKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLndhcm4oYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9YCk7XG4gICAgfSksXG4gICAgbmV3IFNjaGVtYUxpbmsoeyAuLi5zY2hlbWEgfSksXG4gIF0pO1xuXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rLFxuICAgIGNhY2hlOiBjcmVhdGVDYWNoZSgpLFxuICAgIHNzck1vZGU6IHRydWUsXG4gICAgcXVlcnlEZWR1cGxpY2F0aW9uOiB0cnVlLFxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29yZS9jcmVhdGVBcG9sbG9DbGllbnQvY3JlYXRlQXBvbGxvQ2xpZW50LnNlcnZlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXBvbGxvLWxpbmtcIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstZXJyb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1zY2hlbWFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1zY2hlbWFcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuXG5mdW5jdGlvbiBkYXRhSWRGcm9tT2JqZWN0KG9iaikge1xuICBzd2l0Y2ggKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgY2FzZSAnTmV3c0l0ZW0nOlxuICAgICAgcmV0dXJuIG9iai5saW5rID8gYE5ld3NJdGVtOiR7b2JqLmxpbmt9YCA6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KG9iaik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChvYmopO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2Jhc2ljcy9jYWNoaW5nLmh0bWwjY29uZmlndXJhdGlvblxuICByZXR1cm4gbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgIGRhdGFJZEZyb21PYmplY3QsXG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVDYWNoZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuY29uc3QgQ29udGV4dFR5cGUgPSB7XG4gIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlclxuICBpbnNlcnRDc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIFVuaXZlcnNhbCBIVFRQIGNsaWVudFxuICBmZXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gSW50ZWdyYXRlIFJlZHV4XG4gIC8vIGh0dHA6Ly9yZWR1eC5qcy5vcmcvZG9jcy9iYXNpY3MvVXNhZ2VXaXRoUmVhY3QuaHRtbFxuICAuLi5SZWR1eFByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzLFxuICAvLyBBcG9sbG8gQ2xpZW50XG4gIGNsaWVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuLyoqXG4gKiBUaGUgdG9wLWxldmVsIFJlYWN0IGNvbXBvbmVudCBzZXR0aW5nIGNvbnRleHQgKGdsb2JhbCkgdmFyaWFibGVzXG4gKiB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuICpcbiAqIFVzYWdlIGV4YW1wbGU6XG4gKlxuICogICBjb25zdCBjb250ZXh0ID0ge1xuICogICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksXG4gKiAgICAgc3RvcmU6IGNyZWF0ZVN0b3JlKCksXG4gKiAgIH07XG4gKlxuICogICBSZWFjdERPTS5yZW5kZXIoXG4gKiAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fT5cbiAqICAgICAgIDxMYXlvdXQ+XG4gKiAgICAgICAgIDxMYW5kaW5nUGFnZSAvPlxuICogICAgICAgPC9MYXlvdXQ+XG4gKiAgICAgPC9BcHA+LFxuICogICAgIGNvbnRhaW5lcixcbiAqICAgKTtcbiAqL1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGV4dDogUHJvcFR5cGVzLnNoYXBlKENvbnRleHRUeXBlKS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IENvbnRleHRUeXBlO1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIEhlcmUsIHdlIGFyZSBhdCB1bml2ZXJzZSBsZXZlbCwgc3VyZT8gOy0pXG4gICAgY29uc3QgeyBjbGllbnQgfSA9IHRoaXMucHJvcHMuY29udGV4dDtcbiAgICAvLyBOT1RFOiBJZiB5b3UgbmVlZCB0byBhZGQgb3IgbW9kaWZ5IGhlYWRlciwgZm9vdGVyIGV0Yy4gb2YgdGhlIGFwcCxcbiAgICAvLyBwbGVhc2UgZG8gdGhhdCBpbnNpZGUgdGhlIExheW91dCBjb21wb25lbnQuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9BcG9sbG9Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5cbmNsYXNzIEh0bWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY3NzVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSkuaXNSZXF1aXJlZCxcbiAgICApLFxuICAgIHNjcmlwdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCksXG4gICAgYXBwOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczogW10sXG4gICAgc2NyaXB0czogW10sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdHlsZXMsIHNjcmlwdHMsIGFwcCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGNsYXNzTmFtZT1cIm5vLWpzXCIgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGUgPSAxLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAge3NjcmlwdHMubWFwKHNjcmlwdCA9PiAoXG4gICAgICAgICAgICA8bGluayBrZXk9e3NjcmlwdH0gcmVsPVwicHJlbG9hZFwiIGhyZWY9e3NjcmlwdH0gYXM9XCJzY3JpcHRcIiAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICAgIHtzdHlsZXMubWFwKHN0eWxlID0+IChcbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBrZXk9e3N0eWxlLmlkfVxuICAgICAgICAgICAgICBpZD17c3R5bGUuaWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUuY3NzVGV4dCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGlsZHJlbiB9fSAvPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYHdpbmRvdy5BcHA9JHtzZXJpYWxpemUoYXBwKX1gIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2NyaXB0cy5tYXAoc2NyaXB0ID0+IDxzY3JpcHQga2V5PXtzY3JpcHR9IHNyYz17c2NyaXB0fSAvPil9XG4gICAgICAgICAge2NvbmZpZy5hbmFseXRpY3MgJiZcbiAgICAgICAgICAgIGNvbmZpZy5hbmFseXRpY3MuZ29vZ2xlVHJhY2tpbmdJZCAmJiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOlxuICAgICAgICAgICAgICAgICAgICAnd2luZG93LmdhPWZ1bmN0aW9uKCl7Z2EucS5wdXNoKGFyZ3VtZW50cyl9O2dhLnE9W107Z2EubD0rbmV3IERhdGU7JyArXG4gICAgICAgICAgICAgICAgICAgIGBnYSgnY3JlYXRlJywnJHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWRcbiAgICAgICAgICAgICAgICAgICAgfScsJ2F1dG8nKTtnYSgnc2VuZCcsJ3BhZ2V2aWV3JylgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIHtjb25maWcuYW5hbHl0aWNzICYmXG4gICAgICAgICAgICBjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWQgJiYgKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzXCJcbiAgICAgICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgICAgIGRlZmVyXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdG1sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0h0bWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbG9va2lzL1Byb2plY3RzL2dhbWUtc2VydmVyL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx1QkFBdUI7TUFDbkIsb0JBQW9CO0VBQ3hCLHNCQUFzQjtNQUNsQix3QkFBd0I7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQlwiLFwiZmlsZVwiOlwiRXJyb3JQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIEBmbG93ICovXG5cbnR5cGUgRmV0Y2ggPSAodXJsOiBzdHJpbmcsIG9wdGlvbnM6ID9hbnkpID0+IFByb21pc2U8YW55PjtcblxudHlwZSBPcHRpb25zID0ge1xuICBiYXNlVXJsOiBzdHJpbmcsXG4gIGNvb2tpZT86IHN0cmluZyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gYXJvdW5kIHRoZSBIVE1MNSBGZXRjaCBBUEkgdGhhdCBwcm92aWRlc1xuICogZGVmYXVsdCBhcmd1bWVudHMgdG8gZmV0Y2goLi4uKSBhbmQgaXMgaW50ZW5kZWQgdG8gcmVkdWNlIHRoZSBhbW91bnRcbiAqIG9mIGJvaWxlcnBsYXRlIGNvZGUgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICovXG5mdW5jdGlvbiBjcmVhdGVGZXRjaChmZXRjaDogRmV0Y2gsIHsgYmFzZVVybCwgY29va2llIH06IE9wdGlvbnMpIHtcbiAgLy8gTk9URTogVHdlYWsgdGhlIGRlZmF1bHQgb3B0aW9ucyB0byBzdWl0ZSB5b3VyIGFwcGxpY2F0aW9uIG5lZWRzXG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBoYW5keSB3aXRoIEdyYXBoUUwgYmFja2VuZHNcbiAgICBtb2RlOiBiYXNlVXJsID8gJ2NvcnMnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBjcmVkZW50aWFsczogYmFzZVVybCA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKGNvb2tpZSA/IHsgQ29va2llOiBjb29raWUgfSA6IG51bGwpLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuICh1cmw6IHN0cmluZywgb3B0aW9uczogYW55KSA9PlxuICAgIHVybC5zdGFydHNXaXRoKCcvZ3JhcGhxbCcpIHx8IHVybC5zdGFydHNXaXRoKCcvYXBpJylcbiAgICAgID8gZmV0Y2goYCR7YmFzZVVybH0ke3VybH1gLCB7XG4gICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cy5oZWFkZXJzLFxuICAgICAgICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgOiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY3JlYXRlRmV0Y2guanMiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBHYW1lRW5naW5lIGZyb20gJ2dhbWUtZW5naW5lJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgVXNlciwgVXNlclByb2ZpbGUgfSBmcm9tICcuL2RhdGEvbW9kZWxzJztcblxuaW1wb3J0IHsgcmVkaXMsIHN1YnNjcmliZXIgfSBmcm9tICcuL3JlZGlzJztcblxuY29uc3QgcmUgPSBuZXcgUmVnRXhwKCdeKEJ8VylbYS16XSogd2lucyBieSAoW1xcXFxkXFxcXC5dKykgcG9pbnRzJyk7XG5cbmNvbnN0IGNoYW5uZWxzID0ge307XG5cbnN1YnNjcmliZXIub24oJ21lc3NhZ2UnLCAoY2hhbm5lbCwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCBjaGFuID0gY2hhbm5lbC5zcGxpdCgnOicpWzFdO1xuICBjaGFubmVsc1tjaGFuXS5mb3JFYWNoKHdzID0+IHtcbiAgICB3cy5zZW5kKG1lc3NhZ2UpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgcm91dGVyLndzKCcvY2hhbm5lbC86Y2hhbm5lbCcsICh3cywgcmVxKSA9PiB7XG4gICAgd3Mub24oJ21lc3NhZ2UnLCBkYXRhID0+IHtcbiAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHJlZGlzLmdldEFzeW5jKGBlbmdpbmU6JHt3cy5jaGFubmVsfWApLFxuICAgICAgICByZWRpcy5oZ2V0YWxsQXN5bmMoYGluZm86JHt3cy5jaGFubmVsfWApLFxuICAgICAgICByZWRpcy5scmFuZ2VBc3luYyhgbW92ZXM6JHt3cy5jaGFubmVsfWAsIDAsIC0xKSxcbiAgICAgIF0pLnRoZW4oKFtydWxlLCBpbmZvLCBtb3Zlc10pID0+IHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gbmV3IEdhbWVFbmdpbmVbcnVsZV0oaW5mbywgbW92ZXMubWFwKEpTT04ucGFyc2UpKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZW5naW5lW21zZy50eXBlXShcbiAgICAgICAgICBtc2cuY29sb3IsXG4gICAgICAgICAgbXNnLnBvc2l0aW9uICYmIG1zZy5wb3NpdGlvblswXSxcbiAgICAgICAgICBtc2cucG9zaXRpb24gJiYgbXNnLnBvc2l0aW9uWzFdLFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgICAodHlwZW9mIHJlc3VsdCA9PT0gJ2Jvb2xlYW4nICYmIHJlc3VsdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVkaXNcbiAgICAgICAgICAgIC5ycHVzaEFzeW5jKGBtb3Zlczoke3dzLmNoYW5uZWx9YCwgSlNPTi5zdHJpbmdpZnkobXNnKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlZGlzLnB1Ymxpc2hBc3luYyhcbiAgICAgICAgICAgICAgICBgY2hhbm5lbDoke3dzLmNoYW5uZWx9YCxcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBjb2RlOiAnb2snLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlbHRhJyxcbiAgICAgICAgICAgICAgICAgIG1vdmU6IG1zZyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Bhc3MnOlxuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuY3VycmVudENvbG9yKCkgIT09IEdhbWVFbmdpbmUuR28uQ09MT1IuQkxBQ0sgJiZcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmN1cnJlbnRDb2xvcigpICE9PSBHYW1lRW5naW5lLkdvLkNPTE9SLldISVRFXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goY29uZmlnLmdudWdvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9keTogZW5naW5lLnRvU2dmKCksXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gdGV4dC5tYXRjaChyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oc2V0QXN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5mbzoke3dzLmNoYW5uZWx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7clsxXX0rJHtyWzJdfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlzLnB1Ymxpc2hBc3luYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNoYW5uZWw6JHt3cy5jaGFubmVsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAnb2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYCR7clsxXX0rJHtyWzJdfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Jlc2lnbic6XG4gICAgICAgICAgICAgICAgICByZWRpc1xuICAgICAgICAgICAgICAgICAgICAuaHNldEFzeW5jKFxuICAgICAgICAgICAgICAgICAgICAgIGBpbmZvOiR7d3MuY2hhbm5lbH1gLFxuICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmNvbG9yID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLkJMQUNLID8gJ1crUicgOiAnQitSJ1xuICAgICAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZWRpcy5wdWJsaXNoQXN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICBgY2hhbm5lbDoke3dzLmNoYW5uZWx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogJ29rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc3VsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmNvbG9yID09PSBHYW1lRW5naW5lLkdvLkNPTE9SLkJMQUNLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdXK1InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdCK1InXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHdzLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgIGlmICh3cy5jaGFubmVsKSB7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBjaGFubmVsc1t3cy5jaGFubmVsXTtcbiAgICAgICAgY2hhbm5lbC5zcGxpY2UoY2hhbm5lbC5pbmRleE9mKHdzKSwgMSk7XG4gICAgICAgIGlmIChjaGFubmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSBjaGFubmVsc1t3cy5jaGFubmVsXTtcbiAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKGBjaGFubmVsOiR7d3MuY2hhbm5lbH1gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZGVsZXRlIHdzLmNoYW5uZWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAoKCkgPT4ge1xuICAgICAgLy8gcXVpdCBwcmV2IGNoYW5uZWxcbiAgICAgIGlmICghY2hhbm5lbHNbcmVxLnBhcmFtcy5jaGFubmVsXSkge1xuICAgICAgICBzdWJzY3JpYmVyLnN1YnNjcmliZShgY2hhbm5lbDoke3JlcS5wYXJhbXMuY2hhbm5lbH1gKTtcbiAgICAgICAgY2hhbm5lbHNbcmVxLnBhcmFtcy5jaGFubmVsXSA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKHdzLmNoYW5uZWwpIHtcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IGNoYW5uZWxzW3dzLmNoYW5uZWxdO1xuICAgICAgICBjaGFubmVsLnNwbGljZShjaGFubmVsLmluZGV4T2Yod3MpLCAxKTtcbiAgICAgIH1cbiAgICAgIC8vIHN1YnNjcmliZSB0byBuZXcgY2hhbm5lbFxuICAgICAgY2hhbm5lbHNbcmVxLnBhcmFtcy5jaGFubmVsXS5wdXNoKHdzKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgd3MuY2hhbm5lbCA9IHJlcS5wYXJhbXMuY2hhbm5lbDtcbiAgICAgIC8vIHNlbmQgbmV3IGdhbWUgaW5mb1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICByZWRpcy5nZXRBc3luYyhgZW5naW5lOiR7d3MuY2hhbm5lbH1gKSxcbiAgICAgICAgcmVkaXMuaGdldGFsbEFzeW5jKGBpbmZvOiR7d3MuY2hhbm5lbH1gKSxcbiAgICAgICAgcmVkaXMubHJhbmdlQXN5bmMoYG1vdmVzOiR7d3MuY2hhbm5lbH1gLCAwLCAtMSksXG4gICAgICBdKS50aGVuKChbZW5naW5lLCBpbmZvLCBtb3Zlc10pID0+IHtcbiAgICAgICAgVXNlci5maW5kQWxsKHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogeyAkaW46IFtpbmZvLmJsYWNrLCBpbmZvLndoaXRlXSB9IH0sXG4gICAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2Rpc3BsYXlOYW1lJywgJ3BpY3R1cmUnXSxcbiAgICAgICAgICAgICAgbW9kZWw6IFVzZXJQcm9maWxlLFxuICAgICAgICAgICAgICBhczogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSkudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgY29uc3QgcGxheWVycyA9IHVzZXJzLmZpbHRlcihlID0+IGUpLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHUgPSB1c2VyLmdldCh7IHBsYWluOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IHUuaWQsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB1LnByb2ZpbGUuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgIHBpY3R1cmU6IHUucHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcHJvZmlsZSA9IHt9O1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHByb2ZpbGUsIHtcbiAgICAgICAgICAgICAgW3BsYXllci5pZF06IHBsYXllcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3cy5zZW5kKFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBjb2RlOiAnb2snLFxuICAgICAgICAgICAgICB0eXBlOiAnaW5pdCcsXG4gICAgICAgICAgICAgIGdhbWU6IHtcbiAgICAgICAgICAgICAgICBlbmdpbmUsXG4gICAgICAgICAgICAgICAgbW92ZXM6IG1vdmVzLm1hcChKU09OLnBhcnNlKSxcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQ6IGluZm8ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgYm9hcmRzaXplOiBpbmZvLmJvYXJkc2l6ZSxcbiAgICAgICAgICAgICAgICAgIGJsYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmZvLmJsYWNrLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlW2luZm8uYmxhY2tdXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8uYmxhY2tdLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgOiAnW+m7keaji10nLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHByb2ZpbGVbaW5mby5ibGFja11cbiAgICAgICAgICAgICAgICAgICAgICA/IHByb2ZpbGVbaW5mby5ibGFja10ucGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgIDogJ2h0dHA6Ly93eC5xbG9nby5jbi9tbW9wZW4vamo0ZTY1eDBQeDJpYnhJOGNCc0xkeHVlT2liQ0xycUh2ZzlVOTFEdmswb2hqUUhnTzJkaWFzM0xpYUhhenN6bWgwQ0pYNHhoa25uZndpYnF3RHdXZkNCYVZQc2xnSWN5Qkc4MUEvNjQnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHdoaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmZvLndoaXRlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlW2luZm8ud2hpdGVdXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8ud2hpdGVdLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgOiAnW+eZveaji10nLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHByb2ZpbGVbaW5mby53aGl0ZV1cbiAgICAgICAgICAgICAgICAgICAgICA/IHByb2ZpbGVbaW5mby53aGl0ZV0ucGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgIDogJ2h0dHA6Ly93eC5xbG9nby5jbi9tbW9wZW4vamo0ZTY1eDBQeDJpYnhJOGNCc0xkeHVlT2liQ0xycUh2ZzlVOTFEdmswb2hqUUhnTzJkaWFzM0xpYUhhenN6bWgwQ0pYNHhoa25uZndpYnF3RHdXZkNCYVZQc2xnSWN5Qkc4MUEvNjQnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9KTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29ubmVjdGlvbi5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IERhdGFUeXBlIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vc2VxdWVsaXplJztcblxuY29uc3QgVXNlciA9IE1vZGVsLmRlZmluZShcbiAgJ1VzZXInLFxuICB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlLlVVSUQsXG4gICAgICBkZWZhdWx0VmFsdWU6IERhdGFUeXBlLlVVSURWMSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgfSxcblxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcoMjU1KSxcbiAgICAgIHZhbGlkYXRlOiB7IGlzRW1haWw6IHRydWUgfSxcbiAgICB9LFxuXG4gICAgZW1haWxDb25maXJtZWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlLkJPT0xFQU4sXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbmRleGVzOiBbeyBmaWVsZHM6IFsnZW1haWwnXSB9XSxcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvbW9kZWxzL1VzZXIuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBEYXRhVHlwZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3NlcXVlbGl6ZSc7XG5cbmNvbnN0IFVzZXJMb2dpbiA9IE1vZGVsLmRlZmluZSgnVXNlckxvZ2luJywge1xuICBuYW1lOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HKDUwKSxcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICB9LFxuXG4gIGtleToge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORygxMDApLFxuICAgIHByaW1hcnlLZXk6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL21vZGVscy9Vc2VyTG9naW4uanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBEYXRhVHlwZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3NlcXVlbGl6ZSc7XG5cbmNvbnN0IFVzZXJDbGFpbSA9IE1vZGVsLmRlZmluZSgnVXNlckNsYWltJywge1xuICB0eXBlOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HLFxuICB9LFxuXG4gIHZhbHVlOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDbGFpbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tb2RlbHMvVXNlckNsYWltLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgRGF0YVR5cGUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9zZXF1ZWxpemUnO1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9IE1vZGVsLmRlZmluZSgnVXNlclByb2ZpbGUnLCB7XG4gIHVzZXJJZDoge1xuICAgIHR5cGU6IERhdGFUeXBlLlVVSUQsXG4gICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgfSxcblxuICBkaXNwbGF5TmFtZToge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORygxMDApLFxuICB9LFxuXG4gIHBpY3R1cmU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcoMjU1KSxcbiAgfSxcblxuICBnZW5kZXI6IHtcbiAgICB0eXBlOiBEYXRhVHlwZS5TVFJJTkcoNTApLFxuICB9LFxuXG4gIGxvY2F0aW9uOiB7XG4gICAgdHlwZTogRGF0YVR5cGUuU1RSSU5HKDEwMCksXG4gIH0sXG5cbiAgd2Vic2l0ZToge1xuICAgIHR5cGU6IERhdGFUeXBlLlNUUklORygyNTUpLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL21vZGVscy9Vc2VyUHJvZmlsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZGlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkaXNcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vKipcbiAqIFBhc3Nwb3J0LmpzIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbi5cbiAqIFRoZSBkYXRhYmFzZSBzY2hlbWEgdXNlZCBpbiB0aGlzIHNhbXBsZSBpcyBhdmFpbGFibGUgYXRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tZW1iZXJzaGlwL21lbWJlcnNoaXAuZGIvdHJlZS9tYXN0ZXIvcG9zdGdyZXNcbiAqL1xuXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgYXMgV2VjaGF0U3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC13ZWNoYXQnO1xuaW1wb3J0IHsgVXNlciwgVXNlckxvZ2luLCBVc2VyQ2xhaW0sIFVzZXJQcm9maWxlIH0gZnJvbSAnLi9kYXRhL21vZGVscyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxucGFzc3BvcnQudXNlKFxuICBuZXcgV2VjaGF0U3RyYXRlZ3koXG4gICAge1xuICAgICAgYXBwSUQ6IGNvbmZpZy53ZWNoYXQuYXBwSWQsXG4gICAgICBhcHBTZWNyZXQ6IGNvbmZpZy53ZWNoYXQuYXBwU2VjcmV0LFxuICAgICAgY2FsbGJhY2tVUkw6ICdodHRwOi8vc2hvdXRhbndxLmNvbS9sb2dpbi93ZWNoYXQvcmV0dXJuJyxcbiAgICAgIGNsaWVudDogJ3dlY2hhdCcsXG4gICAgICBzY29wZTogJ3Nuc2FwaV91c2VyaW5mbycsXG4gICAgICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSxcbiAgICB9LFxuICAgIChyZXEsIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGV4cGlyZWRJbiwgZG9uZSkgPT4ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgICAgIGNvbnN0IGxvZ2luTmFtZSA9ICd3ZWNoYXQnO1xuICAgICAgY29uc3QgY2xhaW1UeXBlID0gJ3Vybjp3ZWNoYXQ6YWNjZXNzX3Rva2VuJztcbiAgICAgIGNvbnN0IGlkID0gcHJvZmlsZS51bmlvbmlkIHx8IHByb2ZpbGUub3BlbmlkO1xuICAgICAgY29uc3QgZm9vQmFyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAocmVxLnVzZXIpIHtcbiAgICAgICAgICBjb25zdCB1c2VyTG9naW4gPSBhd2FpdCBVc2VyTG9naW4uZmluZE9uZSh7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ25hbWUnLCAna2V5J10sXG4gICAgICAgICAgICB3aGVyZTogeyBuYW1lOiBsb2dpbk5hbWUsIGtleTogaWQgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodXNlckxvZ2luKSB7XG4gICAgICAgICAgICAvLyBUaGVyZSBpcyBhbHJlYWR5IGEgRmFjZWJvb2sgYWNjb3VudCB0aGF0IGJlbG9uZ3MgdG8geW91LlxuICAgICAgICAgICAgLy8gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LlxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogcmVxLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgZW1haWw6IGAke2lkfUB3ZWNoYXQuYWNjb3VudC5zaG91dGFud3EuY29tLmAsXG4gICAgICAgICAgICAgICAgbG9naW5zOiBbeyBuYW1lOiBsb2dpbk5hbWUsIGtleTogaWQgfV0sXG4gICAgICAgICAgICAgICAgY2xhaW1zOiBbeyB0eXBlOiBjbGFpbVR5cGUsIHZhbHVlOiBpZCB9XSxcbiAgICAgICAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZS5uaWNrbmFtZSxcbiAgICAgICAgICAgICAgICAgIGdlbmRlcjogcHJvZmlsZS5zZXgsXG4gICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwcm9maWxlLmhlYWRpbWd1cmwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgICAgICAgIHsgbW9kZWw6IFVzZXJMb2dpbiwgYXM6ICdsb2dpbnMnIH0sXG4gICAgICAgICAgICAgICAgICB7IG1vZGVsOiBVc2VyQ2xhaW0sIGFzOiAnY2xhaW1zJyB9LFxuICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlclByb2ZpbGUsIGFzOiAncHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvbmUobnVsbCwge1xuICAgICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmRBbGwoe1xuICAgICAgICAgICAgYXR0cmlidXRlczogWydpZCcsICdlbWFpbCddLFxuICAgICAgICAgICAgd2hlcmU6IHsgJyRsb2dpbnMubmFtZSQnOiBsb2dpbk5hbWUsICckbG9naW5zLmtleSQnOiBpZCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogWyduYW1lJywgJ2tleSddLFxuICAgICAgICAgICAgICAgIG1vZGVsOiBVc2VyTG9naW4sXG4gICAgICAgICAgICAgICAgYXM6ICdsb2dpbnMnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdXNlcnNbMF0uZ2V0KHsgcGxhaW46IHRydWUgfSk7XG4gICAgICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBgJHtpZH1Ad2VjaGF0LmFjY291bnQuc2hvdXRhbndxLmNvbWAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IHVzaW5nIHRoaXMgZW1haWwgYWRkcmVzcy4gU2lnbiBpbiB0b1xuICAgICAgICAgICAgICAvLyB0aGF0IGFjY291bnQgYW5kIGxpbmsgaXQgd2l0aCBGYWNlYm9vayBtYW51YWxseSBmcm9tIEFjY291bnQgU2V0dGluZ3MuXG4gICAgICAgICAgICAgIGRvbmUobnVsbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW1haWw6IGAke2lkfUB3ZWNoYXQuYWNjb3VudC5zaG91dGFud3EuY29tYCxcbiAgICAgICAgICAgICAgICAgIGVtYWlsQ29uZmlybWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbG9naW5zOiBbeyBuYW1lOiBsb2dpbk5hbWUsIGtleTogaWQgfV0sXG4gICAgICAgICAgICAgICAgICBjbGFpbXM6IFt7IHR5cGU6IGNsYWltVHlwZSwgdmFsdWU6IGFjY2Vzc1Rva2VuIH1dLFxuICAgICAgICAgICAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZS5uaWNrbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOiBwcm9maWxlLnNleCxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogcHJvZmlsZS5oZWFkaW1ndXJsLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlckxvZ2luLCBhczogJ2xvZ2lucycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlckNsYWltLCBhczogJ2NsYWltcycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlbDogVXNlclByb2ZpbGUsIGFzOiAncHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZG9uZShudWxsLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvb0JhcigpLmNhdGNoKGRvbmUpO1xuICAgIH0sXG4gICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwYXNzcG9ydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGFzc3BvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0XCJcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LXdlY2hhdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0LXdlY2hhdFwiXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBVbml2ZXJzYWxSb3V0ZXIgZnJvbSAndW5pdmVyc2FsLXJvdXRlcic7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbml2ZXJzYWxSb3V0ZXIocm91dGVzLCB7XG4gIHJlc29sdmVSb3V0ZShjb250ZXh0LCBwYXJhbXMpIHtcbiAgICBpZiAoY29udGV4dC5yb3V0ZS5wcm90ZWN0ZWQgJiYgIWNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS51c2VyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdDogJy9sb2dpbi93ZWNoYXQnLFxuICAgICAgICBmcm9tOiBgJHtjb250ZXh0LnBhdGhuYW1lfT8ke3F1ZXJ5c3RyaW5nLnN0cmluZ2lmeShjb250ZXh0LnF1ZXJ5KX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LnJvdXRlXG4gICAgICAgIC5sb2FkKClcbiAgICAgICAgLnRoZW4oYWN0aW9uID0+IGFjdGlvbi5kZWZhdWx0KGNvbnRleHQsIHBhcmFtcykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5yb3V0ZS5hY3Rpb24oY29udGV4dCwgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidW5pdmVyc2FsLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbi8vIFRoZSB0b3AtbGV2ZWwgKHBhcmVudCkgcm91dGVcbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJycsXG5cbiAgLy8gS2VlcCBpbiBtaW5kLCByb3V0ZXMgYXJlIGV2YWx1YXRlZCBpbiBvcmRlclxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdob21lJyAqLyAnLi9ob21lJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbG9naW4nICovICcuL2xvZ2luJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWJvdXQnICovICcuL2Fib3V0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2FkbWluJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWRtaW4nICovICcuL2FkbWluJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2dvJyxcbiAgICAgIHByb3RlY3RlZDogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnL2NyZWF0aW9uJyxcbiAgICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdnby1jcmVhdGlvbicgKi8gJy4vZ28tY3JlYXRpb24nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnZ28nICovICcuL2dvJyksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8gV2lsZGNhcmQgcm91dGVzLCBlLmcuIHsgcGF0aDogJyguKiknLCAuLi4gfSAobXVzdCBnbyBsYXN0KVxuICAgIHtcbiAgICAgIHBhdGg6ICcoLiopJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbm90LWZvdW5kJyAqLyAnLi9ub3QtZm91bmQnKSxcbiAgICB9LFxuICBdLFxuXG4gIGFzeW5jIGFjdGlvbih7IG5leHQgfSkge1xuICAgIC8vIEV4ZWN1dGUgZWFjaCBjaGlsZCByb3V0ZSB1bnRpbCBvbmUgb2YgdGhlbSByZXR1cm4gdGhlIHJlc3VsdFxuICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgbmV4dCgpO1xuXG4gICAgLy8gUHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgdGl0bGUsIGRlc2NyaXB0aW9uIGV0Yy5cbiAgICByb3V0ZS50aXRsZSA9IGAke3JvdXRlLnRpdGxlIHx8ICdVbnRpdGxlZCBQYWdlJ30gLSDmiYvosIjlm7Tmo4tgO1xuICAgIHJvdXRlLmRlc2NyaXB0aW9uID0gcm91dGUuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgICByZXR1cm4gcm91dGU7XG4gIH0sXG59O1xuXG4vLyBUaGUgZXJyb3IgcGFnZSBpcyBhdmFpbGFibGUgYnkgcGVybWFuZW50IHVybCBmb3IgZGV2ZWxvcG1lbnQgbW9kZVxuaWYgKF9fREVWX18pIHtcbiAgcm91dGVzLmNoaWxkcmVuLnVuc2hpZnQoe1xuICAgIHBhdGg6ICcvZXJyb3InLFxuICAgIGFjdGlvbjogcmVxdWlyZSgnLi9lcnJvcicpLmRlZmF1bHQsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9pbmRleC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9FcnJvclBhZ2UnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdEZW1vIEVycm9yJyxcbiAgICBjb21wb25lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2Vycm9yL2luZGV4LmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQge1xuICBHcmFwaFFMU2NoZW1hIGFzIFNjaGVtYSxcbiAgR3JhcGhRTE9iamVjdFR5cGUgYXMgT2JqZWN0VHlwZSxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCBtZSBmcm9tICcuL3F1ZXJpZXMvbWUnO1xuaW1wb3J0IG5ld3MgZnJvbSAnLi9xdWVyaWVzL25ld3MnO1xuaW1wb3J0IHdlY2hhdCBmcm9tICcuL3F1ZXJpZXMvd2VjaGF0JztcblxuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL211dGF0aW9ucy9jcmVhdGUnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL211dGF0aW9ucy91cGRhdGUnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgcXVlcnk6IG5ldyBPYmplY3RUeXBlKHtcbiAgICBuYW1lOiAnUXVlcnknLFxuICAgIGZpZWxkczoge1xuICAgICAgbWUsXG4gICAgICBuZXdzLFxuICAgICAgd2VjaGF0LFxuICAgIH0sXG4gIH0pLFxuICBtdXRhdGlvbjogbmV3IE9iamVjdFR5cGUoe1xuICAgIG5hbWU6ICdNdXRhdGlvbicsXG4gICAgZmllbGRzOiB7XG4gICAgICBjcmVhdGVHbzogY3JlYXRlLFxuICAgICAgdXBkYXRlR286IHVwZGF0ZSxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvc2NoZW1hLmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgVXNlclR5cGUgZnJvbSAnLi4vdHlwZXMvVXNlclR5cGUnO1xuXG5jb25zdCBtZSA9IHtcbiAgdHlwZTogVXNlclR5cGUsXG4gIHJlc29sdmUoeyByZXF1ZXN0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmVxdWVzdC51c2VyICYmIHtcbiAgICAgICAgaWQ6IHJlcXVlc3QudXNlci5pZCxcbiAgICAgICAgZW1haWw6IHJlcXVlc3QudXNlci5lbWFpbCxcbiAgICAgIH1cbiAgICApO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvcXVlcmllcy9tZS5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTE9iamVjdFR5cGUgYXMgT2JqZWN0VHlwZSxcbiAgR3JhcGhRTElEIGFzIElELFxuICBHcmFwaFFMU3RyaW5nIGFzIFN0cmluZ1R5cGUsXG4gIEdyYXBoUUxOb25OdWxsIGFzIE5vbk51bGwsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBVc2VyVHlwZSA9IG5ldyBPYmplY3RUeXBlKHtcbiAgbmFtZTogJ1VzZXInLFxuICBmaWVsZHM6IHtcbiAgICBpZDogeyB0eXBlOiBuZXcgTm9uTnVsbChJRCkgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmdUeXBlIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvdHlwZXMvVXNlclR5cGUuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IEdyYXBoUUxMaXN0IGFzIExpc3QgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBOZXdzSXRlbVR5cGUgZnJvbSAnLi4vdHlwZXMvTmV3c0l0ZW1UeXBlJztcblxuLy8gUmVhY3QuanMgTmV3cyBGZWVkIChSU1MpXG5jb25zdCB1cmwgPVxuICAnaHR0cHM6Ly9hcGkucnNzMmpzb24uY29tL3YxL2FwaS5qc29uJyArXG4gICc/cnNzX3VybD1odHRwcyUzQSUyRiUyRnJlYWN0anNuZXdzLmNvbSUyRmZlZWQueG1sJztcblxubGV0IGl0ZW1zID0gW107XG5sZXQgbGFzdEZldGNoVGFzaztcbmxldCBsYXN0RmV0Y2hUaW1lID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XG5cbmNvbnN0IG5ld3MgPSB7XG4gIHR5cGU6IG5ldyBMaXN0KE5ld3NJdGVtVHlwZSksXG4gIHJlc29sdmUoKSB7XG4gICAgaWYgKGxhc3RGZXRjaFRhc2spIHtcbiAgICAgIHJldHVybiBsYXN0RmV0Y2hUYXNrO1xuICAgIH1cblxuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEZldGNoVGltZSA+IDEwMDAgKiA2MCAqIDEwIC8qIDEwIG1pbnMgKi8pIHtcbiAgICAgIGxhc3RGZXRjaFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGFzdEZldGNoVGFzayA9IGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdvaycpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gZGF0YS5pdGVtcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsYXN0RmV0Y2hUYXNrID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGxhc3RGZXRjaFRhc2sgPSBudWxsO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGFzdEZldGNoVGFzaztcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL3F1ZXJpZXMvbmV3cy5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTE9iamVjdFR5cGUgYXMgT2JqZWN0VHlwZSxcbiAgR3JhcGhRTFN0cmluZyBhcyBTdHJpbmdUeXBlLFxuICBHcmFwaFFMTm9uTnVsbCBhcyBOb25OdWxsLFxufSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgTmV3c0l0ZW1UeXBlID0gbmV3IE9iamVjdFR5cGUoe1xuICBuYW1lOiAnTmV3c0l0ZW0nLFxuICBmaWVsZHM6IHtcbiAgICB0aXRsZTogeyB0eXBlOiBuZXcgTm9uTnVsbChTdHJpbmdUeXBlKSB9LFxuICAgIGxpbms6IHsgdHlwZTogbmV3IE5vbk51bGwoU3RyaW5nVHlwZSkgfSxcbiAgICBhdXRob3I6IHsgdHlwZTogU3RyaW5nVHlwZSB9LFxuICAgIHB1YkRhdGU6IHsgdHlwZTogbmV3IE5vbk51bGwoU3RyaW5nVHlwZSkgfSxcbiAgICBjb250ZW50OiB7IHR5cGU6IFN0cmluZ1R5cGUgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzSXRlbVR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvdHlwZXMvTmV3c0l0ZW1UeXBlLmpzIiwiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcbmltcG9ydCB7IEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgV2VjaGF0VHlwZSBmcm9tICcuLi90eXBlcy9XZWNoYXRUeXBlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IHJlZGlzIH0gZnJvbSAnLi4vLi4vcmVkaXMnO1xuXG5jb25zdCBzaWduID0gZnVuY3Rpb24ocGF5bG9hZCkge1xuICBjb25zdCBhbGdvID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTEnKTtcbiAgY29uc3Qgb3JkZXJlZCA9IHt9O1xuICBPYmplY3Qua2V5cyhwYXlsb2FkKVxuICAgIC5zb3J0KClcbiAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHBheWxvYWRba2V5XSAmJiBrZXkgIT09ICdzaWduYXR1cmUnKSB7XG4gICAgICAgIG9yZGVyZWRba2V5XSA9IHBheWxvYWRba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgY29uc3Qgc3RyaW5nQSA9IHF1ZXJ5c3RyaW5nLnVuZXNjYXBlKHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShvcmRlcmVkKSk7XG4gIGFsZ28udXBkYXRlKHN0cmluZ0EpO1xuICByZXR1cm4gYWxnby5kaWdlc3QoJ2hleCcpO1xufTtcblxuY29uc3Qgd2VjaGF0ID0ge1xuICB0eXBlOiBXZWNoYXRUeXBlLFxuICBhcmdzOiB7XG4gICAgdXJsOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxuICB9LFxuICByZXNvbHZlKHJvb3QsIHsgdXJsIH0pIHtcbiAgICByZXR1cm4gcmVkaXNcbiAgICAgIC5nZXRBc3luYygnanNhcGlfdGlja2V0JylcbiAgICAgIC50aGVuKHRpY2tldCA9PiB7XG4gICAgICAgIGlmICghdGlja2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlZGlzXG4gICAgICAgICAgICAuZ2V0QXN5bmMoJ3dlY2hhdF9hY2Nlc3NUb2tlbicpXG4gICAgICAgICAgICAudGhlbihhY2Nlc3NUb2tlbiA9PiB7XG4gICAgICAgICAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9jZ2ktYmluL3Rva2VuP2dyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWwmYXBwaWQ9JHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLndlY2hhdC5hcHBJZFxuICAgICAgICAgICAgICAgICAgfSZzZWNyZXQ9JHtjb25maWcud2VjaGF0LmFwcFNlY3JldH1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT5cbiAgICAgICAgICAgICAgICAgICAgcmVkaXNcbiAgICAgICAgICAgICAgICAgICAgICAuc2V0ZXhBc3luYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICd3ZWNoYXRfYWNjZXNzVG9rZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbi5leHBpcmVzX2luLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbi5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGpzb24uYWNjZXNzX3Rva2VuKSxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGFjY2Vzc1Rva2VuID0+XG4gICAgICAgICAgICAgIGZldGNoKFxuICAgICAgICAgICAgICAgIGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL2NnaS1iaW4vdGlja2V0L2dldHRpY2tldD9hY2Nlc3NfdG9rZW49JHthY2Nlc3NUb2tlbn0mdHlwZT1qc2FwaWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PlxuICAgICAgICAgICAgICAgICAgcmVkaXNcbiAgICAgICAgICAgICAgICAgICAgLnNldGV4QXN5bmMoJ2pzYXBpX3RpY2tldCcsIGpzb24uZXhwaXJlc19pbiwganNvbi50aWNrZXQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGpzb24udGlja2V0KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlja2V0O1xuICAgICAgfSlcbiAgICAgIC50aGVuKHRpY2tldCA9PiB7XG4gICAgICAgIGNvbnN0IG5vbmNlc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHNpZ24oe1xuICAgICAgICAgIGpzYXBpX3RpY2tldDogdGlja2V0LFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBub25jZXN0cixcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFwcElkOiBjb25maWcud2VjaGF0LmFwcElkLFxuICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICBub25jZVN0cjogbm9uY2VzdHIsXG4gICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWNoYXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGEvcXVlcmllcy93ZWNoYXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjcnlwdG9cIlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgV2VjaGF0VHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdXZWNoYXQnLFxuICBmaWVsZHM6IHtcbiAgICBhcHBJZDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICB9LFxuICAgIHRpbWVzdGFtcDoge1xuICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICB9LFxuICAgIG5vbmNlU3RyOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgIH0sXG4gICAgc2lnbmF0dXJlOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgV2VjaGF0VHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS90eXBlcy9XZWNoYXRUeXBlLmpzIiwiaW1wb3J0IHtcbiAgR3JhcGhRTFN0cmluZyxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxGbG9hdCxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgR29UeXBlIGZyb20gJy4uL3R5cGVzL0dvVHlwZSc7XG5cbmltcG9ydCB7IHJlZGlzIH0gZnJvbSAnLi4vLi4vcmVkaXMnO1xuXG5jb25zdCBjcmVhdGVHbyA9IHtcbiAgdHlwZTogR29UeXBlLFxuICBhcmdzOiB7XG4gICAgcnVsZTogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAgICBib2FyZHNpemU6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSxcbiAgICB9LFxuICAgIGhhbmRpY2FwOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgIH0sXG4gICAga29taToge1xuICAgICAgdHlwZTogR3JhcGhRTEZsb2F0LFxuICAgIH0sXG4gICAgY29sb3I6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICB9LFxuICByZXNvbHZlOiAocm9vdCwgeyBydWxlLCBib2FyZHNpemUsIGhhbmRpY2FwLCBrb21pLCBjb2xvciB9KSA9PiB7XG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3BsaXQoJy4nKVsxXTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgcmVkaXMuc2V0QXN5bmMoYGVuZ2luZToke2lkfWAsIHJ1bGUpLFxuICAgICAgcmVkaXMuaG1zZXRBc3luYyhcbiAgICAgICAgYGluZm86JHtpZH1gLFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvYXJkc2l6ZSxcbiAgICAgICAgICAgIGhhbmRpY2FwOiBoYW5kaWNhcCB8fCAwLFxuICAgICAgICAgICAga29taToga29taSB8fCA2LjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb2xvciA9PT0gJ2JsYWNrJ1xuICAgICAgICAgICAgPyB7IGJsYWNrOiByb290LnJlcXVlc3QudXNlci5pZCB9XG4gICAgICAgICAgICA6IHsgd2hpdGU6IHJvb3QucmVxdWVzdC51c2VyLmlkIH0sXG4gICAgICAgICksXG4gICAgICApLFxuICAgIF0pLnRoZW4oKCkgPT4gKHtcbiAgICAgIGlkLFxuICAgICAgZW5naW5lOiBydWxlLFxuICAgICAgaW5mbzoge1xuICAgICAgICBib2FyZHNpemUsXG4gICAgICAgIGJsYWNrOiBjb2xvciA9PT0gJ2JsYWNrJyA/IHJvb3QucmVxdWVzdC51c2VyLmlkIDogbnVsbCxcbiAgICAgICAgd2hpdGU6IGNvbG9yID09PSAnd2hpdGUnID8gcm9vdC5yZXF1ZXN0LnVzZXIuaWQgOiBudWxsLFxuICAgICAgfSxcbiAgICB9KSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tdXRhdGlvbnMvY3JlYXRlLmpzIiwiaW1wb3J0IHsgR3JhcGhRTFN0cmluZywgR3JhcGhRTE5vbk51bGwgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBHb1R5cGUgZnJvbSAnLi4vdHlwZXMvR29UeXBlJztcblxuaW1wb3J0IHsgcmVkaXMgfSBmcm9tICcuLi8uLi9yZWRpcyc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyUHJvZmlsZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IHVwZGF0ZUdvID0ge1xuICB0eXBlOiBHb1R5cGUsXG4gIGFyZ3M6IHtcbiAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAgICBjb2xvcjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gIH0sXG4gIHJlc29sdmU6IChyb290LCB7IGlkLCBjb2xvciB9KSA9PlxuICAgIHJlZGlzXG4gICAgICAuaG1nZXRBc3luYyhgaW5mbzoke2lkfWAsIGNvbG9yLCAnYmxhY2snLCAnd2hpdGUnKVxuICAgICAgLnRoZW4oKFtyLCBibGFjaywgd2hpdGVdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhciAmJlxuICAgICAgICAgIHJvb3QucmVxdWVzdC51c2VyICYmXG4gICAgICAgICAgYmxhY2sgIT09IHJvb3QucmVxdWVzdC51c2VyLmlkICYmXG4gICAgICAgICAgd2hpdGUgIT09IHJvb3QucmVxdWVzdC51c2VyLmlkXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiByZWRpcy5oc2V0QXN5bmMoYGluZm86JHtpZH1gLCBjb2xvciwgcm9vdC5yZXF1ZXN0LnVzZXIuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICB9KVxuICAgICAgLy8gcHVibGlzaCBqb2luXG4gICAgICAudGhlbigoKSA9PlxuICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgcmVkaXMuZ2V0QXN5bmMoYGVuZ2luZToke2lkfWApLFxuICAgICAgICAgIHJlZGlzLmhnZXRhbGxBc3luYyhgaW5mbzoke2lkfWApLFxuICAgICAgICAgIHJlZGlzLmxyYW5nZUFzeW5jKGBtb3Zlczoke2lkfWAsIDAsIC0xKSxcbiAgICAgICAgXSkudGhlbigoW2VuZ2luZSwgaW5mbywgbW92ZXNdKSA9PlxuICAgICAgICAgIFVzZXIuZmluZEFsbCh7XG4gICAgICAgICAgICB3aGVyZTogeyBpZDogeyAkaW46IFtpbmZvLmJsYWNrLCBpbmZvLndoaXRlXSB9IH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2Rpc3BsYXlOYW1lJywgJ3BpY3R1cmUnXSxcbiAgICAgICAgICAgICAgICBtb2RlbDogVXNlclByb2ZpbGUsXG4gICAgICAgICAgICAgICAgYXM6ICdwcm9maWxlJyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSkudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gdXNlcnMuZmlsdGVyKGUgPT4gZSkubWFwKHVzZXIgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB1ID0gdXNlci5nZXQoeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdS5pZCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogdS5wcm9maWxlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHUucHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcHJvZmlsZSA9IHt9O1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHByb2ZpbGUsIHtcbiAgICAgICAgICAgICAgICBbcGxheWVyLmlkXTogcGxheWVyLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWRpc1xuICAgICAgICAgICAgICAucHVibGlzaEFzeW5jKFxuICAgICAgICAgICAgICAgIGBjaGFubmVsOiR7aWR9YCxcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBjb2RlOiAnb2snLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2luaXQnLFxuICAgICAgICAgICAgICAgICAgZ2FtZToge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVzOiBtb3Zlcy5tYXAoSlNPTi5wYXJzZSksXG4gICAgICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICBib2FyZHNpemU6IGluZm8uYm9hcmRzaXplLFxuICAgICAgICAgICAgICAgICAgICAgIGJsYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaW5mby5ibGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGVbaW5mby5ibGFja11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8uYmxhY2tdLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1vpu5Hmo4tdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogcHJvZmlsZVtpbmZvLmJsYWNrXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2ZpbGVbaW5mby5ibGFja10ucGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwOi8vd3gucWxvZ28uY24vbW1vcGVuL2pqNGU2NXgwUHgyaWJ4SThjQnNMZHh1ZU9pYkNMcnFIdmc5VTkxRHZrMG9oalFIZ08yZGlhczNMaWFIYXpzem1oMENKWDR4aGtubmZ3aWJxd0R3V2ZDQmFWUHNsZ0ljeUJHODFBLzY0JyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaW5mby53aGl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGVbaW5mby53aGl0ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9maWxlW2luZm8ud2hpdGVdLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1vnmb3mo4tdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogcHJvZmlsZVtpbmZvLndoaXRlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2ZpbGVbaW5mby53aGl0ZV0ucGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwOi8vd3gucWxvZ28uY24vbW1vcGVuL2pqNGU2NXgwUHgyaWJ4SThjQnNMZHh1ZU9pYkNMcnFIdmc5VTkxRHZrMG9oalFIZ08yZGlhczNMaWFIYXpzem1oMENKWDR4aGtubmZ3aWJxd0R3V2ZDQmFWUHNsZ0ljeUJHODFBLzY0JyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudGhlbigoKSA9PiBQcm9taXNlLnJlc29sdmUoW2VuZ2luZSwgaW5mb10pKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC8vIHJldHVybiBpbmZvXG4gICAgICAudGhlbigoW2VuZ2luZSwgaW5mb10pID0+ICh7XG4gICAgICAgIGlkLFxuICAgICAgICBlbmdpbmUsXG4gICAgICAgIGluZm8sXG4gICAgICB9KSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9tdXRhdGlvbnMvdXBkYXRlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hc3NldHMuanNvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vYXNzZXRzLmpzb25cIlxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcblxuICBsZXQgZW5oYW5jZXI7XG5cbiAgaWYgKF9fREVWX18pIHtcbiAgICBtaWRkbGV3YXJlLnB1c2goY3JlYXRlTG9nZ2VyKCkpO1xuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3phbG1veGlzdXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uI3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvblxuICAgIGxldCBkZXZUb29sc0V4dGVuc2lvbiA9IGYgPT4gZjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUiAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24pIHtcbiAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCk7XG4gICAgfVxuXG4gICAgZW5oYW5jZXIgPSBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSwgZGV2VG9vbHNFeHRlbnNpb24pO1xuICB9IGVsc2Uge1xuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xuICB9XG5cbiAgY29uc3Qgcm9vdFJlZHVjZXIgPSBjcmVhdGVSb290UmVkdWNlcigpO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvcmVsZWFzZXMvdGFnL3YzLjEuMFxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuICAvLyBIb3QgcmVsb2FkIHJlZHVjZXJzIChyZXF1aXJlcyBXZWJwYWNrIG9yIEJyb3dzZXJpZnkgSE1SIHRvIGJlIGVuYWJsZWQpXG4gIGlmIChfX0RFVl9fICYmIG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihyZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHQpLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gc3RvcmU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBydW50aW1lIGZyb20gJy4vcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJvb3RSZWR1Y2VyKCkge1xuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcbiAgICB1c2VyLFxuICAgIHJ1bnRpbWUsXG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXIoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHVjZXJzL3VzZXIuanMiLCJpbXBvcnQgeyBTRVRfUlVOVElNRV9WQVJJQUJMRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bnRpbWUoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9SVU5USU1FX1ZBUklBQkxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5uYW1lXTogYWN0aW9uLnBheWxvYWQudmFsdWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkdWNlcnMvcnVudGltZS5qcyIsImltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJztcblxuZnVuY3Rpb24gaW5zcGVjdE9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIGluc3BlY3Qob2JqZWN0LCB7XG4gICAgY29sb3JzOiB0cnVlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlTGluZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG59XG5cbmNvbnN0IGFjdGlvbkZvcm1hdHRlcnMgPSB7XG4gIC8vIFRoaXMgaXMgdXNlZCBhdCBmZWF0dXJlL2Fwb2xsbyBicmFuY2gsIGJ1dCBpdCBjYW4gaGVscCB5b3Ugd2hlbiBpbXBsZW1lbnRpbmcgQXBvbGxvXG4gIEFQT0xMT19RVUVSWV9JTklUOiBhID0+XG4gICAgYHF1ZXJ5SWQ6JHthLnF1ZXJ5SWR9IHZhcmlhYmxlczoke2luc3BlY3RPYmplY3QoXG4gICAgICBhLnZhcmlhYmxlcyxcbiAgICApfVxcbiAgICR7c2luZ2xlTGluZShhLnF1ZXJ5U3RyaW5nKX1gLFxuXG4gIEFQT0xMT19RVUVSWV9SRVNVTFQ6IGEgPT5cbiAgICBgcXVlcnlJZDoke2EucXVlcnlJZH1cXG4gICAke3NpbmdsZUxpbmUoaW5zcGVjdE9iamVjdChhLnJlc3VsdCkpfWAsXG5cbiAgQVBPTExPX1FVRVJZX1NUT1A6IGEgPT4gYHF1ZXJ5SWQ6JHthLnF1ZXJ5SWR9YCxcbn07XG5cbi8vIFNlcnZlciBzaWRlIHJlZHV4IGFjdGlvbiBsb2dnZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcigpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgbGV0IGZvcm1hdHRlZFBheWxvYWQgPSAnJztcbiAgICBjb25zdCBhY3Rpb25Gb3JtYXR0ZXIgPSBhY3Rpb25Gb3JtYXR0ZXJzW2FjdGlvbi50eXBlXTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9ybWF0dGVkUGF5bG9hZCA9IGFjdGlvbkZvcm1hdHRlcihhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICBmb3JtYXR0ZWRQYXlsb2FkID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uLnBheWxvYWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3JtYXR0ZWRQYXlsb2FkID0gaW5zcGVjdE9iamVjdChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZFBheWxvYWQgPSBpbnNwZWN0T2JqZWN0KGFjdGlvbik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYCAqICR7YWN0aW9uLnR5cGV9OiAke2Zvcm1hdHRlZFBheWxvYWR9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2xvZ2dlci9sb2dnZXIuc2VydmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyBTRVRfUlVOVElNRV9WQVJJQUJMRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSdW50aW1lVmFyaWFibGUoeyBuYW1lLCB2YWx1ZSB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1JVTlRJTUVfVkFSSUFCTEUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FjdGlvbnMvcnVudGltZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXMvYmluZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXMvYmluZFwiXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS9TZWxlY3RGaWVsZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hdGVyaWFsLXVpL1NlbGVjdEZpZWxkXCJcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hdGVyaWFsLXVpL01lbnVJdGVtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIlxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCJcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3dlZXRhbGVydDJcIlxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtd2Vic29ja2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtd2Vic29ja2V0XCJcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekZBOzs7Ozs7QUNBQTs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQTdCQTs7Ozs7O0FDakJBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7Ozs7QUNsQkE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7O0FDYkE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQ3hDQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE3QkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7O0FBREE7Ozs7QUFTQTtBQUNBO0FBREE7O0FBdUJBO0FBQ0E7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBUEE7QUFGQTtBQURBO0FBUEE7QUFGQTtBQTRCQTs7Ozs7O0FDbkNBOzs7Ozs7O0FDQUE7QUFBQTtBQUVBOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzNIQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBR0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBcENBO0FBQUE7QUFvREE7QUFDQTtBQUhBO0FBQ0E7QUFuREE7QUFrREE7QUFDQTtBQW5EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE1REE7QUFDQTtBQURBO0FBZ0VBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2RUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBbUZBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUExR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBNEdBO0FBQ0E7QUE3R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaUhBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdFNBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7QUM1QkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFWQTtBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7QUFwQkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBREE7Ozs7QUFNQTs7QUFpQkE7Ozs7OztBQ3hFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBOzs7O0FBM0VBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFYQTs7QUFEQTs7OztBQWVBO0FBQ0E7QUFDQTtBQUZBOztBQStEQTs7Ozs7O0FDOUZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7O0FBa0JBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFQQTtBQVdBO0FBQUE7QUFLQTtBQUhBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0RBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFXQTtBQUFBO0FBQ0E7QUFHQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBWkE7QUFIQTtBQUhBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ROQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFaQTtBQWtCQTtBQUFBO0FBQUE7QUFEQTtBQUtBOzs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVlBOzs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUF0QkE7QUEyQkE7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUFTQTs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUhBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQXhCQTtBQVdBO0FBb0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFoQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFzQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBQ0E7QUF0Q0E7QUFxQ0E7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaURBO0FBQUE7QUFBQTtBQUNBO0FBbkRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXNEQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBdERBO0FBcURBO0FBQ0E7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdEQTtBQUNBO0FBQ0E7QUEzREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBMUVBO0FBNkRBO0FBb0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3RkE7QUFDQTtBQUlBOzs7Ozs7QUNqSUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWpCQTs7Ozs7O0FDYkE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBLDhGQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFUQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkNBO0FBM0NBO0FBQUE7QUFDQTtBQURBO0FBNkNBO0FBRUE7QUFDQTtBQUNBO0FBakRBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBVEE7QUFrQkE7Ozs7Ozs7QUN2Q0E7QUFBQTs7Ozs7Ozs7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQVRBO0FBWUE7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQVFBOzs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFtQ0E7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQVdBOzs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUhBO0FBTEE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBOURBO0FBaUVBOzs7Ozs7QUN4RkE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUZBO0FBa0JBOzs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQUFBO0FBU0E7QUEzQ0E7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBWkE7QUFjQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUFBQTtBQUNBO0FBR0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFYQTtBQUhBO0FBSEE7QUE4QkE7QUFBQTtBQUNBO0FBN0RBO0FBTEE7QUFkQTtBQW9GQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQXJGQTtBQU5BO0FBa0dBOzs7Ozs7QUN4R0E7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVBBO0FBU0E7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBVkE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBZkE7QUFBQTtBQWdCQTs7Ozs7O0FDNUNBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOzs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==