webpackHotUpdate_N_E("pages/index",{

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


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_breakpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-breakpoint */ "./node_modules/use-breakpoint/index.umd.js");
/* harmony import */ var use_breakpoint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_breakpoint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_my_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/my-footer */ "./components/my-footer.tsx");
/* harmony import */ var _components_my_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/my-gallery */ "./components/my-gallery.tsx");
/* harmony import */ var _components_my_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/my-navbar */ "./components/my-navbar.tsx");
/* harmony import */ var _components_our_job__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/our-job */ "./components/our-job.tsx");
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var Index = function Index() {
  _s();

  var _useBreakpoint = use_breakpoint__WEBPACK_IMPORTED_MODULE_3___default()({
    mobile: 0,
    tablet: 768,
    desktop: 1280
  }, 'desktop'),
      breakpoint = _useBreakpoint.breakpoint,
      maxWidth = _useBreakpoint.maxWidth,
      minWidth = _useBreakpoint.minWidth;

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "Rapid Transport USA, LLC")), __jsx(_components_my_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }), __jsx(_components_our_job__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }), __jsx(_components_my_gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }), __jsx(_components_contacts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }), __jsx(_components_my_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }));
};

_s(Index, "R8QKE9n2J7bbmcNuahXFoKh4GIQ=", false, function () {
  return [use_breakpoint__WEBPACK_IMPORTED_MODULE_3___default.a];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1icmVha3BvaW50L2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlQnJlYWtwb2ludCIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4V2lkdGgiLCJtaW5XaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhLGVBQWUsS0FBc0QsV0FBVyxtQkFBTyxDQUFDLDRDQUFPLEdBQUcsU0FBOEcsQ0FBQyxxQkFBcUIsZ0JBQWdCLFFBQVEsR0FBRyxrRkFBa0YsOERBQThELFFBQVEsc0NBQXNDLFdBQVc7QUFDdmQseUJBQXlCLFNBQVMsa0JBQWtCLHdDQUF3QyxpQkFBaUIsRUFBRSwyQkFBMkIsZ0JBQWdCLHlCQUF5QixpQ0FBaUMsd0VBQXdFLE9BQU8sNENBQTRDLEdBQUcsdUJBQXVCLHdCQUF3QiwyQkFBMkIsWUFBWSw4QkFBOEIsTUFBTSx5QkFBeUI7QUFDcmUsRUFBRSxFQUFFLHVCQUF1Qiw4Q0FBOEMsZ0JBQWdCLE1BQU0sdUJBQXVCLHdCQUF3QixzREFBc0QsT0FBTyxpQkFBaUIsZUFBZSxpQkFBaUIsa0JBQWtCLDRCQUE0QixFQUFFLGtCQUFrQiw2QkFBNkIsV0FBVyxHQUFHLFFBQVEsVUFBVSxzQ0FBc0MsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNWE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLHVCQUV3QkMscURBQWEsQ0FBQztBQUFFQyxVQUFNLEVBQUUsQ0FBVjtBQUFhQyxVQUFNLEVBQUUsR0FBckI7QUFBMEJDLFdBQU8sRUFBRTtBQUFuQyxHQUFELEVBQTRDLFNBQTVDLENBRnJDO0FBQUEsTUFFWEMsVUFGVyxrQkFFWEEsVUFGVztBQUFBLE1BRUNDLFFBRkQsa0JBRUNBLFFBRkQ7QUFBQSxNQUVXQyxRQUZYLGtCQUVXQSxRQUZYOztBQUluQixTQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREQsQ0FERCxFQUtDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELEVBT0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsRUFTQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURCxFQVdDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhELEVBYUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkQsRUFlQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxDQUREO0FBbUJBLENBdkJEOztHQUFNUCxLO1VBRXNDQyxxRDs7O0tBRnRDRCxLO0FBeUJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMGQ0MjVjNzkxYjNiYTkyMzJkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICAgIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gICAgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAgICBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG4gICAgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbiAgICBNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG4gICAgU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG4gICAgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKGIsZSl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMscmVxdWlyZShcInJlYWN0XCIpKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCIsXCJyZWFjdFwiXSxlKTooYj1ifHxzZWxmLGUoYi51c2VCcmVha3BvaW50PXt9LGIuUmVhY3QpKX0pKHRoaXMsZnVuY3Rpb24oYixlKXtmdW5jdGlvbiBoKGMsYil7dmFyIGY9e30sYTtmb3IoYSBpbiBjKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGEpJiYwPmIuaW5kZXhPZihhKSYmKGZbYV09Y1thXSk7aWYobnVsbCE9YyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBkPTA7Zm9yKGE9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhjKTtkPGEubGVuZ3RoO2QrKykwPmIuaW5kZXhPZihhW2RdKSYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGMsXG5hW2RdKSYmKGZbYVtkXV09Y1thW2RdXSl9cmV0dXJuIGZ9dmFyIG09ZnVuY3Rpb24oYyl7dmFyIGI9T2JqZWN0LmtleXMoYykuc29ydChmdW5jdGlvbihiLGEpe3JldHVybiBjW2FdLWNbYl19KTtyZXR1cm4gYi5tYXAoZnVuY3Rpb24oZixhKXt2YXIgZD1cIlwiLGU9Y1tmXTthPShhPWJbYS0xXSk/Y1thXTp2b2lkIDA7MDw9ZSYmKGQ9XCIobWluLXdpZHRoOiBcIitlK1wicHgpXCIpO1widW5kZWZpbmVkXCIhPT10eXBlb2YgYSYmKGQmJihkKz1cIiBhbmQgXCIpLGQrPVwiKG1heC13aWR0aDogXCIrKGEtMSkrXCJweClcIik7cmV0dXJue2JyZWFrcG9pbnQ6ZixtYXhXaWR0aDphLG1pbldpZHRoOmUscXVlcnk6ZH19KX07Yi5jcmVhdGVNZWRpYVF1ZXJpZXM9bTtiLmRlZmF1bHQ9ZnVuY3Rpb24oYixrKXt2YXIgYz1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbShiKX0sW2JdKSxhPWUudXNlU3RhdGUoZnVuY3Rpb24oKXtpZihrKXt2YXIgYT1jLmZpbmQoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYnJlYWtwb2ludD09PVxua30pO3JldHVybiBoKGEsW1wicXVlcnlcIl0pfX0pLGQ9YVswXSxsPWFbMV0sZz1lLnVzZUNhbGxiYWNrKGZ1bmN0aW9uKGEsYil7YS5tYXRjaGVzJiZsKGIpfSxbbF0pO2UudXNlRWZmZWN0KGZ1bmN0aW9uKCl7dmFyIGE9Yy5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9YS5xdWVyeSxjPWgoYSxbXCJxdWVyeVwiXSksZD13aW5kb3cubWF0Y2hNZWRpYShiKTtnKGQsYyk7dmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4gZyhkLGMpfTtkLmFkZExpc3RlbmVyKGUpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBkLnJlbW92ZUxpc3RlbmVyKGUpfX0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX0pfX0sW2MsZ10pO3JldHVybiBkfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pXG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSGVhZGluZyB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCBmcm9tICd1c2UtYnJlYWtwb2ludCc7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQtdXMnO1xyXG5pbXBvcnQgQ2FsbCBmcm9tICcuLi9jb21wb25lbnRzL2NhbGwnO1xyXG5pbXBvcnQgQ29udGFjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLWNvbnRlbnQnO1xyXG5pbXBvcnQgTXlGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9teS1mb290ZXInO1xyXG5pbXBvcnQgTXlHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvbXktZ2FsbGVyeSc7XHJcbmltcG9ydCBNeU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL215LW5hdmJhcic7XHJcbmltcG9ydCBPdXJKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9vdXItam9iJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuXHRjb25zdCB7IGJyZWFrcG9pbnQsIG1heFdpZHRoLCBtaW5XaWR0aCB9ID0gdXNlQnJlYWtwb2ludCh7IG1vYmlsZTogMCwgdGFibGV0OiA3NjgsIGRlc2t0b3A6IDEyODAgfSwgJ2Rlc2t0b3AnKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5SYXBpZCBUcmFuc3BvcnQgVVNBLCBMTEM8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8TXlOYXZiYXIgLz5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0XHJcblx0XHRcdDxPdXJKb2IgLz5cclxuXHJcblx0XHRcdDxNeUdhbGxlcnkgLz5cclxuXHJcblx0XHRcdDxDb250YWN0cyAvPlxyXG5cclxuXHRcdFx0PE15Rm9vdGVyIC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=