webpackJsonp([8],{

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_graphql__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__match_graphql__);
var _jsxFileName = "/Users/lookis/Projects/game-server/src/routes/match/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * @author lookis on 10/06/2018
 */




function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var id, client, _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.query.id, client = _ref.client;
            _context.next = 3;
            return client.query({
              query: __WEBPACK_IMPORTED_MODULE_2__match_graphql___default.a,
              variables: {
                id: id
              }
            });

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (!(data && data.match && data.match.id)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              redirect: "/go?id=".concat(data.match.id, "&invite=").concat(data.match.color)
            });

          case 7:
            if (typeof window !== 'undefined') {
              __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                type: 'error',
                title: '比赛已结束'
              }).then(function () {
                wx.closeWindow();
              });
            }

            return _context.abrupt("return", {
              chunks: ['match'],
              title: '匹配中',
              component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              })
            });

          case 9:
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

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v7.0.10
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

var styles = "body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow-y: hidden; }\n\nbody.swal2-toast-shown {\n  overflow-y: auto; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-icon {\n      margin: 0 0 15px; }\n    body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-buttonswrapper {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-item-align: stretch;\n          align-self: stretch;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n    body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n      height: 32px;\n      font-size: 14px;\n      margin: 5px auto; }\n  body.swal2-toast-shown > .swal2-container {\n    position: fixed;\n    background-color: transparent; }\n    body.swal2-toast-shown > .swal2-container.swal2-shown {\n      background-color: transparent; }\n    body.swal2-toast-shown > .swal2-container.swal2-top {\n      top: 0;\n      left: 50%;\n      bottom: auto;\n      right: auto;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n    body.swal2-toast-shown > .swal2-container.swal2-top-right {\n      top: 0;\n      left: auto;\n      bottom: auto;\n      right: 0; }\n    body.swal2-toast-shown > .swal2-container.swal2-top-left {\n      top: 0;\n      left: 0;\n      bottom: auto;\n      right: auto; }\n    body.swal2-toast-shown > .swal2-container.swal2-center-left {\n      top: 50%;\n      left: 0;\n      bottom: auto;\n      right: auto;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n    body.swal2-toast-shown > .swal2-container.swal2-center {\n      top: 50%;\n      left: 50%;\n      bottom: auto;\n      right: auto;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n    body.swal2-toast-shown > .swal2-container.swal2-center-right {\n      top: 50%;\n      left: auto;\n      bottom: auto;\n      right: 0;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n    body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n      top: auto;\n      left: 0;\n      bottom: 0;\n      right: auto; }\n    body.swal2-toast-shown > .swal2-container.swal2-bottom {\n      top: auto;\n      left: 50%;\n      bottom: 0;\n      right: auto;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n    body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n      top: auto;\n      left: auto;\n      bottom: 0;\n      right: 0; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\nbody.swal2-no-backdrop > .swal2-shown {\n  top: auto;\n  bottom: auto;\n  left: auto;\n  right: auto;\n  background-color: transparent; }\n  body.swal2-no-backdrop > .swal2-shown > .swal2-modal {\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop > .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop > .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop > .swal2-shown.swal2-bottom-right {\n    bottom: 0;\n    right: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  padding: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  max-width: 100%; }\n  .swal2-popup.swal2-toast {\n    width: 300px;\n    padding: 0 15px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow-y: hidden;\n    -webkit-box-shadow: 0 0 10px #d9d9d9;\n            box-shadow: 0 0 10px #d9d9d9; }\n    .swal2-popup.swal2-toast .swal2-title {\n      max-width: 300px;\n      font-size: 16px;\n      text-align: left; }\n    .swal2-popup.swal2-toast .swal2-content {\n      font-size: 14px;\n      text-align: left; }\n    .swal2-popup.swal2-toast .swal2-icon {\n      width: 32px;\n      min-width: 32px;\n      height: 32px;\n      margin: 0 15px 0 0; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n        width: 32px;\n        height: 32px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-info, .swal2-popup.swal2-toast .swal2-icon.swal2-warning, .swal2-popup.swal2-toast .swal2-icon.swal2-question {\n        font-size: 26px;\n        line-height: 32px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n        top: 14px;\n        width: 22px; }\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n          left: 5px; }\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n          right: 5px; }\n    .swal2-popup.swal2-toast .swal2-buttonswrapper {\n      margin: 0 0 0 5px; }\n    .swal2-popup.swal2-toast .swal2-styled {\n      margin: 0 0 0 5px;\n      padding: 5px 10px; }\n      .swal2-popup.swal2-toast .swal2-styled:focus {\n        -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4);\n                box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4); }\n    .swal2-popup.swal2-toast .swal2-validationerror {\n      width: 100%;\n      margin: 5px -20px; }\n    .swal2-popup.swal2-toast .swal2-success {\n      border-color: #a5dc86; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n        border-radius: 50%;\n        position: absolute;\n        width: 32px;\n        height: 64px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n          border-radius: 64px 0 0 64px;\n          top: -4px;\n          left: -15px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          -webkit-transform-origin: 32px 32px;\n                  transform-origin: 32px 32px; }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n          border-radius: 0 64px 64px 0;\n          top: -5px;\n          left: 14px;\n          -webkit-transform-origin: 0 32px;\n                  transform-origin: 0 32px; }\n      .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n        width: 32px;\n        height: 32px; }\n      .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n        width: 7px;\n        height: 90px;\n        left: 28px;\n        top: 8px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n        height: 5px; }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n          width: 12px;\n          left: 3px;\n          top: 18px; }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n          width: 22px;\n          right: 3px;\n          top: 15px; }\n    .swal2-popup.swal2-toast .swal2-animate-success-line-tip {\n      -webkit-animation: animate-toast-success-tip .75s;\n              animation: animate-toast-success-tip .75s; }\n    .swal2-popup.swal2-toast .swal2-animate-success-line-long {\n      -webkit-animation: animate-toast-success-long .75s;\n              animation: animate-toast-success-long .75s; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-popup .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-buttonswrapper {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 15px; }\n    .swal2-popup .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-popup .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: 7.5px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-popup .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-popup .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      vertical-align: -1px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      -webkit-box-shadow: 1px 1px 1px #fff;\n              box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-popup .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 15px 5px 0;\n    padding: 10px 32px; }\n    .swal2-popup .swal2-styled:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-popup .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-popup .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 38px;\n    height: 40px;\n    font-size: 36px;\n    line-height: 40px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    -webkit-transition: color .1s ease;\n    transition: color .1s ease; }\n    .swal2-popup .swal2-close:hover {\n      color: #d55; }\n  .swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n  .swal2-popup .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 18px;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s, -webkit-box-shadow .3s; }\n    .swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      -webkit-box-shadow: 0 0 2px #f27474 !important;\n              box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      -webkit-box-shadow: 0 0 3px #c4e6f5;\n              box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-popup .swal2-input::-webkit-input-placeholder,\n    .swal2-popup .swal2-file::-webkit-input-placeholder,\n    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::-ms-input-placeholder,\n    .swal2-popup .swal2-file::-ms-input-placeholder,\n    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-popup .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-popup .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-popup .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-popup .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-popup .swal2-file {\n    font-size: 20px; }\n  .swal2-popup .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-popup .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-popup .swal2-radio {\n    border: 0; }\n    .swal2-popup .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-popup .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-popup .swal2-checkbox {\n    color: #545454; }\n    .swal2-popup .swal2-checkbox input,\n    .swal2-popup .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-popup .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-popup .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@-webkit-keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@-webkit-keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  -webkit-animation: showSweetAlert .3s;\n          animation: showSweetAlert .3s; }\n  .swal2-show.swal2-toast {\n    -webkit-animation: showSweetToast .5s;\n            animation: showSweetToast .5s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: hideSweetAlert .15s forwards;\n          animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-toast {\n    -webkit-animation: hideSweetToast .2s forwards;\n            animation: hideSweetToast .2s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n@-webkit-keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  70% {\n    width: 24px;\n    left: -4px;\n    top: 17px; }\n  84% {\n    width: 8px;\n    left: 10px;\n    top: 20px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  70% {\n    width: 24px;\n    left: -4px;\n    top: 17px; }\n  84% {\n    width: 8px;\n    left: 10px;\n    top: 20px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@-webkit-keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  84% {\n    width: 26px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  84% {\n    width: 26px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  -webkit-animation: animate-success-tip .75s;\n          animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  -webkit-animation: animate-success-long .75s;\n          animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  -webkit-animation: animate-error-icon .5s;\n          animation: animate-error-icon .5s; }\n\n@-webkit-keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  -webkit-animation: animate-x-mark .5s;\n          animation: animate-x-mark .5s; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n";

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onBeforeOpen: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'contentwrapper', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var popupParams = _extends({}, defaultParams);
var queue = [];

