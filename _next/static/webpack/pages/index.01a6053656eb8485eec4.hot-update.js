webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-navbar.tsx":
/*!**********************************!*\
  !*** ./components/my-navbar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\my-navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var items = [{
  label: 'O que fazemos?'
}, {
  label: 'About Us'
}, {
  label: 'Contact Us'
}];

var MyNavbar = function MyNavbar() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    pad: {
      vertical: 'small'
    },
    background: "brand",
    fill: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Phoenix, Arizona USA"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "(888) 666-8929"))), __jsx(_main_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    background: "",
    align: "center",
    pad: {
      horizontal: 'large',
      vertical: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: "340px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "large",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, items.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Anchor"], {
      label: item.label,
      color: "dark-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    });
  }))))));
};

_c = MyNavbar;
/* harmony default export */ __webpack_exports__["default"] = (MyNavbar);

var _c;

$RefreshReg$(_c, "MyNavbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIml0ZW1zIiwibGFiZWwiLCJNeU5hdmJhciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImdyb3ciLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEWSxFQUlaO0FBQ0VBLE9BQUssRUFBRTtBQURULENBSlksRUFPWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQVBZLENBQWQ7O0FBWUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxhQUFTLEVBQUMsS0FEWjtBQUVFLE9BQUcsRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUZQO0FBR0UsY0FBVSxFQUFDLE9BSGI7QUFJRSxRQUFJLE1BSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixDQU5GLENBREYsRUFjRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsYUFBUyxFQUFDLEtBRFo7QUFFRSxRQUFJLE1BRk47QUFHRSxjQUFVLEVBQUMsRUFIYjtBQUlFLFNBQUssRUFBQyxRQUpSO0FBS0UsT0FBRyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsT0FBZDtBQUF1QkQsY0FBUSxFQUFFO0FBQWpDLEtBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsMkNBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBRUUsVUFBSSxFQUFFO0FBQVIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFPLE9BQUcsRUFBQyxpQkFBWDtBQUE2QixTQUFLLEVBQUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsRUFXRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQWlDLFNBQUssRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNULE1BQUMsOENBQUQ7QUFBUSxXQUFLLEVBQUVBLElBQUksQ0FBQ04sS0FBcEI7QUFBMkIsV0FBSyxFQUFDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQVYsQ0FESCxDQVhGLENBREYsQ0FkRixDQURGLENBREY7QUF3Q0QsQ0F6Q0Q7O0tBQU1DLFE7QUEyQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxYTYwNTM2NTZlYjg0ODVlZWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgQnV0dG9uLCBJbWFnZSwgTmF2IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ08gcXVlIGZhemVtb3M/JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQWJvdXQgVXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdDb250YWN0IFVzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTXlOYXZiYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmFja2dyb3VuZD1cIndoaXRlXCI+XHJcbiAgICAgIDxCb3ggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIHBhZD17eyB2ZXJ0aWNhbDogJ3NtYWxsJyB9fVxyXG4gICAgICAgICAgYmFja2dyb3VuZD1cImJyYW5kXCJcclxuICAgICAgICAgIGZpbGxcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWFpbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxCb3g+UGhvZW5peCwgQXJpem9uYSBVU0E8L0JveD5cclxuICAgICAgICAgICAgPEJveD4oODg4KSA2NjYtODkyOTwvQm94PlxyXG4gICAgICAgICAgPC9NYWluQ29udGVudD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICB7LyogPEJveCBoZWlnaHQ9XCI0cHhcIiBiYWNrZ3JvdW5kPVwiYnJhbmRcIiBmbGV4PVwiZ3Jvd1wiPjwvQm94PiAgICAgICAqL31cclxuXHJcbiAgICAgICAgPE1haW5Db250ZW50PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCJcIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIHBhZD17eyBob3Jpem9udGFsOiAnbGFyZ2UnLCB2ZXJ0aWNhbDogJ21lZGl1bScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveCBmbGV4PXt7IGdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPVwiMzQwcHhcIiAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwibGFyZ2VcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxBbmNob3IgbGFiZWw9e2l0ZW0ubGFiZWx9IGNvbG9yPVwiZGFyay0xXCIgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICB7LyogPEJ1dHRvbiBsYWJlbD1cIkdldCBhIHF1b3RlIVwiIHByaW1hcnkgLz4gKi99XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9NYWluQ29udGVudD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIHsvKiA8Qm94IGhlaWdodD1cIjRweFwiIGJhY2tncm91bmQ9XCJicmFuZFwiIGZsZXg9XCJncm93XCI+PC9Cb3g+ICAgICAgICovfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9