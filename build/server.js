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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(59);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(58);
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
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(50);
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
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_RUNTIME_VARIABLE; });
/* eslint-disable import/prefer-default-export */
var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("game-engine");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(23);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connect_redis__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connect_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_connect_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_ws__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie_parser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_express_jwt__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express_graphql__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jsonwebtoken__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pretty_error__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_compression__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_createApolloClient__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_App__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Html__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__createFetch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__connection__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__passport__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_models__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__data_schema__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__assets_json__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__store_configureStore__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__actions_runtime__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__config__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

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
  maxAge:  false ? 0 : '1y'
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

if (false) {
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
    graphiql: false,
    rootValue: {
      request: req
    },
    pretty: false
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
            rootComponent = _jsx(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles_MuiThemeProvider___default.a, {
              muiTheme: __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_getMuiTheme___default()({
                userAgent: req.headers['user-agent']
              })
            }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_20__components_App__["a" /* default */], {
              context: context,
              store: store,
              userAgent: req.headers['user-agent']
            }, void 0, route.component));
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

            if (false) {
              // eslint-disable-next-line no-console
              console.log('Serializing store...');
            }

            data.app = {
              apiUrl: __WEBPACK_IMPORTED_MODULE_34__config___default.a.api.clientUrl,
              state: context.store.getState(),
              apolloState: context.client.extract()
            };
            data.hostname = req.hostname;
            html = __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_Html__["a" /* default */], data));
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
  var html = __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToStaticMarkup(_jsx(__WEBPACK_IMPORTED_MODULE_21__components_Html__["a" /* default */], {
    title: "Internal Server Error",
    description: err.message,
    styles: [{
      id: 'css',
      cssText: __WEBPACK_IMPORTED_MODULE_23__routes_error_ErrorPage_css___default.a._getCss()
    }] // eslint-disable-line no-underscore-dangle

  }, void 0, __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_22__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err
  }))));
  res.status(err.status || 500);
  res.send("<!doctype html>".concat(html));
}); //
// Launch the server
// -----------------------------------------------------------------------------

var promise = __WEBPACK_IMPORTED_MODULE_29__data_models__["e" /* default */].sync().catch(function (err) {
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("connect-redis");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express-ws");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("compression");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

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

      return _jsx(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
        client: client
      }, void 0, this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
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




/* eslint-disable react/no-danger */

var _ref = _jsx("meta", {
  charSet: "utf-8"
});

var _ref2 = _jsx("meta", {
  httpEquiv: "x-ua-compatible",
  content: "ie=edge"
});

var _ref3 = _jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"
});

var _ref4 = _jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes"
});

var _ref5 = _jsx("link", {
  rel: "apple-touch-icon",
  href: "apple-touch-icon.png"
});

var _ref6 = _jsx("script", {
  src: "https://www.google-analytics.com/analytics.js",
  async: true,
  defer: true
});

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
      return _jsx("html", {
        className: "no-js",
        lang: "en"
      }, void 0, _jsx("head", {}, void 0, _ref, _ref2, _jsx("title", {}, void 0, title), _jsx("meta", {
        name: "description",
        content: description
      }), _ref3, _ref4, scripts.map(function (script) {
        return _jsx("link", {
          rel: "preload",
          href: _this.assetsMap(script),
          as: "script"
        }, script);
      }), _ref5, styles.map(function (style) {
        return _jsx("style", {
          id: style.id,
          dangerouslySetInnerHTML: {
            __html: style.cssText
          }
        }, style.id);
      })), _jsx("body", {}, void 0, _jsx("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: children
        }
      }), _jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "window.App=".concat(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app))
        }
      }), scripts.map(function (script) {
        return _jsx("script", {
          src: _this.assetsMap(script)
        }, script);
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics && __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && _jsx("script", {
        dangerouslySetInnerHTML: {
          __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + "ga('create','".concat(__WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId, "','auto');ga('send','pageview')")
        }
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics && __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && _ref6));
    }
  }]);

  return Html;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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
