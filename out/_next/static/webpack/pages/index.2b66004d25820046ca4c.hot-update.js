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
      horizontal: 'large',
      vertical: 'medium'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIml0ZW1zIiwibGFiZWwiLCJNeU5hdmJhciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImdyb3ciLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEWSxFQUlaO0FBQ0VBLE9BQUssRUFBRTtBQURULENBSlksRUFPWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQVBZLENBQWQ7O0FBWUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLENBREYsRUFLRSxNQUFDLDJDQUFEO0FBQ0UsYUFBUyxFQUFDLEtBRFo7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLGNBQVUsRUFBQyxFQUhiO0FBSUUsU0FBSyxFQUFDLFFBSlI7QUFLRSxPQUFHLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxPQUFkO0FBQXVCQyxjQUFRLEVBQUU7QUFBakMsS0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywyQ0FBRDtBQUFLLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU8sT0FBRyxFQUFDLGlCQUFYO0FBQTZCLFNBQUssRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixFQVdFLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsT0FBekI7QUFBaUMsU0FBSyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1QsTUFBQyw4Q0FBRDtBQUFRLFdBQUssRUFBRUEsSUFBSSxDQUFDTixLQUFwQjtBQUEyQixXQUFLLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBVixDQURILEVBSUUsTUFBQyw4Q0FBRDtBQUFRLFNBQUssRUFBQyxjQUFkO0FBQTZCLFdBQU8sTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBWEYsQ0FMRixDQUZGLENBREY7QUE4QkQsQ0EvQkQ7O0tBQU1DLFE7QUFpQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiNjYwMDRkMjU4MjAwNDZjYTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgQnV0dG9uLCBJbWFnZSwgTmF2IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ08gcXVlIGZhemVtb3M/JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQWJvdXQgVXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdDb250YWN0IFVzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTXlOYXZiYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmFja2dyb3VuZD1cIndoaXRlXCI+XHJcbiAgICAgIHsvKiA8Qm94IGhlaWdodD1cIjRweFwiIGJhY2tncm91bmQ9XCJicmFuZFwiIGZsZXg9XCJncm93XCI+PC9Cb3g+ICAgICAgICovfVxyXG4gICAgICA8Qm94IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICA8Qm94PlBob2VuaXgsIEFyaXpvbmEgVVNBPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94Pig4ODgpIDY2Ni04OTI5PC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIHdpZHRoPVwieGxhcmdlXCJcclxuICAgICAgICAgIGJhY2tncm91bmQ9XCJcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgcGFkPXt7IGhvcml6b250YWw6ICdsYXJnZScsIHZlcnRpY2FsOiAnbWVkaXVtJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIzNDBweFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cImxhcmdlXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBbmNob3IgbGFiZWw9e2l0ZW0ubGFiZWx9IGNvbG9yPVwiZGFyay0xXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJHZXQgYSBxdW90ZSFcIiBwcmltYXJ5IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIHsvKiA8Qm94IGhlaWdodD1cIjRweFwiIGJhY2tncm91bmQ9XCJicmFuZFwiIGZsZXg9XCJncm93XCI+PC9Cb3g+ICAgICAgICovfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9