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
    width: "xlarge",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3F1b3RlLWZvcm0udHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRDb2xvciIsInZlcnRpY2FsIiwiZ3JvdyIsInRleHRTaGFkb3ciLCJRdW90ZUZvcm0iLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFLE1BQUMsMkNBQUQ7QUFDRSxTQUFLLEVBQUMsUUFEUjtBQUVFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFLHdCQURaO0FBRUxDLHdCQUFrQixFQUFFLGdCQUZmO0FBR0xDLHNCQUFnQixFQUFFLFdBSGI7QUFJTEMsb0JBQWMsRUFBRSxPQUpYO0FBS0xDLHFCQUFlLEVBQUU7QUFMWixLQUZUO0FBU0UsT0FBRyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixTQUFLLEVBQUMsUUFBMUI7QUFBbUMsYUFBUyxFQUFDLEtBQTdDO0FBQW1ELE9BQUcsRUFBQyxRQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQW9CLGNBQVUsRUFBQyxPQUEvQjtBQUF1QyxRQUFJLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFVBQU0sRUFBQyxNQUZUO0FBR0UsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUVBREYsRUFTRSxNQUFDLCtDQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxTQUFLLEVBQUMsR0FGUjtBQUdFLFNBQUssRUFBRTtBQUFFQSxnQkFBVSxFQUFFO0FBQWQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhIQVRGLENBREYsRUFvQkUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FwQkYsQ0FYRixDQURGO0FBdUNELENBeENEOztLQUFNUixNO0FBMENTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQVVBO0FBQ0E7O0FBRUEsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLEVBQUMsUUFBWjtBQUFxQixjQUFVLEVBQUMsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsa0RBQUQ7QUFBWSxPQUFHLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBUyxTQUFLLEVBQUMsR0FBZjtBQUFtQixVQUFNLEVBQUMsTUFBMUI7QUFBaUMsU0FBSyxFQUFDLFFBQXZDO0FBQWdELGFBQVMsRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQURGLENBRkYsRUFRRSxNQUFDLGdEQUFEO0FBQVUsT0FBRyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBVyxTQUFLLEVBQUMsb0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQVcsZUFBVyxFQUFDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxpREFBRDtBQUFXLFNBQUssRUFBQyxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBVyxlQUFXLEVBQUMsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFRRSxNQUFDLDhDQUFEO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsV0FBTyxNQUZUO0FBR0UsUUFBSSxFQUFFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhSO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFPLEVBQUUsSUFMWDtBQU1FLFVBQU0sRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQVJGLENBREY7QUE0QkQsQ0E3QkQ7O0tBQU1ELFM7QUErQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhMmM2ZWU4YWI0YTY5YTE1Zjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE15TmF2YmFyIGZyb20gJy4vbXktbmF2YmFyJztcclxuaW1wb3J0IFF1b3RlRm9ybSBmcm9tICcuL3F1b3RlLWZvcm0nO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2hlYWRlci5wbmcpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIsIGNlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIH19XHJcbiAgICAgIHBhZD17eyB2ZXJ0aWNhbDogJzEyMHB4JyB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94IGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCJ4bGFyZ2VcIiBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJ4bGFyZ2VcIj5cclxuICAgICAgICA8Qm94IGFsaWduPVwiY2VudGVyXCIgYmFja2dyb3VuZD1cImdyZWVuXCIgZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodC0xXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSYXBpZGV6IGUgc2VndXJhbsOnYSBwYXJhIHRyYW5zcG9ydGFyIHNldSBhdXRvbcOzdmVsIVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHQtMVwiXHJcbiAgICAgICAgICAgIGxldmVsPVwiM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb20gYSBSYXBpZCBUcmFuc3BvcnQgVVNBIHZvY8OqIHBvZGUgZW52aWFyIHNldSB2ZcOtY3VsbyBwYXJhIHF1YWxxdWVyXHJcbiAgICAgICAgICAgIGx1Z2FyIGRvcyBFVUEgY29tIGFnaWxpZGFkZSBlIHNlZ3VyYW7Dp2EuXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8UXVvdGVGb3JtIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgRm9ybUZpZWxkLFxyXG4gIEhlYWRpbmcsXHJcbiAgVGV4dElucHV0LFxyXG59IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGb3JtTmV4dExpbmsgfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFF1b3RlRm9ybSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgd2lkdGg9XCJtZWRpdW1cIiBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuXHJcbiAgICAgIDxDYXJkSGVhZGVyIHBhZD1cIm1lZGl1bVwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGxldmVsPVwiM1wiIG1hcmdpbj1cIm5vbmVcIiBjb2xvcj1cImRhcmstMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgR2V0IGFuIGluc3RhbnQgcXVvdGUgb3IgY2FsbCBub3cgKDg4OCkgNjY2LTg5MjlcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuXHJcbiAgICAgIDxDYXJkQm9keSBwYWQ9XCJtZWRpdW1cIj5cclxuICAgICAgICA8Rm9ybUZpZWxkIGxhYmVsPVwiVHJhbnNwb3J0IGNhciBGUk9NXCI+XHJcbiAgICAgICAgICA8VGV4dElucHV0IHBsYWNlaG9sZGVyPVwiU2VsZWN0XCIgLz5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICA8Rm9ybUZpZWxkIGxhYmVsPVwiVHJhbnNwb3J0IGNhciBUT1wiPlxyXG4gICAgICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtRmllbGQ+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxhYmVsPVwiVmVoaWNsZSBEZXRhaWxzXCJcclxuICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgIGljb249ezxGb3JtTmV4dExpbmsgLz59XHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgcmV2ZXJzZT17dHJ1ZX1cclxuICAgICAgICAgIG1hcmdpbj17eyB0b3A6ICdtZWRpdW0nIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVvdGVGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9