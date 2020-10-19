webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-footer.tsx":
/*!**********************************!*\
  !*** ./components/my-footer.tsx ***!
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
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\my-footer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MyFooter = function MyFooter() {
  _s();

  var size = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(grommet__WEBPACK_IMPORTED_MODULE_0__["ResponsiveContext"]);
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "light-2",
    pad: {
      bottom: '40px',
      top: '100px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pad: {
      bottom: 'none',
      top: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "small",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    color: "dark-4",
    size: "22em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    color: "dark-4",
    size: "22em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 8
    }
  }))), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    margin: {
      bottom: 'medium',
      top: '35px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    direction: size != 'small' ? 'row' : 'column',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    margin: "xsmall",
    size: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, "Rapid Transport 2020 - Phoenix, Arizona USA . (88) 87445544"))));
};

_s(MyFooter, "/KBwov+JmSCTHSSC6VXWAf4OqjQ=");

_c = MyFooter;
/* harmony default export */ __webpack_exports__["default"] = (MyFooter);

var _c;

$RefreshReg$(_c, "MyFooter");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1mb290ZXIudHN4Il0sIm5hbWVzIjpbIk15Rm9vdGVyIiwic2l6ZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJlc3BvbnNpdmVDb250ZXh0IiwiYm90dG9tIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMseURBQWpCLENBQWI7QUFFQSxTQUNDLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsU0FBaEI7QUFBMEIsT0FBRyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxTQUFHLEVBQUU7QUFBdkIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLE9BQUcsRUFBRTtBQUFFRCxZQUFNLEVBQUUsTUFBVjtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsT0FBekI7QUFBaUMsU0FBSyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQVUsU0FBSyxFQUFDLFFBQWhCO0FBQXlCLFFBQUksRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHVEQUFEO0FBQVcsU0FBSyxFQUFDLFFBQWpCO0FBQTBCLFFBQUksRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FERCxDQURELEVBT0MsTUFBQywyQ0FBRDtBQUFLLFVBQU0sRUFBRTtBQUFFRCxZQUFNLEVBQUUsUUFBVjtBQUFvQkMsU0FBRyxFQUFFO0FBQXpCLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBYSxhQUFTLEVBQUVMLElBQUksSUFBSSxPQUFSLEdBQWtCLEtBQWxCLEdBQTBCLFFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVBELEVBV0MsTUFBQyw0Q0FBRDtBQUFNLFVBQU0sRUFBQyxRQUFiO0FBQXNCLFFBQUksRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQVhELENBREQsQ0FERCxDQUREO0FBcUJBLENBeEJEOztHQUFNRCxROztLQUFBQSxRO0FBMEJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYzk1ODM4ZDM2M2MwYTc3OTRkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBSZXNwb25zaXZlQ29udGV4dCwgVGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGYWNlYm9vaywgSW5zdGFncmFtIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcbmltcG9ydCBOYXZiYXJJdGVtcyBmcm9tICcuL25hdmJhci1pdGVtcyc7XHJcblxyXG5jb25zdCBNeUZvb3RlciA9ICgpID0+IHtcclxuXHRjb25zdCBzaXplID0gUmVhY3QudXNlQ29udGV4dChSZXNwb25zaXZlQ29udGV4dCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGJhY2tncm91bmQ9XCJsaWdodC0yXCIgcGFkPXt7IGJvdHRvbTogJzQwcHgnLCB0b3A6ICcxMDBweCcgfX0+XHJcblx0XHRcdDxNYWluQ29udGVudD5cclxuXHRcdFx0XHQ8Qm94IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8Qm94IHBhZD17eyBib3R0b206ICdub25lJywgdG9wOiAnbm9uZScgfX0+XHJcblx0XHRcdFx0XHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwic21hbGxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxGYWNlYm9vayBjb2xvcj1cImRhcmstNFwiIHNpemU9XCIyMmVtXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8SW5zdGFncmFtIGNvbG9yPVwiZGFyay00XCIgc2l6ZT1cIjIyZW1cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PEJveCBtYXJnaW49e3sgYm90dG9tOiAnbWVkaXVtJywgdG9wOiAnMzVweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxOYXZiYXJJdGVtcyBkaXJlY3Rpb249e3NpemUgIT0gJ3NtYWxsJyA/ICdyb3cnIDogJ2NvbHVtbid9ICAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0PFRleHQgbWFyZ2luPVwieHNtYWxsXCIgc2l6ZT1cIm1lZGl1bVwiPlxyXG5cdFx0XHRcdFx0XHRSYXBpZCBUcmFuc3BvcnQgMjAyMCAtIFBob2VuaXgsIEFyaXpvbmEgVVNBIC4gKDg4KSA4NzQ0NTU0NFxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L01haW5Db250ZW50PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Rm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9