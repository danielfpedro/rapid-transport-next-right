webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-navbar.tsx":
/*!**********************************!*\
  !*** ./components/my-navbar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
/* harmony import */ var _navbar_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-items */ "./components/navbar-items.tsx");
/* harmony import */ var use_breakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-breakpoint */ "./node_modules/use-breakpoint/index.umd.js");
/* harmony import */ var use_breakpoint__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_breakpoint__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\my-navbar.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var _useBreakpoint = use_breakpoint__WEBPACK_IMPORTED_MODULE_5___default()({
  mobile: 0,
  tablet: 768,
  desktop: 1280
}, 'desktop'),
    breakpoint = _useBreakpoint.breakpoint,
    maxWidth = _useBreakpoint.maxWidth,
    minWidth = _useBreakpoint.minWidth;

var MyNavbar = function MyNavbar() {
  _s();

  var size = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(grommet__WEBPACK_IMPORTED_MODULE_0__["ResponsiveContext"]);

  var socialMedia = __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    color: "facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    color: "instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }));

  var items = __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    gap: "large",
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dir: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), socialMedia);

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, "Size: ", breakpoint, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "xxlarge",
    pad: {
      horizontal: 'large',
      vertical: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    align: size != 'small' ? null : 'center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: size != 'small' ? '340px' : '280px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  })), size != 'small' && items)));
};

_s(MyNavbar, "/KBwov+JmSCTHSSC6VXWAf4OqjQ=");

_c = MyNavbar;
/* harmony default export */ __webpack_exports__["default"] = (MyNavbar);

var _c;

