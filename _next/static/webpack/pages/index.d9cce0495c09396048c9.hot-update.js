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
    background: "light-2",
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
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    background: "",
    align: "center",
    pad: {
      horizontal: 'large',
      vertical: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: "340px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "large",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, items.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Anchor"], {
      label: item.label,
      color: "dark-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main-content */ "./components/main-content.tsx");
/* harmony import */ var _components_my_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/my-footer */ "./components/my-footer.tsx");
/* harmony import */ var _components_my_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/my-gallery */ "./components/my-gallery.jsx");
/* harmony import */ var _components_my_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/my-navbar */ "./components/my-navbar.tsx");
/* harmony import */ var _components_our_job__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/our-job */ "./components/our-job.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Index = function Index() {
  var blocksPad = 'xlarge';
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "light-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_my_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_components_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_components_our_job__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundColor: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_my_gallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_components_contacts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), __jsx(_components_my_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiaXRlbXMiLCJsYWJlbCIsIk15TmF2YmFyIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiZ3JvdyIsIm1hcCIsIml0ZW0iLCJJbmRleCIsImJsb2Nrc1BhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0VDLE9BQUssRUFBRTtBQURULENBRFksRUFJWjtBQUNFQSxPQUFLLEVBQUU7QUFEVCxDQUpZLEVBT1o7QUFDRUEsT0FBSyxFQUFFO0FBRFQsQ0FQWSxDQUFkOztBQVlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSxNQUFDLDJDQUFEO0FBQUssY0FBVSxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLDJDQUFEO0FBQUssY0FBVSxFQUFDLFNBQWhCO0FBQTBCLFFBQUksTUFBOUI7QUFBK0IsU0FBSyxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUssT0FBRyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQVY7QUFBaUMsU0FBSyxFQUFDLFNBQXZDO0FBQWlELFNBQUssRUFBQyxLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsQ0FERixDQUhGLEVBUUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQVMsRUFB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ZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQm94LCBCdXR0b24sIEltYWdlLCBOYXYsIFRleHQgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnTyBxdWUgZmF6ZW1vcz8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdBYm91dCBVcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NvbnRhY3QgVXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuICAgICAgey8qIDxCb3ggaGVpZ2h0PVwiNHB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gICAgICAgKi99XHJcblxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJsaWdodC0yXCIgZmlsbCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxCb3ggcGFkPXt7IHZlcnRpY2FsOiAnc21hbGwnIH19IHdpZHRoPVwieHhsYXJnZVwiIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgICA8VGV4dCBzaXplPVwibWVkaXVtXCI+UGhvZW5peCwgQXJpem9uYSBVU0EgLiAoODg4KSA2NjYtODkyOTwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNYWluQ29udGVudD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgYmFja2dyb3VuZD1cIlwiXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBwYWQ9e3sgaG9yaXpvbnRhbDogJ2xhcmdlJywgdmVydGljYWw6ICczMHB4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggZmxleD17eyBncm93OiAxIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIzNDBweFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cImxhcmdlXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBbmNob3IgbGFiZWw9e2l0ZW0ubGFiZWx9IGNvbG9yPVwiZGFyay0xXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGxhYmVsPVwiR2V0IGEgcXVvdGUhXCIgcHJpbWFyeSAvPiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01haW5Db250ZW50PlxyXG5cclxuICAgICAgey8qIDxCb3ggaGVpZ2h0PVwiNHB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gICAgICAgKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7XHJcbiIsImltcG9ydCB7IEJveCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0cyc7XHJcbmltcG9ydCBGb2xsb3dVcyBmcm9tICcuLi9jb21wb25lbnRzL2ZvbGxvdy11cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLWNvbnRlbnQnO1xyXG5pbXBvcnQgTXlGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9teS1mb290ZXInO1xyXG5pbXBvcnQgTXlHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvbXktZ2FsbGVyeSc7XHJcbmltcG9ydCBNeU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL215LW5hdmJhcic7XHJcbmltcG9ydCBPdXJKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9vdXItam9iJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJsb2Nrc1BhZCA9ICd4bGFyZ2UnO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGJhY2tncm91bmQ9XCJsaWdodC0zXCI+XHJcbiAgICAgIDxNeU5hdmJhciAvPlxyXG5cclxuICAgICAgPEJveCBiYWNrZ3JvdW5kPVwiXCI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggYmFja2dyb3VuZD1cIndoaXRlXCI+XHJcbiAgICAgICAgPE1haW5Db250ZW50PlxyXG4gICAgICAgICAgPE91ckpvYiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9NYWluQ29udGVudD5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJibGFja1wiPlxyXG4gICAgICAgIDxNeUdhbGxlcnkgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJ3aGl0ZVwiPlxyXG4gICAgICAgIDxDb250YWN0cyAvPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHsvKiA8Qm94IGJhY2tncm91bmQ9XCJcIiBwYWQ9e3sgdmVydGljYWw6IGJsb2Nrc1BhZCB9fT5cclxuICAgICAgICAgIDxGb2xsb3dVcyAvPlxyXG4gICAgICAgIDwvQm94PiAqL31cclxuXHJcbiAgICAgIDxNeUZvb3RlciAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9