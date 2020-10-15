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
      vertical: 'small'
    },
    background: "blue",
    width: "xxlarge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "yellow",
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
      vertical: 'medium'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIml0ZW1zIiwibGFiZWwiLCJNeU5hdmJhciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImdyb3ciLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEWSxFQUlaO0FBQ0VBLE9BQUssRUFBRTtBQURULENBSlksRUFPWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQVBZLENBQWQ7O0FBWUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBd0IsUUFBSSxNQUE1QjtBQUE2QixTQUFLLEVBQUMsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBTSxPQUFHLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBWDtBQUFrQyxjQUFVLEVBQUMsTUFBN0M7QUFBb0QsU0FBSyxFQUFDLFNBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUssY0FBVSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsQ0FERixDQUhGLEVBU0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQVMsRUFBQyxLQURaO0FBRUUsUUFBSSxNQUZOO0FBR0UsY0FBVSxFQUFDLEVBSGI7QUFJRSxTQUFLLEVBQUMsUUFKUjtBQUtFLE9BQUcsRUFBRTtBQUFFQyxnQkFBVSxFQUFFLE9BQWQ7QUFBdUJELGNBQVEsRUFBRTtBQUFqQyxLQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDJDQUFEO0FBQUssUUFBSSxFQUFFO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBTyxPQUFHLEVBQUMsaUJBQVg7QUFBNkIsU0FBSyxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBV0UsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFpQyxTQUFLLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFFQSxJQUFJLENBQUNOLEtBQXBCO0FBQTJCLFdBQUssRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFWLENBREgsQ0FYRixDQURGLENBVEYsQ0FERjtBQWtDRCxDQW5DRDs7S0FBTUMsUTtBQXFDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmQ3NTM5ZWQ0YzI0NjcyNDcxMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQm94LCBCdXR0b24sIEltYWdlLCBOYXYsIFRleHQgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnTyBxdWUgZmF6ZW1vcz8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdBYm91dCBVcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NvbnRhY3QgVXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuICAgICAgey8qIDxCb3ggaGVpZ2h0PVwiNHB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gICAgICAgKi99XHJcblxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJicmFuZFwiIGZpbGwgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICA8Qm94ICBwYWQ9e3sgdmVydGljYWw6ICdzbWFsbCcgfX0gYmFja2dyb3VuZD1cImJsdWVcIiB3aWR0aD1cInh4bGFyZ2VcIj5cclxuICAgICAgICAgIDxCb3ggYmFja2dyb3VuZD1cInllbGxvd1wiPlBob2VuaXgsIEFyaXpvbmEgVVNBIC4gKDg4OCkgNjY2LTg5Mjk8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8TWFpbkNvbnRlbnQ+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGZpbGxcclxuICAgICAgICAgIGJhY2tncm91bmQ9XCJcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgcGFkPXt7IGhvcml6b250YWw6ICdsYXJnZScsIHZlcnRpY2FsOiAnbWVkaXVtJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIzNDBweFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cImxhcmdlXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBbmNob3IgbGFiZWw9e2l0ZW0ubGFiZWx9IGNvbG9yPVwiZGFyay0xXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGxhYmVsPVwiR2V0IGEgcXVvdGUhXCIgcHJpbWFyeSAvPiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01haW5Db250ZW50PlxyXG5cclxuICAgICAgey8qIDxCb3ggaGVpZ2h0PVwiNHB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gICAgICAgKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=