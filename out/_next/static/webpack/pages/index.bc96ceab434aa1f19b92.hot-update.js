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
    background: "light-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pad: {
      top: 'xlarge',
      bottom: 'large'
    },
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
    direction: "row",
    gap: "small",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    color: "dark-4",
    size: "22em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    color: "dark-4",
    size: "22em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    margin: {
      vertical: size != 'small' ? {
        top: 'medium',
        bottom: 'large'
      } : 'large',
      horizontal: 'none'
    },
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dir: size != 'small' ? 'row' : 'column',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    margin: "none",
    size: "medium",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Rapid Transport 2020 - Phoenix, Arizona USA . (88) 87445544")))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1mb290ZXIudHN4Il0sIm5hbWVzIjpbIk15Rm9vdGVyIiwic2l6ZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJlc3BvbnNpdmVDb250ZXh0IiwidG9wIiwiYm90dG9tIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMseURBQWpCLENBQWI7QUFFQSxTQUNDLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBYSxPQUFHLEVBQUU7QUFBRUMsU0FBRyxFQUFFLFFBQVA7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQWlDLFNBQUssRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFVLFNBQUssRUFBQyxRQUFoQjtBQUF5QixRQUFJLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyx1REFBRDtBQUFXLFNBQUssRUFBQyxRQUFqQjtBQUEwQixRQUFJLEVBQUMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQsRUFLQyxNQUFDLDJDQUFEO0FBQ0MsVUFBTSxFQUFFO0FBQ1BDLGNBQVEsRUFBRU4sSUFBSSxJQUFJLE9BQVIsR0FBa0I7QUFBRUksV0FBRyxFQUFFLFFBQVA7QUFBaUJDLGNBQU0sRUFBRTtBQUF6QixPQUFsQixHQUF1RCxPQUQxRDtBQUVQRSxnQkFBVSxFQUFFO0FBRkwsS0FEVDtBQUtDLFNBQUssRUFBQyxRQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQyxNQUFDLHFEQUFEO0FBQWEsT0FBRyxFQUFFUCxJQUFJLElBQUksT0FBUixHQUFrQixLQUFsQixHQUEwQixRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsQ0FMRCxFQWNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNENBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixRQUFJLEVBQUMsUUFBekI7QUFBa0MsYUFBUyxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBREQsQ0FkRCxDQURELENBREQsQ0FERDtBQTBCQSxDQTdCRDs7R0FBTUQsUTs7S0FBQUEsUTtBQStCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmM5NmNlYWI0MzRhYTFmMTliOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgUmVzcG9uc2l2ZUNvbnRleHQsIFRleHQgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IHsgRmFjZWJvb2ssIEluc3RhZ3JhbSB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xyXG5pbXBvcnQgTmF2YmFySXRlbXMgZnJvbSAnLi9uYXZiYXItaXRlbXMnO1xyXG5cclxuY29uc3QgTXlGb290ZXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoUmVzcG9uc2l2ZUNvbnRleHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBiYWNrZ3JvdW5kPVwibGlnaHQtMVwiPlxyXG5cdFx0XHQ8TWFpbkNvbnRlbnQgcGFkPXt7IHRvcDogJ3hsYXJnZScsIGJvdHRvbTogJ2xhcmdlJyB9fT5cclxuXHRcdFx0XHQ8Qm94IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cInNtYWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEZhY2Vib29rIGNvbG9yPVwiZGFyay00XCIgc2l6ZT1cIjIyZW1cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8SW5zdGFncmFtIGNvbG9yPVwiZGFyay00XCIgc2l6ZT1cIjIyZW1cIiAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdG1hcmdpbj17e1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsOiBzaXplICE9ICdzbWFsbCcgPyB7IHRvcDogJ21lZGl1bScsIGJvdHRvbTogJ2xhcmdlJyB9IDogJ2xhcmdlJyxcclxuXHRcdFx0XHRcdFx0XHRob3Jpem9udGFsOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0YWxpZ249XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TmF2YmFySXRlbXMgZGlyPXtzaXplICE9ICdzbWFsbCcgPyAncm93JyA6ICdjb2x1bW4nfSAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtYXJnaW49XCJub25lXCIgc2l6ZT1cIm1lZGl1bVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFJhcGlkIFRyYW5zcG9ydCAyMDIwIC0gUGhvZW5peCwgQXJpem9uYSBVU0EgLiAoODgpIDg3NDQ1NTQ0XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L01haW5Db250ZW50PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Rm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9