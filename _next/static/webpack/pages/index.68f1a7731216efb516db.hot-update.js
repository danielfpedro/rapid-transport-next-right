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
      vertical: size != 'small' ? 'medium' : 'large',
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
      lineNumber: 19,
      columnNumber: 7
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    "background-": "green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    margin: "none",
    size: "medium",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Rapid Transport 2020 - Phoenix, Arizona USA . (88) 87445544")), "s")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1mb290ZXIudHN4Il0sIm5hbWVzIjpbIk15Rm9vdGVyIiwic2l6ZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJlc3BvbnNpdmVDb250ZXh0IiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMseURBQWpCLENBQWI7QUFFQSxTQUNDLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFpQyxTQUFLLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBVSxTQUFLLEVBQUMsUUFBaEI7QUFBeUIsUUFBSSxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsdURBQUQ7QUFBVyxTQUFLLEVBQUMsUUFBakI7QUFBMEIsUUFBSSxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQURELEVBS0MsTUFBQywyQ0FBRDtBQUFLLFVBQU0sRUFBRTtBQUFFQyxjQUFRLEVBQUVKLElBQUksSUFBSSxPQUFSLEdBQWtCLFFBQWxCLEdBQTZCLE9BQXpDO0FBQWtESyxnQkFBVSxFQUFFO0FBQTlELEtBQWI7QUFBcUYsU0FBSyxFQUFDLFFBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQWEsT0FBRyxFQUFFTCxJQUFJLElBQUksT0FBUixHQUFrQixLQUFsQixHQUEwQixRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FMRCxFQVFDLE1BQUMsMkNBQUQ7QUFBSyxtQkFBWSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0Q0FBRDtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFFBQUksRUFBQyxRQUF6QjtBQUFrQyxhQUFTLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFERCxDQVJELE1BREQsQ0FERCxDQUREO0FBb0JBLENBdkJEOztHQUFNRCxROztLQUFBQSxRO0FBeUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OGYxYTc3MzEyMTZlZmI1MTZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBSZXNwb25zaXZlQ29udGV4dCwgVGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGYWNlYm9vaywgSW5zdGFncmFtIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcbmltcG9ydCBOYXZiYXJJdGVtcyBmcm9tICcuL25hdmJhci1pdGVtcyc7XHJcblxyXG5jb25zdCBNeUZvb3RlciA9ICgpID0+IHtcclxuXHRjb25zdCBzaXplID0gUmVhY3QudXNlQ29udGV4dChSZXNwb25zaXZlQ29udGV4dCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGJhY2tncm91bmQ9XCJsaWdodC0xXCI+XHJcblx0XHRcdDxNYWluQ29udGVudD5cclxuXHRcdFx0XHQ8Qm94IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cInNtYWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEZhY2Vib29rIGNvbG9yPVwiZGFyay00XCIgc2l6ZT1cIjIyZW1cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8SW5zdGFncmFtIGNvbG9yPVwiZGFyay00XCIgc2l6ZT1cIjIyZW1cIiAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94IG1hcmdpbj17eyB2ZXJ0aWNhbDogc2l6ZSAhPSAnc21hbGwnID8gJ21lZGl1bScgOiAnbGFyZ2UnLCBob3Jpem9udGFsOiAnbm9uZScgfX0gYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PE5hdmJhckl0ZW1zIGRpcj17c2l6ZSAhPSAnc21hbGwnID8gJ3JvdycgOiAnY29sdW1uJ30gLz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PEJveCBiYWNrZ3JvdW5kLT1cImdyZWVuXCI+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG1hcmdpbj1cIm5vbmVcIiBzaXplPVwibWVkaXVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0UmFwaWQgVHJhbnNwb3J0IDIwMjAgLSBQaG9lbml4LCBBcml6b25hIFVTQSAuICg4OCkgODc0NDU1NDRcclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+c1xyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L01haW5Db250ZW50PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Rm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9