var previousWindowKeyDown = void 0;
var windowOnkeydownOverridden = void 0;

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!sweetAlert$1.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (sweetAlert$1.isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  var popupWidth = params.width === defaultParams.width && params.toast ? 'auto' : params.width;
  popup.style.width = typeof popupWidth === 'number' ? popupWidth + 'px' : popupWidth;

  var popupPadding = params.padding === defaultParams.padding && params.toast ? 'inherit' : params.padding;
  popup.style.padding = typeof popupPadding === 'number' ? popupPadding + 'px' : popupPadding;
  popup.style.background = params.background;
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (!params.backdrop) {
    addClass(document.body, swalClasses['no-backdrop']);
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass(document.body, swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert$1.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/**
 * Animations
 *
 * @param animation
 * @param onBeforeOpen
 * @param onComplete
 */
var openPopup = function openPopup(animation, onBeforeOpen, onComplete) {
  var container = getContainer();
  var popup = getPopup();

  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
    onBeforeOpen(popup);
  }

  if (animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(popup);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert$1 = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, popupParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      showWarningsForParams(args[0]);
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        var inputValidator = function inputValidator(email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
        params.inputValidator = params.expectRejections ? inputValidator : sweetAlert.adaptInputValidator(inputValidator);
      }

      if (params.input === 'url' && params.inputValidator === null) {
        var _inputValidator = function _inputValidator(url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
        params.inputValidator = params.expectRejections ? _inputValidator : sweetAlert.adaptInputValidator(_inputValidator);
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var popup = getPopup();

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      sweetAlert.closePopup(params.onClose);
      if (params.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      sweetAlert.closePopup(params.onClose);
      if (params.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      sweetAlert.closePopup(params.onClose);
      reject(error$$1);
    };

    // Close on timer
    if (params.timer) {
      popup.timeout = setTimeout(function () {
        return dismissWith('timer');
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(popup, swalClasses[inputType]);
        case 'checkbox':
          return popup.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return popup.querySelector('.' + swalClasses.radio + ' input:checked') || popup.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return popup.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(popup, swalClasses.input);
      }
    };

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        sweetAlert.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return params.preConfirm(value, params.extraParams);
        });
        if (params.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            sweetAlert.hideLoading();
            if (validationError) {
              sweetAlert.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(getValidationError())) {
              sweetAlert.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return params.inputValidator(inputValue, params.extraParams);
                });
                if (params.expectRejections) {
                  validationPromise.then(function () {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    if (validationError) {
                      sweetAlert.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    if (validationError) {
                      sweetAlert.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            dismissWith('cancel');
          }
          break;
        default:
      }
    };

    var buttons = popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    getCloseButton().onclick = function () {
      dismissWith('close');
    };

    if (params.toast) {
      // Closing popup by overlay click
      popup.onclick = function (e) {
        if (e.target !== popup || params.showConfirmButton || params.showCancelButton) {
          return;
        }
        if (params.allowOutsideClick) {
          sweetAlert.closePopup(params.onClose);
          dismissWith('overlay');
        }
      };
    } else {
      container.onclick = function (e) {
        if (e.target !== container) {
          return;
        }
        if (params.allowOutsideClick) {
          dismissWith('overlay');
        }
      };
    }

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target === getInput()) {
          if (e.target.tagName.toLowerCase() === 'textarea') {
            return; // do not submit
          }

          sweetAlert.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
          if (targetElement === focusableElements[_i4]) {
            btnIndex = _i4;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && params.allowEscapeKey === true) {
        dismissWith('esc');
      }
    };

    if (params.toast && windowOnkeydownOverridden) {
      window.onkeydown = previousWindowKeyDown;
      windowOnkeydownOverridden = false;
    }

    if (!params.toast && !windowOnkeydownOverridden) {
      previousWindowKeyDown = window.onkeydown;
      windowOnkeydownOverridden = true;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(popup, swalClasses.loading);
      popup.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    if (params.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(popup, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(popup, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(popup, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(popup, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(popup, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue.toString() === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(popup, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue.toString() === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(popup, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(popup, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openPopup(params.animation, params.onBeforeOpen, params.onOpen);

    if (!params.toast) {
      if (!params.allowEnterKey) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (params.focusCancel && isVisible(cancelButton)) {
        cancelButton.focus();
      } else if (params.focusConfirm && isVisible(confirmButton)) {
        confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    }

    // fix scroll
    getContainer().scrollTop = 0;
  });
};

/*
 * Global function to determine if swal2 popup is shown
 */
sweetAlert$1.isVisible = function () {
  return !!getPopup();
};

/*
 * Global function for chaining sweetAlert popups
 */
sweetAlert$1.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert$1(queue[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
sweetAlert$1.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
sweetAlert$1.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
sweetAlert$1.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert$1.close = sweetAlert$1.closePopup = sweetAlert$1.closeModal = sweetAlert$1.closeToast = function (onComplete) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  clearTimeout(popup.timeout);

  if (!isToast()) {
    resetPrevState();
    window.onkeydown = previousWindowKeyDown;
    windowOnkeydownOverridden = false;
  }

  var removePopupAndResetState = function removePopupAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    removeClass(document.body, swalClasses['no-backdrop']);
    removeClass(document.body, swalClasses['has-input']);
    removeClass(document.body, swalClasses['toast-shown']);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(popup);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert$1.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert$1.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert$1.showLoading = sweetAlert$1.enableLoading = function () {
  var popup = getPopup();
  if (!popup) {
    sweetAlert$1('');
  }
  popup = getPopup();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(popup, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert$1.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
sweetAlert$1.isDeprecatedParameter = function (paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert$1.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  showWarningsForParams(userParams);

  // assign valid params from userParams to popupParams
  for (var param in userParams) {
    if (sweetAlert$1.isValidParameter(param)) {
      popupParams[param] = userParams[param];
    }
  }
};

/**
 * Reset default params for each popup
 */
sweetAlert$1.resetDefaults = function () {
  popupParams = _extends({}, defaultParams);
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
sweetAlert$1.adaptInputValidator = function (legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

sweetAlert$1.noop = function () {};

sweetAlert$1.version = '7.0.10';

sweetAlert$1.default = sweetAlert$1;

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousActiveElement: null,
  previousBodyPadding: null

  // Detect Node env
};var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

/*
 * Add modal + overlay to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass(document.body, swalClasses['no-backdrop']);
    removeClass(document.body, swalClasses['has-input']);
    removeClass(document.body, swalClasses['toast-shown']);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var input = getChildByClass(popup, swalClasses.input);
  var file = getChildByClass(popup, swalClasses.file);
  var range = popup.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = popup.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(popup, swalClasses.select);
  var checkbox = popup.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(popup, swalClasses.textarea);

  // a11y
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  var resetValidationError = function resetValidationError() {
    sweetAlert$1.isVisible() && sweetAlert$1.resetValidationError();
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function () {
    resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    resetValidationError();
    range.previousSibling.value = range.value;
  };

  return popup;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <div class="' + swalClasses.contentwrapper + '">\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   </div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getPopup = function getPopup() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.popup) : null;
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = elem === getPopup() || elem === getButtonsWrapper() ? 'flex' : 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

/**
 * Inject a string of CSS into the page header
 *
 * @param {String} css
 */
var injectCSS = function injectCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

injectCSS(styles);

return sweetAlert$1;

})));
if (typeof window !== 'undefined' && window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ }),

/***/ 822:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Match"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"match"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"color"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":70}};
    doc.loc.source = {"body":"query Match($id: String!) {\n  match(id: $id) {\n    id\n    color\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvc3JjL3JvdXRlcy9tYXRjaC9pbmRleC5qcyIsIi9Vc2Vycy9sb29raXMvUHJvamVjdHMvZ2FtZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwiL1VzZXJzL2xvb2tpcy9Qcm9qZWN0cy9nYW1lLXNlcnZlci9zcmMvcm91dGVzL21hdGNoL21hdGNoLmdyYXBocWwiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIGxvb2tpcyBvbiAxMC8wNi8yMDE4XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgcXVlcnlNYXRjaCBmcm9tICcuL21hdGNoLmdyYXBocWwnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBxdWVyeTogeyBpZCB9LCBjbGllbnQgfSkge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IHF1ZXJ5TWF0Y2gsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLm1hdGNoICYmIGRhdGEubWF0Y2guaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IGAvZ28/aWQ9JHtkYXRhLm1hdGNoLmlkfSZpbnZpdGU9JHtkYXRhLm1hdGNoLmNvbG9yfWAsXG4gICAgfTtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzd2FsKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ+avlOi1m+W3sue7k+adnycsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB3eC5jbG9zZVdpbmRvdygpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ21hdGNoJ10sXG4gICAgdGl0bGU6ICfljLnphY3kuK0nLFxuICAgIGNvbXBvbmVudDogPGRpdiAvPixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvbWF0Y2gvaW5kZXguanMiLCIvKiFcbiAqIHN3ZWV0YWxlcnQyIHY3LjAuMTBcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3R5bGVzID0gXCJib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxcblxcbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24ge1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93bi5zd2FsMi1oYXMtaW5wdXQgPiAuc3dhbDItY29udGFpbmVyID4gLnN3YWwyLXRvYXN0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24uc3dhbDItaGFzLWlucHV0ID4gLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiB7XFxuICAgICAgbWFyZ2luOiAwIDAgMTVweDsgfVxcbiAgICBib2R5LnN3YWwyLXRvYXN0LXNob3duLnN3YWwyLWhhcy1pbnB1dCA+IC5zd2FsMi1jb250YWluZXIgPiAuc3dhbDItdG9hc3QgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyIHtcXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RyZXRjaDtcXG4gICAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG4gICAgYm9keS5zd2FsMi10b2FzdC1zaG93bi5zd2FsMi1oYXMtaW5wdXQgPiAuc3dhbDItY29udGFpbmVyID4gLnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkaW5nIHtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24uc3dhbDItaGFzLWlucHV0ID4gLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXQge1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgbWFyZ2luOiA1cHggYXV0bzsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3duIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICBib2R5LnN3YWwyLXRvYXN0LXNob3duID4gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgYm90dG9tOiBhdXRvO1xcbiAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IGF1dG87XFxuICAgICAgYm90dG9tOiBhdXRvO1xcbiAgICAgIHJpZ2h0OiAwOyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IGF1dG87XFxuICAgICAgcmlnaHQ6IGF1dG87IH1cXG4gICAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm90dG9tOiBhdXRvO1xcbiAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIGJvdHRvbTogYXV0bztcXG4gICAgICByaWdodDogYXV0bztcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG4gICAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiBhdXRvO1xcbiAgICAgIGJvdHRvbTogYXV0bztcXG4gICAgICByaWdodDogMDtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgICBib2R5LnN3YWwyLXRvYXN0LXNob3duID4gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XFxuICAgICAgdG9wOiBhdXRvO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XFxuICAgICAgdG9wOiBhdXRvO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgcmlnaHQ6IGF1dG87XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gICAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcXG4gICAgICB0b3A6IGF1dG87XFxuICAgICAgbGVmdDogYXV0bztcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgcmlnaHQ6IDA7IH1cXG5cXG5ib2R5LnN3YWwyLWlvc2ZpeCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duIHtcXG4gIHRvcDogYXV0bztcXG4gIGJvdHRvbTogYXV0bztcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duID4gLnN3YWwyLW1vZGFsIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24uc3dhbDItdG9wLWxlZnQge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24uc3dhbDItdG9wLXJpZ2h0IHtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCA+IC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXIge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1sZWZ0IHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCA+IC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItcmlnaHQge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCA+IC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20ge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1sZWZ0IHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG5cXG4uc3dhbDItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwNjA7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20ge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuID4gLnN3YWwyLW1vZGFsIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RyZXRjaDtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4ge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlciwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20ge1xcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLWxlZnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWxlZnQge1xcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG4gICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXJpZ2h0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uID4gLnN3YWwyLW1vZGFsIHtcXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KSA+IC5zd2FsMi1tb2RhbCB7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWwge1xcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZmFkZSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXM7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzOyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuLnN3YWwyLXBvcHVwIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Qge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjZDlkOWQ5O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkOWQ5ZDk7IH1cXG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZSB7XFxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnQge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiB7XFxuICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgbWluLXdpZHRoOiAzMnB4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBtYXJnaW46IDAgMTVweCAwIDA7IH1cXG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG4gICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWluZm8sIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nLCAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7IH1cXG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XFxuICAgICAgICB0b3A6IDE0cHg7XFxuICAgICAgICB3aWR0aDogMjJweDsgfVxcbiAgICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xcbiAgICAgICAgICBsZWZ0OiA1cHg7IH1cXG4gICAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuICAgICAgICAgIHJpZ2h0OiA1cHg7IH1cXG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1idXR0b25zd3JhcHBlciB7XFxuICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7IH1cXG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQge1xcbiAgICAgIG1hcmdpbjogMCAwIDAgNXB4O1xcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4OyB9XFxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQ6Zm9jdXMge1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxcHggI2ZmZiwgMCAwIDAgMnB4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2ZmZiwgMCAwIDAgMnB4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpOyB9XFxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbmVycm9yIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW46IDVweCAtMjBweDsgfVxcbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Mge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2E1ZGM4NjsgfVxcbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMzJweDtcXG4gICAgICAgIGhlaWdodDogNjRweDtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDY0cHggMCAwIDY0cHg7XFxuICAgICAgICAgIHRvcDogLTRweDtcXG4gICAgICAgICAgbGVmdDogLTE1cHg7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7IH1cXG4gICAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDY0cHggNjRweCAwO1xcbiAgICAgICAgICB0b3A6IC01cHg7XFxuICAgICAgICAgIGxlZnQ6IDE0cHg7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAzMnB4O1xcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMzJweDsgfVxcbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG4gICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XFxuICAgICAgICB3aWR0aDogN3B4O1xcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xcbiAgICAgICAgbGVmdDogMjhweDtcXG4gICAgICAgIHRvcDogOHB4OyB9XFxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddIHtcXG4gICAgICAgIGhlaWdodDogNXB4OyB9XFxuICAgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSd0aXAnXSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBsZWZ0OiAzcHg7XFxuICAgICAgICAgIHRvcDogMThweDsgfVxcbiAgICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0nbG9uZyddIHtcXG4gICAgICAgICAgd2lkdGg6IDIycHg7XFxuICAgICAgICAgIHJpZ2h0OiAzcHg7XFxuICAgICAgICAgIHRvcDogMTVweDsgfVxcbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1cztcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzOyB9XFxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIC43NXM7XFxuICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIC43NXM7IH1cXG4gIC5zd2FsMi1wb3B1cDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5nIHtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXRpdGxlIHtcXG4gICAgY29sb3I6ICM1OTU5NTk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAuNGVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYnV0dG9uc3dyYXBwZXI6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXSB7XFxuICAgICAgb3BhY2l0eTogLjQ7XFxuICAgICAgY3Vyc29yOiBuby1kcm9wOyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYnV0dG9uc3dyYXBwZXIuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm0ge1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBtYXJnaW46IDcuNXB4O1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1idXR0b25zd3JhcHBlci5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1idXR0b25zd3JhcHBlci5zd2FsMi1sb2FkaW5nIDpub3QoLnN3YWwyLXN0eWxlZCkuc3dhbDItY29uZmlybTo6YWZ0ZXIge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAtMXB4O1xcbiAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICB3aWR0aDogMTVweDtcXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2ZmZjtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XFxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZCB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW46IDE1cHggNXB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMzJweDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZDpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmLCAwIDAgMCA0cHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZiwgMCAwIDAgNHB4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWltYWdlIHtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jbG9zZSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjY2NjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMXMgZWFzZTsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNsb3NlOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2Q1NTsgfVxcbiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWlucHV0LFxcbiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWZpbGUsXFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItdGV4dGFyZWEsXFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItc2VsZWN0LFxcbiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLXJhZGlvLFxcbiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6ICM1NDU0NTQ7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZSxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEsXFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8sXFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IHtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQsXFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsXFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgLjNzO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgLjNzO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzLCBib3gtc2hhZG93IC4zcztcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcywgYm94LXNoYWRvdyAuM3MsIC13ZWJraXQtYm94LXNoYWRvdyAuM3M7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmMjc0NzQgIWltcG9ydGFudDtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggI2YyNzQ3NCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnQ7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDpmb2N1cyxcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOmZvY3VzLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQ7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICNjY2NjY2M7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6cGxhY2Vob2xkZXIsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBpbnB1dCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2UgaW5wdXQsXFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XFxuICAgIGhlaWdodDogNDNweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0IHtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICAgICAgbWF4LXdpZHRoOiAxNTBweDsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMDhweDtcXG4gICAgcGFkZGluZzogMTJweDsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3Qge1xcbiAgICBjb2xvcjogIzU0NTQ1NDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyB7XFxuICAgIGJvcmRlcjogMDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGxhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGlucHV0LFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIHNwYW4ge1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBpbnB1dCB7XFxuICAgICAgbWFyZ2luOiAwIDNweCAwIDA7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3gge1xcbiAgICBjb2xvcjogIzU0NTQ1NDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGlucHV0LFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IHNwYW4ge1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbmVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgbWFyZ2luOiAwIC0yMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbmVycm9yOjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICchJztcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE3ZDdkO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG5Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xcbiAgLnN3YWwyLXJhbmdlIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxcbiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuICAuc3dhbDItcmFuZ2UgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XFxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuLnN3YWwyLWljb24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDMwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NDsgfVxcbiAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJrIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIHdpZHRoOiA0N3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgdG9wOiAzN3B4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIGxlZnQ6IDE3cHg7IH1cXG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICByaWdodDogMTZweDsgfVxcbiAgLnN3YWwyLWljb24uc3dhbDItd2FybmluZyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2Y4YmI4NjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmFjZWE4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zd2FsMi1pY29uLnN3YWwyLWluZm8ge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjM2ZjM2VlO1xcbiAgICBib3JkZXItY29sb3I6ICM5ZGUwZjY7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb24ge1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM4N2FkYmQ7XFxuICAgIGJvcmRlci1jb2xvcjogI2M5ZGFlMTtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogODBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2OyB9XFxuICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTIwcHggMCAwIDEyMHB4O1xcbiAgICAgICAgdG9wOiAtN3B4O1xcbiAgICAgICAgbGVmdDogLTMzcHg7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDYwcHggNjBweDtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNjBweCA2MHB4OyB9XFxuICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMjBweCAxMjBweCAwO1xcbiAgICAgICAgdG9wOiAtMTFweDtcXG4gICAgICAgIGxlZnQ6IDMwcHg7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNjBweDtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA2MHB4OyB9XFxuICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XFxuICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMTY1LCAyMjAsIDEzNCwgMC4yKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAtNHB4O1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICB6LWluZGV4OiAyOyB9XFxuICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcXG4gICAgICB3aWR0aDogN3B4O1xcbiAgICAgIGhlaWdodDogOTBweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMjhweDtcXG4gICAgICB0b3A6IDhweDtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZGM4NjtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDI7IH1cXG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0ndGlwJ10ge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBsZWZ0OiAxNHB4O1xcbiAgICAgICAgdG9wOiA0NnB4O1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xcbiAgICAgICAgd2lkdGg6IDQ3cHg7XFxuICAgICAgICByaWdodDogOHB4O1xcbiAgICAgICAgdG9wOiAzOHB4O1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLnN3YWwyLXByb2dyZXNzc3RlcHMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMCAwIDIwcHg7XFxuICBwYWRkaW5nOiAwOyB9XFxuICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICB6LWluZGV4OiAyMDsgfVxcbiAgICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGU6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB7XFxuICAgICAgYmFja2dyb3VuZDogIzMwODVkNjsgfVxcbiAgICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAgfiAuc3dhbDItcHJvZ3Jlc3NjaXJjbGUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxcbiAgICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAgfiAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNhZGQ4ZTY7IH1cXG4gIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2xpbmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xcbiAgICBoZWlnaHQ6IC40ZW07XFxuICAgIG1hcmdpbjogMCAtMXB4O1xcbiAgICB6LWluZGV4OiAxMDsgfVxcblxcbltjbGFzc149J3N3YWwyJ10ge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRUb2FzdCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVaKDJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWigyZGVnKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcbiAgICBvcGFjaXR5OiAuNTsgfVxcbiAgNjYlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGVaKDJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZVooMmRlZyk7XFxuICAgIG9wYWNpdHk6IC43OyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzaG93U3dlZXRUb2FzdCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVaKDJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWigyZGVnKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcbiAgICBvcGFjaXR5OiAuNTsgfVxcbiAgNjYlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGVaKDJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZVooMmRlZyk7XFxuICAgIG9wYWNpdHk6IC43OyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMzMlIHtcXG4gICAgb3BhY2l0eTogLjU7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgaGlkZVN3ZWV0VG9hc3Qge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAzMyUge1xcbiAgICBvcGFjaXR5OiAuNTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XFxuICA0NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzaG93U3dlZXRBbGVydCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTsgfVxcbiAgNDUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBoaWRlU3dlZXRBbGVydCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGVTd2VldEFsZXJ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbi5zd2FsMi1zaG93IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaG93U3dlZXRBbGVydCAuM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc2hvd1N3ZWV0QWxlcnQgLjNzOyB9XFxuICAuc3dhbDItc2hvdy5zd2FsMi10b2FzdCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzaG93U3dlZXRUb2FzdCAuNXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzaG93U3dlZXRUb2FzdCAuNXM7IH1cXG4gIC5zd2FsMi1zaG93LnN3YWwyLW5vYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lOyB9XFxuXFxuLnN3YWwyLWhpZGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhpZGVTd2VldEFsZXJ0IC4xNXMgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogaGlkZVN3ZWV0QWxlcnQgLjE1cyBmb3J3YXJkczsgfVxcbiAgLnN3YWwyLWhpZGUuc3dhbDItdG9hc3Qge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogaGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzOyB9XFxuICAuc3dhbDItaGlkZS5zd2FsMi1ub2FuaW1hdGlvbiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXN1Y2Nlc3MtdGlwIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxOXB4OyB9XFxuICA1NCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDE5cHg7IH1cXG4gIDcwJSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBsZWZ0OiAtOHB4O1xcbiAgICB0b3A6IDM3cHg7IH1cXG4gIDg0JSB7XFxuICAgIHdpZHRoOiAxN3B4O1xcbiAgICBsZWZ0OiAyMXB4O1xcbiAgICB0b3A6IDQ4cHg7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgbGVmdDogMTRweDtcXG4gICAgdG9wOiA0NXB4OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy10aXAge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDE5cHg7IH1cXG4gIDU0JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogMTlweDsgfVxcbiAgNzAlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGxlZnQ6IC04cHg7XFxuICAgIHRvcDogMzdweDsgfVxcbiAgODQlIHtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGxlZnQ6IDIxcHg7XFxuICAgIHRvcDogNDhweDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgICB0b3A6IDQ1cHg7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXN1Y2Nlc3MtbG9uZyB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICByaWdodDogNDZweDtcXG4gICAgdG9wOiA1NHB4OyB9XFxuICA2NSUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcmlnaHQ6IDQ2cHg7XFxuICAgIHRvcDogNTRweDsgfVxcbiAgODQlIHtcXG4gICAgd2lkdGg6IDU1cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDM1cHg7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogNDdweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgdG9wOiAzOHB4OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy1sb25nIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHJpZ2h0OiA0NnB4O1xcbiAgICB0b3A6IDU0cHg7IH1cXG4gIDY1JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICByaWdodDogNDZweDtcXG4gICAgdG9wOiA1NHB4OyB9XFxuICA4NCUge1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMzVweDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiA0N3B4O1xcbiAgICByaWdodDogOHB4O1xcbiAgICB0b3A6IDM4cHg7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiA5cHg7IH1cXG4gIDU0JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogOXB4OyB9XFxuICA3MCUge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbGVmdDogLTRweDtcXG4gICAgdG9wOiAxN3B4OyB9XFxuICA4NCUge1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDIwcHg7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICB0b3A6IDE4cHg7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogOXB4OyB9XFxuICA1NCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDlweDsgfVxcbiAgNzAlIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGxlZnQ6IC00cHg7XFxuICAgIHRvcDogMTdweDsgfVxcbiAgODQlIHtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAyMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgdG9wOiAxOHB4OyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcmlnaHQ6IDIycHg7XFxuICAgIHRvcDogMjZweDsgfVxcbiAgNjUlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHJpZ2h0OiAyMnB4O1xcbiAgICB0b3A6IDI2cHg7IH1cXG4gIDg0JSB7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxNXB4OyB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIHJpZ2h0OiAzcHg7XFxuICAgIHRvcDogMTVweDsgfSB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICByaWdodDogMjJweDtcXG4gICAgdG9wOiAyNnB4OyB9XFxuICA2NSUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcmlnaHQ6IDIycHg7XFxuICAgIHRvcDogMjZweDsgfVxcbiAgODQlIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDE1cHg7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgcmlnaHQ6IDNweDtcXG4gICAgdG9wOiAxNXB4OyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgMTIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgMTIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7IH0gfVxcblxcbi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtc3VjY2Vzcy10aXAgLjc1cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXN1Y2Nlc3MtdGlwIC43NXM7IH1cXG5cXG4uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1zdWNjZXNzLWxvbmcgLjc1cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXN1Y2Nlc3MtbG9uZyAuNzVzOyB9XFxuXFxuLnN3YWwyLXN1Y2Nlc3Muc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtZXJyb3ItaWNvbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZS1lcnJvci1pY29uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuLnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1lcnJvci1pY29uIC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLWVycm9yLWljb24gLjVzOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUteC1tYXJrIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICAgIG1hcmdpbi10b3A6IDI2cHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICBtYXJnaW4tdG9wOiAtNnB4OyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZS14LW1hcmsge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICAgIG1hcmdpbi10b3A6IDI2cHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gICAgbWFyZ2luLXRvcDogMjZweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAgIG1hcmdpbi10b3A6IC02cHg7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuLnN3YWwyLWFuaW1hdGUteC1tYXJrIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLXgtbWFyayAuNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS14LW1hcmsgLjVzOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZS1sb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1sb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cIjtcblxudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICB0eXBlOiBudWxsLFxuICB0b2FzdDogZmFsc2UsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBhbmltYXRpb246IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBwcmVDb25maXJtOiBudWxsLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICBjb25maXJtQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogJyNhYWEnLFxuICBjYW5jZWxCdXR0b25DbGFzczogbnVsbCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlV2lkdGg6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiBudWxsLFxuICBpbWFnZUFsdDogJycsXG4gIGltYWdlQ2xhc3M6IG51bGwsXG4gIHRpbWVyOiBudWxsLFxuICB3aWR0aDogNTAwLFxuICBwYWRkaW5nOiAyMCxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICBpbnB1dDogbnVsbCxcbiAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gIGlucHV0VmFsdWU6ICcnLFxuICBpbnB1dE9wdGlvbnM6IHt9LFxuICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICBpbnB1dENsYXNzOiBudWxsLFxuICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICBpbnB1dFZhbGlkYXRvcjogbnVsbCxcbiAgZ3JvdzogZmFsc2UsXG4gIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgcHJvZ3Jlc3NTdGVwczogW10sXG4gIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IG51bGwsXG4gIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogJzQwcHgnLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uT3BlbjogbnVsbCxcbiAgb25DbG9zZTogbnVsbCxcbiAgdXNlUmVqZWN0aW9uczogZmFsc2UsXG4gIGV4cGVjdFJlamVjdGlvbnM6IGZhbHNlXG59O1xuXG52YXIgZGVwcmVjYXRlZFBhcmFtcyA9IFsndXNlUmVqZWN0aW9ucycsICdleHBlY3RSZWplY3Rpb25zJ107XG5cbnZhciBzd2FsUHJlZml4ID0gJ3N3YWwyLSc7XG5cbnZhciBwcmVmaXggPSBmdW5jdGlvbiBwcmVmaXgoaXRlbXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBpIGluIGl0ZW1zKSB7XG4gICAgcmVzdWx0W2l0ZW1zW2ldXSA9IHN3YWxQcmVmaXggKyBpdGVtc1tpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHN3YWxDbGFzc2VzID0gcHJlZml4KFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICd0b2FzdCcsICd0b2FzdC1zaG93bicsICdvdmVybGF5JywgJ2ZhZGUnLCAnc2hvdycsICdoaWRlJywgJ25vYW5pbWF0aW9uJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2NvbnRlbnQnLCAnY29udGVudHdyYXBwZXInLCAnYnV0dG9uc3dyYXBwZXInLCAnY29uZmlybScsICdjYW5jZWwnLCAnaWNvbicsICdpbWFnZScsICdpbnB1dCcsICdoYXMtaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uZXJyb3InLCAncHJvZ3Jlc3NzdGVwcycsICdhY3RpdmVwcm9ncmVzc3N0ZXAnLCAncHJvZ3Jlc3NjaXJjbGUnLCAncHJvZ3Jlc3NsaW5lJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbiddKTtcblxudmFyIGljb25UeXBlcyA9IHByZWZpeChbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ10pO1xuXG52YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuXG4vKlxuICogU2V0IGhvdmVyLCBhY3RpdmUgYW5kIGZvY3VzLXN0YXRlcyBmb3IgYnV0dG9ucyAoc291cmNlOiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vamF2YXNjcmlwdC1nZW5lcmF0ZS1saWdodGVyLWRhcmtlci1jb2xvcilcbiAqL1xudmFyIGNvbG9yTHVtaW5hbmNlID0gZnVuY3Rpb24gY29sb3JMdW1pbmFuY2UoaGV4LCBsdW0pIHtcbiAgLy8gVmFsaWRhdGUgaGV4IHN0cmluZ1xuICBoZXggPSBTdHJpbmcoaGV4KS5yZXBsYWNlKC9bXjAtOWEtZl0vZ2ksICcnKTtcbiAgaWYgKGhleC5sZW5ndGggPCA2KSB7XG4gICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xuICB9XG4gIGx1bSA9IGx1bSB8fCAwO1xuXG4gIC8vIENvbnZlcnQgdG8gZGVjaW1hbCBhbmQgY2hhbmdlIGx1bWlub3NpdHlcbiAgdmFyIHJnYiA9ICcjJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICB2YXIgYyA9IHBhcnNlSW50KGhleC5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgYyA9IE1hdGgucm91bmQoTWF0aC5taW4oTWF0aC5tYXgoMCwgYyArIGMgKiBsdW0pLCAyNTUpKS50b1N0cmluZygxNik7XG4gICAgcmdiICs9ICgnMDAnICsgYykuc3Vic3RyKGMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiByZ2I7XG59O1xuXG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cbnZhciB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5KGFycikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgaWYgKHJlc3VsdC5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG52YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBjb25zb2xlLndhcm4oY29uc29sZVByZWZpeCArICcgJyArIG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIGVycm9yc1xuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xudmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKGNvbnNvbGVQcmVmaXggKyAnICcgKyBtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcblxuLyoqXG4gKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG52YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmICghKHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpICE9PSAtMSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB3YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9wdXBQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcyk7XG52YXIgcXVldWUgPSBbXTtcblxudmFyIHByZXZpb3VzV2luZG93S2V5RG93biA9IHZvaWQgMDtcbnZhciB3aW5kb3dPbmtleWRvd25PdmVycmlkZGVuID0gdm9pZCAwO1xuXG4vKlxuICogQ2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgUHJvbWlzZVxuICogSG9wZWZ1bGx5IHRvIGF2b2lkIG1hbnkgZ2l0aHViIGlzc3Vlc1xuICovXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9saW1vbnRlL3N3ZWV0YWxlcnQyL3dpa2kvTWlncmF0aW9uLWZyb20tU3dlZXRBbGVydC10by1Td2VldEFsZXJ0MiMxLWllLXN1cHBvcnQpJyk7XG59XG5cbi8qKlxuICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG52YXIgc2hvd1dhcm5pbmdzRm9yUGFyYW1zID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHBhcmFtcykge1xuICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICBpZiAoIXN3ZWV0QWxlcnQkMS5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybignVW5rbm93biBwYXJhbWV0ZXIgXCInICsgcGFyYW0gKyAnXCInKTtcbiAgICB9XG4gICAgaWYgKHN3ZWV0QWxlcnQkMS5pc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuT25jZSgnVGhlIHBhcmFtZXRlciBcIicgKyBwYXJhbSArICdcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4nKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHR5cGUsIHRleHQgYW5kIGFjdGlvbnMgb24gcG9wdXBcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudmFyIHNldFBhcmFtZXRlcnMgPSBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtcykge1xuICAvLyBJZiBhIGN1c3RvbSBlbGVtZW50IGlzIHNldCwgZGV0ZXJtaW5lIGlmIGl0IGlzIHZhbGlkXG4gIGlmICh0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICB9XG5cbiAgdmFyIHBvcHVwID0gdm9pZCAwO1xuICB2YXIgb2xkUG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuICAvLyBJZiB0aGUgbW9kZWwgdGFyZ2V0IGhhcyBjaGFuZ2VkLCByZWZyZXNoIHRoZSBwb3B1cFxuICBpZiAob2xkUG9wdXAgJiYgdGFyZ2V0RWxlbWVudCAmJiBvbGRQb3B1cC5wYXJlbnROb2RlICE9PSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICBwb3B1cCA9IGluaXQocGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBwb3B1cCA9IG9sZFBvcHVwIHx8IGluaXQocGFyYW1zKTtcbiAgfVxuXG4gIC8vIFNldCBwb3B1cCB3aWR0aFxuICB2YXIgcG9wdXBXaWR0aCA9IHBhcmFtcy53aWR0aCA9PT0gZGVmYXVsdFBhcmFtcy53aWR0aCAmJiBwYXJhbXMudG9hc3QgPyAnYXV0bycgOiBwYXJhbXMud2lkdGg7XG4gIHBvcHVwLnN0eWxlLndpZHRoID0gdHlwZW9mIHBvcHVwV2lkdGggPT09ICdudW1iZXInID8gcG9wdXBXaWR0aCArICdweCcgOiBwb3B1cFdpZHRoO1xuXG4gIHZhciBwb3B1cFBhZGRpbmcgPSBwYXJhbXMucGFkZGluZyA9PT0gZGVmYXVsdFBhcmFtcy5wYWRkaW5nICYmIHBhcmFtcy50b2FzdCA/ICdpbmhlcml0JyA6IHBhcmFtcy5wYWRkaW5nO1xuICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gdHlwZW9mIHBvcHVwUGFkZGluZyA9PT0gJ251bWJlcicgPyBwb3B1cFBhZGRpbmcgKyAncHgnIDogcG9wdXBQYWRkaW5nO1xuICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuXG4gIC8vIFRpdGxlXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMuYmFja2Ryb3ApIHtcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGlmIChwYXJhbXMudGV4dCB8fCBwYXJhbXMuaHRtbCkge1xuICAgIGlmIChfdHlwZW9mKHBhcmFtcy5odG1sKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoMCBpbiBwYXJhbXMuaHRtbCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIGluIHBhcmFtcy5odG1sOyBfaSsrKSB7XG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbFtfaV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gcGFyYW1zLmh0bWw7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgIH1cbiAgICBzaG93KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cblxuICAvLyBQb3NpdGlvblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfVxuXG4gIC8vIEdyb3dcbiAgaWYgKHBhcmFtcy5ncm93ICYmIHR5cGVvZiBwYXJhbXMuZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZ3Jvd0NsYXNzID0gJ2dyb3ctJyArIHBhcmFtcy5ncm93O1xuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xvc2UgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgQ2xhc3NcbiAgcG9wdXAuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMucG9wdXA7XG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubW9kYWwpO1xuICB9XG5cbiAgLy8gQ3VzdG9tIENsYXNzXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfVxuXG4gIC8vIFByb2dyZXNzIHN0ZXBzXG4gIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICB2YXIgY3VycmVudFByb2dyZXNzU3RlcCA9IHBhcnNlSW50KHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwID09PSBudWxsID8gc3dlZXRBbGVydCQxLmdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAsIDEwKTtcbiAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgZW1wdHkocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG4gICAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2NpcmNsZSk7XG4gICAgICBjaXJjbGUuaW5uZXJIVE1MID0gc3RlcDtcbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLmFjdGl2ZXByb2dyZXNzc3RlcCk7XG4gICAgICB9XG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICBpZiAoaW5kZXggIT09IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBhZGRDbGFzcyhsaW5lLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2xpbmUpO1xuICAgICAgICBsaW5lLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG5cbiAgLy8gSWNvblxuICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBpY29ucy5sZW5ndGg7IF9pMisrKSB7XG4gICAgaGlkZShpY29uc1tfaTJdKTtcbiAgfVxuICBpZiAocGFyYW1zLnR5cGUpIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaWNvblR5cGUgaW4gaWNvblR5cGVzKSB7XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09IGljb25UeXBlKSB7XG4gICAgICAgIHZhbGlkVHlwZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgZXJyb3IoJ1Vua25vd24gYWxlcnQgdHlwZTogJyArIHBhcmFtcy50eXBlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGljb24gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmljb24gKyAnLicgKyBpY29uVHlwZXNbcGFyYW1zLnR5cGVdKTtcbiAgICBzaG93KGljb24pO1xuXG4gICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICAgIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbiwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcpLCAnc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnKSwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIGFkZENsYXNzKGljb24sICdzd2FsMi1hbmltYXRlLWVycm9yLWljb24nKTtcbiAgICAgICAgICBhZGRDbGFzcyhpY29uLnF1ZXJ5U2VsZWN0b3IoJy5zd2FsMi14LW1hcmsnKSwgJ3N3YWwyLWFuaW1hdGUteC1tYXJrJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VzdG9tIGltYWdlXG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG4gIGlmIChwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpO1xuICAgIHNob3coaW1hZ2UpO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVdpZHRoKSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUhlaWdodCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgIH1cblxuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuICAgIGlmIChwYXJhbXMuaW1hZ2VDbGFzcykge1xuICAgICAgYWRkQ2xhc3MoaW1hZ2UsIHBhcmFtcy5pbWFnZUNsYXNzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGlkZShpbWFnZSk7XG4gIH1cblxuICAvLyBDYW5jZWwgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjYW5jZWxCdXR0b24pO1xuICB9XG5cbiAgLy8gQ29uZmlybSBidXR0b25cbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoY29uZmlybUJ1dHRvbiwgJ2Rpc3BsYXknKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbmZpcm1CdXR0b24pO1xuICB9XG5cbiAgLy8gQnV0dG9ucyB3cmFwcGVyXG4gIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGhpZGUoYnV0dG9uc1dyYXBwZXIpO1xuICB9IGVsc2Uge1xuICAgIHNob3coYnV0dG9uc1dyYXBwZXIpO1xuICB9XG5cbiAgLy8gRWRpdCB0ZXh0IG9uIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gIGNvbmZpcm1CdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0O1xuICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNhbmNlbEJ1dHRvblRleHQ7XG5cbiAgLy8gQVJJQSBsYWJlbHMgZm9yIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNvbmZpcm1CdXR0b25BcmlhTGFiZWwpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNhbmNlbEJ1dHRvbkFyaWFMYWJlbCk7XG5cbiAgLy8gU2V0IGJ1dHRvbnMgdG8gc2VsZWN0ZWQgYmFja2dyb3VuZCBjb2xvcnNcbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICB9XG5cbiAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcbiAgY29uZmlybUJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb25maXJtO1xuICBhZGRDbGFzcyhjb25maXJtQnV0dG9uLCBwYXJhbXMuY29uZmlybUJ1dHRvbkNsYXNzKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNhbmNlbDtcbiAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBwYXJhbXMuY2FuY2VsQnV0dG9uQ2xhc3MpO1xuXG4gIC8vIEJ1dHRvbnMgc3R5bGluZ1xuICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICByZW1vdmVDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG5cbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG5cbiAgLy8gQ1NTIGFuaW1hdGlvblxuICBpZiAocGFyYW1zLmFuaW1hdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfVxuXG4gIC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL2xpbW9udGUuZ2l0aHViLmlvL3N3ZWV0YWxlcnQyLyNhamF4LXJlcXVlc3QnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbmltYXRpb25zXG4gKlxuICogQHBhcmFtIGFuaW1hdGlvblxuICogQHBhcmFtIG9uQmVmb3JlT3BlblxuICogQHBhcmFtIG9uQ29tcGxldGVcbiAqL1xudmFyIG9wZW5Qb3B1cCA9IGZ1bmN0aW9uIG9wZW5Qb3B1cChhbmltYXRpb24sIG9uQmVmb3JlT3Blbiwgb25Db21wbGV0ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKG9uQmVmb3JlT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChhbmltYXRpb24pIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZhZGUpO1xuICB9XG4gIHNob3cocG9wdXApO1xuXG4gIC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgIWhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbikpIHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKCkge1xuICAgICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbENsb3NlRXZlbnRGaW5pc2hlZCk7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gIH1cblxuICBhZGRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIGlPU2ZpeCgpO1xuICB9XG4gIHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICBpZiAob25Db21wbGV0ZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db21wbGV0ZShwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBmaXhTY3JvbGxiYXIgPSBmdW5jdGlvbiBmaXhTY3JvbGxiYXIoKSB7XG4gIC8vIGZvciBxdWV1ZXMsIGRvIG5vdCBkbyB0aGlzIG1vcmUgdGhhbiBvbmNlXG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiB0aGUgYm9keSBoYXMgb3ZlcmZsb3dcbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBtZWFzdXJlU2Nyb2xsYmFyKCkgKyAncHgnO1xuICB9XG59O1xuXG52YXIgdW5kb1Njcm9sbGJhciA9IGZ1bmN0aW9uIHVuZG9TY3JvbGxiYXIoKSB7XG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmc7XG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuICB9XG59O1xuXG4vLyBGaXggaU9TIHNjcm9sbGluZyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTYyNjMwMi8xMzMxNDI1XG52YXIgaU9TZml4ID0gZnVuY3Rpb24gaU9TZml4KCkge1xuICB2YXIgaU9TID0gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbiAgaWYgKGlPUyAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IG9mZnNldCAqIC0xICsgJ3B4JztcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICB9XG59O1xuXG52YXIgdW5kb0lPU2ZpeCA9IGZ1bmN0aW9uIHVuZG9JT1NmaXgoKSB7XG4gIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gIH1cbn07XG5cbi8vIFN3ZWV0QWxlcnQgZW50cnkgcG9pbnRcbnZhciBzd2VldEFsZXJ0JDEgPSBmdW5jdGlvbiBzd2VldEFsZXJ0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IF9leHRlbmRzKHt9LCBwb3B1cFBhcmFtcyk7XG5cbiAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbMF0pKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHBhcmFtcy50aXRsZSA9IGFyZ3NbMF07XG4gICAgICBwYXJhbXMuaHRtbCA9IGFyZ3NbMV07XG4gICAgICBwYXJhbXMudHlwZSA9IGFyZ3NbMl07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhhcmdzWzBdKTtcbiAgICAgIF9leHRlbmRzKHBhcmFtcywgYXJnc1swXSk7XG4gICAgICBwYXJhbXMuZXh0cmFQYXJhbXMgPSBhcmdzWzBdLmV4dHJhUGFyYW1zO1xuXG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnZW1haWwnICYmIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9PT0gbnVsbCkge1xuICAgICAgICB2YXIgaW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiBpbnB1dFZhbGlkYXRvcihlbWFpbCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvO1xuICAgICAgICAgICAgaWYgKGVtYWlsUmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KCdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gcGFyYW1zLmV4cGVjdFJlamVjdGlvbnMgPyBpbnB1dFZhbGlkYXRvciA6IHN3ZWV0QWxlcnQuYWRhcHRJbnB1dFZhbGlkYXRvcihpbnB1dFZhbGlkYXRvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICd1cmwnICYmIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9PT0gbnVsbCkge1xuICAgICAgICB2YXIgX2lucHV0VmFsaWRhdG9yID0gZnVuY3Rpb24gX2lucHV0VmFsaWRhdG9yKHVybCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1LzEzMzE0MjVcbiAgICAgICAgICAgIHZhciB1cmxSZWdleCA9IC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKSQvO1xuICAgICAgICAgICAgaWYgKHVybFJlZ2V4LnRlc3QodXJsKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgVVJMJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IHBhcmFtcy5leHBlY3RSZWplY3Rpb25zID8gX2lucHV0VmFsaWRhdG9yIDogc3dlZXRBbGVydC5hZGFwdElucHV0VmFsaWRhdG9yKF9pbnB1dFZhbGlkYXRvcik7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGFyZ3VtZW50ISBFeHBlY3RlZCBcInN0cmluZ1wiIG9yIFwib2JqZWN0XCIsIGdvdCAnICsgX3R5cGVvZihhcmdzWzBdKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgcmVzb2x2aW5nL3JlamVjdGluZy9zZXR0bGluZ1xuICAgIHZhciBzdWNjZWVkV2l0aCA9IGZ1bmN0aW9uIHN1Y2NlZWRXaXRoKHZhbHVlKSB7XG4gICAgICBzd2VldEFsZXJ0LmNsb3NlUG9wdXAocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBkaXNtaXNzV2l0aCA9IGZ1bmN0aW9uIGRpc21pc3NXaXRoKGRpc21pc3MpIHtcbiAgICAgIHN3ZWV0QWxlcnQuY2xvc2VQb3B1cChwYXJhbXMub25DbG9zZSk7XG4gICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgcmVqZWN0KGRpc21pc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6IGRpc21pc3MgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgZXJyb3JXaXRoID0gZnVuY3Rpb24gZXJyb3JXaXRoKGVycm9yJCQxKSB7XG4gICAgICBzd2VldEFsZXJ0LmNsb3NlUG9wdXAocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgcmVqZWN0KGVycm9yJCQxKTtcbiAgICB9O1xuXG4gICAgLy8gQ2xvc2Ugb24gdGltZXJcbiAgICBpZiAocGFyYW1zLnRpbWVyKSB7XG4gICAgICBwb3B1cC50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzV2l0aCgndGltZXInKTtcbiAgICAgIH0sIHBhcmFtcy50aW1lcik7XG4gICAgfVxuXG4gICAgLy8gR2V0IGlucHV0IGVsZW1lbnQgYnkgc3BlY2lmaWVkIHR5cGUgb3IsIGlmIHR5cGUgaXNuJ3Qgc3BlY2lmaWVkLCBieSBwYXJhbXMuaW5wdXRcbiAgICB2YXIgZ2V0SW5wdXQgPSBmdW5jdGlvbiBnZXRJbnB1dChpbnB1dFR5cGUpIHtcbiAgICAgIGlucHV0VHlwZSA9IGlucHV0VHlwZSB8fCBwYXJhbXMuaW5wdXQ7XG4gICAgICBpZiAoIWlucHV0VHlwZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSk7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jaGVja2JveCArICcgaW5wdXQnKTtcbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJyBpbnB1dDpjaGVja2VkJykgfHwgcG9wdXAucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYWRpbyArICcgaW5wdXQ6Zmlyc3QtY2hpbGQnKTtcbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhbmdlICsgJyBpbnB1dCcpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgcG9wdXAgaW5wdXRcbiAgICB2YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gICAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dCgpO1xuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAocGFyYW1zLmlucHV0KSB7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IDEgOiAwO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5maWxlc1swXSA6IG51bGw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGlucHV0IGF1dG9mb2N1c1xuICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dCgpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpcm0gPSBmdW5jdGlvbiBjb25maXJtKHZhbHVlKSB7XG4gICAgICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgICAgc3dlZXRBbGVydC5zaG93TG9hZGluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICB2YXIgcHJlQ29uZmlybVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIHBhcmFtcy5leHRyYVBhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyYW1zLmV4cGVjdFJlamVjdGlvbnMpIHtcbiAgICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgc3dlZXRBbGVydC5zaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlKGdldFZhbGlkYXRpb25FcnJvcigpKSkge1xuICAgICAgICAgICAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2NlZWRXaXRoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTW91c2UgaW50ZXJhY3Rpb25zXG4gICAgdmFyIG9uQnV0dG9uRXZlbnQgPSBmdW5jdGlvbiBvbkJ1dHRvbkV2ZW50KGV2ZW50KSB7XG4gICAgICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICAgIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcbiAgICAgIHZhciB0YXJnZXRlZENvbmZpcm0gPSBjb25maXJtQnV0dG9uICYmIChjb25maXJtQnV0dG9uID09PSB0YXJnZXQgfHwgY29uZmlybUJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcbiAgICAgIHZhciB0YXJnZXRlZENhbmNlbCA9IGNhbmNlbEJ1dHRvbiAmJiAoY2FuY2VsQnV0dG9uID09PSB0YXJnZXQgfHwgY2FuY2VsQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuXG4gICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JMdW1pbmFuY2UocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvciwgLTAuMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IsIC0wLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2VvdXQnOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCkge1xuICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JMdW1pbmFuY2UocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvciwgLTAuMik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IsIC0wLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgIC8vIENsaWNrZWQgJ2NvbmZpcm0nXG4gICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBzd2VldEFsZXJ0LmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICBzd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zKCk7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmRpc2FibGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBwYXJhbXMuZXh0cmFQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZXhwZWN0UmVqZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5zaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcldpdGgoZXJyb3IkJDEpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsaWNrZWQgJ2NhbmNlbCdcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsICYmIHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGRpc21pc3NXaXRoKCdjYW5jZWwnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBidXR0b25zID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2luZyBwb3B1cCBieSBjbG9zZSBidXR0b25cbiAgICBnZXRDbG9zZUJ1dHRvbigpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNtaXNzV2l0aCgnY2xvc2UnKTtcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gQ2xvc2luZyBwb3B1cCBieSBvdmVybGF5IGNsaWNrXG4gICAgICBwb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBwb3B1cCB8fCBwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gfHwgcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VQb3B1cChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgICAgZGlzbWlzc1dpdGgoJ292ZXJsYXknKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGNvbnRhaW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgZGlzbWlzc1dpdGgoJ292ZXJsYXknKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcblxuICAgIC8vIFJldmVyc2UgYnV0dG9ucyAoQ29uZmlybSBvbiB0aGUgcmlnaHQgc2lkZSlcbiAgICBpZiAocGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyBoYW5kbGluZ1xuICAgIHZhciBzZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKHBhcmFtcy5mb2N1c0NhbmNlbCk7XG4gICAgICAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50O1xuXG4gICAgICAgIC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICAgICAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgZWxlbWVudCBpcyB2aXNpYmxlXG4gICAgICAgIHZhciBlbCA9IGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGlzVmlzaWJsZShlbCkpIHtcbiAgICAgICAgICByZXR1cm4gZWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICB2YXIgYXJyb3dLZXlzID0gWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsICdMZWZ0JywgJ1JpZ2h0JywgJ1VwJywgJ0Rvd24nIC8vIElFMTFcbiAgICAgIF07XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5pc0NvbXBvc2luZykge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGdldElucHV0KCkpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBzdWJtaXRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzd2VldEFsZXJ0LmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRBQlxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMocGFyYW1zLmZvY3VzQ2FuY2VsKTtcbiAgICAgICAgdmFyIGJ0bkluZGV4ID0gLTE7IC8vIEZpbmQgdGhlIGJ1dHRvbiAtIG5vdGUsIHRoaXMgaXMgYSBub2RlbGlzdCwgbm90IGFuIGFycmF5LlxuICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pNF0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2k0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShjYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgLy8gYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjYW5jZWxCdXR0b24gJiYgaXNWaXNpYmxlKGNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRVNDXG4gICAgICB9IGVsc2UgaWYgKChlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnKSAmJiBwYXJhbXMuYWxsb3dFc2NhcGVLZXkgPT09IHRydWUpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ2VzYycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLnRvYXN0ICYmIHdpbmRvd09ua2V5ZG93bk92ZXJyaWRkZW4pIHtcbiAgICAgIHdpbmRvdy5vbmtleWRvd24gPSBwcmV2aW91c1dpbmRvd0tleURvd247XG4gICAgICB3aW5kb3dPbmtleWRvd25PdmVycmlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMudG9hc3QgJiYgIXdpbmRvd09ua2V5ZG93bk92ZXJyaWRkZW4pIHtcbiAgICAgIHByZXZpb3VzV2luZG93S2V5RG93biA9IHdpbmRvdy5vbmtleWRvd247XG4gICAgICB3aW5kb3dPbmtleWRvd25PdmVycmlkZGVuID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5vbmtleWRvd24gPSBoYW5kbGVLZXlEb3duO1xuICAgIH1cblxuICAgIC8vIExvYWRpbmcgc3RhdGVcbiAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uIGFuZCBkaXNhYmxlIENhbmNlbCBidXR0b25cbiAgICAgKi9cbiAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nID0gc3dlZXRBbGVydC5kaXNhYmxlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgICAgIGhpZGUoY29uZmlybUJ1dHRvbik7XG4gICAgICAgIGlmICghcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICBoaWRlKGdldEJ1dHRvbnNXcmFwcGVyKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZW1vdmVDbGFzcyhidXR0b25zV3JhcHBlciwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgICBwb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0VGl0bGUoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDb250ZW50KCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldElucHV0KCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEltYWdlKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldEJ1dHRvbnNXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH07XG4gICAgc3dlZXRBbGVydC5nZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUNvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUNvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9yICh2YXIgX2k1ID0gMDsgX2k1IDwgcmFkaW9zLmxlbmd0aDsgX2k1KyspIHtcbiAgICAgICAgICByYWRpb3NbX2k1XS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmRpc2FibGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9yICh2YXIgX2k2ID0gMDsgX2k2IDwgcmFkaW9zLmxlbmd0aDsgX2k2KyspIHtcbiAgICAgICAgICByYWRpb3NbX2k2XS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2hvdyBibG9jayB3aXRoIHZhbGlkYXRpb24gZXJyb3JcbiAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSBnZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgIHZhbGlkYXRpb25FcnJvci5pbm5lckhUTUwgPSBlcnJvciQkMTtcbiAgICAgIHNob3codmFsaWRhdGlvbkVycm9yKTtcblxuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IpO1xuICAgICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBlcnJvclxuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbkVycm9yID0gZ2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gICAgICBoaWRlKHZhbGlkYXRpb25FcnJvcik7XG5cbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5nZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhcmFtcy5wcm9ncmVzc1N0ZXBzO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LnNldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAocHJvZ3Jlc3NTdGVwcykge1xuICAgICAgcGFyYW1zLnByb2dyZXNzU3RlcHMgPSBwcm9ncmVzc1N0ZXBzO1xuICAgICAgc2V0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LnNob3dQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2hvdyhnZXRQcm9ncmVzc1N0ZXBzKCkpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmhpZGVQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGlkZShnZXRQcm9ncmVzc1N0ZXBzKCkpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuXG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ2hhcy1pbnB1dCddKTtcbiAgICB9XG5cbiAgICAvLyBpbnB1dHNcbiAgICB2YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcbiAgICB2YXIgaW5wdXQgPSB2b2lkIDA7XG4gICAgZm9yICh2YXIgX2k3ID0gMDsgX2k3IDwgaW5wdXRUeXBlcy5sZW5ndGg7IF9pNysrKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZXNbX2k3XV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIGlucHV0Q2xhc3MpO1xuICAgICAgaW5wdXQgPSBnZXRJbnB1dChpbnB1dFR5cGVzW19pN10pO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGZvciAodmFyIGogaW4gaW5wdXQuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChpbnB1dC5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2pdLm5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgIT09ICd0eXBlJyAmJiBhdHRyTmFtZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgcGFyYW1zLmlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGNsYXNzXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dENsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuaW5wdXRDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAndGVsJzpcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgdmFyIHJhbmdlID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gICAgICAgIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICBzaG93KHJhbmdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uVmFsdWUgaW4gaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBpbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvdyhzZWxlY3QpO1xuICAgICAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgICAgIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIGZvciAodmFyIHJhZGlvVmFsdWUgaW4gaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9MYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlKSB7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYWRpb0xhYmVsU3Bhbi5pbm5lckhUTUwgPSBpbnB1dE9wdGlvbnNbcmFkaW9WYWx1ZV07XG4gICAgICAgICAgICByYWRpb0xhYmVsLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsU3Bhbik7XG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IHJhZGlvSW5wdXQuaWQ7XG4gICAgICAgICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvdyhyYWRpbyk7XG4gICAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHZhciBjaGVja2JveCA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuY2hlY2tib3gpO1xuICAgICAgICB2YXIgY2hlY2tib3hJbnB1dCA9IGdldElucHV0KCdjaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveElucHV0LnZhbHVlID0gMTtcbiAgICAgICAgY2hlY2tib3hJbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgdmFyIGxhYmVsID0gY2hlY2tib3guZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAgIGNoZWNrYm94LnJlbW92ZUNoaWxkKGxhYmVsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgc2hvdyhjaGVja2JveCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgc2hvdyh0ZXh0YXJlYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFwidGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJudW1iZXJcIiwgXCJ0ZWxcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwidGV4dGFyZWFcIiwgXCJmaWxlXCIgb3IgXCJ1cmxcIiwgZ290IFwiJyArIHBhcmFtcy5pbnB1dCArICdcIicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzd2VldEFsZXJ0LnNob3dMb2FkaW5nKCk7XG4gICAgICAgIHBhcmFtcy5pbnB1dE9wdGlvbnMudGhlbihmdW5jdGlvbiAoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgc3dlZXRBbGVydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyhwYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3Qgb3IgUHJvbWlzZSwgZ290ICcgKyBfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuUG9wdXAocGFyYW1zLmFuaW1hdGlvbiwgcGFyYW1zLm9uQmVmb3JlT3BlbiwgcGFyYW1zLm9uT3Blbik7XG5cbiAgICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgICAgaWYgKCFwYXJhbXMuYWxsb3dFbnRlcktleSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICBjYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Rm9jdXMoLTEsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpeCBzY3JvbGxcbiAgICBnZXRDb250YWluZXIoKS5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHN3YWwyIHBvcHVwIGlzIHNob3duXG4gKi9cbnN3ZWV0QWxlcnQkMS5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIWdldFBvcHVwKCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICovXG5zd2VldEFsZXJ0JDEucXVldWUgPSBmdW5jdGlvbiAoc3RlcHMpIHtcbiAgcXVldWUgPSBzdGVwcztcbiAgdmFyIHJlc2V0UXVldWUgPSBmdW5jdGlvbiByZXNldFF1ZXVlKCkge1xuICAgIHF1ZXVlID0gW107XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xuICB9O1xuICB2YXIgcXVldWVSZXN1bHQgPSBbXTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAoZnVuY3Rpb24gc3RlcChpLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGkgPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpO1xuXG4gICAgICAgIHN3ZWV0QWxlcnQkMShxdWV1ZVtpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBxdWV1ZVJlc3VsdC5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICBzdGVwKGkgKyAxLCBjYWxsYmFjayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc2V0UXVldWUoKTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiByZXN1bHQuZGlzbWlzcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHsgdmFsdWU6IHF1ZXVlUmVzdWx0IH0pO1xuICAgICAgfVxuICAgIH0pKDApO1xuICB9KTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAqL1xuc3dlZXRBbGVydCQxLmdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIHBvcHVwIHRvIHRoZSBxdWV1ZVxuICovXG5zd2VldEFsZXJ0JDEuaW5zZXJ0UXVldWVTdGVwID0gZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gIGlmIChpbmRleCAmJiBpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgIHJldHVybiBxdWV1ZS5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICB9XG4gIHJldHVybiBxdWV1ZS5wdXNoKHN0ZXApO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBwb3B1cCBmcm9tIHRoZSBxdWV1ZVxuICovXG5zd2VldEFsZXJ0JDEuZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgcXVldWVbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgIHF1ZXVlLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xvc2Ugc3dlZXRBbGVydFxuICovXG5zd2VldEFsZXJ0JDEuY2xvc2UgPSBzd2VldEFsZXJ0JDEuY2xvc2VQb3B1cCA9IHN3ZWV0QWxlcnQkMS5jbG9zZU1vZGFsID0gc3dlZXRBbGVydCQxLmNsb3NlVG9hc3QgPSBmdW5jdGlvbiAob25Db21wbGV0ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIGlmICghcG9wdXApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIGNsZWFyVGltZW91dChwb3B1cC50aW1lb3V0KTtcblxuICBpZiAoIWlzVG9hc3QoKSkge1xuICAgIHJlc2V0UHJldlN0YXRlKCk7XG4gICAgd2luZG93Lm9ua2V5ZG93biA9IHByZXZpb3VzV2luZG93S2V5RG93bjtcbiAgICB3aW5kb3dPbmtleWRvd25PdmVycmlkZGVuID0gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlID0gZnVuY3Rpb24gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCkge1xuICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1snaGFzLWlucHV0J10pO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcblxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9TY3JvbGxiYXIoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgIWhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbikpIHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKCkge1xuICAgICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbENsb3NlRXZlbnRGaW5pc2hlZCk7XG4gICAgICBpZiAoaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGltbWVkaWF0ZWx5XG4gICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCk7XG4gIH1cbiAgaWYgKG9uQ29tcGxldGUgIT09IG51bGwgJiYgdHlwZW9mIG9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uQ29tcGxldGUocG9wdXApO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAqL1xuc3dlZXRBbGVydCQxLmNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuc3dlZXRBbGVydCQxLmNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0JDEuc2hvd0xvYWRpbmcgPSBzd2VldEFsZXJ0JDEuZW5hYmxlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgaWYgKCFwb3B1cCkge1xuICAgIHN3ZWV0QWxlcnQkMSgnJyk7XG4gIH1cbiAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuXG4gIHNob3coYnV0dG9uc1dyYXBwZXIpO1xuICBzaG93KGNvbmZpcm1CdXR0b24sICdpbmxpbmUtYmxvY2snKTtcbiAgYWRkQ2xhc3MoYnV0dG9uc1dyYXBwZXIsIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gIHBvcHVwLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5zd2VldEFsZXJ0JDEuaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIChwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIGRlZmF1bHRQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW1OYW1lKSB8fCBwYXJhbU5hbWUgPT09ICdleHRyYVBhcmFtcyc7XG59O1xuXG4vKipcbiAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbnN3ZWV0QWxlcnQkMS5pc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZXByZWNhdGVkUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG59O1xuXG4vKipcbiAqIFNldCBkZWZhdWx0IHBhcmFtcyBmb3IgZWFjaCBwb3B1cFxuICogQHBhcmFtIHtPYmplY3R9IHVzZXJQYXJhbXNcbiAqL1xuc3dlZXRBbGVydCQxLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKHVzZXJQYXJhbXMpIHtcbiAgaWYgKCF1c2VyUGFyYW1zIHx8ICh0eXBlb2YgdXNlclBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXNlclBhcmFtcykpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcnJvcigndGhlIGFyZ3VtZW50IGZvciBzZXREZWZhdWx0cygpIGlzIHJlcXVpcmVkIGFuZCBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgfVxuXG4gIHNob3dXYXJuaW5nc0ZvclBhcmFtcyh1c2VyUGFyYW1zKTtcblxuICAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gdXNlclBhcmFtcyB0byBwb3B1cFBhcmFtc1xuICBmb3IgKHZhciBwYXJhbSBpbiB1c2VyUGFyYW1zKSB7XG4gICAgaWYgKHN3ZWV0QWxlcnQkMS5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgcG9wdXBQYXJhbXNbcGFyYW1dID0gdXNlclBhcmFtc1twYXJhbV07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFJlc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKi9cbnN3ZWV0QWxlcnQkMS5yZXNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICBwb3B1cFBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zKTtcbn07XG5cbi8qKlxuICogQWRhcHQgYSBsZWdhY3kgaW5wdXRWYWxpZGF0b3IgZm9yIHVzZSB3aXRoIGV4cGVjdFJlamVjdGlvbnM9ZmFsc2VcbiAqL1xuc3dlZXRBbGVydCQxLmFkYXB0SW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiAobGVnYWN5VmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhZGFwdGVkSW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gbGVnYWN5VmFsaWRhdG9yLmNhbGwodGhpcywgaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yO1xuICAgIH0pO1xuICB9O1xufTtcblxuc3dlZXRBbGVydCQxLm5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuc3dlZXRBbGVydCQxLnZlcnNpb24gPSAnNy4wLjEwJztcblxuc3dlZXRBbGVydCQxLmRlZmF1bHQgPSBzd2VldEFsZXJ0JDE7XG5cbi8vIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbnZhciBzdGF0ZXMgPSB7XG4gIHByZXZpb3VzQWN0aXZlRWxlbWVudDogbnVsbCxcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuXG4gIC8vIERldGVjdCBOb2RlIGVudlxufTt2YXIgaXNOb2RlRW52ID0gZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcbn07XG5cbi8qXG4gKiBBZGQgbW9kYWwgKyBvdmVybGF5IHRvIERPTVxuICovXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgaWYgaXQgZXhpc3RzXG4gIHZhciBjID0gZ2V0Q29udGFpbmVyKCk7XG4gIGlmIChjKSB7XG4gICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1snaGFzLWlucHV0J10pO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgfVxuXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gc3dlZXRIVE1MO1xuXG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgdmFyIGZpbGUgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICB2YXIgcmFuZ2UgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhbmdlICsgJyBpbnB1dCcpO1xuICB2YXIgcmFuZ2VPdXRwdXQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhbmdlICsgJyBvdXRwdXQnKTtcbiAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgdmFyIGNoZWNrYm94ID0gcG9wdXAucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jaGVja2JveCArICcgaW5wdXQnKTtcbiAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG5cbiAgLy8gYTExeVxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpO1xuXG4gIHZhciByZXNldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICAgIHN3ZWV0QWxlcnQkMS5pc1Zpc2libGUoKSAmJiBzd2VldEFsZXJ0JDEucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG4gIGZpbGUub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG4gIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG4gIHRleHRhcmVhLm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByYW5nZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIHJhbmdlLnByZXZpb3VzU2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHJldHVybiBwb3B1cDtcbn07XG5cbi8qXG4gKiBNYW5pcHVsYXRlIERPTVxuICovXG5cbnZhciBzd2VldEhUTUwgPSAoJ1xcbiA8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIicgKyBzd2FsQ2xhc3Nlcy50aXRsZSArICdcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucG9wdXAgKyAnXCIgdGFiaW5kZXg9XCItMVwiPlxcbiAgIDx1bCBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzICsgJ1wiPjwvdWw+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLmVycm9yICsgJ1wiPlxcbiAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmtcIj48c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLnF1ZXN0aW9uICsgJ1wiPj88L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmljb24gKyAnICcgKyBpY29uVHlwZXMud2FybmluZyArICdcIj4hPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLmluZm8gKyAnXCI+aTwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5zdWNjZXNzICsgJ1wiPlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XFxuICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIj48L3NwYW4+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxpbWcgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaW1hZ2UgKyAnXCIgLz5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnR3cmFwcGVyICsgJ1wiPlxcbiAgIDxoMiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy50aXRsZSArICdcIiBpZD1cIicgKyBzd2FsQ2xhc3Nlcy50aXRsZSArICdcIj48L2gyPlxcbiAgIDxkaXYgaWQ9XCInICsgc3dhbENsYXNzZXMuY29udGVudCArICdcIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50ICsgJ1wiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxpbnB1dCBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pbnB1dCArICdcIiAvPlxcbiAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmZpbGUgKyAnXCIgLz5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnJhbmdlICsgJ1wiPlxcbiAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiAvPlxcbiAgIDwvZGl2PlxcbiAgIDxzZWxlY3QgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuc2VsZWN0ICsgJ1wiPjwvc2VsZWN0PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucmFkaW8gKyAnXCI+PC9kaXY+XFxuICAgPGxhYmVsIGZvcj1cIicgKyBzd2FsQ2xhc3Nlcy5jaGVja2JveCArICdcIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jaGVja2JveCArICdcIj5cXG4gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxcbiAgIDwvbGFiZWw+XFxuICAgPHRleHRhcmVhIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnRleHRhcmVhICsgJ1wiPjwvdGV4dGFyZWE+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IgKyAnXCIgaWQ9XCInICsgc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yICsgJ1wiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuYnV0dG9uc3dyYXBwZXIgKyAnXCI+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jb25maXJtICsgJ1wiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jYW5jZWwgKyAnXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2xvc2UgKyAnXCI+XFx4RDc8L2J1dHRvbj5cXG4gPC9kaXY+XFxuJykucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuXG52YXIgZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNvbnRhaW5lcik7XG59O1xuXG52YXIgZ2V0UG9wdXAgPSBmdW5jdGlvbiBnZXRQb3B1cCgpIHtcbiAgcmV0dXJuIGdldENvbnRhaW5lcigpID8gZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5wb3B1cCkgOiBudWxsO1xufTtcblxudmFyIGdldEljb25zID0gZnVuY3Rpb24gZ2V0SWNvbnMoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHN3YWxDbGFzc2VzLmljb24pO1xufTtcblxudmFyIGVsZW1lbnRCeUNsYXNzID0gZnVuY3Rpb24gZWxlbWVudEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBnZXRDb250YWluZXIoKSA/IGdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy4nICsgY2xhc3NOYW1lKSA6IG51bGw7XG59O1xuXG52YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcbn07XG5cbnZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xufTtcblxudmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSk7XG59O1xuXG52YXIgZ2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzKTtcbn07XG5cbnZhciBnZXRWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IpO1xufTtcblxudmFyIGdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiBnZXRDb25maXJtQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29uZmlybSk7XG59O1xuXG52YXIgZ2V0Q2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2FuY2VsQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2FuY2VsKTtcbn07XG5cbnZhciBnZXRCdXR0b25zV3JhcHBlciA9IGZ1bmN0aW9uIGdldEJ1dHRvbnNXcmFwcGVyKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYnV0dG9uc3dyYXBwZXIpO1xufTtcblxudmFyIGdldENsb3NlQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2xvc2VCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG59O1xuXG52YXIgZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gQXJyYXkuZnJvbShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSlcbiAgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBhID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuICAgIGIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIHRleHRhcmVhLCBzZWxlY3QsIGEsIFt0YWJpbmRleD1cIjBcIl0nKSk7XG5cbiAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSk7XG59O1xuXG52YXIgaXNNb2RhbCA9IGZ1bmN0aW9uIGlzTW9kYWwoKSB7XG4gIHJldHVybiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xufTtcblxudmFyIGlzVG9hc3QgPSBmdW5jdGlvbiBpc1RvYXN0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xufTtcblxudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpO1xuXG4gIC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1LzEzMzE0MjVcbiAgICB2YXIgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgfVxufTtcblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmICghZWxlbSB8fCAhY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWVsZW0gfHwgIWNsYXNzTmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoYXNDbGFzcyhlbGVtLmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSwgZGlzcGxheSkge1xuICBpZiAoIWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID0gZWxlbSA9PT0gZ2V0UG9wdXAoKSB8fCBlbGVtID09PSBnZXRCdXR0b25zV3JhcHBlcigpID8gJ2ZsZXgnIDogJ2Jsb2NrJztcbiAgfVxuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn07XG5cbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG52YXIgZW1wdHkgPSBmdW5jdGlvbiBlbXB0eShlbGVtKSB7XG4gIHdoaWxlIChlbGVtLmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbi8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoO1xufTtcblxudmFyIHJlbW92ZVN0eWxlUHJvcGVydHkgPSBmdW5jdGlvbiByZW1vdmVTdHlsZVByb3BlcnR5KGVsZW0sIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICB9XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcbiAgZm9yICh2YXIgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICBpZiAodHJhbnNFbmRFdmVudE5hbWVzLmhhc093blByb3BlcnR5KGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0oKTtcblxuLy8gUmVzZXQgcHJldmlvdXMgd2luZG93IGtleWRvd24gaGFuZGxlciBhbmQgZm9jdWVkIGVsZW1lbnRcbnZhciByZXNldFByZXZTdGF0ZSA9IGZ1bmN0aW9uIHJlc2V0UHJldlN0YXRlKCkge1xuICBpZiAoc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudCAmJiBzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICB2YXIgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICBpZiAodHlwZW9mIHggIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gSUUgZG9lc24ndCBoYXZlIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBNZWFzdXJlIHdpZHRoIG9mIHNjcm9sbGJhclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzI0wyNzktTDI4NlxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cztcbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn07XG5cbi8qKlxuICogSW5qZWN0IGEgc3RyaW5nIG9mIENTUyBpbnRvIHRoZSBwYWdlIGhlYWRlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NcbiAqL1xudmFyIGluamVjdENTUyA9IGZ1bmN0aW9uIGluamVjdENTUygpIHtcbiAgdmFyIGNzcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG5cbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufTtcblxuaW5qZWN0Q1NTKHN0eWxlcyk7XG5cbnJldHVybiBzd2VldEFsZXJ0JDE7XG5cbn0pKSk7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlN3ZWV0YWxlcnQyKSB3aW5kb3cuc3dlZXRBbGVydCA9IHdpbmRvdy5zd2FsID0gd2luZG93LlN3ZWV0YWxlcnQyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA4IiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIk1hdGNoXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGVmYXVsdFZhbHVlXCI6bnVsbH1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm1hdGNoXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29sb3JcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjcwfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCJxdWVyeSBNYXRjaCgkaWQ6IFN0cmluZyEpIHtcXG4gIG1hdGNoKGlkOiAkaWQpIHtcXG4gICAgaWRcXG4gICAgY29sb3JcXG4gIH1cXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIFxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9tYXRjaC9tYXRjaC5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA4MjJcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBREE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUE0QkE7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3QwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9