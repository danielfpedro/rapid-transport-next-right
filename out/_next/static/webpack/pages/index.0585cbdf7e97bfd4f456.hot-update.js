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
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Phoenix, Arizona USA"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "(888) 666-8929")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    width: "xlarge",
    background: "",
    align: "center",
    pad: {
      horizontal: 'large',
      vertical: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: "340px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "large",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, items.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Anchor"], {
      label: item.label,
      color: "dark-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIml0ZW1zIiwibGFiZWwiLCJNeU5hdmJhciIsInZlcnRpY2FsIiwiZ3JvdyIsImhvcml6b250YWwiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEWSxFQUlaO0FBQ0VBLE9BQUssRUFBRTtBQURULENBSlksRUFPWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQVBZLENBQWQ7O0FBWUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxhQUFTLEVBQUMsS0FEWjtBQUVFLE9BQUcsRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUZQO0FBR0UsY0FBVSxFQUFDLE9BSGI7QUFJRSxRQUFJLE1BSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMkNBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEYsRUFRRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsQ0FERixFQWFFLE1BQUMsMkNBQUQ7QUFDRSxhQUFTLEVBQUMsS0FEWjtBQUVFLFNBQUssRUFBQyxRQUZSO0FBR0UsY0FBVSxFQUFDLEVBSGI7QUFJRSxTQUFLLEVBQUMsUUFKUjtBQUtFLE9BQUcsRUFBRTtBQUFFQyxnQkFBVSxFQUFFLE9BQWQ7QUFBdUJGLGNBQVEsRUFBRTtBQUFqQyxLQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDJDQUFEO0FBQUssUUFBSSxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBTyxPQUFHLEVBQUMsaUJBQVg7QUFBNkIsU0FBSyxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBV0UsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFpQyxTQUFLLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFFQSxJQUFJLENBQUNOLEtBQXBCO0FBQTJCLFdBQUssRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFWLENBREgsQ0FYRixDQWJGLENBREYsQ0FERjtBQXFDRCxDQXRDRDs7S0FBTUMsUTtBQXdDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDU4NWNiZGY3ZTk3YmZkNGY0NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQm94LCBCdXR0b24sIEltYWdlLCBOYXYgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnTyBxdWUgZmF6ZW1vcz8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdBYm91dCBVcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NvbnRhY3QgVXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuICAgICAgPEJveCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgcGFkPXt7IHZlcnRpY2FsOiAnc21hbGwnIH19XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwiYnJhbmRcIlxyXG4gICAgICAgICAgZmlsbFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggZmxleD17eyBncm93OiAxIH19PjwvQm94PlxyXG4gICAgICAgICAgPEJveD5QaG9lbml4LCBBcml6b25hIFVTQTwvQm94PlxyXG4gICAgICAgICAgPEJveD4oODg4KSA2NjYtODkyOTwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHsvKiA8Qm94IGhlaWdodD1cIjRweFwiIGJhY2tncm91bmQ9XCJicmFuZFwiIGZsZXg9XCJncm93XCI+PC9Cb3g+ICAgICAgICovfVxyXG5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgd2lkdGg9XCJ4bGFyZ2VcIlxyXG4gICAgICAgICAgYmFja2dyb3VuZD1cIlwiXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBwYWQ9e3sgaG9yaXpvbnRhbDogJ2xhcmdlJywgdmVydGljYWw6ICdtZWRpdW0nIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveCBmbGV4PXt7IGdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiB3aWR0aD1cIjM0MHB4XCIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwibGFyZ2VcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEFuY2hvciBsYWJlbD17aXRlbS5sYWJlbH0gY29sb3I9XCJkYXJrLTFcIiAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgey8qIDxCdXR0b24gbGFiZWw9XCJHZXQgYSBxdW90ZSFcIiBwcmltYXJ5IC8+ICovfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICB7LyogPEJveCBoZWlnaHQ9XCI0cHhcIiBiYWNrZ3JvdW5kPVwiYnJhbmRcIiBmbGV4PVwiZ3Jvd1wiPjwvQm94PiAgICAgICAqL31cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==