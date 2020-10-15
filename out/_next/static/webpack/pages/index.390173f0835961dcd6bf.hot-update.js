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
    background: "red",
    pad: "xlarge",
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
    color: "dark-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    gap: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1nYWxsZXJ5LmpzeCJdLCJuYW1lcyI6WyJNeUdhbGxlcnkiLCJib3R0b20iLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixjQUFVLEVBQUMsS0FBL0I7QUFBcUMsT0FBRyxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxTQUFLLEVBQUMsR0FGUjtBQUdFLFVBQU0sRUFBRTtBQUFFQyxZQUFNLEVBQUUsUUFBVjtBQUFvQkMsU0FBRyxFQUFFO0FBQXpCLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQVFFLE1BQUMsK0NBQUQ7QUFDRSxTQUFLLEVBQUMsR0FEUjtBQUVFLFVBQU0sRUFBRTtBQUFFRCxZQUFNLEVBQUUsT0FBVjtBQUFtQkMsU0FBRyxFQUFFO0FBQXhCLEtBRlY7QUFHRSxhQUFTLEVBQUMsUUFIWjtBQUlFLFNBQUssRUFBQyxRQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBUkYsQ0FERixFQW1CRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsUUFBSSxNQUF6QjtBQUEwQixPQUFHLEVBQUMsUUFBOUI7QUFBdUMsVUFBTSxFQUFFO0FBQUVELFlBQU0sRUFBRTtBQUFWLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQWEsWUFBUSxFQUFDLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBYSxZQUFRLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBbkJGLEVBdUJFLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLE9BQUcsRUFBQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFhLFlBQVEsRUFBQyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHFEQUFEO0FBQWEsWUFBUSxFQUFDLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQXZCRixDQURGO0FBOEJELENBL0JEOztLQUFNRCxTO0FBaUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTAxNzNmMDgzNTk2MWRjZDZiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBHcmlkLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IEhvbWUgfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdhbGxlcnlUaWxlIGZyb20gJy4vZ2FsbGVyeS10aWxlJztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuXHJcbmNvbnN0IE15R2FsbGVyeSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5Db250ZW50PlxyXG4gICAgICA8Qm94IGFsaWduPVwiY2VudGVyXCIgYmFja2dyb3VuZD1cInJlZFwiIHBhZD1cInhsYXJnZVwiPlxyXG4gICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICBjb2xvcj1cImRhcmstMVwiXHJcbiAgICAgICAgICBsYXZlbD1cIjJcIlxyXG4gICAgICAgICAgbWFyZ2luPXt7IGJvdHRvbTogJ21lZGl1bScsIHRvcDogJ25vbmUnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU29icmUgTsOzc1xyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgbGV2ZWw9XCIzXCJcclxuICAgICAgICAgIG1hcmdpbj17eyBib3R0b206ICdsYXJnZScsIHRvcDogJ25vbmUnIH19XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgY29sb3I9XCJkYXJrLTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJhcGlkIFRyYW5zcG9ydCDDqSB1bWEgY29tcGFueSBtYW5laXJhIGRlIGNvbmZpYW7Dp2EgZSB0YWwuXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBnYXA9XCJtZWRpdW1cIiBtYXJnaW49e3sgYm90dG9tOiAnbWVkaXVtJyB9fT5cclxuICAgICAgICA8R2FsbGVyeVRpbGUgZmlsZW5hbWU9XCJnYWwtMVwiIC8+XHJcbiAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTJcIiAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBkaXJlY3Rpb249XCJyb3dcIiBmaWxsIGdhcD1cIm1lZGl1bVwiPlxyXG4gICAgICAgIDxHYWxsZXJ5VGlsZSBmaWxlbmFtZT1cImdhbC0zXCIgLz5cclxuICAgICAgICA8R2FsbGVyeVRpbGUgZmlsZW5hbWU9XCJnYWwtNFwiIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9NYWluQ29udGVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlHYWxsZXJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9