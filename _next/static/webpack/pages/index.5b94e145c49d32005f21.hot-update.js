webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/use-window-size.tsx":
/*!***********************************!*\
  !*** ./hooks/use-window-size.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useWindowSize() {
  _s();

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  }),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // only execute all the code below in client side
    if (true) {
      // Handler to call on window resize
      var handleResize = function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }; // Add event listener


      window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size

      handleResize(); // Remove event listener on cleanup

      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

_s(useWindowSize, "LiKKyUsmuEn1GUVBiSlgnSfPwBo=");

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

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
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/media */ "./components/media.tsx");
/* harmony import */ var _components_my_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/my-footer */ "./components/my-footer.tsx");
/* harmony import */ var _components_my_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/my-gallery */ "./components/my-gallery.tsx");
/* harmony import */ var _components_my_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/my-navbar */ "./components/my-navbar.tsx");
/* harmony import */ var _components_our_job__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/our-job */ "./components/our-job.tsx");
/* harmony import */ var _hooks_use_window_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-window-size */ "./hooks/use-window-size.tsx");
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var Index = function Index() {
  _s();

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx(_components_media__WEBPACK_IMPORTED_MODULE_5__["MediaContextProvider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, "Rapid Transport USA, LLC")), "Olar: ", Object(_hooks_use_window_size__WEBPACK_IMPORTED_MODULE_10__["default"])(), ";", __jsx(_components_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    at: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Mobile"), __jsx(_components_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    greaterThan: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "Other than Mobile"), __jsx(_components_my_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    breakpoint: _components_media__WEBPACK_IMPORTED_MODULE_5__["Media"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx(_components_our_job__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), __jsx(_components_my_gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx(_components_contacts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx(_components_my_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  })));
};

_s(Index, "zJg5r8J1sBEP1FLST1FDfzCwa5M=", false, function () {
  return [_hooks_use_window_size__WEBPACK_IMPORTED_MODULE_10__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXdpbmRvdy1zaXplLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkluZGV4IiwiTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDeEI7QUFDQTtBQUZ3QixrQkFHY0Msc0RBQVEsQ0FBQztBQUM5Q0MsU0FBSyxFQUFFQyxTQUR1QztBQUU5Q0MsVUFBTSxFQUFFRDtBQUZzQyxHQUFELENBSHRCO0FBQUEsTUFHaEJFLFVBSGdCO0FBQUEsTUFHSkMsYUFISTs7QUFReEJDLHlEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0EsY0FBbUM7QUFDbEM7QUFEa0MsVUFFekJDLFlBRnlCLEdBRWxDLFNBQVNBLFlBQVQsR0FBd0I7QUFDdkI7QUFDQUYscUJBQWEsQ0FBQztBQUNiSixlQUFLLEVBQUVPLE1BQU0sQ0FBQ0MsVUFERDtBQUViTixnQkFBTSxFQUFFSyxNQUFNLENBQUNFO0FBRkYsU0FBRCxDQUFiO0FBSUEsT0FSaUMsRUFVbEM7OztBQUNBRixZQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQyxFQVhrQyxDQWFsQzs7QUFDQUEsa0JBQVksR0Fkc0IsQ0FnQmxDOztBQUNBLGFBQU87QUFBQSxlQUFNQyxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQyxDQUFOO0FBQUEsT0FBUDtBQUNBO0FBQ0QsR0FyQlEsRUFxQk4sRUFyQk0sQ0FBVCxDQVJ3QixDQTZCaEI7O0FBQ1IsU0FBT0gsVUFBUDtBQUNBOztHQS9CUUwsYTs7QUFnQ01BLDRFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNuQixTQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREQsQ0FERCxZQUlRZCx1RUFBYSxFQUpyQixPQUtDLE1BQUMsdURBQUQ7QUFBTyxNQUFFLEVBQUMsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsRUFNQyxNQUFDLHVEQUFEO0FBQU8sZUFBVyxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkQsRUFPQyxNQUFDLDZEQUFEO0FBQVUsY0FBVSxFQUFFZSx1REFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBUUMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkQsRUFTQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURCxFQVVDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZELEVBV0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEQsRUFZQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRCxDQURELENBREQ7QUFrQkEsQ0FuQkQ7O0dBQU1ELEs7VUFPS2QsK0Q7OztLQVBMYyxLO0FBcUJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41Yjk0ZTE0NWM0OWQzMjAwNWYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcblx0Ly8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG5cdC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuXHRjb25zdCBbIHdpbmRvd1NpemUsIHNldFdpbmRvd1NpemUgXSA9IHVzZVN0YXRlKHtcclxuXHRcdHdpZHRoOiB1bmRlZmluZWQsXHJcblx0XHRoZWlnaHQ6IHVuZGVmaW5lZFxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcblx0XHRcdGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuXHRcdFx0XHQvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG5cdFx0XHRcdHNldFdpbmRvd1NpemUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG5cdFx0XHRoYW5kbGVSZXNpemUoKTtcclxuXHJcblx0XHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcblx0XHRcdHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHRcdH1cclxuXHR9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcclxuXHRyZXR1cm4gd2luZG93U2l6ZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IFVzZXJOZXcgfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IHsgTWVkaWEsIE1lZGlhQ29udGV4dFByb3ZpZGVyLCBtZWRpYVN0eWxlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVkaWEnO1xyXG5pbXBvcnQgTXlGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9teS1mb290ZXInO1xyXG5pbXBvcnQgTXlHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvbXktZ2FsbGVyeSc7XHJcbmltcG9ydCBNeU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL215LW5hdmJhcic7XHJcbmltcG9ydCBPdXJKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9vdXItam9iJztcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vaG9va3MvdXNlLXdpbmRvdy1zaXplJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94PlxyXG5cdFx0XHQ8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8dGl0bGU+UmFwaWQgVHJhbnNwb3J0IFVTQSwgTExDPC90aXRsZT5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0T2xhcjoge3VzZVdpbmRvd1NpemUoKX07XHJcblx0XHRcdFx0PE1lZGlhIGF0PVwieHNcIj5Nb2JpbGU8L01lZGlhPlxyXG5cdFx0XHRcdDxNZWRpYSBncmVhdGVyVGhhbj1cInhzXCI+T3RoZXIgdGhhbiBNb2JpbGU8L01lZGlhPlxyXG5cdFx0XHRcdDxNeU5hdmJhciBicmVha3BvaW50PXtNZWRpYX0gLz5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0PE91ckpvYiAvPlxyXG5cdFx0XHRcdDxNeUdhbGxlcnkgLz5cclxuXHRcdFx0XHQ8Q29udGFjdHMgLz5cclxuXHRcdFx0XHQ8TXlGb290ZXIgLz5cclxuXHRcdFx0PC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==