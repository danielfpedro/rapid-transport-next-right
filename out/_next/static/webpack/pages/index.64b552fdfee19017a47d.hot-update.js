webpackHotUpdate_N_E("pages/index",{

/***/ "./components/follow-us.tsx":
/*!**********************************!*\
  !*** ./components/follow-us.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_networks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-networks */ "./components/social-networks.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\follow-us.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var FollowUs = function FollowUs() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "2",
    margin: {
      top: 'none',
      bottom: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Follow Us!"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_social_networks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
};

_c = FollowUs;
/* harmony default export */ __webpack_exports__["default"] = (FollowUs);

var _c;

$RefreshReg$(_c, "FollowUs");

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

/***/ "./components/social-networks.tsx":
/*!****************************************!*\
  !*** ./components/social-networks.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
var _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\social-networks.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var items = [{
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["FacebookOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }
  }),
  backgroundColor: 'brand'
}, {
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Instagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }),
  backgroundColor: 'brand'
}];
var size = 60;

var SocialNetworks = function SocialNetworks(_ref) {
  var size = _ref.size,
      item = _ref.item;
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, items.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      direction: "row",
      gap: "medium",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
      href: "#",
      label: __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        background: item.backgroundColor,
        round: "full",
        align: "center",
        justify: "around",
        width: size + 'px',
        height: size + 'px',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }
      }, item.icon),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }));
  }));
};

_c = SocialNetworks;
/* harmony default export */ __webpack_exports__["default"] = (SocialNetworks);

var _c;

$RefreshReg$(_c, "SocialNetworks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xsb3ctdXMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvY2lhbC1uZXR3b3Jrcy50c3giXSwibmFtZXMiOlsiRm9sbG93VXMiLCJ0b3AiLCJib3R0b20iLCJpdGVtcyIsImljb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaXplIiwiU29jaWFsTmV0d29ya3MiLCJpdGVtIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBUyxTQUFLLEVBQUMsR0FBZjtBQUFtQixVQUFNLEVBQUU7QUFBRUMsU0FBRyxFQUFFLE1BQVA7QUFBZUMsWUFBTSxFQUFFO0FBQXZCLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFLRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBREY7QUFXRCxDQVpEOztLQUFNRixRO0FBY1NBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUEsSUFBTUcsS0FBSyxHQUFHLENBQ1o7QUFBRUMsTUFBSSxFQUFFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFSO0FBQTRCQyxpQkFBZSxFQUFFO0FBQTdDLENBRFksRUFFWjtBQUFFRCxNQUFJLEVBQUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVI7QUFBdUJDLGlCQUFlLEVBQUU7QUFBeEMsQ0FGWSxDQUFkO0FBS0EsSUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFvQjtBQUFBLE1BQWpCRCxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYRSxJQUFXLFFBQVhBLElBQVc7QUFDekMsU0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0QsSUFBRDtBQUFBLFdBQ1QsTUFBQywyQ0FBRDtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUcsRUFBQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUNFLFVBQUksRUFBQyxHQURQO0FBRUUsV0FBSyxFQUNILE1BQUMsMkNBQUQ7QUFDRSxrQkFBVSxFQUFFQSxJQUFJLENBQUNILGVBRG5CO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxhQUFLLEVBQUMsUUFIUjtBQUlFLGVBQU8sRUFBQyxRQUpWO0FBS0UsYUFBSyxFQUFFQyxJQUFJLEdBQUcsSUFMaEI7QUFNRSxjQUFNLEVBQUVBLElBQUksR0FBRyxJQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUdFLElBQUksQ0FBQ0osSUFSUixDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURTO0FBQUEsR0FBVixDQURILENBREY7QUF1QkQsQ0F4QkQ7O0tBQU1HLGM7QUEwQlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0YjU1MmZkZmVlMTkwMTdhNDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgQnV0dG9uLCBIZWFkaW5nLCBTdGFjayB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGYWNlYm9vaywgRmFjZWJvb2tPcHRpb24sIEhvbWUsIEluc3RhZ3JhbSB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU29jaWFsTmV0d29ya3MgZnJvbSAnLi9zb2NpYWwtbmV0d29ya3MnO1xyXG5cclxuY29uc3QgRm9sbG93VXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgPEhlYWRpbmcgbGV2ZWw9XCIyXCIgbWFyZ2luPXt7IHRvcDogJ25vbmUnLCBib3R0b206ICdtZWRpdW0nIH19PlxyXG4gICAgICAgIEZvbGxvdyBVcyFcclxuICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgPEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJtZWRpdW1cIj5cclxuICAgICAgICA8U29jaWFsTmV0d29ya3MgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93VXM7XHJcbiIsImltcG9ydCB7IEFuY2hvciwgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IEZhY2Vib29rT3B0aW9uLCBJbnN0YWdyYW0gfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHsgaWNvbjogPEZhY2Vib29rT3B0aW9uIC8+LCBiYWNrZ3JvdW5kQ29sb3I6ICdicmFuZCcgfSxcclxuICB7IGljb246IDxJbnN0YWdyYW0gLz4sIGJhY2tncm91bmRDb2xvcjogJ2JyYW5kJyB9LFxyXG5dO1xyXG5cclxuY29uc3Qgc2l6ZSA9IDYwO1xyXG5cclxuY29uc3QgU29jaWFsTmV0d29ya3MgPSAoeyBzaXplLCBpdGVtIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICA8QW5jaG9yXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e2l0ZW0uYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgcm91bmQ9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJhcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3NpemUgKyAncHgnfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtzaXplICsgJ3B4J31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxOZXR3b3JrcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==