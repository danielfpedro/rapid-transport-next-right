webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-gallery.jsx":
/*!***********************************!*\
  !*** ./components/my-gallery.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gallery_tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-tile */ "./components/gallery-tile.jsx");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\my-gallery.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MyGallery = function MyGallery() {
  return __jsx(_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "dark-1",
    lavel: "2",
    margin: {
      bottom: 'medium',
      top: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Sobre N\xF3s"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "3",
    margin: {
      bottom: 'large',
      top: 'none'
    },
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Rapid Transport \xE9 uma company maneira de confian\xE7a e tal.")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    gap: "medium",
    margin: {
      bottom: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    gap: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
};

_c = MyGallery;
/* harmony default export */ __webpack_exports__["default"] = (MyGallery);

var _c;

$RefreshReg$(_c, "MyGallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1nYWxsZXJ5LmpzeCJdLCJuYW1lcyI6WyJNeUdhbGxlcnkiLCJib3R0b20iLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFTLFNBQUssRUFBQyxRQUFmO0FBQXdCLFNBQUssRUFBQyxHQUE5QjtBQUFrQyxVQUFNLEVBQUU7QUFBRUMsWUFBTSxFQUFFLFFBQVY7QUFBb0JDLFNBQUcsRUFBRTtBQUF6QixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBSUUsTUFBQywrQ0FBRDtBQUNFLFNBQUssRUFBQyxHQURSO0FBRUUsVUFBTSxFQUFFO0FBQUVELFlBQU0sRUFBRSxPQUFWO0FBQW1CQyxTQUFHLEVBQUU7QUFBeEIsS0FGVjtBQUdFLGFBQVMsRUFBQyxRQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBSkYsQ0FERixFQWNFLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLE9BQUcsRUFBQyxRQUE5QjtBQUF1QyxVQUFNLEVBQUU7QUFBRUQsWUFBTSxFQUFFO0FBQVYsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FkRixFQWtCRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsUUFBSSxNQUF6QjtBQUEwQixPQUFHLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FsQkYsQ0FERjtBQXlCRCxDQTFCRDs7S0FBTUQsUztBQTRCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZhYTA4MDk0YTU0OWEyMWEyM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5VGlsZSBmcm9tICcuL2dhbGxlcnktdGlsZSc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcblxyXG5jb25zdCBNeUdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGVudD5cclxuICAgICAgPEJveCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGNvbG9yPVwiZGFyay0xXCIgbGF2ZWw9XCIyXCIgbWFyZ2luPXt7IGJvdHRvbTogJ21lZGl1bScsIHRvcDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgU29icmUgTsOzc1xyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgbGV2ZWw9XCIzXCJcclxuICAgICAgICAgIG1hcmdpbj17eyBib3R0b206ICdsYXJnZScsIHRvcDogJ25vbmUnIH19XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJhcGlkIFRyYW5zcG9ydCDDqSB1bWEgY29tcGFueSBtYW5laXJhIGRlIGNvbmZpYW7Dp2EgZSB0YWwuXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBnYXA9XCJtZWRpdW1cIiBtYXJnaW49e3sgYm90dG9tOiAnbWVkaXVtJyB9fT5cclxuICAgICAgICA8R2FsbGVyeVRpbGUgLz5cclxuICAgICAgICA8R2FsbGVyeVRpbGUgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBnYXA9XCJtZWRpdW1cIj5cclxuICAgICAgICA8R2FsbGVyeVRpbGUgLz5cclxuICAgICAgICA8R2FsbGVyeVRpbGUgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L01haW5Db250ZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=