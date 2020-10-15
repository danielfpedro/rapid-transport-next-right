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
      lineNumber: 18,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Phoenix, Arizona USA"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "(888) 666-8929")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    width: "xlarge",
    background: "",
    align: "center",
    pad: {
      horizontal: 'large'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: "340px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "large",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, items.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Anchor"], {
      label: item.label,
      color: "dark-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    });
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    label: "Get a quote!",
    primary: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIml0ZW1zIiwibGFiZWwiLCJNeU5hdmJhciIsImhvcml6b250YWwiLCJncm93IiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0VDLE9BQUssRUFBRTtBQURULENBRFksRUFJWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQUpZLEVBT1o7QUFDRUEsT0FBSyxFQUFFO0FBRFQsQ0FQWSxDQUFkOztBQVlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSxNQUFDLDJDQUFEO0FBQUssY0FBVSxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBb0IsV0FBTyxFQUFDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixDQURGLEVBS0UsTUFBQywyQ0FBRDtBQUNFLGFBQVMsRUFBQyxLQURaO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxjQUFVLEVBQUMsRUFIYjtBQUlFLFNBQUssRUFBQyxRQUpSO0FBS0UsT0FBRyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDJDQUFEO0FBQUssUUFBSSxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBTyxPQUFHLEVBQUMsaUJBQVg7QUFBNkIsU0FBSyxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBV0UsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFpQyxTQUFLLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFFQSxJQUFJLENBQUNMLEtBQXBCO0FBQTJCLFdBQUssRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFWLENBREgsRUFJRSxNQUFDLDhDQUFEO0FBQVEsU0FBSyxFQUFDLGNBQWQ7QUFBNkIsV0FBTyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FYRixDQUxGLENBRkYsQ0FERjtBQThCRCxDQS9CRDs7S0FBTUMsUTtBQWlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDM3ZDg4ZjEzMmI3M2YzNDk4OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQm94LCBCdXR0b24sIEltYWdlLCBOYXYgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnTyBxdWUgZmF6ZW1vcz8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdBYm91dCBVcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NvbnRhY3QgVXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuICAgICAgey8qIDxCb3ggaGVpZ2h0PVwiNHB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gICAgICAgKi99XHJcbiAgICAgIDxCb3ggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEJveCBkaXJlY3Rpb249XCJyb3dcIj5cclxuICAgICAgICAgIDxCb3g+UGhvZW5peCwgQXJpem9uYSBVU0E8L0JveD5cclxuICAgICAgICAgIDxCb3g+KDg4OCkgNjY2LTg5Mjk8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgd2lkdGg9XCJ4bGFyZ2VcIlxyXG4gICAgICAgICAgYmFja2dyb3VuZD1cIlwiXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBwYWQ9e3sgaG9yaXpvbnRhbDogJ2xhcmdlJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIzNDBweFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cImxhcmdlXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBbmNob3IgbGFiZWw9e2l0ZW0ubGFiZWx9IGNvbG9yPVwiZGFyay0xXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJHZXQgYSBxdW90ZSFcIiBwcmltYXJ5IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIHsvKiA8Qm94IGhlaWdodD1cIjRweFwiIGJhY2tncm91bmQ9XCJicmFuZFwiIGZsZXg9XCJncm93XCI+PC9Cb3g+ICAgICAgICovfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9