/* 48 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
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





var _ref = _jsx("div", {}, void 0, _jsx("h1", {}, void 0, "Error"), _jsx("p", {}, void 0, "Sorry, a critical error occurred on this page."));

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
      if (false) {
        return _jsx("div", {}, void 0, _jsx("h1", {}, void 0, this.props.error.name), _jsx("pre", {}, void 0, this.props.error.stack));
      }

      return _ref;
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(ErrorPage, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: null
  }
});

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "html{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 32px;padding:0 2rem;height:100%;font-family:sans-serif;text-align:center;color:#888}body{margin:0}h1{font-weight:400;color:#555}pre{white-space:pre-wrap;text-align:left}", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_game_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_game_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_game_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_models__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redis__ = __webpack_require__(2);
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
          __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].rpushAsync("moves:".concat(ws.channel), JSON.stringify(Object.assign({
            color: color
          }, msg))).then(function () {
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
                  __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].hsetAsync("info:".concat(ws.channel), 'result', "".concat(r[1], "+").concat(r[2])).then(function () {
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
              __WEBPACK_IMPORTED_MODULE_5__redis__["a" /* redis */].hsetAsync("info:".concat(ws.channel), 'result', "".concat(winner === __WEBPACK_IMPORTED_MODULE_1_game_engine___default.a.Go.COLOR.BLACK ? 'B+R' : 'W+R')).then(function () {
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
/* 58 */
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
/* 59 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_wechat__ = __webpack_require__(62);
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
/* 61 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("passport-wechat");

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(65);
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
/* 64 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 65 */
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
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 86));
    }
  }, {
    path: '/login',
    load: function load() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 87));
    }
  }, {
    path: '/about',
    load: function load() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 88));
    }
  }, {
    path: '/admin',
    load: function load() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 89));
    }
  }, {
    path: '/go',
    protected: true,
    children: [{
      path: '/creation',
      load: function load() {
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 90));
      }
    }, {
      path: '',
      load: function load() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 96));
      }
    }]
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: function load() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 99));
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

if (false) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default
  });
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_me__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_news__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries_go__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries_wechat__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations_create__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mutations_update__ = __webpack_require__(76);
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
      wechat: __WEBPACK_IMPORTED_MODULE_4__queries_wechat__["a" /* default */]
    }
  }),
  mutation: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createGo: __WEBPACK_IMPORTED_MODULE_5__mutations_create__["a" /* default */],
      updateGo: __WEBPACK_IMPORTED_MODULE_6__mutations_update__["a" /* default */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redis__ = __webpack_require__(2);
function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

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
    return Promise.all([__WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].getAsync("engine:".concat(id)), __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].hgetallAsync("info:".concat(id))]).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          engine = _ref3[0],
          info = _ref3[1];

      return {
        id: id,
        engine: engine,
        info: info
      };
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Go);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_WechatType__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redis__ = __webpack_require__(2);








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
/* 73 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 74 */
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redis__ = __webpack_require__(2);



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
    return Promise.all([__WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].setAsync("engine:".concat(id), rule), __WEBPACK_IMPORTED_MODULE_2__redis__["a" /* redis */].hmsetAsync("info:".concat(id), Object.assign({
      boardsize: boardsize,
      handicap: handicap || 0,
      komi: komi || 6.5
    }, color === 'black' ? {
      black: root.request.user.id
    } : {
      white: root.request.user.id
    }, goal ? {
      goal: goal
    } : {}))]).then(function () {
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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_GoType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redis__ = __webpack_require__(2);
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
/* 77 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger__ = __webpack_require__(82);



function configureStore(initialState) {
  var middleware = [];
  var enhancer;

  if (false) {
    middleware.push(createLogger()); // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension

    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };

    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware.apply(void 0, middleware), devToolsExtension);
  } else {
    enhancer = __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(void 0, middleware);
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(81);



function createRootReducer() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
    runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */]
  });
}

/***/ }),
/* 80 */
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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(16);
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
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(83);
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
/* 83 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(16);
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
/* 85 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports) {

module.exports = require("material-ui/SelectField");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),
/* 96 */,
/* 97 */
/***/ (function(module, exports) {

module.exports = require("react-websocket");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map