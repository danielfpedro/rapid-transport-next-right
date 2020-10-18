webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quote_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote-form */ "./components/quote-form.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = function Header() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    style: {
      backgroundImage: 'url(images/header.png)',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#000'
    },
    pad: {
      vertical: '120px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    direction: "row",
    gap: "xlarge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    background: "green",
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "light-1",
    margin: "none",
    style: {
      textShadow: '0px 2px 1px rgba(0, 0, 0, 1)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Rapidez e seguran\xE7a para transportar seu autom\xF3vel!"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "light-1",
    level: "3",
    style: {
      textShadow: '0px 2px 1px rgba(0, 0, 0, 1)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Com a Rapid Transport USA voc\xEA pode enviar seu ve\xEDculo para qualquer lugar dos EUA com agilidade e seguran\xE7a.")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_quote_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/***/ "./components/quote-form.tsx":
/*!***********************************!*\
  !*** ./components/quote-form.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\quote-form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var QuoteForm = function QuoteForm() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    width: "medium",
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    pad: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "3",
    margin: "none",
    color: "dark-1",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Get an instant quote or call now (888) 666-8929")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["CardBody"], {
    pad: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
    label: "Transport car FROM",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["TextInput"], {
    placeholder: "Select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
    label: "Transport car TO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["TextInput"], {
    placeholder: "Select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    label: "Vehicle Details",
    primary: true,
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["FormNextLink"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }),
    size: "large",
    reverse: true,
    margin: {
      top: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
};

_c = QuoteForm;
/* harmony default export */ __webpack_exports__["default"] = (QuoteForm);

var _c;

$RefreshReg$(_c, "QuoteForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3F1b3RlLWZvcm0udHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRDb2xvciIsInZlcnRpY2FsIiwiZ3JvdyIsInRleHRTaGFkb3ciLCJRdW90ZUZvcm0iLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFLE1BQUMsMkNBQUQ7QUFDRSxTQUFLLEVBQUMsUUFEUjtBQUVFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFLHdCQURaO0FBRUxDLHdCQUFrQixFQUFFLGdCQUZmO0FBR0xDLHNCQUFnQixFQUFFLFdBSGI7QUFJTEMsb0JBQWMsRUFBRSxPQUpYO0FBS0xDLHFCQUFlLEVBQUU7QUFMWixLQUZUO0FBU0UsT0FBRyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixhQUFTLEVBQUMsS0FBOUI7QUFBb0MsT0FBRyxFQUFDLFFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBb0IsY0FBVSxFQUFDLE9BQS9CO0FBQXVDLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUNFLFNBQUssRUFBQyxTQURSO0FBRUUsVUFBTSxFQUFDLE1BRlQ7QUFHRSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFERixFQVNFLE1BQUMsK0NBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFNBQUssRUFBQyxHQUZSO0FBR0UsU0FBSyxFQUFFO0FBQUVBLGdCQUFVLEVBQUU7QUFBZCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEhBVEYsQ0FERixFQW9CRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBCRixDQVhGLENBREY7QUF5Q0QsQ0ExQ0Q7O0tBQU1SLE07QUE0Q1NBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBVUE7QUFDQTs7QUFFQSxJQUFNUyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQXFCLGNBQVUsRUFBQyxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxrREFBRDtBQUFZLE9BQUcsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFTLFNBQUssRUFBQyxHQUFmO0FBQW1CLFVBQU0sRUFBQyxNQUExQjtBQUFpQyxTQUFLLEVBQUMsUUFBdkM7QUFBZ0QsYUFBUyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBREYsQ0FGRixFQVFFLE1BQUMsZ0RBQUQ7QUFBVSxPQUFHLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFXLFNBQUssRUFBQyxvQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBVyxlQUFXLEVBQUMsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLGlEQUFEO0FBQVcsU0FBSyxFQUFDLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFXLGVBQVcsRUFBQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQVFFLE1BQUMsOENBQUQ7QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxXQUFPLE1BRlQ7QUFHRSxRQUFJLEVBQUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFI7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFdBQU8sRUFBRSxJQUxYO0FBTUUsVUFBTSxFQUFFO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBUkYsQ0FERjtBQTRCRCxDQTdCRDs7S0FBTUQsUztBQStCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTFiMWFlZDMzZmIxNDlmMDcyNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTXlOYXZiYXIgZnJvbSAnLi9teS1uYXZiYXInO1xyXG5pbXBvcnQgUXVvdGVGb3JtIGZyb20gJy4vcXVvdGUtZm9ybSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaGVhZGVyLnBuZyknLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciwgY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcclxuICAgICAgfX1cclxuICAgICAgcGFkPXt7IHZlcnRpY2FsOiAnMTIwcHgnIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3ggYWxpZ249XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJ4bGFyZ2VcIj5cclxuICAgICAgICA8Qm94IGFsaWduPVwiY2VudGVyXCIgYmFja2dyb3VuZD1cImdyZWVuXCIgZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodC0xXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSYXBpZGV6IGUgc2VndXJhbsOnYSBwYXJhIHRyYW5zcG9ydGFyIHNldSBhdXRvbcOzdmVsIVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHQtMVwiXHJcbiAgICAgICAgICAgIGxldmVsPVwiM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb20gYSBSYXBpZCBUcmFuc3BvcnQgVVNBIHZvY8OqIHBvZGUgZW52aWFyIHNldSB2ZcOtY3VsbyBwYXJhIHF1YWxxdWVyXHJcbiAgICAgICAgICAgIGx1Z2FyIGRvcyBFVUEgY29tIGFnaWxpZGFkZSBlIHNlZ3VyYW7Dp2EuXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8UXVvdGVGb3JtIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgey8qIDxCb3ggYmFja2dyb3VuZD1cIlwiPlxyXG4gICAgICAgICAgICA8UXVvdGVGb3JtIC8+XHJcbiAgICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEhlYWRlcixcclxuICBGb3JtRmllbGQsXHJcbiAgSGVhZGluZyxcclxuICBUZXh0SW5wdXQsXHJcbn0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IEZvcm1OZXh0TGluayB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUXVvdGVGb3JtID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCB3aWR0aD1cIm1lZGl1bVwiIGJhY2tncm91bmQ9XCJ3aGl0ZVwiPlxyXG5cclxuICAgICAgPENhcmRIZWFkZXIgcGFkPVwibWVkaXVtXCI+XHJcbiAgICAgICAgPEhlYWRpbmcgbGV2ZWw9XCIzXCIgbWFyZ2luPVwibm9uZVwiIGNvbG9yPVwiZGFyay0xXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICBHZXQgYW4gaW5zdGFudCBxdW90ZSBvciBjYWxsIG5vdyAoODg4KSA2NjYtODkyOVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG5cclxuICAgICAgPENhcmRCb2R5IHBhZD1cIm1lZGl1bVwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQgbGFiZWw9XCJUcmFuc3BvcnQgY2FyIEZST01cIj5cclxuICAgICAgICAgIDxUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIiAvPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICAgIDxGb3JtRmllbGQgbGFiZWw9XCJUcmFuc3BvcnQgY2FyIFRPXCI+XHJcbiAgICAgICAgICA8VGV4dElucHV0IHBsYWNlaG9sZGVyPVwiU2VsZWN0XCIgLz5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgbGFiZWw9XCJWZWhpY2xlIERldGFpbHNcIlxyXG4gICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgaWNvbj17PEZvcm1OZXh0TGluayAvPn1cclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICByZXZlcnNlPXt0cnVlfVxyXG4gICAgICAgICAgbWFyZ2luPXt7IHRvcDogJ21lZGl1bScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=