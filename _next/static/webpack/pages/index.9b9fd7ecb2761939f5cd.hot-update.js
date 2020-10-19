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
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\my-footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MyFooter = function MyFooter() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "light-2",
    pad: {
      bottom: '40px',
      top: '100px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
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
      lineNumber: 12,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "small",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    color: "dark-4",
    size: "20em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    color: "dark-4",
    size: "20em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    margin: "xsmall",
    size: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, "Rapid Transport 2020 - Phoenix, Arizona USA . (88) 87445544"))));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1mb290ZXIudHN4Il0sIm5hbWVzIjpbIk15Rm9vdGVyIiwiYm90dG9tIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEIsU0FDQyxNQUFDLDJDQUFEO0FBQUssY0FBVSxFQUFDLFNBQWhCO0FBQTBCLE9BQUcsRUFBRTtBQUFFQyxZQUFNLEVBQUUsTUFBVjtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxPQUFHLEVBQUU7QUFBRUQsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLFNBQUcsRUFBRTtBQUF2QixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQWlDLFNBQUssRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFVLFNBQUssRUFBQyxRQUFoQjtBQUF5QixRQUFJLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyx1REFBRDtBQUFXLFNBQUssRUFBQyxRQUFqQjtBQUEwQixRQUFJLEVBQUMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQsQ0FERCxFQU9DLE1BQUMsMkNBQUQ7QUFBSyxVQUFNLEVBQUU7QUFBRUQsWUFBTSxFQUFFLFFBQVY7QUFBb0JDLFNBQUcsRUFBRTtBQUF6QixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVBELEVBV0MsTUFBQyw0Q0FBRDtBQUFNLFVBQU0sRUFBQyxRQUFiO0FBQXNCLFFBQUksRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQVhELENBREQsQ0FERCxDQUREO0FBcUJBLENBdEJEOztLQUFNRixRO0FBd0JTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjlmZDdlY2IyNzYxOTM5ZjVjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yLCBCb3gsIEZvb3RlciwgSGVhZGluZywgSW1hZ2UsIFRleHQgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IHsgRmFjZWJvb2ssIEhvbWUsIEluc3RhZ3JhbSB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xyXG5pbXBvcnQgTmF2YmFySXRlbXMgZnJvbSAnLi9uYXZiYXItaXRlbXMnO1xyXG5cclxuY29uc3QgTXlGb290ZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggYmFja2dyb3VuZD1cImxpZ2h0LTJcIiBwYWQ9e3sgYm90dG9tOiAnNDBweCcsIHRvcDogJzEwMHB4JyB9fT5cclxuXHRcdFx0PE1haW5Db250ZW50PlxyXG5cdFx0XHRcdDxCb3ggYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxCb3ggcGFkPXt7IGJvdHRvbTogJ25vbmUnLCB0b3A6ICdub25lJyB9fT5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJzbWFsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PEZhY2Vib29rIGNvbG9yPVwiZGFyay00XCIgc2l6ZT1cIjIwZW1cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxJbnN0YWdyYW0gY29sb3I9XCJkYXJrLTRcIiBzaXplPVwiMjBlbVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94IG1hcmdpbj17eyBib3R0b206ICdtZWRpdW0nLCB0b3A6ICczNXB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PE5hdmJhckl0ZW1zIC8+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHQ8VGV4dCBtYXJnaW49XCJ4c21hbGxcIiBzaXplPVwibWVkaXVtXCI+XHJcblx0XHRcdFx0XHRcdFJhcGlkIFRyYW5zcG9ydCAyMDIwIC0gUGhvZW5peCwgQXJpem9uYSBVU0EgLiAoODgpIDg3NDQ1NTQ0XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvTWFpbkNvbnRlbnQ+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=