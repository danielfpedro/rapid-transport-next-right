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
    background: "brand",
    fill: true,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pad: {
      vertical: 'xsmall'
    },
    width: "xxlarge",
    align: "end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    size: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Phoenix, Arizona USA . (888) 666-8929"))), __jsx(_main_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    background: "",
    align: "center",
    pad: {
      horizontal: 'large',
      vertical: '100px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: "340px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "large",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, items.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Anchor"], {
      label: item.label,
      color: "dark-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    });
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIml0ZW1zIiwibGFiZWwiLCJNeU5hdmJhciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImdyb3ciLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEWSxFQUlaO0FBQ0VBLE9BQUssRUFBRTtBQURULENBSlksRUFPWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQVBZLENBQWQ7O0FBWUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBd0IsUUFBSSxNQUE1QjtBQUE2QixTQUFLLEVBQUMsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxPQUFHLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBVjtBQUFrQyxTQUFLLEVBQUMsU0FBeEM7QUFBa0QsU0FBSyxFQUFDLEtBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixDQURGLENBSEYsRUFTRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsYUFBUyxFQUFDLEtBRFo7QUFFRSxRQUFJLE1BRk47QUFHRSxjQUFVLEVBQUMsRUFIYjtBQUlFLFNBQUssRUFBQyxRQUpSO0FBS0UsT0FBRyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsT0FBZDtBQUF1QkQsY0FBUSxFQUFFO0FBQWpDLEtBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsMkNBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBRUUsVUFBSSxFQUFFO0FBQVIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFPLE9BQUcsRUFBQyxpQkFBWDtBQUE2QixTQUFLLEVBQUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsRUFXRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQWlDLFNBQUssRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNULE1BQUMsOENBQUQ7QUFBUSxXQUFLLEVBQUVBLElBQUksQ0FBQ04sS0FBcEI7QUFBMkIsV0FBSyxFQUFDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQVYsQ0FESCxDQVhGLENBREYsQ0FURixDQURGO0FBa0NELENBbkNEOztLQUFNQyxRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYzE0MjMxZGJjOTkzZTc4NDdiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yLCBCb3gsIEJ1dHRvbiwgSW1hZ2UsIE5hdiwgVGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdPIHF1ZSBmYXplbW9zPycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0Fib3V0IFVzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ29udGFjdCBVcycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE15TmF2YmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGJhY2tncm91bmQ9XCJ3aGl0ZVwiPlxyXG4gICAgICB7LyogPEJveCBoZWlnaHQ9XCI0cHhcIiBiYWNrZ3JvdW5kPVwiYnJhbmRcIiBmbGV4PVwiZ3Jvd1wiPjwvQm94PiAgICAgICAqL31cclxuXHJcbiAgICAgIDxCb3ggYmFja2dyb3VuZD1cImJyYW5kXCIgZmlsbCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxCb3ggcGFkPXt7IHZlcnRpY2FsOiAneHNtYWxsJyB9fSB3aWR0aD1cInh4bGFyZ2VcIiBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgICAgPFRleHQgc2l6ZT1cIm1lZGl1bVwiPlBob2VuaXgsIEFyaXpvbmEgVVNBIC4gKDg4OCkgNjY2LTg5Mjk8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPE1haW5Db250ZW50PlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwiXCJcclxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgIHBhZD17eyBob3Jpem9udGFsOiAnbGFyZ2UnLCB2ZXJ0aWNhbDogJzEwMHB4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIzNDBweFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cImxhcmdlXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBbmNob3IgbGFiZWw9e2l0ZW0ubGFiZWx9IGNvbG9yPVwiZGFyay0xXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGxhYmVsPVwiR2V0IGEgcXVvdGUhXCIgcHJpbWFyeSAvPiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01haW5Db250ZW50PlxyXG5cclxuICAgICAgey8qIDxCb3ggaGVpZ2h0PVwiNHB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gICAgICAgKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=