$RefreshReg$(_c, "MyNavbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/use-breakpoint/index.umd.js":
/*!**************************************************!*\
  !*** ./node_modules/use-breakpoint/index.umd.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
*****************************************************************************/
(function(b,e){ true?e(exports,__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined})(this,function(b,e){function h(c,b){var f={},a;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&0>b.indexOf(a)&&(f[a]=c[a]);if(null!=c&&"function"===typeof Object.getOwnPropertySymbols){var d=0;for(a=Object.getOwnPropertySymbols(c);d<a.length;d++)0>b.indexOf(a[d])&&Object.prototype.propertyIsEnumerable.call(c,
a[d])&&(f[a[d]]=c[a[d]])}return f}var m=function(c){var b=Object.keys(c).sort(function(b,a){return c[a]-c[b]});return b.map(function(f,a){var d="",e=c[f];a=(a=b[a-1])?c[a]:void 0;0<=e&&(d="(min-width: "+e+"px)");"undefined"!==typeof a&&(d&&(d+=" and "),d+="(max-width: "+(a-1)+"px)");return{breakpoint:f,maxWidth:a,minWidth:e,query:d}})};b.createMediaQueries=m;b.default=function(b,k){var c=e.useMemo(function(){return m(b)},[b]),a=e.useState(function(){if(k){var a=c.find(function(a){return a.breakpoint===
k});return h(a,["query"])}}),d=a[0],l=a[1],g=e.useCallback(function(a,b){a.matches&&l(b)},[l]);e.useEffect(function(){var a=c.map(function(a){var b=a.query,c=h(a,["query"]),d=window.matchMedia(b);g(d,c);var e=function(){return g(d,c)};d.addListener(e);return function(){return d.removeListener(e)}});return function(){return a.forEach(function(a){return a()})}},[c,g]);return d};Object.defineProperty(b,"__esModule",{value:!0})})


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLWJyZWFrcG9pbnQvaW5kZXgudW1kLmpzIl0sIm5hbWVzIjpbInVzZUJyZWFrcG9pbnQiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJNeU5hdmJhciIsInNpemUiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJSZXNwb25zaXZlQ29udGV4dCIsInNvY2lhbE1lZGlhIiwiaXRlbXMiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJncm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3FCQUUyQ0EscURBQWEsQ0FBQztBQUFFQyxRQUFNLEVBQUUsQ0FBVjtBQUFhQyxRQUFNLEVBQUUsR0FBckI7QUFBMEJDLFNBQU8sRUFBRTtBQUFuQyxDQUFELEVBQTRDLFNBQTVDLEM7SUFBaERDLFUsa0JBQUFBLFU7SUFBWUMsUSxrQkFBQUEsUTtJQUFVQyxRLGtCQUFBQSxROztBQUU5QixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMseURBQWpCLENBQWI7O0FBRUEsTUFBTUMsV0FBVyxHQUNoQixNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQVUsU0FBSyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsdURBQUQ7QUFBVyxTQUFLLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQ7O0FBTUEsTUFBTUMsS0FBSyxHQUNWLE1BQUMsMkNBQUQ7QUFBSyxPQUFHLEVBQUMsT0FBVDtBQUFpQixhQUFTLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBYSxPQUFHLEVBQUMsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUVELFdBRkYsQ0FERDs7QUFPQSxTQUNDLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNRUixVQURSLEVBRUMsTUFBQyxxREFBRDtBQUFhLFNBQUssRUFBQyxTQUFuQjtBQUE2QixPQUFHLEVBQUU7QUFBRVUsZ0JBQVUsRUFBRSxPQUFkO0FBQXVCQyxjQUFRLEVBQUU7QUFBakMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLFNBQUssRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFYO0FBQXdCLFNBQUssRUFBRVIsSUFBSSxJQUFJLE9BQVIsR0FBa0IsSUFBbEIsR0FBeUIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkNBQUQ7QUFBTyxPQUFHLEVBQUMsaUJBQVg7QUFBNkIsU0FBSyxFQUFFQSxJQUFJLElBQUksT0FBUixHQUFrQixPQUFsQixHQUE0QixPQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlFQSxJQUFJLElBQUksT0FBUixJQUFtQkssS0FKckIsQ0FERCxDQUZELENBREQ7QUFhQSxDQTdCRDs7R0FBTU4sUTs7S0FBQUEsUTtBQStCU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2EsZUFBZSxLQUFzRCxXQUFXLG1CQUFPLENBQUMsNENBQU8sR0FBRyxTQUE4RyxDQUFDLHFCQUFxQixnQkFBZ0IsUUFBUSxHQUFHLGtGQUFrRiw4REFBOEQsUUFBUSxzQ0FBc0MsV0FBVztBQUN2ZCx5QkFBeUIsU0FBUyxrQkFBa0Isd0NBQXdDLGlCQUFpQixFQUFFLDJCQUEyQixnQkFBZ0IseUJBQXlCLGlDQUFpQyx3RUFBd0UsT0FBTyw0Q0FBNEMsR0FBRyx1QkFBdUIsd0JBQXdCLDJCQUEyQixZQUFZLDhCQUE4QixNQUFNLHlCQUF5QjtBQUNyZSxFQUFFLEVBQUUsdUJBQXVCLDhDQUE4QyxnQkFBZ0IsTUFBTSx1QkFBdUIsd0JBQXdCLHNEQUFzRCxPQUFPLGlCQUFpQixlQUFlLGlCQUFpQixrQkFBa0IsNEJBQTRCLEVBQUUsa0JBQWtCLDZCQUE2QixXQUFXLEdBQUcsUUFBUSxVQUFVLHNDQUFzQyxTQUFTLEVBQUUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmE4MjlkZjIxODU3ZDM0MDQ1NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFJlc3BvbnNpdmVDb250ZXh0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IEZhY2Vib29rLCBJbnN0YWdyYW0gfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuaW1wb3J0IE5hdmJhckl0ZW1zIGZyb20gJy4vbmF2YmFyLWl0ZW1zJztcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQgZnJvbSAndXNlLWJyZWFrcG9pbnQnO1xyXG5cclxuY29uc3QgeyBicmVha3BvaW50LCBtYXhXaWR0aCwgbWluV2lkdGggfSA9IHVzZUJyZWFrcG9pbnQoeyBtb2JpbGU6IDAsIHRhYmxldDogNzY4LCBkZXNrdG9wOiAxMjgwIH0sICdkZXNrdG9wJyk7XHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICgpID0+IHtcclxuXHRjb25zdCBzaXplID0gUmVhY3QudXNlQ29udGV4dChSZXNwb25zaXZlQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IHNvY2lhbE1lZGlhID0gKFxyXG5cdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJzbWFsbFwiPlxyXG5cdFx0XHQ8RmFjZWJvb2sgY29sb3I9XCJmYWNlYm9va1wiIC8+XHJcblx0XHRcdDxJbnN0YWdyYW0gY29sb3I9XCJpbnN0YWdyYW1cIiAvPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxuXHRjb25zdCBpdGVtcyA9IChcclxuXHRcdDxCb3ggZ2FwPVwibGFyZ2VcIiBkaXJlY3Rpb249XCJyb3dcIj5cclxuXHRcdFx0PE5hdmJhckl0ZW1zIGRpcj1cInJvd1wiIC8+XHJcblx0XHRcdHtzb2NpYWxNZWRpYX1cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGJhY2tncm91bmQ9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRTaXplOiB7YnJlYWtwb2ludH1cclxuXHRcdFx0PE1haW5Db250ZW50IHdpZHRoPVwieHhsYXJnZVwiIHBhZD17eyBob3Jpem9udGFsOiAnbGFyZ2UnLCB2ZXJ0aWNhbDogJzJlbScgfX0+XHJcblx0XHRcdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBmaWxsIGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8Qm94IGZsZXg9e3sgZ3JvdzogMSB9fSBhbGlnbj17c2l6ZSAhPSAnc21hbGwnID8gbnVsbCA6ICdjZW50ZXInfT5cclxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPXtzaXplICE9ICdzbWFsbCcgPyAnMzQwcHgnIDogJzI4MHB4J30gLz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0e3NpemUgIT0gJ3NtYWxsJyAmJiBpdGVtc31cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9NYWluQ29udGVudD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU5hdmJhcjtcclxuIiwiLypcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICAgIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gICAgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAgICBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG4gICAgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbiAgICBNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG4gICAgU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG4gICAgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKGIsZSl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMscmVxdWlyZShcInJlYWN0XCIpKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCIsXCJyZWFjdFwiXSxlKTooYj1ifHxzZWxmLGUoYi51c2VCcmVha3BvaW50PXt9LGIuUmVhY3QpKX0pKHRoaXMsZnVuY3Rpb24oYixlKXtmdW5jdGlvbiBoKGMsYil7dmFyIGY9e30sYTtmb3IoYSBpbiBjKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGEpJiYwPmIuaW5kZXhPZihhKSYmKGZbYV09Y1thXSk7aWYobnVsbCE9YyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBkPTA7Zm9yKGE9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhjKTtkPGEubGVuZ3RoO2QrKykwPmIuaW5kZXhPZihhW2RdKSYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGMsXG5hW2RdKSYmKGZbYVtkXV09Y1thW2RdXSl9cmV0dXJuIGZ9dmFyIG09ZnVuY3Rpb24oYyl7dmFyIGI9T2JqZWN0LmtleXMoYykuc29ydChmdW5jdGlvbihiLGEpe3JldHVybiBjW2FdLWNbYl19KTtyZXR1cm4gYi5tYXAoZnVuY3Rpb24oZixhKXt2YXIgZD1cIlwiLGU9Y1tmXTthPShhPWJbYS0xXSk/Y1thXTp2b2lkIDA7MDw9ZSYmKGQ9XCIobWluLXdpZHRoOiBcIitlK1wicHgpXCIpO1widW5kZWZpbmVkXCIhPT10eXBlb2YgYSYmKGQmJihkKz1cIiBhbmQgXCIpLGQrPVwiKG1heC13aWR0aDogXCIrKGEtMSkrXCJweClcIik7cmV0dXJue2JyZWFrcG9pbnQ6ZixtYXhXaWR0aDphLG1pbldpZHRoOmUscXVlcnk6ZH19KX07Yi5jcmVhdGVNZWRpYVF1ZXJpZXM9bTtiLmRlZmF1bHQ9ZnVuY3Rpb24oYixrKXt2YXIgYz1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbShiKX0sW2JdKSxhPWUudXNlU3RhdGUoZnVuY3Rpb24oKXtpZihrKXt2YXIgYT1jLmZpbmQoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYnJlYWtwb2ludD09PVxua30pO3JldHVybiBoKGEsW1wicXVlcnlcIl0pfX0pLGQ9YVswXSxsPWFbMV0sZz1lLnVzZUNhbGxiYWNrKGZ1bmN0aW9uKGEsYil7YS5tYXRjaGVzJiZsKGIpfSxbbF0pO2UudXNlRWZmZWN0KGZ1bmN0aW9uKCl7dmFyIGE9Yy5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9YS5xdWVyeSxjPWgoYSxbXCJxdWVyeVwiXSksZD13aW5kb3cubWF0Y2hNZWRpYShiKTtnKGQsYyk7dmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4gZyhkLGMpfTtkLmFkZExpc3RlbmVyKGUpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBkLnJlbW92ZUxpc3RlbmVyKGUpfX0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX0pfX0sW2MsZ10pO3JldHVybiBkfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pXG4iXSwic291cmNlUm9vdCI6IiJ9